/**
 * Modèle de données des FICHES DE PHYSIQUE-CHIMIE (CRPE)
 * -----------------------------------------------------
 * Même format riche que la SVT : définition, explication, points,
 * fonctionnement, exemple, pièges, astuce, à retenir, mini-quiz, schéma.
 */

export type PhysBloc = "matiere" | "energie" | "electricite" | "mouvement";

export interface QuestionPhys {
  question: string;
  correction: string;
}
export interface PiegePhys {
  erreur: string;
  pourquoi: string;
}
export interface GroupePhys {
  titre?: string;
  points: string[];
}
export interface FormulePhys {
  label?: string;
  expr: string;
}

export interface PhysFiche {
  slug: string;
  bloc: PhysBloc;
  numero: number;
  titre: string;
  intro: string;

  definition: string; // 📘
  explication: string[]; // 🧠
  points: GroupePhys[]; // 📋
  formules?: FormulePhys[]; // formules mises en évidence
  fonctionnement?: string[]; // ⚙️ (facultatif)
  exemple: string; // ✏️
  pieges: PiegePhys[]; // ⚠️
  astuce: string; // 💡
  retenir: string[]; // 📌
  quiz: QuestionPhys[]; // 🎯 + ✅
  schema?: string; // clé d'un schéma SVG
}

/** Libellés et couleurs des blocs de Physique-Chimie. */
export const PHYS_BLOCS: Record<
  PhysBloc,
  { label: string; emoji: string; pill: string; swatch: string }
> = {
  matiere: {
    label: "Matière et transformations",
    emoji: "⚛️",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    swatch: "bg-sky-500",
  },
  energie: {
    label: "Énergie",
    emoji: "⚡",
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    swatch: "bg-emerald-500",
  },
  electricite: {
    label: "Électricité",
    emoji: "🔌",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    swatch: "bg-amber-500",
  },
  mouvement: {
    label: "Mouvement, forces et lumière",
    emoji: "🚀",
    pill: "bg-rose-100 text-rose-700 border-rose-200",
    swatch: "bg-rose-500",
  },
};

/** Métadonnées d'affichage de la matière (pour le hub). */
export const PHYS_META = {
  label: "Physique-Chimie",
  emoji: "🟦",
  pill: "bg-blue-100 text-blue-700 border-blue-200",
  swatch: "bg-blue-500",
};
