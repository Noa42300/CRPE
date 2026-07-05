/**
 * Regroupe les fiches d'anglais et fournit les fonctions d'accès.
 */
import { ANGLAIS_FICHES } from "./data";
import type { AnglaisFiche } from "./types";

export { ANGLAIS_FICHES };

export function getAnglaisFiche(slug: string): AnglaisFiche | undefined {
  return ANGLAIS_FICHES.find((f) => f.slug === slug);
}
