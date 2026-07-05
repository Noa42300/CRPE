/**
 * Génération automatique du sitemap.xml
 * -------------------------------------
 * Aide les moteurs de recherche (Google...) à découvrir les pages du site.
 * Accessible à l'adresse : /sitemap.xml
 */
import type { MetadataRoute } from "next";
import { getAllResources } from "@/lib/resources";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  // Pages principales
  const staticPages = [
    "",
    "/fiches",
    "/conseils",
    "/epreuves-ecrites",
    "/epreuves-orales",
    "/methodologie",
    "/sujets-blancs",
    "/recherche",
    "/premium",
    "/connexion",
    "/inscription",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  // Pages de ressources (uniquement les contenus gratuits, indexables)
  const resources = await getAllResources();
  const resourcePages = resources
    .filter((r) => !r.is_premium)
    .map((r) => ({
      url: `${base}/ressource/${r.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...resourcePages];
}
