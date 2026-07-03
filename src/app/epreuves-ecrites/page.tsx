/**
 * PAGE — ÉPREUVES ÉCRITES
 * Fiches, vidéos, explications et exercices par matière.
 * Les matières se filtrent via l'explorateur (Français, Maths, HG-EMC...).
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { getResourcesByCategory } from "@/lib/resources";
import { isCurrentUserPremium } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Épreuves écrites",
  description:
    "Réviser les épreuves écrites du CRPE : Français, Mathématiques, Histoire-Géo EMC, Arts plastiques, Musique et Langues.",
};

export default async function EcritesPage() {
  const resources = await getResourcesByCategory("ecrites");
  const hasAccess = await isCurrentUserPremium();

  return (
    <div>
      <PageHeader
        eyebrow="Épreuves écrites"
        title="Prépare les épreuves écrites"
        subtitle="Français, Mathématiques, Histoire-Géo EMC, Arts plastiques, Musique et Langues. Filtre par matière pour trouver tes fiches et vidéos."
      />
      <section className="container-page py-12">
        <ResourceExplorer resources={resources} hasAccess={hasAccess} />
      </section>
    </div>
  );
}
