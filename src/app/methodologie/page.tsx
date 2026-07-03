/**
 * PAGE — MÉTHODOLOGIE
 * Organisation, planning de révision, gestion du stress, stratégies.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { getResourcesByCategory } from "@/lib/resources";
import { isCurrentUserPremium } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Méthodologie",
  description:
    "La méthodologie pour réussir le CRPE : organisation, planning de révision, gestion du stress et stratégies de concours.",
};

export default async function MethodoPage() {
  const resources = await getResourcesByCategory("methodo");
  const hasAccess = await isCurrentUserPremium();

  return (
    <div>
      <PageHeader
        eyebrow="Méthodologie"
        title="Travaille mieux, pas seulement plus"
        subtitle="Organisation, planning de révision, gestion du stress, méthodes de travail et stratégies pour le jour du concours."
      />
      <section className="container-page py-12">
        <ResourceExplorer resources={resources} hasAccess={hasAccess} showSubjectFilter={false} />
      </section>
    </div>
  );
}
