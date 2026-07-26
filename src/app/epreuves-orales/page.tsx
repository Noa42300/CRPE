/**
 * PAGE — ÉPREUVES ORALES
 * Sujets officiels, explication des deux oraux (CRPE bac+3) et retours
 * d'expérience vidéo.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LinksSection } from "@/components/LinksSection";
import { ExamInfoSection, type ExamCard } from "@/components/ExamInfoSection";
import { VerticalVideoCard } from "@/components/VerticalVideoCard";
import { ORALES_SUJETS } from "@/lib/official-links";

export const metadata: Metadata = {
  title: "Épreuves orales",
  description:
    "Comprendre les épreuves orales d'admission du CRPE bac+3 : oral de leçon (français ou mathématiques) et seconde épreuve (EPS + entretien / Valeurs de la République), coefficients, déroulement et attentes du jury.",
};

// Informations officielles (devenirenseignant.gouv.fr) — concours externe bac+3.
const ORALES_CARDS: ExamCard[] = [
  {
    titre: "1. Épreuve orale de leçon (français ou mathématiques)",
    resume:
      "Au choix lors de l'inscription : tu présentes une leçon en français OU en mathématiques, à partir de documents fournis par le jury.",
    stats: [
      { label: "Durée", value: "1 h" },
      { label: "Coefficient", value: "5" },
      { label: "Notation", value: "/20" },
    ],
    blocks: [
      {
        heading: "Déroulement",
        items: [
          "20 minutes d'exposé.",
          "40 minutes d'échange avec le jury.",
        ],
      },
      {
        heading: "Ce que le jury attend",
        items: [
          "L'explication et la mobilisation d'une notion de français ou de mathématiques.",
          "Une exploitation pertinente du ou des documents fournis.",
        ],
      },
      {
        heading: "Compétences évaluées",
        items: [
          "Maîtrise disciplinaire et clarté de l'exposé.",
          "Capacité à transposer un savoir pour l'enseigner.",
          "Réactivité et recul lors de l'entretien (note 0 éliminatoire).",
        ],
      },
    ],
  },
  {
    titre: "2. Seconde épreuve orale : EPS + entretien",
    resume:
      "Elle comporte deux parties : l'éducation physique et sportive, puis un entretien avec le jury incluant les valeurs de la République.",
    stats: [
      { label: "Durée", value: "35 min" },
      { label: "Coefficient", value: "3" },
      { label: "Notation", value: "/20" },
    ],
    blocks: [
      {
        heading: "Partie 1 — EPS (≈ 20 min)",
        items: [
          "Un exposé de 8 minutes maximum, puis un échange avec le jury.",
          "Consacrée à l'éducation physique et sportive.",
        ],
      },
      {
        heading: "Partie 2 — Entretien (≈ 15 min)",
        items: [
          "5 minutes de présentation de ta motivation et de ton parcours (études, stages, engagements…).",
          "10 minutes d'échange avec le jury, dont une question sur les valeurs de la République et la laïcité.",
        ],
      },
      {
        heading: "Ce qui est évalué",
        items: [
          "Ta connaissance de l'EPS à l'école et de ses enjeux.",
          "Ta motivation, ta réflexion et ta capacité à incarner les valeurs de la République (note 0 éliminatoire).",
        ],
      },
    ],
  },
];

export default function OralesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Épreuves orales"
        title="Réussis tes oraux"
        subtitle="Deux épreuves d'admission pour le CRPE bac+3 : l'oral de leçon (français ou mathématiques) et la seconde épreuve (EPS + entretien / Valeurs de la République)."
      />

      {/* Sujets officiels du ministère (devenirenseignant.gouv.fr) */}
      <LinksSection
        title="Sujets officiels"
        description="Les sujets zéro et attendus officiels des épreuves orales du concours externe bac+3, publiés par le ministère."
        groups={[{ links: ORALES_SUJETS }]}
      />

      {/* Section explicative : le déroulement des deux oraux (bac+3) */}
      <ExamInfoSection
        title="Comment se déroulent les épreuves orales ?"
        description="Le concours externe bac+3 comporte deux épreuves orales d'admission. Voici l'essentiel à connaître (source : ministère de l'Éducation nationale)."
        cards={ORALES_CARDS}
      />

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
