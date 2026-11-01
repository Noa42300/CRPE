/**
 * EMC — « Pourquoi des règles ? Le respect en classe » (le droit et la règle).
 * Petite séance : diaporama à projeter + leçon à coller. En lien avec le système
 * de comportement (la fusée) : les règles protègent tout le monde.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";

const EMC = "#9333ea";
const CURSIVE = "'Caveat','Comic Neue',cursive";

const REGLES = [
  { i: "✋", t: "Je lève le doigt pour parler." },
  { i: "👂", t: "J'écoute celui qui parle." },
  { i: "🤝", t: "Je respecte mes camarades (pas de moquerie)." },
  { i: "🧰", t: "Je prends soin du matériel." },
  { i: "🚶", t: "Je me déplace calmement." },
];

const ET = ["Pourquoi des règles ?", "Dans un jeu…", "En classe aussi", "Nos règles", "Les règles protègent", "Je retiens"];
export function EmcReglesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: EMC }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">EMC · Pourquoi des règles ?</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="text-6xl">🤔📏</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: EMC }}>Pourquoi des règles ?</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">À quoi servent les règles&nbsp;? On en discute ensemble.</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: EMC }}>Dans un jeu…</h2>
            <p className="mt-4 text-5xl">⚽ 🎲 🃏</p>
            <p className="mt-4 text-2xl text-stone-600">Sans règles, on ne peut pas jouer : c'est la <b>pagaille</b> et on se dispute.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: EMC }}>En classe aussi</h2>
            <p className="mt-4 text-2xl text-stone-600">Pour bien <b>apprendre</b> et <b>vivre ensemble</b>, on a besoin de règles.</p>
            <p className="mt-2 text-2xl text-stone-600">Elles sont les mêmes <b>pour tout le monde</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-2xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: EMC }}>Nos règles de la classe</h2>
            <div className="space-y-2">
              {REGLES.map((r) => (
                <div key={r.t} className="flex items-center gap-3 rounded-2xl border-2 bg-white px-4 py-2 text-2xl font-semibold text-stone-800" style={{ borderColor: EMC }}>
                  <span className="text-3xl">{r.i}</span> {r.t}
                </div>
              ))}
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="text-6xl">🛡️🤝</div>
            <h2 className="mt-2 text-4xl font-extrabold" style={{ color: EMC }}>Les règles protègent</h2>
            <p className="mt-3 text-2xl text-stone-600">Les règles ne sont pas des punitions : elles <b>protègent</b> chacun et permettent de <b>se respecter</b>.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">📏❤️</div>
            <h1 className="text-4xl font-extrabold" style={{ color: EMC }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Les <b>règles</b> servent à bien apprendre, à vivre ensemble et à <b>se respecter</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: EMC, color: EMC }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: EMC }}>▶</button>
      </div>
    </div>
  );
}

export function EmcReglesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "40px", margin: "0 0 2mm", textAlign: "center", fontWeight: 700, color: EMC, fontFamily: CURSIVE }}>Pourquoi des règles ?</h1>
      <p style={{ textAlign: "center", fontSize: "18px", fontFamily: CURSIVE, margin: "0 0 4mm" }}>Les règles servent à bien <b>apprendre</b>, à <b>vivre ensemble</b> et à <b>se respecter</b>.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm" }}>
        {REGLES.map((r) => (
          <div key={r.t} style={{ display: "flex", alignItems: "center", gap: "3mm", border: `2.5px solid ${EMC}`, borderRadius: "4mm", padding: "2.5mm 4mm" }}>
            <span style={{ fontSize: "30px" }}>{r.i}</span>
            <span style={{ fontFamily: CURSIVE, fontSize: "19px" }}>{r.t}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "4mm", background: "#faf5ff", border: `2px dashed ${EMC}`, borderRadius: "4mm", padding: "3mm 5mm", textAlign: "center", fontFamily: CURSIVE, fontSize: "19px" }}>
        Les règles ne sont pas des punitions : elles <b>protègent tout le monde</b>. 🛡️🤝
      </div>
    </div>
  );
}
