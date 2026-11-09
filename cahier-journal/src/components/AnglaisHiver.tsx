/**
 * Anglais — Séquence « Winter » autour de l'histoire THE MITTEN.
 * Présentation demandée : les mots à apprendre (Words to learn) en haut, puis un
 * MINI-TEXTE en français (écriture type Word) qui résume l'histoire des
 * mitaines ; chaque mot de vocabulaire est redonné en anglais entre parenthèses.
 * Diapo à projeter + leçon à coller (cahier violet). Pas de titre souligné.
 */
import { useRef } from "react";
import { requestFullscreen } from "../lib/board";

const WB = "#0369a1";
const WORD = "'Aptos','Calibri','Segoe UI',Arial,sans-serif"; // écriture « type Word »

const MOTS: { en: string; fr: string; e: string }[] = [
  { en: "winter", fr: "l'hiver", e: "❄️" },
  { en: "snow", fr: "la neige", e: "☃️" },
  { en: "cold", fr: "froid", e: "🥶" },
  { en: "warm", fr: "chaud", e: "🔥" },
  { en: "a mitten", fr: "une moufle", e: "🧤" },
  { en: "a mouse", fr: "une souris", e: "🐭" },
  { en: "a fox", fr: "un renard", e: "🦊" },
  { en: "a bear", fr: "un ours", e: "🐻" },
];

/* Mini-texte : résumé en français, mots de vocabulaire en anglais entre () */
function Resume({ fs = "15px" }: { fs?: string }) {
  return (
    <p style={{ fontFamily: WORD, fontSize: fs, lineHeight: 1.7, color: "#1a1a1a", textAlign: "justify" }}>
      En classe, on a vu l'histoire des mitaines <i>(the mitten)</i>. C'est l'<b>hiver</b> <i>(winter)</i> :
      il fait <b>froid</b> <i>(cold)</i> et il y a de la <b>neige</b> <i>(snow)</i>. Un garçon perd sa
      <b> moufle</b> <i>(a mitten)</i> dans la neige. Un par un, des animaux viennent se glisser dedans pour
      avoir <b>chaud</b> <i>(warm)</i> : une <b>souris</b> <i>(a mouse)</i>, un lapin <i>(a rabbit)</i>, un
      hérisson <i>(a hedgehog)</i>, une chouette <i>(an owl)</i>, un blaireau <i>(a badger)</i>, un
      <b> renard</b> <i>(a fox)</i>, puis un gros <b>ours</b> <i>(a bear)</i>. À la fin, la petite souris
      <i> (mouse)</i> fait éternuer l'ours : « Atchoum ! » Tous les animaux sont expulsés et le garçon
      retrouve sa moufle.
    </p>
  );
}

function WordsGrid({ small }: { small?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: small ? "2mm" : "2.5mm" }}>
      {MOTS.map((m) => (
        <div key={m.en} style={{ display: "flex", alignItems: "center", gap: "2mm", border: `2px solid ${WB}`, borderRadius: "3mm", padding: "1.2mm 2.5mm" }}>
          <span style={{ fontSize: small ? "20px" : "24px" }}>{m.e}</span>
          <span><span style={{ fontWeight: 800, fontSize: small ? "14px" : "16px", color: WB, fontFamily: WORD }}>{m.en}</span> <span style={{ fontSize: "12px", color: "#555", fontFamily: WORD }}>{m.fr}</span></span>
        </div>
      ))}
    </div>
  );
}

export function AnglaisHiverDiapo() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="w-[92vw] max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: WB }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">English · Winter — The Mitten 🧤❄️</span>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="p-5 sm:p-7">
        <div className="text-lg font-extrabold" style={{ color: WB }}>Words to learn</div>
        <div className="mt-2"><WordsGrid /></div>
        <div className="mt-5 text-lg font-extrabold" style={{ color: WB }}>The story — l'histoire des mitaines</div>
        <div className="mt-2 rounded-2xl border-2 p-4" style={{ borderColor: WB, background: "#f0f9ff" }}>
          <Resume fs="18px" />
        </div>
      </div>
    </div>
  );
}

export function AnglaisHiverCorpus() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: WORD }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4mm" }}>
        <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 800, color: WB }}>Winter — The Mitten ❄️🧤</h1>
        <span style={{ fontSize: "12px", fontWeight: 700 }}>Prénom : ..................</span>
      </div>
      <div style={{ fontSize: "14px", fontWeight: 800, color: WB, marginBottom: "2mm" }}>Words to learn — les mots à apprendre</div>
      <WordsGrid />
      <div style={{ fontSize: "14px", fontWeight: 800, color: WB, margin: "5mm 0 2mm" }}>L'histoire des mitaines</div>
      <div style={{ border: `1.5px solid ${WB}`, borderRadius: "3mm", padding: "3mm 4mm", background: "#f8fcff" }}>
        <Resume fs="15px" />
      </div>
    </div>
  );
}
