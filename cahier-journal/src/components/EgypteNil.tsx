/**
 * Histoire — Antiquité · L'Égypte des pharaons · Séance 1 « Au bord du Nil ».
 * Situer l'Égypte ancienne dans le temps (Antiquité) et l'espace (Afrique, le
 * Nil) ; comprendre que le Nil permettait la vie (eau, cultures, bateaux).
 *  • Diaporama à projeter (vraies photos) · Leçon à coller · Fiche d'exercices.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { WikiImage } from "./WikiImage";

const HIST = "#b45309"; // ambre / sable
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

/* Petit schéma : le Nil (ruban bleu) qui traverse le désert (sable). */
function SchemaNil({ h = 150 }: { h?: number }) {
  return (
    <svg viewBox="0 0 220 150" width={h * 220 / 150} height={h} aria-label="le Nil dans le désert">
      <rect x="0" y="0" width="220" height="150" fill="#fde9c8" />
      {/* bandes vertes fertiles le long du fleuve */}
      <path d="M88 0 Q 80 75 110 150 L 150 150 Q 120 75 128 0 Z" fill="#bbf7d0" />
      {/* le Nil */}
      <path d="M104 0 Q 98 75 124 150" fill="none" stroke="#2563eb" strokeWidth="10" strokeLinecap="round" />
      {/* soleil */}
      <circle cx="188" cy="26" r="14" fill="#f59e0b" />
      {/* palmiers */}
      <g stroke="#15803d" strokeWidth="3" fill="#15803d">
        <line x1="60" y1="120" x2="60" y2="96" />
        <path d="M60 96 q -14 -6 -22 0 M60 96 q 14 -6 22 0 M60 96 q -6 -12 -14 -14 M60 96 q 6 -12 14 -14" fill="none" />
      </g>
      {/* bateau */}
      <path d="M150 112 l 26 0 l -5 9 l -16 0 Z" fill="#92400e" />
      <line x1="163" y1="112" x2="163" y2="96" stroke="#92400e" strokeWidth="2" />
      <path d="M163 96 l 12 14 l -12 0 Z" fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
      <text x="150" y="60" fontSize="12" fontWeight="800" fill="#1d4ed8" stroke="#fde9c8" strokeWidth="3" paintOrder="stroke" fontFamily={CONSIGNE_FONT}>le Nil</text>
    </svg>
  );
}

const ET = ["Au bord du Nil", "Il y a très longtemps", "Où ? En Afrique", "Le Nil donne la vie", "La crue du Nil", "Je retiens"];
export function EgypteNilDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: HIST }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Histoire · L'Égypte — Au bord du Nil</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><WikiImage title="Nil" alt="le fleuve Nil en Égypte" accent={HIST} height="clamp(180px, 36vh, 340px)" /></div>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Au bord du Nil</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">On part en Égypte, il y a très, très longtemps&nbsp;!</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Il y a très longtemps</h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-xl font-bold">
              <span className="rounded-xl bg-stone-200 px-3 py-2">Préhistoire</span>
              <span>→</span>
              <span className="rounded-xl px-3 py-2 text-white" style={{ background: HIST }}>Antiquité<br /><span className="text-sm">(l'Égypte !)</span></span>
              <span>→</span>
              <span className="rounded-xl bg-stone-200 px-3 py-2">Moyen Âge</span>
              <span>…</span>
            </div>
            <p className="mt-4 text-2xl text-stone-600">L'Égypte ancienne, c'était l'<b>Antiquité</b> : il y a plus de <b>5000 ans</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Où ? En Afrique</h2>
            <div className="mt-3 flex justify-center"><WikiImage title="Nil" alt="le Nil, grand fleuve d'Afrique" accent={HIST} height="clamp(160px, 32vh, 300px)" /></div>
            <p className="mt-3 text-2xl text-stone-600">L'Égypte est en <b>Afrique</b>, le long d'un très grand fleuve : le <b>Nil</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Le Nil donne la vie</h2>
            <div className="mt-3 flex justify-center"><SchemaNil h={180} /></div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[["💧", "de l'eau pour boire"], ["🌾", "des cultures (blé)"], ["🐟", "des poissons"], ["⛵", "des bateaux"]].map(([e, t]) => (
                <div key={t} className="rounded-2xl border-2 bg-white px-2 py-2" style={{ borderColor: HIST }}><div className="text-3xl">{e}</div><div className="text-base font-semibold text-stone-700">{t}</div></div>
              ))}
            </div>
            <p className="mt-2 text-xl text-stone-500">Tout autour, c'est le <b>désert</b> : sans le Nil, on ne pourrait pas vivre là.</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>La crue du Nil</h2>
            <p className="mt-4 text-2xl text-stone-600">Chaque année, le fleuve <b>monte</b> et déborde un peu.</p>
            <p className="mt-2 text-2xl text-stone-600">Il dépose une <b>terre noire</b> (le limon) 🌱 : la terre devient très riche.</p>
            <p className="mt-2 text-2xl text-stone-600">Les paysans peuvent alors avoir de <b>belles récoltes</b>. 🌾</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="flex justify-center"><SchemaNil h={120} /></div>
            <h1 className="mt-1 text-4xl font-extrabold" style={{ color: HIST }}>Je retiens</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Dans l'<b>Antiquité</b>, les Égyptiens vivaient en <b>Afrique</b>, au bord du <b>Nil</b>.</p>
            <p className="text-2xl font-semibold text-stone-600">Le <b>Nil</b> donnait l'eau, les cultures et permettait de se déplacer.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: HIST, color: HIST }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: HIST }}>▶</button>
      </div>
    </div>
  );
}

export function EgypteNilLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "36px", margin: "0 0 2mm", textAlign: "center", fontWeight: 700, color: HIST, fontFamily: CURSIVE }}>L'Égypte — au bord du Nil</h1>
      <div style={{ display: "flex", gap: "5mm", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "center" }}><SchemaNil h={130} /></div>
          <div style={{ fontSize: "9px", color: "#94a3b8", textAlign: "center" }}>Le Nil traverse le désert.</div>
        </div>
        <div style={{ flex: 1.1 }}>
          <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 1.5 }}>
            Dans l'<b>Antiquité</b> (il y a plus de 5000 ans), les Égyptiens vivaient en <b>Afrique</b>, au bord d'un grand fleuve : le <b>Nil</b>.
          </div>
          <div style={{ marginTop: "2mm", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "13px", color: HIST }}>Le Nil donne la vie :</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5mm", marginTop: "1mm" }}>
            {[["💧", "de l'eau"], ["🌾", "des cultures"], ["🐟", "des poissons"], ["⛵", "des bateaux"]].map(([e, t]) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "2mm", border: `2px solid ${HIST}`, borderRadius: "3mm", padding: "1mm 2.5mm" }}>
                <span style={{ fontSize: "22px" }}>{e}</span><span style={{ fontFamily: CURSIVE, fontSize: "17px" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "3mm", border: `2px dashed ${HIST}`, borderRadius: "3mm", padding: "2.5mm 5mm", fontFamily: CURSIVE, fontSize: "18px", textAlign: "center", background: "#fffbeb" }}>
        Chaque année, la <b>crue</b> du Nil dépose une <b>terre riche</b> : les récoltes sont belles. 🌱
      </div>
    </div>
  );
}

export function EgypteNilExos() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "265mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>L'Égypte — au bord du Nil</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>1. Complète avec les mots : <i>Afrique · Nil · Antiquité · désert</i>.</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 2, marginTop: "1mm" }}>
          Les Égyptiens vivaient pendant l'...................... .<br />
          Ils habitaient en ...................... , au bord du fleuve le ...................... .<br />
          Tout autour, il y avait le ...................... .
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>2. Le Nil donne la vie. Relie chaque image à ce qu'elle apporte.</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "19px", marginTop: "2mm", padding: "0 6mm" }}>
          <div style={{ lineHeight: 2.2 }}>
            <div>💧 •</div><div>🌾 •</div><div>⛵ •</div>
          </div>
          <div style={{ textAlign: "right", lineHeight: 2.2 }}>
            <div>• pour se déplacer</div><div>• pour boire</div><div>• pour manger (les cultures)</div>
          </div>
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>3. Vrai ou faux ? (entoure)</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 1.9, marginTop: "1mm" }}>
          a) L'Égypte est en Europe. &nbsp; <b>VRAI / FAUX</b><br />
          b) Le Nil est un grand fleuve. &nbsp; <b>VRAI / FAUX</b><br />
          c) La crue du Nil rend la terre riche. &nbsp; <b>VRAI / FAUX</b>
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>4. Dessine le Nil avec un bateau et un palmier.</div>
        <div style={{ border: "1.5px dashed #94a3b8", borderRadius: "3mm", height: "45mm", marginTop: "1.5mm" }} />
      </div>
    </div>
  );
}
