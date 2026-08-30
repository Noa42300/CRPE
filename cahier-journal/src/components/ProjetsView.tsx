/**
 * Vue « Projets » → projet annuel « Autour du monde CE1-CE2 »
 * ----------------------------------------------------------
 * Un continent par période, un pays par lundi. Chaque pays propose :
 *  • un diaporama projetable, coloré et ludique (5 slides) ;
 *  • une carte d'identité A4 (élève + Mode Correction, export PDF) ;
 *  • une dictée différenciée CE1 / CE2 (pour le lendemain) ;
 *  • une référence vidéo courte.
 * Contenu pédagogique, aucune donnée élève.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { cap, formatLong, weeksOfPeriod } from "../lib/dates";
import { AUTOUR_DU_MONDE, THEMES, paysForIndex, type Pays } from "../lib/projets";
import { Diaporama } from "./Diaporama";
import { CarteIdentiteOverlay } from "./CarteIdentiteA4";

type Modal =
  | { kind: "diapo"; pays: Pays }
  | { kind: "carte"; pays: Pays }
  | { kind: "dictee"; pays: Pays }
  | { kind: "video"; pays: Pays }
  | null;

export function ProjetsView() {
  const { settings } = useStore();
  const [periodNum, setPeriodNum] = useState(1);
  const [modal, setModal] = useState<Modal>(null);

  const cont = AUTOUR_DU_MONDE.find((c) => c.periodNumber === periodNum)!;
  const theme = THEMES[periodNum];
  const period = settings.periods.find((p) => p.number === periodNum);

  const lundis = useMemo(() => {
    if (!period) return [];
    return weeksOfPeriod(period.start, period.end).map((w, k) => ({
      mondayISO: w.mondayISO,
      pays: paysForIndex(cont, k),
    }));
  }, [period, cont]);

  return (
    <div>
      <h1 className="text-xl font-bold text-stone-900 dark:text-white">Projets</h1>
      <p className="mb-5 text-sm text-stone-500 dark:text-stone-400">
        Le projet annuel de la classe, prêt à projeter au tableau.
      </p>

      {/* Projet */}
      <div className="card mb-5 flex items-center gap-4 overflow-hidden p-0">
        <div className="grid h-24 w-24 shrink-0 place-items-center text-5xl" style={{ background: theme.soft }}>🌍</div>
        <div className="min-w-0 py-3 pr-4">
          <div className="font-ludique text-lg font-extrabold text-stone-800 dark:text-stone-100">
            Autour du monde — CE1/CE2
          </div>
          <div className="text-sm text-stone-500 dark:text-stone-400">
            Un continent par période, un pays par lundi. Diaporama, carte
            d'identité, dictée et vidéo pour chaque escale.
          </div>
        </div>
      </div>

      {/* Continents / périodes */}
      <div className="mb-4 flex flex-wrap gap-2">
        {AUTOUR_DU_MONDE.map((c) => {
          const on = periodNum === c.periodNumber;
          const t = THEMES[c.periodNumber];
          return (
            <button
              key={c.periodNumber}
              onClick={() => setPeriodNum(c.periodNumber)}
              className="rounded-full border-2 px-4 py-1.5 text-sm font-bold transition"
              style={on
                ? { background: t.accent, borderColor: t.accent, color: "#fff" }
                : { borderColor: t.soft, color: t.accent, background: "#fff" }}
            >
              {c.emoji} P{c.periodNumber} · {c.continent}
            </button>
          );
        })}
      </div>

      <div className="mb-5 rounded-2xl p-4" style={{ background: theme.soft }}>
        <div className="font-ludique text-lg font-extrabold" style={{ color: theme.accent }}>
          {cont.emoji} Période {cont.periodNumber} · {cont.continent}
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-700">{cont.intro}</p>
      </div>

      {/* Lundis */}
      {lundis.length === 0 ? (
        <div className="card px-6 py-8 text-center text-sm text-stone-500">
          Aucun lundi trouvé pour cette période (vérifie les dates dans les Paramètres).
        </div>
      ) : (
        <div className="space-y-3">
          {lundis.map(({ mondayISO, pays }, k) => (
            <div key={mondayISO} className="card overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl" style={{ background: theme.soft }}>
                    {pays.drapeau}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wide text-stone-400">
                      Lundi {k + 1} · <span className="capitalize">{cap(formatLong(mondayISO))}</span>
                    </div>
                    <div className="font-ludique text-lg font-extrabold text-stone-800 dark:text-stone-100">{pays.nom}</div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">{pays.capitale} · {pays.monument}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setModal({ kind: "diapo", pays })} className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{ background: theme.accent }}>🖥️ Diaporama</button>
                  <button onClick={() => setModal({ kind: "carte", pays })} className="rounded-full border-2 px-4 py-1.5 text-xs font-bold" style={{ borderColor: theme.soft, color: theme.accent }}>🪪 Carte d'identité</button>
                  <button onClick={() => setModal({ kind: "dictee", pays })} className="rounded-full border-2 px-4 py-1.5 text-xs font-bold" style={{ borderColor: theme.soft, color: theme.accent }}>✍️ Dictée</button>
                  <button onClick={() => setModal({ kind: "video", pays })} className="rounded-full border-2 px-4 py-1.5 text-xs font-bold" style={{ borderColor: theme.soft, color: theme.accent }}>🎬 Vidéo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Overlays */}
      {modal?.kind === "diapo" && (
        <Diaporama pays={modal.pays} continent={cont.continent} periodNumber={cont.periodNumber} onClose={() => setModal(null)} />
      )}
      {modal?.kind === "carte" && (
        <CarteIdentiteOverlay pays={modal.pays} periodNumber={cont.periodNumber} onClose={() => setModal(null)} />
      )}
      {modal?.kind === "dictee" && (
        <DicteeOverlay pays={modal.pays} accent={theme.accent} onClose={() => setModal(null)} />
      )}
      {modal?.kind === "video" && (
        <VideoModal pays={modal.pays} accent={theme.accent} onClose={() => setModal(null)} />
      )}
    </div>
  );
}

/* ------------------------------------------------------------ dictée */
function DicteeOverlay({ pays, accent, onClose }: { pays: Pays; accent: string; onClose: () => void }) {
  return (
    <div className="board-overlay font-ludique flex flex-col bg-paper-light dark:bg-paper-dark">
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-stone-200 bg-paper-light/95 px-4 py-2 dark:border-stone-700 dark:bg-paper-dark/95">
        <span className="text-sm font-extrabold uppercase tracking-wide" style={{ color: accent }}>✍️ Dictée — {pays.drapeau} {pays.nom}</span>
        <span className="text-xs text-stone-400">À faire le lendemain</span>
        <button onClick={onClose} className="ml-auto rounded-full px-4 py-1 text-xs font-bold text-white" style={{ background: accent }}>✕ Fermer</button>
      </div>
      <div className="grid flex-1 place-items-center overflow-auto p-6">
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-4 bg-white p-8 shadow-lg" style={{ borderColor: "#e0920a" }}>
            <div className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-extrabold" style={{ background: "#e0920a", color: "#2b2000" }}>CE1</div>
            <p className="text-3xl leading-relaxed text-stone-800">« {pays.dictee.ce1} »</p>
          </div>
          <div className="rounded-3xl border-4 bg-white p-8 shadow-lg" style={{ borderColor: "#2C6FB5" }}>
            <div className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-extrabold text-white" style={{ background: "#2C6FB5" }}>CE2</div>
            <p className="text-3xl leading-relaxed text-stone-800">« {pays.dictee.ce2} »</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ vidéo */
function VideoModal({ pays, accent, onClose }: { pays: Pays; accent: string; onClose: () => void }) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(pays.video.recherche)}`;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4" onClick={onClose}>
      <div className="font-ludique w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl dark:bg-paper-dark-card" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-3xl">🎬</span>
          <h2 className="text-lg font-extrabold text-stone-800 dark:text-stone-100">Vidéo — {pays.nom}</h2>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-300"><strong>{pays.video.titre}</strong></p>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">Source suggérée : {pays.video.source} (2 à 3 min).</p>
        <div className="mt-3 rounded-xl px-3 py-2 text-sm" style={{ background: `${accent}1a` }}>
          🔎 Recherche : <em>{pays.video.recherche}</em>
        </div>
        <p className="mt-3 text-xs text-stone-400">
          ⚠️ À prévisualiser avant la classe : les liens exacts changent souvent.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <a href={url} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 px-4 py-1.5 text-xs font-bold" style={{ borderColor: accent, color: accent }}>Ouvrir la recherche ↗</a>
          <button onClick={onClose} className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{ background: accent }}>Fermer</button>
        </div>
      </div>
    </div>
  );
}
