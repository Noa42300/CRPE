/**
 * Géographie — Se repérer, du proche au lointain : séance 3.
 * « La France en Europe » : situer la France sur le continent, nommer les pays
 * voisins et les mers, se repérer avec les points cardinaux (N/S/E/O).
 *   • Diaporama à projeter · Leçon à coller · Fiche d'exercices (carte muette).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, LignesModele } from "./ficheModele";

const GEO = "#0e7490";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

/* Carte simplifiée de l'Europe de l'Ouest, France mise en évidence. */
function CarteEurope({ w = 150, labels = true }: { w?: number; labels?: boolean }) {
  const lbl = { fontFamily: CONSIGNE_FONT, fontWeight: 800 } as const;
  const pays: { pts: string; fill: string; nom: string; lx: number; ly: number }[] = [
    { pts: "95,40 120,44 118,80 92,76", fill: "#a7f3d0", nom: "ROYAUME-UNI", lx: 76, ly: 34 },
    { pts: "150,66 186,70 188,88 150,86", fill: "#c4b5fd", nom: "BELGIQUE", lx: 168, ly: 62 },
    { pts: "196,80 242,86 240,140 198,134", fill: "#93c5fd", nom: "ALLEMAGNE", lx: 220, ly: 112 },
    { pts: "193,138 214,141 211,153 192,150", fill: "#fda4af", nom: "SUISSE", lx: 229, ly: 150 },
    { pts: "205,150 226,156 222,200 236,232 221,236 210,204 203,180", fill: "#86efac", nom: "ITALIE", lx: 236, ly: 190 },
    { pts: "88,198 162,196 168,250 92,256", fill: "#fcd34d", nom: "ESPAGNE", lx: 120, ly: 232 },
  ];
  return (
    <svg viewBox="0 0 300 272" width={w} height={(w * 272) / 300} aria-label="Carte de la France en Europe">
      <rect x="0" y="0" width="300" height="272" fill="#cfe8f5" />
      {pays.map((p) => <polygon key={p.nom} points={p.pts} fill={p.fill} stroke="#64748b" strokeWidth="1.2" />)}
      {/* France, mise en évidence */}
      <polygon points="150,90 192,114 190,162 150,194 112,172 110,120" fill="#f87171" stroke="#b91c1c" strokeWidth="2" />
      {labels && (
        <>
          <text x="150" y="146" textAnchor="middle" fontSize="12" fill="#7f1d1d" style={lbl}>FRANCE</text>
          {pays.map((p) => <text key={p.nom} x={p.lx} y={p.ly} textAnchor="middle" fontSize="7.5" fill="#334155" style={lbl}>{p.nom}</text>)}
          <text x="40" y="150" textAnchor="middle" fontSize="8" fill="#1e3a8a" style={lbl} transform="rotate(-90 40 150)">OCÉAN ATLANTIQUE</text>
          <text x="122" y="104" textAnchor="middle" fontSize="7" fill="#1e3a8a" style={lbl}>la Manche</text>
          <text x="210" y="262" textAnchor="middle" fontSize="8" fill="#1e3a8a" style={lbl}>Mer Méditerranée</text>
        </>
      )}
      {/* rose des vents */}
      <g transform="translate(272,36)">
        <line x1="0" y1="12" x2="0" y2="-9" stroke="#111" strokeWidth="1.6" />
        <path d="M0 -14 l 3 7 l -6 0 Z" fill="#111" />
        <text x="0" y="-16" textAnchor="middle" fontSize="8" fill="#111" style={lbl}>N</text>
      </g>
      <rect x="1" y="1" width="298" height="270" fill="none" stroke="#111" strokeWidth="2" rx="4" />
    </svg>
  );
}

const ET_FE = ["La France en Europe", "Un continent : l'Europe", "Les pays voisins", "Les mers et l'océan", "Je me repère (N/S/E/O)", "Je retiens"];
export function GeoFranceEuropeDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET_FE.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: GEO }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géographie · La France en Europe</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET_FE.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><CarteEurope w={320} /></div>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: GEO }}>La France en Europe</h1>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Un continent : l'Europe</h2>
            <div className="mt-3 flex justify-center"><CarteEurope w={300} /></div>
            <p className="mt-2 text-2xl text-stone-600">Notre pays, la <b style={{ color: "#b91c1c" }}>France</b>, se trouve sur le continent de l'<b>Europe</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Les pays voisins</h2>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[["🇪🇸", "Espagne", "au sud-ouest"], ["🇮🇹", "Italie", "au sud-est"], ["🇩🇪", "Allemagne", "à l'est"], ["🇧🇪", "Belgique", "au nord"], ["🇨🇭", "Suisse", "à l'est"], ["🇬🇧", "Royaume-Uni", "au nord-ouest"]].map(([e, n, d]) => (
                <div key={n} className="rounded-2xl border-2 bg-white px-2 py-2" style={{ borderColor: GEO }}><div className="text-3xl">{e}</div><div className="text-lg font-bold text-stone-800">{n}</div><div className="text-sm text-stone-500">{d}</div></div>
              ))}
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Les mers et l'océan</h2>
            <div className="mt-4 space-y-2 text-2xl text-stone-700">
              <p>🌊 À l'<b>ouest</b> : l'<b>océan Atlantique</b>.</p>
              <p>🌊 Au <b>sud</b> : la <b>mer Méditerranée</b>.</p>
              <p>🌊 Au <b>nord-ouest</b> : la <b>Manche</b> (face au Royaume-Uni).</p>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Je me repère</h2>
            <p className="mt-4 text-2xl text-stone-600">J'utilise les <b>points cardinaux</b> : <b>N</b>ord, <b>S</b>ud, <b>E</b>st, <b>O</b>uest.</p>
            <p className="mt-2 text-2xl text-stone-600">L'Espagne est au <b>sud-ouest</b>, l'Allemagne à l'<b>est</b>, la Belgique au <b>nord</b>.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🗺️🇫🇷</div>
            <h1 className="text-4xl font-extrabold" style={{ color: GEO }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">La <b>France</b> est en <b>Europe</b>. Elle a des <b>pays voisins</b> (Espagne, Italie, Allemagne, Belgique, Suisse) et elle est bordée par l'<b>océan Atlantique</b> et la <b>mer Méditerranée</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: GEO, color: GEO }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET_FE.length} · {ET_FE[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: GEO }}>▶</button>
      </div>
    </div>
  );
}

export function GeoFranceEuropeLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "34px", margin: "0 0 2mm", textAlign: "center", fontWeight: 700, color: GEO, fontFamily: CURSIVE }}>La France en Europe</h1>
      <div style={{ display: "flex", gap: "4mm", alignItems: "flex-start" }}>
        <div style={{ flex: 1.1, textAlign: "center" }}>
          <CarteEurope w={150} />
          <div style={{ fontSize: "9px", color: "#94a3b8" }}>Carte simplifiée (France en rouge).</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "13px", color: GEO }}>Mes pays voisins :</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 1.45, marginTop: "1mm" }}>
            • Au <b>sud-ouest</b> : l'Espagne 🇪🇸<br />
            • Au <b>sud-est</b> : l'Italie 🇮🇹<br />
            • À l'<b>est</b> : l'Allemagne 🇩🇪, la Suisse 🇨🇭<br />
            • Au <b>nord</b> : la Belgique 🇧🇪<br />
            • Au <b>nord-ouest</b> : le Royaume-Uni 🇬🇧 (de l'autre côté de la Manche).
          </div>
        </div>
      </div>
      <div style={{ marginTop: "2mm", border: `2px dashed ${GEO}`, borderRadius: "3mm", padding: "2.5mm 5mm", fontFamily: CURSIVE, fontSize: "17px", textAlign: "center", background: "#ecfeff" }}>
        La <b>France</b> est sur le continent de l'<b>Europe</b>. Elle est bordée par l'<b>océan Atlantique</b> (ouest) et la <b>mer Méditerranée</b> (sud).
      </div>
    </div>
  );
}

export function GeoFranceEuropeExos() {
  return (
    <FicheModele matiere="Géographie" titre="La France en Europe" couleur={GEO} dots={3} dotActif={3} page="La France en Europe">
      <SectionBar couleur={GEO}>Situer la France</SectionBar>
      <Exo n={1} couleur={GEO} consigne={<><b>Complète</b> : la France se trouve sur le continent de l'……………</>}>
        <div style={{ fontSize: "14px", fontFamily: CURSIVE, lineHeight: 2 }}>La France est en …………… . À l'ouest, il y a l'océan …………… . Au sud, il y a la mer …………… .</div>
      </Exo>
      <Exo n={2} couleur={GEO} consigne={<><b>Écris</b> le nom de trois pays voisins de la France.</>}>
        <div style={{ fontSize: "14px", fontFamily: CURSIVE }}>……………………  ·  ……………………  ·  ……………………</div>
      </Exo>
      <Exo n={3} couleur={GEO} consigne={<><b>Relie</b> chaque pays à sa direction.</>}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "16px", padding: "0 8mm" }}>
          <div style={{ lineHeight: 2.2 }}><div>Espagne •</div><div>Allemagne •</div><div>Royaume-Uni •</div></div>
          <div style={{ textAlign: "right", lineHeight: 2.2 }}><div>• au nord-ouest</div><div>• au sud-ouest</div><div>• à l'est</div></div>
        </div>
      </Exo>
      <Exo n={4} couleur={GEO} consigne={<><b>Colorie</b> la France en rouge et <b>écris</b> son nom sur la carte.</>}>
        <div style={{ width: "95mm", margin: "0 auto" }}><CarteEurope w={360} labels={false} /></div>
      </Exo>
      <Exo n={5} couleur={GEO} consigne={<><b>Écris</b> une phrase : où se trouve la France ? (production d'écrit)</>}>
        <LignesModele n={2} />
      </Exo>
    </FicheModele>
  );
}
