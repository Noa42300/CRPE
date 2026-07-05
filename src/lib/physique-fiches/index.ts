/**
 * Regroupe les fiches de physique-chimie et fournit les fonctions d'accès.
 */
import { PHYS_FICHES } from "./data";
import type { PhysBloc, PhysFiche } from "./types";

export { PHYS_FICHES };

export function getPhysFiche(slug: string): PhysFiche | undefined {
  return PHYS_FICHES.find((f) => f.slug === slug);
}

export function getPhysFichesByBloc(bloc: PhysBloc): PhysFiche[] {
  return PHYS_FICHES.filter((f) => f.bloc === bloc).sort((a, b) => a.numero - b.numero);
}
