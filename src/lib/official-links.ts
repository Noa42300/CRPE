/**
 * Liens officiels et chaînes recommandées
 * ---------------------------------------
 * - Sujets : liens OFFICIELS du ministère (devenirenseignant.gouv.fr,
 *   le site officiel education.gouv.fr dédié aux concours enseignants).
 * - YouTube : chaînes officielles recommandées, par matière.
 *
 * Tu peux modifier / compléter ces listes ici en toute simplicité.
 */

export interface ExternalLink {
  label: string;
  url: string;
  note?: string; // petite précision affichée sous le lien
}

export interface LinkGroup {
  heading?: string;
  links: ExternalLink[];
}

// ---------------- SUJETS OFFICIELS — ÉPREUVES ÉCRITES ----------------
// Concours externe bac+3 (CRPE L3). Seuls des "sujets zéro" (sujet 0) sont
// publiés à ce jour ; les sujets 1 seront ajoutés dès leur publication.
export const ECRITES_SUJETS: ExternalLink[] = [
  {
    label: "Sujet 0 — Épreuve écrite 1 (Français)",
    url: "https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163",
    note: "Sujets officiels — devenirenseignant.gouv.fr",
  },
  {
    label: "Sujet 0 — Épreuve écrite 2 (Mathématiques)",
    url: "https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163",
    note: "Sujets officiels — devenirenseignant.gouv.fr",
  },
  {
    label: "Tous les sujets officiels (concours bac+3)",
    url: "https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405",
    note: "Page officielle du ministère",
  },
];

// ---------------- SUJETS OFFICIELS — ÉPREUVES ORALES ----------------
export const ORALES_SUJETS: ExternalLink[] = [
  {
    label: "Sujet 0 — Épreuve orale (Français / Mathématiques)",
    url: "https://www.devenirenseignant.gouv.fr/crpe-bac-3-epreuve-orale-de-francais-ou-de-mathematiques-1661",
    note: "Sujets et attendus officiels — devenirenseignant.gouv.fr",
  },
  {
    label: "Préparer les épreuves d'admission (oraux)",
    url: "https://www.devenirenseignant.gouv.fr/admissible-ressources-et-conseils-pour-preparer-les-epreuves-d-admission-1669",
    note: "Ressources officielles du ministère",
  },
  {
    label: "Tous les sujets officiels (concours bac+3)",
    url: "https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405",
    note: "Page officielle du ministère",
  },
];

// ---------------- CHAÎNES YOUTUBE RECOMMANDÉES (par matière) ----------------
export const YOUTUBE_CHANNELS: LinkGroup[] = [
  {
    heading: "Mathématiques",
    links: [{ label: "Yvan Monka", url: "https://www.youtube.com/@YMONKA" }],
  },
  {
    heading: "Français",
    links: [
      { label: "Le français by Johann", url: "https://www.youtube.com/@francaisauthentique" },
      { label: "Projet Voltaire", url: "https://www.youtube.com/@ProjetVoltaireOrthographe" },
      { label: "Les Bons Profs", url: "https://www.youtube.com/@LesBonsProfs" },
    ],
  },
  {
    heading: "Histoire-Géographie-EMC",
    links: [
      { label: "Les Bons Profs", url: "https://www.youtube.com/@LesBonsProfs" },
      { label: "L'Histoire nous le dira", url: "https://www.youtube.com/@LHistoirenousledira" },
      { label: "Histony", url: "https://www.youtube.com/@Histony" },
      { label: "Lumni", url: "https://www.youtube.com/@lumnifr" },
    ],
  },
  {
    heading: "SVT",
    links: [
      { label: "Les Bons Profs", url: "https://www.youtube.com/@LesBonsProfs" },
      { label: "Bio Logique", url: "https://www.youtube.com/@Bio_logique" },
    ],
  },
  {
    heading: "Physique-Chimie",
    links: [
      { label: "Les Bons Profs", url: "https://www.youtube.com/@LesBonsProfs" },
      { label: "ScienceClic", url: "https://www.youtube.com/@ScienceClic" },
      { label: "Monsieur Bidouille", url: "https://www.youtube.com/@MonsieurBidouille" },
    ],
  },
  {
    heading: "Arts plastiques",
    links: [
      { label: "Centre Pompidou", url: "https://www.youtube.com/@CentrePompidou" },
      { label: "Lumni", url: "https://www.youtube.com/@lumnifr" },
    ],
  },
  {
    heading: "Éducation musicale",
    links: [
      { label: "Philharmonie de Paris", url: "https://www.youtube.com/@philharmoniedeparis" },
      { label: "Lumni", url: "https://www.youtube.com/@lumnifr" },
    ],
  },
  {
    heading: "Anglais",
    links: [
      { label: "BBC Learning English", url: "https://www.youtube.com/@bbclearningenglish" },
      { label: "English with Lucy", url: "https://www.youtube.com/@EnglishwithLucy" },
      { label: "Learn English with TV Series", url: "https://www.youtube.com/@LearnEnglishWithTVSeries" },
    ],
  },
  {
    heading: "Espagnol",
    links: [
      { label: "Butterfly Spanish", url: "https://www.youtube.com/@ButterflySpanish" },
      { label: "ProfeDeELE", url: "https://www.youtube.com/@ProfeDeELE" },
      { label: "Dreaming Spanish", url: "https://www.youtube.com/@DreamingSpanish" },
    ],
  },
];
