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
import { WikiImage } from "./WikiImage";

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
            <p className="mt-4 text-2xl font-semibold text-stone-600">Plus on va à <b>gauche</b>, plus c'est <b>lointain</b> ; plus on va à <b>droite</b>, plus on se rapproche d'<b>aujourd'hui</b>.</p>
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
  { wiki: "Éponge", emoji: "🧽", nom: "une éponge", prop: "mou, léger" },
  { wiki: "Bois", emoji: "🪵", nom: "le bois", prop: "dur, rugueux" },
  { wiki: "Pâte à modeler", emoji: "🎨", nom: "la pâte à modeler", prop: "mou, se déforme" },
  { wiki: "Roche", emoji: "🪨", nom: "une pierre", prop: "dur, lourd" },
  { wiki: "Métal", emoji: "🔩", nom: "le métal", prop: "dur, lisse, froid" },
];

function ObjetCard({ wiki, nom, prop }: { wiki: string; emoji: string; nom: string; prop: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-2 transition hover:scale-105" style={{ borderColor: SCI }} title="Cliquer pour révéler">
      <div className="w-full"><WikiImage title={wiki} alt={nom} accent={SCI} height="clamp(90px,16vh,150px)" /></div>
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

/* ===== Dessins originaux (libres de droits) pour chaque grande période ===== */
function PeriodDrawing({ id, size = 54 }: { id: string; size?: number }) {
  const c = { width: size, height: size, display: "block" as const };
  if (id === "prehistoire") return (
    <svg viewBox="0 0 48 48" style={c}>
      <path d="M12 14 q2 -8 8 -8 q6 0 8 7" fill="#5b3a1a" />
      <circle cx="20" cy="17" r="7" fill="#f2c79a" stroke="#7c3aed" strokeWidth="1.5" />
      <circle cx="18" cy="17" r="1" fill="#4b2e12" /><circle cx="22" cy="17" r="1" fill="#4b2e12" />
      <path d="M14 42 L16 26 Q20 23 24 26 L26 42 Z" fill="#8b5e34" stroke="#7c3aed" strokeWidth="1" />
      <line x1="26" y1="24" x2="39" y2="12" stroke="#6b4423" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="11" r="4" fill="#6b4423" />
    </svg>
  );
  if (id === "antiquite") return (
    <svg viewBox="0 0 48 48" style={c}>
      <path d="M7 17 L24 6 L41 17 Z" fill="#dc2626" />
      <rect x="9" y="17" width="30" height="4" fill="#ef4444" />
      {[13, 22, 31].map((x) => <rect key={x} x={x} y="21" width="4" height="18" fill="#f3d9a0" stroke="#dc2626" strokeWidth="1" />)}
      <rect x="8" y="39" width="32" height="3" fill="#dc2626" />
    </svg>
  );
  if (id === "moyenage") return (
    <svg viewBox="0 0 48 48" style={c}>
      <rect x="14" y="16" width="20" height="26" fill="#93b4d6" stroke="#2563eb" strokeWidth="1.5" />
      {[14, 22, 30].map((x) => <rect key={x} x={x} y="11" width="4" height="6" fill="#2563eb" />)}
      <path d="M20 42 L20 31 Q24 27 28 31 L28 42 Z" fill="#1e3a8a" />
      <line x1="24" y1="11" x2="24" y2="3" stroke="#1e3a8a" strokeWidth="1.5" />
      <path d="M24 4 L33 6.5 L24 9 Z" fill="#dc2626" />
    </svg>
  );
  if (id === "moderne") return (
    <svg viewBox="0 0 48 48" style={c}>
      <path d="M4 37 q6 3 11 0 q5 -3 11 0 q6 3 11 0 v7 H4 Z" fill="#60a5fa" />
      <line x1="24" y1="10" x2="24" y2="33" stroke="#6b4423" strokeWidth="2" />
      <path d="M24 12 L35 30 L24 30 Z" fill="#ecfdf5" stroke="#16a34a" strokeWidth="1.2" />
      <path d="M24 12 L13 30 L24 30 Z" fill="#d1fae5" stroke="#16a34a" strokeWidth="1.2" />
      <path d="M12 33 L36 33 L32 40 L16 40 Z" fill="#6b4423" stroke="#166534" strokeWidth="1" />
    </svg>
  );
  // contemporaine — Tour Eiffel
  return (
    <svg viewBox="0 0 48 48" style={c}>
      <path d="M24 5 L17 43 M24 5 L31 43" stroke="#f59e0b" strokeWidth="2" fill="none" />
      <path d="M15 43 Q24 31 33 43" stroke="#f59e0b" strokeWidth="2" fill="none" />
      <line x1="21.8" y1="13" x2="26.2" y2="13" stroke="#f59e0b" strokeWidth="1.5" />
      <line x1="20" y1="24" x2="28" y2="24" stroke="#f59e0b" strokeWidth="1.5" />
      <line x1="18" y1="34" x2="30" y2="34" stroke="#f59e0b" strokeWidth="1.5" />
    </svg>
  );
}

const LF_PERIODES = [
  { id: "prehistoire", nom: "Préhistoire", couleur: "#7c3aed", date: "il y a très longtemps" },
  { id: "antiquite", nom: "Antiquité", couleur: "#dc2626", date: "–3000 (l'écriture)" },
  { id: "moyenage", nom: "Moyen Âge", couleur: "#2563eb", date: "476" },
  { id: "moderne", nom: "Temps modernes", couleur: "#16a34a", date: "1492" },
  { id: "contemporaine", nom: "Époque contemporaine", couleur: "#f59e0b", date: "1789 → aujourd'hui" },
];

/** Leçon illustrée « Lire une frise » (A4) — frise intégrée + dessins maison. */
export function LireFriseLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "38px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive" }}>Lire une frise du temps</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 0 5mm", fontFamily: "'Caveat','Comic Neue',cursive", color: "#555" }}>Je lis de gauche (le passé) → à droite (aujourd'hui)</p>

        {/* La frise illustrée */}
        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "1mm" }}>
          {LF_PERIODES.map((p) => (
            <div key={p.id} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <PeriodDrawing id={p.id} size={62} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", border: "2px solid #111", borderRadius: "3px", overflow: "hidden" }}>
          {LF_PERIODES.map((p) => (
            <div key={p.id} style={{ flex: 1, background: p.couleur, color: "#fff", textAlign: "center", padding: "3mm 1mm", fontWeight: 800, fontSize: "12.5px", borderRight: "1px solid rgba(255,255,255,.6)" }}>
              {p.nom}
            </div>
          ))}
        </div>
        {/* flèche du temps + dates */}
        <div style={{ position: "relative", height: "8mm", margin: "1mm 0 4mm" }}>
          <div style={{ position: "absolute", top: "3mm", left: 0, right: 0, height: "2px", background: "#111" }} />
          <div style={{ position: "absolute", top: "1.2mm", right: "-1mm", width: 0, height: 0, borderLeft: "4mm solid #111", borderTop: "2mm solid transparent", borderBottom: "2mm solid transparent" }} />
          <div style={{ display: "flex" }}>
            {LF_PERIODES.map((p) => (
              <div key={p.id} style={{ flex: 1, textAlign: "center", fontSize: "10px", color: "#555", paddingTop: "5mm" }}>{p.date}</div>
            ))}
          </div>
        </div>

        <div style={{ background: "#fff7ed", border: "1.5px solid #fed7aa", borderRadius: "8px", padding: "3mm 4mm", marginBottom: "4mm", fontSize: "15px" }}>
          <b>Comment je lis une frise&nbsp;?</b> Une frise, c'est une <b>ligne du temps</b>. <b>Plus on est à gauche, plus c'est lointain</b> (il y a longtemps)&nbsp;; <b>plus on est à droite, plus on se rapproche du présent</b> (aujourd'hui). Chaque grande période a sa <b>couleur</b> et son <b>dessin</b>.
        </div>

        {/* Les 5 périodes détaillées avec dessin */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3mm" }}>
          {LF_PERIODES.map((p, i) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "3mm", border: `2px solid ${p.couleur}`, borderRadius: "8px", padding: "2mm 3mm" }}>
              <PeriodDrawing id={p.id} size={40} />
              <div style={{ fontSize: "16px", fontWeight: 800, color: p.couleur, minWidth: "52mm" }}>{i + 1}. {p.nom}</div>
              <div style={{ fontSize: "13px", color: "#555" }}>commence à {p.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Leçon illustrée « Les solides » (A4) — vraies photos libres de droits (Wikimedia). */
const SP_MATIERES = [
  { wiki: "Éponge", nom: "l'éponge", prop: "molle et légère" },
  { wiki: "Bois", nom: "le bois", prop: "dur et rugueux" },
  { wiki: "Pâte à modeler", nom: "la pâte à modeler", prop: "molle, elle se déforme" },
  { wiki: "Roche", nom: "la pierre", prop: "dure et lourde" },
  { wiki: "Métal", nom: "le métal", prop: "dur, lisse et froid" },
];

export function SolidesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "34px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: SCI, fontFamily: "'Caveat','Comic Neue',cursive" }}>Les solides n'ont pas tous les mêmes propriétés</h1>
        <p style={{ textAlign: "center", fontSize: "17px", margin: "0 0 5mm", fontFamily: "'Caveat','Comic Neue',cursive", color: "#555" }}>Tous gardent leur forme… mais ils sont différents !</p>

        <div style={{ background: "#ecfeff", border: "1.5px solid #a5f3fc", borderRadius: "8px", padding: "3mm 4mm", marginBottom: "5mm", fontSize: "15px" }}>
          Un <b>solide</b> garde toujours sa forme quand on le déplace. Mais chaque matière a ses <b>propriétés</b> : elle peut être <b>dure ou molle</b>, <b>lisse ou rugueuse</b>, <b>lourde ou légère</b>.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm", flex: 1, alignContent: "start" }}>
          {SP_MATIERES.map((m) => (
            <div key={m.wiki} style={{ border: `2px solid ${SCI}`, borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <WikiImage title={m.wiki} alt={m.nom} accent={SCI} height="38mm" />
              <div style={{ padding: "2.5mm 3mm" }}>
                <div style={{ fontSize: "17px", fontWeight: 800, color: SCI }}>{m.nom}</div>
                <div style={{ fontSize: "14px", color: "#333" }}>→ {m.prop}</div>
              </div>
            </div>
          ))}
          <div style={{ border: "2px dashed #94a3b8", borderRadius: "10px", padding: "3mm 4mm", display: "flex", flexDirection: "column", justifyContent: "center", fontSize: "15px", background: "#f8fafc" }}>
            <b style={{ color: "#0e7490" }}>Je retiens</b>
            <span style={{ marginTop: "1.5mm" }}>Un solide garde sa forme, mais chaque matière a ses propres propriétés (dur/mou, lisse/rugueux, lourd/léger).</span>
          </div>
        </div>
        <p style={{ fontSize: "10px", color: "#94a3b8", textAlign: "center", marginTop: "3mm" }}>Photos : Wikipédia / Wikimedia Commons (libres de droits, chargées en ligne).</p>
      </div>
    </div>
  );
}
