/**
 * Histoire — Antiquité · L'Égypte des pharaons · Séance 1 « Au bord du Nil ».
 * Situer l'Égypte ancienne dans le temps (Antiquité) et l'espace (Afrique, le
 * Nil) ; comprendre que le Nil permettait la vie (eau, cultures, bateaux).
 *  • Diaporama à projeter (vraies photos) · Leçon à coller · Fiche d'exercices.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { WikiImage } from "./WikiImage";
import { LeconCahier, MotCle } from "./LeconCahier";

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

/* Carte simplifiée (type carte de géo) : l'Égypte, le Nil, les mers, le désert. */
function CarteEgypte({ w = 148 }: { w?: number }) {
  const BLEU = "#3b82f6", SABLE = "#fde9c8", VERT = "#bbf7d0";
  const lbl = { fontFamily: CONSIGNE_FONT, fontWeight: 800 } as const;
  return (
    <svg viewBox="0 0 220 300" width={w} height={(w * 300) / 220} aria-label="Carte de l'Égypte et du Nil">
      <rect x="0" y="0" width="220" height="300" fill={SABLE} />
      {/* mer Méditerranée (au nord) */}
      <rect x="0" y="0" width="220" height="34" fill={BLEU} />
      {/* mer Rouge (à l'est) */}
      <polygon points="200,44 220,56 220,300 184,300" fill={BLEU} />
      {/* vallée verte + delta */}
      <polygon points="100,74 56,34 150,34" fill={VERT} />
      <path d="M100 300 C 92 235 112 150 100 74" fill="none" stroke={VERT} strokeWidth="18" strokeLinecap="round" />
      {/* le Nil */}
      <path d="M100 300 C 92 235 112 150 100 74" fill="none" stroke={BLEU} strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="76" x2="64" y2="36" stroke={BLEU} strokeWidth="3" />
      <line x1="100" y1="76" x2="136" y2="36" stroke={BLEU} strokeWidth="3" />
      {/* pyramides près du Caire */}
      <g fill="#a16207" stroke="#78350f" strokeWidth="0.6">
        <path d="M72 97 l7 -13 l7 13 Z" /><path d="M81 97 l6 -10 l6 10 Z" />
      </g>
      {/* Le Caire */}
      <circle cx="99" cy="82" r="3.4" fill="#b91c1c" stroke="#fff" strokeWidth="1" />
      {/* étiquettes */}
      <text x="110" y="21" textAnchor="middle" fontSize="8.5" fill="#1e3a8a" style={lbl}>Mer Méditerranée</text>
      <text x="213" y="190" textAnchor="middle" fontSize="8" fill="#1e3a8a" style={lbl} transform="rotate(90 213 190)">mer Rouge</text>
      <text x="120" y="215" fontSize="12" fill="#1d4ed8" stroke={SABLE} strokeWidth="3" paintOrder="stroke" style={lbl}>le Nil</text>
      <text x="103" y="84" fontSize="9" fill="#b91c1c" stroke="#fff" strokeWidth="2.4" paintOrder="stroke" style={lbl}>Le Caire</text>
      <text x="40" y="104" fontSize="7.5" fill="#92400e" style={lbl}>pyramides</text>
      <text x="36" y="205" textAnchor="middle" fontSize="11" fill="#b45309" style={lbl} transform="rotate(-90 36 205)">DÉSERT</text>
      <text x="162" y="140" textAnchor="middle" fontSize="11" fill="#b45309" style={lbl} transform="rotate(90 162 140)">DÉSERT</text>
      {/* rose des vents */}
      <g transform="translate(30,60)">
        <line x1="0" y1="11" x2="0" y2="-8" stroke="#111" strokeWidth="1.6" />
        <path d="M0 -13 l 3 7 l -6 0 Z" fill="#111" />
        <text x="0" y="-15" textAnchor="middle" fontSize="8" fill="#111" style={lbl}>N</text>
      </g>
      <rect x="1" y="1" width="218" height="298" fill="none" stroke="#111" strokeWidth="2" rx="4" />
    </svg>
  );
}

const ET = ["Au bord du Nil", "Il y a très longtemps", "Où ? En Afrique", "Le Nil donne la vie", "La crue du Nil", "La vie au bord du Nil", "Une grande civilisation", "Je retiens"];
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
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>La vie au bord du Nil</h2>
            <div className="mt-3 flex justify-center"><WikiImage title="Felouque" alt="une felouque, barque sur le Nil" accent={HIST} height="clamp(150px, 30vh, 270px)" /></div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[["👩‍🌾", "Les paysans cultivent le blé."], ["⛵", "On navigue en felouque."], ["🧱", "Des maisons en briques de terre."]].map(([e, t]) => (
                <div key={t} className="rounded-2xl border-2 bg-white px-2 py-2" style={{ borderColor: HIST }}><div className="text-3xl">{e}</div><div className="text-base font-semibold text-stone-700">{t}</div></div>
              ))}
            </div>
          </div>
        )}
        {i === 6 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Grâce au Nil, une grande civilisation</h2>
            <div className="mt-3 flex justify-center"><WikiImage title="Pyramides de Gizeh" alt="les pyramides de Gizeh" accent={HIST} height="clamp(160px, 32vh, 290px)" /></div>
            <p className="mt-3 text-2xl text-stone-600">Au bord du Nil, les Égyptiens ont bâti de grandes <b>villes</b> et des <b>pyramides</b>, et inventé une écriture : les <b>hiéroglyphes</b>.</p>
          </div>
        )}
        {i === 7 && (
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
    <LeconCahier
      titre="L'Égypte, au bord du Nil" emojiL="🏜️" emojiR="⛵" accent={HIST} variant="cote"
      sousTitre="HISTOIRE · L'ANTIQUITÉ — IL Y A PLUS DE 5000 ANS"
      visuel={<CarteEgypte w={200} />} visuelMaxH="150mm"
      legende="Le Nil traverse l'Égypte, du sud vers la mer."
      points={[
        { t: <>Dans l'<MotCle accent={HIST}>Antiquité</MotCle> (il y a plus de 5000 ans), les Égyptiens vivaient en <MotCle accent={HIST}>Afrique</MotCle>, au bord d'un grand fleuve : le <MotCle accent={HIST}>Nil</MotCle>.</> },
        { t: <>Le Nil <b>donne la vie</b> : il apporte de l'eau 💧, des cultures (le blé 🌾), des poissons 🐟 et permet de se déplacer en bateau ⛵. Tout autour, c'est le <MotCle accent={HIST}>désert</MotCle>.</> },
        { t: <>Chaque année, la <MotCle accent={HIST}>crue</MotCle> fait monter le fleuve : il dépose une terre noire, le <MotCle accent={HIST}>limon</MotCle>, et les paysans ont de belles récoltes. 🌾</> },
      ]}
      savaisTu={<>💡 <b style={{ color: HIST }}>Le savais-tu ?</b> Le Nil est l'un des plus longs fleuves du monde ! On y naviguait déjà sur des barques, les felouques.</>}
    />
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

/* ======================================================================
 * SÉANCE 2 — Le pharaon et les pyramides.
 * ==================================================================== */
const ET_PH = ["Le pharaon et les pyramides", "Le pharaon, roi d'Égypte", "Les pyramides", "Comment les construire ?", "La momie et le trésor", "Je retiens"];
export function EgyptePharaonDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET_PH.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: HIST }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Histoire · L'Égypte — Le pharaon et les pyramides</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET_PH.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><WikiImage title="Pyramides de Gizeh" alt="les pyramides de Gizeh" accent={HIST} height="clamp(170px, 34vh, 320px)" /></div>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Le pharaon et les pyramides</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Qui commandait en Égypte ? Et à quoi servaient les pyramides ?</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Le pharaon, roi d'Égypte</h2>
            <div className="mt-3 flex justify-center"><WikiImage title="Toutânkhamon" alt="masque d'or de Toutânkhamon" accent={HIST} height="clamp(160px, 32vh, 300px)" /></div>
            <p className="mt-3 text-2xl text-stone-600">Le <b>pharaon</b> est le <b>roi</b> de l'Égypte. C'est l'homme le plus <b>puissant</b> : tout le monde lui obéit.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Les pyramides</h2>
            <div className="mt-3 flex justify-center"><WikiImage title="Pyramide de Khéops" alt="la grande pyramide" accent={HIST} height="clamp(160px, 32vh, 300px)" /></div>
            <p className="mt-3 text-2xl text-stone-600">Une pyramide est un <b>immense tombeau</b> de pierre. C'est là qu'on enterrait le pharaon quand il mourait.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Comment les construire ?</h2>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[["👷", "des milliers d'ouvriers"], ["🪨", "d'énormes blocs de pierre"], ["⏳", "il y a plus de 4500 ans"]].map(([e, t]) => (
                <div key={t} className="rounded-2xl border-2 bg-white px-2 py-3" style={{ borderColor: HIST }}><div className="text-4xl">{e}</div><div className="text-base font-semibold text-stone-700">{t}</div></div>
              ))}
            </div>
            <p className="mt-3 text-2xl text-stone-600">Les ouvriers tiraient les pierres sur de longues rampes. Un travail <b>très long</b> et <b>très dur</b> !</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>La momie et le trésor</h2>
            <p className="mt-4 text-2xl text-stone-600">Le corps du pharaon est conservé : on en fait une <b>momie</b>. 🧻</p>
            <p className="mt-2 text-2xl text-stone-600">On le place dans la pyramide avec un vrai <b>trésor</b> (or, bijoux) pour « l'autre vie ». 💰</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🔺👑</div>
            <h1 className="text-4xl font-extrabold" style={{ color: HIST }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Le <b>pharaon</b> est le roi d'Égypte. Les <b>pyramides</b> sont ses <b>tombeaux</b>, d'immenses monuments de pierre construits il y a très longtemps.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: HIST, color: HIST }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET_PH.length} · {ET_PH[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: HIST }}>▶</button>
      </div>
    </div>
  );
}

export function EgyptePharaonLecon() {
  const Img = ({ title, alt, leg }: { title: string; alt: string; leg: string }) => (
    <div style={{ flex: 1 }}>
      <div style={{ border: `3px solid ${HIST}`, borderRadius: "3mm", overflow: "hidden" }}><WikiImage title={title} alt={alt} accent={HIST} height="56mm" /></div>
      <div style={{ textAlign: "center", fontSize: "15px", marginTop: "0.5mm", fontFamily: "'Borel',cursive" }}>{leg}</div>
    </div>
  );
  return (
    <LeconCahier
      titre="Le pharaon et les pyramides" emojiL="👑" emojiR="🔺" accent={HIST}
      sousTitre="HISTOIRE · L'ÉGYPTE DE L'ANTIQUITÉ" visuelMaxH="66mm"
      visuel={<div style={{ display: "flex", gap: "5mm", width: "100%" }}>
        <Img title="Pyramides de Gizeh" alt="les pyramides de Gizeh" leg="les pyramides de Gizeh" />
        <Img title="Toutânkhamon" alt="masque d'or de Toutânkhamon" leg="le masque d'or d'un pharaon" />
      </div>}
      points={[
        { t: <>Il y a très longtemps, en Égypte, le roi s'appelait le <MotCle accent={HIST}>pharaon</MotCle>. C'était l'homme le plus <b>puissant</b> : tout le monde lui obéissait.</> },
        { t: <>Quand le pharaon mourait, on lui construisait une <MotCle accent={HIST}>pyramide</MotCle> : un immense <MotCle accent={HIST}>tombeau</MotCle> de pierre, bâti par des milliers d'ouvriers il y a plus de 4500 ans.</> },
        { t: <>On gardait le corps du pharaon : on en faisait une <MotCle accent={HIST}>momie</MotCle>, placée dans la pyramide avec un <MotCle accent={HIST}>trésor</MotCle>.</> },
      ]}
      savaisTu={<>💡 <b style={{ color: HIST }}>Le savais-tu ?</b> La plus grande pyramide, celle de Khéops, est encore debout aujourd'hui, après plus de 4500 ans !</>}
    />
  );
}

export function EgyptePharaonExos() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "265mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Le pharaon et les pyramides</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
        </div>
        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>1. Complète avec les mots : <i>roi · pyramide · tombeau · pierre</i>.</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 2, marginTop: "1mm" }}>
          Le pharaon est le ...................... de l'Égypte.<br />
          La ...................... est un immense ...................... .<br />
          Elle est construite avec des blocs de ...................... .
        </div>
        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>2. Vrai ou faux ? (entoure)</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 1.9, marginTop: "1mm" }}>
          a) Le pharaon est un roi. &nbsp; <b>VRAI / FAUX</b><br />
          b) La pyramide est une maison de paysan. &nbsp; <b>VRAI / FAUX</b><br />
          c) On faisait une momie du pharaon. &nbsp; <b>VRAI / FAUX</b>
        </div>
        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>3. Relie.</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "18px", marginTop: "2mm", padding: "0 6mm" }}>
          <div style={{ lineHeight: 2.4 }}><div>le pharaon •</div><div>la pyramide •</div><div>la momie •</div></div>
          <div style={{ textAlign: "right", lineHeight: 2.4 }}><div>• le tombeau du roi</div><div>• le corps conservé</div><div>• le roi d'Égypte</div></div>
        </div>
        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>4. Dessine une pyramide avec le soleil et le désert.</div>
        <div style={{ border: "1.5px dashed #94a3b8", borderRadius: "3mm", height: "45mm", marginTop: "1.5mm" }} />
      </div>
    </div>
  );
}
