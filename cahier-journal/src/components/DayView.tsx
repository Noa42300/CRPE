/**
 * Vue « Aujourd'hui » / Jour
 * --------------------------
 * En-tête (date, semaine, période, présences), navigation entre les jours,
 * informations générales repliables, liste des créneaux, et actions
 * (dupliquer, imprimer, supprimer).
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import {
  addDays,
  cap,
  formatLong,
  ecoleWeekNumber,
  todayISO,
} from "../lib/dates";
import { periodForDate } from "../lib/lookup";
import { EVENT_LABELS, EVENT_TYPES } from "../lib/defaults";
import {
  duplicateDay,
  emptyDay,
  emptyEvent,
  emptySlot,
} from "../lib/factory";
import type { Day, DayEvent, Slot } from "../lib/types";
import { SlotCard } from "./SlotCard";
import { PrintDay } from "./PrintDay";
import { printArea } from "../lib/print";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Printer,
  Trash,
  Copy,
} from "./ui";

export function DayView({
  date,
  onChangeDate,
}: {
  date: string;
  onChangeDate: (iso: string) => void;
}) {
  const { settings, daysMap, saveDay, removeDay } = useStore();
  const stored = daysMap[date];
  const [showInfo, setShowInfo] = useState(false);
  const [dupTarget, setDupTarget] = useState<string | null>(null);

  // Journée effective (transitoire si pas encore enregistrée).
  const day: Day = useMemo(
    () => stored ?? emptyDay(date, settings.classe.effectif),
    [stored, date, settings.classe.effectif],
  );
  const exists = !!stored;

  const update = (mut: (d: Day) => Day) => saveDay(mut(day));

  const period = periodForDate(settings, date);

  const addSlot = () => {
    const last = day.slots[day.slots.length - 1];
    const start = last ? last.end : "08:30";
    const firstDisc = settings.disciplines[0]?.id ?? "";
    update((d) => ({
      ...d,
      slots: [...d.slots, emptySlot(firstDisc, start, addHour(start))],
    }));
    setShowInfo(false);
  };

  const setSlot = (id: string, next: Slot) =>
    update((d) => ({
      ...d,
      slots: d.slots.map((s) => (s.id === id ? next : s)),
    }));

  const removeSlot = (id: string) =>
    update((d) => ({ ...d, slots: d.slots.filter((s) => s.id !== id) }));

  const duplicateSlot = (id: string) =>
    update((d) => {
      const idx = d.slots.findIndex((s) => s.id === id);
      if (idx < 0) return d;
      const copy = duplicateSlotObj(d.slots[idx]);
      const slots = [...d.slots];
      slots.splice(idx + 1, 0, copy);
      return { ...d, slots };
    });

  const doDuplicateDay = () => {
    if (!dupTarget) return;
    saveDay(duplicateDay(day, dupTarget));
    const target = dupTarget;
    setDupTarget(null);
    onChangeDate(target);
  };

  const doDelete = () => {
    if (
      window.confirm(
        `Supprimer définitivement la journée du ${formatLong(date)} ? Cette action est irréversible.`,
      )
    ) {
      void removeDay(date);
      setShowInfo(false);
    }
  };

  return (
    <div>
      {/* Barre de navigation entre les jours */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <button
            onClick={() => onChangeDate(addDays(date, -1))}
            className="btn-ghost px-2"
            title="Jour précédent (←)"
          >
            <ChevronLeft />
          </button>
          <input
            type="date"
            value={date}
            onChange={(e) => e.target.value && onChangeDate(e.target.value)}
            className="input w-auto px-2 py-1.5 text-sm"
          />
          <button
            onClick={() => onChangeDate(addDays(date, 1))}
            className="btn-ghost px-2"
            title="Jour suivant (→)"
          >
            <ChevronRight />
          </button>
          {date !== todayISO() && (
            <button onClick={() => onChangeDate(todayISO())} className="btn-ghost text-xs">
              Aujourd'hui
            </button>
          )}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => printArea("print-area")}
            className="btn-ghost px-2"
            title="Imprimer / PDF"
            disabled={!exists}
          >
            <Printer />
          </button>
          {exists && (
            <button onClick={doDelete} className="btn-ghost px-2 text-rose-500" title="Supprimer la journée">
              <Trash />
            </button>
          )}
        </div>
      </div>

      {/* En-tête de la journée */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {cap(formatLong(date))}
        </h1>
        <button
          onClick={() => setShowInfo((v) => !v)}
          className="mt-1 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        >
          <span>
            Semaine {ecoleWeekNumber(date, settings.periods)}
            {period ? ` · ${period.name}` : ""}
          </span>
          <span className="text-slate-300">·</span>
          <span>
            👥 {day.info.presents ?? "—"} présents · {day.info.absents ?? "—"} absents
          </span>
          <ChevronRight className={`h-4 w-4 transition-transform ${showInfo ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Informations générales (repliable) */}
      {showInfo && (
        <DayInfoPanel day={day} onChange={update} />
      )}

      {/* Créneaux */}
      {day.slots.length === 0 ? (
        <div className="card flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
          <div className="text-4xl">🗓️</div>
          <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
            Cette journée n'est pas encore préparée. Ajoutez un premier créneau
            pour construire votre emploi du temps.
          </p>
          <button onClick={addSlot} className="btn-primary">
            <Plus /> Ajouter un créneau
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {day.slots.map((slot) => (
            <SlotCard
              key={slot.id}
              settings={settings}
              slot={slot}
              onChange={(s) => setSlot(slot.id, s)}
              onRemove={() => removeSlot(slot.id)}
              onDuplicate={() => duplicateSlot(slot.id)}
            />
          ))}
          <button onClick={addSlot} className="btn-outline w-full py-2.5">
            <Plus /> Ajouter un créneau
          </button>
        </div>
      )}

      {/* Dupliquer la journée */}
      {exists && (
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4 text-sm dark:border-slate-800">
          {dupTarget === null ? (
            <button onClick={() => setDupTarget(addDays(date, 7))} className="btn-ghost text-slate-500">
              <Copy className="h-4 w-4" /> Dupliquer cette journée vers…
            </button>
          ) : (
            <>
              <span className="text-slate-500">Copier vers :</span>
              <input
                type="date"
                value={dupTarget}
                onChange={(e) => setDupTarget(e.target.value)}
                className="input w-auto px-2 py-1.5"
              />
              <button onClick={doDuplicateDay} className="btn-primary py-1.5">
                Dupliquer
              </button>
              <button onClick={() => setDupTarget(null)} className="btn-ghost py-1.5">
                Annuler
              </button>
              {daysMap[dupTarget] && (
                <span className="text-xs text-amber-600">
                  ⚠️ Une journée existe déjà à cette date, elle sera remplacée.
                </span>
              )}
            </>
          )}
        </div>
      )}

      {/* Conteneur d'impression (hors écran) */}
      <PrintDay day={exists ? day : null} settings={settings} />
    </div>
  );
}

/** Panneau des informations générales de la journée. */
function DayInfoPanel({
  day,
  onChange,
}: {
  day: Day;
  onChange: (mut: (d: Day) => Day) => void;
}) {
  const setInfo = (patch: Partial<Day["info"]>) =>
    onChange((d) => ({ ...d, info: { ...d.info, ...patch } }));

  const addEvent = () =>
    onChange((d) => ({
      ...d,
      info: { ...d.info, events: [...d.info.events, emptyEvent()] },
    }));
  const setEvent = (id: string, patch: Partial<DayEvent>) =>
    onChange((d) => ({
      ...d,
      info: {
        ...d.info,
        events: d.info.events.map((e) => (e.id === id ? { ...e, ...patch } : e)),
      },
    }));
  const removeEvent = (id: string) =>
    onChange((d) => ({
      ...d,
      info: { ...d.info, events: d.info.events.filter((e) => e.id !== id) },
    }));

  return (
    <div className="card mb-5 space-y-4 p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <NumField label="Effectif prévu" value={day.info.effectifPrevu} onChange={(v) => setInfo({ effectifPrevu: v })} />
        <NumField label="Présents" value={day.info.presents} onChange={(v) => setInfo({ presents: v })} />
        <NumField label="Absents" value={day.info.absents} onChange={(v) => setInfo({ absents: v })} />
      </div>
      <div>
        <label className="label">Élèves absents (facultatif)</label>
        <input
          className="input"
          value={day.info.absentsNames}
          onChange={(e) => setInfo({ absentsNames: e.target.value })}
          placeholder="Noms des élèves absents"
        />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="label mb-0">Événements exceptionnels</label>
          <button onClick={addEvent} className="btn-ghost py-1 text-xs">
            <Plus className="h-3.5 w-3.5" /> Ajouter
          </button>
        </div>
        {day.info.events.length === 0 ? (
          <p className="text-xs text-slate-400">
            Sortie, intervenant, remplacement, réunion, événement particulier…
          </p>
        ) : (
          <div className="space-y-2">
            {day.info.events.map((e) => (
              <div key={e.id} className="flex items-center gap-2">
                <select
                  className="input w-auto py-1.5"
                  value={e.type}
                  onChange={(ev) => setEvent(e.id, { type: ev.target.value as DayEvent["type"] })}
                >
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {EVENT_LABELS[t]}
                    </option>
                  ))}
                </select>
                <input
                  className="input flex-1 py-1.5"
                  value={e.note}
                  onChange={(ev) => setEvent(e.id, { note: ev.target.value })}
                  placeholder="Précisions…"
                />
                <button onClick={() => removeEvent(e.id)} className="text-slate-400 hover:text-rose-500">
                  <Trash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function NumField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | null;
  onChange: (v: number | null) => void;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        type="number"
        min={0}
        className="input py-1.5"
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value === "" ? null : Number(e.target.value))
        }
      />
    </div>
  );
}

/** Ajoute ~45 min à un horaire "HH:MM" pour proposer une fin par défaut. */
function addHour(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const total = h * 60 + m + 45;
  const nh = Math.floor((total % (24 * 60)) / 60);
  const nm = total % 60;
  return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
}

/** Copie profonde d'un créneau avec de nouveaux ids. */
function duplicateSlotObj(slot: Slot): Slot {
  return {
    ...slot,
    id: cryptoId(),
    activities: slot.activities.map((a) => ({
      ...a,
      id: cryptoId(),
      deroulement: a.deroulement.map((s) => ({ ...s, id: cryptoId() })),
    })),
  };
}
function cryptoId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}
