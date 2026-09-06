/**
 * Thèmes et métadonnées des FICHES DE GÉOGRAPHIE (CRPE, jusqu'au cycle 4)
 * ----------------------------------------------------------------------
 * Le modèle de données est partagé avec l'EMC (voir lib/civique-fiches/types).
 */
import type { CiviqueFiche, ThemeMeta } from "@/lib/civique-fiches/types";

export type GeoTheme =
  | "habiter"
  | "france"
  | "mondialisation"
  | "environnement";

/** Une fiche de géographie = une fiche « civique » dont le thème est typé. */
export type GeoFiche = Omit<CiviqueFiche, "theme"> & { theme: GeoTheme };

/** Ordre d'affichage des thèmes dans le hub. */
export const GEO_ORDER: GeoTheme[] = [
  "habiter",
  "france",
  "mondialisation",
  "environnement",
];

/** Libellés et couleurs de chaque thème (classes Tailwind figées). */
export const GEO_THEMES: Record<GeoTheme, ThemeMeta> = {
  habiter: {
    label: "Habiter & se déplacer",
    emoji: "🏙️",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    swatch: "bg-sky-500",
  },
  france: {
    label: "La France & ses territoires",
    emoji: "🇫🇷",
    pill: "bg-indigo-100 text-indigo-700 border-indigo-200",
    swatch: "bg-indigo-500",
  },
  mondialisation: {
    label: "Mondialisation & échanges",
    emoji: "🌍",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    swatch: "bg-amber-500",
  },
  environnement: {
    label: "Environnement & développement durable",
    emoji: "🌱",
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    swatch: "bg-emerald-500",
  },
};

/** Métadonnées d'affichage de la matière (pour le hub). */
export const GEO_META = {
  label: "Géographie",
  emoji: "🗺️",
  pill: "bg-teal-100 text-teal-700 border-teal-200",
  swatch: "bg-teal-500",
};
