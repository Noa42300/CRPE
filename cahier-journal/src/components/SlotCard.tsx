/**
 * Carte d'un créneau horaire
 * --------------------------
 * Affiche un résumé lisible en un coup d'œil (horaire, discipline, niveaux,
 * intitulés). Se déplie pour éditer le détail. Gère le double niveau :
 * plusieurs activités dans un même créneau (ex : CE1 dirigé / CE2 autonomie).
 */
import { useState } from "react";
import type { Settings, Slot } from "../lib/types";
import { disciplineColor } from "../lib/lookup";
import { niveauBadgeClass, niveauLabel } from "../lib/lookup";
import { emptyActivity } from "../lib/factory";
import { ActivityEditor } from "./ActivityEditor";
import { ChevronRight, Copy, Plus, Trash } from "./ui";

export function SlotCard({
  settings,
  slot,
  onChange,
  onRemove,
  onDuplicate,
  date,
}: {
  settings: Settings;
  slot: Slot;
  onChange: (s: Slot) => void;
  onRemove: () => void;
  onDuplicate: () => void;
  date?: string;
}) {
  const [open, setOpen] = useState(false);
  const color = disciplineColor(settings, slot.disciplineId);

  const setActivity = (id: string, next: Slot["activities"][number]) =>
    onChange({
      ...slot,
      activities: slot.activities.map((a) => (a.id === id ? next : a)),
    });

  const addVariant = () =>
    onChange({ ...slot, activities: [...slot.activities, emptyActivity(["CE2"])] });

  const removeActivity = (id: string) =>
    onChange({
      ...slot,
      activities: slot.activities.filter((a) => a.id !== id),
    });

  return (
    <div className="card overflow-hidden print-avoid-break">
      {/* Barre colorée + en-tête cliquable */}
      <div className="flex">
        <div className={`w-1.5 shrink-0 ${color.bar}`} />
        <div className="min-w-0 flex-1">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-start gap-3 px-4 py-3 text-left"
          >
            <ChevronRight
              className={`mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-90" : ""}`}
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {slot.start}–{slot.end}
                </span>
                <span className={`niveau-badge ${color.chip}`}>
                  {disciplineName(settings, slot.disciplineId)}
                </span>
              </div>

              {/* Résumé des activités */}
              <div className="mt-1.5 space-y-1">
                {slot.activities.map((a) => (
                  <div key={a.id} className="flex flex-wrap items-center gap-1.5">
                    {a.niveaux.map((nid) => (
                      <span key={nid} className={`niveau-badge ${niveauBadgeClass(nid)}`}>
                        {niveauLabel(settings, nid)}
                      </span>
                    ))}
                    <span className="text-sm text-slate-700 dark:text-slate-200">
                      {a.title || (
                        <span className="italic text-slate-400">Séance à compléter…</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Corps déplié */}
      {open && (
        <div className="border-t border-slate-100 px-4 py-4 dark:border-slate-800">
          {/* Réglages du créneau */}
          <div className="mb-4 flex flex-wrap items-end gap-3">
            <div>
              <label className="label">Début</label>
              <input
                type="time"
                className="input w-32"
                value={slot.start}
                onChange={(e) => onChange({ ...slot, start: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Fin</label>
              <input
                type="time"
                className="input w-32"
                value={slot.end}
                onChange={(e) => onChange({ ...slot, end: e.target.value })}
              />
            </div>
            <div className="min-w-[10rem] flex-1">
              <label className="label">Discipline / domaine</label>
              <select
                className="input"
                value={slot.disciplineId}
                onChange={(e) => onChange({ ...slot, disciplineId: e.target.value })}
              >
                {settings.disciplines
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.label}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex gap-1">
              <button type="button" onClick={onDuplicate} className="btn-ghost px-2" title="Copier le créneau">
                <Copy />
              </button>
              <button type="button" onClick={onRemove} className="btn-ghost px-2 text-rose-500" title="Supprimer le créneau">
                <Trash />
              </button>
            </div>
          </div>

          {/* Activités (1 = commune, 2+ = double niveau) */}
          <div className="space-y-4">
            {slot.activities.map((a, i) => (
              <div
                key={a.id}
                className={
                  slot.activities.length > 1
                    ? "rounded-xl border border-slate-200 p-3 dark:border-slate-700"
                    : ""
                }
              >
                {slot.activities.length > 1 && (
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Activité {i + 1}
                  </div>
                )}
                <ActivityEditor
                  settings={settings}
                  activity={a}
                  onChange={(next) => setActivity(a.id, next)}
                  onRemove={() => removeActivity(a.id)}
                  showRemove={slot.activities.length > 1}
                  date={date}
                  disciplineId={slot.disciplineId}
                  start={slot.start}
                  end={slot.end}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addVariant}
            className="btn-outline mt-3 w-full py-1.5 text-xs"
          >
            <Plus className="h-3.5 w-3.5" /> Ajouter une activité par niveau (double niveau CE1 / CE2)
          </button>
        </div>
      )}
    </div>
  );
}

function disciplineName(settings: Settings, id: string): string {
  return settings.disciplines.find((d) => d.id === id)?.label ?? "—";
}
