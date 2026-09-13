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

/** Frise horizontale : les unités de la plus petite à la plus grande. */
export function FriseUnitesTemps({ print = false }: { print?: boolean }) {
  const W = 1050;
  const H = 300;
  const n = UNITES.length;
  const marginX = 40;
  const usable = W - marginX * 2;
  const step = usable / (n - 1);
  const axisY = 150;

  return (
    <div
      className={print ? "fiche-a4" : undefined}
      style={{
        background: "#fff",
        color: "#111",
        padding: print ? "12mm" : "0",
        boxSizing: "border-box",
        fontFamily: "'Lexend','Nunito',system-ui,sans-serif",
      }}
    >
      {print && (
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "4mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "26px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>La frise des unités de temps</h1>
          <span style={{ fontSize: "14px", color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· CE1-CE2</span>
          <div style={{ marginLeft: "auto", fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "42mm", borderBottom: "1px solid #333" }} /></div>
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" aria-label="Frise des unités de temps, du jour au millénaire">
        {/* flèche du temps (de la plus petite à la plus grande unité) */}
        <defs>
          <marker id="frise-arrow" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
            <path d="M0,0 L12,6 L0,12 Z" fill="#111" />
          </marker>
        </defs>
        <line x1={marginX - 10} y1={axisY} x2={W - marginX + 18} y2={axisY} stroke="#111" strokeWidth={3} markerEnd="url(#frise-arrow)" />
        <text x={marginX - 10} y={axisY - 14} fontSize={18} fontWeight={700} fill="#555">petit</text>
        <text x={W - marginX - 30} y={axisY - 14} fontSize={18} fontWeight={700} fill="#555">grand</text>

        {UNITES.map((u, k) => {
          const x = marginX + step * k;
          const up = k % 2 === 0; // alterne au-dessus / au-dessous pour aérer
          const boxW = 128;
          const boxH = 60;
          return (
            <g key={u.label}>
              <circle cx={x} cy={axisY} r={9} fill={u.couleur} stroke="#111" strokeWidth={2} />
              <line x1={x} y1={axisY} x2={x} y2={up ? axisY - 24 : axisY + 24} stroke="#111" strokeWidth={1.5} />
              <rect x={x - boxW / 2} y={up ? axisY - 84 : axisY + 24} width={boxW} height={boxH} rx={10} fill="#fff" stroke={u.couleur} strokeWidth={2.5} />
              <text x={x} y={up ? axisY - 60 : axisY + 48} textAnchor="middle" fontSize={19} fontWeight={800} fill="#111" fontFamily="'Caveat','Comic Neue',cursive">{u.label}</text>
              <text x={x} y={up ? axisY - 38 : axisY + 70} textAnchor="middle" fontSize={14} fontWeight={600} fill="#555">{u.detail}</text>
            </g>
          );
        })}
      </svg>
      {print && (
        <p style={{ marginTop: "6mm", fontSize: "13px", color: "#333" }}>
          Je colle la frise dans mon cahier. Chaque unité est plus grande que la précédente&nbsp;:
          <b> 1 décennie = 10 ans</b>, <b>1 siècle = 100 ans</b>, <b>1 millénaire = 1 000 ans</b>.
        </p>
      )}
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
            <p className="mt-1 text-xl text-stone-500">On écrit les siècles en chiffres romains. Devine, puis clique pour vérifier.</p>
            <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {ROMAINS.map((r) => <RevealRomain key={r.chiffre} {...r} />)}
            </div>
            <p className="mt-6 text-2xl font-semibold" style={{ color: BLEU }}>Nous vivons au <b>XXIᵉ siècle</b> (le 21ᵉ).</p>
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
