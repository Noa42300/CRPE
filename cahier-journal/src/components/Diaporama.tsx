/**
 * Diaporama « Autour du monde » (4 slides, pour TBI / vidéoprojecteur)
 * -------------------------------------------------------------------
 * 1) Énigme  2) Géographie (carte + habitants)  3) Vie quotidienne
 * 4) Patrimoine (monument). Navigation clavier ← →, plein écran, gros texte.
 */
import { useEffect, useRef, useState } from "react";
import type { Pays } from "../lib/projets";
import { masqueNom } from "../lib/projets";
import { requestFullscreen, exitFullscreen } from "../lib/board";
import { WorldMiniMap } from "./WorldMiniMap";

const TITRES = ["Énigme", "Géographie", "Vie quotidienne", "Patrimoine"];

export function Diaporama({ pays, onClose }: { pays: Pays; onClose: () => void }) {
  const [i, setI] = useState(0);
  const [reveal, setReveal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const next = () => setI((n) => Math.min(3, n + 1));
  const prev = () => setI((n) => Math.max(0, n - 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") { exitFullscreen(); onClose(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div ref={ref} className="board-overlay flex flex-col bg-paper-light dark:bg-paper-dark">
      {/* Barre haute */}
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-stone-200 bg-paper-light/95 px-4 py-2 dark:border-stone-700 dark:bg-paper-dark/95">
        <span className="text-2xl">{pays.drapeau}</span>
        <span className="text-sm font-bold uppercase tracking-wide text-ink-700 dark:text-ink-300">
          Autour du monde
        </span>
        <div className="ml-2 flex gap-1.5">
          {TITRES.map((t, k) => (
            <button
              key={t}
              onClick={() => setI(k)}
              className={`h-2.5 w-2.5 rounded-full ${k === i ? "bg-ink-600" : "bg-stone-300 dark:bg-stone-600"}`}
              title={t}
            />
          ))}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="btn-outline py-1 text-xs">⛶ Plein écran</button>
        <button onClick={() => { exitFullscreen(); onClose(); }} className="btn-primary ml-auto py-1 text-xs">✕ Fermer</button>
      </div>

      {/* Contenu */}
      <div className="grid flex-1 place-items-center overflow-auto px-6 py-6">
        <div className="w-full max-w-4xl text-center">
          <div className="mb-4 inline-block rounded-full bg-ink-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink-700 dark:bg-ink-500/20 dark:text-ink-200">
            {i + 1}/4 · {TITRES[i]}
          </div>

          {i === 0 && (
            <div>
              <p className="mb-2 text-xl text-stone-500 dark:text-stone-400">Quel est ce pays&nbsp;?</p>
              <div className="mb-6 font-mono text-5xl font-bold tracking-[0.15em] text-stone-800 dark:text-stone-100 sm:text-6xl">
                {reveal ? (
                  <span>{pays.drapeau} {pays.nom}</span>
                ) : (
                  masqueNom(pays.nom)
                )}
              </div>
              <ul className="mx-auto mb-6 max-w-xl space-y-2 text-left text-xl text-stone-700 dark:text-stone-200">
                {pays.indices.map((ind, k) => (
                  <li key={k} className="flex gap-2"><span>💡</span><span>{ind}</span></li>
                ))}
              </ul>
              {!reveal ? (
                <button onClick={() => setReveal(true)} className="btn-primary text-base">Révéler le pays</button>
              ) : (
                <p className="text-lg text-emerald-600 dark:text-emerald-400">Bravo ! C'est {pays.nom}.</p>
              )}
            </div>
          )}

          {i === 1 && (
            <div>
              <h2 className="mb-4 text-3xl font-bold text-stone-800 dark:text-stone-100">
                {pays.drapeau} {pays.nom}
              </h2>
              <WorldMiniMap lat={pays.lat} lon={pays.lon} drapeau={pays.drapeau} nom={pays.nom} />
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-lg text-stone-700 dark:text-stone-200">
                <span>🏙️ Capitale : <strong>{pays.capitale}</strong></span>
                <span>👥 <strong>{pays.population}</strong></span>
              </div>
              <p className="mt-3 text-base text-stone-500 dark:text-stone-400">{pays.geo}</p>
            </div>
          )}

          {i === 2 && (
            <div>
              <div className="mb-4 text-6xl">🌍</div>
              <h2 className="mb-4 text-3xl font-bold text-stone-800 dark:text-stone-100">La vie là-bas</h2>
              <p className="mx-auto max-w-2xl text-2xl leading-relaxed text-stone-700 dark:text-stone-200">
                {pays.culture}
              </p>
              <p className="mt-6 text-xl text-stone-600 dark:text-stone-300">
                🍽️ On y goûte : <strong>{pays.specialite}</strong>.
              </p>
            </div>
          )}

          {i === 3 && (
            <div>
              <div className="mb-4 text-6xl">🏛️</div>
              <h2 className="mb-2 text-3xl font-bold text-stone-800 dark:text-stone-100">{pays.monument}</h2>
              <p className="mb-4 text-sm uppercase tracking-widest text-stone-400">Le monument à connaître</p>
              <p className="mx-auto max-w-2xl text-2xl leading-relaxed text-stone-700 dark:text-stone-200">
                {pays.patrimoine}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation bas */}
      <div className="flex shrink-0 items-center justify-between border-t border-stone-200 px-6 py-3 dark:border-stone-700">
        <button onClick={prev} disabled={i === 0} className="btn-outline disabled:opacity-30">◀ Précédent</button>
        <span className="text-sm text-stone-500">{TITRES[i]}</span>
        <button onClick={next} disabled={i === 3} className="btn-primary disabled:opacity-30">Suivant ▶</button>
      </div>
    </div>
  );
}
