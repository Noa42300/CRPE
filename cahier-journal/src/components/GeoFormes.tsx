/**
 * Maths — Espace & Géométrie : LES FORMES (figures planes) — AVANT les solides.
 * CE1 (simple) : reconnaître et nommer le carré, le rectangle, le triangle, le
 *   cercle ; compter les côtés ; trier.
 * CE2 (poussé) : + côtés et sommets, l'angle droit (équerre), distinguer carré /
 *   rectangle, le losange ; tracer à la règle sur quadrillage.
 * Figures dessinées (SVG original, pas de photo).
 *   • Diaporama · Leçon à coller · Fiche CE1 (simple) · Fiche CE2 (poussé).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, LignesModele } from "./ficheModele";

const MA = "#0e7490";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const FILL = "#e0f2fe", ST = "#0f172a";

/* --- Figures planes dessinées (SVG original) --- */
export function Forme({ type, s = 70, fill = FILL }: { type: string; s?: number; fill?: string }) {
  const poly = (pts: string) => <polygon points={pts} fill={fill} stroke={ST} strokeWidth="2" strokeLinejoin="round" />;
  let g: React.ReactNode = null;
  if (type === "carre") g = poly("22,22 78,22 78,78 22,78");
  else if (type === "rectangle") g = poly("12,30 88,30 88,70 12,70");
  else if (type === "triangle") g = poly("50,18 84,82 16,82");
  else if (type === "cercle") g = <circle cx="50" cy="50" r="32" fill={fill} stroke={ST} strokeWidth="2" />;
  else if (type === "losange") g = poly("50,16 84,50 50,84 16,50");
  else if (type === "quad") g = poly("18,34 82,22 76,80 28,72");      // quadrilatère quelconque (4 côtés)
  else if (type === "penta") g = poly("50,14 86,42 72,84 28,84 14,42"); // pentagone (5 côtés) — intrus
  return <svg viewBox="0 0 100 100" width={s} height={s} style={{ display: "block" }}>{g}</svg>;
}

const FORMES: { type: string; nom: string; cotes: string }[] = [
  { type: "carre", nom: "le carré", cotes: "4 côtés égaux" },
  { type: "rectangle", nom: "le rectangle", cotes: "4 côtés (2 longs, 2 courts)" },
  { type: "triangle", nom: "le triangle", cotes: "3 côtés" },
  { type: "cercle", nom: "le cercle", cotes: "0 côté (tout rond)" },
];

/* ----------------------------- DIAPORAMA ----------------------------- */
const ET = ["Les formes", "Compter les côtés", "Je reconnais les formes", "L'angle droit (CE2)", "Carré ou rectangle ? (CE2)", "Je retiens"];
export function FormesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géométrie · Les formes</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center gap-3"><Forme type="carre" s={64} fill="#fde68a" /><Forme type="triangle" s={64} fill="#bbf7d0" /><Forme type="cercle" s={64} fill="#fecaca" /><Forme type="rectangle" s={64} fill="#bae6fd" /></div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: MA }}>Les formes</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Une forme plane est <b>plate</b> (dessinée sur la feuille). On la reconnaît à ses <b>côtés</b> et à ses <b>coins</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Je compte les côtés</h2>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {FORMES.map((f) => <div key={f.type} className="rounded-xl border-2 bg-white p-1" style={{ borderColor: MA }}><div className="flex justify-center"><Forme type={f.type} s={64} /></div><div className="text-base font-bold" style={{ color: MA }}>{f.nom}</div><div className="text-sm text-stone-500">{f.cotes}</div></div>)}
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Je reconnais les formes</h2>
            <p className="mt-2 text-xl text-stone-600">Combien de côtés ? Combien de coins (sommets) ?</p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <div><Forme type="triangle" s={110} fill="#bbf7d0" /><p className="text-xl">3 côtés · 3 sommets</p></div>
              <div><Forme type="carre" s={110} fill="#fde68a" /><p className="text-xl">4 côtés · 4 sommets</p></div>
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>L'angle droit <span className="text-xl text-stone-500">(CE2)</span></h2>
            <p className="mt-3 text-2xl text-stone-600">Un <b>angle droit</b>, c'est un « coin bien carré » (comme le coin d'une feuille). On le vérifie avec l'<b>équerre</b>.</p>
            <div className="mt-3 flex items-center justify-center gap-8">
              <div><Forme type="carre" s={100} fill="#fde68a" /><p className="text-lg">le carré : 4 angles droits</p></div>
              <div className="text-6xl">📐</div>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Carré ou rectangle ? <span className="text-lg text-stone-500">(CE2)</span></h2>
            <div className="mt-3 flex items-center justify-center gap-10 text-xl text-stone-700">
              <div><Forme type="carre" s={110} fill="#fde68a" /><p>le <b>carré</b> : 4 côtés <b>égaux</b></p></div>
              <div><Forme type="rectangle" s={130} fill="#bae6fd" /><p>le <b>rectangle</b> : 2 longs + 2 courts</p></div>
            </div>
            <p className="mt-2 text-lg text-stone-500">Les deux ont 4 angles droits — mais seul le carré a tous ses côtés de la même longueur.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 flex justify-center gap-2"><Forme type="carre" s={44} fill="#fde68a" /><Forme type="triangle" s={44} fill="#bbf7d0" /><Forme type="cercle" s={44} fill="#fecaca" /></div>
            <h1 className="text-4xl font-extrabold" style={{ color: MA }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Le <b>carré</b> (4 côtés égaux), le <b>rectangle</b> (2 longs, 2 courts), le <b>triangle</b> (3 côtés), le <b>cercle</b> (rond). On compte les <b>côtés</b> et les <b>sommets</b>.</p>
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
export function FormesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "32px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: MA, fontFamily: CURSIVE }}>Les formes</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: MA, marginBottom: "2mm" }}>GÉOMÉTRIE · les figures planes (plates)</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2mm", margin: "2mm 0" }}>
        {FORMES.map((f) => (
          <div key={f.type} style={{ border: `1.6px solid ${MA}`, borderRadius: "2mm", padding: "1mm", textAlign: "center", background: "#f0fdff" }}>
            <div style={{ display: "flex", justifyContent: "center" }}><Forme type={f.type} s={52} /></div>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px", fontWeight: 700 }}>{f.nom}</div>
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "9.5px", color: "#475569" }}>{f.cotes}</div>
          </div>
        ))}
      </div>
      <div style={{ border: `2px solid ${MA}`, borderRadius: "2mm", padding: "2mm 4mm", background: "#f8fdff", display: "flex", gap: "5mm", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "2mm" }}><Forme type="carre" s={50} fill="#fde68a" /><Forme type="losange" s={50} fill="#ddd6fe" /></div>
        <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.5 }}>
          <b style={{ color: MA }}>Pour décrire une forme (CE2) :</b><br />
          je compte les <b>côtés</b> et les <b>sommets</b> (les coins). L'<b>angle droit</b> se vérifie à l'équerre.<br />
          Le <b>carré</b> a 4 côtés égaux et 4 angles droits ; le <b>losange</b> a 4 côtés égaux « penchés ».
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- FICHES ------------------------------- */
export function FicheFormesCE1() {
  return (
    <FicheModele matiere="Géométrie" titre="Les formes" couleur={MA} dots={4} dotActif={1} page="Les formes · CE1">
      <SectionBar couleur={MA}>Je reconnais et je nomme</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Écris</b> le nom de chaque forme (carré · rectangle · triangle · cercle).</>}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", justifyContent: "space-around", marginTop: "1mm" }}>
          {["cercle", "carre", "triangle", "rectangle"].map((t) => (
            <div key={t} style={{ textAlign: "center" }}><Forme type={t} s={50} /><div style={{ width: "26mm", borderBottom: "1.3px solid #94a3b8", height: "6mm", marginTop: "1mm" }} /></div>
          ))}
        </div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Colorie</b> les triangles en vert et les carrés en jaune.</>}>
        <div style={{ display: "flex", gap: "6mm", alignItems: "center", marginTop: "1mm" }}>
          <Forme type="triangle" s={40} fill="#fff" /><Forme type="carre" s={40} fill="#fff" /><Forme type="cercle" s={40} fill="#fff" /><Forme type="triangle" s={40} fill="#fff" /><Forme type="carre" s={40} fill="#fff" /><Forme type="rectangle" s={40} fill="#fff" />
        </div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Compte</b> et <b>écris</b> le nombre de côtés de chaque forme.</>}>
        <div style={{ display: "flex", justifyContent: "space-around", fontFamily: CURSIVE, fontSize: "16px", marginTop: "1mm" }}>
          {["carre", "triangle", "rectangle"].map((t) => (
            <div key={t} style={{ textAlign: "center" }}><Forme type={t} s={46} /><div>…… côtés</div></div>
          ))}
        </div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Dessine</b> un carré et un triangle.</>}>
        <div style={{ border: "1.3px solid #94a3b8", borderRadius: "2mm", height: "22mm" }} />
      </Exo>
    </FicheModele>
  );
}

export function FicheFormesCE2() {
  return (
    <FicheModele matiere="Géométrie" titre="Les formes" couleur={MA} dots={4} dotActif={1} page="Les formes · CE2 (décrire)">
      <SectionBar couleur={MA}>Je nomme et je décris</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Complète</b> le tableau (compte les côtés et les sommets).</>}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: CONSIGNE_FONT, textAlign: "center", fontSize: "13px", marginTop: "1mm" }}>
          <thead><tr>{["Forme", "Côtés", "Sommets", "Angles droits ?"].map((h) => <th key={h} style={{ border: "1.3px solid #94a3b8", padding: "1.5mm", background: "#f0fdff", color: MA }}>{h}</th>)}</tr></thead>
          <tbody>
            {[["le carré", "carre"], ["le rectangle", "rectangle"], ["le triangle", "triangle"]].map((r, k) => (
              <tr key={k}>
                <td style={{ border: "1.3px solid #94a3b8", padding: "1mm", display: "flex", alignItems: "center", gap: "2mm", justifyContent: "center", fontFamily: CURSIVE, fontSize: "15px" }}><Forme type={r[1]} s={30} />{r[0]}</td>
                <td style={{ border: "1.3px solid #94a3b8", height: "11mm" }} /><td style={{ border: "1.3px solid #94a3b8" }} /><td style={{ border: "1.3px solid #94a3b8" }} />
              </tr>
            ))}
          </tbody>
        </table>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Vrai ou faux ?</b> Écris V ou F.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 2 }}>Le carré a 4 côtés égaux. …… &nbsp;&nbsp; Le rectangle a 3 côtés. …… &nbsp;&nbsp; Le cercle n'a pas de sommet. …… &nbsp;&nbsp; Le carré a 4 angles droits. ……</div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Trace</b> à la règle, sur le quadrillage, un carré de 3 carreaux de côté et un rectangle de 5 sur 2.</>}>
        <div style={{ height: "28mm", borderRadius: "2mm", backgroundImage: "repeating-linear-gradient(#cbd5e1 0 1px, transparent 1px 5mm), repeating-linear-gradient(90deg,#cbd5e1 0 1px, transparent 1px 5mm)", border: "1.3px solid #94a3b8" }} />
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Écris</b> une phrase : quelle est la différence entre un carré et un rectangle ?</>}>
        <LignesModele n={2} />
      </Exo>
    </FicheModele>
  );
}

/* ============================================================================
 * LUNDI — LES QUADRILATÈRES (on commence doucement : les figures à 4 côtés)
 * CE1 : repérer les quadrilatères, carré & rectangle, commencer à tracer.
 * CE2 : + le losange, l'angle droit (équerre), distinguer carré/rectangle/losange.
 * ========================================================================== */
const QUADRILLAGE: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(#cbd5e1 0 1px, transparent 1px 5mm), repeating-linear-gradient(90deg,#cbd5e1 0 1px, transparent 1px 5mm)",
  border: "1.3px solid #94a3b8",
  borderRadius: "2mm",
};

const ETQ = ["Les quadrilatères", "Le carré", "Le rectangle", "Je trace", "Je retiens"];
export function QuadriDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETQ.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géométrie · Les quadrilatères</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ETQ.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center gap-3"><Forme type="carre" s={64} fill="#fde68a" /><Forme type="rectangle" s={64} fill="#bae6fd" /><Forme type="losange" s={64} fill="#ddd6fe" /><Forme type="quad" s={64} fill="#bbf7d0" /></div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: MA }}>Les quadrilatères</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Un <b>quadrilatère</b>, c'est une figure à <b>4 côtés</b> (et 4 sommets). Le carré, le rectangle, le losange sont des quadrilatères.</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Le carré</h2>
            <div className="mt-3 flex items-center justify-center gap-6">
              <Forme type="carre" s={150} fill="#fde68a" />
              <div className="text-left text-2xl text-stone-700">
                <p>• <b>4 côtés</b> de la <b>même longueur</b></p>
                <p>• <b>4 sommets</b> (coins)</p>
                <p>• <b>4 angles droits</b> <span className="text-stone-400">(CE2 · équerre)</span></p>
              </div>
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Le rectangle</h2>
            <div className="mt-3 flex items-center justify-center gap-6">
              <Forme type="rectangle" s={180} fill="#bae6fd" />
              <div className="text-left text-2xl text-stone-700">
                <p>• <b>4 côtés</b> : 2 longs et 2 courts</p>
                <p>• <b>4 sommets</b></p>
                <p>• <b>4 angles droits</b></p>
              </div>
            </div>
            <p className="mt-2 text-lg text-stone-500">Le carré est un rectangle particulier : tous ses côtés sont égaux.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Je trace à la règle</h2>
            <p className="mt-2 text-2xl text-stone-600">Je place les <b>points</b> sur le quadrillage, puis je <b>relie à la règle</b>.</p>
            <svg viewBox="0 0 220 120" width={420} className="mt-2" style={{ maxWidth: "100%" }}>
              <defs><pattern id="gq" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#cbd5e1" strokeWidth="1" /></pattern></defs>
              <rect x="0" y="0" width="220" height="120" fill="url(#gq)" />
              <rect x="20" y="20" width="60" height="60" fill="none" stroke={MA} strokeWidth="3" />
              <rect x="120" y="20" width="80" height="40" fill="none" stroke="#2563eb" strokeWidth="3" />
              {[[20,20],[80,20],[20,80],[80,80]].map(([x,y],k)=><circle key={k} cx={x} cy={y} r="3.5" fill={MA} />)}
            </svg>
            <p className="text-lg text-stone-500">un carré de 3 carreaux · un rectangle de 4 sur 2</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-2 flex justify-center gap-2"><Forme type="carre" s={44} fill="#fde68a" /><Forme type="rectangle" s={44} fill="#bae6fd" /><Forme type="losange" s={44} fill="#ddd6fe" /></div>
            <h1 className="text-4xl font-extrabold" style={{ color: MA }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Un <b>quadrilatère</b> a <b>4 côtés</b> et <b>4 sommets</b>. Le <b>carré</b> (4 côtés égaux), le <b>rectangle</b> (2 longs, 2 courts), le <b>losange</b> (4 côtés égaux penchés).</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MA, color: MA }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETQ.length} · {ETQ[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MA }}>▶</button>
      </div>
    </div>
  );
}

export function QuadriLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "32px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: MA, fontFamily: CURSIVE }}>Les quadrilatères</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: MA, marginBottom: "2mm" }}>GÉOMÉTRIE · une figure plane à 4 côtés</div>
      <div style={{ border: `2px dashed ${MA}`, borderRadius: "2mm", padding: "2mm 4mm", background: "#f0fdff", textAlign: "center", fontFamily: CURSIVE, fontSize: "18px", marginBottom: "2mm" }}>
        Un <b style={{ color: MA }}>quadrilatère</b> a <b>4 côtés</b> et <b>4 sommets</b> (les coins).
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2mm", margin: "2mm 0" }}>
        {[["carre", "le carré", "4 côtés égaux · 4 angles droits"], ["rectangle", "le rectangle", "2 longs + 2 courts · 4 angles droits"], ["losange", "le losange", "4 côtés égaux, penchés"]].map(([t, nom, d]) => (
          <div key={t} style={{ border: `1.6px solid ${MA}`, borderRadius: "2mm", padding: "1mm", textAlign: "center", background: "#f8fdff" }}>
            <div style={{ display: "flex", justifyContent: "center" }}><Forme type={t} s={54} fill="#e0f2fe" /></div>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px", fontWeight: 700 }}>{nom}</div>
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "9.5px", color: "#475569" }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ border: `2px solid ${MA}`, borderRadius: "2mm", padding: "2mm 4mm", background: "#f8fdff", fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.5 }}>
        <b style={{ color: MA }}>Pour tracer :</b> je place les points sur le quadrillage, puis je relie <b>à la règle</b>. L'<b>angle droit</b> se vérifie avec l'<b>équerre</b> (CE2).
      </div>
    </div>
  );
}

export function FicheQuadriCE1() {
  return (
    <FicheModele matiere="Géométrie" titre="Les quadrilatères" couleur={MA} dots={4} dotActif={1} page="Les quadrilatères · CE1">
      <SectionBar couleur={MA}>Je repère et je nomme</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Entoure</b> seulement les quadrilatères (les figures à 4 côtés).</>}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", justifyContent: "space-around", marginTop: "1mm" }}>
          {["carre", "triangle", "rectangle", "cercle", "quad", "penta"].map((t, k) => <Forme key={k} type={t} s={42} fill="#fff" />)}
        </div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Écris</b> le nom : carré ou rectangle ?</>}>
        <div style={{ display: "flex", gap: "12mm", justifyContent: "center", marginTop: "1mm" }}>
          {["carre", "rectangle"].map((t) => <div key={t} style={{ textAlign: "center" }}><Forme type={t} s={50} /><div style={{ width: "28mm", borderBottom: "1.3px solid #94a3b8", height: "6mm", marginTop: "1mm" }} /></div>)}
        </div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Compte</b> et <b>écris</b> le nombre de côtés et de sommets du carré.</>}>
        <div style={{ display: "flex", gap: "8mm", alignItems: "center", fontFamily: CURSIVE, fontSize: "17px", marginTop: "1mm", justifyContent: "center" }}>
          <Forme type="carre" s={44} /><span>…… côtés</span><span>…… sommets</span>
        </div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Trace</b> à la règle un carré de 3 carreaux de côté, en reliant les points.</>}>
        <div style={{ ...QUADRILLAGE, height: "34mm", position: "relative", overflow: "hidden" }}>
          {[[12,8],[27,8],[12,23],[27,23]].map(([x,y],k)=><span key={k} style={{ position:"absolute", left:`${x}mm`, top:`${y}mm`, width:"2mm", height:"2mm", borderRadius:"50%", background:MA, transform:"translate(-50%,-50%)" }} />)}
        </div>
      </Exo>
    </FicheModele>
  );
}

export function FicheQuadriCE2() {
  return (
    <FicheModele matiere="Géométrie" titre="Les quadrilatères" couleur={MA} dots={4} dotActif={1} page="Les quadrilatères · CE2">
      <SectionBar couleur={MA}>Je décris et je trace</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Complète</b> le tableau (côtés, sommets, angles droits).</>}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: CONSIGNE_FONT, textAlign: "center", fontSize: "13px", marginTop: "1mm" }}>
          <thead><tr>{["Figure", "Côtés", "Sommets", "Angles droits ?"].map((h) => <th key={h} style={{ border: "1.3px solid #94a3b8", padding: "1.5mm", background: "#f0fdff", color: MA }}>{h}</th>)}</tr></thead>
          <tbody>
            {[["le carré", "carre"], ["le rectangle", "rectangle"], ["le losange", "losange"]].map((r, k) => (
              <tr key={k}>
                <td style={{ border: "1.3px solid #94a3b8", padding: "1mm", display: "flex", alignItems: "center", gap: "2mm", justifyContent: "center", fontFamily: CURSIVE, fontSize: "15px" }}><Forme type={r[1]} s={30} />{r[0]}</td>
                <td style={{ border: "1.3px solid #94a3b8", height: "11mm" }} /><td style={{ border: "1.3px solid #94a3b8" }} /><td style={{ border: "1.3px solid #94a3b8" }} />
              </tr>
            ))}
          </tbody>
        </table>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Vrai ou faux ?</b> Écris V ou F.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 2 }}>Un quadrilatère a 4 côtés. …… &nbsp; Le carré a 4 côtés égaux. …… &nbsp; Le losange a des angles droits. …… &nbsp; Le rectangle a 2 longs côtés et 2 courts. ……</div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Trace</b> à la règle : un carré de 4 carreaux, un rectangle de 6 sur 3, un losange.</>}>
        <div style={{ ...QUADRILLAGE, height: "30mm" }} />
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Écris</b> : comment reconnaître un carré parmi les quadrilatères ?</>}>
        <LignesModele n={2} />
      </Exo>
    </FicheModele>
  );
}

/* ============================================================================
 * MARDI — LES TRIANGLES & TOUTES LES FIGURES PLANES (synthèse)
 * CE1 : le triangle et le cercle, trier avec les quadrilatères de lundi.
 * CE2 : synthèse de toutes les figures planes + tracer / décrire.
 * ========================================================================== */
const ETT = ["Le triangle", "Toutes les figures", "Je trie", "Je trace", "Je retiens"];
export function PlanesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETT.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géométrie · Triangles & figures planes</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ETT.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <Forme type="triangle" s={140} fill="#bbf7d0" />
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: MA }}>Le triangle</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Le triangle a <b>3 côtés</b> et <b>3 sommets</b>. Hier, les quadrilatères avaient 4 côtés !</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Toutes les figures planes</h2>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {[["carre","carré","4"],["rectangle","rectangle","4"],["losange","losange","4"],["triangle","triangle","3"],["cercle","cercle","0"]].map(([t,nom,n])=>(
                <div key={t} className="rounded-xl border-2 bg-white p-1" style={{ borderColor: MA }}><div className="flex justify-center"><Forme type={t} s={54} /></div><div className="text-sm font-bold" style={{ color: MA }}>{nom}</div><div className="text-xs text-stone-500">{n} côtés</div></div>
              ))}
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Je trie les figures</h2>
            <div className="mt-3 grid grid-cols-3 gap-4 text-xl text-stone-700">
              <div className="rounded-xl p-2" style={{ background: "#eff6ff" }}><div className="font-bold" style={{ color: MA }}>3 côtés</div><Forme type="triangle" s={70} fill="#bbf7d0" /></div>
              <div className="rounded-xl p-2" style={{ background: "#fffbeb" }}><div className="font-bold" style={{ color: MA }}>4 côtés</div><div className="flex justify-center gap-1"><Forme type="carre" s={46} fill="#fde68a" /><Forme type="rectangle" s={46} fill="#bae6fd" /></div></div>
              <div className="rounded-xl p-2" style={{ background: "#fef2f2" }}><div className="font-bold" style={{ color: MA }}>tout rond</div><Forme type="cercle" s={70} fill="#fecaca" /></div>
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Je trace</h2>
            <p className="mt-2 text-2xl text-stone-600">Je place les points, je relie <b>à la règle</b> (le cercle, au compas ou à main levée).</p>
            <svg viewBox="0 0 220 120" width={420} className="mt-2" style={{ maxWidth: "100%" }}>
              <rect x="0" y="0" width="220" height="120" fill="url(#gq)" />
              <polygon points="40,90 90,30 100,90" fill="none" stroke={MA} strokeWidth="3" />
              <circle cx="165" cy="60" r="32" fill="none" stroke="#2563eb" strokeWidth="3" />
            </svg>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-2 flex justify-center gap-2"><Forme type="triangle" s={40} fill="#bbf7d0" /><Forme type="carre" s={40} fill="#fde68a" /><Forme type="cercle" s={40} fill="#fecaca" /></div>
            <h1 className="text-4xl font-extrabold" style={{ color: MA }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Les <b>figures planes</b> : le <b>triangle</b> (3 côtés), les <b>quadrilatères</b> (4 côtés : carré, rectangle, losange), le <b>cercle</b> (rond). On les reconnaît au <b>nombre de côtés</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MA, color: MA }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETT.length} · {ETT[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MA }}>▶</button>
      </div>
    </div>
  );
}

export function PlanesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "30px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: MA, fontFamily: CURSIVE }}>Les figures planes</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: MA, marginBottom: "2mm" }}>GÉOMÉTRIE · je reconnais une figure au nombre de côtés</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "2mm", margin: "2mm 0" }}>
        {[["triangle","le triangle","3 côtés"],["carre","le carré","4 côtés"],["rectangle","le rectangle","4 côtés"],["losange","le losange","4 côtés"],["cercle","le cercle","rond"]].map(([t,nom,d])=>(
          <div key={t} style={{ border: `1.6px solid ${MA}`, borderRadius: "2mm", padding: "1mm", textAlign: "center", background: "#f8fdff" }}>
            <div style={{ display: "flex", justifyContent: "center" }}><Forme type={t} s={48} /></div>
            <div style={{ fontFamily: CURSIVE, fontSize: "15px", fontWeight: 700 }}>{nom}</div>
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "9px", color: "#475569" }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ border: `2px solid ${MA}`, borderRadius: "2mm", padding: "2mm 4mm", background: "#f0fdff", fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.5 }}>
        Le <b style={{ color: MA }}>triangle</b> a 3 côtés ; les <b style={{ color: MA }}>quadrilatères</b> (carré, rectangle, losange) ont 4 côtés ; le <b style={{ color: MA }}>cercle</b> est tout rond (0 côté). Je compte les <b>côtés</b> et les <b>sommets</b> pour nommer une figure.
      </div>
    </div>
  );
}

export function FichePlanesCE1() {
  return (
    <FicheModele matiere="Géométrie" titre="Le triangle et les figures" couleur={MA} dots={4} dotActif={2} page="Figures planes · CE1">
      <SectionBar couleur={MA}>Je découvre le triangle et je trie</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Entoure</b> en vert les triangles, en rouge les cercles.</>}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", justifyContent: "space-around", marginTop: "1mm" }}>
          {["triangle", "carre", "cercle", "triangle", "rectangle", "cercle"].map((t, k) => <Forme key={k} type={t} s={42} fill="#fff" />)}
        </div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Relie</b> chaque figure à son nombre de côtés.</>}>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", fontFamily: CURSIVE, fontSize: "18px", marginTop: "1mm" }}>
          <div style={{ display: "flex", gap: "5mm" }}><Forme type="triangle" s={40} /><Forme type="carre" s={40} /><Forme type="cercle" s={40} /></div>
          <div style={{ lineHeight: 2.2 }}>• 4 côtés<br />• 3 côtés<br />• 0 côté</div>
        </div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Écris</b> le nom de chaque figure (triangle · carré · rectangle · cercle).</>}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", justifyContent: "space-around", marginTop: "1mm" }}>
          {["triangle", "rectangle", "cercle", "carre"].map((t) => <div key={t} style={{ textAlign: "center" }}><Forme type={t} s={44} /><div style={{ width: "26mm", borderBottom: "1.3px solid #94a3b8", height: "6mm", marginTop: "1mm" }} /></div>)}
        </div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Trace</b> à la règle un triangle en reliant les points.</>}>
        <div style={{ ...QUADRILLAGE, height: "34mm", position: "relative", overflow: "hidden" }}>
          {[[12,26],[33,8],[56,26]].map(([x,y],k)=><span key={k} style={{ position:"absolute", left:`${x}mm`, top:`${y}mm`, width:"2mm", height:"2mm", borderRadius:"50%", background:MA, transform:"translate(-50%,-50%)" }} />)}
        </div>
      </Exo>
    </FicheModele>
  );
}

export function FichePlanesCE2() {
  return (
    <FicheModele matiere="Géométrie" titre="Toutes les figures planes" couleur={MA} dots={4} dotActif={2} page="Figures planes · CE2 (synthèse)">
      <SectionBar couleur={MA}>Je fais la synthèse et je trace</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Complète</b> le tableau (nombre de côtés, de sommets).</>}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: CONSIGNE_FONT, textAlign: "center", fontSize: "13px", marginTop: "1mm" }}>
          <thead><tr>{["Figure", "Nom", "Côtés", "Sommets"].map((h) => <th key={h} style={{ border: "1.3px solid #94a3b8", padding: "1.5mm", background: "#f0fdff", color: MA }}>{h}</th>)}</tr></thead>
          <tbody>
            {["triangle", "carre", "rectangle", "losange", "cercle"].map((t, k) => (
              <tr key={k}>
                <td style={{ border: "1.3px solid #94a3b8", padding: "1mm", textAlign: "center" }}><div style={{ display: "inline-block" }}><Forme type={t} s={26} /></div></td>
                <td style={{ border: "1.3px solid #94a3b8" }} /><td style={{ border: "1.3px solid #94a3b8", height: "9mm" }} /><td style={{ border: "1.3px solid #94a3b8" }} />
              </tr>
            ))}
          </tbody>
        </table>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Barre</b> l'intrus et explique : « carré · rectangle · triangle · losange ».</>}>
        <div style={{ display: "flex", gap: "8mm", justifyContent: "center", marginTop: "1mm" }}>
          {["carre", "rectangle", "triangle", "losange"].map((t, k) => <Forme key={k} type={t} s={40} />)}
        </div>
        <LignesModele n={1} />
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Trace</b> à la règle : un triangle, un carré de 4 carreaux et un rectangle de 5 sur 2.</>}>
        <div style={{ ...QUADRILLAGE, height: "30mm" }} />
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Écris</b> : quelle est la différence entre un triangle et un quadrilatère ?</>}>
        <LignesModele n={2} />
      </Exo>
    </FicheModele>
  );
}

/* ============================================================================
 * MARDI (variante validée) — LES DIFFÉRENTS TYPES DE TRIANGLES
 * CE1 : reconnaître les triangles (3 côtés) ; le triangle rectangle (angle droit).
 * CE2 : triangle rectangle, isocèle, équilatéral (+ quelconque) ; décrire, tracer.
 * ========================================================================== */
export function TriangleType({ kind, s = 80, fill = FILL }: { kind: string; s?: number; fill?: string }) {
  const tri = (pts: string) => <polygon points={pts} fill={fill} stroke={ST} strokeWidth="2" strokeLinejoin="round" />;
  const tick = (x: number, y: number, a: number) => <line x1={x - 5} y1={y} x2={x + 5} y2={y} stroke={ST} strokeWidth="1.8" transform={`rotate(${a} ${x} ${y})`} />;
  let g: React.ReactNode;
  if (kind === "rectangle") g = <>{tri("24,80 24,26 82,80")}<path d="M24 68 H36 V80" fill="none" stroke={ST} strokeWidth="1.6" /></>;
  else if (kind === "isocele") g = <>{tri("50,20 22,82 78,82")}{tick(35, 51, 115)}{tick(65, 51, -115)}</>;
  else if (kind === "equilateral") g = <>{tri("50,18 18,82 82,82")}{tick(33, 50, 117)}{tick(67, 50, -117)}{tick(50, 82, 90)}</>;
  else g = tri("18,66 44,22 85,76"); // quelconque
  return <svg viewBox="0 0 100 100" width={s} height={s} style={{ display: "block" }}>{g}</svg>;
}

const TRITYPES: { kind: string; nom: string; prop: string }[] = [
  { kind: "rectangle", nom: "triangle rectangle", prop: "un angle droit" },
  { kind: "isocele", nom: "triangle isocèle", prop: "2 côtés égaux" },
  { kind: "equilateral", nom: "triangle équilatéral", prop: "3 côtés égaux" },
];

const ETR = ["Le triangle", "Le triangle rectangle", "Isocèle & équilatéral (CE2)", "Je trie", "Je retiens"];
export function TrianglesTypesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETR.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géométrie · Les types de triangles</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ETR.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center gap-3"><TriangleType kind="rectangle" s={74} fill="#bbf7d0" /><TriangleType kind="isocele" s={74} fill="#bae6fd" /><TriangleType kind="equilateral" s={74} fill="#fde68a" /></div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: MA }}>Les triangles</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Un triangle a toujours <b>3 côtés</b> et <b>3 sommets</b>. Mais il y a <b>plusieurs sortes</b> de triangles !</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MA }}>Le triangle rectangle</h2>
            <div className="mt-3 flex items-center justify-center gap-6">
              <TriangleType kind="rectangle" s={150} fill="#bbf7d0" />
              <div className="text-left text-2xl text-stone-700">
                <p>• il a un <b>angle droit</b> (un coin bien carré ▭)</p>
                <p>• on le vérifie avec l'<b>équerre</b> 📐</p>
              </div>
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Isocèle & équilatéral <span className="text-lg text-stone-500">(CE2)</span></h2>
            <div className="mt-3 flex items-center justify-center gap-10 text-xl text-stone-700">
              <div><TriangleType kind="isocele" s={130} fill="#bae6fd" /><p>le <b>triangle isocèle</b><br />2 côtés égaux (les traits ′)</p></div>
              <div><TriangleType kind="equilateral" s={130} fill="#fde68a" /><p>le <b>triangle équilatéral</b><br />3 côtés égaux</p></div>
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: MA }}>Je trie les triangles</h2>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {TRITYPES.map((t) => <div key={t.kind} className="rounded-xl border-2 bg-white p-2" style={{ borderColor: MA }}><div className="flex justify-center"><TriangleType kind={t.kind} s={80} /></div><div className="text-base font-bold" style={{ color: MA }}>{t.nom}</div><div className="text-sm text-stone-500">{t.prop}</div></div>)}
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-2 flex justify-center gap-2"><TriangleType kind="rectangle" s={44} fill="#bbf7d0" /><TriangleType kind="isocele" s={44} fill="#bae6fd" /><TriangleType kind="equilateral" s={44} fill="#fde68a" /></div>
            <h1 className="text-4xl font-extrabold" style={{ color: MA }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Un triangle a <b>3 côtés</b>. Le <b>triangle rectangle</b> a un angle droit ; le <b>triangle isocèle</b> a 2 côtés égaux ; le <b>triangle équilatéral</b> a 3 côtés égaux.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MA, color: MA }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETR.length} · {ETR[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MA }}>▶</button>
      </div>
    </div>
  );
}

export function TrianglesTypesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "30px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: MA, fontFamily: CURSIVE }}>Les types de triangles</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: MA, marginBottom: "2mm" }}>GÉOMÉTRIE · un triangle a 3 côtés, mais il y a plusieurs sortes</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2mm", margin: "2mm 0" }}>
        {TRITYPES.map((t) => (
          <div key={t.kind} style={{ border: `1.6px solid ${MA}`, borderRadius: "2mm", padding: "1mm", textAlign: "center", background: "#f8fdff" }}>
            <div style={{ display: "flex", justifyContent: "center" }}><TriangleType kind={t.kind} s={58} fill="#e0f2fe" /></div>
            <div style={{ fontFamily: CURSIVE, fontSize: "16px", fontWeight: 700 }}>{t.nom}</div>
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "9.5px", color: "#475569" }}>{t.prop}</div>
          </div>
        ))}
      </div>
      <div style={{ border: `2px solid ${MA}`, borderRadius: "2mm", padding: "2mm 4mm", background: "#f0fdff", fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.5 }}>
        Le <b style={{ color: MA }}>triangle rectangle</b> a un <b>angle droit</b> (équerre). Le <b style={{ color: MA }}>triangle isocèle</b> a <b>2 côtés égaux</b> (on les marque d'un petit trait ′). Le <b style={{ color: MA }}>triangle équilatéral</b> a ses <b>3 côtés égaux</b>.
      </div>
    </div>
  );
}

export function FicheTrianglesTypesCE1() {
  return (
    <FicheModele matiere="Géométrie" titre="Les triangles" couleur={MA} dots={4} dotActif={2} page="Les triangles · CE1">
      <SectionBar couleur={MA}>Je reconnais les triangles</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Entoure</b> seulement les triangles (les figures à 3 côtés).</>}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", justifyContent: "space-around", marginTop: "1mm" }}>
          <Forme type="carre" s={40} fill="#fff" /><TriangleType kind="equilateral" s={40} fill="#fff" /><Forme type="cercle" s={40} fill="#fff" /><TriangleType kind="rectangle" s={40} fill="#fff" /><Forme type="quad" s={40} fill="#fff" /><TriangleType kind="quelconque" s={40} fill="#fff" />
        </div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Colorie</b> le coin de l'angle droit du triangle rectangle (le coin « bien carré »).</>}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1mm" }}><TriangleType kind="rectangle" s={60} /></div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Compte</b> et <b>écris</b> le nombre de côtés et de sommets d'un triangle.</>}>
        <div style={{ display: "flex", gap: "8mm", alignItems: "center", fontFamily: CURSIVE, fontSize: "17px", marginTop: "1mm", justifyContent: "center" }}>
          <TriangleType kind="isocele" s={44} /><span>…… côtés</span><span>…… sommets</span>
        </div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Trace</b> à la règle un triangle en reliant les points.</>}>
        <div style={{ ...QUADRILLAGE, height: "34mm", position: "relative", overflow: "hidden" }}>
          {[[12,26],[33,8],[56,26]].map(([x,y],k)=><span key={k} style={{ position:"absolute", left:`${x}mm`, top:`${y}mm`, width:"2mm", height:"2mm", borderRadius:"50%", background:MA, transform:"translate(-50%,-50%)" }} />)}
        </div>
      </Exo>
    </FicheModele>
  );
}

export function FicheTrianglesTypesCE2() {
  return (
    <FicheModele matiere="Géométrie" titre="Les types de triangles" couleur={MA} dots={4} dotActif={2} page="Les triangles · CE2">
      <SectionBar couleur={MA}>Je reconnais et je décris</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Écris</b> le type sous chaque triangle (rectangle · isocèle · équilatéral).</>}>
        <div style={{ display: "flex", gap: "10mm", justifyContent: "space-around", marginTop: "1mm" }}>
          {["isocele", "rectangle", "equilateral"].map((k) => <div key={k} style={{ textAlign: "center" }}><TriangleType kind={k} s={52} /><div style={{ width: "30mm", borderBottom: "1.3px solid #94a3b8", height: "6mm", marginTop: "1mm" }} /></div>)}
        </div>
      </Exo>
      <Exo n={2} couleur={MA} consigne={<><b>Relie</b> chaque triangle à sa propriété.</>}>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", fontFamily: CURSIVE, fontSize: "16px", marginTop: "1mm" }}>
          <div style={{ display: "flex", gap: "5mm" }}><TriangleType kind="rectangle" s={40} /><TriangleType kind="isocele" s={40} /><TriangleType kind="equilateral" s={40} /></div>
          <div style={{ lineHeight: 2.1 }}>• 2 côtés égaux<br />• un angle droit<br />• 3 côtés égaux</div>
        </div>
      </Exo>
      <Exo n={3} couleur={MA} consigne={<><b>Vrai ou faux ?</b> Écris V ou F.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 2 }}>Tous les triangles ont 3 côtés. …… &nbsp; Le triangle équilatéral a 3 côtés égaux. …… &nbsp; Le triangle rectangle a un angle droit. ……</div>
      </Exo>
      <Exo n={4} couleur={MA} consigne={<><b>Trace</b> à la règle (et à l'équerre) un triangle rectangle.</>}>
        <div style={{ ...QUADRILLAGE, height: "30mm" }} />
      </Exo>
    </FicheModele>
  );
}
