/**
 * Maths — Dénombrer et représenter une collection (début P2).
 *   CE1 : jusqu'à 999 — centaines, dizaines, unités (c/d/u).
 *   CE2 : jusqu'à 1 000 — milliers, centaines, dizaines, unités (m/c/d/u).
 * Diaporama de découverte (grouper par paquets) + leçon + fiches « Je m'entraîne ».
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { MODELE_FONT } from "./ficheModele";
import { EvalFrame, GrilleLSU } from "./EvalEcritureLettres";

const MA = "#0e7490";
const BLEU = "#2563eb", ORANGE = "#ea580c", VERT = "#16a34a";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

/* Base 10 dessinée : plaque (100, bleu), barre (10, orange), cube (1, vert). */
function Plaque() { return <span style={{ display: "inline-grid", gridTemplateColumns: "repeat(5,2px)", gridAutoRows: "2px", gap: "0.5px", border: `1.5px solid ${BLEU}`, padding: "1px", background: "#dbeafe", width: "fit-content", verticalAlign: "middle", margin: "0 1px" }}>{Array.from({ length: 25 }).map((_, i) => <span key={i} style={{ width: 2, height: 2, background: BLEU }} />)}</span>; }
function Barre() { return <span style={{ display: "inline-block", width: 4, height: 20, background: "#fdba74", border: `1.5px solid ${ORANGE}`, verticalAlign: "middle", margin: "0 1px" }} />; }
function Cube() { return <span style={{ display: "inline-block", width: 5, height: 5, background: "#86efac", border: `1px solid ${VERT}`, verticalAlign: "middle", margin: "0 1px" }} />; }
function Base10({ c = 0, d = 0, u = 0 }: { c?: number; d?: number; u?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "3mm", verticalAlign: "middle" }}>
      <span>{Array.from({ length: c }).map((_, i) => <Plaque key={i} />)}</span>
      <span>{Array.from({ length: d }).map((_, i) => <Barre key={i} />)}</span>
      <span>{Array.from({ length: u }).map((_, i) => <Cube key={i} />)}</span>
    </span>
  );
}

const ET = ["Dénombrer une collection", "On groupe par paquets", "Les centaines", "Le tableau c · d · u", "CE2 : les milliers", "Je retiens"];
export function NumerationDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Nombres · Dénombrer une collection</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="text-6xl">🔢</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: MA }}>Dénombrer une collection</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Quand il y a beaucoup d'objets, comment les compter vite&nbsp;?</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>On groupe par paquets</h2>
            <p className="mt-4 text-2xl text-stone-600">On fait des <b style={{ color: ORANGE }}>paquets de 10</b> : ce sont les <b style={{ color: ORANGE }}>dizaines</b>.</p>
            <div className="mt-4 text-2xl">10 cubes <Cube /> = 1 barre <Barre /></div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Les centaines</h2>
            <p className="mt-4 text-2xl text-stone-600">10 dizaines <Barre /> = 1 <b style={{ color: BLEU }}>centaine</b> <Plaque /> (100)</p>
            <div className="mt-4 text-2xl">247 = <Base10 c={2} d={4} u={7} /></div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Le tableau c · d · u</h2>
            <table className="mt-4 border-collapse text-3xl" style={{ margin: "0 auto" }}>
              <thead><tr>{[["c", BLEU], ["d", ORANGE], ["u", VERT]].map(([l, col]) => <th key={l as string} className="border-2 border-stone-800 px-6 py-1 text-white" style={{ background: col as string }}>{l}</th>)}</tr></thead>
              <tbody><tr>{["2", "4", "7"].map((n, k) => <td key={k} className="border-2 border-stone-800 px-6 py-2 font-bold">{n}</td>)}</tr></tbody>
            </table>
            <p className="mt-3 text-2xl text-stone-600">2 centaines, 4 dizaines et 7 unités = <b>247</b></p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>CE2 : les milliers</h2>
            <p className="mt-4 text-2xl text-stone-600">10 centaines = 1 <b>millier</b> (1 000).</p>
            <table className="mt-4 border-collapse text-2xl" style={{ margin: "0 auto" }}>
              <thead><tr>{["m", "c", "d", "u"].map((l) => <th key={l} className="border-2 border-stone-800 bg-stone-700 px-5 py-1 text-white">{l}</th>)}</tr></thead>
              <tbody><tr>{["1", "0", "0", "0"].map((n, k) => <td key={k} className="border-2 border-stone-800 px-5 py-2 font-bold">{n}</td>)}</tr></tbody>
            </table>
            <p className="mt-2 text-xl text-stone-500">On peut dénombrer jusqu'à <b>1 000</b>.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🔢</div>
            <h1 className="text-4xl font-extrabold" style={{ color: MA }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Je groupe par <b style={{ color: ORANGE }}>dizaines</b> puis par <b style={{ color: BLEU }}>centaines</b>. Le tableau <b>c · d · u</b> (et <b>m</b> pour les CE2) m'aide à écrire le nombre.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MA, color: MA }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MA }}>▶</button>
      </div>
    </div>
  );
}

export function NumerationLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "36px", margin: "0 0 3mm", textAlign: "center", fontWeight: 700, color: MA, fontFamily: CURSIVE }}>Dénombrer une collection</h1>
      <div style={{ display: "flex", gap: "3mm", justifyContent: "center", fontFamily: CONSIGNE_FONT, fontSize: "13px", fontWeight: 700, marginBottom: "2mm" }}>
        <span><Cube /> 1 unité</span><span><Barre /> 1 dizaine = 10 unités</span><span><Plaque /> 1 centaine = 10 dizaines</span>
      </div>
      <div style={{ textAlign: "center", fontFamily: CURSIVE, fontSize: "20px" }}>247 = <Base10 c={2} d={4} u={7} /></div>
      <table style={{ borderCollapse: "collapse", margin: "3mm auto", fontSize: "20px", fontFamily: CURSIVE }}>
        <thead><tr>{[["centaines", BLEU], ["dizaines", ORANGE], ["unités", VERT]].map(([l, col]) => <th key={l as string} style={{ border: "1.5px solid #333", background: col as string, color: "#fff", padding: "1mm 6mm", fontSize: "13px", fontFamily: CONSIGNE_FONT }}>{l}</th>)}</tr></thead>
        <tbody><tr>{["2", "4", "7"].map((n, k) => <td key={k} style={{ border: "1.5px solid #333", padding: "1mm 6mm", fontWeight: 700 }}>{n}</td>)}</tr></tbody>
      </table>
      <div style={{ marginTop: "2mm", border: `2px dashed ${MA}`, borderRadius: "3mm", padding: "2.5mm 5mm", fontFamily: CURSIVE, fontSize: "18px", textAlign: "center", background: "#ecfeff" }}>
        Je groupe par paquets de 10. <b>CE2</b> : 10 centaines = 1 <b>millier</b> (1 000), tableau <b>m · c · d · u</b>.
      </div>
    </div>
  );
}

/* ===== Fiches au FORMAT du fichier « Nombres entiers » (type manuel) :
 * numéro d'exercice entouré, base 10 + tableau c/d/u à compléter, cartes-nombre,
 * « écris le nombre représenté », un problème. Encre sobre, façon fichier. ===== */
function CduTab({ cols }: { cols: string[] }) {
  return (
    <table style={{ borderCollapse: "collapse", fontFamily: MODELE_FONT, display: "inline-table", verticalAlign: "middle", margin: "0 2mm" }}>
      <thead><tr>{cols.map((e) => <th key={e} style={{ border: "1.3px solid #111", background: "#eef2f6", fontSize: "11px", fontWeight: 800, padding: "0.5mm 0", width: "9mm" }}>{e}</th>)}</tr></thead>
      <tbody><tr>{cols.map((e) => <td key={e} style={{ border: "1.3px solid #111", height: "9mm" }} />)}</tr></tbody>
    </table>
  );
}
function CarteNbr({ v }: { v: number }) {
  return <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "15mm", height: "11mm", border: "2px solid #334155", borderRadius: "2mm", background: "#f8fafc", fontWeight: 800, fontSize: "19px", margin: "0 1.5mm", fontFamily: MODELE_FONT }}>{v}</span>;
}
function NumBadge({ n }: { n: number }) {
  return <span style={{ flex: "0 0 auto", display: "inline-flex", width: "7mm", height: "7mm", borderRadius: "50%", border: `2px solid ${MA}`, color: MA, fontWeight: 800, fontSize: "13px", alignItems: "center", justifyContent: "center" }}>{n}</span>;
}
function ExM({ n, consigne, children }: { n: number; consigne: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.2mm" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "2mm", marginBottom: "1mm" }}>
        <NumBadge n={n} /><span style={{ fontSize: "13px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>{consigne}</span>
      </div>
      <div style={{ paddingLeft: "9mm" }}>{children}</div>
    </div>
  );
}
function FrameManuel({ num, titre, niveau, pied = "Nombres entiers · dénombrer et représenter une collection", children }: { num: number; titre: string; niveau: string; pied?: string; children: React.ReactNode }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm 10mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "1mm" }}>
        <span style={{ display: "inline-flex", width: "9mm", height: "9mm", borderRadius: "50%", background: MA, color: "#fff", fontWeight: 800, fontSize: "18px", alignItems: "center", justifyContent: "center" }}>{num}</span>
        <h1 style={{ fontSize: "17px", margin: 0, fontWeight: 800, color: "#0f172a", fontFamily: CONSIGNE_FONT }}>{titre}</h1>
        <span style={{ marginLeft: "auto", fontSize: "11px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .............. · {niveau}</span>
      </div>
      <div style={{ borderBottom: `2px solid ${MA}`, marginBottom: "4mm" }} />
      {children}
      <div style={{ borderTop: "1px solid #cbd5e1", marginTop: "4mm", paddingTop: "1mm", fontSize: "9px", color: "#94a3b8", fontFamily: CONSIGNE_FONT }}>{pied}</div>
    </div>
  );
}

/* Bande numérique (ligne graduée) : cases avec quelques nombres, d'autres vides. */
function BandeNombres({ cases, large = "11mm" }: { cases: (number | null)[]; large?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {cases.map((v, i) => (
        <div key={i} style={{ width: large, height: "9mm", border: "1.4px solid #334155", borderLeft: i === 0 ? "1.4px solid #334155" : "none", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MODELE_FONT, fontWeight: 800, fontSize: "14px", background: v === null ? "#fff" : "#eef2f6" }}>{v === null ? "" : v}</div>
      ))}
    </div>
  );
}

/* ---- Fiche CE1 : jusqu'à 999 (c/d/u) ---- */
export function FicheNumerationCE1() {
  return (
    <FrameManuel num={1} titre="Dénombrer et représenter une collection jusqu'à 999" niveau="CE1">
      <ExM n={1} consigne={<><b>Écris</b> le nombre représenté (complète le tableau).</>}>
        <div style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "2mm" }}><Base10 c={1} d={3} u={4} /><CduTab cols={["c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "3mm" }}><Base10 c={2} d={0} u={5} /><CduTab cols={["c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
      </ExM>
      <ExM n={2} consigne={<><b>Écris</b> le nombre représenté par les cartes-nombre.</>}>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}><CarteNbr v={300} /><span style={{ fontWeight: 800 }}>+</span><CarteNbr v={40} /><span style={{ fontWeight: 800 }}>+</span><CarteNbr v={5} /><span style={{ fontFamily: CURSIVE, fontSize: "18px", marginLeft: "3mm" }}>= ……</span></div>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", marginTop: "2mm" }}><CarteNbr v={600} /><span style={{ fontWeight: 800 }}>+</span><CarteNbr v={20} /><span style={{ fontFamily: CURSIVE, fontSize: "18px", marginLeft: "3mm" }}>= ……</span></div>
      </ExM>
      <ExM n={3} consigne={<><b>Complète</b> le tableau, puis écris le nombre.</>}>
        <div style={{ display: "flex", alignItems: "center", gap: "3mm", fontFamily: CURSIVE, fontSize: "15px" }}>3 centaines, 5 dizaines, 2 unités <CduTab cols={["c", "d", "u"]} /> = ……</div>
      </ExM>
      <ExM n={4} consigne={<><b>Compare</b> avec &lt; , &gt; ou =.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>234 …… 243 &nbsp;&nbsp;&nbsp; 500 …… 500 &nbsp;&nbsp;&nbsp; 718 …… 178</div>
      </ExM>
      <ExM n={5} consigne={<><b>Problème.</b> Réponds sur ton cahier.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>Dans la bibliothèque, il y a 3 étagères de 100 livres, 4 paquets de 10 livres et 6 livres seuls. Combien de livres en tout ?</div>
      </ExM>
    </FrameManuel>
  );
}

/* ---- Fiche CE2 : jusqu'à 1 000 (m/c/d/u) ---- */
export function FicheNumerationCE2() {
  return (
    <FrameManuel num={1} titre="Dénombrer et représenter une collection jusqu'à 1 000" niveau="CE2">
      <ExM n={1} consigne={<><b>Écris</b> le nombre représenté (complète le tableau).</>}>
        <div style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "2mm" }}><Base10 c={4} d={6} u={3} /><CduTab cols={["m", "c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "3mm" }}><Base10 c={7} d={0} u={8} /><CduTab cols={["m", "c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
      </ExM>
      <ExM n={2} consigne={<><b>Écris</b> le nombre représenté par les cartes-nombre.</>}>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}><CarteNbr v={500} /><span style={{ fontWeight: 800 }}>+</span><CarteNbr v={80} /><span style={{ fontWeight: 800 }}>+</span><CarteNbr v={7} /><span style={{ fontFamily: CURSIVE, fontSize: "18px", marginLeft: "3mm" }}>= ……</span></div>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", marginTop: "2mm" }}><CarteNbr v={900} /><span style={{ fontWeight: 800 }}>+</span><CarteNbr v={100} /><span style={{ fontFamily: CURSIVE, fontSize: "18px", marginLeft: "3mm" }}>= …… (attention !)</span></div>
      </ExM>
      <ExM n={3} consigne={<><b>Complète</b> le tableau, puis écris le nombre.</>}>
        <div style={{ display: "flex", alignItems: "center", gap: "3mm", fontFamily: CURSIVE, fontSize: "15px" }}>6 centaines, 3 dizaines, 9 unités <CduTab cols={["m", "c", "d", "u"]} /> = ……</div>
      </ExM>
      <ExM n={4} consigne={<><b>Compare</b> (&lt; &gt; =), puis range du plus petit au plus grand.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>648 …… 684 &nbsp;&nbsp; 999 …… 1 000 &nbsp;&nbsp; 705 …… 750</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", marginTop: "1.5mm" }}>512 · 125 · 251 · 521 → ……………………………</div>
      </ExM>
      <ExM n={5} consigne={<><b>Problème.</b> Réponds sur ton cahier.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>Pour la kermesse, on range les ballons : 9 cartons de 100 ballons et 10 cartons de 10 ballons. Combien de ballons en tout ?</div>
      </ExM>
    </FrameManuel>
  );
}

/* ======================================================================
 * LA SUITE DES NOMBRES — connaître / lire / écrire la suite.
 *   CE1 : jusqu'à 200.   CE2 : jusqu'à 2 000.
 *   Diaporama + leçon + fiches « au format manuel » + évaluation.
 * ==================================================================== */
const ET_SUITE = ["La suite des nombres", "Un par un : avant / après", "De 10 en 10", "De 100 en 100", "Ranger les nombres", "Je retiens"];
export function SuiteNombresDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET_SUITE.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Nombres · La suite des nombres</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET_SUITE.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="text-6xl">🔢➡️</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: MA }}>La suite des nombres</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Les nombres se suivent <b>toujours dans le même ordre</b>.</p>
            <p className="mt-1 text-xl text-stone-500">CE1 : jusqu'à <b>200</b> · CE2 : jusqu'à <b>2 000</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Un par un : avant / après</h2>
            <table className="mt-5 border-collapse text-3xl" style={{ margin: "0 auto" }}>
              <tbody><tr>{[97, 98, 99, 100, 101, 102].map((n) => <td key={n} className="border-2 border-stone-700 px-4 py-2 font-bold" style={{ background: n === 100 ? "#cffafe" : "#fff" }}>{n}</td>)}</tr></tbody>
            </table>
            <p className="mt-4 text-2xl text-stone-600">Juste <b>avant</b> 100 → <b>99</b> (−1). &nbsp; Juste <b>après</b> 100 → <b>101</b> (+1).</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>De 10 en 10</h2>
            <table className="mt-5 border-collapse text-3xl" style={{ margin: "0 auto" }}>
              <tbody><tr>{[120, 130, 140, 150, 160].map((n) => <td key={n} className="border-2 border-stone-700 px-4 py-2 font-bold">{n}</td>)}</tr></tbody>
            </table>
            <p className="mt-4 text-2xl text-stone-600">J'ajoute <b style={{ color: ORANGE }}>10</b> : c'est le chiffre des <b style={{ color: ORANGE }}>dizaines</b> qui change.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>De 100 en 100</h2>
            <table className="mt-5 border-collapse text-2xl" style={{ margin: "0 auto" }}>
              <tbody><tr>{[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((n) => <td key={n} className="border-2 border-stone-700 px-2 py-2 font-bold" style={{ background: n === 1000 ? "#cffafe" : "#fff" }}>{n}</td>)}</tr></tbody>
            </table>
            <p className="mt-4 text-2xl text-stone-600">J'ajoute <b style={{ color: BLEU }}>100</b> : c'est le chiffre des <b style={{ color: BLEU }}>centaines</b> qui change.</p>
            <p className="mt-1 text-xl text-stone-500">CE2, on continue : 1 100, 1 200 … jusqu'à <b>2 000</b>.</p>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Ranger les nombres</h2>
            <p className="mt-4 text-2xl text-stone-600">Du plus <b>petit</b> au plus <b>grand</b> :</p>
            <p className="mt-2 text-3xl font-bold">58 &lt; 85 &lt; 108 &lt; 180</p>
            <p className="mt-4 text-xl text-stone-500">Je regarde d'abord les <b>centaines</b>, puis les <b>dizaines</b>, puis les <b>unités</b>.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🔢</div>
            <h1 className="text-4xl font-extrabold" style={{ color: MA }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600"><b>+1</b> → le nombre d'après · <b>−1</b> → le nombre d'avant. Je sais compter <b>de 10 en 10</b> et <b>de 100 en 100</b>, et <b>ranger</b> les nombres.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MA, color: MA }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET_SUITE.length} · {ET_SUITE[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MA }}>▶</button>
      </div>
    </div>
  );
}

export function SuiteNombresLecon() {
  const Carte = ({ titre, ex }: { titre: React.ReactNode; ex: React.ReactNode }) => (
    <div style={{ flex: 1, border: `2px solid ${MA}`, borderRadius: "3mm", padding: "2mm 2.5mm", background: "#f0fdff", textAlign: "center" }}>
      <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "12.5px", color: MA }}>{titre}</div>
      <div style={{ fontFamily: CURSIVE, fontSize: "16px", marginTop: "0.5mm" }}>{ex}</div>
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "34px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: MA, fontFamily: CURSIVE }}>La suite des nombres</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: "#0e7490", marginBottom: "2.5mm" }}>CE1 : jusqu'à 200 · CE2 : jusqu'à 2 000</div>
      <BandeNombres cases={[97, 98, 99, 100, 101, 102, 103]} large="18mm" />
      <div style={{ textAlign: "center", fontFamily: CURSIVE, fontSize: "15px", margin: "1.5mm 0 3mm" }}>Les nombres se suivent toujours dans le même ordre.</div>
      <div style={{ display: "flex", gap: "3mm" }}>
        <Carte titre="Avant / après" ex={<>99 ← <b>100</b> → 101<br />(−1) &nbsp;&nbsp; (+1)</>} />
        <Carte titre="De 10 en 10" ex={<>120 · 130 · <b>140</b> · 150<br />(+10)</>} />
        <Carte titre="De 100 en 100" ex={<>100 · 200 · <b>300</b> · 400<br />(+100)</>} />
      </div>
      <div style={{ marginTop: "3mm", border: `2px dashed ${MA}`, borderRadius: "3mm", padding: "2.5mm 5mm", fontFamily: CURSIVE, fontSize: "17px", textAlign: "center", background: "#ecfeff" }}>
        Pour <b>ranger</b>, je compare : je regarde d'abord les <b>centaines</b>, puis les <b>dizaines</b>, puis les <b>unités</b>. &nbsp; 58 &lt; 85 &lt; 108 &lt; 180.
      </div>
    </div>
  );
}

/* ---- Fiche CE1 : la suite des nombres jusqu'à 200 ---- */
export function FicheSuiteCE1() {
  return (
    <FrameManuel num={2} titre="La suite des nombres jusqu'à 200" niveau="CE1" pied="Nombres entiers · connaître la suite des nombres">
      <ExM n={1} consigne={<><b>Complète</b> la suite (un par un, +1).</>}>
        <BandeNombres cases={[96, null, 98, null, null, 101, null, 103]} large="15mm" />
      </ExM>
      <ExM n={2} consigne={<><b>Écris</b> le nombre juste avant et juste après.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.9 }}>…… · 100 · …… &nbsp;&nbsp;&nbsp; …… · 149 · …… &nbsp;&nbsp;&nbsp; …… · 180 · ……</div>
      </ExM>
      <ExM n={3} consigne={<><b>Complète</b> de 10 en 10 (+10).</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.9 }}>110 · 120 · …… · …… · 150 · …… · ……<br />…… · …… · 170 · 180 · …… · ……</div>
      </ExM>
      <ExM n={4} consigne={<><b>Complète</b> de 100 en 100, puis continue.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>0 · 100 · …… &nbsp;&nbsp;&nbsp; puis : 150 · 160 · 170 · …… · …… · ……</div>
      </ExM>
      <ExM n={5} consigne={<><b>Range</b> ces nombres du plus petit au plus grand.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>130 · 103 · 95 · 150 · 118 → …………………………………</div>
      </ExM>
      <ExM n={6} consigne={<><b>Problème.</b> Réponds sur ton cahier.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>Léa compte ses images de 10 en 10. Elle part de 120 et compte 5 fois 10. À quel nombre arrive-t-elle ?</div>
      </ExM>
    </FrameManuel>
  );
}

/* ---- Fiche CE2 : la suite des nombres jusqu'à 2 000 ---- */
export function FicheSuiteCE2() {
  return (
    <FrameManuel num={2} titre="La suite des nombres jusqu'à 2 000" niveau="CE2" pied="Nombres entiers · connaître la suite des nombres">
      <ExM n={1} consigne={<><b>Complète</b> la suite (un par un, +1).</>}>
        <BandeNombres cases={[798, null, 800, null, null, 803, null, 805]} large="15mm" />
      </ExM>
      <ExM n={2} consigne={<><b>Écris</b> le nombre juste avant et juste après.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.9 }}>…… · 500 · …… &nbsp;&nbsp;&nbsp; …… · 999 · …… &nbsp;&nbsp;&nbsp; …… · 1 200 · …… &nbsp;&nbsp;&nbsp; …… · 1 999 · ……</div>
      </ExM>
      <ExM n={3} consigne={<><b>Complète</b> de 100 en 100.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.9 }}>600 · 700 · …… · …… · 1 000 · …… · ……<br />1 400 · …… · …… · 1 700 · …… · …… · 2 000</div>
      </ExM>
      <ExM n={4} consigne={<><b>Complète</b> de 10 en 10.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>1 250 · 1 260 · …… · …… · 1 290 · …… · ……</div>
      </ExM>
      <ExM n={5} consigne={<><b>Range</b> ces nombres du plus petit au plus grand.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>1 020 · 980 · 1 200 · 1 002 · 890 → …………………………………</div>
      </ExM>
      <ExM n={6} consigne={<><b>Problème.</b> Réponds sur ton cahier.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>Un libraire compte ses livres de 100 en 100. Il part de 1 500 et compte 4 fois 100. À quel nombre arrive-t-il ?</div>
      </ExM>
    </FrameManuel>
  );
}

/* ======================================================================
 * ÉVALUATION — dénombrer et représenter une collection jusqu'à 1 000.
 * ==================================================================== */
export function EvalCollectionCE1() {
  return (
    <EvalFrame titre="Dénombrer une collection" niveau="CE1" duree="~20 min">
      <div style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
        <ExM n={1} consigne={<><b>Écris</b> le nombre représenté.</>}>
          <div style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "2mm" }}><Base10 c={2} d={3} u={4} /><CduTab cols={["c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: "3mm" }}><Base10 c={3} d={0} u={6} /><CduTab cols={["c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
        </ExM>
        <ExM n={2} consigne={<><b>Écris</b> ces nombres en chiffres.</>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.9 }}>4 centaines 5 dizaines 2 unités = …… &nbsp;&nbsp; 7 centaines 0 dizaine 8 unités = ……</div>
        </ExM>
        <ExM n={3} consigne={<><b>Dessine</b> le nombre 215 en centaines (▢), dizaines (|) et unités (•).</>}>
          <div style={{ border: "1.3px solid #94a3b8", borderRadius: "2mm", height: "20mm" }} />
        </ExM>
        <ExM n={4} consigne={<><b>Complète</b> : le nombre juste avant et juste après.</>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>…… · 200 · …… &nbsp;&nbsp;&nbsp; …… · 439 · …… &nbsp;&nbsp;&nbsp; …… · 700 · ……</div>
        </ExM>
        <ExM n={5} consigne={<><b>Compare</b> (&lt; , &gt; ou =), puis range du plus petit au plus grand.</>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>234 …… 243 &nbsp;&nbsp; 500 …… 500 &nbsp;&nbsp; 618 …… 168</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "17px", marginTop: "1.5mm" }}>305 · 350 · 53 · 135 → …………………………</div>
        </ExM>
        <ExM n={6} consigne={<><b>Problème.</b></>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>Dans la classe, il y a 2 boîtes de 100 crayons, 5 paquets de 10 crayons et 3 crayons seuls. Combien de crayons en tout ? ……</div>
        </ExM>
      </div>
      <GrilleLSU competences={["Associer une collection (base 10) à son écriture chiffrée", "Écrire un nombre à partir de c/d/u", "Représenter un nombre jusqu'à 999", "Connaître les nombres voisins et comparer / ranger", "Résoudre un problème de groupements (centaines, dizaines, unités)"]} />
    </EvalFrame>
  );
}

export function EvalCollectionCE2() {
  return (
    <EvalFrame titre="Dénombrer une collection" niveau="CE2" duree="~20 min">
      <div style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
        <ExM n={1} consigne={<><b>Écris</b> le nombre représenté.</>}>
          <div style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "2mm" }}><Base10 c={5} d={4} u={3} /><CduTab cols={["m", "c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: "3mm" }}><Base10 c={8} d={0} u={5} /><CduTab cols={["m", "c", "d", "u"]} /><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>= ……</span></div>
        </ExM>
        <ExM n={2} consigne={<><b>Écris</b> ces nombres en chiffres.</>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.9 }}>6 centaines 3 dizaines 9 unités = …… &nbsp;&nbsp; 9 centaines 10 dizaines = …… (attention !)</div>
        </ExM>
        <ExM n={3} consigne={<><b>Décompose</b> comme dans l'exemple (245 = 200 + 40 + 5).</>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.9 }}>508 = …… + …… + …… &nbsp;&nbsp;&nbsp; 760 = …… + …… &nbsp;&nbsp;&nbsp; 1 000 = ……</div>
        </ExM>
        <ExM n={4} consigne={<><b>Complète</b> : le nombre juste avant et juste après.</>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>…… · 600 · …… &nbsp;&nbsp;&nbsp; …… · 799 · …… &nbsp;&nbsp;&nbsp; …… · 1 000 · ……</div>
        </ExM>
        <ExM n={5} consigne={<><b>Compare</b> (&lt; , &gt; ou =), puis range du plus petit au plus grand.</>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>648 …… 684 &nbsp;&nbsp; 999 …… 1 000 &nbsp;&nbsp; 705 …… 750</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "17px", marginTop: "1.5mm" }}>512 · 125 · 251 · 521 · 1 000 → …………………………</div>
        </ExM>
        <ExM n={6} consigne={<><b>Problème.</b></>}>
          <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>Pour la fête, on range les bonbons : 9 sachets de 100 bonbons et 10 sachets de 10 bonbons. Combien de bonbons en tout ? ……</div>
        </ExM>
      </div>
      <GrilleLSU competences={["Associer une collection (base 10) à son écriture chiffrée", "Écrire un nombre à partir de m/c/d/u", "Décomposer un nombre jusqu'à 1 000", "Connaître les nombres voisins et comparer / ranger", "Résoudre un problème de groupements"]} />
    </EvalFrame>
  );
}
