/**
 * Vue « Réunion / Administratif » — check-list
 * --------------------------------------------
 * Je note un événement daté : un papier à donner, une réunion, une tâche à ne
 * pas oublier. Chaque rappel apparaît ensuite tout seul dans l'EDT du jour
 * concerné, EN DEHORS des heures de classe (sauf si je précise une heure).
 * 100 % local : rien n'est publié.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Reminder } from "../lib/types";
import { cap, formatLong, todayISO, uid } from "../lib/dates";
import { Plus, Trash } from "./ui";

const KINDS: { id: Reminder["kind"]; label: string; emoji: string }[] = [
  { id: "papier", label: "Papier à donner", emoji: "📄" },
  { id: "reunion", label: "Réunion", emoji: "👥" },
  { id: "tache", label: "Tâche", emoji: "✅" },
  { id: "autre", label: "Autre", emoji: "📌" },
];
export const KIND_EMOJI: Record<Reminder["kind"], string> = {
  papier: "📄",
  reunion: "👥",
  tache: "✅",
  autre: "📌",
};

function sortRem(a: Reminder, b: Reminder): number {
  if (a.date !== b.date) return a.date < b.date ? -1 : 1;
  return (a.time ?? "99:99").localeCompare(b.time ?? "99:99");
}

export function AdminView() {
  const { reminders, saveReminder, removeReminder } = useStore();

  const [date, setDate] = useState(todayISO());
  const [time, setTime] = useState("");
  const [kind, setKind] = useState<Reminder["kind"]>("papier");
  const [text, setText] = useState("");

  const add = () => {
    const t = text.trim();
    if (!t) return;
    const now = Date.now();
    void saveReminder({
      id: uid(),
      date,
      time: time || undefined,
      text: t,
      kind,
      done: false,
      createdAt: now,
      updatedAt: now,
    });
    setText("");
    setTime("");
  };

  const toggle = (r: Reminder) => void saveReminder({ ...r, done: !r.done });

  const { todo, done } = useMemo(() => {
    const sorted = [...reminders].sort(sortRem);
    return {
      todo: sorted.filter((r) => !r.done),
      done: sorted.filter((r) => r.done).reverse(),
    };
  }, [reminders]);

  const today = todayISO();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">Réunion / Administratif</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          Note un papier à donner, une réunion, une tâche… avec sa date. Il
          apparaîtra tout seul dans l'<b>EDT</b> du jour, en dehors des heures de
          classe (ou à l'heure précise si tu en donnes une), pour ne rien oublier.
        </p>
      </div>

      {/* Formulaire d'ajout */}
      <div className="card space-y-3 p-4">
        <div className="flex flex-wrap gap-2">
          <div>
            <label className="label">Date</label>
            <input type="date" value={date} onChange={(e) => e.target.value && setDate(e.target.value)} className="input w-auto px-2 py-1.5 text-sm" />
          </div>
          <div>
            <label className="label">Heure <span className="font-normal text-stone-400">(facultatif)</span></label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="input w-auto px-2 py-1.5 text-sm" />
          </div>
          <div className="min-w-[8rem]">
            <label className="label">Type</label>
            <select value={kind} onChange={(e) => setKind(e.target.value as Reminder["kind"])} className="input w-auto px-2 py-1.5 text-sm">
              {KINDS.map((k) => (
                <option key={k.id} value={k.id}>{k.emoji} {k.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="label">À faire / papier à donner</label>
            <input
              className="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") add(); }}
              placeholder="ex : Donner le mot pour la piscine ; réunion d'équipe ; commander les albums…"
            />
          </div>
          <button onClick={add} className="btn-primary py-2"><Plus className="h-4 w-4" /> Valider</button>
        </div>
      </div>

      {/* À faire */}
      <section>
        <h2 className="mb-2 text-sm font-bold text-stone-700 dark:text-stone-200">
          À faire ({todo.length})
        </h2>
        {todo.length === 0 ? (
          <p className="text-sm text-stone-400">Rien à noter pour le moment.</p>
        ) : (
          <div className="space-y-1.5">
            {todo.map((r) => (
              <ReminderRow key={r.id} r={r} today={today} onToggle={() => toggle(r)} onRemove={() => void removeReminder(r.id)} />
            ))}
          </div>
        )}
      </section>

      {/* Fait */}
      {done.length > 0 && (
        <details className="group">
          <summary className="cursor-pointer list-none text-sm font-semibold text-stone-500 dark:text-stone-400">
            <span className="transition-transform group-open:rotate-90">▸</span> Fait ({done.length})
          </summary>
          <div className="mt-2 space-y-1.5">
            {done.map((r) => (
              <ReminderRow key={r.id} r={r} today={today} onToggle={() => toggle(r)} onRemove={() => void removeReminder(r.id)} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function ReminderRow({
  r,
  today,
  onToggle,
  onRemove,
}: {
  r: Reminder;
  today: string;
  onToggle: () => void;
  onRemove: () => void;
}) {
  const overdue = !r.done && r.date < today;
  return (
    <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900/40">
      <input type="checkbox" checked={r.done} onChange={onToggle} className="h-4 w-4 shrink-0 accent-ink-600" />
      <span className="shrink-0 text-base">{KIND_EMOJI[r.kind]}</span>
      <div className="min-w-0 flex-1">
        <div className={`truncate text-sm ${r.done ? "text-stone-400 line-through" : "font-medium text-stone-800 dark:text-stone-100"}`}>
          {r.text}
        </div>
        <div className={`text-[11px] ${overdue ? "font-semibold text-rose-500" : "text-stone-400"}`}>
          {cap(formatLong(r.date))}{r.time ? ` · ${r.time}` : " · hors classe"}{overdue ? " · en retard" : ""}
        </div>
      </div>
      <button onClick={onRemove} className="shrink-0 text-stone-400 hover:text-rose-500" title="Supprimer"><Trash /></button>
    </div>
  );
}
