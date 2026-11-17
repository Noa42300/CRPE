/**
 * Géographie — On reste en France : « Les mers et l'océan autour de la France ».
 * Après « Les villes de France », on apprend les étendues d'eau qui bordent le
 * pays (la Manche, la mer du Nord, l'océan Atlantique, la mer Méditerranée) et
 * on se repère avec les points cardinaux (N/S/E/O). VRAIE carte de France
 * (fond vectoriel amCharts, identique à « où sommes-nous » et « les villes »).
 *   • Diaporama à projeter · Leçon à coller · Fiche d'exercices (carte muette).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, LignesModele } from "./ficheModele";
import { LeconCahier, MotCle } from "./LeconCahier";
import { FRANCE_MAP } from "./carteFranceData";

const GEO = "#0e7490";
const SEA = "#1e3a8a";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const { W, H, regions } = FRANCE_MAP;

/* Les étendues d'eau, positionnées dans la mer autour de la silhouette. */
const MERS: { nom: string; x: number; y: number; rot?: number }[] = [
  { nom: "la Manche", x: 232, y: 78 },
  { nom: "la mer du Nord", x: 486, y: 40 },
  { nom: "l'océan Atlantique", x: 70, y: 430, rot: -90 },
  { nom: "la mer Méditerranée", x: 545, y: 726 },
];

/**
 * Vraie carte de France avec les mers autour.
 *  - labels=true : noms des mers écrits (leçon / diapo).
 *  - labels=false : numéros ① ② ③ ④ + pointillés → l'élève écrit (carte muette).
 */
export function CarteMersFrance({ w = 300, labels = true }: { w?: number; labels?: boolean }) {
  const land = "#eaf4df", landStroke = "#6b7280", sea = "#cfe8f5";
  const card = { fontFamily: CONSIGNE_FONT, fontWeight: 800 } as const;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={w} style={{ display: "block", maxWidth: "100%", height: "auto" }} aria-label="Carte des mers autour de la France">
      <rect x="2" y="2" width={W - 4} height={H - 4} rx="12" fill={sea} stroke="#111" strokeWidth="2" />
      {regions.map((r) => <path key={r.id} d={r.d} fill={land} stroke={landStroke} strokeWidth="1" strokeLinejoin="round" />)}
      {/* nom du pays au centre */}
      <text x="360" y="400" textAnchor="middle" fontSize="30" fill="#3f6212" style={card}>FRANCE</text>
      {/* points cardinaux sur les bords */}
      <text x={W / 2} y="34" textAnchor="middle" fontSize="26" fill={GEO} style={card}>N</text>
      <text x={W / 2} y={H - 16} textAnchor="middle" fontSize="26" fill={GEO} style={card}>S</text>
      <text x={W - 22} y={H / 2} textAnchor="middle" fontSize="26" fill={GEO} style={card}>E</text>
      <text x="22" y={H / 2} textAnchor="middle" fontSize="26" fill={GEO} style={card}>O</text>
      {/* les mers */}
      {MERS.map((m, i) => (
        <g key={m.nom} transform={m.rot ? `rotate(${m.rot} ${m.x} ${m.y})` : undefined}>
          {labels ? (
            <text x={m.x} y={m.y} textAnchor="middle" fontSize="23" fill={SEA} style={card}>🌊 {m.nom}</text>
          ) : (
            <>
              <circle cx={m.x - 70} cy={m.y - 7} r="13" fill="#fff" stroke={SEA} strokeWidth="2" />
              <text x={m.x - 70} y={m.y} textAnchor="middle" fontSize="16" fill={SEA} style={card}>{i + 1}</text>
              <text x={m.x + 6} y={m.y} textAnchor="middle" fontSize="20" fill={SEA} style={card}>................</text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

const ET = ["Les mers de France", "La France a des côtes", "À l'ouest : l'Atlantique", "Au nord : la Manche", "Au sud : la Méditerranée", "Je retiens"];
export function GeoMersFranceDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: GEO }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géographie · Les mers autour de la France</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><CarteMersFrance w={360} /></div>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: GEO }}>Les mers autour de la France</h1>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>La France a des côtes</h2>
            <div className="mt-3 flex justify-center"><CarteMersFrance w={340} /></div>
            <p className="mt-2 text-2xl text-stone-600">Là où la <b>terre touche l'eau</b>, c'est une <b style={{ color: GEO }}>côte</b>. La France est bordée par des <b>mers</b> et un <b>océan</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>À l'ouest : l'océan Atlantique</h2>
            <p className="mt-4 text-2xl text-stone-600">À l'<b>ouest</b> (à gauche sur la carte), c'est le grand <b style={{ color: SEA }}>océan Atlantique</b>.</p>
            <p className="mt-2 text-xl text-stone-500">On y trouve de longues plages et des ports de pêche.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Au nord : la Manche et la mer du Nord</h2>
            <p className="mt-4 text-2xl text-stone-600">Au <b>nord</b> (en haut), il y a la <b style={{ color: SEA }}>Manche</b>, puis la <b style={{ color: SEA }}>mer du Nord</b>.</p>
            <p className="mt-2 text-xl text-stone-500">De l'autre côté de la Manche, c'est le Royaume-Uni.</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Au sud : la mer Méditerranée</h2>
            <p className="mt-4 text-2xl text-stone-600">Au <b>sud</b> (en bas), c'est la <b style={{ color: SEA }}>mer Méditerranée</b>, une mer plus chaude.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🌊🇫🇷</div>
            <h1 className="text-4xl font-extrabold" style={{ color: GEO }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">La France est bordée par l'<b>océan Atlantique</b> (ouest), la <b>Manche</b> et la <b>mer du Nord</b> (nord), et la <b>mer Méditerranée</b> (sud). Je me repère avec <b>N</b>ord, <b>S</b>ud, <b>E</b>st, <b>O</b>uest.</p>
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

export function GeoMersFranceLecon() {
  return (
    <LeconCahier
      titre="Les mers autour de la France" emojiL="🌊" emojiR="🇫🇷" accent={GEO}
      sousTitre="GÉOGRAPHIE · SE REPÉRER EN FRANCE" variant="cote" titreSize="30px"
      visuel={<CarteMersFrance w={300} />}
      legende="La France et ses mers."
      points={[
        { t: <>Là où la <b>terre touche l'eau</b>, c'est une <MotCle accent={GEO}>côte</MotCle>. La France a beaucoup de côtes.</> },
        { t: <>À l'<b>ouest</b> : l'<MotCle accent={GEO}>océan Atlantique</MotCle>.</> },
        { t: <>Au <b>nord</b> : la <MotCle accent={GEO}>Manche</MotCle>, puis la <MotCle accent={GEO}>mer du Nord</MotCle>.</> },
        { t: <>Au <b>sud</b> : la <MotCle accent={GEO}>mer Méditerranée</MotCle>.</> },
      ]}
      savaisTu={<>💡 <b style={{ color: GEO }}>Je me repère :</b> j'utilise les points cardinaux <b>N</b>ord, <b>S</b>ud, <b>E</b>st, <b>O</b>uest pour dire où se trouve chaque mer.</>}
    />
  );
}

export function GeoMersFranceExos() {
  return (
    <FicheModele matiere="Géographie" titre="Les mers de France" couleur={GEO} dots={3} dotActif={3} page="Les mers autour de la France">
      <SectionBar couleur={GEO}>La France et ses mers</SectionBar>
      <Exo n={1} couleur={GEO} consigne={<><b>Écris</b> le nom de chaque mer sur la carte (aide-toi de la liste).</>}>
        <div style={{ display: "flex", gap: "4mm", alignItems: "center" }}>
          <div style={{ width: "78mm", flexShrink: 0 }}><CarteMersFrance w={300} labels={false} /></div>
          <div style={{ fontFamily: CURSIVE, fontSize: "15px", lineHeight: 1.9, border: `1.5px dashed ${GEO}`, borderRadius: "2mm", padding: "2mm 3mm", background: "#f0fdff" }}>
            Liste des mots :<br />• la Manche<br />• la mer du Nord<br />• l'océan Atlantique<br />• la mer Méditerranée
          </div>
        </div>
      </Exo>
      <Exo n={2} couleur={GEO} consigne={<><b>Complète</b> avec ouest, nord ou sud.</>}>
        <div style={{ fontSize: "14px", fontFamily: CURSIVE, lineHeight: 2 }}>L'océan Atlantique est à l'…………… . La mer Méditerranée est au …………… . La Manche est au …………… .</div>
      </Exo>
      <Exo n={3} couleur={GEO} consigne={<><b>Relie</b> chaque étendue d'eau à sa direction.</>}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "16px", padding: "0 10mm" }}>
          <div style={{ lineHeight: 2.2 }}><div>océan Atlantique •</div><div>mer Méditerranée •</div><div>la Manche •</div></div>
          <div style={{ textAlign: "right", lineHeight: 2.2 }}><div>• au nord</div><div>• à l'ouest</div><div>• au sud</div></div>
        </div>
      </Exo>
      <Exo n={4} couleur={GEO} consigne={<><b>Écris</b> une phrase : par quelles mers la France est-elle bordée ? (production d'écrit)</>}>
        <LignesModele n={2} />
      </Exo>
    </FicheModele>
  );
}
