/**
 * Vue « Tableau »
 * ---------------
 * Surface d'écriture sur lignes Seyès (comme un cahier), en écriture cursive,
 * à projeter au tableau.
 *
 *  • L'écriture repose PILE sur la ligne d'écriture forte : le décalage du
 *    lignage est calculé en MESURANT la ligne de base réellement rendue
 *    (police + taille + marge intérieure comprises) — donc exact pour
 *    n'importe quelle police, une fois chargée.
 *  • Effet « stylo » : chaque lettre saisie se trace de gauche à droite.
 *  • Mise en valeur pour les leçons : surligner, changer la couleur d'un mot,
 *    souligner. On sélectionne le texte, puis on clique.
 *
 * Technique : une zone de saisie transparente (curseur visible) est posée
 * au-dessus d'un calque d'affichage identique qui, lui, porte le lignage, les
 * couleurs et le tracé. Le texte reste enregistré localement sur cet appareil.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ECRITURE_FONTS,
  fontCss,
  requestFullscreen,
  type EcritureFontId,
} from "../lib/board";

const KEY = "cj_tableau";
const PAD = 24; // marge intérieure (1.5rem) — comptée dans l'alignement

/** kind : "hl:#hex" (surlignage) · "col:#hex" (couleur) · "u" (souligné). */
interface Mark {
  start: number;
  end: number;
  kind: string;
}
interface Saved {
  text: string;
  marks: Mark[];
}

const SURLIGNEURS = [
  ["Jaune", "#fde68a"],
  ["Vert", "#bbf7d0"],
  ["Rose", "#fbcfe8"],
  ["Bleu", "#bfdbfe"],
] as const;
const COULEURS = [
  ["Noir", "#1c1917"],
  ["Rouge", "#dc2626"],
  ["Bleu", "#2563eb"],
  ["Vert", "#16a34a"],
] as const;

/** Mesure la ligne de base réellement rendue dans la 1ʳᵉ interligne. */
function measureBaseline(family: string, size: number, lineHeight: number): number {
  const probe = document.createElement("div");
  probe.style.cssText =
    `position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;` +
    `font-family:${family};font-size:${size}px;line-height:${lineHeight}px;margin:0;padding:0;`;
  probe.appendChild(document.createTextNode("nÉjpqhb"));
  const strut = document.createElement("span");
  strut.style.cssText = "display:inline-block;width:1px;height:0;vertical-align:baseline;";
  probe.appendChild(strut);
  document.body.appendChild(probe);
  const top = probe.getBoundingClientRect().top;
  const base = strut.getBoundingClientRect().top;
  document.body.removeChild(probe);
  return base - top; // distance haut-de-ligne → ligne de base
}

/** Styles cumulés à l'indice i (dernier surlignage / dernière couleur gagne). */
function styleAt(i: number, marks: Mark[]) {
  let hl = "", col = "", u = false;
  for (const m of marks) {
    if (i >= m.start && i < m.end) {
      if (m.kind.startsWith("hl:")) hl = m.kind.slice(3);
      else if (m.kind.startsWith("col:")) col = m.kind.slice(4);
      else if (m.kind === "u") u = true;
    }
  }
  return { hl, col, u };
}

/** Réajuste les marques quand le texte change (insertion / suppression). */
function adjustMarks(marks: Mark[], oldT: string, newT: string): Mark[] {
  if (oldT === newT) return marks;
  const min = Math.min(oldT.length, newT.length);
  let p = 0;
  while (p < min && oldT[p] === newT[p]) p++;
  let s = 0;
  while (s < min - p && oldT[oldT.length - 1 - s] === newT[newT.length - 1 - s]) s++;
  const changeStart = p;
  const changeEnd = oldT.length - s; // [changeStart, changeEnd) remplacé
  const shift = newT.length - oldT.length;
  const move = (pos: number) =>
    pos <= changeStart ? pos : pos >= changeEnd ? pos + shift : changeStart;
  return marks
    .map((m) => ({ ...m, start: move(m.start), end: move(m.end) }))
    .filter((m) => m.end > m.start);
}

export function TableauView() {
  const [fontId, setFontId] = useState<EcritureFontId>("caveat");
  const [size, setSize] = useState(44);
  const [trace, setTrace] = useState(true);
  const [text, setText] = useState("");
  const [marks, setMarks] = useState<Mark[]>([]);
  const [sel, setSel] = useState<[number, number]>([0, 0]);
  const frameRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  // Chargement (une fois).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return;
      if (raw.startsWith("{")) {
        const s = JSON.parse(raw) as Saved;
        setText(s.text ?? "");
        setMarks(Array.isArray(s.marks) ? s.marks : []);
      } else {
        setText(raw); // ancien format (texte brut)
      }
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (t: string, m: Mark[]) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ text: t, marks: m }));
    } catch {
      /* ignore */
    }
  };

  const onChange = (v: string) => {
    const m = adjustMarks(marks, text, v);
    setText(v);
    setMarks(m);
    persist(v, m);
  };

  const syncSel = () => {
    const ta = taRef.current;
    if (ta) setSel([ta.selectionStart, ta.selectionEnd]);
  };

  const applyKind = (kind: string) => {
    const [a, b] = sel;
    if (b <= a) return; // rien de sélectionné
    // Retire les marques de MÊME famille dans la zone, puis ajoute la nouvelle.
    const fam = kind.startsWith("hl:") ? "hl" : kind.startsWith("col:") ? "col" : "u";
    let next = marks.filter((m) => {
      const mf = m.kind.startsWith("hl:") ? "hl" : m.kind.startsWith("col:") ? "col" : "u";
      if (mf !== fam) return true;
      return m.end <= a || m.start >= b; // garde ce qui ne chevauche pas
    });
    // « noir » = couleur par défaut → simple effacement de couleur.
    const isDefault = kind === "col:#1c1917";
    if (!isDefault) next = [...next, { start: a, end: b, kind }];
    setMarks(next);
    persist(text, next);
    const ta = taRef.current;
    if (ta) requestAnimationFrame(() => { ta.focus(); ta.setSelectionRange(a, b); });
  };

  const clearStyle = () => {
    const [a, b] = sel;
    if (b <= a) return;
    const next = marks
      .flatMap((m): Mark[] => {
        if (m.end <= a || m.start >= b) return [m];
        const out: Mark[] = [];
        if (m.start < a) out.push({ ...m, end: a });
        if (m.end > b) out.push({ ...m, start: b });
        return out;
      })
      .filter((m) => m.end > m.start);
    setMarks(next);
    persist(text, next);
  };

  const clearAll = () => {
    if (window.confirm("Effacer le tableau ?")) {
      setText("");
      setMarks([]);
      persist("", []);
      taRef.current?.focus();
    }
  };

  const il = Math.round(size * 0.34);
  const lineHeight = il * 4;

  const [shiftPx, setShiftPx] = useState(0);
  useEffect(() => {
    let cancelled = false;
    const measure = () => {
      const baseline = measureBaseline(fontCss(fontId), size, lineHeight);
      const strongLineY = lineHeight - 1.5; // ligne forte = bas du bloc Seyès
      let shift = (PAD + baseline - strongLineY) % lineHeight;
      if (shift > lineHeight / 2) shift -= lineHeight;
      if (shift < -lineHeight / 2) shift += lineHeight;
      if (!cancelled) setShiftPx(Math.round(shift));
    };
    measure();
    if (document.fonts?.ready) void document.fonts.ready.then(() => !cancelled && measure());
    return () => { cancelled = true; };
  }, [fontId, size, lineHeight]);

  const typo: React.CSSProperties = {
    fontFamily: fontCss(fontId),
    fontSize: size,
    lineHeight: `${lineHeight}px`,
    padding: `${PAD}px`,
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    margin: 0,
    border: 0,
  };

  // Rendu du calque : texte posé (mise en forme) + lettre en cours de tracé.
  const display = useMemo(() => {
    const penOn = trace && text.length > 0 && !text.endsWith("\n");
    const settledEnd = penOn ? text.length - 1 : text.length;

    const nodes: React.ReactNode[] = [];
    let buf = "";
    let runStart = 0;
    let curKey: string | null = null;
    let curStyle: React.CSSProperties = {};
    const flush = () => {
      if (buf) nodes.push(<span key={runStart} style={curStyle}>{buf}</span>);
      buf = "";
    };
    for (let i = 0; i < settledEnd; i++) {
      const ch = text[i];
      if (ch === "\n") { flush(); nodes.push(<br key={`br${i}`} />); curKey = null; continue; }
      const s = styleAt(i, marks);
      const key = `${s.hl}|${s.col}|${s.u}`;
      if (key !== curKey) {
        flush();
        curKey = key;
        runStart = i;
        curStyle = {
          background: s.hl || undefined,
          color: s.col || undefined,
          textDecoration: s.u ? "underline" : undefined,
          borderRadius: s.hl ? "3px" : undefined,
        };
      }
      buf += ch;
    }
    flush();

    let pen: React.ReactNode = null;
    if (penOn) {
      const s = styleAt(text.length - 1, marks);
      pen = (
        <span
          key={text.length}
          className="trace-char"
          style={{
            background: s.hl || undefined,
            color: s.col || undefined,
            textDecoration: s.u ? "underline" : undefined,
            borderRadius: s.hl ? "3px" : undefined,
          }}
        >
          {text[text.length - 1]}
        </span>
      );
    }
    return { nodes, pen };
  }, [text, marks, trace]);

  const hasSel = sel[1] > sel[0];

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">Tableau</h1>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setTrace((t) => !t)}
            className={`btn-outline py-1 text-xs ${trace ? "!border-ink-500 !bg-ink-50 !text-ink-700 dark:!bg-ink-500/15 dark:!text-ink-200" : ""}`}
            title="Tracer chaque lettre comme au stylo"
          >
            ✍️ Tracé {trace ? "activé" : "désactivé"}
          </button>
          <select value={fontId} onChange={(e) => setFontId(e.target.value as EcritureFontId)} className="input w-auto py-1">
            {ECRITURE_FONTS.map((f) => (
              <option key={f.id} value={f.id}>{f.label}</option>
            ))}
          </select>
          <div className="flex items-center gap-1">
            <button onClick={() => setSize((s) => Math.max(20, s - 4))} className="btn-outline px-2 py-1">A−</button>
            <span className="w-8 text-center text-xs text-stone-500">{size}</span>
            <button onClick={() => setSize((s) => Math.min(120, s + 4))} className="btn-outline px-2 py-1">A+</button>
          </div>
          <button onClick={() => requestFullscreen(frameRef.current)} className="btn-outline py-1 text-xs">⛶ Plein écran</button>
          <button onClick={clearAll} className="btn-ghost py-1 text-xs text-rose-500">Effacer tout</button>
        </div>
      </div>

      {/* Barre de mise en valeur (pour les leçons) */}
      <div className={`mb-3 flex flex-wrap items-center gap-2 rounded-xl border border-stone-200 bg-white/60 px-3 py-2 dark:border-stone-700 dark:bg-stone-900/30 ${hasSel ? "" : "opacity-60"}`}>
        <span className="text-xs font-semibold text-stone-500">Surligner</span>
        {SURLIGNEURS.map(([lab, c]) => (
          <button key={c} title={lab} onClick={() => applyKind(`hl:${c}`)} className="h-6 w-6 rounded-md border border-stone-300 transition hover:scale-110" style={{ background: c }} />
        ))}
        <span className="ml-2 text-xs font-semibold text-stone-500">Couleur</span>
        {COULEURS.map(([lab, c]) => (
          <button key={c} title={lab} onClick={() => applyKind(`col:${c}`)} className="grid h-6 w-6 place-items-center rounded-md border border-stone-300 text-sm font-bold transition hover:scale-110" style={{ color: c }}>A</button>
        ))}
        <button onClick={() => applyKind("u")} title="Souligner" className="btn-outline px-2 py-1 text-sm underline">S</button>
        <button onClick={clearStyle} title="Enlever la mise en forme" className="btn-outline px-2 py-1 text-xs">Gomme</button>
        <span className="ml-auto text-xs text-stone-400">
          {hasSel ? "Applique à la sélection" : "Sélectionne un mot d’abord"}
        </span>
      </div>

      <p className="mb-3 text-sm text-stone-500 dark:text-stone-400">
        Écris comme au tableau : le texte suit les lignes du cahier (Seyès) et se
        trace lettre après lettre. Sélectionne un mot pour le surligner, le
        colorer ou le souligner. Enregistré sur cet appareil.
      </p>

      <div ref={frameRef} className="card overflow-auto bg-white p-0">
        <div className="relative">
          {/* Calque d'affichage (en flux, il donne la hauteur). */}
          <div
            aria-hidden
            className="seyes font-ecole relative min-h-[60vh] text-stone-900"
            style={{ ...typo, ["--il" as string]: `${il}px`, ["--seyes-shift" as string]: `${shiftPx}px` }}
          >
            {display.nodes}
            {display.pen}
            {text.length === 0 && (
              <span className="pointer-events-none text-stone-300">Écris ici…</span>
            )}
          </div>

          {/* Zone de saisie transparente posée par-dessus. */}
          <textarea
            ref={taRef}
            value={text}
            onChange={(e) => onChange(e.target.value)}
            onSelect={syncSel}
            onKeyUp={syncSel}
            onMouseUp={syncSel}
            spellCheck={false}
            className="absolute inset-0 h-full w-full resize-none bg-transparent text-transparent caret-ink-600 outline-none"
            style={typo}
          />
        </div>
      </div>
    </div>
  );
}
