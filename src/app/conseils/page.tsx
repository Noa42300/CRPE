/**
 * PAGE — CONSEILS
 * Page d'introduction aux conseils de préparation.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TikTokCard } from "@/components/TikTokCard";
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

      {/* Lien TikTok : mes conseils en vidéo */}
      <section className="container-page py-12">
        <div className="mx-auto max-w-md">
          <TikTokCard
            href="https://vm.tiktok.com/ZN8extx4k/"
            title="4 conseils CRPE"
            subtitle="Mes conseils pour préparer le CRPE, en vidéo sur TikTok."
          />
        </div>
      </section>

      {/* Grande section textuelle : tous les conseils (accordéons) */}
      <ConseilsSection />
    </div>
  );
}
