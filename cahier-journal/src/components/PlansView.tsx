/**
 * Vue « Programmations » / « Progressions » (double niveau CE1/CE2)
 * ----------------------------------------------------------------
 * - CE1 et CE2 réunis dans la même vue, distingués par un code couleur
 *   (🟦 CE1/commun · 🟪 CE2, ce qui va plus loin).
 * - Zones de texte LIBRES, éditables directement.
 * - Programmation : vue annuelle. Progression : découpée par périodes (P1→P5).
 * - Bascule par discipline + volet latéral rétractable « BO ».
 * - Mode « Vue d'ensemble » : tout le contenu d'une matière en grand format.
 *
 * Les sections de période sont indexées par NUMÉRO (P1…P5), stable sur tous
 * les appareils → le contenu importé/synchronisé retombe au bon endroit.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Plan, PlanKind } from "../lib/types";
import { emptyPlan, planId } from "../lib/factory";
import { disciplineColor } from "../lib/lookup";
import { ecoleWeekNumber, weeksOfPeriod } from "../lib/dates";
import { BO, BO_SOURCE } from "../lib/bo";
import { printArea } from "../lib/print";
import { AutoTextarea, ChevronRight, Printer } from "./ui";

const NIVEAU_STYLE = {
  CE1: {
    label: "CE1 / commun",
    head: "text-sky-700 dark:text-sky-300",
    card: "border-sky-300 bg-sky-50/50 dark:border-sky-500/40 dark:bg-sky-500/10",
    dot: "bg-sky-500",
  },
  CE2: {
    label: "CE2 (va plus loin)",
    head: "text-violet-700 dark:text-violet-300",
    card: "border-violet-300 bg-violet-50/50 dark:border-violet-500/40 dark:bg-violet-500/10",
    dot: "bg-violet-500",
  },
} as const;

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
  const [showBO, setShowBO] = useState(true);
  const [overview, setOverview] = useState(false);

  const id = planId(kind, disciplineId);
  const stored = plans.find((p) => p.id === id);
  const plan: Plan = stored ?? emptyPlan(kind, disciplineId);
  const zones = plan.zones ?? {};

  const setZone = (key: string, text: string) =>
    savePlan({ ...plan, zones: { ...zones, [key]: text } });

  const isProg = kind === "programmation";
  const title = isProg ? "Programmations" : "Progressions";

  // Progression : chaque période est découpée en semaines (clé stable
  // "P<num>:S<index>"), avec un encart « cadre » par période ("P<num>:cadre").
  const progPeriods = settings.periods
    .slice()
    .sort((a, b) => a.number - b.number)
    .map((p) => ({
      num: p.number,
      label: p.name,
      cadreKey: `P${p.number}:cadre`,
      weeks: weeksOfPeriod(p.start, p.end).map((w) => ({
        sectionKey: `P${p.number}:${w.key}`,
        label: `Semaine ${ecoleWeekNumber(w.mondayISO, settings.periods)} · ${w.label}`,
      })),
    }));

  const disc = teaching.find((d) => d.id === disciplineId);

  const Zone = ({
    sectionKey,
    niv,
    big,
  }: {
    sectionKey: string;
    niv: "CE1" | "CE2";
    big?: boolean;
  }) => {
    const style = NIVEAU_STYLE[niv];
    const zoneKey = `${sectionKey}:${niv}`;
    return (
      <div className={`rounded-2xl border p-3 ${style.card}`}>
        <div className={`mb-1.5 flex items-center gap-1.5 text-xs font-bold ${style.head}`}>
          <span className={`h-2 w-2 rounded-full ${style.dot}`} />
          {style.label}
        </div>
        <AutoTextarea
          className={`${big ? "min-h-[180px] text-[13px] leading-relaxed" : "min-h-[140px]"} bg-white/70 dark:bg-slate-900/40`}
          value={zones[zoneKey] ?? ""}
          onChange={(e) => setZone(zoneKey, e.target.value)}
          placeholder={
            isProg
              ? `Programmation ${niv} — ${disc?.label}`
              : `${niv} — notions, objectifs, séquences…`
          }
        />
      </div>
    );
  };

  const CadreZone = ({ zoneKey }: { zoneKey: string }) => (
    <details className="mb-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-3 dark:border-slate-700 dark:bg-slate-800/40">
      <summary className="cursor-pointer text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Cadre & points de vigilance
      </summary>
      <AutoTextarea
        className="mt-2 min-h-[90px] bg-white/70 text-[13px] dark:bg-slate-900/40"
        value={zones[zoneKey] ?? ""}
        onChange={(e) => setZone(zoneKey, e.target.value)}
        placeholder="Cadre de travail, supports, points de vigilance de la période…"
      />
    </details>
  );

  // Rendu d'une semaine (ou section annuelle) : CE1 + CE2.
  const ZonesBlock = ({ sectionKey }: { sectionKey: string }) =>
    overview ? (
      <div className="space-y-3">
        <Zone sectionKey={sectionKey} niv="CE1" big />
        <Zone sectionKey={sectionKey} niv="CE2" big />
      </div>
    ) : (
      <div className="grid gap-3 md:grid-cols-2">
        <Zone sectionKey={sectionKey} niv="CE1" />
        <Zone sectionKey={sectionKey} niv="CE2" />
      </div>
    );

  return (
    <div className={overview ? "" : "lg:flex lg:gap-5"}>
      {/* Volet BO (masqué en vue d'ensemble pour la largeur) */}
      {showBO && !overview && (
        <BOPanel disciplineId={disciplineId} onClose={() => setShowBO(false)} />
      )}

      <div className="min-w-0 flex-1">
        {/* En-tête */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setOverview((v) => !v)}
              className={`btn-outline py-1.5 text-xs ${overview ? "border-ink-500 text-ink-700 dark:text-ink-200" : ""}`}
            >
              {overview ? "🗂️ Vue cartes" : "🔍 Vue d'ensemble"}
            </button>
            {!showBO && !overview && (
              <button onClick={() => setShowBO(true)} className="btn-outline py-1.5 text-xs">
                📖 BO
              </button>
            )}
            <button onClick={() => printArea("print-plan")} className="btn-ghost px-2" title="Imprimer">
              <Printer />
            </button>
          </div>
        </div>

        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          {overview
            ? `Vue complète de « ${disc?.label} » — toute la ${isProg ? "programmation" : "progression"}, en grand.`
            : isProg
              ? "Répartition annuelle par discipline. CE1 et CE2 côte à côte."
              : "Progression par période. CE1 et CE2 côte à côte."}
        </p>

        {/* Bascule discipline */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {teaching.map((d) => {
            const c = disciplineColor(settings, d.id);
            const on = d.id === disciplineId;
            return (
              <button
                key={d.id}
                onClick={() => setDisciplineId(d.id)}
                className={`toggle-chip ${on ? "toggle-chip-on" : "toggle-chip-off"}`}
              >
                <span className={`mr-1 inline-block h-2 w-2 rounded-full ${c.dot}`} />
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Légende */}
        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-sky-400" /> {NIVEAU_STYLE.CE1.label}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-violet-400" /> {NIVEAU_STYLE.CE2.label}
          </span>
        </div>

        {/* Contenu */}
        {isProg ? (
          <div className="space-y-6">
            {progPeriods.map((per) => (
              <section key={per.num}>
                <h2 className="mb-2 border-b border-slate-200 pb-1 text-base font-bold text-slate-800 dark:border-slate-700 dark:text-slate-100">
                  {per.label}
                </h2>
                <ZonesBlock sectionKey={`P${per.num}`} />
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {progPeriods.map((per) => (
              <section key={per.num}>
                <h2 className="mb-2 border-b border-slate-200 pb-1 text-base font-bold text-slate-800 dark:border-slate-700 dark:text-slate-100">
                  {per.label}
                </h2>
                <CadreZone zoneKey={per.cadreKey} />
                <div className="space-y-4">
                  {per.weeks.map((wk) => (
                    <div key={wk.sectionKey}>
                      <h3 className="mb-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {wk.label}
                      </h3>
                      <ZonesBlock sectionKey={wk.sectionKey} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      {/* Impression */}
      <div id="print-plan" className="print-area bg-white p-2 text-[12px] text-black">
        <h1 className="mb-2 border-b-2 border-black pb-1 text-lg font-bold">
          {title} — {disc?.label}
        </h1>
        {isProg
          ? progPeriods.map((per) => (
              <PrintZones key={per.num} zones={zones} sectionKey={`P${per.num}`} label={per.label} />
            ))
          : progPeriods.map((per) => (
              <div key={per.num} className="mb-3">
                <h2 className="font-bold underline">{per.label}</h2>
                {zones[per.cadreKey] && (
                  <div className="whitespace-pre-wrap text-[11px] italic">
                    {zones[per.cadreKey]}
                  </div>
                )}
                {per.weeks.map((wk) => (
                  <PrintZones key={wk.sectionKey} zones={zones} sectionKey={wk.sectionKey} label={wk.label} />
                ))}
              </div>
            ))}
      </div>
    </div>
  );
}

/** Bloc d'impression pour une section (CE1 + CE2). */
function PrintZones({
  zones,
  sectionKey,
  label,
}: {
  zones: Record<string, string>;
  sectionKey: string;
  label: string;
}) {
  const ce1 = zones[`${sectionKey}:CE1`];
  const ce2 = zones[`${sectionKey}:CE2`];
  if (!ce1 && !ce2) return null;
  return (
    <div className="mb-2 print-avoid-break">
      <div className="font-semibold">{label}</div>
      {ce1 && (
        <div>
          <b>CE1/commun :</b> <span className="whitespace-pre-wrap">{ce1}</span>
        </div>
      )}
      {ce2 && (
        <div>
          <b>CE2 :</b> <span className="whitespace-pre-wrap">{ce2}</span>
        </div>
      )}
    </div>
  );
}

function BOPanel({
  disciplineId,
  onClose,
}: {
  disciplineId: string;
  onClose: () => void;
}) {
  const data = BO[disciplineId];
  return (
    <aside className="mb-4 lg:mb-0 lg:sticky lg:top-4 lg:w-72 lg:shrink-0 lg:self-start">
      <div className="card max-h-[70vh] overflow-y-auto p-3 lg:max-h-[calc(100vh-6rem)]">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">
            📖 Textes & Programmes Officiels
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            title="Masquer le volet"
          >
            ✕
          </button>
        </div>
        <p className="mb-3 text-[11px] text-slate-400">Cycle 2 · CE1-CE2</p>

        {!data ? (
          <p className="text-xs text-slate-400">Aucun repère pour cette discipline.</p>
        ) : (
          <div className="space-y-1">
            {data.intro && (
              <p className="mb-2 text-xs italic text-slate-500 dark:text-slate-400">
                {data.intro}
              </p>
            )}
            {data.domaines.map((dom, i) => (
              <details key={i} className="group border-t border-slate-100 py-1.5 dark:border-slate-800" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
                  {dom.titre}
                </summary>
                <ul className="ml-4 mt-1 list-disc space-y-1 text-[12px] leading-snug text-slate-600 dark:text-slate-300">
                  {dom.attendus.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        )}
        <p className="mt-3 border-t border-slate-100 pt-2 text-[10px] leading-tight text-slate-400 dark:border-slate-800">
          {BO_SOURCE}
        </p>
      </div>
    </aside>
  );
}
