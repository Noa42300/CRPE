/**
 * Types partagés de l'application
 * -------------------------------
 * Ce fichier décrit la "forme" des données utilisées partout dans le site.
 * Si tu ajoutes une colonne dans Supabase, pense à l'ajouter ici aussi.
 */

// Les grandes catégories du site (correspondent au menu / à la navigation).
export type Category =
  | "conseils"
  | "ecrites"
  | "orales"
  | "methodo"
  | "sujets-blancs";

// Les matières / sous-thèmes possibles.
export type Subject =
  | "francais"
  | "maths"
  | "histoire-geo-emc"
  | "arts-plastiques"
  | "musique"
  | "langues"
  | "oral-lecon"
  | "eps"
  | "general";

// Le type de ressource.
export type ResourceType = "video" | "pdf" | "texte";

/**
 * Une "ressource" = un contenu du site (une fiche, une vidéo, un sujet blanc...).
 * C'est l'objet central de la plateforme. Il correspond à la table
 * "resources" dans Supabase.
 */
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: Category;
  subject: Subject;
  type: ResourceType;
  url: string; // Lien vers la vidéo / le PDF, ou le texte lui-même
  correction_url?: string | null; // Optionnel : lien de correction (sujets blancs)
  created_at?: string;
}

/** Le profil d'un utilisateur connecté. Correspond à la table "profiles". */
export interface Profile {
  id: string;
  email: string;
  created_at?: string;
}

// ---------------------------------------------------------------------------
// Libellés lisibles (pour afficher joliment les catégories et matières)
// ---------------------------------------------------------------------------

export const CATEGORY_LABELS: Record<Category, string> = {
  conseils: "Conseils",
  ecrites: "Épreuves écrites",
  orales: "Épreuves orales",
  methodo: "Méthodologie",
  "sujets-blancs": "Sujets blancs",
};

export const SUBJECT_LABELS: Record<Subject, string> = {
  francais: "Français",
  maths: "Mathématiques",
  "histoire-geo-emc": "Histoire-Géo EMC",
  "arts-plastiques": "Arts plastiques",
  musique: "Musique",
  langues: "Langues",
  "oral-lecon": "Oral de leçon",
  eps: "EPS & Valeurs de la République",
  general: "Général",
};

export const TYPE_LABELS: Record<ResourceType, string> = {
  video: "Vidéo",
  pdf: "PDF",
  texte: "Texte",
};
