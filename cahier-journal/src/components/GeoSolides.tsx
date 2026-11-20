/**
 * Maths — Espace & Géométrie : LES SOLIDES (chapitre suivant, P2).
 * CE1 : reconnaître et nommer les solides (cube, pavé droit, boule, cylindre,
 *       cône, pyramide) ; les distinguer des figures planes ; les retrouver dans
 *       des objets du quotidien.
 * CE2 : + décrire un solide (faces, arêtes, sommets).
 * Solides dessinés (figures géométriques originales, pas de photo).
 *   • Diaporama · Leçon à coller · Fiche CE1 · Fiche CE2.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, LignesModele } from "./ficheModele";

const MA = "#0e7490";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const FILL = "#e0f2fe", ST = "#0f172a";

/* --- Solides dessinés (SVG original) --- */
export function Solide({ type, s = 70 }: { type: string; s?: number }) {
  const P = (pts: string, fill = FILL) => <polygon points={pts} fill={fill} stroke={ST} strokeWidth="1.6" strokeLinejoin="round" />;
  const L = (x1: number, y1: number, x2: number, y2: number, dash = false) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={ST} strokeWidth="1.4" strokeDasharray={dash ? "3 2" : undefined} />;
  let g: React.ReactNode = null;
  if (type === "cube") g = <>{P("22,42 64,42 64,84 22,84")}{P("22,42 40,28 82,28 64,42", "#bae6fd")}{P("64,42 82,28 82,70 64,84", "#7dd3fc")}</>;
  else if (type === "pave") g = <>{P("16,46 70,46 70,82 16,82")}{P("16,46 34,32 88,32 70,46", "#bae6fd")}{P("70,46 88,32 88,68 70,82", "#7dd3fc")}</>;
  else if (type === "boule") g = <><circle cx="50" cy="55" r="32" fill={FILL} stroke={ST} strokeWidth="1.6" /><ellipse cx="50" cy="55" rx="32" ry="10" fill="none" stroke={ST} strokeWidth="1.1" strokeDasharray="3 2" /></>;
  else if (type === "cylindre") g = <><rect x="26" y="30" width="48" height="52" fill={FILL} stroke="none" />{L(26, 30, 26, 82)}{L(74, 30, 74, 82)}<ellipse cx="50" cy="82" rx="24" ry="8" fill="#bae6fd" stroke={ST} strokeWidth="1.5" /><ellipse cx="50" cy="30" rx="24" ry="8" fill="#e0f2fe" stroke={ST} strokeWidth="1.5" /></>;
  else if (type === "cone") g = <><path d="M50 20 L26 80 A24 8 0 0 0 74 80 Z" fill={FILL} stroke={ST} strokeWidth="1.6" /><ellipse cx="50" cy="80" rx="24" ry="8" fill="none" stroke={ST} strokeWidth="1.2" strokeDasharray="3 2" /></>;
  else if (type === "pyramide") g = <>{P("28,80 72,80 84,66 40,66", "#bae6fd")}{P("28,80 72,80 56,24", FILL)}{L(56, 24, 84, 66)}{L(56, 24, 40, 66, true)}{L(40, 66, 28, 80, true)}</>;
  return <svg viewBox="0 0 100 100" width={s} height={s} style={{ display: "block" }}>{g}</svg>;
}

const SOLIDES: { type: string; nom: string }[] = [
  { type: "cube", nom: "le cube" }, { type: "pave", nom: "le pavé droit" }, { type: "boule", nom: "la boule" },
  { type: "cylindre", nom: "le cylindre" }, { type: "cone", nom: "le cône" }, { type: "pyramide", nom: "la pyramide" },
];

/* ----------------------------- DIAPORAMA ----------------------------- */
const ET = ["Les solides", "Plat ou solide ?", "Je reconnais les solides", "Décrire un solide (CE2)", "Autour de moi", "Je retiens"];
export function SolidesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géométrie · Les solides</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center gap-2"><Solide type="cube" s={70} /><Solide type="boule" s={70} /><Solide type="cylindre" s={70} /></div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: MA }}>Les solides</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Un solide, ce n'est pas plat : il a du <b>volume</b>, on peut le <b>tenir dans la main</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Plat ou solide ?</h2>
            <div className="mt-4 flex items-center justify-center gap-10">
              <div><div style={{ width: 90, height: 90, border: `2px solid ${ST}`, background: FILL, margin: "0 auto" }} /><p className="mt-2 text-xl">une figure <b>plane</b> (plate)</p></div>
              <div><Solide type="cube" s={100} /><p className="mt-2 text-xl">un <b>solide</b> (du volume)</p></div>
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Je reconnais les solides</h2>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {SOLIDES.map((s) => <div key={s.type} className="rounded-xl border-2 bg-white p-1" style={{ borderColor: MA }}><div className="flex justify-center"><Solide type={s.type} s={66} /></div><div className="text-base font-bold" style={{ color: MA }}>{s.nom}</div></div>)}
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Décrire un solide <span className="text-xl text-stone-500">(CE2)</span></h2>
            <div className="mt-4 flex items-center justify-center gap-6">
              <Solide type="cube" s={120} />
              <div className="text-left text-2xl text-stone-700">
                <p>▫️ les <b>faces</b> (les côtés plats) : 6</p>
                <p>📏 les <b>arêtes</b> (les bords) : 12</p>
                <p>• les <b>sommets</b> (les coins) : 8</p>
              </div>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Autour de moi</h2>
            <div className="mt-4 grid grid-cols-3 gap-3 text-2xl text-stone-700">
              <p>🎲 un dé → <b>cube</b></p><p>📦 une boîte → <b>pavé</b></p><p>⚽ un ballon → <b>boule</b></p>
              <p>🥫 une boîte de conserve → <b>cylindre</b></p><p>🍦 un cornet → <b>cône</b></p><p>⛺ une tente → <b>pyramide</b></p>
            </div>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🧊</div>
            <h1 className="text-4xl font-extrabold" style={{ color: MA }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Les <b>solides</b> ont du volume : cube, pavé droit, boule, cylindre, cône, pyramide. Un solide a des <b>faces</b>, des <b>arêtes</b> et des <b>sommets</b>.</p>
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

/* ------------------------------- LEÇON ------------------------------- */
export function SolidesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "32px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: MA, fontFamily: CURSIVE }}>Les solides</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: "#0e7490", marginBottom: "2mm" }}>GÉOMÉTRIE · un solide a du volume (il n'est pas plat)</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2mm", margin: "2mm 0" }}>
        {SOLIDES.map((s) => (
          <div key={s.type} style={{ border: `1.6px solid ${MA}`, borderRadius: "2mm", padding: "1mm", textAlign: "center", background: "#f0fdff" }}>
            <div style={{ display: "flex", justifyContent: "center" }}><Solide type={s.type} s={54} /></div>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px", fontWeight: 700 }}>{s.nom}</div>
          </div>
        ))}
      </div>
      <div style={{ border: `2px solid ${MA}`, borderRadius: "2mm", padding: "2mm 4mm", background: "#f8fdff", display: "flex", gap: "5mm", alignItems: "center" }}>
        <Solide type="cube" s={66} />
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.5 }}>
          <b style={{ color: MA }}>Pour décrire un solide (CE2) :</b><br />
          les <b>faces</b> (côtés plats), les <b>arêtes</b> (les bords), les <b>sommets</b> (les coins).<br />
          Le cube : <b>6 faces</b>, <b>12 arêtes</b>, <b>8 sommets</b>.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- FICHES ------------------------------- */
export function FicheSolidesCE1() {
  return (
    <FicheModele matiere="Géométrie" titre="Les solides" couleur={MA} dots={4} dotActif={1} page="Les solides · CE1">
      <SectionBar couleur={MA}>Je reconnais et je nomme</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Écris</b> le nom de chaque solide (cube · pavé droit · boule · cylindre · cône · pyramide).</>}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", justifyContent: "space-around", marginTop: "1mm" }}>
          {["cube", "boule", "cylindre", "cone", "pyramide", "pave"].map((t) => (
            <div key={t} style={{ textAlign: "center" }}><Solide type={t} s={48} /><div style={{ width: "26mm", borderBottom: "1.3px solid #94a3b8", height: "6mm", marginTop: "1mm" }} /></div>
          ))}
        </div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Colorie</b> seulement les solides (pas les figures planes).</>}>
        <div style={{ display: "flex", gap: "7mm", alignItems: "center", marginTop: "1mm" }}>
          <Solide type="cube" s={40} />
          <span style={{ width: 40, height: 40, border: `2px solid ${ST}`, background: "#fff", display: "inline-block" }} />
          <Solide type="boule" s={40} />
          <span style={{ width: 46, height: 30, border: `2px solid ${ST}`, background: "#fff", display: "inline-block" }} />
          <Solide type="cone" s={40} />
        </div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Relie</b> l'objet à son solide.</>}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "17px", padding: "0 6mm" }}>
          <div style={{ lineHeight: 2.3 }}><div>🎲 un dé •</div><div>⚽ un ballon •</div><div>🥫 une conserve •</div></div>
          <div style={{ textAlign: "right", lineHeight: 2.3 }}><div>• le cylindre</div><div>• le cube</div><div>• la boule</div></div>
        </div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Dessine</b> un objet de la classe qui a la forme d'un pavé droit.</>}>
        <div style={{ border: "1.3px solid #94a3b8", borderRadius: "2mm", height: "22mm" }} />
      </Exo>
    </FicheModele>
  );
}

export function FicheSolidesCE2() {
  return (
    <FicheModele matiere="Géométrie" titre="Les solides" couleur={MA} dots={4} dotActif={1} page="Les solides · CE2 (décrire)">
      <SectionBar couleur={MA}>Je nomme et je décris</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Écris</b> le nom de chaque solide.</>}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", justifyContent: "space-around", marginTop: "1mm" }}>
          {["pyramide", "pave", "cone", "cube", "cylindre", "boule"].map((t) => (
            <div key={t} style={{ textAlign: "center" }}><Solide type={t} s={46} /><div style={{ width: "26mm", borderBottom: "1.3px solid #94a3b8", height: "6mm", marginTop: "1mm" }} /></div>
          ))}
        </div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Complète</b> le tableau (compte faces, arêtes, sommets).</>}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: CONSIGNE_FONT, textAlign: "center", fontSize: "13px", marginTop: "1mm" }}>
          <thead><tr>{["Solide", "Faces", "Arêtes", "Sommets"].map((h) => <th key={h} style={{ border: "1.3px solid #94a3b8", padding: "1.5mm", background: "#f0fdff", color: MA }}>{h}</th>)}</tr></thead>
          <tbody>
            {[["le cube", <Solide type="cube" s={34} />], ["le pavé droit", <Solide type="pave" s={34} />], ["la pyramide", <Solide type="pyramide" s={34} />]].map((r, k) => (
              <tr key={k}>
                <td style={{ border: "1.3px solid #94a3b8", padding: "1mm", display: "flex", alignItems: "center", gap: "2mm", justifyContent: "center", fontFamily: CURSIVE, fontSize: "15px" }}>{r[1]}{r[0] as string}</td>
                <td style={{ border: "1.3px solid #94a3b8", height: "11mm" }} /><td style={{ border: "1.3px solid #94a3b8" }} /><td style={{ border: "1.3px solid #94a3b8" }} />
              </tr>
            ))}
          </tbody>
        </table>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Vrai ou faux ?</b> Écris V ou F.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 2 }}>La boule n'a pas de sommet. …… &nbsp;&nbsp; Le cube a 6 faces carrées. …… &nbsp;&nbsp; Le cylindre a 2 faces plates. ……</div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Écris</b> une phrase pour décrire le pavé droit (faces, arêtes, sommets).</>}>
        <LignesModele n={2} />
      </Exo>
    </FicheModele>
  );
}
