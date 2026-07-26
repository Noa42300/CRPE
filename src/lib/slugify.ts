/**
 * slugify — transforme un titre en identifiant d'URL/fichier stable.
 * Ex : "L'accord du participe passé" → "l-accord-du-participe-passe".
 *
 * ⚠️ La même logique est répliquée dans scripts/generate-fiche-pdfs.mjs
 * afin que les noms des fichiers PDF générés correspondent exactement
 * aux liens de téléchargement du site. Toute modification ici doit être
 * reportée dans ce script.
 */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // enlève les accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // tout le reste → tiret
    .replace(/^-+|-+$/g, ""); // pas de tiret au début/fin
}
