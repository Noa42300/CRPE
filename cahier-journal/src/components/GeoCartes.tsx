/**
 * Géographie — Lire une carte (se repérer, du proche au lointain).
 * Qu'est-ce qu'une carte ? Le titre, la légende, l'orientation (N/S/E/O).
 * Différents types : plan de quartier, carte de France, plan de transports.
 * Ateliers de lecture de cartes (cartes ORIGINALES dessinées, pas de plan réel).
 *   • Diaporama · Leçon à coller · Atelier « plan de quartier » · Atelier « plan de transports ».
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";

const GEO = "#0e7490";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const CURSIVE = "'Caveat','Comic Neue',cursive";

/* --- Plan de quartier (fictif, original) vu de dessus --- */
export function PlanQuartier({ w = 300 }: { w?: number }) {
  const road = "#cbd5e1";
  const card = { fontFamily: CONSIGNE_FONT, fontWeight: 700 } as const;
  const House = (x: number, y: number, emo: string, c: string) => (
    <g>
      <rect x={x} y={y} width={26} height={22} rx={2} fill={c} stroke="#475569" strokeWidth={1} />
      <text x={x + 13} y={y + 16} textAnchor="middle" fontSize={14}>{emo}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 200 150" width={w} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
      <rect x="1" y="1" width="198" height="148" fill="#f8fafc" stroke="#111" strokeWidth="1.5" rx="3" />
      {/* routes */}
      <rect x="0" y="62" width="200" height="14" fill={road} />
      <rect x="0" y="110" width="200" height="12" fill={road} />
      <rect x="70" y="0" width="14" height="150" fill={road} />
      <rect x="140" y="0" width="12" height="150" fill={road} />
      {/* rivière */}
      <path d="M0 20 Q50 30 100 18 T200 26" fill="none" stroke="#7dd3fc" strokeWidth="6" />
      {/* bâtiments */}
      {House(28, 34, "🏫", "#fde68a")}
      {House(100, 30, "🏛️", "#e9d5ff")}
      {House(162, 36, "🥖", "#fed7aa")}
      {House(30, 84, "🏠", "#bbf7d0")}
      {House(104, 84, "⛪", "#e2e8f0")}
      {House(160, 86, "🏪", "#fecaca")}
      {/* parc */}
      <rect x="92" y="126" width="56" height="20" rx="3" fill="#bbf7d0" stroke="#16a34a" />
      <text x="120" y="140" textAnchor="middle" fontSize="12">🌳🌳</text>
      {/* rose des vents */}
      <g transform="translate(184,16)">
        <line x1="0" y1="8" x2="0" y2="-7" stroke="#111" strokeWidth="1.4" />
        <path d="M0 -10 l3 6 l-6 0 Z" fill="#111" />
        <text x="0" y="-12" textAnchor="middle" fontSize="7" fill="#111" style={card}>N</text>
      </g>
    </svg>
  );
}

/* --- Plan de transports (fictif, original) : 3 lignes --- */
const STA = [
  { n: "Gare", x: 20, y: 120 }, { n: "Marché", x: 60, y: 90 }, { n: "Centre", x: 100, y: 75, hub: true },
  { n: "Parc", x: 150, y: 50 }, { n: "Stade", x: 185, y: 30 },
  { n: "École", x: 100, y: 25 }, { n: "Musée", x: 100, y: 125 },
  { n: "Jardin", x: 40, y: 45 }, { n: "Lac", x: 165, y: 110 },
];
export function PlanMetro({ w = 320 }: { w?: number }) {
  const line = (pts: string, c: string) => <polyline points={pts} fill="none" stroke={c} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />;
  const dot = (s: { n: string; x: number; y: number; hub?: boolean }) => (
    <g key={s.n}>
      <circle cx={s.x} cy={s.y} r={s.hub ? 6 : 4} fill="#fff" stroke="#111" strokeWidth={s.hub ? 2.5 : 1.8} />
      <text x={s.x + (s.x > 150 ? -6 : 7)} y={s.y - 6} textAnchor={s.x > 150 ? "end" : "start"} fontSize="8.5" fontFamily={CONSIGNE_FONT} fontWeight={700} fill="#111">{s.n}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 210 150" width={w} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
      <rect x="1" y="1" width="208" height="148" fill="#fff" stroke="#111" strokeWidth="1.5" rx="3" />
      {line("20,120 60,90 100,75 150,50 185,30", "#2563eb")}{/* ligne A (bleue) */}
      {line("100,25 100,75 100,125", "#dc2626")}{/* ligne B (rouge) */}
      {line("40,45 100,75 165,110", "#16a34a")}{/* ligne C (verte) */}
      {STA.map(dot)}
      {/* légende lignes */}
      <g transform="translate(10,142)" fontFamily={CONSIGNE_FONT} fontSize="8" fontWeight={700}>
        <line x1="0" y1="0" x2="14" y2="0" stroke="#2563eb" strokeWidth="4" /><text x="17" y="3">Ligne A</text>
        <line x1="55" y1="0" x2="69" y2="0" stroke="#dc2626" strokeWidth="4" /><text x="72" y="3">Ligne B</text>
        <line x1="110" y1="0" x2="124" y2="0" stroke="#16a34a" strokeWidth="4" /><text x="127" y="3">Ligne C</text>
      </g>
    </svg>
  );
}

/* ----------------------------- DIAPORAMA ----------------------------- */
const ET = ["Lire une carte", "Une carte = vue de dessus", "Le titre et la légende", "L'orientation (N/S/E/O)", "Plusieurs cartes", "Je retiens"];
export function GeoCartesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: GEO }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géographie · Lire une carte</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><PlanQuartier w={300} /></div>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: GEO }}>Lire une carte</h1>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Une carte = vue de dessus</h2>
            <p className="mt-4 text-2xl text-stone-600">Une carte, c'est un dessin de la réalité <b>vue d'en haut</b> (comme un oiseau), en <b>plus petit</b>.</p>
            <div className="mt-3 text-5xl">🐦 ⬇️ 🗺️</div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Le titre et la légende</h2>
            <div className="mt-3 flex items-center justify-center gap-6">
              <PlanQuartier w={280} />
              <div className="text-left text-2xl text-stone-700">
                <p>📝 le <b>titre</b> : ce que montre la carte.</p>
                <p>🔑 la <b>légende</b> : explique les <b>symboles</b> (🏫 = école…).</p>
              </div>
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>L'orientation</h2>
            <p className="mt-3 text-2xl text-stone-600">La <b>rose des vents</b> indique les directions : <b>N</b>ord (en haut), <b>S</b>ud, <b>E</b>st, <b>O</b>uest.</p>
            <div className="mt-2 text-6xl">🧭</div>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: GEO }}>Il y a plusieurs cartes</h2>
            <div className="mt-3 grid grid-cols-2 gap-3 text-xl text-stone-700">
              <div className="rounded-xl border-2 p-1" style={{ borderColor: GEO }}><PlanQuartier w={210} /><div className="font-bold">un plan de quartier (le proche)</div></div>
              <div className="rounded-xl border-2 p-1" style={{ borderColor: GEO }}><PlanMetro w={210} /><div className="font-bold">un plan de transports</div></div>
            </div>
            <p className="mt-2 text-lg text-stone-500">… et la carte de France (le pays), la carte du monde !</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🗺️🧭</div>
            <h1 className="text-4xl font-extrabold" style={{ color: GEO }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Une <b>carte</b> montre un lieu <b>vu de dessus</b>. Pour la lire : le <b>titre</b>, la <b>légende</b> (les symboles) et l'<b>orientation</b> (N/S/E/O).</p>
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

/* ------------------------------- LEÇON ------------------------------- */
export function GeoCartesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fffdf9", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "32px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: GEO, fontFamily: CURSIVE }}>Lire une carte</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: GEO, marginBottom: "2mm" }}>GÉOGRAPHIE · se repérer</div>
      <div style={{ display: "flex", gap: "5mm", alignItems: "center" }}>
        <div style={{ flex: "0 0 48%" }}><PlanQuartier w={300} /></div>
        <ol style={{ margin: 0, paddingLeft: "6mm", fontSize: "16px", lineHeight: 1.7, fontFamily: CURSIVE }}>
          <li>Une <b style={{ color: GEO }}>carte</b> montre un lieu <b>vu de dessus</b>, en plus petit.</li>
          <li>Le <b style={{ color: GEO }}>titre</b> dit ce que montre la carte.</li>
          <li>La <b style={{ color: GEO }}>légende</b> explique les <b>symboles</b> (🏫 = école, 🌳 = parc…).</li>
          <li>L'<b style={{ color: GEO }}>orientation</b> : la rose des vents (N, S, E, O).</li>
        </ol>
      </div>
      <div style={{ marginTop: "3mm", border: `2px dashed ${GEO}`, borderRadius: "3mm", padding: "2mm 5mm", background: "#f0fdff", fontFamily: CURSIVE, fontSize: "16px", textAlign: "center" }}>
        Il existe plusieurs cartes : le <b>plan</b> (le quartier, proche), la <b>carte de France</b> (le pays), le <b>plan de transports</b>, la carte du monde.
      </div>
    </div>
  );
}

/* ------------------------- ATELIERS (lecture) ------------------------- */
export function AtelierPlanQuartier() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm 11mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `2px solid ${GEO}`, paddingBottom: "1.5mm" }}>
        <h1 style={{ fontSize: "20px", margin: 0, fontWeight: 800, color: GEO, fontFamily: CONSIGNE_FONT }}>Atelier cartes ① — Le plan du quartier</h1>
        <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .............. · CE1-CE2</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "2mm 0" }}><PlanQuartier w={360} /></div>
      <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11px", color: "#64748b", textAlign: "center", marginBottom: "2mm" }}>Légende : 🏫 école · 🏛️ mairie · 🥖 boulangerie · ⛪ église · 🏪 magasin · 🏠 maison · 🌳 parc · bande bleue = rivière</div>
      <ol style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 2.1, paddingLeft: "7mm" }}>
        <li>Quel bâtiment est tout en haut à gauche ? ……………………</li>
        <li>Qu'y a-t-il au <b>Sud</b> (en bas) du quartier ? ……………………</li>
        <li>La boulangerie est à l'<b>Est</b> ou à l'<b>Ouest</b> de l'école ? ……………</li>
        <li>Pour aller de l'école à la mairie, dans quelle direction je vais ? ……………</li>
        <li>Dessine une ✗ sur la rivière.</li>
      </ol>
    </div>
  );
}

export function AtelierPlanMetro() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm 11mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `2px solid ${GEO}`, paddingBottom: "1.5mm" }}>
        <h1 style={{ fontSize: "20px", margin: 0, fontWeight: 800, color: GEO, fontFamily: CONSIGNE_FONT }}>Atelier cartes ② — Le plan de transports</h1>
        <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .............. · CE1-CE2</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "2mm 0" }}><PlanMetro w={380} /></div>
      <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11px", color: "#64748b", textAlign: "center", marginBottom: "2mm" }}>Les points sont les stations ; le gros point (Centre) est une correspondance (on change de ligne).</div>
      <ol style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 2.1, paddingLeft: "7mm" }}>
        <li>De quelle couleur est la <b>ligne A</b> ? …………… Combien de stations a-t-elle ? ……</li>
        <li>Quelle station permet de changer de ligne (correspondance) ? ……………………</li>
        <li>Je pars de <b>Gare</b>, je veux aller à <b>Stade</b> : quelle ligne je prends ? …………</li>
        <li>Pour aller de <b>École</b> à <b>Musée</b>, je prends la ligne …… ; je passe par …………… .</li>
        <li>Colorie en rouge les stations de la <b>ligne B</b>.</li>
      </ol>
    </div>
  );
}
