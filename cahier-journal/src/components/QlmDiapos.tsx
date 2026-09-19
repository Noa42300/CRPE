/**
 * Diaporamas QLM du mardi (à projeter, interactifs)
 * -------------------------------------------------
 * - LireFriseDiapo : Histoire séq.1 séance 3 — « Lire une frise » (sens du
 *   temps, les 5 grandes périodes, se repérer avant/après).
 * - SolidesProprietesDiapo : Sciences séq.1 séance 3 — « Les solides ont-ils
 *   tous les mêmes propriétés ? » (comparer des matières).
 * - FriseCinqPeriodes : une frise imprimable A4 (dessin original, sans
 *   copyright) à afficher / coller.
 * Dessins maison (SVG + emojis), aucun visuel externe.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";

const HIST = "#b45309";   // ocre histoire
const SCI = "#0891b2";    // cyan sciences

/** Les 5 grandes périodes (ordre + couleur + repère de début). */
const PERIODES = [
  { nom: "Préhistoire", couleur: "#7c3aed", repere: "avant l'écriture" },
  { nom: "Antiquité", couleur: "#dc2626", repere: "l'écriture (–3000)" },
  { nom: "Moyen Âge", couleur: "#2563eb", repere: "la chute de Rome (476)" },
  { nom: "Temps modernes", couleur: "#16a34a", repere: "1492" },
  { nom: "Époque contemporaine", couleur: "#f59e0b", repere: "la Révolution (1789)" },
];

/** Frise horizontale des 5 périodes (SVG original). */
function FriseSVG({ big = false }: { big?: boolean }) {
  const W = 900, H = big ? 150 : 120;
  const x0 = 30, x1 = W - 30, y = big ? 70 : 60;
  const seg = (x1 - x0) / 5;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }}>
      {PERIODES.map((p, i) => (
        <g key={p.nom}>
          <rect x={x0 + i * seg} y={y - 18} width={seg} height={36} fill={p.couleur} opacity={0.85} stroke="#fff" strokeWidth={2} />
          <text x={x0 + i * seg + seg / 2} y={y + 5} textAnchor="middle" fontSize={big ? 15 : 13} fontWeight={800} fill="#fff">{p.nom}</text>
        </g>
      ))}
      {/* flèche du temps */}
      <line x1={x0} y1={y + 34} x2={x1} y2={y + 34} stroke="#111" strokeWidth={2.5} markerEnd="url(#frArrow)" />
      <defs>
        <marker id="frArrow" markerWidth="12" markerHeight="12" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#111" />
        </marker>
      </defs>
      <text x={x0} y={y + 52} fontSize={12} fill="#555">← il y a très longtemps (le passé)</text>
      <text x={x1} y={y + 52} textAnchor="end" fontSize={12} fill="#555">aujourd'hui →</text>
    </svg>
  );
}

/** Frise imprimable A4 (à afficher / coller). Contenu original. */
export function FriseCinqPeriodes() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "30px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>La frise des 5 grandes périodes</h1>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#555", margin: "0 0 6mm" }}>On lit de gauche (le passé) à droite (aujourd'hui).</p>
        <FriseSVG big />
        <div style={{ marginTop: "7mm", display: "flex", flexDirection: "column", gap: "2.5mm" }}>
          {PERIODES.map((p, i) => (
            <div key={p.nom} style={{ display: "flex", alignItems: "center", gap: "3mm", fontSize: "14px" }}>
              <span style={{ width: "7mm", height: "7mm", background: p.couleur, borderRadius: "2px", display: "inline-block" }} />
              <b>{i + 1}. {p.nom}</b> <span style={{ color: "#666" }}>— commence à {p.repere}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const LF_ETAPES = ["La frise", "Le sens du temps", "Les 5 périodes", "Je me repère", "Bravo"];

function RevealQ({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="w-full rounded-2xl border-2 bg-white p-4 text-left transition hover:scale-[1.02]" style={{ borderColor: accent }} title="Cliquer pour révéler">
      <div className="text-lg font-bold" style={{ color: accent }}>{q}</div>
      <div className={`mt-1 text-lg font-semibold ${on ? "" : "opacity-0"}`} style={{ color: "#334155" }}>{on ? `→ ${a}` : "?"}</div>
    </button>
  );
}

export function LireFriseDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = LF_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: HIST }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Histoire · Lire une frise</span>
        <div className="ml-2 flex gap-1.5">{LF_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>

      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🕰️📜</div>
            <h1 className="text-5xl font-extrabold" style={{ color: HIST }}>Lire une frise du temps</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Une frise, c'est une ligne du temps.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full text-center">
            <h2 className="mb-4 text-4xl font-extrabold" style={{ color: HIST }}>Le sens du temps</h2>
            <div className="mx-auto max-w-3xl"><FriseSVG /></div>
            <p className="mt-4 text-2xl font-semibold text-stone-600">On lit de <b>gauche</b> (le passé) vers la <b>droite</b> (aujourd'hui).</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Les 5 grandes périodes</h2>
            <div className="mx-auto mt-4 max-w-3xl"><FriseSVG /></div>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {PERIODES.map((p, k) => (
                <span key={p.nom} className="rounded-full px-3 py-1 text-sm font-bold text-white" style={{ background: p.couleur }}>{k + 1}. {p.nom}</span>
              ))}
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>Je me repère</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <RevealQ q="Qu'y a-t-il AVANT le Moyen Âge ?" a="l'Antiquité" accent={HIST} />
              <RevealQ q="Qu'y a-t-il APRÈS l'Antiquité ?" a="le Moyen Âge" accent={HIST} />
              <RevealQ q="Quelle est la 1re période ?" a="la Préhistoire" accent={HIST} />
              <RevealQ q="Dans quelle période vivons-nous ?" a="l'Époque contemporaine" accent={HIST} />
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-4 text-7xl">🎉</div>
            <h1 className="text-5xl font-extrabold" style={{ color: HIST }}>Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Je sais lire une frise et nommer les 5 grandes périodes.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: HIST, color: HIST }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{LF_ETAPES.length} · {LF_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: HIST }}>▶</button>
      </div>
    </div>
  );
}

/* ================= Sciences — Les solides ont-ils tous les mêmes propriétés ? ================= */

const SP_ETAPES = ["La question", "Nos objets", "On teste", "On classe", "Bilan"];
const OBJETS = [
  { emoji: "🧽", nom: "une éponge", prop: "mou, léger" },
  { emoji: "🪵", nom: "le bois", prop: "dur, rugueux" },
  { emoji: "🎨", nom: "la pâte à modeler", prop: "mou, se déforme" },
  { emoji: "🪨", nom: "une pierre", prop: "dur, lourd" },
  { emoji: "🔩", nom: "le métal", prop: "dur, lisse, froid" },
];

function ObjetCard({ emoji, nom, prop }: { emoji: string; nom: string; prop: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-3 transition hover:scale-105" style={{ borderColor: SCI }} title="Cliquer pour révéler">
      <span className="text-5xl leading-none">{emoji}</span>
      <span className="text-lg font-extrabold" style={{ color: SCI }}>{nom}</span>
      <span className={`text-base font-semibold ${on ? "" : "opacity-0"}`} style={{ color: "#334155" }}>{on ? prop : "?"}</span>
    </button>
  );
}

export function SolidesProprietesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = SP_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: SCI }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Sciences · Les solides</span>
        <div className="ml-2 flex gap-1.5">{SP_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>

      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🧽🪵🪨🔩</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: SCI }}>Les solides ont-ils tous les mêmes propriétés ?</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Tous solides… mais pareils ?</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: SCI }}>Nos objets</h2>
            <p className="mt-1 text-xl text-stone-500">Devine leurs propriétés, puis clique.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {OBJETS.map((o) => <ObjetCard key={o.nom} {...o} />)}
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: SCI }}>On teste avec nos mains</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 text-left text-xl text-stone-700">
              <p>✋ dur ou mou ?</p>
              <p>🤏 se déforme ou pas ?</p>
              <p>👀 lisse ou rugueux ?</p>
              <p>⚖️ lourd ou léger ?</p>
            </div>
            <p className="mt-4 text-lg text-stone-500">On touche, on appuie, on observe… mais un solide garde toujours sa forme.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: SCI }}>On classe</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <RevealQ q="Quels objets sont DURS ?" a="le bois, la pierre, le métal" accent={SCI} />
              <RevealQ q="Quels objets sont MOUS ?" a="l'éponge, la pâte à modeler" accent={SCI} />
              <RevealQ q="Lequel se DÉFORME et garde sa forme ?" a="la pâte à modeler" accent={SCI} />
              <RevealQ q="Lequel est le plus LOURD ?" a="la pierre (ou le métal)" accent={SCI} />
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-4 text-7xl">🔬</div>
            <h1 className="text-4xl font-extrabold" style={{ color: SCI }}>Ce qu'on retient</h1>
            <p className="mt-3 max-w-2xl text-2xl font-semibold text-stone-600">Tous les solides gardent leur forme, mais ils n'ont pas les mêmes propriétés : dur ou mou, lisse ou rugueux, lourd ou léger.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: SCI, color: SCI }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{SP_ETAPES.length} · {SP_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: SCI }}>▶</button>
      </div>
    </div>
  );
}
