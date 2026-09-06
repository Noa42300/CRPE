/**
 * Modèle de données PARTAGÉ des fiches d'ÉDUCATION CIVIQUE & GÉOGRAPHIE
 * --------------------------------------------------------------------
 * Une même structure sert aux fiches de Géographie et d'EMC (contenu de type
 * « sciences humaines » : une notion, des sections thématiques regroupées en
 * points, des exemples concrets, un vocabulaire clé et une synthèse).
 *
 * Le texte peut contenir du **gras** (rendu par RichText).
 */

/** Un groupe d'informations : un sous-titre facultatif + des points. */
export interface GroupeCivique {
  titre?: string;
  points: string[];
}

/** Une section thématique de la fiche (titre + groupes de points). */
export interface CiviqueSection {
  titre: string;
  groupes: GroupeCivique[];
}

/** Une erreur fréquente + son explication. */
export interface PiegeCivique {
  erreur: string;
  pourquoi: string;
}

/** Un terme de vocabulaire clé + sa définition. */
export interface VocabItem {
  terme: string;
  sens: string;
}

/** Un tableau simple. */
export interface TableauCivique {
  titre?: string;
  entetes: string[];
  lignes: string[][];
}

/** Métadonnées d'affichage d'un thème (libellé, emoji, couleurs). */
export interface ThemeMeta {
  label: string;
  emoji: string;
  pill: string;
  swatch: string;
}

/**
 * Une fiche de Géographie ou d'EMC.
 * `theme` est la clé du thème (bloc) : elle sert au regroupement dans le hub.
 */
export interface CiviqueFiche {
  slug: string;
  theme: string;
  numero: number;
  titre: string;
  intro: string;

  definition: string; // 🟦 la notion clé
  sections: CiviqueSection[]; // 1 à 3 sections thématiques (points groupés)
  exemples?: string[]; // 🗺️ exemples concrets / mise en œuvre
  vocabulaire?: VocabItem[]; // 📖 vocabulaire clé (tableau terme / sens)
  tableau?: TableauCivique; // 📊 tableau (facultatif)
  pieges?: PiegeCivique[]; // ⚠️ pièges fréquents (facultatif)
  retenir: string[]; // 🟪 à retenir
}
