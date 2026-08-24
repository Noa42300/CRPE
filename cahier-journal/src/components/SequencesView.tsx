/**
 * Vue « Bibliothèque »
 * --------------------
 * Créer des séquences réutilisables (regroupant des séances) que l'on peut
 * ensuite POSER sur un jour du cahier journal ou INSÉRER dans une progression.
 * Contenu 100 % pédagogique (aucune donnée élève).
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Activity, Sequence } from "../lib/types";
import {
  cloneActivity,
  emptyActivity,
  emptyDay,
  emptyPlan,
  emptySequence,
  planId,
} from "../lib/factory";
import { uid, todayISO, weeksOfPeriod } from "../lib/dates";
import { disciplineColor, niveauBadgeClass, niveauLabel } from "../lib/lookup";
import { ActivityEditor } from "./ActivityEditor";
import { AutoTextarea, ChevronRight, Plus, Trash } from "./ui";

export function SequencesView() {
  const { settings, sequences, saveSequence, removeSequence } = useStore();
  const teaching = useMemo(
    () =>
      settings.disciplines.filter(
        (d) => !["recreation", "cantine"].includes(d.id),
      ),
    [settings.disciplines],
  );
  const [filter, setFilter] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const list = sequences
    .filter((s) => filter === "all" || s.disciplineId === filter)
    .sort((a, b) => b.updatedAt - a.updatedAt);

  const createSequence = () => {
    const disc = filter !== "all" ? filter : teaching[0]?.id ?? "";
    const seq = emptySequence(disc);
    saveSequence(seq);
    setOpenId(seq.id);
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">
          Bibliothèque
        </h1>
        <button onClick={createSequence} className="btn-primary">
          <Plus /> Nouvelle séquence
        </button>
      </div>
      <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
        Crée des séquences réutilisables. Chaque séance peut être posée sur un
        jour ou la séquence insérée dans une progression.
      </p>

      {/* Filtre discipline */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        <button
          onClick={() => setFilter("all")}
          className={`toggle-chip ${filter === "all" ? "toggle-chip-on" : "toggle-chip-off"}`}
        >
          Toutes
        </button>
        {teaching.map((d) => {
          const c = disciplineColor(settings, d.id);
          return (
            <button
              key={d.id}
              onClick={() => setFilter(d.id)}
              className={`toggle-chip ${filter === d.id ? "toggle-chip-on" : "toggle-chip-off"}`}
            >
              <span className={`mr-1 inline-block h-2 w-2 rounded-full ${c.dot}`} />
              {d.label}
            </button>
          );
        })}
      </div>

      {list.length === 0 ? (
        <div className="card flex flex-col items-center gap-3 px-6 py-10 text-center">
          <div className="text-3xl">📔</div>
          <p className="max-w-sm text-sm text-stone-500 dark:text-stone-400">
            Aucune séquence pour l'instant. Crée ta première séquence
            réutilisable.
          </p>
          <button onClick={createSequence} className="btn-primary">
            <Plus /> Nouvelle séquence
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {list.map((seq) => (
            <SequenceCard
              key={seq.id}
              seq={seq}
              open={openId === seq.id}
              onToggle={() => setOpenId(openId === seq.id ? null : seq.id)}
              onChange={saveSequence}
              onRemove={() => {
                if (window.confirm("Supprimer cette séquence ?")) {
                  void removeSequence(seq.id);
                  setOpenId(null);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SequenceCard({
  seq,
  open,
  onToggle,
  onChange,
  onRemove,
}: {
  seq: Sequence;
  open: boolean;
  onToggle: () => void;
  onChange: (s: Sequence) => void;
  onRemove: () => void;
}) {
  const { settings } = useStore();
  const color = disciplineColor(settings, seq.disciplineId);

  const set = <K extends keyof Sequence>(key: K, value: Sequence[K]) =>
    onChange({ ...seq, [key]: value });

  const toggleNiveau = (id: string) =>
    set(
      "niveaux",
      seq.niveaux.includes(id)
        ? seq.niveaux.filter((n) => n !== id)
        : [...seq.niveaux, id],
    );

  const setSeance = (id: string, next: Activity) =>
    set("seances", seq.seances.map((a) => (a.id === id ? next : a)));
  const addSeance = () =>
    set("seances", [...seq.seances, emptyActivity(seq.niveaux)]);
  const removeSeance = (id: string) =>
    set("seances", seq.seances.filter((a) => a.id !== id));

  return (
    <div className="card overflow-hidden">
      <div className="flex">
        <div className={`w-1.5 shrink-0 ${color.bar}`} />
        <button onClick={onToggle} className="flex flex-1 items-start gap-3 px-4 py-3 text-left">
          <ChevronRight className={`mt-1 h-4 w-4 shrink-0 text-stone-400 transition-transform ${open ? "rotate-90" : ""}`} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className={`niveau-badge ${color.chip}`}>
                {settings.disciplines.find((d) => d.id === seq.disciplineId)?.label}
              </span>
              {seq.niveaux.map((n) => (
                <span key={n} className={`niveau-badge ${niveauBadgeClass(n)}`}>
                  {niveauLabel(settings, n)}
                </span>
              ))}
              <span className="text-[11px] text-stone-400">
                {seq.seances.length} séance{seq.seances.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="mt-1 font-semibold text-stone-800 dark:text-stone-100">
              {seq.title || <span className="italic text-stone-400">Séquence sans titre</span>}
            </div>
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-100 px-4 py-4 dark:border-stone-800">
          {/* Réglages de la séquence */}
          <div className="mb-4 space-y-3">
            <input
              className="input font-medium"
              placeholder="Titre de la séquence — ex : Le groupe nominal"
              value={seq.title}
              onChange={(e) => set("title", e.target.value)}
            />
            <div className="flex flex-wrap items-end gap-3">
              <div>
                <label className="label">Discipline</label>
                <select
                  className="input w-auto py-1.5"
                  value={seq.disciplineId}
                  onChange={(e) => set("disciplineId", e.target.value)}
                >
                  {settings.disciplines.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Niveaux</label>
                <div className="flex flex-wrap gap-1.5">
                  {settings.niveaux.map((n) => {
                    const on = seq.niveaux.includes(n.id);
                    return (
                      <button
                        key={n.id}
                        type="button"
                        onClick={() => toggleNiveau(n.id)}
                        className={`niveau-badge transition ${on ? niveauBadgeClass(n.id) : "bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500"}`}
                      >
                        {n.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <button onClick={onRemove} className="btn-ghost ml-auto py-1.5 text-xs text-rose-500">
                <Trash className="h-4 w-4" /> Supprimer la séquence
              </button>
            </div>
            <div>
              <label className="label">Objectif de la séquence</label>
              <AutoTextarea
                value={seq.objectif}
                onChange={(e) => set("objectif", e.target.value)}
                placeholder="Ce que la séquence vise globalement"
              />
            </div>
            <InsertIntoProgression seq={seq} />
          </div>

          {/* Séances */}
          <div className="space-y-4">
            {seq.seances.map((a, i) => (
              <div key={a.id} className="rounded-xl border border-stone-200 p-3 dark:border-stone-700">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                    Séance {i + 1}
                  </span>
                  <button onClick={() => removeSeance(a.id)} className="text-stone-400 hover:text-rose-500" title="Supprimer la séance">
                    <Trash />
                  </button>
                </div>
                <ActivityEditor
                  settings={settings}
                  activity={a}
                  onChange={(next) => setSeance(a.id, next)}
                />
                <PlaceOnDay seq={seq} seance={a} />
              </div>
            ))}
          </div>

          <button onClick={addSeance} className="btn-outline mt-3 w-full py-1.5 text-xs">
            <Plus className="h-3.5 w-3.5" /> Ajouter une séance
          </button>
        </div>
      )}
    </div>
  );
}

/** Poser une séance sur un jour : crée un créneau dans la journée choisie. */
function PlaceOnDay({ seq, seance }: { seq: Sequence; seance: Activity }) {
  const { settings, daysMap, saveDay } = useStore();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(todayISO());
  const [start, setStart] = useState("08:30");
  const [end, setEnd] = useState("09:15");
  const [done, setDone] = useState(false);

  const place = () => {
    const day = daysMap[date] ?? emptyDay(date, settings.classe.effectif);
    const slot = {
      id: uid(),
      start,
      end,
      disciplineId: seq.disciplineId,
      activities: [cloneActivity(seance)],
    };
    saveDay({ ...day, slots: [...day.slots, slot] });
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setOpen(false);
    }, 1500);
  };

  return (
    <div className="mt-2 border-t border-stone-100 pt-2 dark:border-stone-800">
      {!open ? (
        <button onClick={() => setOpen(true)} className="btn-ghost py-1 text-xs">
          📅 Poser cette séance sur un jour…
        </button>
      ) : done ? (
        <p className="py-1 text-xs text-emerald-600 dark:text-emerald-400">
          ✓ Séance ajoutée au {date}.
        </p>
      ) : (
        <div className="flex flex-wrap items-center gap-2">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input w-auto py-1" />
          <input type="time" value={start} onChange={(e) => setStart(e.target.value)} className="input w-28 py-1" />
          <input type="time" value={end} onChange={(e) => setEnd(e.target.value)} className="input w-28 py-1" />
          <button onClick={place} className="btn-primary py-1 text-xs">Poser</button>
          <button onClick={() => setOpen(false)} className="btn-ghost py-1 text-xs">Annuler</button>
        </div>
      )}
    </div>
  );
}

/** Insérer la séquence (référence) dans une progression : période + semaine. */
function InsertIntoProgression({ seq }: { seq: Sequence }) {
  const { settings, plans, savePlan } = useStore();
  const [open, setOpen] = useState(false);
  const [periodNum, setPeriodNum] = useState(
    settings.periods.slice().sort((a, b) => a.number - b.number)[0]?.number ?? 1,
  );
  const period = settings.periods.find((p) => p.number === periodNum);
  const weeks = period ? weeksOfPeriod(period.start, period.end) : [];
  const [weekKey, setWeekKey] = useState("S1");
  const [done, setDone] = useState(false);

  const insert = () => {
    const id = planId("progression", seq.disciplineId);
    const plan = plans.find((p) => p.id === id) ?? emptyPlan("progression", seq.disciplineId);
    const line = `• [Séquence] ${seq.title || "Sans titre"}${seq.objectif ? " — " + seq.objectif : ""}`;
    const targets = seq.niveaux.includes("CE2") && !seq.niveaux.includes("CE1") && !seq.niveaux.includes("classe")
      ? ["CE2"]
      : seq.niveaux.includes("CE2")
        ? ["CE1", "CE2"]
        : ["CE1"];
    const zones = { ...plan.zones };
    for (const niv of targets) {
      const key = `P${periodNum}:${weekKey}:${niv}`;
      zones[key] = zones[key] ? `${zones[key]}\n${line}` : line;
    }
    savePlan({ ...plan, zones });
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setOpen(false);
    }, 1600);
  };

  return (
    <div>
      {!open ? (
        <button onClick={() => setOpen(true)} className="btn-outline py-1 text-xs">
          📈 Insérer dans une progression…
        </button>
      ) : done ? (
        <p className="text-xs text-emerald-600 dark:text-emerald-400">✓ Inséré dans la progression.</p>
      ) : (
        <div className="flex flex-wrap items-center gap-2">
          <select value={periodNum} onChange={(e) => setPeriodNum(Number(e.target.value))} className="input w-auto py-1">
            {settings.periods.slice().sort((a, b) => a.number - b.number).map((p) => (
              <option key={p.id} value={p.number}>{p.name}</option>
            ))}
          </select>
          <select value={weekKey} onChange={(e) => setWeekKey(e.target.value)} className="input w-auto py-1">
            {weeks.map((w) => (
              <option key={w.key} value={w.key}>Semaine — {w.label}</option>
            ))}
          </select>
          <button onClick={insert} className="btn-primary py-1 text-xs">Insérer</button>
          <button onClick={() => setOpen(false)} className="btn-ghost py-1 text-xs">Annuler</button>
        </div>
      )}
    </div>
  );
}
