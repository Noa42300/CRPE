/**
 * Overlay « Affichage tableau »
 * -----------------------------
 * Affiche un contenu en grand, en écriture manuscrite, pour projeter aux
 * élèves. Choix de la police, plein écran.
 *
 * Mode `fit` : le contenu est mis à l'échelle pour tenir SUR UNE SEULE PAGE,
 * sans défilement (idéal pour l'emploi du temps : tout est visible d'un coup).
 * Sinon, taille réglable A− / A+.
 */
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
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
  fit = false,
}: {
  onClose: () => void;
  children: ReactNode;
  seyes?: boolean;
  fit?: boolean;
}) {
  const [fontId, setFontId] = useState<EcritureFontId>("caveat");
  const [size, setSize] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Ajuste le contenu pour qu'il tienne entièrement dans la zone visible.
  useLayoutEffect(() => {
    if (!fit) return;
    const el = contentRef.current;
    const wrap = wrapRef.current;
    if (!el || !wrap) return;
    const fitNow = () => {
      el.style.transform = "none";
      const nh = el.offsetHeight;
      const nw = el.offsetWidth;
      if (!nh || !nw) return;
      // 0.92 : petite marge pour ne pas coller aux bords.
      const s = Math.min(wrap.clientHeight / nh, wrap.clientWidth / nw, 4) * 0.92;
      el.style.transform = `scale(${Math.max(0.2, s)})`;
    };
    fitNow();
    const ro = new ResizeObserver(fitNow);
    ro.observe(wrap);
    ro.observe(el);
    document.fonts?.ready?.then(fitNow).catch(() => {});
    window.addEventListener("resize", fitNow);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fitNow);
    };
  }, [fit, children, fontId]);

  return (
    <div ref={ref} className="board-overlay flex flex-col bg-paper-light dark:bg-paper-dark">
      {/* Barre d'outils */}
      <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-stone-200 bg-paper-light/95 px-4 py-2 backdrop-blur dark:border-stone-700 dark:bg-paper-dark/95">
        <select
          value={fontId}
          onChange={(e) => setFontId(e.target.value as EcritureFontId)}
          className="input w-auto py-1"
        >
          {ECRITURE_FONTS.map((f) => (
            <option key={f.id} value={f.id}>{f.label}</option>
          ))}
        </select>
        {fit ? (
          <span className="text-xs text-stone-400">Ajusté à l’écran (tout est visible)</span>
        ) : (
          <div className="flex items-center gap-1">
            <button onClick={() => setSize((s) => Math.max(24, s - 6))} className="btn-outline px-2 py-1" title="Plus petit">A−</button>
            <span className="w-10 text-center text-xs text-stone-500">{size}</span>
            <button onClick={() => setSize((s) => Math.min(140, s + 6))} className="btn-outline px-2 py-1" title="Plus grand">A+</button>
          </div>
        )}
        <button onClick={() => requestFullscreen(ref.current)} className="btn-outline py-1 text-xs">
          ⛶ Plein écran
        </button>
        <button
          onClick={() => { exitFullscreen(); onClose(); }}
          className="btn-primary ml-auto py-1 text-xs"
        >
          ✕ Fermer
        </button>
      </div>

      {/* Contenu projeté */}
      {fit ? (
        <div ref={wrapRef} className="grid flex-1 place-content-center overflow-hidden">
          <div
            ref={contentRef}
            className={`leading-snug text-stone-900 dark:text-stone-50 ${seyes ? "" : "font-ecole"}`}
            style={{ fontFamily: fontCss(fontId), fontSize: 44, transformOrigin: "center center" }}
          >
            {children}
          </div>
        </div>
      ) : (
        <div
          className={`flex-1 overflow-auto px-8 py-8 leading-snug text-stone-900 dark:text-stone-50 ${seyes ? "" : "font-ecole"}`}
          style={{ fontFamily: fontCss(fontId), fontSize: size }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
