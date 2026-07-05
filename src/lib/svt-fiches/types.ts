/**
 * Modèle de données des FICHES DE SVT (CRPE)
 * ------------------------------------------
 * Format riche (comme les maths) : définition, explication, points,
 * fonctionnement, exemple, pièges, astuce, à retenir, mini-quiz.
 * Regroupées par thème (le vivant, le corps humain, génétique…).
 */

export type SvtTheme = "vivant" | "corps" | "genetique";

export interface QuestionSvt {
  question: string;
  correction: string;
}

export interface PiegeSvt {
  erreur: string;
  pourquoi: string;
}

/** Un groupe d'informations (sous-titre facultatif + points). */
export interface GroupeSvt {
  titre?: string;
  points: string[];
}

export interface SvtFiche {
  slug: string;
  theme: SvtTheme;
  numero: number;
  titre: string;
  intro: string;

  definition: string; // 📘
  explication: string[]; // 🧠 explication simple
  points: GroupeSvt[]; // 📋 points essentiels (groupés)
  fonctionnement?: string[]; // ⚙️ étapes / fonctionnement (facultatif)
  exemple: string; // ✏️
  pieges: PiegeSvt[]; // ⚠️
  astuce: string; // 💡
  retenir: string[]; // 📌
  quiz: QuestionSvt[]; // 🎯 + ✅
  schema?: string; // clé d'un schéma SVG (facultatif)
}

/** Libellés et couleurs des thèmes SVT. */
export const SVT_THEMES: Record<
  SvtTheme,
  { label: string; emoji: string; pill: string; swatch: string }
> = {
  vivant: {
    label: "Le vivant",
    emoji: "🌱",
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    swatch: "bg-emerald-500",
  },
  corps: {
    label: "Le corps humain",
    emoji: "🫀",
    pill: "bg-rose-100 text-rose-700 border-rose-200",
    swatch: "bg-rose-500",
  },
  genetique: {
    label: "Reproduction & génétique",
    emoji: "🧬",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    swatch: "bg-violet-500",
  },
};

/** Métadonnées d'affichage de la matière SVT (pour le hub). */
export const SVT_META = {
  label: "SVT",
  emoji: "🟢",
  pill: "bg-green-100 text-green-700 border-green-200",
  swatch: "bg-green-500",
};
