/**
 * PAGE — ÉPREUVES ORALES
 * Deux sections : Oral de leçon Français et EPS + Valeurs de la République.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { LinksSection } from "@/components/LinksSection";
import { getResourcesByCategory } from "@/lib/resources";
import { ORALES_SUJETS } from "@/lib/official-links";

export const metadata: Metadata = {
  title: "Épreuves orales",
  description:
    "Réussir les oraux du CRPE : oral de leçon Français et EPS + Valeurs de la République. Méthodes, exemples et vidéos.",
};

export default async function OralesPage() {
  const resources = await getResourcesByCategory("orales");

  return (
    <div>
      <PageHeader
        eyebrow="Épreuves orales"
        title="Réussis tes oraux"
        subtitle="Méthodes, exemples et conseils pour l'oral de leçon de Français et pour l'épreuve d'EPS + Valeurs de la République."
      />

      {/* Sujets officiels du ministère (devenirenseignant.gouv.fr) */}
      <LinksSection
        title="Sujets officiels"
        description="Les sujets zéro et attendus officiels des épreuves orales du concours externe bac+3, publiés par le ministère."
        groups={[{ links: ORALES_SUJETS }]}
      />

      <section className="container-page py-12">
        {/* On garde le filtre par matière : il permet de basculer entre
            "Oral de leçon" et "EPS & Valeurs de la République". */}
        <ResourceExplorer resources={resources} />
      </section>
    </div>
  );
}
