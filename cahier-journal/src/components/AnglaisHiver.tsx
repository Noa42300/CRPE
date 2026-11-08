/**
 * Anglais — Nouvelle séquence « Winter » autour d'une petite histoire :
 * THE MITTEN (conte traditionnel, répétitif → parfait pour la compréhension
 * orale). Le maître lit/joue l'histoire en anglais, on révèle le sens, on joue,
 * et on apprend un petit corpus de mots d'hiver. Diapo à projeter + corpus à
 * coller (cahier violet d'anglais).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";

const WB = "#0369a1"; // bleu hiver
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

const ET = ["Winter!", "The Mitten", "A mouse is cold", "More animals!", "Full and warm", "Game: point & say", "Winter words", "Words to learn"];
export function AnglaisHiverDiapo() {
  const [i, setI] = useState(0);
  const [fr, setFr] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  const FR = ({ children }: { children: React.ReactNode }) => fr ? <span className="text-xl italic text-stone-500"> — {children}</span> : null;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: WB }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">English · Winter story — The Mitten</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => setFr((v) => !v)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">{fr ? "Hide French" : "Show French"}</button>
        <button onClick={() => requestFullscreen(ref.current)} className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8 text-center">
        {i === 0 && (<div><div className="text-6xl">❄️🧤⛄</div><h1 className="mt-3 text-5xl font-extrabold" style={{ color: WB }}>Winter!</h1><p className="mt-3 text-2xl text-stone-600">It is cold. It is snowy.<FR>Il fait froid. Il neige.</FR></p></div>)}
        {i === 1 && (<div><div className="text-6xl">🧤</div><h2 className="mt-2 text-4xl font-extrabold" style={{ color: WB }}>The Mitten</h2><p className="mt-3 text-2xl text-stone-600">A little boy drops his <b>mitten</b> in the snow.<FR>Un petit garçon perd sa moufle dans la neige.</FR></p></div>)}
        {i === 2 && (<div><div className="text-6xl">🐭🧤</div><p className="mt-3 text-3xl text-stone-700">A <b>mouse</b> is cold. « Can I come <b>in</b>? »</p><p className="mt-2 text-2xl text-stone-600">The mouse goes <b>inside</b> the mitten.<FR>Une souris a froid. « Je peux entrer ? » Elle entre dans la moufle.</FR></p></div>)}
        {i === 3 && (<div><div className="text-6xl">🐰 🦊 🐻</div><p className="mt-3 text-3xl text-stone-700">A <b>rabbit</b>, a <b>fox</b>, a <b>bear</b>…</p><p className="mt-2 text-2xl text-stone-600">« Can I come in? » They all go inside!<FR>Un lapin, un renard, un ours… « Je peux entrer ? » Ils entrent tous !</FR></p></div>)}
        {i === 4 && (<div><div className="text-6xl">🧤✨</div><h2 className="mt-2 text-4xl font-extrabold" style={{ color: WB }}>Full and warm!</h2><p className="mt-3 text-2xl text-stone-600">The mitten is <b>full</b> and <b>warm</b>.<FR>La moufle est pleine et bien chaude.</FR></p></div>)}
        {i === 5 && (<div className="w-full max-w-2xl"><h2 className="text-4xl font-extrabold" style={{ color: WB }}>Game: point & say</h2><div className="mt-4 grid grid-cols-3 gap-3 text-2xl">{[["🐭", "a mouse"], ["🐰", "a rabbit"], ["🦊", "a fox"], ["🐻", "a bear"], ["🧤", "a mitten"], ["❄️", "snow"]].map(([e, w]) => (<div key={w} className="rounded-2xl border-2 bg-white px-2 py-3" style={{ borderColor: WB }}><div className="text-4xl">{e}</div><div className="mt-1 text-xl font-bold" style={{ color: WB }}>{w}</div></div>))}</div><p className="mt-3 text-lg text-stone-500">I point, you say the word in English!</p></div>)}
        {i === 6 && (<div className="w-full max-w-2xl"><h2 className="text-4xl font-extrabold" style={{ color: WB }}>Winter words</h2><div className="mt-4 grid grid-cols-3 gap-3 text-2xl">{[["❄️", "snow"], ["🥶", "cold"], ["🧢", "a hat"], ["🧣", "a scarf"], ["🧤", "gloves"], ["⛄", "a snowman"]].map(([e, w]) => (<div key={w} className="rounded-2xl border-2 bg-white px-2 py-3" style={{ borderColor: WB }}><div className="text-4xl">{e}</div><div className="mt-1 text-xl font-bold" style={{ color: WB }}>{w}</div></div>))}</div></div>)}
        {i === 7 && (<div><div className="mb-2 text-5xl">📒</div><h1 className="text-4xl font-extrabold" style={{ color: WB }}>Words to learn</h1><p className="mt-3 text-2xl text-stone-600">snow · cold · warm · a mitten · a mouse · a fox · a bear</p><p className="mt-1 text-xl text-stone-500">On les colle dans le cahier et on les apprend.</p></div>)}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: WB, color: WB }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: WB }}>▶</button>
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
        <h1 style={{ fontSize: "26px", margin: 0, fontWeight: 800, color: WB }}>Winter — words to learn ❄️</h1>
        <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm" }}>
        {MOTS.map((m) => (
          <div key={m.en} style={{ display: "flex", alignItems: "center", gap: "3mm", border: `2px solid ${WB}`, borderRadius: "3mm", padding: "2mm 4mm" }}>
            <span style={{ fontSize: "30px" }}>{m.e}</span>
            <span><span style={{ fontWeight: 800, fontSize: "18px", color: WB }}>{m.en}</span> <span style={{ fontSize: "14px", color: "#555" }}>= {m.fr}</span></span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "4mm", border: `2px dashed ${WB}`, borderRadius: "3mm", padding: "3mm 5mm", fontFamily: CONSIGNE_FONT, fontSize: "13px", background: "#f0f9ff" }}>
        <b>The story — The Mitten :</b> A boy drops his mitten in the snow. A mouse, a rabbit, a fox and a bear are cold. « Can I come in? » They all go inside. The mitten is full and warm!
      </div>
    </div>
  );
}
