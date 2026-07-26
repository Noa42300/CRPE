/**
 * PAGE — CONSEILS
 * Page d'introduction aux conseils de préparation.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { VerticalVideoCard } from "@/components/VerticalVideoCard";
import { ConseilsSection } from "@/components/conseils/ConseilsSection";

export const metadata: Metadata = {
  title: "Conseils",
  description:
    "Les conseils personnels de Noa pour préparer le CRPE : organisation, méthode et motivation.",
};

export default function ConseilsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Conseils"
        title="Mes conseils pour préparer le CRPE"
        subtitle="Vidéos, textes et fiches issus de mon expérience. De nouveaux conseils arriveront bientôt."
      />

      {/* Vidéo verticale (format TikTok / Reel) : les conseils d'un lauréat */}
      <section className="container-page py-12">
        <div className="mx-auto max-w-[360px]">
          <VerticalVideoCard
            src="/videos/conseils-crpe-laureat.mp4"
            title="Les conseils d'un lauréat"
          />
        </div>
      </section>

      {/* Grande section textuelle : tous les conseils (accordéons) */}
      <ConseilsSection />
    </div>
  );
}
