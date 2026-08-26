/**
 * Vue « EDT classe »
 * ------------------
 * L'emploi du temps du jour, prêt à projeter aux élèves (matières + récré +
 * repas), en écriture manuscrite. Construit à partir des créneaux de la journée.
 */
import { useState } from "react";
import { useStore } from "../lib/store";
import { addDays, cap, formatLong, todayISO } from "../lib/dates";
import { disciplineColor, disciplineLabel } from "../lib/lookup";
import { ChevronLeft, ChevronRight } from "./ui";
import { BoardOverlay } from "./BoardOverlay";

/** "08:30" → "8h30". */
function h(hhmm: string): string {
  const [hh, mm] = hhmm.split(":");
  const n = Number(hh);
  return mm === "00" ? `${n}h` : `${n}h${mm}`;
}

export function EDTView() {
  const { settings, daysMap } = useStore();
  const [date, setDate] = useState(todayISO());
  const [board, setBoard] = useState(false);
  const day = daysMap[date];
  const slots = day?.slots ?? [];

  const rows = slots.map((s) => ({
    id: s.id,
    time: `${h(s.start)} → ${h(s.end)}`,
    label: disciplineLabel(settings, s.disciplineId),
    dot: disciplineColor(settings, s.disciplineId).dot,
  }));

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">EDT classe</h1>
        {rows.length > 0 && (
          <button onClick={() => setBoard(true)} className="btn-primary">
            📺 Afficher au tableau
          </button>
        )}
      </div>
      <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
        L'emploi du temps du jour, prêt à projeter aux élèves (en écriture
        manuscrite). Il reprend les créneaux de la journée — récréation et repas
        compris.
      </p>

      {/* Navigation date */}
      <div className="mb-4 flex items-center gap-1">
        <button onClick={() => setDate(addDays(date, -1))} className="btn-ghost px-2" title="Jour précédent">
          <ChevronLeft />
        </button>
        <input type="date" value={date} onChange={(e) => e.target.value && setDate(e.target.value)} className="input w-auto px-2 py-1.5 text-sm" />
        <button onClick={() => setDate(addDays(date, 1))} className="btn-ghost px-2" title="Jour suivant">
          <ChevronRight />
        </button>
        {date !== todayISO() && (
          <button onClick={() => setDate(todayISO())} className="btn-ghost text-xs">Aujourd'hui</button>
        )}
      </div>

      <h2 className="mb-2 text-base font-bold capitalize text-stone-800 dark:text-stone-100">
        {cap(formatLong(date))}
      </h2>

      {rows.length === 0 ? (
        <div className="card px-6 py-10 text-center text-sm text-stone-500 dark:text-stone-400">
          Aucun créneau pour ce jour. Prépare la journée dans « Aujourd'hui »
          (ajoute les matières, la récré, le repas) : l'EDT se remplit tout seul
          ici.
        </div>
      ) : (
        <div className="card divide-y divide-stone-100 dark:divide-stone-800">
          {rows.map((r) => (
            <div key={r.id} className="flex items-center gap-3 px-4 py-2.5">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${r.dot}`} />
              <span className="w-32 shrink-0 font-mono text-sm text-stone-500 dark:text-stone-400">
                {r.time}
              </span>
              <span className="font-ecole text-2xl text-stone-800 dark:text-stone-100">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {board && (
        <BoardOverlay onClose={() => setBoard(false)}>
          <div className="mb-6 text-center opacity-80" style={{ fontSize: "0.7em" }}>
            {cap(formatLong(date))}
          </div>
          <div className="space-y-4">
            {rows.map((r) => (
              <div key={r.id} className="flex items-baseline gap-6">
                <span className="shrink-0 opacity-70" style={{ fontSize: "0.6em" }}>{r.time}</span>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </BoardOverlay>
      )}
    </div>
  );
}
