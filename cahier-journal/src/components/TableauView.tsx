/**
 * Vue « Tableau »
 * ---------------
 * Surface d'écriture sur lignes Seyès (comme un cahier), en écriture cursive,
 * à projeter au tableau. Le texte est conservé localement sur cet appareil.
 */
import { useEffect, useRef, useState } from "react";
import {
  ECRITURE_FONTS,
  fontCss,
  requestFullscreen,
  type EcritureFontId,
} from "../lib/board";

const KEY = "cj_tableau";

export function TableauView() {
  const [fontId, setFontId] = useState<EcritureFontId>("caveat");
  const [size, setSize] = useState(40);
  const editorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  // Charge le contenu sauvegardé (une seule fois).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved && editorRef.current) editorRef.current.innerText = saved;
    } catch {
      /* ignore */
    }
  }, []);

  const onInput = () => {
    try {
      localStorage.setItem(KEY, editorRef.current?.innerText ?? "");
    } catch {
      /* ignore */
    }
  };

  const clear = () => {
    if (window.confirm("Effacer le tableau ?")) {
      if (editorRef.current) editorRef.current.innerText = "";
      onInput();
    }
  };

  const il = Math.round(size * 0.34); // interligne dérivé de la taille
  const lineHeight = il * 4;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">Tableau</h1>
        <div className="flex flex-wrap items-center gap-2">
          <select value={fontId} onChange={(e) => setFontId(e.target.value as EcritureFontId)} className="input w-auto py-1">
            {ECRITURE_FONTS.map((f) => (
              <option key={f.id} value={f.id}>{f.label}</option>
            ))}
          </select>
          <div className="flex items-center gap-1">
            <button onClick={() => setSize((s) => Math.max(20, s - 4))} className="btn-outline px-2 py-1">A−</button>
            <span className="w-8 text-center text-xs text-stone-500">{size}</span>
            <button onClick={() => setSize((s) => Math.min(120, s + 4))} className="btn-outline px-2 py-1">A+</button>
          </div>
          <button onClick={() => requestFullscreen(frameRef.current)} className="btn-outline py-1 text-xs">⛶ Plein écran</button>
          <button onClick={clear} className="btn-ghost py-1 text-xs text-rose-500">Effacer</button>
        </div>
      </div>
      <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
        Écris ici comme sur le tableau : le texte suit les lignes du cahier
        (Seyès), en écriture cursive. Idéal pour montrer le geste d'écriture.
      </p>

      <div ref={frameRef} className="card overflow-auto bg-white p-0">
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={onInput}
          spellCheck={false}
          className="seyes font-ecole min-h-[60vh] p-6 text-stone-900 outline-none"
          style={
            {
              fontFamily: fontCss(fontId),
              fontSize: size,
              lineHeight: `${lineHeight}px`,
              ["--il" as string]: `${il}px`,
            } as React.CSSProperties
          }
        />
      </div>
      <p className="mt-2 text-xs text-stone-400">
        Le contenu du tableau est enregistré sur cet appareil (localement).
      </p>
    </div>
  );
}
