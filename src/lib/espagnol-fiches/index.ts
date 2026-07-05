/**
 * Regroupe les fiches d'espagnol et fournit les fonctions d'accès.
 */
import { ESPAGNOL_FICHES } from "./data";
import type { EspagnolFiche } from "./types";

export { ESPAGNOL_FICHES };

export function getEspagnolFiche(slug: string): EspagnolFiche | undefined {
  return ESPAGNOL_FICHES.find((f) => f.slug === slug);
}
