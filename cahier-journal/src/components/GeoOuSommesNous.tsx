/**
 * Géographie — Séquence 1 « Se repérer dans l'espace proche », séance 1.
 * « Où sommes-nous ? » : se situer sur une VRAIE CARTE de France (du pays à notre
 * commune) + les points cardinaux (nord, sud, est, ouest).
 *  • Diaporama à projeter · Leçon à coller · Fiche d'exercices · Carte à compléter.
 * Classe de Saint-Priest-en-Jarez (Loire, Auvergne-Rhône-Alpes, France).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";
import { CarteFrance, RoseDesVents } from "./CarteFrance";

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

const Credit = () => (
  <div style={{ fontSize: "8px", color: "#94a3b8", textAlign: "right", marginTop: "0.5mm" }}>Fond de carte © amCharts (licence libre)</div>
);

const ET = ["Où sommes-nous ?", "Notre pays : la France", "Notre région", "Notre département & notre commune", "Comme des poupées russes", "Nord, sud, est, ouest", "Je retiens"];
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
            <div className="flex justify-center"><div style={{ width: "min(46vh,340px)" }}><CarteFrance ara ecole loire /></div></div>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: GEO }}>Où sommes-nous ?</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">On va se repérer sur la carte : de la <b>France</b> jusqu'à notre <b>école</b>&nbsp;!</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: NIVEAUX[3].c }}>Notre pays : la France 🇫🇷</h2>
            <div className="mt-3 flex justify-center"><div style={{ width: "min(52vh,400px)" }}><CarteFrance /></div></div>
            <p className="mt-2 text-2xl text-stone-600">Voici la carte de la <b>France</b>. On l'appelle « l'Hexagone » (6 côtés).</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: NIVEAUX[2].c }}>Notre région</h2>
            <div className="mt-3 flex justify-center"><div style={{ width: "min(52vh,400px)" }}><CarteFrance ara nomARA /></div></div>
            <p className="mt-2 text-2xl text-stone-600">La France est partagée en <b>régions</b>. La nôtre : <b style={{ color: GEO }}>Auvergne-Rhône-Alpes</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: NIVEAUX[1].c }}>Notre département & notre commune</h2>
            <div className="mt-3 flex justify-center"><div style={{ width: "min(52vh,400px)" }}><CarteFrance ara loire ecole /></div></div>
            <p className="mt-2 text-2xl text-stone-600">Département : <b style={{ color: NIVEAUX[1].c }}>la Loire (42)</b> · Commune : <b style={{ color: NIVEAUX[0].c }}>Saint-Priest-en-Jarez</b> (près de Saint-Étienne).</p>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-md text-center">
            <h2 className="mb-3 text-4xl font-extrabold" style={{ color: GEO }}>Comme des poupées russes</h2>
            <Emboitement />
            <p className="mt-3 text-xl text-stone-500">Ma commune est dans mon département, dans ma région, dans mon pays.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: GEO }}>Nord, sud, est, ouest</h2>
            <div className="mt-3 flex items-center justify-center gap-6">
              <RoseDesVents size={220} />
              <div style={{ width: "min(40vh,300px)" }}><CarteFrance ara ecole rose /></div>
            </div>
            <p className="mt-2 text-2xl text-stone-600">La <b>rose des vents</b> m'aide à m'orienter sur la carte.</p>
          </div>
        )}
        {i === 6 && (
          <div className="text-center">
            <div className="flex justify-center"><div style={{ width: "min(40vh,300px)" }}><CarteFrance ara loire ecole rose /></div></div>
            <h1 className="mt-1 text-4xl font-extrabold" style={{ color: GEO }}>Je retiens</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">J'habite à <b>Saint-Priest-en-Jarez</b>, dans la <b>Loire</b>, en <b>Auvergne-Rhône-Alpes</b>, en <b>France</b>.</p>
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
      <h1 style={{ fontSize: "38px", margin: "0 0 2mm", textAlign: "center", fontWeight: 700, color: GEO, fontFamily: CURSIVE }}>Où sommes-nous ?</h1>
      <div style={{ display: "flex", gap: "5mm", alignItems: "flex-start" }}>
        <div style={{ flex: 1.15 }}>
          <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginBottom: "1mm" }}>Sur la carte de France :</div>
          <CarteFrance ara loire ecole nomARA rose width="100%" />
          <Credit />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "13px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginBottom: "1mm" }}>Je me situe (poupées russes) :</div>
          <Emboitement />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2mm" }}><RoseDesVents size={120} /></div>
          <div style={{ fontFamily: CURSIVE, fontSize: "15px", textAlign: "center" }}>la rose des vents : nord, sud, est, ouest</div>
        </div>
      </div>
      <div style={{ marginTop: "3mm", border: `2px dashed ${GEO}`, borderRadius: "3mm", padding: "2.5mm 5mm", fontFamily: CURSIVE, fontSize: "18px", textAlign: "center" }}>
        J'habite à <b>Saint-Priest-en-Jarez</b>, dans la <b>Loire</b>, en <b>Auvergne-Rhône-Alpes</b>, en <b>France</b> (en Europe).
      </div>
    </div>
  );
}

/* ====== CARTE À COMPLÉTER (à imprimer) — l'élève pose le point de l'école ====== */
export function CarteFranceAImprimer() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "265mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "2mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Ma carte de France</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
        </div>
        <div style={{ fontSize: "13px", fontFamily: CONSIGNE_FONT, lineHeight: 1.5 }}>
          <div><b>1.</b> Colorie en bleu notre région : <b>Auvergne-Rhône-Alpes</b>.</div>
          <div><b>2.</b> Pose un <b style={{ color: "#dc2626" }}>point rouge •</b> sur notre commune : <b>Saint-Priest-en-Jarez</b> (près de Saint-Étienne).</div>
          <div><b>3.</b> Écris <b>N</b>, <b>S</b>, <b>E</b>, <b>O</b> sur la rose des vents.</div>
        </div>
        {/* grande carte vierge, avec N/S/E/O autour à compléter */}
        <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2mm" }}>
          <div style={{ position: "absolute", top: "1mm", left: "50%", transform: "translateX(-50%)", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "22px", color: "#111" }}>______</div>
          <div style={{ position: "absolute", bottom: "1mm", left: "50%", transform: "translateX(-50%)", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "22px", color: "#111" }}>______</div>
          <div style={{ position: "absolute", top: "50%", right: "2mm", transform: "translateY(-50%)", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "22px", color: "#111" }}>__</div>
          <div style={{ position: "absolute", top: "50%", left: "2mm", transform: "translateY(-50%)", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "22px", color: "#111" }}>__</div>
          <div style={{ width: "155mm" }}><CarteFrance blank loire rose roseLabels={false} /></div>
        </div>
        <Credit />
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
