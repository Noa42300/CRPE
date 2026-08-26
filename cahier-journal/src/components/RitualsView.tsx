/**
 * Vue « Rituels »
 * ---------------
 * Range les rituels par période. Chaque rituel (ou toute la période) peut être
 * affiché en grand au tableau, en écriture manuscrite.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Ritual } from "../lib/types";
import { uid } from "../lib/dates";
import { AutoTextarea, ChevronDown, ChevronUp, Plus, Trash } from "./ui";
import { BoardOverlay } from "./BoardOverlay";

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
        <div className="flex gap-2">
          {list.length > 0 && (
            <button onClick={() => setBoard(list)} className="btn-outline">
              📺 Afficher la période
            </button>
          )}
          <button onClick={add} className="btn-primary">
            <Plus /> Nouveau rituel
          </button>
        </div>
      </div>
      <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
        Range tes rituels par période. Clique « Afficher » pour projeter en grand
        au tableau, en écriture manuscrite.
      </p>

      {/* Filtre période */}
      <div className="mb-4 flex flex-wrap gap-1.5">
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

      {list.length === 0 ? (
        <div className="card flex flex-col items-center gap-3 px-6 py-10 text-center">
          <div className="text-3xl">🔔</div>
          <p className="max-w-sm text-sm text-stone-500 dark:text-stone-400">
            Aucun rituel pour cette période. Ajoute-en un (ou envoie-les-moi, je
            te les remets ici).
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
