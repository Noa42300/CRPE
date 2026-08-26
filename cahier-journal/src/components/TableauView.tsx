/**
 * Vue « Tableau »
 * ---------------
 * Surface d'écriture sur lignes Seyès (comme un cahier), en écriture cursive,
 * à projeter au tableau.
 *
 * Deux finesses :
 *  • l'écriture repose PILE sur la ligne d'écriture forte (réglage --seyes-shift
 *    par police) ;
 *  • effet « stylo » : chaque lettre saisie se TRACE de gauche à droite au lieu
 *    d'apparaître d'un coup, pour montrer aux élèves le geste à prendre.
 *
 * Technique : une zone de saisie transparente (le curseur reste visible) est
 * posée au-dessus d'un calque d'affichage identique. La saisie reste donc
 * parfaitement fiable ; seul le rendu est embelli. Le texte est conservé
 * localement sur cet appareil.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ECRITURE_FONTS,
  fontCss,
  requestFullscreen,
  type EcritureFontId,
} from "../lib/board";

const KEY = "cj_tableau";

/**
 * Calcule, à partir des métriques réelles de la police effectivement rendue,
 * le décalage à donner au lignage pour que la ligne d'écriture forte passe
 * EXACTEMENT sous l'écriture (indépendant de la police, y compris une fois
 * Caveat/Dancing chargées). Retombe sur une estimation si l'API n'est pas là.
 */
function baselineShift(family: string, size: number, lineHeight: number): number {
  try {
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return 0;
    ctx.font = `${size}px ${family}`;
    const m = ctx.measureText("Hxgpdéf");
    const asc = m.fontBoundingBoxAscent ?? m.actualBoundingBoxAscent ?? size * 0.8;
    const desc = m.fontBoundingBoxDescent ?? m.actualBoundingBoxDescent ?? size * 0.2;
    const baselineFromTop = (lineHeight - (asc + desc)) / 2 + asc;
    const strongLineY = lineHeight - 1.5; // ligne forte = bas du bloc Seyès
    return Math.round(baselineFromTop - strongLineY);
  } catch {
    return 0;
  }
}

export function TableauView() {
  const [fontId, setFontId] = useState<EcritureFontId>("caveat");
  const [size, setSize] = useState(44);
  const [trace, setTrace] = useState(true);
  const [text, setText] = useState("");
  const frameRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  // Charge le contenu sauvegardé (une seule fois).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setText(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const onChange = (v: string) => {
    setText(v);
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* ignore */
    }
  };

  const clear = () => {
    if (window.confirm("Effacer le tableau ?")) {
      onChange("");
      taRef.current?.focus();
    }
  };

  const il = Math.round(size * 0.34); // interligne dérivé de la taille
  const lineHeight = il * 4;

  // Décalage du lignage recalculé selon la police rendue (et re-mesuré quand
  // les polices web finissent de charger).
  const [shiftPx, setShiftPx] = useState(0);
  useEffect(() => {
    const measure = () => setShiftPx(baselineShift(fontCss(fontId), size, lineHeight));
    measure();
    let cancelled = false;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      void document.fonts.ready.then(() => { if (!cancelled) measure(); });
    }
    return () => { cancelled = true; };
  }, [fontId, size, lineHeight]);

  // Typographie partagée par la zone de saisie et le calque d'affichage :
  // les deux doivent se superposer au pixel près.
  const typo: React.CSSProperties = {
    fontFamily: fontCss(fontId),
    fontSize: size,
    lineHeight: `${lineHeight}px`,
    padding: "1.5rem",
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    margin: 0,
    border: 0,
  };

  // Le texte « posé » (rendu d'un bloc, ligatures cursives préservées) et la
  // dernière lettre en cours de tracé (animée). À la frappe suivante, cette
  // lettre rejoint le texte posé et la nouvelle lettre se trace à son tour.
  const { settled, pen } = useMemo(() => {
    if (!trace || text.length === 0 || text.endsWith("\n")) {
      return { settled: text, pen: null as string | null };
    }
    return { settled: text.slice(0, -1), pen: text.slice(-1) };
  }, [text, trace]);

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
          <button onClick={clear} className="btn-ghost py-1 text-xs text-rose-500">Effacer</button>
        </div>
      </div>
      <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
        Écris ici comme sur le tableau : le texte suit les lignes du cahier
        (Seyès) et se trace lettre après lettre, pour montrer le geste. Le
        contenu est enregistré sur cet appareil.
      </p>

      <div ref={frameRef} className="card overflow-auto bg-white p-0">
        <div className="relative">
          {/* Calque d'affichage (en flux, il donne la hauteur) : lignage Seyès
              + écriture tracée. */}
          <div
            aria-hidden
            className="seyes font-ecole relative min-h-[60vh] text-stone-900"
            style={{ ...typo, ["--il" as string]: `${il}px`, ["--seyes-shift" as string]: `${shiftPx}px` }}
          >
            {settled}
            {pen !== null && (
              <span key={text.length} className="trace-char">{pen}</span>
            )}
            {text.length === 0 && (
              <span className="pointer-events-none text-stone-300">Écris ici…</span>
            )}
          </div>

          {/* Zone de saisie transparente posée par-dessus : le curseur reste
              visible et net, la saisie parfaitement fiable. */}
          <textarea
            ref={taRef}
            value={text}
            onChange={(e) => onChange(e.target.value)}
            spellCheck={false}
            className="absolute inset-0 h-full w-full resize-none bg-transparent text-transparent caret-ink-600 outline-none"
            style={typo}
          />
        </div>
      </div>
    </div>
  );
}
