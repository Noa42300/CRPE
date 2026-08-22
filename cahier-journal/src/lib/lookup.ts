/**
 * Fonctions de correspondance disciplines / niveaux
 * -------------------------------------------------
 * Retrouvent le libellé et les couleurs à partir des identifiants.
 */
import type { Discipline, NiveauDef, Settings } from "./types";
import { DISCIPLINE_COLORS } from "./defaults";

export function findDiscipline(
  settings: Settings,
  id: string,
): Discipline | undefined {
  return settings.disciplines.find((d) => d.id === id);
}

export function disciplineColor(settings: Settings, id: string) {
  const disc = findDiscipline(settings, id);
  return DISCIPLINE_COLORS[disc?.color ?? "gray"];
}

export function disciplineLabel(settings: Settings, id: string): string {
  return findDiscipline(settings, id)?.label ?? "—";
}

/** Couleur d'un badge de niveau. CE1 bleuté, CE2 verdâtre, classe neutre. */
export function niveauBadgeClass(niveauId: string): string {
  switch (niveauId) {
    case "CE1":
      return "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300";
    case "CE2":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300";
    case "classe":
      return "bg-slate-200 text-slate-700 dark:bg-slate-600/40 dark:text-slate-200";
    default:
      return "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300";
  }
}

export function niveauLabel(settings: Settings, id: string): string {
  const n = settings.niveaux.find((x: NiveauDef) => x.id === id);
  return n?.label ?? id;
}

/** Période contenant une date ISO donnée, ou undefined. */
export function periodForDate(settings: Settings, iso: string) {
  return settings.periods.find((p) => iso >= p.start && iso <= p.end);
}
