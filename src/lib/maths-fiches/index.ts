/**
 * Regroupe toutes les fiches maths et fournit les fonctions d'accès.
 * Pour ajouter un bloc : importe son fichier et ajoute-le à MATH_FICHES.
 */
import { BLOC1_NOMBRES } from "./bloc1-nombres";
import { BLOC2_ALGEBRE } from "./bloc2-algebre";
import { BLOC3_GEOMETRIE } from "./bloc3-geometrie";
import { BLOC4_GRANDEURS } from "./bloc4-grandeurs";
import type { MathBloc, MathFiche } from "./types";

export const MATH_FICHES: MathFiche[] = [
  ...BLOC1_NOMBRES,
  ...BLOC2_ALGEBRE,
  ...BLOC3_GEOMETRIE,
  ...BLOC4_GRANDEURS,
];

/** Retrouve une fiche par son slug (pour la page /fiches-maths/[slug]). */
export function getMathFiche(slug: string): MathFiche | undefined {
  return MATH_FICHES.find((f) => f.slug === slug);
}

/** Renvoie les fiches d'un bloc, triées par numéro. */
export function getMathFichesByBloc(bloc: MathBloc): MathFiche[] {
  return MATH_FICHES.filter((f) => f.bloc === bloc).sort((a, b) => a.numero - b.numero);
}
