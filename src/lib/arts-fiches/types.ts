/**
 * Thèmes et métadonnées des FICHES D'ARTS (CRPE — domaine des arts)
 * ----------------------------------------------------------------
 * Le modèle de données est partagé avec la Géographie et l'EMC
 * (voir lib/civique-fiches/types) : une notion, des sections thématiques,
 * des exemples, un vocabulaire clé et une synthèse.
 *
 * Les fiches couvrent : les thématiques (questionnements) du programme
 * complémentaire 2027, le vocabulaire des arts plastiques et de l'éducation
 * musicale, et les œuvres au programme (« Le paysage en musique »).
 */
import type { CiviqueFiche, ThemeMeta } from "@/lib/civique-fiches/types";

export type ArtsTheme =
  | "thematiques"
  | "vocabulaire"
  | "methodo"
  | "oeuvres-plastiques"
  | "oeuvres";

/** Une fiche d'arts = une fiche « civique » dont le thème est typé. */
export type ArtsFiche = Omit<CiviqueFiche, "theme"> & { theme: ArtsTheme };

/** Ordre d'affichage des thèmes dans le hub. */
export const ARTS_ORDER: ArtsTheme[] = [
  "thematiques",
  "vocabulaire",
  "methodo",
  "oeuvres-plastiques",
  "oeuvres",
];

/** Libellés et couleurs de chaque thème (classes Tailwind figées). */
export const ARTS_THEMES: Record<ArtsTheme, ThemeMeta> = {
  thematiques: {
    label: "Thématiques & questionnements 2027",
    emoji: "🎯",
    pill: "bg-rose-100 text-rose-700 border-rose-200",
    swatch: "bg-rose-500",
  },
  vocabulaire: {
    label: "Vocabulaire & définitions",
    emoji: "📖",
    pill: "bg-indigo-100 text-indigo-700 border-indigo-200",
    swatch: "bg-indigo-500",
  },
  methodo: {
    label: "Méthodologie & analyse d'œuvre",
    emoji: "🧭",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    swatch: "bg-sky-500",
  },
  "oeuvres-plastiques": {
    label: "Œuvres de référence (arts plastiques)",
    emoji: "🖼️",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    swatch: "bg-amber-500",
  },
  oeuvres: {
    label: "Œuvres au programme (musique)",
    emoji: "🎵",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    swatch: "bg-violet-500",
  },
};

/** Métadonnées d'affichage de la matière (pour le hub). */
export const ARTS_META = {
  label: "Arts",
  emoji: "🎨",
  pill: "bg-rose-100 text-rose-700 border-rose-200",
  swatch: "bg-rose-500",
};
