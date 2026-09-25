/**
 * Français — Le genre et le nombre du nom (lundi, séquence « Le nom »).
 * Modèle validé : un diaporama à projeter (cartes à révéler + vraies photos
 * libres de droits Wikimedia) + une leçon imagée à coller.
 * - Genre  : masculin (un / le) · féminin (une / la).
 * - Nombre : singulier (un seul) · pluriel (plusieurs, souvent « -s »).
 */
import { useRef, useState } from "react";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";

const MASC = "#2563eb"; // masculin (bleu)
const FEM = "#db2777"; // féminin (rose)
const NB = "#16a34a"; // nombre (vert)

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

/* ============================ DIAPORAMA ============================ */
const ETAPES = ["Le genre", "Masculin ou féminin ?", "Le nombre", "Un ou plusieurs ?", "Je retiens"];

export function GenreNombreDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MASC }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Le genre et le nombre du nom</span>
        <div className="ml-2 flex gap-1.5">{ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: "#334155" }}>Le <span style={{ color: MASC }}>genre</span> du nom</h1>
            <p className="mt-2 text-xl font-semibold text-stone-600">Devant un nom, je mets un petit mot : <b style={{ color: MASC }}>un / le</b> ou <b style={{ color: FEM }}>une / la</b>.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-4 p-3" style={{ borderColor: MASC }}>
                <div className="mb-2 text-2xl font-extrabold" style={{ color: MASC }}>masculin : un · le</div>
                <div className="mx-auto max-w-[220px]"><WikiImage title="Chat" alt="un chat" accent={MASC} height="clamp(110px,20vh,180px)" /></div>
                <div className="mt-1 text-xl font-bold" style={{ color: MASC }}>un chat · le soleil</div>
              </div>
              <div className="rounded-2xl border-4 p-3" style={{ borderColor: FEM }}>
                <div className="mb-2 text-2xl font-extrabold" style={{ color: FEM }}>féminin : une · la</div>
                <div className="mx-auto max-w-[220px]"><WikiImage title="Marguerite commune" alt="une fleur" accent={FEM} height="clamp(110px,20vh,180px)" /></div>
                <div className="mt-1 text-xl font-bold" style={{ color: FEM }}>une fleur · la lune</div>
              </div>
            </div>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: MASC }}>Masculin ou féminin ?</h2>
            <div className="grid gap-3 sm:grid-cols-4">
              <ImgReveal title="Chat" alt="chat" mot="… chat" rep="un (masculin)" accent={MASC} />
              <ImgReveal title="Pomme" alt="pomme" mot="… pomme" rep="une (féminin)" accent={FEM} />
              <ImgReveal title="Ballon de football" alt="ballon" mot="… ballon" rep="un (masculin)" accent={MASC} />
              <ImgReveal title="Maison" alt="maison" mot="… maison" rep="une (féminin)" accent={FEM} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">Astuce : je dis le nom avec <b>un</b> ou <b>une</b> et j'écoute ce qui sonne bien.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: NB }}>Le <span style={{ color: NB }}>nombre</span> du nom</h1>
            <p className="mt-2 text-xl font-semibold text-stone-600"><b>Un seul</b> = singulier. <b>Plusieurs</b> = pluriel (souvent avec un <b style={{ color: NB }}>-s</b>).</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-4 p-3" style={{ borderColor: "#64748b" }}>
                <div className="mb-2 text-2xl font-extrabold text-stone-600">singulier : un seul</div>
                <div className="mx-auto max-w-[220px]"><WikiImage title="Marguerite commune" alt="une fleur" accent="#64748b" height="clamp(110px,20vh,180px)" /></div>
                <div className="mt-1 text-2xl font-bold text-stone-700">une fleur</div>
              </div>
              <div className="rounded-2xl border-4 p-3" style={{ borderColor: NB }}>
                <div className="mb-2 text-2xl font-extrabold" style={{ color: NB }}>pluriel : plusieurs</div>
                <div className="mx-auto max-w-[220px]"><WikiImage title="Bouquet" alt="des fleurs" accent={NB} height="clamp(110px,20vh,180px)" /></div>
                <div className="mt-1 text-2xl font-bold" style={{ color: NB }}>des fleur<span className="underline">s</span></div>
              </div>
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: NB }}>Un ou plusieurs ?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <RevealCard q="un chat → ✏️ plusieurs" a="des chats" accent={NB} />
              <RevealCard q="une pomme → ✏️ plusieurs" a="des pommes" accent={NB} />
              <RevealCard q="le livre → ✏️ plusieurs" a="les livres" accent={NB} />
              <RevealCard q="Combien dans « des ballons » ?" a="plusieurs (pluriel)" accent={NB} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">Quand il y en a <b>plusieurs</b>, j'ajoute très souvent un <b style={{ color: NB }}>-s</b> au nom.</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-3 text-7xl">🎉</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MASC }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">Le nom a un <b style={{ color: MASC }}>genre</b> (masculin / féminin)</p>
            <p className="text-2xl font-semibold text-stone-600">et un <b style={{ color: NB }}>nombre</b> (singulier / pluriel).</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MASC, color: MASC }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETAPES.length} · {ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MASC }}>▶</button>
      </div>
    </div>
  );
}

/* ============================== LEÇON ============================== */
function Bulle({ mot, color }: { mot: string; color: string }) {
  return (
    <span style={{ display: "inline-block", padding: "1.5mm 4mm", margin: "1.5mm", borderRadius: "999px", border: `2.5px solid ${color}`, background: "#fff", fontSize: "22px", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive", color: "#111" }}>{mot}</span>
  );
}

/** Leçon à coller « Le genre et le nombre du nom » — modèle enfantin validé,
 *  illustrée de vraies photos libres de droits (Wikimedia via WikiImage). */
export function GenreNombreLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "42px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: MASC, fontFamily: "'Caveat','Comic Neue',cursive" }}>Le genre et le nombre du nom</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto 5mm", maxWidth: "155mm", lineHeight: 1.4 }}>
          Chaque nom a un <b style={{ color: MASC }}>genre</b> (masculin ou féminin) et un <b style={{ color: NB }}>nombre</b> (singulier ou pluriel).
        </p>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          {/* Le genre */}
          <div style={{ border: `3px solid ${MASC}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: MASC, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>1. Le genre</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "38mm", margin: "0 auto" }}><WikiImage title="Chat" alt="un chat" accent={MASC} height="26mm" /></div>
                <div style={{ fontSize: "17px", fontWeight: 700, color: MASC }}>masculin → <b>un</b> · <b>le</b></div>
                <div>{["un chat", "le soleil"].map((m) => <Bulle key={m} mot={m} color={MASC} />)}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "38mm", margin: "0 auto" }}><WikiImage title="Marguerite commune" alt="une fleur" accent={FEM} height="26mm" /></div>
                <div style={{ fontSize: "17px", fontWeight: 700, color: FEM }}>féminin → <b>une</b> · <b>la</b></div>
                <div>{["une fleur", "la lune"].map((m) => <Bulle key={m} mot={m} color={FEM} />)}</div>
              </div>
            </div>
          </div>

          {/* Le nombre */}
          <div style={{ border: `3px solid ${NB}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: NB, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>2. Le nombre</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "38mm", margin: "0 auto" }}><WikiImage title="Marguerite commune" alt="une fleur" accent="#64748b" height="26mm" /></div>
                <div style={{ fontSize: "17px", fontWeight: 700, color: "#475569" }}>singulier → <b>un seul</b></div>
                <div>{["une fleur", "un chat"].map((m) => <Bulle key={m} mot={m} color="#64748b" />)}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "38mm", margin: "0 auto" }}><WikiImage title="Bouquet" alt="des fleurs" accent={NB} height="26mm" /></div>
                <div style={{ fontSize: "17px", fontWeight: 700, color: NB }}>pluriel → <b>plusieurs</b> (+ <b>s</b>)</div>
                <div>{["des fleurs", "des chats"].map((m) => <Bulle key={m} mot={m} color={NB} />)}</div>
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: si le nom veut dire <b>plusieurs</b>, je pense à ajouter un <b style={{ color: NB }}>-s</b>&nbsp;!
          </p>
        </div>
      </div>
    </div>
  );
}
