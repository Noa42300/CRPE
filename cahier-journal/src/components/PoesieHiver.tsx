/**
 * Poésie d'hiver — à apprendre pour la dernière semaine avant les vacances.
 * Poème ORIGINAL (libre de droits), court (3 quatrains), vocabulaire simple
 * CE1-CE2, sur le thème de l'hiver. Fiche à coller (cahier blanc des poésies)
 * + version à projeter.
 */
import { useRef } from "react";
import { requestFullscreen } from "../lib/board";

const BLEU = "#2563eb";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

const TITRE = "L'hiver";
const STROPHES = [
  ["Le matin, tout est blanc,", "la neige est arrivée.", "Les flocons, en dansant,", "ont couvert le sentier."],
  ["Dans le froid de décembre,", "les oiseaux ont caché", "leur bec sous la plume tendre", "pour ne pas trop geler."],
  ["Je mets mon gros manteau,", "mon écharpe et mes gants,", "je souffle un peu d'air chaud", "et je ris en marchant."],
];
const Floc = () => <span style={{ color: "#93c5fd" }}>❄</span>;

export function PoesieHiverDiapo() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[900px] flex-col overflow-hidden rounded-2xl shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif", background: "linear-gradient(#eff6ff,#fff)" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: BLEU }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Poésie · à apprendre</span>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="px-6 py-7 text-center">
        <h1 className="text-5xl font-extrabold" style={{ color: BLEU, fontFamily: CURSIVE }}>{TITRE} <Floc /></h1>
        <div className="mt-5 space-y-5">
          {STROPHES.map((s, i) => (
            <div key={i} className="text-3xl leading-relaxed text-stone-800" style={{ fontFamily: CURSIVE }}>
              {s.map((v, j) => <div key={j}>{v}</div>)}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm italic text-stone-500">Poème original, libre de droits.</p>
      </div>
    </div>
  );
}

export function PoesieHiverFiche() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: `2.5px solid ${BLEU}`, borderRadius: "4mm", padding: "7mm 9mm", minHeight: "270mm", boxSizing: "border-box", background: "linear-gradient(#f5f9ff,#fff)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h1 style={{ fontSize: "44px", margin: 0, fontWeight: 700, color: BLEU, fontFamily: CURSIVE }}>{TITRE} <Floc /></h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
        </div>
        <div style={{ marginTop: "6mm", display: "flex", flexDirection: "column", gap: "7mm" }}>
          {STROPHES.map((s, i) => (
            <div key={i} style={{ fontFamily: CURSIVE, fontSize: "26px", lineHeight: 1.5 }}>
              {s.map((v, j) => <div key={j}>{v}</div>)}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "8mm", fontSize: "12px", color: "#64748b", fontFamily: CONSIGNE_FONT }}>
          <Floc /> À apprendre pour la dernière semaine avant les vacances. <span style={{ fontStyle: "italic" }}>Poème original, libre de droits.</span>
        </div>
      </div>
    </div>
  );
}
