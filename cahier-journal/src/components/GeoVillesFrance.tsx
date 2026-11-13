/**
 * Géographie — « Se situer sur une carte : les villes de France ».
 * Suite de « Où sommes-nous ? » : on passe de la commune aux grandes villes de
 * France et on se repère avec le vocabulaire nord / sud / est / ouest (et
 * nord-est…). Carte à apprendre (sur 2 semaines) + diapo + leçon + exercices.
 * Fond de carte © amCharts geodata (licence libre).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FRANCE_MAP } from "./carteFranceData";
import { RoseDesVents } from "./CarteFrance";
import { FicheModele, SectionBar, Exo } from "./ficheModele";
import { LeconCahier, MotCle } from "./LeconCahier";

const GEO = "#0e7490";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const { W, H, regions } = FRANCE_MAP;

/* Villes projetées sur le même fond que CarteFrance. */
type Ville = { nom: string; x: number; y: number; dir: string; dx?: number; dy?: number };
const VILLES: Ville[] = [
  { nom: "Lille", x: 415.3, y: 44.7, dir: "au nord", dy: -3 },
  { nom: "Paris", x: 377.9, y: 190.1, dir: "au nord" },
  { nom: "Strasbourg", x: 664.2, y: 212.8, dir: "à l'est (nord-est)", dx: -6 },
  { nom: "Rennes", x: 164.3, y: 249.2, dir: "à l'ouest (nord-ouest)", dx: -6 },
  { nom: "Nantes", x: 170.9, y: 320, dir: "à l'ouest", dx: -6 },
  { nom: "Lyon", x: 509.6, y: 432, dir: "à l'est" },
  { nom: "Saint-Étienne", x: 485.8, y: 456.6, dir: "à l'est (près de Lyon)", dx: -2, dy: 5 },
  { nom: "Bordeaux", x: 222.5, y: 501.8, dir: "à l'ouest (sud-ouest)", dx: -6 },
  { nom: "Toulouse", x: 329.8, y: 593, dir: "au sud (sud-ouest)", dy: 4 },
  { nom: "Marseille", x: 537.9, y: 615.5, dir: "au sud (sud-est)", dy: 4 },
  { nom: "Nice", x: 638.2, y: 585.3, dir: "au sud-est" },
];

function CarteVilles({ width = "100%", noms = true, rose = true, ecole = true }: { width?: string | number; noms?: boolean; rose?: boolean; ecole?: boolean }) {
  const roseSize = W * 0.17;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={width} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
      {regions.map((r) => <path key={r.id} d={r.d} fill="#eef2f6" stroke="#94a3b8" strokeWidth="1" strokeLinejoin="round" />)}
      {VILLES.map((v) => {
        const star = v.nom === "Saint-Étienne" && ecole;
        return (
          <g key={v.nom}>
            <circle cx={v.x} cy={v.y} r={star ? 7 : 5} fill={star ? "#dc2626" : "#0f172a"} stroke="#fff" strokeWidth="1.5" />
            {noms && <text x={v.x + (v.dx ?? 0) + (v.dx && v.dx < 0 ? -4 : 8)} y={v.y + (v.dy ?? 0) + 4} textAnchor={v.dx && v.dx < 0 ? "end" : "start"} fontFamily={CONSIGNE_FONT} fontWeight={star ? 800 : 700} fontSize="17" fill={star ? "#dc2626" : "#0f172a"}>{v.nom}</text>}
          </g>
        );
      })}
      {rose && <g transform={`translate(${W - roseSize - 6}, 6)`}><g transform={`scale(${roseSize / 150})`}><RoseInline /></g></g>}
    </svg>
  );
}
function RoseInline() {
  const size = 150, c = size / 2;
  const L = (x: number, y: number, t: string) => <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontFamily={CONSIGNE_FONT} fontWeight="800" fontSize={size * 0.17} fill={GEO}>{t}</text>;
  return (<g><circle cx={c} cy={c} r={c * 0.58} fill="#fff" stroke="#cbd5e1" strokeWidth="2" /><polygon points={`${c},${c * 0.14} ${c * 1.1},${c * 0.9} ${c * 1.86},${c} ${c * 1.1},${c * 1.1} ${c},${c * 1.86} ${c * 0.9},${c * 1.1} ${c * 0.14},${c} ${c * 0.9},${c * 0.9}`} fill={GEO} opacity="0.85" stroke="#083344" strokeWidth="1.5" />{L(c, size * 0.16, "N")}{L(c, size * 0.84, "S")}{L(size * 0.84, c, "E")}{L(size * 0.16, c, "O")}</g>);
}

const Credit = () => <div style={{ fontSize: "8px", color: "#94a3b8", textAlign: "right", marginTop: "0.5mm" }}>Fond de carte © amCharts (licence libre)</div>;

const ET = ["Les villes de France", "Se repérer : N / S / E / O", "Les grandes villes", "Où se trouve… ?", "Je retiens"];
export function GeoVillesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: GEO }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géographie · Les villes de France</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><div style={{ width: "min(50vh,380px)" }}><CarteVilles /></div></div>
            <h1 className="mt-1 text-4xl font-extrabold" style={{ color: GEO }}>Les villes de France</h1>
            <p className="mt-1 text-2xl font-semibold text-stone-600">On va apprendre à placer les grandes villes et à dire où elles sont.</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Se repérer : nord, sud, est, ouest</h2>
            <div className="mt-3 flex justify-center"><RoseDesVents size={220} /></div>
            <p className="mt-2 text-2xl text-stone-600">Le <b>nord</b> est en haut, le <b>sud</b> en bas, l'<b>est</b> à droite, l'<b>ouest</b> à gauche.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <div className="flex justify-center"><div style={{ width: "min(56vh,420px)" }}><CarteVilles /></div></div>
            <p className="mt-1 text-xl text-stone-600">Notre ville <b style={{ color: "#dc2626" }}>Saint-Étienne</b> est à l'est, près de <b>Lyon</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Où se trouve… ?</h2>
            <div className="mt-3 space-y-1 text-2xl text-stone-700">
              <p><b>Lille</b> et <b>Paris</b> sont au <b>nord</b>.</p>
              <p><b>Marseille</b> et <b>Nice</b> sont au <b>sud</b>.</p>
              <p><b>Strasbourg</b> et <b>Lyon</b> sont à l'<b>est</b>.</p>
              <p><b>Bordeaux</b> et <b>Nantes</b> sont à l'<b>ouest</b>.</p>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="flex justify-center"><div style={{ width: "min(40vh,300px)" }}><CarteVilles /></div></div>
            <h1 className="mt-1 text-4xl font-extrabold" style={{ color: GEO }}>Je retiens</h1>
            <p className="mt-1 text-2xl font-semibold text-stone-600">Je connais les grandes villes de France et je sais dire où elles sont avec <b>nord, sud, est, ouest</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: GEO, color: GEO }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: GEO }}>▶</button>
      </div>
    </div>
  );
}

/* Carte à APPRENDRE (villes nommées) — à coller/réviser sur 2 semaines. */
export function CarteVillesAApprendre() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "30px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: GEO, fontFamily: CURSIVE }}>Les grandes villes de France</h1>
      <p style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", margin: "0 0 2mm" }}>À apprendre (pour dans 2 semaines) : les villes et leur position (nord, sud, est, ouest).</p>
      <div style={{ width: "150mm", margin: "0 auto" }}><CarteVilles /></div>
      <Credit />
    </div>
  );
}

export function GeoVillesLecon() {
  return (
    <LeconCahier
      titre="Les villes de France" emojiL="🇫🇷" emojiR="🏙️" accent={GEO} variant="cote"
      sousTitre="GÉOGRAPHIE · SE SITUER SUR UNE CARTE"
      visuel={<CarteVilles width="100%" />} visuelMaxH="150mm"
      legende="Fond de carte © amCharts (licence libre)"
      points={[
        { t: <>La France a de grandes <MotCle accent={GEO}>villes</MotCle>. Pour dire où elles se trouvent, j'utilise les <MotCle accent={GEO}>points cardinaux</MotCle> : nord, sud, est, ouest.</> },
        { t: <>Au <b>nord</b> : Lille, Paris. &nbsp; Au <b>sud</b> : Marseille, Nice, Toulouse.</> },
        { t: <>À l'<b>est</b> : Strasbourg, Lyon, <b style={{ color: "#dc2626" }}>Saint-Étienne</b> (notre ville). &nbsp; À l'<b>ouest</b> : Nantes, Bordeaux, Rennes.</> },
      ]}
      savaisTu={<>💡 <b style={{ color: GEO }}>Je retiens :</b> on peut aussi dire <b>nord-est</b>, <b>sud-ouest</b>… Notre ville, Saint-Étienne, est à l'est, tout près de Lyon.</>}
    />
  );
}

export function GeoVillesExos() {
  return (
    <FicheModele matiere="Géographie" titre="Les villes de France" couleur={GEO} dots={3} dotActif={1} page="Les villes de France">
      <SectionBar couleur={GEO}>Se situer sur la carte</SectionBar>
      <Exo n={1} couleur={GEO} consigne={<><b>Complète</b> avec : nord · sud · est · ouest.</>}>
        <div style={{ fontSize: "14px", lineHeight: 1.9, fontFamily: CURSIVE }}>
          a) Lille est au …………… de la France.<br />
          b) Marseille est au …………… de la France.<br />
          c) Strasbourg est à l'…………… de la France.<br />
          d) Bordeaux est à l'…………… de la France.
        </div>
      </Exo>
      <Exo n={2} couleur={GEO} consigne={<><b>Relie</b> chaque ville à sa position.</>}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "16px", padding: "0 8mm" }}>
          <div style={{ lineHeight: 2.2 }}><div>Paris •</div><div>Nice •</div><div>Lyon •</div></div>
          <div style={{ textAlign: "right", lineHeight: 2.2 }}><div>• au sud</div><div>• au nord</div><div>• à l'est</div></div>
        </div>
      </Exo>
      <Exo n={3} couleur={GEO} consigne={<><b>Écris</b> le nom de notre ville et dis où elle se trouve.</>}>
        <div style={{ fontSize: "14px", fontFamily: CURSIVE, lineHeight: 2 }}>Notre ville est …………………… . Elle est à l'…………… de la France, près de Lyon.</div>
      </Exo>
      <Exo n={4} couleur={GEO} consigne={<><b>Place</b> ces villes sur la carte muette (écris leur nom au bon endroit).</>}>
        <div style={{ fontSize: "12px", fontFamily: CONSIGNE_FONT, marginBottom: "1mm" }}>Villes : Paris · Marseille · Lyon · Bordeaux</div>
        <div style={{ width: "90mm", margin: "0 auto" }}><CarteVilles noms={false} ecole={false} rose={false} /></div>
      </Exo>
    </FicheModele>
  );
}

/* ---- Carte muette à compléter : placer les villes sur les points ---- */
export function CarteVillesMuetteFiche() {
  const noms = VILLES.map((v) => v.nom);
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `2px solid ${GEO}`, paddingBottom: "1.5mm", marginBottom: "2mm" }}>
        <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE, color: GEO }}>Les villes de France — carte à compléter</h1>
        <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
      </div>
      <div style={{ fontSize: "13.5px", fontWeight: 700, fontFamily: CONSIGNE_FONT, marginBottom: "2mm" }}>
        <b>Écris</b> le nom de chaque ville sur le bon point. Aide-toi de la liste et de la rose des vents. <span style={{ color: "#dc2626" }}>Le point rouge, c'est Saint-Étienne (notre ville).</span>
      </div>
      <div style={{ width: "150mm", margin: "0 auto" }}><CarteVilles noms={false} ecole={true} rose={true} /></div>
      <div style={{ marginTop: "3mm", border: `2px dashed ${GEO}`, borderRadius: "3mm", padding: "2.5mm 5mm", background: "#ecfeff" }}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "12px", color: GEO, marginBottom: "1mm" }}>Les villes à placer :</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2mm 5mm", fontFamily: CURSIVE, fontSize: "18px" }}>
          {noms.map((n) => <span key={n}>• {n}</span>)}
        </div>
      </div>
    </div>
  );
}
