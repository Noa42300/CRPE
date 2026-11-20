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
