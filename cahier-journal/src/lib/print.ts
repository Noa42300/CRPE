/**
 * Contrôleur d'impression
 * -----------------------
 * Rend visible un conteneur `.print-area` précis le temps de l'impression,
 * puis remet tout en état. Fonctionne avec « Enregistrer en PDF » du
 * navigateur.
 */
export function printArea(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const cleanup = () => {
    el.classList.remove("active");
    document.body.classList.remove("printing");
    window.removeEventListener("afterprint", cleanup);
  };
  window.addEventListener("afterprint", cleanup);
  el.classList.add("active");
  document.body.classList.add("printing");
  // Laisse le DOM se peindre avant d'ouvrir la boîte d'impression.
  window.setTimeout(() => window.print(), 60);
}
