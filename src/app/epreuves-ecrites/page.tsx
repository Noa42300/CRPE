/**
 * PAGE — ÉPREUVES ÉCRITES
 * Sujets officiels, explication des épreuves (CRPE bac+3) et chaînes YouTube.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LinksSection } from "@/components/LinksSection";
import { ExamInfoSection, type ExamCard } from "@/components/ExamInfoSection";
import { ArtsProgramSection } from "@/components/ArtsProgramSection";
import { ECRITES_SUJETS, YOUTUBE_CHANNELS } from "@/lib/official-links";

export const metadata: Metadata = {
  title: "Épreuves écrites",
  description:
    "Comprendre les épreuves écrites d'admissibilité du CRPE bac+3 : épreuve de français et mathématiques, épreuve de polyvalence, coefficients, notation et niveau attendu.",
};

// Informations officielles (devenirenseignant.gouv.fr) — concours externe bac+3.
const ECRITES_CARDS: ExamCard[] = [
  {
    titre: "1. Épreuve écrite de français et mathématiques",
    resume:
      "Elle évalue les connaissances disciplinaires en français et en mathématiques, en deux parties indépendantes.",
    stats: [
      { label: "Durée", value: "4 h" },
      { label: "Coefficient", value: "5" },
      { label: "Notation", value: "/20" },
    ],
    blocks: [
      {
        heading: "Contenu",
        items: [
          "Partie français : à partir d'un texte support (roman, nouvelle, essai…) de 500 mots maximum.",
          "Partie mathématiques : plusieurs exercices ou problèmes.",
          "Les deux parties sont indépendantes.",
        ],
      },
      {
        heading: "La partie français en détail (sur 10 points)",
        items: [
          "5 points : grammaire et lexique.",
          "5 points : dissertation (rédaction argumentée à partir du texte).",
        ],
      },
      {
        heading: "Notation",
        items: [
          "Épreuve notée sur 20 : chaque partie compte pour 10 points.",
          "Une note inférieure ou égale à 2,5/10 à l'une des parties est éliminatoire.",
        ],
      },
      {
        heading: "Niveau attendu",
        items: [
          "Maîtrise solide des savoirs de français et de mathématiques.",
          "Rigueur, capacité à justifier et à rédiger clairement.",
        ],
      },
    ],
  },
  {
    titre: "2. Épreuve écrite de polyvalence",
    resume:
      "Elle porte sur les autres domaines enseignés à l'école primaire (hors EPS) et valorise la polyvalence du futur professeur.",
    stats: [
      { label: "Durée", value: "4 h" },
      { label: "Coefficient", value: "3" },
      { label: "Notation", value: "/20" },
    ],
    blocks: [
      {
        heading: "Domaines concernés",
        items: [
          "Histoire-géographie et enseignement moral et civique (EMC).",
          "Sciences et technologie.",
          "Arts : arts plastiques, éducation musicale, histoire des arts.",
          "Langues vivantes étrangères.",
        ],
      },
      {
        heading: "Ce qui est évalué",
        items: [
          "Connaissances dans ces différents domaines.",
          "Capacités d'analyse et de réflexion critique.",
        ],
      },
      {
        heading: "Niveau attendu",
        items: [
          "Culture générale et disciplinaire large, adaptée à l'école primaire.",
          "Aptitude à mobiliser des connaissances variées de façon rigoureuse.",
        ],
      },
    ],
  },
];

export default function EcritesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Épreuves écrites"
        title="Prépare les épreuves écrites"
        subtitle="Deux épreuves d'admissibilité pour le CRPE bac+3 : français-mathématiques et polyvalence. Sujets officiels, explications et ressources pour t'entraîner."
      />

      {/* Sujets officiels du ministère (devenirenseignant.gouv.fr) */}
      <LinksSection
        title="Sujets officiels CRPE L3"
        description="Les sujets zéro officiels du concours externe bac+3, publiés par le ministère de l'Éducation nationale."
        groups={[{ links: ECRITES_SUJETS }]}
      />

      {/* Section explicative : le déroulement des épreuves écrites (bac+3) */}
      <ExamInfoSection
        title="Comment se déroulent les épreuves écrites ?"
        description="Le concours externe bac+3 comporte deux épreuves écrites d'admissibilité. Voici l'essentiel à connaître (source : ministère de l'Éducation nationale)."
        cards={ECRITES_CARDS}
      />

      {/* Chaînes YouTube recommandées, par matière */}
      <LinksSection
        title="Chaînes YouTube recommandées"
        description="Des chaînes officielles pour approfondir chaque matière."
        groups={YOUTUBE_CHANNELS}
      />

      {/* Programme limitatif du domaine Arts (sessions 2027-2029) */}
      <ArtsProgramSection />
    </div>
  );
}
