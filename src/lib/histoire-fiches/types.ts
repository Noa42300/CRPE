/**
 * Modèle de données des FICHES D'HISTOIRE (niveau 3e / CRPE)
 * ---------------------------------------------------------
 * Structure imposée avec code couleur :
 *   🟦 Contexte · 🟩 Causes · 🟥 Événements · 🟨 Conséquences · 🟪 À retenir
 */

export type HistoireBloc = "monde-1945" | "france-1945" | "europe" | "guerres-mondiales";

/** Un groupe d'informations : un sous-titre facultatif + des points. */
export interface Groupe {
  titre?: string;
  points: string[];
}

/** Un repère de frise chronologique. */
export interface Repere {
  date: string;
  label: string;
}

/** Un tableau comparatif. */
export interface TableauHist {
  titre?: string;
  entetes: string[];
  lignes: string[][];
}

/** Schéma causes → événements → conséquences. */
export interface Flux {
  causes: string[];
  evenements: string[];
  consequences: string[];
}

export interface HistoireFiche {
  slug: string;
  bloc: HistoireBloc;
  numero: number;
  titre: string;
  intro: string;

  contexte: string[]; // 🟦
  causes: Groupe[]; // 🟩
  evenements: Groupe[]; // 🟥
  consequences: Groupe[]; // 🟨
  retenir: string[]; // 🟪 (dates + notions)

  acteurs?: string[]; // acteurs principaux
  frise?: Repere[]; // frise chronologique
  tableau?: TableauHist; // tableau comparatif
  flux?: Flux; // schéma causes → événements → conséquences
}

/** Libellés et couleurs des blocs d'histoire. */
export const HISTOIRE_BLOCS: Record<
  HistoireBloc,
  { label: string; emoji: string; pill: string; swatch: string }
> = {
  "monde-1945": {
    label: "Le monde depuis 1945",
    emoji: "🌍",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    swatch: "bg-sky-500",
  },
  "france-1945": {
    label: "La France depuis 1945",
    emoji: "🇫🇷",
    pill: "bg-rose-100 text-rose-700 border-rose-200",
    swatch: "bg-rose-500",
  },
  europe: {
    label: "Construction européenne",
    emoji: "🇪🇺",
    pill: "bg-indigo-100 text-indigo-700 border-indigo-200",
    swatch: "bg-indigo-500",
  },
  "guerres-mondiales": {
    label: "Les guerres mondiales",
    emoji: "🕊️",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    swatch: "bg-amber-500",
  },
};
