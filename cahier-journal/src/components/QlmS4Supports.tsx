/**
 * Questionner le monde — séances du mardi 29 (après-midi).
 * - Histoire (séance 4) : La Préhistoire (après « lire une frise »).
 * - Sciences (séance 4) : Le vivant et le non-vivant.
 * Modèle validé : diaporama à projeter (cartes à révéler + vraies photos libres
 * de droits Wikimedia) + leçon imagée à coller. Jamais de dessins générés.
 */
import { useRef, useState } from "react";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";

const HIST = "#92400e"; // préhistoire (brun)

function RevealCard({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="w-full rounded-2xl border-2 bg-white p-3 text-center transition hover:scale-[1.03]" style={{ borderColor: accent }} title="Cliquer pour révéler">
      <div className="text-lg font-bold" style={{ color: "#334155" }}>{q}</div>
      <div className={`mt-1 text-xl font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: accent }}>{on ? a : "?"}</div>
    </button>
  );
}

function ImgReveal({ title, alt, mot, rep, accent }: { title: string; alt: string; mot: string; rep: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-2 transition hover:scale-[1.03]" style={{ borderColor: accent }} title="Cliquer pour révéler">
      <WikiImage title={title} alt={alt} accent={accent} height="clamp(100px, 18vh, 160px)" />
      <span className="text-base font-bold" style={{ color: "#334155" }}>{mot}</span>
      <span className={`text-lg font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: accent }}>{on ? rep : "?"}</span>
    </button>
  );
}

/* ===================== HISTOIRE — La Préhistoire ===================== */
const H_ETAPES = ["Il y a très longtemps", "Comment vivaient-ils ?", "Les traces laissées", "Les dates clés", "Je retiens"];
/** Repères simples de la Préhistoire (cycle 2) : on retient surtout l'ordre et le début/la fin. */
const PREHIST_DATES = [
  { quand: "il y a ~3 millions d'années", quoi: "les premiers hommes et leurs premiers outils en pierre" },
  { quand: "il y a ~400 000 ans", quoi: "la maîtrise du feu 🔥" },
  { quand: "il y a ~30 000 ans", quoi: "les peintures dans les grottes 🎨" },
  { quand: "il y a ~10 000 ans", quoi: "l'agriculture et les premiers villages 🌾" },
  { quand: "il y a ~5 000 ans", quoi: "l'invention de l'écriture ✍️ → fin de la Préhistoire" },
];
export function PrehistoireDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = H_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: HIST }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Histoire · La Préhistoire</span>
        <div className="ml-2 flex gap-1.5">{H_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>La Préhistoire</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">C'est le tout début de l'histoire des hommes, il y a <b>très, très longtemps</b> — <b>avant l'écriture</b>.</p>
            <div className="mx-auto mt-4 max-w-md"><WikiImage title="Mammouth" alt="un mammouth" accent={HIST} height="clamp(150px,28vh,260px)" /></div>
            <p className="mt-2 text-lg text-stone-500">À cette époque vivaient des animaux disparus, comme le mammouth.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>Comment vivaient-ils ?</h2>
            <div className="grid gap-3 sm:grid-cols-4">
              <ImgReveal title="Lascaux" alt="grotte" mot="Où dorment-ils ?" rep="dans des grottes" accent={HIST} />
              <ImgReveal title="Feu" alt="le feu" mot="Leur grande invention ?" rep="maîtriser le feu" accent={HIST} />
              <ImgReveal title="Silex" alt="silex" mot="Leurs outils ?" rep="en pierre (silex)" accent={HIST} />
              <ImgReveal title="Chasse" alt="la chasse" mot="Pour manger ?" rep="chasse, pêche, cueillette" accent={HIST} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">D'abord <b>nomades</b> (ils se déplaçaient), puis ils ont appris à cultiver et à s'<b>installer</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Les traces qu'ils ont laissées</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border-4 p-2" style={{ borderColor: HIST }}>
                <WikiImage title="Grotte de Lascaux" alt="peintures rupestres" accent={HIST} height="clamp(120px,22vh,200px)" />
                <div className="mt-1 text-lg font-bold" style={{ color: HIST }}>Les peintures des grottes</div>
              </div>
              <div className="rounded-2xl border-4 p-2" style={{ borderColor: HIST }}>
                <WikiImage title="Dolmen" alt="un dolmen" accent={HIST} height="clamp(120px,22vh,200px)" />
                <div className="mt-1 text-lg font-bold" style={{ color: HIST }}>Les grandes pierres (dolmens)</div>
              </div>
            </div>
            <p className="mt-3 text-lg text-stone-600">On connaît la Préhistoire grâce aux <b>objets</b> et aux <b>dessins</b> retrouvés (l'archéologie).</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>Les dates clés</h2>
            <div className="flex flex-col gap-2">
              {PREHIST_DATES.map((d, k) => (
                <div key={k} className="flex items-center gap-3 rounded-2xl border-2 bg-white p-2" style={{ borderColor: HIST }}>
                  <span className="shrink-0 rounded-full px-3 py-1 text-sm font-extrabold text-white" style={{ background: HIST }}>{d.quand}</span>
                  <span className="text-lg font-semibold text-stone-700">{d.quoi}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-lg text-stone-600">Sur une frise, tout ça se lit <b>de gauche</b> (le plus ancien) <b>vers la droite</b> (vers nous).</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🦣🔥🎨</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">La <b>Préhistoire</b> = la période la plus ancienne, <b>avant l'écriture</b>.</p>
            <p className="text-2xl font-semibold text-stone-600">Les hommes chassaient, ont maîtrisé le <b>feu</b> et ont peint dans les <b>grottes</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: HIST, color: HIST }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{H_ETAPES.length} · {H_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: HIST }}>▶</button>
      </div>
    </div>
  );
}

function Bulle({ mot, color }: { mot: string; color: string }) {
  return (
    <span style={{ display: "inline-block", padding: "1.5mm 4mm", margin: "1.5mm", borderRadius: "999px", border: `2.5px solid ${color}`, background: "#fff", fontSize: "20px", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive", color: "#111" }}>{mot}</span>
  );
}

export function PrehistoireLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "42px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive" }}>La Préhistoire</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto 5mm", maxWidth: "158mm", lineHeight: 1.4 }}>
          La Préhistoire, c'est le <b>tout début</b> de l'histoire des hommes, il y a très longtemps, <b>avant l'écriture</b>.
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Comment vivaient-ils ?</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ width: "40mm" }}><WikiImage title="Feu" alt="le feu" accent={HIST} height="26mm" /></div>
              <div style={{ flex: 1, minWidth: "80mm", textAlign: "center" }}>{["ils chassaient", "ils ont maîtrisé le feu", "ils vivaient dans des grottes", "des outils en pierre (silex)"].map((m) => <Bulle key={m} mot={m} color={HIST} />)}</div>
            </div>
          </div>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Les traces qu'ils ont laissées</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}><div style={{ width: "42mm", margin: "0 auto" }}><WikiImage title="Grotte de Lascaux" alt="peintures rupestres" accent={HIST} height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700 }}>les peintures des grottes</div></div>
              <div style={{ textAlign: "center" }}><div style={{ width: "42mm", margin: "0 auto" }}><WikiImage title="Dolmen" alt="un dolmen" accent={HIST} height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700 }}>les grandes pierres (dolmens)</div></div>
            </div>
          </div>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center", marginBottom: "2mm" }}>Les dates clés</div>
            {PREHIST_DATES.map((d, k) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "1.5mm" }}>
                <span style={{ flexShrink: 0, minWidth: "50mm", fontSize: "13px", fontWeight: 800, color: "#fff", background: HIST, borderRadius: "999px", padding: "0.5mm 3mm", textAlign: "center" }}>{d.quand}</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>{d.quoi}</span>
              </div>
            ))}
            <div style={{ fontSize: "13px", fontStyle: "italic", color: "#555", marginTop: "1mm" }}>Sur une frise, on lit de gauche (le plus ancien) vers la droite (vers nous).</div>
          </div>
          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: la Préhistoire s'arrête quand on invente l'<b>écriture</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===================== SCIENCES — Mesurer : masse, volume, température ===================== */
const MES = "#0e7490"; // sciences (teal)
const V_ETAPES = ["Mesurer, c'est quoi ?", "Masse, volume, température", "Quel instrument ?", "Je retiens"];
export function MesureGrandeursDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = V_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MES }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Sciences · Mesurer : masse, volume, température</span>
        <div className="ml-2 flex gap-1.5">{V_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>Mesurer, c'est quoi ?</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Mesurer, c'est trouver <b>combien</b> il y a, avec un <b>instrument</b> et une <b>unité</b>.</p>
            <div className="mx-auto mt-4 max-w-md"><WikiImage title="Balance Roberval" alt="une balance" accent={MES} height="clamp(150px,26vh,240px)" /></div>
            <p className="mt-2 text-lg text-stone-500">Aujourd'hui : la masse, le volume et la température.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: MES }}>Trois grandeurs à mesurer</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border-4 p-2 text-center" style={{ borderColor: MES }}>
                <WikiImage title="Balance Roberval" alt="balance" accent={MES} height="clamp(110px,18vh,160px)" />
                <div className="mt-1 text-xl font-extrabold" style={{ color: MES }}>la masse</div>
                <div className="text-base font-bold text-stone-600">balance · en g et kg</div>
              </div>
              <div className="rounded-2xl border-4 p-2 text-center" style={{ borderColor: MES }}>
                <WikiImage title="Éprouvette graduée" alt="éprouvette graduée" accent={MES} height="clamp(110px,18vh,160px)" />
                <div className="mt-1 text-xl font-extrabold" style={{ color: MES }}>le volume</div>
                <div className="text-base font-bold text-stone-600">verre doseur · en L et mL</div>
              </div>
              <div className="rounded-2xl border-4 p-2 text-center" style={{ borderColor: MES }}>
                <WikiImage title="Thermomètre" alt="thermomètre" accent={MES} height="clamp(110px,18vh,160px)" />
                <div className="mt-1 text-xl font-extrabold" style={{ color: MES }}>la température</div>
                <div className="text-base font-bold text-stone-600">thermomètre · en °C</div>
              </div>
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: MES }}>Quel instrument ?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <RevealCard q="Pour peser des pommes 🍎" a="la balance (en g / kg)" accent={MES} />
              <RevealCard q="Pour mesurer de l'eau 💧" a="le verre doseur (en L / mL)" accent={MES} />
              <RevealCard q="Pour prendre la fièvre 🤒" a="le thermomètre (en °C)" accent={MES} />
              <RevealCard q="Quelle unité pour ma masse ?" a="les kilogrammes (kg)" accent={MES} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">Chaque grandeur a son <b>instrument</b> et son <b>unité</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">⚖️🥛🌡️</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">La <b>masse</b> → balance (g, kg). Le <b>volume</b> → verre doseur (L, mL).</p>
            <p className="text-2xl font-semibold text-stone-600">La <b>température</b> → thermomètre (°C).</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MES, color: MES }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{V_ETAPES.length} · {V_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MES }}>▶</button>
      </div>
    </div>
  );
}

export function MesureGrandeursLecon() {
  const Ligne = ({ title, alt, grandeur, instrument, unite }: { title: string; alt: string; grandeur: string; instrument: string; unite: string }) => (
    <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "3mm 5mm", display: "flex", gap: "4mm", alignItems: "center" }}>
      <div style={{ width: "36mm", flexShrink: 0 }}><WikiImage title={title} alt={alt} accent={MES} height="26mm" /></div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "26px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>{grandeur}</div>
        <div style={{ fontSize: "16px", color: "#333" }}>je mesure avec <b>{instrument}</b></div>
        <div style={{ fontSize: "16px", color: "#333" }}>unité : <b>{unite}</b></div>
      </div>
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "38px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>Mesurer : masse, volume, température</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto 5mm", maxWidth: "158mm", lineHeight: 1.4 }}>
          Pour mesurer, j'utilise le bon <b>instrument</b> et la bonne <b>unité</b>.
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          <Ligne title="Balance Roberval" alt="une balance" grandeur="La masse" instrument="une balance" unite="grammes (g), kilogrammes (kg)" />
          <Ligne title="Éprouvette graduée" alt="un verre doseur" grandeur="Le volume" instrument="un verre doseur / une éprouvette graduée" unite="litres (L), millilitres (mL)" />
          <Ligne title="Thermomètre" alt="un thermomètre" grandeur="La température" instrument="un thermomètre" unite="degrés Celsius (°C)" />
          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: à chaque grandeur son instrument et son unité !
          </p>
        </div>
      </div>
    </div>
  );
}
