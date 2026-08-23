/**
 * Vue « Programmations » / « Progressions »
 * ----------------------------------------
 * Planification annuelle par discipline × niveau. Documents purement
 * pédagogiques (aucune donnée élève).
 *
 * - Programmation : répartition sur l'année (période → domaine → séquence).
 * - Progression   : suite ordonnée des notions, avec statut prévu/fait.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Plan, PlanItem, PlanKind, PlanStatus } from "../lib/types";
import { emptyPlan, emptyPlanItem, planId } from "../lib/factory";
import { disciplineColor } from "../lib/lookup";
import { printArea } from "../lib/print";
import { AutoTextarea, ChevronDown, ChevronUp, Plus, Printer, Trash } from "./ui";

const STATUS_META: Record<PlanStatus, { label: string; chip: string }> = {
  prevu: {
    label: "Prévu",
    chip: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
  },
  encours: {
    label: "En cours",
    chip: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  },
  fait: {
    label: "Fait",
    chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
};

export function PlansView({ kind }: { kind: PlanKind }) {
  const { settings, plans, savePlan } = useStore();
  const teaching = useMemo(
    () =>
      settings.disciplines.filter(
        (d) => !["recreation", "cantine"].includes(d.id),
      ),
    [settings.disciplines],
  );

  const [disciplineId, setDisciplineId] = useState(teaching[0]?.id ?? "");
  const [niveauId, setNiveauId] = useState(settings.niveaux[0]?.id ?? "CE1");

  const id = planId(kind, disciplineId, niveauId);
  const stored = plans.find((p) => p.id === id);
  const plan: Plan = stored ?? emptyPlan(kind, disciplineId, niveauId);
  const items = plan.items.slice().sort((a, b) => a.order - b.order);
  const color = disciplineColor(settings, disciplineId);

  const commit = (nextItems: PlanItem[]) =>
    savePlan({ ...plan, items: nextItems.map((it, i) => ({ ...it, order: i })) });

  const addItem = () => commit([...items, emptyPlanItem(items.length)]);
  const setItem = (itemId: string, patch: Partial<PlanItem>) =>
    commit(items.map((it) => (it.id === itemId ? { ...it, ...patch } : it)));
  const removeItem = (itemId: string) =>
    commit(items.filter((it) => it.id !== itemId));
  const move = (index: number, dir: -1 | 1) => {
    const j = index + dir;
    if (j < 0 || j >= items.length) return;
    const next = items.slice();
    [next[index], next[j]] = [next[j], next[index]];
    commit(next);
  };

  const isProg = kind === "programmation";
  const title = isProg ? "Programmations" : "Progressions";
  const itemLabel = isProg ? "Séquence" : "Notion";

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h1>
        <button
          onClick={() => printArea("print-plan")}
          className="btn-ghost px-2"
          title="Imprimer"
        >
          <Printer />
        </button>
      </div>

      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        {isProg
          ? "Ce que tu comptes traiter dans l'année, par période. Document pédagogique — aucune donnée élève."
          : "La suite ordonnée des notions et leur avancement. Document pédagogique — aucune donnée élève."}
      </p>

      {/* Filtres discipline / niveau */}
      <div className="mb-4 flex flex-wrap gap-3">
        <div>
          <label className="label">Discipline</label>
          <select
            className="input w-auto"
            value={disciplineId}
            onChange={(e) => setDisciplineId(e.target.value)}
          >
            {teaching.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Niveau</label>
          <select
            className="input w-auto"
            value={niveauId}
            onChange={(e) => setNiveauId(e.target.value)}
          >
            {settings.niveaux.map((n) => (
              <option key={n.id} value={n.id}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* En-tête coloré */}
      <div className="mb-3 flex items-center gap-2">
        <span className={`h-3 w-3 rounded-full ${color.dot}`} />
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          {teaching.find((d) => d.id === disciplineId)?.label} ·{" "}
          {settings.niveaux.find((n) => n.id === niveauId)?.label}
        </span>
      </div>

      {items.length === 0 ? (
        <div className="card flex flex-col items-center gap-3 px-6 py-10 text-center">
          <div className="text-3xl">{isProg ? "📚" : "📈"}</div>
          <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
            Aucune ligne pour l'instant. Ajoute {isProg ? "une séquence" : "une notion"} pour
            commencer ta {isProg ? "programmation" : "progression"}.
          </p>
          <button onClick={addItem} className="btn-primary">
            <Plus /> Ajouter {isProg ? "une séquence" : "une notion"}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((it, i) => (
            <div key={it.id} className="card p-3">
              <div className="flex items-start gap-2">
                {/* Réordonner */}
                <div className="flex flex-col text-slate-400">
                  <button onClick={() => move(i, -1)} disabled={i === 0} className="hover:text-slate-700 disabled:opacity-30">
                    <ChevronUp />
                  </button>
                  <span className="text-center text-xs font-semibold">{i + 1}</span>
                  <button onClick={() => move(i, 1)} disabled={i === items.length - 1} className="hover:text-slate-700 disabled:opacity-30">
                    <ChevronDown />
                  </button>
                </div>

                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <select
                      className="input w-auto py-1.5 text-sm"
                      value={it.periodeId}
                      onChange={(e) => setItem(it.id, { periodeId: e.target.value })}
                    >
                      <option value="">Période…</option>
                      {settings.periods
                        .slice()
                        .sort((a, b) => a.number - b.number)
                        .map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                    </select>
                    <input
                      className="input w-40 py-1.5 text-sm"
                      value={it.domaine}
                      onChange={(e) => setItem(it.id, { domaine: e.target.value })}
                      placeholder="Domaine (ex : Grammaire)"
                    />
                    <select
                      className={`input w-auto py-1.5 text-sm font-medium`}
                      value={it.statut}
                      onChange={(e) =>
                        setItem(it.id, { statut: e.target.value as PlanStatus })
                      }
                    >
                      {(["prevu", "encours", "fait"] as PlanStatus[]).map((s) => (
                        <option key={s} value={s}>
                          {STATUS_META[s].label}
                        </option>
                      ))}
                    </select>
                    <span className={`niveau-badge ${STATUS_META[it.statut].chip}`}>
                      {STATUS_META[it.statut].label}
                    </span>
                  </div>
                  <input
                    className="input py-1.5 font-medium"
                    value={it.intitule}
                    onChange={(e) => setItem(it.id, { intitule: e.target.value })}
                    placeholder={`${itemLabel} — ex : ${isProg ? "Le groupe nominal" : "Reconnaître le verbe"}`}
                  />
                  <AutoTextarea
                    className="text-[13px]"
                    value={it.objectif}
                    onChange={(e) => setItem(it.id, { objectif: e.target.value })}
                    placeholder="Objectif / compétence (facultatif)"
                  />
                </div>

                <button
                  onClick={() => removeItem(it.id)}
                  className="mt-1 text-slate-400 hover:text-rose-500"
                  title="Supprimer la ligne"
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addItem} className="btn-outline w-full py-2">
            <Plus /> Ajouter {isProg ? "une séquence" : "une notion"}
          </button>
        </div>
      )}

      {/* Impression */}
      <div id="print-plan" className="print-area bg-white p-2 text-[12px] text-black">
        <h1 className="mb-2 border-b-2 border-black pb-1 text-lg font-bold">
          {title} — {teaching.find((d) => d.id === disciplineId)?.label} ·{" "}
          {settings.niveaux.find((n) => n.id === niveauId)?.label}
        </h1>
        <table className="w-full border-collapse text-[11px]">
          <thead>
            <tr className="border-b border-black text-left">
              <th className="py-1 pr-2">#</th>
              <th className="py-1 pr-2">Période</th>
              <th className="py-1 pr-2">Domaine</th>
              <th className="py-1 pr-2">{itemLabel}</th>
              <th className="py-1 pr-2">Objectif</th>
              <th className="py-1">Statut</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={it.id} className="border-b border-slate-300 align-top">
                <td className="py-1 pr-2">{i + 1}</td>
                <td className="py-1 pr-2">
                  {settings.periods.find((p) => p.id === it.periodeId)?.name ?? ""}
                </td>
                <td className="py-1 pr-2">{it.domaine}</td>
                <td className="py-1 pr-2 font-semibold">{it.intitule}</td>
                <td className="py-1 pr-2">{it.objectif}</td>
                <td className="py-1">{STATUS_META[it.statut].label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
