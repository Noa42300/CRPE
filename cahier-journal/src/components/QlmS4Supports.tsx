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
const VIV = "#15803d"; // vivant (vert)

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
const H_ETAPES = ["Il y a très longtemps", "Comment vivaient-ils ?", "Les traces laissées", "Je retiens"];
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
          <div className="text-center">
            <div className="mb-3 text-6xl">🦣🔥🎨</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">La <b>Préhistoire</b> = avant l'écriture.</p>
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
          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: la Préhistoire s'arrête quand on invente l'<b>écriture</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===================== SCIENCES — Le vivant et le non-vivant ===================== */
const V_ETAPES = ["Vivant ou non ?", "Ce qui est vivant", "À toi de trier", "Je retiens"];
export function VivantDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = V_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: VIV }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Sciences · Le vivant et le non-vivant</span>
        <div className="ml-2 flex gap-1.5">{V_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: VIV }}>Vivant ou non-vivant ?</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Autour de nous, il y a des choses <b>vivantes</b> et des choses <b>non-vivantes</b>.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="mx-auto max-w-[240px]"><WikiImage title="Chat" alt="un chat" accent={VIV} height="clamp(120px,22vh,200px)" /><div className="mt-1 text-xl font-bold" style={{ color: VIV }}>vivant</div></div>
              <div className="mx-auto max-w-[240px]"><WikiImage title="Ballon de football" alt="un ballon" accent="#64748b" height="clamp(120px,22vh,200px)" /><div className="mt-1 text-xl font-bold text-stone-500">non-vivant</div></div>
            </div>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: VIV }}>Ce qui est vivant…</h2>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Un être vivant : il <b>naît</b>, il <b>grandit</b>, il se <b>nourrit</b>, il se <b>reproduit</b>, puis il <b>meurt</b>.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="mx-auto max-w-[240px]"><WikiImage title="Arbre" alt="un arbre" accent={VIV} height="clamp(120px,22vh,200px)" /><div className="mt-1 text-lg font-bold" style={{ color: VIV }}>les plantes sont vivantes</div></div>
              <div className="mx-auto max-w-[240px]"><WikiImage title="Lapin" alt="un lapin" accent={VIV} height="clamp(120px,22vh,200px)" /><div className="mt-1 text-lg font-bold" style={{ color: VIV }}>les animaux sont vivants</div></div>
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: VIV }}>À toi de trier !</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <RevealCard q="Un chat 🐱" a="VIVANT" accent={VIV} />
              <RevealCard q="Un caillou 🪨" a="non-vivant" accent="#64748b" />
              <RevealCard q="Un arbre 🌳" a="VIVANT" accent={VIV} />
              <RevealCard q="Une voiture 🚗" a="non-vivant" accent="#64748b" />
              <RevealCard q="Un champignon 🍄" a="VIVANT" accent={VIV} />
              <RevealCard q="Un nuage ☁️" a="non-vivant" accent="#64748b" />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">Attention : ce qui <b>bouge</b> n'est pas toujours vivant (une voiture, l'eau) !</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🌱🐾🪨</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: VIV }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">Un <b>être vivant</b> naît, grandit, se nourrit, se reproduit et meurt.</p>
            <p className="text-2xl font-semibold text-stone-600">Les <b>plantes</b> et les <b>animaux</b> sont vivants ; un objet ou une roche, non.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: VIV, color: VIV }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{V_ETAPES.length} · {V_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: VIV }}>▶</button>
      </div>
    </div>
  );
}

export function VivantLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "40px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: VIV, fontFamily: "'Caveat','Comic Neue',cursive" }}>Le vivant et le non-vivant</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto 5mm", maxWidth: "158mm", lineHeight: 1.4 }}>
          Un <b>être vivant</b> : il <b>naît</b>, il <b>grandit</b>, il se <b>nourrit</b>, il se <b>reproduit</b>, puis il <b>meurt</b>.
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          <div style={{ border: `3px solid ${VIV}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: VIV, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>C'est vivant</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}><div style={{ width: "40mm", margin: "0 auto" }}><WikiImage title="Arbre" alt="un arbre" accent={VIV} height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700, color: VIV }}>les plantes</div></div>
              <div style={{ textAlign: "center" }}><div style={{ width: "40mm", margin: "0 auto" }}><WikiImage title="Lapin" alt="un lapin" accent={VIV} height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700, color: VIV }}>les animaux</div></div>
            </div>
          </div>
          <div style={{ border: "3px solid #64748b", borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: "#475569", fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Ce n'est pas vivant</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}><div style={{ width: "40mm", margin: "0 auto" }}><WikiImage title="Roche" alt="une roche" accent="#64748b" height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700, color: "#475569" }}>les roches, les cailloux</div></div>
              <div style={{ textAlign: "center" }}><div style={{ width: "40mm", margin: "0 auto" }}><WikiImage title="Ballon de football" alt="un ballon" accent="#64748b" height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700, color: "#475569" }}>les objets</div></div>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: ce qui <b>bouge</b> n'est pas toujours vivant (une voiture roule, mais elle ne naît pas et ne grandit pas).
          </p>
        </div>
      </div>
    </div>
  );
}
