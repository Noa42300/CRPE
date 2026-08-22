/**
 * Vue « Semaine »
 * ---------------
 * Aperçu des jours travaillés de la semaine, avec les créneaux résumés.
 * Navigation semaine précédente / suivante, ouverture d'un jour, impression.
 */
import { useStore } from "../lib/store";
import {
  addDays,
  cap,
  formatShort,
  isoWeek,
  jourNom,
  mondayOf,
  todayISO,
  weekDates,
} from "../lib/dates";
import { disciplineColor, disciplineLabel, niveauLabel } from "../lib/lookup";
import { DayPrint } from "./PrintDay";
import { printArea } from "../lib/print";
import { ChevronLeft, ChevronRight, Printer } from "./ui";

export function WeekView({
  date,
  onOpenDate,
  onChangeDate,
}: {
  date: string;
  onOpenDate: (iso: string) => void;
  onChangeDate: (iso: string) => void;
}) {
  const { settings, daysMap } = useStore();
  const monday = mondayOf(date);
  const allDates = weekDates(date);
  const dates = allDates.filter((d) =>
    settings.joursTravailles.includes(new Date(d + "T12:00").getDay()),
  );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button onClick={() => onChangeDate(addDays(monday, -7))} className="btn-ghost px-2" title="Semaine précédente">
            <ChevronLeft />
          </button>
          <h1 className="px-2 text-xl font-bold text-slate-900 dark:text-white">
            Semaine {isoWeek(monday)}
          </h1>
          <button onClick={() => onChangeDate(addDays(monday, 7))} className="btn-ghost px-2" title="Semaine suivante">
            <ChevronRight />
          </button>
          {isoWeek(monday) !== isoWeek(todayISO()) && (
            <button onClick={() => onChangeDate(todayISO())} className="btn-ghost text-xs">
              Cette semaine
            </button>
          )}
        </div>
        <button onClick={() => printArea("print-week")} className="btn-ghost px-2" title="Imprimer la semaine">
          <Printer />
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {dates.map((d) => {
          const day = daysMap[d];
          const isToday = d === todayISO();
          return (
            <div key={d} className={`card p-0 ${isToday ? "ring-2 ring-ink-500/40" : ""}`}>
              <button
                onClick={() => onOpenDate(d)}
                className="flex w-full items-center justify-between border-b border-slate-100 px-4 py-2.5 text-left hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
              >
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {cap(jourNom(d))} {formatShort(d)}
                </span>
                <span className="text-xs text-slate-400">
                  {day ? `${day.slots.length} créneaux` : "à préparer"}
                </span>
              </button>

              <div className="space-y-1.5 p-3">
                {!day || day.slots.length === 0 ? (
                  <p className="px-1 py-2 text-xs italic text-slate-400">
                    Journée vide
                  </p>
                ) : (
                  day.slots.map((slot) => {
                    const color = disciplineColor(settings, slot.disciplineId);
                    return (
                      <button
                        key={slot.id}
                        onClick={() => onOpenDate(d)}
                        className="flex w-full items-start gap-2 rounded-lg px-1.5 py-1 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      >
                        <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${color.dot}`} />
                        <span className="min-w-0 flex-1">
                          <span className="font-mono text-xs text-slate-400">
                            {slot.start}
                          </span>{" "}
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                            {disciplineLabel(settings, slot.disciplineId)}
                          </span>
                          {slot.activities[0]?.title && (
                            <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
                              {slot.activities
                                .map(
                                  (a) =>
                                    `${a.niveaux.map((n) => niveauLabel(settings, n)).join("/")} ${a.title}`,
                                )
                                .join(" · ")}
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Impression de la semaine */}
      <div id="print-week" className="print-area bg-white p-2 text-[12px] text-black">
        <h1 className="mb-3 border-b-2 border-black pb-1 text-lg font-bold">
          Semaine {isoWeek(monday)}
        </h1>
        <div className="space-y-4">
          {dates.map((d) =>
            daysMap[d] ? (
              <div key={d} className="print-avoid-break">
                <DayPrint day={daysMap[d]} settings={settings} />
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
