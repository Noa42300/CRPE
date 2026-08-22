/**
 * Vue « Calendrier »
 * ------------------
 * Grille mensuelle. Repère d'un coup d'œil les jours travaillés, les journées
 * déjà préparées (pastille) et la période. Cliquer une date l'ouvre.
 */
import { useState } from "react";
import { useStore } from "../lib/store";
import {
  MONTH_NAMES,
  addDays,
  fromISODate,
  toISODate,
  todayISO,
} from "../lib/dates";
import { periodForDate } from "../lib/lookup";
import { ChevronLeft, ChevronRight } from "./ui";

const WEEKDAY_LABELS = ["L", "M", "M", "J", "V", "S", "D"];

export function CalendarView({
  date,
  onOpenDate,
}: {
  date: string;
  onOpenDate: (iso: string) => void;
}) {
  const { settings, daysMap } = useStore();
  const init = fromISODate(date);
  const [year, setYear] = useState(init.getFullYear());
  const [month, setMonth] = useState(init.getMonth()); // 0-11

  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // lundi = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (string | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(toISODate(new Date(year, month, d)));
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const prevMonth = () => {
    const m = month - 1;
    if (m < 0) {
      setMonth(11);
      setYear(year - 1);
    } else setMonth(m);
  };
  const nextMonth = () => {
    const m = month + 1;
    if (m > 11) {
      setMonth(0);
      setYear(year + 1);
    } else setMonth(m);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button onClick={prevMonth} className="btn-ghost px-2">
            <ChevronLeft />
          </button>
          <h1 className="px-2 text-xl font-bold capitalize text-slate-900 dark:text-white">
            {MONTH_NAMES[month]} {year}
          </h1>
          <button onClick={nextMonth} className="btn-ghost px-2">
            <ChevronRight />
          </button>
        </div>
        <button
          onClick={() => {
            const t = fromISODate(todayISO());
            setYear(t.getFullYear());
            setMonth(t.getMonth());
          }}
          className="btn-ghost text-xs"
        >
          Aujourd'hui
        </button>
      </div>

      <div className="card p-3 sm:p-4">
        <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-400">
          {WEEKDAY_LABELS.map((w, i) => (
            <div key={i}>{w}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((iso, i) => {
            if (!iso) return <div key={i} />;
            const d = fromISODate(iso);
            const isWorking = settings.joursTravailles.includes(d.getDay());
            const hasDay = !!daysMap[iso];
            const isToday = iso === todayISO();
            const period = periodForDate(settings, iso);
            return (
              <button
                key={i}
                onClick={() => onOpenDate(iso)}
                className={`relative flex aspect-square flex-col items-center justify-center rounded-lg text-sm transition ${
                  isWorking
                    ? "text-slate-800 dark:text-slate-100"
                    : "text-slate-300 dark:text-slate-600"
                } ${
                  isToday
                    ? "bg-ink-600 font-bold text-white hover:bg-ink-700"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                title={period?.name}
              >
                {d.getDate()}
                {hasDay && (
                  <span
                    className={`absolute bottom-1.5 h-1.5 w-1.5 rounded-full ${
                      isToday ? "bg-white" : "bg-emerald-500"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 px-1 text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Journée préparée
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-ink-600" /> Aujourd'hui
        </span>
        <span className="text-slate-300 dark:text-slate-600">Les jours grisés ne sont pas travaillés.</span>
      </div>

      {/* Aperçu de la semaine à venir sous le calendrier */}
      <UpcomingList onOpenDate={onOpenDate} />
    </div>
  );
}

/** Petite liste des 5 prochains jours travaillés et leur état. */
function UpcomingList({ onOpenDate }: { onOpenDate: (iso: string) => void }) {
  const { settings, daysMap } = useStore();
  const items: string[] = [];
  let cursor = todayISO();
  let guard = 0;
  while (items.length < 5 && guard < 30) {
    const wd = fromISODate(cursor).getDay();
    if (settings.joursTravailles.includes(wd)) items.push(cursor);
    cursor = addDays(cursor, 1);
    guard++;
  }

  return (
    <div className="mt-5">
      <h2 className="mb-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
        Prochains jours
      </h2>
      <div className="space-y-1.5">
        {items.map((iso) => {
          const day = daysMap[iso];
          return (
            <button
              key={iso}
              onClick={() => onOpenDate(iso)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-left text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50"
            >
              <span className="capitalize text-slate-700 dark:text-slate-200">
                {niceLabel(iso)}
              </span>
              <span className={`text-xs ${day ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}>
                {day ? `${day.slots.length} créneaux` : "à préparer"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function niceLabel(iso: string): string {
  const d = fromISODate(iso);
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
