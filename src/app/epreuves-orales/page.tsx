/**
 * PAGE — ÉPREUVES ORALES
 * Deux sections : Oral de leçon Français et EPS + Valeurs de la République.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { LinksSection } from "@/components/LinksSection";
import { VerticalVideoCard } from "@/components/VerticalVideoCard";
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

      {/* Retours d'expérience : mes passages aux oraux (format vertical) */}
      <section className="container-page py-12">
        <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
          Mes passages à l&apos;oral
        </h2>
        <p className="mt-2 max-w-2xl text-navy-500">
          Mes retours d&apos;expérience filmés, pour te montrer concrètement à quoi
          ressemblent les épreuves orales du CRPE.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-8 sm:grid-cols-2">
          <VerticalVideoCard
            src="/videos/oral-lecon-francais.mp4"
            title="Mon passage à l'oral de leçon"
            subtitle="Note obtenue : 15/20"
          />
          <VerticalVideoCard
            src="/videos/oral-eps-entretien.mp4"
            title="Mon passage à l'oral d'EPS / Valeurs de la République"
            subtitle="Note obtenue : 20/20"
          />
        </div>
      </section>
    </div>
  );
}
