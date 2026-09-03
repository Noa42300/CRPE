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
import { recreLieu } from "../lib/recreDuty";
import { ChevronLeft, ChevronRight } from "./ui";
import { BoardOverlay } from "./BoardOverlay";
import { KIND_EMOJI } from "./AdminView";

/** Une colonne de l'emploi du temps projeté (matin ou après-midi). */
function BoardColumn({
  title,
  rows,
}: {
  title: string;
  rows: { id: string; label: string; dot: string }[];
}) {
  if (rows.length === 0) return null;
  return (
    <div className="text-left">
      <div className="mb-5 border-b-2 border-stone-300 pb-1 font-semibold uppercase tracking-wide opacity-60 dark:border-stone-600" style={{ fontSize: "0.42em" }}>
        {title}
      </div>
      <div className="space-y-5">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center gap-4 whitespace-nowrap">
            <span className={`h-[0.35em] w-[0.35em] shrink-0 rounded-full ${r.dot}`} />
            <span>{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** "08:30" → "8h30". */
function h(hhmm: string): string {
  const [hh, mm] = hhmm.split(":");
  const n = Number(hh);
  return mm === "00" ? `${n}h` : `${n}h${mm}`;
}

export function EDTView() {
  const { settings, daysMap, reminders, saveReminder } = useStore();
  const [date, setDate] = useState(todayISO());
  const [board, setBoard] = useState(false);
  const day = daysMap[date];
  const slots = day?.slots ?? [];

  // Rappels admin du jour (papiers à donner, réunions…), triés par heure.
  const dayReminders = reminders
    .filter((r) => r.date === date)
    .sort((a, b) => (a.time ?? "99:99").localeCompare(b.time ?? "99:99"));

  const rows = slots.map((s) => {
    // Libellé affiché aux élèves : le nom de la discipline (Français, Maths…).
    // Mais pour un créneau « Autre » (générique, gris) — rituel, intervention,
    // rangement… — on affiche le NOM EXACT de l'activité, jamais « Autre »,
    // qui ne veut rien dire pour les enfants. La couleur grise, elle, reste.
    const discLabel = disciplineLabel(settings, s.disciplineId);
    const title = s.activities[0]?.title?.trim();
    const isGeneric = s.disciplineId === "autre" || discLabel === "—";
    let label = isGeneric && title ? title : discLabel;
    // Pour une récréation, on précise notre lieu de service (Basket, City,
    // Préau), qui tourne selon le jour — pour savoir où se placer dans la cour.
    if (s.disciplineId === "recreation") {
      const lieu = recreLieu(date, s.start);
      if (lieu) label = `${label} · ${lieu}`;
    }
    return {
      id: s.id,
      start: s.start,
      time: `${h(s.start)} → ${h(s.end)}`,
      label,
      dot: disciplineColor(settings, s.disciplineId).dot,
    };
  });

  // Repérage de la pause repas pour couper matin / après-midi.
  const REPAS_RE = /repas|cantine|déjeuner|dejeuner|méridienne|meridienne|pause du midi|self|midi/i;
  const repasIdx = rows.findIndex((r) => REPAS_RE.test(r.label));
  let matin: typeof rows, aprem: typeof rows, repas: (typeof rows)[number] | null;
  if (repasIdx >= 0) {
    matin = rows.slice(0, repasIdx);
    repas = rows[repasIdx];
    aprem = rows.slice(repasIdx + 1);
  } else {
    matin = rows.filter((r) => r.start < "12:00");
    aprem = rows.filter((r) => r.start >= "12:00");
    repas = null;
  }

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

      {/* À ne pas oublier : rappels admin du jour, en dehors des heures de classe */}
      {dayReminders.length > 0 && (
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50/70 p-3 dark:border-amber-500/30 dark:bg-amber-500/10">
          <div className="mb-1.5 text-sm font-semibold text-amber-800 dark:text-amber-200">
            📌 À ne pas oublier
          </div>
          <div className="space-y-1">
            {dayReminders.map((r) => (
              <label key={r.id} className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={r.done}
                  onChange={() => void saveReminder({ ...r, done: !r.done })}
                  className="h-4 w-4 shrink-0 accent-amber-600"
                />
                <span className="shrink-0">{KIND_EMOJI[r.kind]}</span>
                {r.time && (
                  <span className="shrink-0 rounded bg-amber-200/70 px-1.5 py-0.5 text-[11px] font-semibold text-amber-800 dark:bg-amber-500/20 dark:text-amber-200">
                    {r.time}
                  </span>
                )}
                <span className={r.done ? "text-stone-400 line-through" : "text-stone-800 dark:text-stone-100"}>
                  {r.text}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

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
        <BoardOverlay onClose={() => setBoard(false)} fit>
          <div className="text-center">
            <div className="mb-6 opacity-70" style={{ fontSize: "0.45em" }}>
              {cap(formatLong(date))}
            </div>
            <div className="flex items-stretch justify-center gap-12">
              <BoardColumn title="Matin" rows={matin} />
              {repas && (
                <div className="flex flex-col items-center justify-center self-stretch border-x-2 border-dashed border-stone-300 px-6 dark:border-stone-600">
                  <div style={{ fontSize: "1.1em" }}>🍽️</div>
                  <div className="mt-2" style={{ fontSize: "0.7em" }}>{repas.label}</div>
                </div>
              )}
              <BoardColumn title="Après-midi" rows={aprem} />
            </div>
          </div>
        </BoardOverlay>
      )}
    </div>
  );
}
