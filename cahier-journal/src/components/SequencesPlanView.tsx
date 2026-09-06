/**
 * Séquences — vue d'ensemble par matière (progression alignée)
 * ------------------------------------------------------------
 * Chaque matière → ses séquences → leurs séances (noms + période/jour), dans
 * l'ordre de la programmation. Squelette : les séances détaillées se préparent
 * dans la Bibliothèque et le cahier journal.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { SEQUENCES_PLAN, type PlanSequence } from "../lib/sequencesPlan";
import { disciplineColor } from "../lib/lookup";

export function SequencesPlanView() {
  const { settings } = useStore();
  const plans = useMemo(
    () => SEQUENCES_PLAN.filter((p) => settings.disciplines.some((d) => d.id === p.disciplineId)),
    [settings.disciplines],
  );
  const [sel, setSel] = useState<string>(plans[0]?.disciplineId ?? "francais");
  const current = plans.find((p) => p.disciplineId === sel) ?? plans[0];

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Séquences</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          La progression par matière : chaque séquence et ses séances, dans l'ordre de la
          programmation. On voit d'un coup d'œil ce qui vient, et quand.
        </p>
      </div>

      {/* Sélecteur matière */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {plans.map((p) => {
          const c = disciplineColor(settings, p.disciplineId);
          const on = p.disciplineId === sel;
          return (
            <button
              key={p.disciplineId}
              onClick={() => setSel(p.disciplineId)}
              className={`toggle-chip ${on ? "toggle-chip-on" : "toggle-chip-off"}`}
            >
              <span className={`mr-1 inline-block h-2 w-2 rounded-full ${c.dot}`} />
              {p.label}
              <span className="ml-1 opacity-60">· {p.sequences.length}</span>
            </button>
          );
        })}
      </div>

      {current && (
        <div className="space-y-3">
          <p className="text-[12px] text-slate-400">
            {current.sequences.length} séquence{current.sequences.length > 1 ? "s" : ""} —
            squelette aligné sur la programmation. Le détail des séances se prépare dans la
            Bibliothèque et le cahier journal.
          </p>
          {current.sequences.map((seq, i) => (
            <SequenceCard key={i} seq={seq} disciplineId={current.disciplineId} />
          ))}
        </div>
      )}
    </div>
  );
}

function SequenceCard({ seq, disciplineId }: { seq: PlanSequence; disciplineId: string }) {
  const { settings } = useStore();
  const c = disciplineColor(settings, disciplineId);
  const [open, setOpen] = useState(true);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2 px-3 py-2.5 text-left"
      >
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.dot}`} />
        <span className="min-w-0 flex-1">
          <span className="font-semibold text-slate-800 dark:text-slate-100">{seq.titre}</span>
          {seq.objectif && (
            <span className="mt-0.5 block text-[12px] text-slate-500 dark:text-slate-400">{seq.objectif}</span>
          )}
        </span>
        {seq.periode && (
          <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            {seq.periode}
          </span>
        )}
        <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          {seq.seances.length} séance{seq.seances.length > 1 ? "s" : ""}
        </span>
        <span className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-90" : ""}`}>›</span>
      </button>

      {open && (
        <div className="border-t border-slate-100 px-3 py-2 dark:border-slate-800">
          <ol className="space-y-1">
            {seq.seances.map((s) => (
              <li key={s.n} className="flex items-baseline gap-2 text-[13.5px] text-slate-700 dark:text-slate-200">
                <span className="w-5 shrink-0 text-right font-bold text-slate-400">{s.n}.</span>
                <span className="min-w-0 flex-1">{s.titre}</span>
                {s.quand && (
                  <span className="shrink-0 rounded-full bg-ink-50 px-2 py-0.5 text-[11px] font-semibold text-ink-700 dark:bg-ink-500/15 dark:text-ink-200">
                    {s.quand}
                  </span>
                )}
              </li>
            ))}
          </ol>
          {seq.note && (
            <p className="mt-2 border-t border-dashed border-slate-200 pt-1.5 text-[11.5px] italic text-slate-500 dark:border-slate-700 dark:text-slate-400">
              {seq.note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
