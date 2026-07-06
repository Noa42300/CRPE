/**
 * Modèle de données des SUJETS BLANCS
 * ------------------------------------
 * Un sujet blanc = un énoncé complet + une correction complète + un barème,
 * décrits sous forme de "blocs" structurés. Les mêmes blocs sont utilisés :
 *  - pour l'affichage web (composant BlockRenderer) ;
 *  - pour la génération automatique des PDF (lib/sujets-blancs/pdf.ts).
 *
 * Ainsi, AUCUNE duplication : on écrit le contenu une seule fois.
 * Le texte peut contenir du **gras** (rendu par RichText).
 *
 * ➕ POUR AJOUTER UN NOUVEAU SUJET :
 *  1. Ouvrir (ou créer) le fichier de sa matière dans lib/sujets-blancs/data/
 *  2. Ajouter un objet `SujetBlanc` au tableau exporté
 *  3. C'est tout : la page, les filtres, les PDF et la carte dans la rubrique
 *     "Sujets blancs" sont générés automatiquement.
 */

import type { Difficulty } from "@/lib/types";

/** Matières couvertes par les sujets blancs. */
export type SujetMatiere =
  | "francais"
  | "maths"
  | "sciences"
  | "histoire-geo-emc"
  | "arts-plastiques"
  | "musique"
  | "langues";

// ---------------------------------------------------------------------------
// Blocs de contenu (communs au sujet ET à la correction)
// ---------------------------------------------------------------------------

/** Une question numérotée de l'énoncé (avec points éventuels). */
export interface QuestionItem {
  num: string; // ex : "1.", "2.a."
  text: string;
  points?: number;
}

/** Variantes des encadrés colorés. */
export type NoteVariant =
  | "info" //     🔵 information / contexte
  | "methode" //  🟢 méthode, démarche attendue
  | "attendu" //  🟣 ce que le correcteur attend
  | "attention"; // 🔴 pièges, erreurs fréquentes

export type Block =
  /** Paragraphe simple. */
  | { type: "p"; text: string }
  /** Consigne officielle (encadré sobre, style "conditions de l'épreuve"). */
  | { type: "consigne"; text: string }
  /** Document support (texte littéraire, article, données…) dans un cadre. */
  | {
      type: "document";
      titre?: string;
      source?: string; // ex : "D'après Guy de Maupassant, La Parure (1884)"
      lines: string[]; // un élément = un paragraphe
    }
  /**
   * Illustration originale (SVG) servant de support visuel — notamment
   * pour les arts plastiques. La clé renvoie à lib/sujets-blancs/illustrations.
   * Affichée sur le web (SVG) et intégrée aux PDF (rasterisée).
   */
  | {
      type: "figure";
      illustration: string; // clé dans ILLUSTRATIONS
      titre?: string;
      legende?: string;
      source?: string;
    }
  /** Série de questions numérotées. */
  | { type: "questions"; items: QuestionItem[] }
  /** Tableau (données, QCM, tableau à compléter…). */
  | { type: "table"; titre?: string; entetes: string[]; lignes: string[][] }
  /** Liste à puces ou numérotée. */
  | { type: "list"; items: string[]; ordered?: boolean }
  /** Encadré coloré (info, méthode, attendu, attention). */
  | { type: "note"; variant: NoteVariant; titre?: string; lines: string[] }
  /**
   * Question corrigée (utilisée dans les corrections) :
   * la question est rappelée, puis la réponse est développée pas à pas,
   * avec éventuellement un encadré "ce que le correcteur attend".
   */
  | {
      type: "qa";
      num?: string;
      question: string;
      points?: number;
      reponse: string[]; // paragraphes du raisonnement rédigé
      attendu?: string; // attentes du correcteur (encadré violet)
    };

/** Une grande partie du sujet (ex : "Partie A.1 — Étude de la langue"). */
export interface SujetSection {
  titre: string;
  points?: number; // points de la section (affichés en badge)
  intro?: string; // courte phrase d'introduction
  blocks: Block[];
}

/** Le barème indicatif (affiché en tableau + repris dans les PDF). */
export interface Bareme {
  entetes: string[]; // ex : ["Partie", "Compétences évaluées", "Points"]
  lignes: string[][];
  total: string; // ex : "20 points"
}

// ---------------------------------------------------------------------------
// Le sujet blanc complet
// ---------------------------------------------------------------------------

export interface SujetBlanc {
  slug: string; // identifiant unique dans l'URL
  matiere: SujetMatiere;
  titre: string; // ex : "Sujet blanc n°1 — Autour du portrait"
  description: string; // 1-2 phrases pour la carte de la rubrique
  difficulty: Difficulty;
  epreuve: string; // ex : "Première épreuve d'admissibilité — Partie A"
  duree: string; // ex : "2 h conseillées"
  totalPoints: number; // ex : 20
  consignes: string[]; // conditions de l'épreuve (encadré en tête de sujet)
  sujet: SujetSection[]; // l'énoncé
  bareme: Bareme; // le barème indicatif
  correctionIntro?: string; // chapeau pédagogique de la correction
  correction: SujetSection[]; // la correction complète
}

// ---------------------------------------------------------------------------
// Libellés, icônes et couleurs par matière (identité visuelle homogène)
// ---------------------------------------------------------------------------

export const SUJET_MATIERES: Record<
  SujetMatiere,
  { label: string; emoji: string; pill: string; swatch: string }
> = {
  francais: {
    label: "Français",
    emoji: "📚",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    swatch: "bg-sky-500",
  },
  maths: {
    label: "Mathématiques",
    emoji: "🧮",
    pill: "bg-indigo-100 text-indigo-700 border-indigo-200",
    swatch: "bg-indigo-500",
  },
  sciences: {
    label: "Sciences et technologie",
    emoji: "🔬",
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    swatch: "bg-emerald-500",
  },
  "histoire-geo-emc": {
    label: "Histoire-Géographie EMC",
    emoji: "🗺️",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    swatch: "bg-amber-500",
  },
  "arts-plastiques": {
    label: "Arts plastiques",
    emoji: "🎨",
    pill: "bg-rose-100 text-rose-700 border-rose-200",
    swatch: "bg-rose-500",
  },
  musique: {
    label: "Éducation musicale",
    emoji: "🎵",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    swatch: "bg-violet-500",
  },
  langues: {
    label: "Langue vivante",
    emoji: "🌍",
    pill: "bg-teal-100 text-teal-700 border-teal-200",
    swatch: "bg-teal-500",
  },
};

/** Ordre d'affichage des matières dans la rubrique. */
export const SUJET_MATIERE_ORDER: SujetMatiere[] = [
  "francais",
  "maths",
  "sciences",
  "histoire-geo-emc",
  "arts-plastiques",
  "musique",
  "langues",
];
