/**
 * Modèles de données du Cahier Journal
 * ------------------------------------
 * Toutes les structures TypeScript utilisées par l'application.
 * Ces données vivent UNIQUEMENT dans IndexedDB (navigateur local).
 * Rien n'est envoyé sur un serveur.
 */

/** Version du schéma de données — sert aux migrations lors des imports. */
export const SCHEMA_VERSION = 1;

/** Un niveau concerné par une activité. Extensible (groupes personnalisés). */
export type NiveauId = string; // ex : "CE1", "CE2", "classe", ou id de groupe perso

/** Étape du déroulement d'une séance (modifiable, facultative). */
export interface Step {
  id: string;
  label: string;
  note?: string;
}

/** Événement exceptionnel de la journée. */
export interface DayEvent {
  id: string;
  type:
    | "sortie"
    | "intervenant"
    | "remplacement"
    | "reunion"
    | "particulier"
    | "autre";
  note: string;
}

/**
 * Une activité concrète à l'intérieur d'un créneau.
 * Un créneau peut contenir 1 activité (commune) ou 2 (CE1 / CE2) pour le
 * double niveau — voir Slot.activities.
 */
export interface Activity {
  id: string;
  /** Niveaux concernés : ex ["classe"], ["CE1"], ["CE2"], ["CE1","CE2"]. */
  niveaux: NiveauId[];
  /** Intitulé court, ex : « Lecture — Comprendre un texte documentaire ». */
  title: string;

  objectif: string;
  competence: string;
  competenceRef: string;

  /** Programmation / progression. */
  progPeriode: string;
  progDomaine: string;
  progSequence: string;
  progSeance: string;
  progRef: string;

  /** Modalités (cases multiples possibles). */
  organisation: string[];
  roleEnseignant: string[];

  /** Déroulement en étapes, entièrement modifiable. */
  deroulement: Step[];

  materiel: string;

  /** Différenciation. */
  differenciation: string;
  depassement: string;

  /** Suivi après la séance. */
  bilan: string;
  aReprendre: string;
  devoirs: string;
  notesProchaine: string;
}

/** Un créneau horaire de la journée. Contient une ou plusieurs activités. */
export interface Slot {
  id: string;
  start: string; // "HH:MM"
  end: string; // "HH:MM"
  disciplineId: string; // référence Discipline.id
  /**
   * 1 activité = créneau commun ; 2+ = organisation double niveau
   * (ex : CE1 avec l'enseignant / CE2 en autonomie).
   */
  activities: Activity[];
}

/** Informations générales d'une journée. */
export interface DayInfo {
  effectifPrevu: number | null;
  presents: number | null;
  absents: number | null;
  absentsNames: string;
  events: DayEvent[];
}

/** Une journée complète du cahier journal. Clé = date ISO (AAAA-MM-JJ). */
export interface Day {
  date: string; // "AAAA-MM-JJ"  (clé primaire)
  info: DayInfo;
  slots: Slot[];
  createdAt: number;
  updatedAt: number;
}

/** Une discipline paramétrable, avec sa couleur. */
export interface Discipline {
  id: string;
  label: string;
  /** Clé de couleur (voir DISCIPLINE_COLORS). */
  color: DisciplineColorKey;
  order: number;
}

export type DisciplineColorKey =
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "yellow"
  | "red"
  | "pink"
  | "teal"
  | "gray";

/** Une période de l'année scolaire. */
export interface Period {
  id: string;
  number: number;
  name: string;
  start: string; // "AAAA-MM-JJ"
  end: string; // "AAAA-MM-JJ"
}

/** Un niveau / groupe déclaré dans les paramètres. */
export interface NiveauDef {
  id: NiveauId;
  label: string;
  /** true pour "classe entière" (groupe commun). */
  isGroupeClasse?: boolean;
}

/** Profil enseignant + réglages généraux. */
export interface Settings {
  key: "app"; // clé fixe
  schemaVersion: number;

  profile: {
    prenom: string;
    nom: string;
    ecole: string;
    classe: string;
    annee: string; // ex : "2026-2027"
  };
  classe: {
    effectif: number | null;
    eleves: string[];
  };
  niveaux: NiveauDef[];
  disciplines: Discipline[];
  periods: Period[];

  theme: "light" | "dark" | "auto";
  /** Jours travaillés (0=dimanche … 6=samedi). */
  joursTravailles: number[];
}

/** Un modèle réutilisable (séance ou journée). */
export interface Template {
  id: string;
  kind: "seance" | "journee";
  name: string;
  /** Pour "seance" : Activity partielle. Pour "journee" : Slot[]. */
  data: unknown;
  createdAt: number;
}

/**
 * Documents de planification annuelle (Programmations / Progressions).
 * Ce sont des documents PÉDAGOGIQUES : ils ne contiennent aucune donnée
 * élève et peuvent donc être synchronisés sans risque de confidentialité.
 */
export type PlanKind = "programmation" | "progression";

/**
 * Un document de planification par discipline (CE1 et CE2 réunis).
 * Le contenu est libre : une carte de zones de texte, éditables directement.
 *
 * Clés de `zones` :
 *   - Programmation (vue annuelle)  : "annuel:CE1", "annuel:CE2"
 *   - Progression (par période)     : "<periodId>:CE1", "<periodId>:CE2"
 */
export interface Plan {
  /** id déterministe : `${kind}:${disciplineId}`. */
  id: string;
  kind: PlanKind;
  disciplineId: string;
  zones: Record<string, string>;
  updatedAt: number;
}

/**
 * Séquence réutilisable (Bibliothèque). Regroupe des séances (Activity) que
 * l'on peut ensuite POSER sur un jour ou INTÉGRER dans une progression.
 * Contenu 100 % pédagogique (aucune donnée élève).
 */
export interface Sequence {
  id: string;
  title: string;
  disciplineId: string;
  niveaux: NiveauId[];
  objectif: string;
  seances: Activity[];
  updatedAt: number;
}

/**
 * Rituel rangé par période, affichable en grand au tableau (écriture PE).
 * Pédagogique (aucune donnée élève).
 */
export interface Ritual {
  id: string;
  periodNumber: number;
  title: string;
  content: string;
  order: number;
  updatedAt: number;
}

/** Structure d'un fichier de sauvegarde exporté. */
export interface BackupFile {
  app: "cahier-journal";
  schemaVersion: number;
  exportedAt: string;
  settings: Settings;
  days: Day[];
  templates: Template[];
  /** Programmations & progressions (facultatif pour compat. ascendante). */
  plans?: Plan[];
  /** Bibliothèque de séquences (facultatif). */
  sequences?: Sequence[];
  /** Rituels par période (facultatif). */
  rituals?: Ritual[];
}
