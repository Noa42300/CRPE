/**
 * PAGE — RECHERCHE GLOBALE
 * Permet de chercher et filtrer parmi TOUTES les ressources du site.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { getAllResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Recherche parmi toutes les ressources de révision du CRPE.",
};

export default async function RecherchePage({
  searchParams,
}: {
  // La recherche peut être pré-remplie via l'URL : /recherche?q=maths
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const resources = await getAllResources();

  return (
    <div>
      <PageHeader
        eyebrow="Recherche"
        title="Trouve exactement ce que tu cherches"
        subtitle="Cherche par mot-clé, puis filtre par matière. Tout est gratuit."
      />
      <section className="container-page py-12">
        <ResourceExplorer resources={resources} initialQuery={q} />
      </section>
    </div>
  );
}
