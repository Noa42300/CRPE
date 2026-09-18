/**
 * Histoire — « Comment mesure-t-on le temps ? » (séance 2, Questionner le monde)
 * -----------------------------------------------------------------------------
 * Deux supports :
 *  1. <MesurerTempsDiapo/> : diaporama projetable et interactif (cartes à
 *     révéler, frise animée). Vraies photos libres de droits (Wikimedia via
 *     <WikiImage/>, chargées en ligne). Bouton plein écran.
 *  2. <FriseUnitesTemps/> : la FRISE DES UNITÉS de temps, en SVG (du jour au
 *     millénaire), imprimable A4 (paysage) et réutilisée dans le diaporama.
 */
import { useRef, useState } from "react";
import { Picto } from "./pictos";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";

const OR = "#b45309";
const BLEU = "#1d4ed8";

/* ---- La frise des unités de temps (SVG réutilisable) ---- */
const UNITES = [
  { label: "le jour", detail: "24 heures", couleur: "#f59e0b" },
  { label: "la semaine", detail: "7 jours", couleur: "#10b981" },
  { label: "le mois", detail: "28 à 31 jours", couleur: "#0ea5e9" },
  { label: "l'année", detail: "365 jours · 12 mois", couleur: "#6366f1" },
  { label: "la décennie", detail: "10 ans", couleur: "#a855f7" },
  { label: "le siècle", detail: "100 ans", couleur: "#ec4899" },
  { label: "le millénaire", detail: "1 000 ans", couleur: "#ef4444" },
];

/** La frise seule (SVG) — grande, horizontale, traits épais. Réutilisable partout. */
export function FriseSVG() {
  const W = 1120;
  const H = 360;
  const n = UNITES.length;
  const marginX = 60;
  const usable = W - marginX * 2;
  const step = usable / (n - 1);
  const axisY = 180;
  const boxW = 168, boxH = 88;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" aria-label="Frise des unités de temps, du jour au millénaire">
      <defs>
        <marker id="frise-arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#111" />
        </marker>
      </defs>
      {/* axe horizontal épais avec flèche « du plus petit au plus grand » */}
      <line x1={marginX - 24} y1={axisY} x2={W - marginX + 30} y2={axisY} stroke="#111" strokeWidth={9} strokeLinecap="round" markerEnd="url(#frise-arrow)" />
      <text x={marginX - 26} y={axisY - 22} fontSize={24} fontWeight={800} fill="#777" fontFamily="'Caveat','Comic Neue',cursive">petit</text>
      <text x={W - marginX - 24} y={axisY - 22} fontSize={24} fontWeight={800} fill="#777" fontFamily="'Caveat','Comic Neue',cursive">grand</text>
      {UNITES.map((u, k) => {
        const x = marginX + step * k;
        const up = k % 2 === 0; // alterne au-dessus / au-dessous pour aérer
        return (
          <g key={u.label}>
            <line x1={x} y1={axisY} x2={x} y2={up ? axisY - 30 : axisY + 30} stroke={u.couleur} strokeWidth={5} />
            <circle cx={x} cy={axisY} r={16} fill={u.couleur} stroke="#111" strokeWidth={4} />
            <rect x={x - boxW / 2} y={up ? axisY - 30 - boxH : axisY + 30} width={boxW} height={boxH} rx={14} fill="#fff" stroke={u.couleur} strokeWidth={5} />
            <text x={x} y={up ? axisY - 30 - boxH + 40 : axisY + 30 + 40} textAnchor="middle" fontSize={30} fontWeight={800} fill="#111" fontFamily="'Caveat','Comic Neue',cursive">{u.label}</text>
            <text x={x} y={up ? axisY - 30 - boxH + 68 : axisY + 30 + 68} textAnchor="middle" fontSize={19} fontWeight={700} fill={u.couleur} fontFamily="'Caveat','Comic Neue',cursive">{u.detail}</text>
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Frise des unités de temps.
 *  - sans `print` : la frise seule (utilisée dans le diaporama).
 *  - `print` : une feuille A4 avec la frise RECOPIÉE 3 FOIS (une par élève /
 *    binôme, à découper) — économise le papier.
 */
export function FriseUnitesTemps({ print = false }: { print?: boolean }) {
  if (!print) return <FriseSVG />;
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "10mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "3mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
        <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>La frise des unités de temps</h1>
        <span style={{ fontSize: "13px", color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· CE1-CE2 · à découper &amp; coller</span>
      </div>
      {[0, 1, 2].map((k) => (
        <div key={k}>
          <div style={{ padding: "2mm 0" }}><FriseSVG /></div>
          {k < 2 && (
            <div style={{ borderTop: "2px dashed #94a3b8", position: "relative", height: 0, margin: "3mm 0" }}>
              <span style={{ position: "absolute", left: "8mm", top: "-3mm", background: "#fff", padding: "0 2mm", fontSize: "11px", color: "#94a3b8" }}>✂ — — — — — — — — — — — — — — — —</span>
            </div>
          )}
        </div>
      ))}
      <p style={{ marginTop: "3mm", fontSize: "12px", color: "#333" }}>
        Je découpe ma frise et je la colle dans mon cahier de Questionner le monde&nbsp;:
        <b> 1 décennie = 10 ans</b>, <b>1 siècle = 100 ans</b>, <b>1 millénaire = 1 000 ans</b>.
      </p>
    </div>
  );
}

/* ---- Petits dessins « faits main » (originaux, façon cahier) ---- */
function Soleil() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return <line key={i} x1={23 + Math.cos(a) * 13} y1={23 + Math.sin(a) * 13} x2={23 + Math.cos(a) * 20} y2={23 + Math.sin(a) * 20} stroke="#f59e0b" strokeWidth={3} strokeLinecap="round" />;
      })}
      <circle cx="23" cy="23" r="11" fill="#fde68a" stroke="#f59e0b" strokeWidth={3} />
    </svg>
  );
}
function Sablier() {
  return (
    <svg width="40" height="46" viewBox="0 0 40 46" aria-hidden="true">
      <path d="M8 6 H32 L20 23 Z" fill="#bae6fd" stroke="#0369a1" strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M8 40 H32 L20 23 Z" fill="#bae6fd" stroke="#0369a1" strokeWidth={2.5} strokeLinejoin="round" />
      <line x1="6" y1="6" x2="34" y2="6" stroke="#0369a1" strokeWidth={3} strokeLinecap="round" />
      <line x1="6" y1="40" x2="34" y2="40" stroke="#0369a1" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}
function Horloge() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
      <circle cx="23" cy="24" r="16" fill="#fff" stroke="#111" strokeWidth={3} />
      <line x1="23" y1="24" x2="23" y2="14" stroke="#e11d48" strokeWidth={3} strokeLinecap="round" />
      <line x1="23" y1="24" x2="31" y2="27" stroke="#111" strokeWidth={3} strokeLinecap="round" />
      <line x1="23" y1="5" x2="23" y2="9" stroke="#111" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}
function Calendrier() {
  return (
    <svg width="44" height="46" viewBox="0 0 44 46" aria-hidden="true">
      <rect x="6" y="9" width="32" height="30" rx="4" fill="#fff" stroke="#111" strokeWidth={3} />
      <rect x="6" y="9" width="32" height="9" rx="4" fill="#f472b6" stroke="#111" strokeWidth={3} />
      <line x1="14" y1="5" x2="14" y2="13" stroke="#111" strokeWidth={3} strokeLinecap="round" />
      <line x1="30" y1="5" x2="30" y2="13" stroke="#111" strokeWidth={3} strokeLinecap="round" />
      {[24, 30, 36].flatMap((y) => [13, 22, 31].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.7" fill="#94a3b8" />))}
    </svg>
  );
}

/**
 * Leçon à coller « Comment mesure-t-on le temps ? » — version ENFANTINE :
 * gros titre, beaucoup de petits dessins, très peu de texte (CE1-CE2).
 * Dessins originaux (SVG maison), pas de filets « IA ».
 */
export function MesurerTempsLecon() {
  const OR2 = "#b45309";
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        {/* GROS titre + petite horloge, centré, sans filet */}
        <div style={{ textAlign: "center", marginBottom: "5mm" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3mm" }}>
            <Horloge />
            <h1 style={{ fontSize: "40px", margin: 0, fontWeight: 700, color: OR2, fontFamily: "'Caveat','Comic Neue',cursive" }}>Comment mesure-t-on le temps&nbsp;?</h1>
            <Sablier />
          </div>
        </div>

        {/* Autrefois : 3 petits dessins */}
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", gap: "4mm", marginBottom: "6mm" }}>
          {[{ d: <Soleil />, l: "le cadran solaire" }, { d: <Sablier />, l: "le sablier" }, { d: <Horloge />, l: "l'horloge" }].map((it) => (
            <div key={it.l} style={{ textAlign: "center" }}>
              <div style={{ display: "grid", placeItems: "center", width: "24mm", height: "24mm", margin: "0 auto", borderRadius: "50%", background: "#fff7ed", border: `2.5px solid ${OR2}` }}>{it.d}</div>
              <div style={{ fontSize: "17px", marginTop: "1mm", fontFamily: "'Caveat','Comic Neue',cursive" }}>{it.l}</div>
            </div>
          ))}
        </div>

        {/* La frise, en grand */}
        <div style={{ marginBottom: "5mm" }}>
          <FriseSVG />
        </div>

        {/* Je retiens : 3 grosses pastilles (peu de mots) */}
        <div style={{ display: "flex", justifyContent: "center", gap: "5mm", flexWrap: "wrap", marginBottom: "7mm" }}>
          {[{ n: "10 ans", l: "1 décennie", c: "#a855f7" }, { n: "100 ans", l: "1 siècle", c: "#ec4899" }, { n: "1 000 ans", l: "1 millénaire", c: "#ef4444" }].map((it) => (
            <div key={it.l} style={{ border: `3px solid ${it.c}`, borderRadius: "5mm", padding: "3mm 6mm", textAlign: "center", minWidth: "42mm" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, fontFamily: "'Caveat','Comic Neue',cursive" }}>{it.l}</div>
              <div style={{ fontSize: "26px", fontWeight: 800, color: it.c, fontFamily: "'Caveat','Comic Neue',cursive" }}>= {it.n}</div>
            </div>
          ))}
        </div>

        {/* Chiffres romains : gros titre, cartes, 3 mini-exemples */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2mm", marginBottom: "3mm" }}>
          <Calendrier />
          <h2 style={{ fontSize: "30px", margin: 0, color: OR2, fontFamily: "'Caveat','Comic Neue',cursive" }}>Les chiffres romains</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "3mm", marginBottom: "4mm" }}>
          {[["I", "1"], ["V", "5"], ["X", "10"], ["L", "50"], ["C", "100"], ["M", "1000"]].map(([r, n]) => (
            <div key={r} style={{ border: "2.5px solid #111", borderRadius: "3mm", padding: "2mm 4mm", textAlign: "center", minWidth: "18mm" }}>
              <div style={{ fontSize: "30px", fontWeight: 800, fontFamily: "'Caveat','Comic Neue',cursive" }}>{r}</div>
              <div style={{ fontSize: "16px", color: "#555", fontFamily: "'Caveat','Comic Neue',cursive" }}>= {n}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", fontSize: "18px", marginBottom: "3mm", fontFamily: "'Caveat','Comic Neue',cursive" }}>
          Le petit chiffre <b>avant</b> le grand&nbsp;: on <b>enlève</b>&nbsp;!
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "5mm", flexWrap: "wrap" }}>
          {[["IV", "4"], ["IX", "9"], ["XIX", "19"]].map(([r, n]) => (
            <div key={r} style={{ background: "#eef6ee", border: "2.5px solid #2f6b34", borderRadius: "3mm", padding: "2mm 5mm", textAlign: "center" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, fontFamily: "'Caveat','Comic Neue',cursive" }}>{r}</span>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#2f6b34", fontFamily: "'Caveat','Comic Neue',cursive" }}> = {n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- Diaporama projetable ---- */
const ETAPES = ["Le temps", "Autrefois", "La frise", "Chiffres romains", "Bravo"];

const INSTRUMENTS = [
  { title: "Cadran solaire", t: "le cadran solaire (avec l'ombre du soleil)" },
  { title: "Sablier", t: "le sablier (avec le sable qui coule)" },
  { title: "Horloge astronomique de Prague", t: "l'horloge (avec les aiguilles)" },
];

const ROMAINS = [
  { chiffre: "I", nb: "1" },
  { chiffre: "V", nb: "5" },
  { chiffre: "X", nb: "10" },
  { chiffre: "L", nb: "50" },
  { chiffre: "C", nb: "100" },
  { chiffre: "M", nb: "1000" },
];
// La règle du « moins » : petit chiffre AVANT un plus grand → on enlève.
const ROMAINS_MOINS = [
  { chiffre: "IV", nb: "4 (5 − 1)" },
  { chiffre: "IX", nb: "9 (10 − 1)" },
  { chiffre: "XIX", nb: "19 (10 + 9)" },
];

function RevealRomain({ chiffre, nb }: { chiffre: string; nb: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-3 transition hover:scale-105"
      style={{ borderColor: OR }}
      title="Cliquer pour révéler"
    >
      <span className="text-5xl font-extrabold" style={{ color: OR, fontFamily: "'Caveat','Comic Neue',cursive" }}>{chiffre}</span>
      <span className={`text-2xl font-bold ${on ? "" : "opacity-0"}`} style={{ color: "#334155" }}>{on ? `= ${nb}` : "?"}</span>
    </button>
  );
}

export function MesurerTempsDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETAPES.length - 1;
  const next = () => setI((n) => Math.min(last, n + 1));
  const prev = () => setI((n) => Math.max(0, n - 1));

  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: OR }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Questionner le monde · Comment mesure-t-on le temps ?</span>
        <div className="ml-2 flex gap-1.5">
          {ETAPES.map((t, k) => (
            <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full"
              style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />
          ))}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>

      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full text-center">
            <div className="mx-auto mb-4 max-w-xl">
              <WikiImage title="Horloge astronomique de Prague" alt="une grande horloge ancienne" accent={OR} height="clamp(200px, 40vh, 360px)" />
            </div>
            <h1 className="text-5xl font-extrabold" style={{ color: OR }}>Comment mesure-t-on le temps ?</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-500">Les unités : du jour au millénaire</p>
          </div>
        )}

        {i === 1 && (
          <div className="w-full text-center">
            <h2 className="mb-6 text-4xl font-extrabold" style={{ color: OR }}>Autrefois, comment faisait-on ?</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {INSTRUMENTS.map((c) => (
                <div key={c.title} className="flex flex-col items-center gap-2 rounded-2xl border-2 p-3" style={{ borderColor: OR }}>
                  <WikiImage title={c.title} alt={c.t} accent={OR} height="clamp(150px, 26vh, 240px)" />
                  <span className="text-base font-bold" style={{ color: OR }}>{c.t}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-lg text-stone-500">Aujourd'hui, on lit l'heure sur une <b>montre</b>, une <b>horloge</b> ou un <b>téléphone</b>.</p>
            <p className="mt-1 text-xs text-stone-400">Photos : Wikipédia / Wikimedia Commons (chargées en ligne).</p>
          </div>
        )}

        {i === 2 && (
          <div className="w-full">
            <h2 className="mb-3 text-center text-4xl font-extrabold" style={{ color: OR }}>La frise des unités</h2>
            <p className="mb-2 text-center text-lg text-stone-500">De la plus petite à la plus grande : chacune est plus grande que celle d'avant.</p>
            <FriseUnitesTemps />
          </div>
        )}

        {i === 3 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: OR }}>Les chiffres romains</h2>
            <p className="mt-1 text-lg text-stone-500">On écrit les siècles en chiffres romains. Devine, puis clique pour vérifier.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {ROMAINS.map((r) => <RevealRomain key={r.chiffre} {...r} />)}
            </div>
            <p className="mt-5 text-lg font-bold" style={{ color: BLEU }}>La règle du « moins » : un petit chiffre AVANT un plus grand → on enlève.</p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {ROMAINS_MOINS.map((r) => <RevealRomain key={r.chiffre} {...r} />)}
            </div>
            <p className="mt-4 text-xl font-semibold" style={{ color: BLEU }}>Nous vivons au <b>XXIᵉ siècle</b> (le 21ᵉ).</p>
          </div>
        )}

        {i === 4 && (
          <div className="text-center">
            <div className="mb-4 flex justify-center"><Picto name="sourire" size={110} /></div>
            <h1 className="text-5xl font-extrabold" style={{ color: OR }}>Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Le jour, l'année, le siècle, le millénaire… je sais mesurer le temps !</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={prev} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: OR, color: OR }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETAPES.length} · {ETAPES[i]}</span>
        <button onClick={next} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: OR }}>▶</button>
      </div>
    </div>
  );
}
