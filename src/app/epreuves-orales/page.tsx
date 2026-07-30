/**
 * PAGE — ÉPREUVES ORALES
 * Sujets officiels, explication des deux oraux (CRPE bac+3) et retours
 * d'expérience vidéo.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LinksSection } from "@/components/LinksSection";
import { ExamInfoSection, type ExamCard } from "@/components/ExamInfoSection";
import { TikTokCard } from "@/components/TikTokCard";
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
      "Elle comporte trois temps : l'éducation physique et sportive, un entretien sur ta motivation et ton parcours, puis un échange sur les valeurs de la République et des mises en situation professionnelles.",
    stats: [
      { label: "Durée", value: "≈ 55 min" },
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
        heading: "Partie 2 — Entretien de motivation (≈ 15 min)",
        items: [
          "5 minutes de présentation de ta motivation et de ton parcours (études, stages, engagements…).",
          "10 minutes d'échange avec le jury sur ton projet et ton rapport au métier de professeur des écoles.",
        ],
      },
      {
        heading: "Partie 3 — Valeurs de la République (≈ 20 min)",
        items: [
          "Après l'EPS et l'entretien de motivation, il reste encore 20 minutes consacrées aux questions sur les valeurs de la République et à des mises en situation professionnelles.",
          "Le jury te propose des situations concrètes de la vie de l'école (laïcité, égalité, gestion de conflits…) et évalue ta capacité à y réagir en futur enseignant.",
        ],
      },
      {
        heading: "Ce qui est évalué",
        items: [
          "Ta connaissance de l'EPS à l'école et de ses enjeux.",
          "Ta motivation, ta réflexion et ta capacité à incarner les valeurs de la République dans des mises en situation professionnelles (note 0 éliminatoire).",
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

      {/* Ressources — Oral 2 : EPS / Valeurs de la République */}
      <section className="container-page py-10">
        <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
          Ressources — Oral 2 : EPS / Valeurs de la République
        </h2>
        <p className="mt-2 max-w-2xl text-navy-500">
          Pour approfondir la seconde épreuve orale : une ressource officielle
          sur l&apos;EPS et un document pour t&apos;entraîner aux questions du jury.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {/* Ressource officielle (éduscol) */}
          <a
            href="https://eduscol.education.fr/259/education-physique-et-sportive-cycle-3"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover group flex items-start justify-between gap-3 p-4"
          >
            <div>
              <p className="font-semibold text-navy-900">
                Les champs d&apos;apprentissage en EPS
              </p>
              <p className="mt-1 text-xs text-navy-400">
                Ressource officielle — éduscol (Éducation nationale)
              </p>
            </div>
            <span className="mt-0.5 flex-none text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-sky-500">
              ↗
            </span>
          </a>

          {/* Document PDF téléchargeable */}
          <a
            href="/docs/questions-possibles-oral-eps.pdf"
            download
            className="card card-hover group flex items-start justify-between gap-3 p-4"
          >
            <div>
              <p className="font-semibold text-navy-900">
                Questions possibles à l&apos;oral
              </p>
              <p className="mt-1 text-xs text-navy-400">
                PDF à télécharger — laïcité &amp; valeurs de la République
              </p>
            </div>
            <span className="mt-0.5 flex-none text-navy-300 transition group-hover:translate-y-0.5 group-hover:text-sky-500">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Mes passages à l'oral : liens vers mes vidéos TikTok */}
      <section className="container-page py-12">
        <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
          Mes passages à l&apos;oral
        </h2>
        <p className="mt-2 max-w-2xl text-navy-500">
          Mes retours d&apos;expérience en vidéo, pour te montrer concrètement à quoi
          ressemblent les épreuves orales du CRPE.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <TikTokCard
            href="https://vm.tiktok.com/ZN8eQdwkF/"
            title="Mon passage à l'oral EPS / Valeurs de la République"
            subtitle="Note obtenue : 20/20"
          />
          <TikTokCard
            href="https://vm.tiktok.com/ZN8exTcUQ/"
            title="Mon passage à l'oral de français"
            subtitle="Note obtenue : 15/20"
          />
        </div>
      </section>
    </div>
  );
}
