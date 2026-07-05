/**
 * Génération automatique du sitemap.xml
 * -------------------------------------
 * Aide les moteurs de recherche (Google...) à découvrir les pages du site.
 * Accessible à l'adresse : /sitemap.xml
 */
import type { MetadataRoute } from "next";
import { getAllResources } from "@/lib/resources";
import { MATH_FICHES } from "@/lib/maths-fiches";
import { HISTOIRE_FICHES } from "@/lib/histoire-fiches";
import { ANGLAIS_FICHES } from "@/lib/anglais-fiches";
import { ESPAGNOL_FICHES } from "@/lib/espagnol-fiches";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  // Pages principales
  const staticPages = [
    "",
    "/fiches",
    "/fiches-maths",
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

  // Pages de fiches de maths (une par notion).
  const mathPages = MATH_FICHES.map((f) => ({
    url: `${base}/fiches/maths/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Pages de fiches d'histoire (une par notion).
  const histPages = HISTOIRE_FICHES.map((f) => ({
    url: `${base}/fiches/histoire/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Pages de fiches d'anglais (une par fiche).
  const anglaisPages = ANGLAIS_FICHES.map((f) => ({
    url: `${base}/fiches/anglais/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Pages de fiches d'espagnol (une par fiche).
  const espagnolPages = ESPAGNOL_FICHES.map((f) => ({
    url: `${base}/fiches/espagnol/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...resourcePages,
    ...mathPages,
    ...histPages,
    ...anglaisPages,
    ...espagnolPages,
  ];
}
