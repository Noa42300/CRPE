/**
 * Configuration Next.js
 * ----------------------
 * Fichier de configuration principal du projet.
 * Pour la plupart des cas, tu n'as PAS besoin de modifier ce fichier.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Autorise l'affichage d'images distantes (ex : miniatures YouTube).
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // Les anciennes URLs /fiches-maths redirigent vers la nouvelle structure
  // /fiches/maths (aucune page cassée, aucun lien perdu).
  async redirects() {
    return [
      { source: "/fiches-maths", destination: "/fiches?matiere=maths", permanent: true },
      { source: "/fiches-maths/:slug", destination: "/fiches/maths/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
