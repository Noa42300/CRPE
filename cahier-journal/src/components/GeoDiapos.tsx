/**
 * Diaporamas de géométrie (mardi, à projeter) — Espace & Géométrie CE1/CE2.
 * - SeRepererDiapo (CE1) : se repérer dans l'espace (mots de l'espace, le plan
 *   = vue de dessus).
 * - SymetrieDiapo (CE2) : la symétrie axiale (axe, plier/déplier, plusieurs axes).
 * Cartes à révéler + vraies photos libres de droits (Wikimedia via WikiImage).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { WikiImage } from "./WikiImage";

const ESP = "#2563eb"; // se repérer (bleu)
const SYM = "#7c3aed"; // symétrie (violet)

function RevealCard({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="w-full rounded-2xl border-2 bg-white p-3 text-center transition hover:scale-[1.03]" style={{ borderColor: accent }} title="Cliquer pour révéler">
      <div className="text-lg font-bold" style={{ color: accent }}>{q}</div>
      <div className={`mt-1 text-lg font-semibold ${on ? "" : "opacity-0"}`} style={{ color: "#334155" }}>{on ? a : "?"}</div>
    </button>
  );
}

/* ============ CE1 — Se repérer dans l'espace ============ */
const SR_ETAPES = ["Les mots de l'espace", "Où est l'objet ?", "Le plan", "Bravo"];
export function SeRepererDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = SR_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: ESP }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">CE1 · Se repérer dans l'espace</span>
        <div className="ml-2 flex gap-1.5">{SR_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">⬅️ ⬆️ ➡️ ⬇️</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: ESP }}>Les mots de l'espace</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">à gauche · à droite · devant · derrière · au-dessus · en dessous · entre · à côté de</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: ESP }}>Où est l'objet ?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <RevealCard q="Le livre 📕 est … la table." a="SUR la table" accent={ESP} />
              <RevealCard q="La balle ⚽ est … la table." a="SOUS la table" accent={ESP} />
              <RevealCard q="Le chat 🐱 est … la boîte." a="DANS / à côté de la boîte" accent={ESP} />
              <RevealCard q="La flèche pointe vers…" a="la gauche ou la droite ?" accent={ESP} />
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: ESP }}>Le plan = la vue de dessus</h2>
            <div className="mx-auto mt-4 max-w-md"><WikiImage title="Rose des vents" alt="rose des vents" accent={ESP} height="clamp(140px,26vh,240px)" /></div>
            <p className="mt-3 text-xl text-stone-600">Sur un plan, je regarde d'en haut. Je repère avec gauche/droite et devant/derrière.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <div className="mb-3 text-7xl">🎉</div>
            <h1 className="text-5xl font-extrabold" style={{ color: ESP }}>Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Je sais dire où se trouve un objet et lire un plan.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: ESP, color: ESP }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{SR_ETAPES.length} · {SR_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: ESP }}>▶</button>
      </div>
    </div>
  );
}

/* ============ CE2 — La symétrie ============ */
const SY_ETAPES = ["C'est quoi ?", "Je plie", "Un ou plusieurs axes", "Bravo"];
export function SymetrieDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = SY_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: SYM }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">CE2 · La symétrie</span>
        <div className="ml-2 flex gap-1.5">{SY_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: SYM }}>La symétrie</h1>
            <div className="mx-auto mt-4 max-w-md"><WikiImage title="Papillon" alt="un papillon symétrique" accent={SYM} height="clamp(150px,28vh,260px)" /></div>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Les deux côtés sont pareils, comme dans un miroir.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: SYM }}>Je plie sur l'axe</h2>
            <p className="mt-2 text-xl text-stone-600">Si les deux parties se superposent exactement, le pli est un <b>axe de symétrie</b>.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <RevealCard q="Un cœur plié en deux ❤️" a="OUI, axe de symétrie" accent={SYM} />
              <RevealCard q="La lettre A" a="OUI (axe vertical)" accent={SYM} />
              <RevealCard q="La lettre F" a="NON, pas d'axe" accent={SYM} />
              <RevealCard q="Un rond ⚪" a="OUI, plusieurs axes !" accent={SYM} />
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: SYM }}>Un ou plusieurs axes</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <RevealCard q="Un carré ⬛" a="4 axes de symétrie" accent={SYM} />
              <RevealCard q="Un rectangle ▬" a="2 axes" accent={SYM} />
              <RevealCard q="Un triangle isocèle 🔺" a="1 axe" accent={SYM} />
            </div>
            <p className="mt-4 text-xl text-stone-600">Une même figure peut avoir <b>plusieurs</b> axes de symétrie.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <div className="mb-3 text-7xl">🎉</div>
            <h1 className="text-5xl font-extrabold" style={{ color: SYM }}>Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Je reconnais un axe de symétrie et je sais qu'il peut y en avoir plusieurs.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: SYM, color: SYM }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{SY_ETAPES.length} · {SY_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: SYM }}>▶</button>
      </div>
    </div>
  );
}
