/**
 * Dictée « au cas où » — mots flash (projection) + feuille de dictée élève.
 * Thème de l'hiver (cohérent avec la poésie et l'anglais). Le maître flashe les
 * mots à mémoriser, puis dicte. CE2 = mots CE1 + quelques mots en plus.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";

const BLEU = "#2563eb";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

const MOTS_CE1 = ["l'hiver", "la neige", "le froid", "un flocon", "un bonnet", "une écharpe", "des gants", "un manteau"];
const MOTS_CE2 = [...MOTS_CE1, "la montagne", "glisser", "la température"];
const PHRASES = ["En hiver, la neige est blanche.", "Je mets mon bonnet et mon écharpe."];

export function MotsFlashDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const mots = MOTS_CE2;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: BLEU }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Mots flash · dictée de l'hiver</span>
        <span className="ml-2 text-xs font-bold text-white/80">{i + 1}/{mots.length}</span>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[48vh] place-items-center p-6">
        <div className="text-6xl font-extrabold sm:text-7xl" style={{ color: BLEU, fontFamily: CURSIVE }}>{mots[i]}</div>
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: BLEU, color: BLEU }}>◀</button>
        <span className="text-xs font-bold uppercase tracking-wide text-stone-400">Je lis, je mémorise, je cache.</span>
        <button onClick={() => setI((n) => Math.min(mots.length - 1, n + 1))} disabled={i === mots.length - 1} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: BLEU }}>▶</button>
      </div>
    </div>
  );
}

function Lignes({ n }: { n: number }) { return <>{Array.from({ length: n }).map((_, i) => <div key={i} style={{ borderBottom: "1.8px solid #9aa4b2", height: "8mm" }} />)}</>; }

export function DicteeHiverFiche() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "272mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Dictée — l'hiver</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .................. &nbsp; Date : ............</span>
        </div>
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>Les mots</div>
        <Lignes n={5} />
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "4mm" }}>Les phrases</div>
        <Lignes n={5} />
        <div style={{ marginTop: "5mm", fontSize: "10px", color: "#64748b", fontFamily: CONSIGNE_FONT }}>
          Mots CE1 : {MOTS_CE1.join(" · ")}.<br />
          Mots CE2 (en plus) : {MOTS_CE2.slice(MOTS_CE1.length).join(" · ")}.<br />
          Phrases : {PHRASES.join(" / ")}
          <br /><span style={{ fontStyle: "italic" }}>(Les mots et phrases restent côté enseignant ; l'élève écrit sur sa feuille.)</span>
        </div>
      </div>
    </div>
  );
}
