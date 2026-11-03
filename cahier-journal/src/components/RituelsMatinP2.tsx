/**
 * Rituels du matin — vue projetable (Période 2).
 * S'ouvre AUTOMATIQUEMENT sur le jour d'aujourd'hui (ex. mardi 3 nov → rituel
 * du 3 nov), avec sélecteur de jour. Deux rituels : la phrase du jour (type de
 * phrase) et le problème du jour (surtout ×, parfois + , et comparaisons).
 * Présentation du problème : « Problème » centré, souligné rouge, en cursive ;
 * l'élève recopie l'énoncé sur son cahier SANS la question.
 */
import { useRef, useState } from "react";
import { JOURS_P2, indexForDate, todayISO } from "../lib/ritualsP2";
import { requestFullscreen } from "../lib/board";

export function RituelsMatinP2() {
  const [i, setI] = useState(() => indexForDate(todayISO()));
  const [showType, setShowType] = useState(false);
  const [showRep, setShowRep] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const J = JOURS_P2[i];
  const isToday = J.date === todayISO();

  const go = (k: number) => { setI(k); setShowType(false); setShowRep(false); };

  return (
    <div>
      {/* Barre */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1">
          <button className="btn-outline px-2 py-1" disabled={i === 0} onClick={() => go(Math.max(0, i - 1))}>◀</button>
          <select className="input w-auto py-1" value={i} onChange={(e) => go(+e.target.value)}>
            {JOURS_P2.map((d, k) => <option key={d.date} value={k}>{d.label}{d.date === todayISO() ? " · aujourd'hui" : ""}</option>)}
          </select>
          <button className="btn-outline px-2 py-1" disabled={i === JOURS_P2.length - 1} onClick={() => go(Math.min(JOURS_P2.length - 1, i + 1))}>▶</button>
        </div>
        {!isToday && (
          <button className="btn-outline py-1 text-xs" onClick={() => go(indexForDate(todayISO()))}>↩︎ Revenir à aujourd'hui</button>
        )}
        <button className="btn-outline py-1 text-xs" onClick={() => requestFullscreen(sceneRef.current)}>⛶ Projeter</button>
      </div>

      {/* Scène projetable */}
      <div ref={sceneRef} className="rituel-scene bg-paper-light p-4 dark:bg-paper-dark">
        <div className="mb-4 flex flex-wrap items-baseline gap-3">
          <h1 className="text-2xl font-bold text-stone-900 dark:text-white">Rituel du matin — {J.label}</h1>
          {isToday && <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Aujourd'hui</span>}
        </div>

        {/* ① La phrase du jour */}
        <div className="card mb-5 p-6">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-600 dark:text-ink-300">① La phrase du jour — quel type ?</h2>
          <p className="seyes eleve rounded-lg p-4 text-3xl leading-relaxed sm:text-4xl">« {J.phrase} ___ »</p>
          <div className="mt-4 flex justify-center">
            <button className="btn-primary" onClick={() => setShowType((s) => !s)}>{showType ? "🙈 Cacher" : "👁️ Révéler le type et le point"}</button>
          </div>
          {showType && (
            <p className="reveal-pop mt-3 text-center text-2xl font-semibold text-rose-600 dark:text-rose-400">
              Phrase <b>{J.type}</b> &nbsp;→&nbsp; point : <b>{J.point}</b>
            </p>
          )}
        </div>

        {/* ② Le problème du jour */}
        <div className="card p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-ink-600 dark:text-ink-300">② Le problème du jour</h2>
          <div className="rounded-xl border-2 border-dashed border-stone-400 bg-white/60 p-6 dark:bg-stone-900/40">
            {/* « Problème » centré, souligné rouge, cursive */}
            <div className="text-center">
              <span className="font-ecole text-4xl text-rose-600" style={{ borderBottom: "3px solid #dc2626", paddingBottom: "2px" }}>Problème</span>
            </div>
            <p className="eleve mt-4 text-3xl leading-relaxed sm:text-4xl">{J.probleme.enonce}</p>
            <p className="mt-3 text-xl italic text-stone-500 dark:text-stone-400">Question (je ne la recopie pas) : {J.probleme.question}</p>
          </div>
          <p className="mt-3 text-center text-base italic text-stone-500 dark:text-stone-400">
            ➜ Je recopie <strong>l'énoncé</strong> sur mon cahier (sans la question), puis je cherche.
          </p>
          <div className="mt-4 flex justify-center">
            <button className="btn-primary" onClick={() => setShowRep((s) => !s)}>{showRep ? "🙈 Cacher la réponse" : "👁️ Révéler la réponse"}</button>
          </div>
          {showRep && (
            <div className="reveal-pop mt-3 rounded-r-lg border-l-4 border-emerald-500 bg-emerald-50/70 px-4 py-3 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">✏️ Correction</div>
              <p className="text-2xl leading-snug">{J.probleme.reponse}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
