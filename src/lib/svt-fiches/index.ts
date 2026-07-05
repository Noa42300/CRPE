/**
 * Regroupe les fiches de SVT et fournit les fonctions d'accès.
 */
import { SVT_FICHES } from "./data";
import type { SvtFiche, SvtTheme } from "./types";

export { SVT_FICHES };

export function getSvtFiche(slug: string): SvtFiche | undefined {
  return SVT_FICHES.find((f) => f.slug === slug);
}

export function getSvtFichesByTheme(theme: SvtTheme): SvtFiche[] {
  return SVT_FICHES.filter((f) => f.theme === theme).sort((a, b) => a.numero - b.numero);
}
