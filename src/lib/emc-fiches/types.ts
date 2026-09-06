/**
 * Thèmes et métadonnées des FICHES D'EMC (CRPE, jusqu'au cycle 4)
 * --------------------------------------------------------------
 * Le modèle de données est partagé avec la Géographie (voir
 * lib/civique-fiches/types).
 */
import type { CiviqueFiche, ThemeMeta } from "@/lib/civique-fiches/types";

export type EmcTheme =
  | "valeurs-republique"
  | "laicite-libertes"
  | "citoyennete"
  | "vie-collective";

/** Une fiche d'EMC = une fiche « civique » dont le thème est typé. */
export type EmcFiche = Omit<CiviqueFiche, "theme"> & { theme: EmcTheme };

/** Ordre d'affichage des thèmes dans le hub. */
export const EMC_ORDER: EmcTheme[] = [
  "valeurs-republique",
  "laicite-libertes",
  "citoyennete",
  "vie-collective",
];

/** Libellés et couleurs de chaque thème (classes Tailwind figées). */
export const EMC_THEMES: Record<EmcTheme, ThemeMeta> = {
  "valeurs-republique": {
    label: "Valeurs & symboles de la République",
    emoji: "🔵",
    pill: "bg-blue-100 text-blue-700 border-blue-200",
    swatch: "bg-blue-500",
  },
  "laicite-libertes": {
    label: "Laïcité, droits & libertés",
    emoji: "⚖️",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    swatch: "bg-violet-500",
  },
  citoyennete: {
    label: "Citoyenneté & institutions",
    emoji: "🏛️",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    swatch: "bg-amber-500",
  },
  "vie-collective": {
    label: "Vivre ensemble à l'école",
    emoji: "🤝",
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    swatch: "bg-emerald-500",
  },
};

/** Métadonnées d'affichage de la matière (pour le hub). */
export const EMC_META = {
  label: "EMC",
  emoji: "⚖️",
  pill: "bg-rose-100 text-rose-700 border-rose-200",
  swatch: "bg-rose-500",
};
