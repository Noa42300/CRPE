/**
 * Utilitaires « affichage tableau » (écriture PE).
 */

/** Polices d'écriture proposées pour la projection. */
export const ECRITURE_FONTS = [
  // Borel : cursive scolaire française LIÉE (police libre, Éducation nationale).
  { id: "borel", label: "Cursive française (liée)", css: "'Borel', cursive" },
  { id: "caveat", label: "Manuscrite", css: "'Caveat', cursive" },
  { id: "dancing", label: "Cursive anglaise", css: "'Dancing Script', cursive" },
  { id: "nunito", label: "Bâton", css: "'Nunito', sans-serif" },
] as const;

export type EcritureFontId = (typeof ECRITURE_FONTS)[number]["id"];

export function fontCss(id: EcritureFontId): string {
  return ECRITURE_FONTS.find((f) => f.id === id)?.css ?? "'Borel', cursive";
}

/** Passe un élément en vrai plein écran (si supporté). */
export function requestFullscreen(el: HTMLElement | null): void {
  try {
    el?.requestFullscreen?.();
  } catch {
    /* ignore */
  }
}
export function exitFullscreen(): void {
  try {
    if (document.fullscreenElement) document.exitFullscreen?.();
  } catch {
    /* ignore */
  }
}
