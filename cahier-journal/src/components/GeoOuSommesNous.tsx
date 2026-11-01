/**
 * Géographie — Séquence 1 « Se repérer dans l'espace proche », séance 1.
 * « Où sommes-nous ? » : se situer par emboîtement (ville → département →
 * région → pays → continent) + les points cardinaux (nord, sud, est, ouest).
 *  • Diaporama à projeter · Leçon à coller · Fiche de repérage.
 * Classe de Saint-Priest-en-Jarez (Loire, Auvergne-Rhône-Alpes, France).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const GEO = "#0e7490";
const CURSIVE = "'Caveat','Comic Neue',cursive";

/* Emboîtement : commune → département → région → pays. */
const NIVEAUX = [
  { t: "Ma commune", v: "Saint-Priest-en-Jarez", c: "#ea580c" },
  { t: "Mon département", v: "la Loire (42)", c: "#ca8a04" },
  { t: "Ma région", v: "Auvergne-Rhône-Alpes", c: "#0e7490" },
  { t: "Mon pays", v: "la France", c: "#1d4ed8" },
];

function Emboitement({ reveal = true }: { reveal?: boolean }) {
  // Rectangles emboîtés : pays (grand) → région → département → commune (petit).
  return (
    <div style={{ padding: "3mm", border: `4px solid ${NIVEAUX[3].c}`, borderRadius: "4mm" }}>
      <div style={{ fontWeight: 800, color: NIVEAUX[3].c, fontFamily: CONSIGNE_FONT, fontSize: "13px" }}>Pays : {reveal ? NIVEAUX[3].v : "……………"}</div>
      <div style={{ marginTop: "2mm", padding: "3mm", border: `4px solid ${NIVEAUX[2].c}`, borderRadius: "4mm" }}>
        <div style={{ fontWeight: 800, color: NIVEAUX[2].c, fontFamily: CONSIGNE_FONT, fontSize: "13px" }}>Région : {reveal ? NIVEAUX[2].v : "……………"}</div>
        <div style={{ marginTop: "2mm", padding: "3mm", border: `4px solid ${NIVEAUX[1].c}`, borderRadius: "4mm" }}>
          <div style={{ fontWeight: 800, color: NIVEAUX[1].c, fontFamily: CONSIGNE_FONT, fontSize: "13px" }}>Département : {reveal ? NIVEAUX[1].v : "……………"}</div>
          <div style={{ marginTop: "2mm", padding: "3mm", border: `4px solid ${NIVEAUX[0].c}`, borderRadius: "4mm", background: "#fff7ed" }}>
            <div style={{ fontWeight: 800, color: NIVEAUX[0].c, fontFamily: CONSIGNE_FONT, fontSize: "13px" }}>Commune : {reveal ? NIVEAUX[0].v : "……………"}</div>
            <div style={{ textAlign: "center", fontSize: "22px" }}>🏫</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoseDesVents({ labels = true, size = 180 }: { labels?: boolean; size?: number }) {
  const c = size / 2;
  const L = (x: number, y: number, t: string) => (
    <text x={x} y={y} textAnchor="middle" fontFamily={CONSIGNE_FONT} fontWeight="800" fontSize={size * 0.13} fill={GEO}>{labels ? t : "…"}</text>
  );
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <circle cx={c} cy={c} r={c * 0.62} fill="none" stroke="#cbd5e1" strokeWidth="2" />
      {/* étoile 4 branches */}
      <polygon points={`${c},${c * 0.1} ${c * 1.12},${c * 0.88} ${c * 1.9},${c} ${c * 1.12},${c * 1.12} ${c},${c * 1.9} ${c * 0.88},${c * 1.12} ${c * 0.1},${c} ${c * 0.88},${c * 0.88}`} fill={GEO} opacity="0.85" stroke="#083344" strokeWidth="1.5" />
      {L(c, size * 0.1, "N")}
      {L(c, size * 0.97, "S")}
      {L(size * 0.92, c + size * 0.045, "E")}
      {L(size * 0.08, c + size * 0.045, "O")}
    </svg>
  );
}

const ET = ["Où sommes-nous ?", "Ma commune", "Mon département", "Ma région & mon pays", "Les poupées russes", "Nord, sud, est, ouest", "Je retiens"];
export function GeoOuSommesNousDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: GEO }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Géographie · Où sommes-nous ?</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="text-6xl">🌍📍</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: GEO }}>Où sommes-nous ?</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">On va apprendre à <b>se situer</b> : de notre école jusqu'à la France&nbsp;!</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: NIVEAUX[0].c }}>Ma commune</h2>
            <p className="mt-4 text-3xl font-bold text-stone-800">🏫 Saint-Priest-en-Jarez</p>
            <p className="mt-3 text-2xl text-stone-600">C'est notre <b>ville</b>, juste à côté de <b>Saint-Étienne</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: NIVEAUX[1].c }}>Mon département</h2>
            <p className="mt-4 text-3xl font-bold text-stone-800">la Loire (42)</p>
            <p className="mt-3 text-2xl text-stone-600">Plusieurs villes ensemble forment un <b>département</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: NIVEAUX[2].c }}>Ma région & mon pays</h2>
            <p className="mt-4 text-2xl text-stone-700">Région : <b>Auvergne-Rhône-Alpes</b></p>
            <p className="text-2xl text-stone-700">Pays : <b style={{ color: NIVEAUX[3].c }}>la France</b> 🇫🇷</p>
            <p className="mt-3 text-xl text-stone-500">La France est en <b>Europe</b>.</p>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-md text-center">
            <h2 className="mb-3 text-4xl font-extrabold" style={{ color: GEO }}>Comme des poupées russes</h2>
            <Emboitement />
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Nord, sud, est, ouest</h2>
            <div className="mt-3 flex justify-center"><RoseDesVents size={220} /></div>
            <p className="mt-2 text-2xl text-stone-600">La <b>rose des vents</b> m'aide à m'orienter.</p>
          </div>
        )}
        {i === 6 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🧭</div>
            <h1 className="text-4xl font-extrabold" style={{ color: GEO }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">J'habite à <b>Saint-Priest-en-Jarez</b>, dans la <b>Loire</b>, en <b>Auvergne-Rhône-Alpes</b>, en <b>France</b>.</p>
            <p className="text-2xl font-semibold text-stone-600">Je m'oriente avec le <b>nord, le sud, l'est, l'ouest</b>.</p>
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

export function GeoOuSommesNousLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "40px", margin: "0 0 3mm", textAlign: "center", fontWeight: 700, color: GEO, fontFamily: CURSIVE }}>Où sommes-nous ?</h1>
      <div style={{ display: "flex", gap: "6mm", alignItems: "flex-start" }}>
        <div style={{ flex: 1.3 }}>
          <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginBottom: "1.5mm" }}>Je me situe (de ma ville jusqu'à mon pays) :</div>
          <Emboitement />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginBottom: "1.5mm" }}>Je m'oriente :</div>
          <div style={{ display: "flex", justifyContent: "center" }}><RoseDesVents size={150} /></div>
          <div style={{ fontFamily: CURSIVE, fontSize: "18px", marginTop: "2mm" }}>la rose des vents :<br />nord, sud, est, ouest</div>
        </div>
      </div>
      <div style={{ marginTop: "4mm", border: `2px dashed ${GEO}`, borderRadius: "3mm", padding: "3mm 5mm", fontFamily: CURSIVE, fontSize: "19px", textAlign: "center" }}>
        J'habite à <b>Saint-Priest-en-Jarez</b>, dans la <b>Loire</b>, en <b>Auvergne-Rhône-Alpes</b>, en <b>France</b> (en Europe).
      </div>
    </div>
  );
}

export function GeoOuSommesNousExos() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "265mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "26px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Où sommes-nous ?</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>1. Complète pour te situer.</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "20px", lineHeight: 2.1, marginTop: "1mm" }}>
          J'habite dans la commune de ...................................... .<br />
          Elle est dans le département de ...................................... .<br />
          Dans la région ...................................... .<br />
          Dans le pays : ...................................... .
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "4mm" }}>2. Écris N, S, E, O sur la rose des vents.</div>
        <div style={{ display: "flex", justifyContent: "center", margin: "1mm 0" }}><RoseDesVents labels={false} size={150} /></div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>3. Range du plus petit au plus grand (écris 1, 2, 3, 4).</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", display: "flex", flexWrap: "wrap", gap: "2mm 8mm", marginTop: "1mm" }}>
          <span>…… la région</span><span>…… la commune</span><span>…… le pays</span><span>…… le département</span>
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "4mm" }}>4. Vrai ou faux ? (entoure)</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 1.9, marginTop: "1mm" }}>
          a) Saint-Priest-en-Jarez est une ville. &nbsp; <b>VRAI / FAUX</b><br />
          b) La Loire est un pays. &nbsp; <b>VRAI / FAUX</b><br />
          c) La France est en Europe. &nbsp; <b>VRAI / FAUX</b>
        </div>
      </div>
    </div>
  );
}
