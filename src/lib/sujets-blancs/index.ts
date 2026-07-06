/**
 * Agrégateur des SUJETS BLANCS
 * ----------------------------
 * Rassemble tous les sujets de toutes les matières et expose des fonctions
 * utilitaires (liste complète, recherche par slug, regroupement par matière).
 *
 * ➕ POUR AJOUTER UNE NOUVELLE MATIÈRE :
 *  1. Créer un fichier dans data/ qui exporte un tableau `SujetBlanc[]`
 *  2. L'importer ici et l'ajouter à `ALL_SUJETS`
 * Tout le reste (pages, filtres, PDF, cartes) fonctionne automatiquement.
 */
import type { SujetBlanc, SujetMatiere } from "./types";
import { SUJET_MATIERE_ORDER } from "./types";
import { FRANCAIS_SUJETS } from "./data/francais";
import { MATHS_SUJETS } from "./data/maths";
import { SCIENCES_SUJETS } from "./data/sciences";
import { HGEMC_SUJETS } from "./data/histoire-geo-emc";
import { ARTS_SUJETS } from "./data/arts-plastiques";
import { MUSIQUE_SUJETS } from "./data/musique";
import { LANGUES_SUJETS } from "./data/langues";

/** Tous les sujets blancs du site (dans l'ordre des matières). */
export const ALL_SUJETS: SujetBlanc[] = [
  ...FRANCAIS_SUJETS,
  ...MATHS_SUJETS,
  ...SCIENCES_SUJETS,
  ...HGEMC_SUJETS,
  ...ARTS_SUJETS,
  ...MUSIQUE_SUJETS,
  ...LANGUES_SUJETS,
];

/** Récupère un sujet par son slug. */
export function getSujet(slug: string): SujetBlanc | undefined {
  return ALL_SUJETS.find((s) => s.slug === slug);
}

/** Récupère tous les sujets d'une matière donnée. */
export function getSujetsByMatiere(matiere: SujetMatiere): SujetBlanc[] {
  return ALL_SUJETS.filter((s) => s.matiere === matiere);
}

/** Matières réellement présentes, dans l'ordre officiel d'affichage. */
export function getMatieresPresentes(): SujetMatiere[] {
  return SUJET_MATIERE_ORDER.filter((m) =>
    ALL_SUJETS.some((s) => s.matiere === m)
  );
}

export type { SujetBlanc, SujetMatiere } from "./types";
export { SUJET_MATIERES, SUJET_MATIERE_ORDER } from "./types";
