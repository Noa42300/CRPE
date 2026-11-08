/**
 * Anglais — Séquence « Winter » autour de l'histoire THE MITTEN, présentée en
 * BANDE DESSINÉE (BD). Le maître lit/joue l'histoire en anglais, on révèle le
 * sens (Show French), on joue, on apprend un corpus de mots. Diapo BD à
 * projeter + corpus à coller (mots à apprendre + l'histoire en BD en dessous).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";

const WB = "#0369a1";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

type Case = { emoji: string; en: string; fr: string };
const BD: Case[] = [
  { emoji: "🧒❄️🧤", en: "Nicki drops his white mitten in the snow.", fr: "Nicki perd sa moufle blanche dans la neige." },
  { emoji: "🐰➡️🧤", en: "A rabbit hops in. « Can I come in? »", fr: "Un lapin entre : « Je peux entrer ? »" },
  { emoji: "🦔➡️🧤", en: "A hedgehog squeezes in too.", fr: "Un hérisson se glisse dedans aussi." },
  { emoji: "🦉➡️🧤", en: "An owl flies in. « Me too! »", fr: "Une chouette entre : « Moi aussi ! »" },
  { emoji: "🦡🦊🧤", en: "A badger and a fox go in.", fr: "Un blaireau et un renard entrent." },
  { emoji: "🐻➡️🧤", en: "A big bear climbs in! It stretches!", fr: "Un grand ours entre ! La moufle s'étire !" },
  { emoji: "🐭👃🐻", en: "A tiny mouse sits on the bear's nose…", fr: "Une petite souris se pose sur le nez de l'ours…" },
  { emoji: "🤧💨🧤", en: "« Aaah-CHOO! » Everyone flies out! Nicki finds his mitten.", fr: "« Atchoum ! » Tous sortent ! Nicki retrouve sa moufle." },
];

function ComicPanel({ n, c, showFr, big }: { n: number; c: Case; showFr: boolean; big?: boolean }) {
  return (
    <div style={{ border: `3px solid ${WB}`, borderRadius: "3mm", background: "#f0f9ff", padding: big ? "3mm" : "2mm", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: big ? "2mm" : "1mm" }}>
      <span style={{ position: "absolute", top: "1mm", left: "2mm", fontSize: big ? "13px" : "10px", fontWeight: 800, color: WB }}>{n}</span>
      <div style={{ fontSize: big ? "40px" : "26px", lineHeight: 1 }}>{c.emoji}</div>
      <div style={{ background: "#fff", border: `1.5px solid ${WB}`, borderRadius: "6px", padding: big ? "1.5mm 3mm" : "1mm 2mm", fontSize: big ? "15px" : "10.5px", fontWeight: 700, textAlign: "center", color: "#0f172a" }}>{c.en}</div>
      {showFr && <div style={{ fontSize: big ? "12px" : "9px", fontStyle: "italic", color: "#64748b", textAlign: "center" }}>{c.fr}</div>}
    </div>
  );
}

export function AnglaisHiverDiapo() {
  const [fr, setFr] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="w-[92vw] max-w-[1000px] overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: WB }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">English · Winter comic — The Mitten 🧤❄️</span>
        <button onClick={() => setFr((v) => !v)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">{fr ? "Hide French" : "Show French"}</button>
        <button onClick={() => requestFullscreen(ref.current)} className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {BD.map((c, i) => <ComicPanel key={i} n={i + 1} c={c} showFr={fr} big />)}
        </div>
        <div className="mt-4 rounded-2xl border-2 p-3" style={{ borderColor: WB }}>
          <div className="text-xs font-extrabold uppercase tracking-wide" style={{ color: WB }}>Words · let's say them!</div>
          <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xl font-bold" style={{ color: "#0f172a" }}>
            {[["❄️", "snow"], ["🥶", "cold"], ["🔥", "warm"], ["🧤", "a mitten"], ["🐭", "a mouse"], ["🦊", "a fox"], ["🐻", "a bear"]].map(([e, w]) => <span key={w}>{e} {w}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

const MOTS: { en: string; fr: string; e: string }[] = [
  { en: "snow", fr: "la neige", e: "❄️" },
  { en: "cold", fr: "froid", e: "🥶" },
  { en: "warm", fr: "chaud", e: "🔥" },
  { en: "a mitten", fr: "une moufle", e: "🧤" },
  { en: "a mouse", fr: "une souris", e: "🐭" },
  { en: "a rabbit", fr: "un lapin", e: "🐰" },
  { en: "a fox", fr: "un renard", e: "🦊" },
  { en: "a bear", fr: "un ours", e: "🐻" },
];

export function AnglaisHiverCorpus() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `2px solid ${WB}`, paddingBottom: "1.5mm", marginBottom: "3mm" }}>
        <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 800, color: WB }}>Winter — The Mitten ❄️🧤</h1>
        <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
      </div>
      {/* Mots à apprendre */}
      <div style={{ fontSize: "12px", fontWeight: 800, color: WB, fontFamily: CONSIGNE_FONT, marginBottom: "1.5mm" }}>Words to learn — les mots à apprendre</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2mm", marginBottom: "4mm" }}>
        {MOTS.map((m) => (
          <div key={m.en} style={{ display: "flex", alignItems: "center", gap: "2.5mm", border: `2px solid ${WB}`, borderRadius: "3mm", padding: "1.2mm 3mm" }}>
            <span style={{ fontSize: "24px" }}>{m.e}</span>
            <span><span style={{ fontWeight: 800, fontSize: "16px", color: WB }}>{m.en}</span> <span style={{ fontSize: "13px", color: "#555" }}>= {m.fr}</span></span>
          </div>
        ))}
      </div>
      {/* L'histoire en BD */}
      <div style={{ fontSize: "12px", fontWeight: 800, color: WB, fontFamily: CONSIGNE_FONT, marginBottom: "1.5mm" }}>The story in pictures — l'histoire en BD</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2mm" }}>
        {BD.map((c, i) => <ComicPanel key={i} n={i + 1} c={c} showFr />)}
      </div>
    </div>
  );
}
