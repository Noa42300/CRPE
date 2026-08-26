/**
 * Vue « Rituels »
 * ---------------
 * Deux niveaux :
 *   • le PROGRAMME DU MATIN clé en main (Période 1) — jour par jour,
 *     projetable en grand, différencié CE1 / CE2 (voir RituelsMatin) ;
 *   • MES RITUELS libres — cartes que je crée moi-même, rangées par période,
 *     elles aussi affichables au tableau en écriture manuscrite.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Ritual } from "../lib/types";
import { uid } from "../lib/dates";
import { AutoTextarea, ChevronDown, ChevronUp, Plus, Trash } from "./ui";
import { BoardOverlay } from "./BoardOverlay";
import { RituelsMatin } from "./RituelsMatin";

export function RitualsView() {
  const { settings, rituals, saveRitual, removeRitual } = useStore();
  const periods = settings.periods.slice().sort((a, b) => a.number - b.number);
  const [periodNum, setPeriodNum] = useState(periods[0]?.number ?? 1);
  const [board, setBoard] = useState<Ritual[] | null>(null);

  const list = useMemo(
    () =>
      rituals
        .filter((r) => r.periodNumber === periodNum)
        .sort((a, b) => a.order - b.order),
    [rituals, periodNum],
  );

  const add = () =>
    saveRitual({
      id: uid(),
      periodNumber: periodNum,
      title: "",
      content: "",
      order: list.length,
      updatedAt: Date.now(),
    });

  const move = (r: Ritual, dir: -1 | 1) => {
    const i = list.findIndex((x) => x.id === r.id);
    const j = i + dir;
    if (j < 0 || j >= list.length) return;
    const a = list[i];
    const b = list[j];
    saveRitual({ ...a, order: b.order });
    saveRitual({ ...b, order: a.order });
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">Rituels</h1>
      </div>

      {/* Filtre période */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {periods.map((p) => (
          <button
            key={p.id}
            onClick={() => setPeriodNum(p.number)}
            className={`toggle-chip ${periodNum === p.number ? "toggle-chip-on" : "toggle-chip-off"}`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Programme du matin clé en main — pour l'instant Période 1 */}
      {periodNum === 1 ? (
        <section className="mb-8">
          <h2 className="mb-1 text-sm font-bold uppercase tracking-wide text-ink-700 dark:text-ink-300">
            Programme du matin · CE1-CE2
          </h2>
          <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
            Tous les rituels de la période, jour par jour. Choisis un jour, un
            module, puis « ⛶ Projeter » pour l’afficher en grand. « Mode prof »
            révèle les réponses et mes petits scripts.
          </p>
          <RituelsMatin />
        </section>
      ) : (
        <section className="mb-8">
          <div className="card px-6 py-8 text-center text-sm text-stone-500 dark:text-stone-400">
            Le programme du matin clé en main n’existe pour l’instant que pour la
            Période 1. Envoie-moi les rituels de cette période et je les intègre
            de la même façon. En attendant, tu peux créer tes rituels libres
            ci-dessous.
          </div>
        </section>
      )}

      {/* Mes rituels libres */}
      <section>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-bold uppercase tracking-wide text-stone-600 dark:text-stone-300">
            Mes rituels libres
          </h2>
          <div className="flex gap-2">
            {list.length > 0 && (
              <button onClick={() => setBoard(list)} className="btn-outline py-1 text-xs">
                📺 Afficher la période
              </button>
            )}
            <button onClick={add} className="btn-primary py-1 text-xs">
              <Plus /> Nouveau rituel
            </button>
          </div>
        </div>

        {list.length === 0 ? (
          <div className="card flex flex-col items-center gap-3 px-6 py-8 text-center">
            <div className="text-3xl">🔔</div>
            <p className="max-w-sm text-sm text-stone-500 dark:text-stone-400">
              Aucun rituel libre pour cette période. Ajoute-en un (ou
              envoie-les-moi, je te les remets ici).
            </p>
            <button onClick={add} className="btn-primary">
              <Plus /> Nouveau rituel
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {list.map((r, i) => (
              <div key={r.id} className="card p-3">
                <div className="flex items-start gap-2">
                  <div className="flex flex-col text-stone-400">
                    <button onClick={() => move(r, -1)} disabled={i === 0} className="hover:text-stone-700 disabled:opacity-30">
                      <ChevronUp />
                    </button>
                    <span className="text-center text-xs font-semibold">{i + 1}</span>
                    <button onClick={() => move(r, 1)} disabled={i === list.length - 1} className="hover:text-stone-700 disabled:opacity-30">
                      <ChevronDown />
                    </button>
                  </div>
                  <div className="min-w-0 flex-1 space-y-2">
                    <input
                      className="input font-medium"
                      placeholder="Titre du rituel — ex : La phrase du jour"
                      value={r.title}
                      onChange={(e) => saveRitual({ ...r, title: e.target.value })}
                    />
                    <AutoTextarea
                      className="min-h-[80px]"
                      placeholder="Contenu du rituel (ce qui sera affiché au tableau)…"
                      value={r.content}
                      onChange={(e) => saveRitual({ ...r, content: e.target.value })}
                    />
                    <div className="flex gap-2">
                      <button onClick={() => setBoard([r])} className="btn-outline py-1 text-xs">
                        📺 Afficher au tableau
                      </button>
                    </div>
                  </div>
                  <button onClick={() => { if (window.confirm("Supprimer ce rituel ?")) void removeRitual(r.id); }} className="text-stone-400 hover:text-rose-500" title="Supprimer">
                    <Trash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {board && (
        <BoardOverlay onClose={() => setBoard(null)}>
          <div className="space-y-8">
            {board.map((r) => (
              <div key={r.id}>
                {r.title && <div className="mb-2 font-bold">{r.title}</div>}
                <div className="whitespace-pre-wrap">{r.content}</div>
              </div>
            ))}
          </div>
        </BoardOverlay>
      )}
    </div>
  );
}
