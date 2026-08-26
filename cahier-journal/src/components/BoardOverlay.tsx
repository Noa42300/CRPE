/**
 * Overlay « Affichage tableau »
 * -----------------------------
 * Affiche un contenu en grand, en écriture manuscrite, pour projeter aux
 * élèves. Choix de la police, de la taille, plein écran.
 */
import { useRef, useState, type ReactNode } from "react";
import {
  ECRITURE_FONTS,
  fontCss,
  requestFullscreen,
  exitFullscreen,
  type EcritureFontId,
} from "../lib/board";

export function BoardOverlay({
  onClose,
  children,
  seyes = false,
}: {
  onClose: () => void;
  children: ReactNode;
  seyes?: boolean;
}) {
  const [fontId, setFontId] = useState<EcritureFontId>("caveat");
  const [size, setSize] = useState(52);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="board-overlay bg-paper-light dark:bg-paper-dark"
    >
      {/* Barre d'outils */}
      <div className="sticky top-0 z-10 flex flex-wrap items-center gap-2 border-b border-stone-200 bg-paper-light/95 px-4 py-2 backdrop-blur dark:border-stone-700 dark:bg-paper-dark/95">
        <select
          value={fontId}
          onChange={(e) => setFontId(e.target.value as EcritureFontId)}
          className="input w-auto py-1"
        >
          {ECRITURE_FONTS.map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-1">
          <button onClick={() => setSize((s) => Math.max(24, s - 6))} className="btn-outline px-2 py-1" title="Plus petit">
            A−
          </button>
          <span className="w-10 text-center text-xs text-stone-500">{size}</span>
          <button onClick={() => setSize((s) => Math.min(140, s + 6))} className="btn-outline px-2 py-1" title="Plus grand">
            A+
          </button>
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="btn-outline py-1 text-xs">
          ⛶ Plein écran
        </button>
        <button
          onClick={() => {
            exitFullscreen();
            onClose();
          }}
          className="btn-primary ml-auto py-1 text-xs"
        >
          ✕ Fermer
        </button>
      </div>

      {/* Contenu projeté */}
      <div
        className={`px-8 py-8 leading-snug text-stone-900 dark:text-stone-50 ${seyes ? "" : "font-ecole"}`}
        style={{ fontFamily: fontCss(fontId), fontSize: size }}
      >
        {children}
      </div>
    </div>
  );
}
