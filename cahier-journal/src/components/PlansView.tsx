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
import {
  PERIODES,
  PROG_MATHS,
  REPART_FRANCAIS,
  GRAPHEMO,
  EDL_SOMMAIRE,
  programmationTexte,
} from "../lib/programmations";
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
  const hasRef = isProg && (disciplineId === "francais" || disciplineId === "maths");

  // Pré-remplit les zones P1→P5 depuis la programmation officielle intégrée.
  const prefillFromRef = () => {
    if (
      !window.confirm(
        "Pré-remplir les zones P1 → P5 de cette matière avec ta programmation officielle ? Le contenu actuel de ces zones sera remplacé.",
      )
    )
      return;
    const next = { ...zones };
    for (const per of PERIODES) {
      if (disciplineId === "maths") {
        next[`${per}:CE1`] = programmationTexte("maths", per, "CE1");
        next[`${per}:CE2`] = programmationTexte("maths", per, "CE2");
      } else {
        next[`${per}:CE1`] = programmationTexte("francais", per, "CE1");
      }
    }
    savePlan({ ...plan, zones: next });
  };

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

        {/* Référence : programmation annuelle officielle intégrée */}
        {hasRef && (
          <details className="group mb-5 rounded-2xl border border-ink-200 bg-ink-50/40 p-3 dark:border-ink-500/40 dark:bg-ink-500/10" open>
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-bold text-ink-800 dark:text-ink-200">
              <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
              📊 Ma programmation annuelle — {disc?.label} (référence intégrée)
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); prefillFromRef(); }}
                className="btn-primary ml-auto py-1 text-xs"
                title="Recopier cette programmation dans mes zones éditables P1→P5"
              >
                ✍️ Pré-remplir mes zones
              </button>
            </summary>
            <div className="mt-3">
              <ProgrammationReference disciplineId={disciplineId} />
            </div>
          </details>
        )}

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

/** Affichage lecture seule de la programmation annuelle officielle intégrée. */
function ProgrammationReference({ disciplineId }: { disciplineId: string }) {
  const DomList = ({ dom }: { dom: Record<string, string[]> }) => (
    <div className="space-y-2">
      {Object.entries(dom)
        .filter(([, items]) => items.length > 0)
        .map(([d, items]) => (
          <div key={d}>
            <div className="text-[11px] font-bold uppercase tracking-wide text-ink-600 dark:text-ink-300">{d}</div>
            <ul className="ml-4 list-disc text-[13px] leading-snug text-slate-700 dark:text-slate-200">
              {items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        ))}
    </div>
  );

  if (disciplineId === "maths") {
    return (
      <div className="space-y-3">
        {PERIODES.map((per) => (
          <details key={per} className="rounded-xl border border-slate-200 bg-white/70 p-2.5 dark:border-slate-700 dark:bg-slate-900/40" open={per === "P1"}>
            <summary className="cursor-pointer text-sm font-bold text-slate-800 dark:text-slate-100">{per}</summary>
            <div className="mt-2 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-sky-300 bg-sky-50/50 p-2 dark:border-sky-500/40 dark:bg-sky-500/10">
                <div className="mb-1 text-xs font-bold text-sky-700 dark:text-sky-300">CE1</div>
                <DomList dom={PROG_MATHS.CE1[per]} />
              </div>
              <div className="rounded-lg border border-violet-300 bg-violet-50/50 p-2 dark:border-violet-500/40 dark:bg-violet-500/10">
                <div className="mb-1 text-xs font-bold text-violet-700 dark:text-violet-300">CE2</div>
                <DomList dom={PROG_MATHS.CE2[per]} />
              </div>
            </div>
          </details>
        ))}
        <p className="text-[11px] text-slate-400">Méthode Tandem — CE1 et CE2 en alternance (leçon guidée / travail autonome).</p>
      </div>
    );
  }

  // Français : répartition annuelle + dictées Graphémo + sommaire EDL.
  return (
    <div className="space-y-3">
      {PERIODES.map((per) => (
        <details key={per} className="rounded-xl border border-slate-200 bg-white/70 p-2.5 dark:border-slate-700 dark:bg-slate-900/40" open={per === "P1"}>
          <summary className="cursor-pointer text-sm font-bold text-slate-800 dark:text-slate-100">{per}</summary>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            <DomList dom={REPART_FRANCAIS[per]} />
            <div className="rounded-lg border border-teal-300 bg-teal-50/50 p-2 dark:border-teal-500/40 dark:bg-teal-500/10">
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-teal-700 dark:text-teal-300">Dictées (Graphémo)</div>
              <ul className="ml-4 list-disc text-[13px] leading-snug text-slate-700 dark:text-slate-200">
                {GRAPHEMO[per].map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>
        </details>
      ))}
      <details className="rounded-xl border border-slate-200 bg-white/70 p-2.5 dark:border-slate-700 dark:bg-slate-900/40">
        <summary className="cursor-pointer text-sm font-bold text-slate-800 dark:text-slate-100">
          Sommaire « 1, 2, 3… Étude de la langue »
        </summary>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {Object.entries(EDL_SOMMAIRE).map(([dom, items]) => (
            <div key={dom}>
              <div className="text-[11px] font-bold uppercase tracking-wide text-ink-600 dark:text-ink-300">{dom}</div>
              <ul className="ml-4 list-disc text-[12.5px] leading-snug text-slate-700 dark:text-slate-200">
                {items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </details>
      <p className="text-[11px] text-slate-400">Phonologie / lecture : GraphoGame. Dictées : Graphémo. Étude de la langue : « 1, 2, 3… ».</p>
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
