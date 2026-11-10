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
// Dictée en texte suivi (3-4 lignes), thème de l'hiver. CE2 = texte CE1 + 2 phrases.
const TEXTE_CE1 = "C'est l'hiver. La neige tombe sur le jardin. Je mets mon bonnet, mon écharpe et mes gants. Dehors, les flocons dansent dans le ciel froid.";
const TEXTE_CE2_EN_PLUS = "À la montagne, les enfants glissent sur la neige. La température descend, mais nous aimons jouer dehors.";

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

/* ======================================================================
 * Dictée n°2 — thème « les vêtements » (les mots d'hiver reviennent).
 * Objectif orthographe : « c'est » et le verbe METTRE (je mets / il met).
 * ==================================================================== */
const VERT = "#16a34a"; // couleur du cahier de dictée (vert)
const MOTS_VET_CE1 = ["un manteau", "un bonnet", "une écharpe", "des gants", "un pull", "des bottes", "un pantalon", "je mets"];
const MOTS_VET_CE2 = [...MOTS_VET_CE1, "des chaussettes", "un blouson", "il met"];
const TEXTE_VET_CE1 = "C'est l'hiver, il fait froid. Je mets mon manteau, mon bonnet et mon écharpe. Il met ses gants et ses bottes. C'est l'heure de sortir !";
const TEXTE_VET_CE2_EN_PLUS = "Dans la cour, les enfants mettent leur pull et leur blouson. Comme c'est bien d'être au chaud !";

export function MotsFlashVetementsDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const mots = MOTS_VET_CE2;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: VERT }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Mots flash · les vêtements</span>
        <span className="ml-2 text-xs font-bold text-white/80">{i + 1}/{mots.length}</span>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[48vh] place-items-center p-6">
        <div className="text-6xl font-extrabold sm:text-7xl" style={{ color: VERT, fontFamily: CURSIVE }}>{mots[i]}</div>
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: VERT, color: VERT }}>◀</button>
        <span className="text-xs font-bold uppercase tracking-wide text-stone-400">J'écris sur mon ardoise, puis j'efface.</span>
        <button onClick={() => setI((n) => Math.min(mots.length - 1, n + 1))} disabled={i === mots.length - 1} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: VERT }}>▶</button>
      </div>
    </div>
  );
}

export function DicteeVetementsFiche() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "272mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Dictée — les vêtements</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .................. &nbsp; Date : ............</span>
        </div>
        <div style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT, color: VERT, marginBottom: "2mm" }}>Je fais bien attention : <b>c'est</b> · le verbe <b>mettre</b> (je <b>mets</b>, il <b>met</b>).</div>
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>Les mots</div>
        <Lignes n={4} />
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "4mm" }}>La dictée</div>
        <Lignes n={10} />
        <div style={{ marginTop: "5mm", fontSize: "10px", color: "#64748b", fontFamily: CONSIGNE_FONT, lineHeight: 1.6 }}>
          <b>Réservé à l'enseignant</b> — Mots CE1 : {MOTS_VET_CE1.join(" · ")}. Mots CE2 (en plus) : {MOTS_VET_CE2.slice(MOTS_VET_CE1.length).join(" · ")}.<br />
          <b>Texte CE1 :</b> {TEXTE_VET_CE1}<br />
          <b>Texte CE2 :</b> {TEXTE_VET_CE1} <span style={{ fontWeight: 700, color: "#111" }}>{TEXTE_VET_CE2_EN_PLUS}</span>
          <br /><span style={{ fontStyle: "italic" }}>(Le texte reste côté enseignant ; l'élève écrit sur sa feuille. Cahier de dictée vert.)</span>
        </div>
      </div>
    </div>
  );
}

export function DicteeHiverFiche() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "272mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Dictée — l'hiver</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .................. &nbsp; Date : ............</span>
        </div>
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>Les mots</div>
        <Lignes n={4} />
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "4mm" }}>La dictée</div>
        <Lignes n={10} />
        <div style={{ marginTop: "5mm", fontSize: "10px", color: "#64748b", fontFamily: CONSIGNE_FONT, lineHeight: 1.6 }}>
          <b>Réservé à l'enseignant</b> — Mots CE1 : {MOTS_CE1.join(" · ")}. Mots CE2 (en plus) : {MOTS_CE2.slice(MOTS_CE1.length).join(" · ")}.<br />
          <b>Texte CE1 :</b> {TEXTE_CE1}<br />
          <b>Texte CE2 :</b> {TEXTE_CE1} <span style={{ fontWeight: 700, color: "#111" }}>{TEXTE_CE2_EN_PLUS}</span>
          <br /><span style={{ fontStyle: "italic" }}>(Le texte reste côté enseignant ; l'élève écrit sur sa feuille. Cahier de dictée vert.)</span>
        </div>
      </div>
    </div>
  );
}

/* ======================================================================
 * Dictée n°3 — thème « les animaux en hiver » (lien avec The Mitten).
 * Les mots d'hiver reviennent ; mots flash sur l'ardoise puis dictée.
 * ==================================================================== */
const MOTS_ANI_CE1 = ["un renard", "une souris", "un lapin", "un ours", "la forêt", "la neige", "le froid", "une patte"];
const MOTS_ANI_CE2 = [...MOTS_ANI_CE1, "un hérisson", "la fourrure", "se cacher"];
const TEXTE_ANI_CE1 = "C'est l'hiver dans la forêt. Le renard et le lapin ont froid. La petite souris se cache sous la neige.";
const TEXTE_ANI_CE2_EN_PLUS = "L'ours dort tout l'hiver dans sa tanière. Le hérisson roule en boule pour avoir chaud.";

export function MotsFlashAnimauxDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const mots = MOTS_ANI_CE2;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: VERT }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Mots flash · les animaux en hiver</span>
        <span className="ml-2 text-xs font-bold text-white/80">{i + 1}/{mots.length}</span>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[48vh] place-items-center p-6">
        <div className="text-6xl font-extrabold sm:text-7xl" style={{ color: VERT, fontFamily: CURSIVE }}>{mots[i]}</div>
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: VERT, color: VERT }}>◀</button>
        <span className="text-xs font-bold uppercase tracking-wide text-stone-400">J'écris sur mon ardoise, puis j'efface.</span>
        <button onClick={() => setI((n) => Math.min(mots.length - 1, n + 1))} disabled={i === mots.length - 1} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: VERT }}>▶</button>
      </div>
    </div>
  );
}

export function DicteeAnimauxFiche() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "272mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Dictée — les animaux en hiver</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .................. &nbsp; Date : ............</span>
        </div>
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>Les mots</div>
        <Lignes n={4} />
        <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "4mm" }}>La dictée</div>
        <Lignes n={10} />
        <div style={{ marginTop: "5mm", fontSize: "10px", color: "#64748b", fontFamily: CONSIGNE_FONT, lineHeight: 1.6 }}>
          <b>Réservé à l'enseignant</b> — Mots CE1 : {MOTS_ANI_CE1.join(" · ")}. Mots CE2 (en plus) : {MOTS_ANI_CE2.slice(MOTS_ANI_CE1.length).join(" · ")}.<br />
          <b>Texte CE1 :</b> {TEXTE_ANI_CE1}<br />
          <b>Texte CE2 :</b> {TEXTE_ANI_CE1} <span style={{ fontWeight: 700, color: "#111" }}>{TEXTE_ANI_CE2_EN_PLUS}</span>
          <br /><span style={{ fontStyle: "italic" }}>(Le texte reste côté enseignant ; l'élève écrit sur sa feuille. Cahier de dictée vert.)</span>
        </div>
      </div>
    </div>
  );
}
