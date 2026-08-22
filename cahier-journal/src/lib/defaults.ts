/**
 * Valeurs par défaut & référentiels
 * ---------------------------------
 * Disciplines, couleurs, périodes, options de listes déroulantes.
 * Tout est modifiable ensuite dans les Paramètres.
 */
import type {
  Discipline,
  DisciplineColorKey,
  NiveauDef,
  Period,
  Settings,
} from "./types";
import { SCHEMA_VERSION } from "./types";
import { uid } from "./dates";

/**
 * Palette douce et professionnelle. Chaque couleur fournit des classes
 * Tailwind pour la pastille, le badge, la barre et l'aperçu, en clair ET
 * en sombre. Tons peu saturés (pas de multicolore agressif).
 */
export const DISCIPLINE_COLORS: Record<
  DisciplineColorKey,
  { label: string; dot: string; chip: string; bar: string; swatch: string }
> = {
  blue: {
    label: "Bleu",
    dot: "bg-blue-500",
    chip: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
    bar: "bg-blue-400",
    swatch: "bg-blue-500",
  },
  green: {
    label: "Vert",
    dot: "bg-emerald-500",
    chip: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    bar: "bg-emerald-400",
    swatch: "bg-emerald-500",
  },
  orange: {
    label: "Orange",
    dot: "bg-orange-500",
    chip: "bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
    bar: "bg-orange-400",
    swatch: "bg-orange-500",
  },
  purple: {
    label: "Violet",
    dot: "bg-violet-500",
    chip: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    bar: "bg-violet-400",
    swatch: "bg-violet-500",
  },
  yellow: {
    label: "Jaune",
    dot: "bg-amber-500",
    chip: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    bar: "bg-amber-400",
    swatch: "bg-amber-500",
  },
  red: {
    label: "Rouge",
    dot: "bg-rose-500",
    chip: "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
    bar: "bg-rose-400",
    swatch: "bg-rose-500",
  },
  pink: {
    label: "Rose",
    dot: "bg-pink-500",
    chip: "bg-pink-50 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300",
    bar: "bg-pink-400",
    swatch: "bg-pink-500",
  },
  teal: {
    label: "Sarcelle",
    dot: "bg-teal-500",
    chip: "bg-teal-50 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",
    bar: "bg-teal-400",
    swatch: "bg-teal-500",
  },
  gray: {
    label: "Gris",
    dot: "bg-slate-400",
    chip: "bg-slate-100 text-slate-600 dark:bg-slate-500/20 dark:text-slate-300",
    bar: "bg-slate-300",
    swatch: "bg-slate-400",
  },
};

export const COLOR_KEYS = Object.keys(DISCIPLINE_COLORS) as DisciplineColorKey[];

/**
 * Disciplines par défaut (modifiables).
 * Les identifiants sont STABLES (mêmes sur tous les appareils) : cela permet
 * d'importer des séances préparées ailleurs sans casser les correspondances.
 */
export function defaultDisciplines(): Discipline[] {
  const base: Array<[string, string, DisciplineColorKey]> = [
    ["francais", "Français", "blue"],
    ["maths", "Mathématiques", "green"],
    ["qlm", "Questionner le monde", "orange"],
    ["anglais", "Anglais", "purple"],
    ["eps", "EPS", "yellow"],
    ["arts", "Arts", "red"],
    ["emc", "EMC", "pink"],
    ["recreation", "Récréation", "gray"],
    ["cantine", "Cantine", "gray"],
    ["autre", "Autre", "gray"],
  ];
  return base.map(([id, label, color], i) => ({ id, label, color, order: i }));
}

/** Niveaux par défaut : double niveau CE1-CE2 + groupe classe. */
export function defaultNiveaux(): NiveauDef[] {
  return [
    { id: "CE1", label: "CE1" },
    { id: "CE2", label: "CE2" },
    { id: "classe", label: "Groupe classe", isGroupeClasse: true },
  ];
}

/**
 * 5 périodes standard de l'année 2026-2027 (dates indicatives, ajustables
 * dans les paramètres selon la zone académique).
 */
export function defaultPeriods(): Period[] {
  const raw: Array<[number, string, string, string]> = [
    [1, "Période 1", "2026-09-01", "2026-10-17"],
    [2, "Période 2", "2026-11-03", "2026-12-19"],
    [3, "Période 3", "2027-01-05", "2027-02-13"],
    [4, "Période 4", "2027-03-02", "2027-04-10"],
    [5, "Période 5", "2027-04-27", "2027-07-06"],
  ];
  return raw.map(([number, name, start, end]) => ({
    id: uid(),
    number,
    name,
    start,
    end,
  }));
}

/** Réglages initiaux à la première ouverture. */
export function defaultSettings(): Settings {
  return {
    key: "app",
    schemaVersion: SCHEMA_VERSION,
    profile: {
      prenom: "",
      nom: "",
      ecole: "",
      classe: "CE1-CE2",
      annee: "2026-2027",
    },
    classe: { effectif: null, eleves: [] },
    niveaux: defaultNiveaux(),
    disciplines: defaultDisciplines(),
    periods: defaultPeriods(),
    theme: "auto",
    joursTravailles: [1, 2, 3, 4, 5],
  };
}

/** Options des listes de la séance. */
export const ORGANISATION_OPTIONS = [
  "individuel",
  "binôme",
  "groupe",
  "collectif",
  "ateliers",
  "autonomie",
  "travail dirigé",
];

export const ROLE_OPTIONS = [
  "découverte",
  "guidage",
  "étayage",
  "correction",
  "observation",
  "autonomie",
  "différenciation",
];

/** Étapes de déroulement proposées par défaut (toutes facultatives). */
export const DEROULEMENT_SUGGESTIONS = [
  "Accroche / mise en situation",
  "Recherche",
  "Mise en commun",
  "Institutionnalisation",
  "Entraînement",
  "Bilan",
];

export const EVENT_LABELS: Record<string, string> = {
  sortie: "Sortie",
  intervenant: "Intervenant",
  remplacement: "Remplacement",
  reunion: "Réunion",
  particulier: "Événement particulier",
  autre: "Autre",
};

export const EVENT_TYPES = Object.keys(EVENT_LABELS) as Array<
  "sortie" | "intervenant" | "remplacement" | "reunion" | "particulier" | "autre"
>;
