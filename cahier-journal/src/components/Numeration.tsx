/**
 * Maths — Dénombrer et représenter une collection (début P2).
 *   CE1 : jusqu'à 999 — centaines, dizaines, unités (c/d/u).
 *   CE2 : jusqu'à 1 000 — milliers, centaines, dizaines, unités (m/c/d/u).
 * Diaporama de découverte (grouper par paquets) + leçon + fiches « Je m'entraîne ».
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, Choix, MODELE_FONT } from "./ficheModele";

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

function TableCDU({ entetes }: { entetes: string[] }) {
  return (
    <table style={{ borderCollapse: "collapse", margin: "1mm 0", fontFamily: MODELE_FONT }}>
      <thead><tr>{entetes.map((e) => <th key={e} style={{ border: "1.5px solid #333", background: MA, color: "#fff", fontSize: "11px", fontWeight: 800, padding: "1mm 7mm" }}>{e}</th>)}</tr></thead>
      <tbody><tr>{entetes.map((e) => <td key={e} style={{ border: "1.5px solid #333", height: "8mm", width: "16mm" }} />)}</tr></tbody>
    </table>
  );
}

/* ---- Fiche CE1 : jusqu'à 999 (c/d/u) ---- */
export function FicheNumerationCE1() {
  return (
    <FicheModele matiere="Nombres" titre="Dénombrer jusqu'à 999" couleur={MA} dotActif={1} page="Dénombrer · CE1">
      <SectionBar couleur={MA}>Je compte la collection</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Compte</b> et écris le nombre.</>}>
        <div style={{ fontSize: "14px", margin: "1mm 0" }}><Base10 c={1} d={3} u={4} /> &nbsp;=&nbsp; ……</div>
        <div style={{ fontSize: "14px", margin: "1mm 0" }}><Base10 c={2} d={0} u={5} /> &nbsp;=&nbsp; ……</div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Décompose</b> le nombre.</>}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "4px", padding: "0.5mm 3mm", width: "fit-content", marginBottom: "1mm" }}>Exemple : 347 = 3 c, 4 d et 7 u</div>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>a) 256 = …… c, …… d et …… u</div>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>b) 408 = …… c, …… d et …… u</div>
      </Exo>
      <SectionBar couleur={MA}>J'écris et je range</SectionBar>
      <Exo n={3} couleur={MA} consigne={<><b>Écris</b> le nombre dans le tableau, puis en chiffres.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE, marginBottom: "1mm" }}>3 centaines, 5 dizaines et 2 unités :</div>
        <TableCDU entetes={["c", "d", "u"]} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>→ ……………</div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Compare</b> avec &lt; , &gt; ou =.</>}>
        <div style={{ fontSize: "16px", fontFamily: CURSIVE }}>a) 234 …… 243 &nbsp;&nbsp; b) 500 …… 500 &nbsp;&nbsp; c) 718 …… 178</div>
      </Exo>
      <Exo n={5} couleur={MA} consigne={<><b>Colorie</b> le plus grand nombre.</>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm", fontSize: "13px" }}>
          <Choix options={["309", "390"]} /><Choix options={["645", "654"]} />
        </div>
      </Exo>
    </FicheModele>
  );
}

/* ---- Fiche CE2 : jusqu'à 1 000 (m/c/d/u) ---- */
export function FicheNumerationCE2() {
  return (
    <FicheModele matiere="Nombres" titre="Dénombrer jusqu'à 1 000" couleur={MA} dotActif={2} page="Dénombrer · CE2">
      <SectionBar couleur={MA}>Je compte la collection</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Compte</b> et écris le nombre.</>}>
        <div style={{ fontSize: "14px", margin: "1mm 0" }}><Base10 c={4} d={6} u={3} /> &nbsp;=&nbsp; ……</div>
        <div style={{ fontSize: "14px", margin: "1mm 0" }}><Base10 c={7} d={0} u={8} /> &nbsp;=&nbsp; ……</div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Décompose</b> le nombre.</>}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "4px", padding: "0.5mm 3mm", width: "fit-content", marginBottom: "1mm" }}>Exemple : 1 000 = 1 m, 0 c, 0 d et 0 u</div>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>a) 684 = …… c, …… d et …… u</div>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>b) 907 = …… c, …… d et …… u</div>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>c) 1 000 = …… m</div>
      </Exo>
      <SectionBar couleur={MA}>J'écris et je range</SectionBar>
      <Exo n={3} couleur={MA} consigne={<><b>Écris</b> le nombre dans le tableau, puis en chiffres.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE, marginBottom: "1mm" }}>6 centaines, 3 dizaines et 9 unités :</div>
        <TableCDU entetes={["m", "c", "d", "u"]} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>→ ……………</div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Compare</b> avec &lt; , &gt; ou =.</>}>
        <div style={{ fontSize: "16px", fontFamily: CURSIVE }}>a) 648 …… 684 &nbsp;&nbsp; b) 999 …… 1 000 &nbsp;&nbsp; c) 705 …… 750</div>
      </Exo>
      <Exo n={5} couleur={MA} consigne={<><b>Range</b> du plus petit au plus grand.</>}>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>512 · 125 · 251 · 521 → ……………………………</div>
      </Exo>
    </FicheModele>
  );
}
