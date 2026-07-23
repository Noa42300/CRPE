/**
 * PAGE — ÉPREUVES ÉCRITES
 * Fiches, vidéos, explications et exercices par matière.
 * Les matières se filtrent via l'explorateur (Français, Maths, HG-EMC...).
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { LinksSection } from "@/components/LinksSection";
import { getResourcesByCategory } from "@/lib/resources";
import { ECRITES_SUJETS, YOUTUBE_CHANNELS } from "@/lib/official-links";

export const metadata: Metadata = {
  title: "Épreuves écrites",
  description:
    "Réviser les épreuves écrites du CRPE : Français, Mathématiques, Histoire-Géo EMC, Arts plastiques, Musique et Langues.",
};

export default async function EcritesPage() {
  const resources = await getResourcesByCategory("ecrites");

  return (
    <div>
      <PageHeader
        eyebrow="Épreuves écrites"
        title="Prépare les épreuves écrites"
        subtitle="Français, Mathématiques, Histoire-Géo EMC, Arts plastiques, Musique et Langues. Filtre par matière pour trouver tes fiches et vidéos."
      />

      {/* Sujets officiels du ministère (devenirenseignant.gouv.fr) */}
      <LinksSection
        title="Sujets officiels CRPE L3"
        description="Les sujets zéro officiels du concours externe bac+3, publiés par le ministère de l'Éducation nationale."
        groups={[{ links: ECRITES_SUJETS }]}
      />

      {/* Chaînes YouTube recommandées, par matière */}
      <LinksSection
        title="Chaînes YouTube recommandées"
        description="Des chaînes officielles pour approfondir chaque matière."
        groups={YOUTUBE_CHANNELS}
      />

      <section className="container-page py-12">
        <ResourceExplorer resources={resources} />
      </section>
    </div>
  );
}
