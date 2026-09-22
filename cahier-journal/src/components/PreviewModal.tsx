/**
 * Fenêtre d'aperçu (loupe)
 * ------------------------
 * Superposition plein écran pour PRÉVISUALISER un document avant de l'imprimer
 * ou de le télécharger — sans déclencher un téléchargement direct. Sert aussi
 * bien aux documents générés (fiche de prép, supports A4, rendus React) qu'aux
 * fichiers joints (PDF affiché dans un cadre, image affichée telle quelle).
 * Montée dans <body> via un portail pour rester au-dessus de toute l'appli.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Printer } from "./ui";
import { requestFullscreen } from "../lib/board";

export function PreviewModal({
  title,
  onClose,
  onPrint,
  onDownload,
  children,
}: {
  title: string;
  onClose: () => void;
  onPrint?: () => void;
  onDownload?: () => void;
  children: ReactNode;
}) {
  const fsRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  // Plein écran : on met le document à l'échelle pour remplir l'écran (projection
  // au tableau pendant la correction).
  useEffect(() => {
    const onFs = () => {
      const el = fsRef.current;
      if (document.fullscreenElement === el && el) {
        const child = el.firstElementChild as HTMLElement | null;
        if (child && child.offsetWidth && child.offsetHeight) {
          const s = Math.min(window.innerWidth / child.offsetWidth, window.innerHeight / child.offsetHeight) * 0.97;
          setScale(s > 0 ? s : 1);
        }
      } else {
        setScale(1);
      }
    };
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Barre d'actions */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-3 text-white">
        <span className="mr-auto min-w-0 flex-1 truncate text-sm font-semibold">
          🔍 Aperçu — {title}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            requestFullscreen(fsRef.current);
          }}
          className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/25"
          title="Projeter en plein écran (correction au tableau)"
        >
          ⛶ Plein écran
        </button>
        {onDownload && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDownload();
            }}
            className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/25"
          >
            ⬇️ PDF
          </button>
        )}
        {onPrint && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrint();
            }}
            className="inline-flex items-center gap-1 rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/25"
          >
            <Printer className="h-3.5 w-3.5" /> Imprimer
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/25"
        >
          ✕ Fermer
        </button>
      </div>

      {/* Contenu de l'aperçu (le clic à l'intérieur ne ferme pas) */}
      <div
        className="flex-1 overflow-auto px-3 pb-6 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div ref={fsRef} className="preview-fs mx-auto w-fit max-w-full">
          <div style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}>{children}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
