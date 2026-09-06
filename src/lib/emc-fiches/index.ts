/**
 * Regroupe les fiches d'EMC et fournit les fonctions d'accès.
 */
import { EMC_FICHES } from "./data";
import type { EmcFiche, EmcTheme } from "./types";

export { EMC_FICHES };

export function getEmcFiche(slug: string): EmcFiche | undefined {
  return EMC_FICHES.find((f) => f.slug === slug);
}

export function getEmcFichesByTheme(theme: EmcTheme): EmcFiche[] {
  return EMC_FICHES.filter((f) => f.theme === theme).sort(
    (a, b) => a.numero - b.numero
  );
}
