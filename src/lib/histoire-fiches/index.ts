/**
 * Regroupe les fiches d'histoire et fournit les fonctions d'accès.
 */
import { HISTOIRE_FICHES } from "./data";
import type { HistoireBloc, HistoireFiche } from "./types";

export { HISTOIRE_FICHES };

export function getHistoireFiche(slug: string): HistoireFiche | undefined {
  return HISTOIRE_FICHES.find((f) => f.slug === slug);
}

export function getHistoireFichesByBloc(bloc: HistoireBloc): HistoireFiche[] {
  return HISTOIRE_FICHES.filter((f) => f.bloc === bloc).sort((a, b) => a.numero - b.numero);
}
