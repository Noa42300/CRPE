/**
 * Modèle de données des FICHES D'ESPAGNOL (CRPE, objectif A2 → B1)
 * ----------------------------------------------------------------
 * Même structure que les fiches d'anglais :
 *   🧠 À retenir · 📚 Explications (sections) · ⚠️ Attention
 */

export interface TableauEs {
  titre?: string;
  entetes: string[];
  lignes: string[][];
}

/** Une section d'explication : titre + points + exemples + tableau. */
export interface SectionEs {
  titre: string;
  points?: string[];
  exemples?: string[];
  tableau?: TableauEs;
}

export interface EspagnolFiche {
  slug: string;
  numero: number;
  titre: string;
  intro: string;

  retenir: string[]; // 🧠 À retenir
  sections: SectionEs[]; // 📚 Explications
  attention: string[]; // ⚠️ Attention (pièges des francophones)
}

/** Métadonnées d'affichage de la matière Espagnol. */
export const ESPAGNOL_META = {
  label: "Espagnol — objectif B1",
  emoji: "🇪🇸",
  pill: "bg-red-100 text-red-700 border-red-200",
  swatch: "bg-red-500",
};
