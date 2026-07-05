/**
 * Modèle de données des FICHES D'ANGLAIS (CRPE, objectif B1 → B2)
 * ---------------------------------------------------------------
 * Structure de chaque fiche :
 *   🧠 À retenir · 📚 Explications (sections) · ⚠️ Attention
 * Chaque section peut contenir des points, des exemples et un tableau.
 */

export interface TableauEn {
  titre?: string;
  entetes: string[];
  lignes: string[][];
}

/** Une section d'explication : titre + points + exemples + tableau. */
export interface SectionEn {
  titre: string;
  points?: string[]; // 📚 explications en liste
  exemples?: string[]; // ✍️ exemples (encadré teinté)
  tableau?: TableauEn; // tableau si utile
}

export interface AnglaisFiche {
  slug: string;
  numero: number;
  titre: string;
  intro: string;

  retenir: string[]; // 🧠 À retenir (en haut : l'essentiel)
  sections: SectionEn[]; // 📚 Explications détaillées
  attention: string[]; // ⚠️ Attention (pièges des francophones)
}

/** Métadonnées d'affichage de la matière Anglais. */
export const ANGLAIS_META = {
  label: "Anglais — objectif B2",
  emoji: "🇬🇧",
  pill: "bg-teal-100 text-teal-700 border-teal-200",
  swatch: "bg-teal-500",
};
