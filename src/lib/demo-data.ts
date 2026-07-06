/**
 * Données de démonstration
 * ------------------------
 * Ces contenus s'affichent AUTOMATIQUEMENT tant que ta base Supabase
 * n'est pas connectée (ou est vide). Cela te permet de voir le site
 * complet immédiatement, sans configuration.
 *
 * Dès que tu ajoutes des ressources dans Supabase, ce sont ELLES qui
 * s'affichent à la place (voir src/lib/resources.ts).
 *
 * Tu peux modifier / ajouter des lignes ici pour tester rapidement.
 */

import type { Resource } from "./types";

export const DEMO_RESOURCES: Resource[] = [
  // ----------------------------- CONSEILS -----------------------------
  {
    id: "demo-conseil-1",
    title: "Par où commencer ta préparation au CRPE",
    description:
      "Ma feuille de route complète pour organiser tes révisions sur toute l'année, sans te noyer.",
    category: "conseils",
    subject: "general",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "demo-conseil-2",
    title: "Les 5 erreurs qui font échouer au CRPE",
    description:
      "Les pièges classiques que j'ai évités et que je vois trop souvent chez les candidats.",
    category: "conseils",
    subject: "general",
    type: "texte",
    url: "Beaucoup de candidats échouent non pas par manque de travail, mais à cause d'erreurs de méthode : réviser sans planning, négliger l'oral jusqu'au dernier moment, apprendre par cœur sans comprendre... Dans cette fiche, je détaille les 5 erreurs à éviter absolument.",
  },
  {
    id: "demo-conseil-3",
    title: "Ma routine de révision (fiche PDF)",
    description:
      "Le planning exact que j'ai suivi semaine par semaine jusqu'au jour J.",
    category: "conseils",
    subject: "general",
    type: "pdf",
    url: "https://www.africau.edu/images/default/sample.pdf",
  },

  // ------------------------- ÉPREUVES ÉCRITES --------------------------
  {
    id: "demo-ecrit-fr-1",
    title: "Français — La grammaire essentielle",
    description:
      "Fiche synthèse des notions de grammaire attendues à l'écrit de français.",
    category: "ecrites",
    subject: "francais",
    type: "pdf",
    url: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "demo-ecrit-fr-2",
    title: "Français — Méthode de l'analyse de texte",
    description:
      "Comment analyser un texte étape par étape pour la partie didactique.",
    category: "ecrites",
    subject: "francais",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "demo-ecrit-math-1",
    title: "Maths — Les fractions et proportionnalité",
    description:
      "Toutes les bases pour ne plus jamais bloquer sur les fractions.",
    category: "ecrites",
    subject: "maths",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "demo-ecrit-math-2",
    title: "Maths — Géométrie : fiche complète",
    description: "Théorèmes, formules et exercices corrigés de géométrie.",
    category: "ecrites",
    subject: "maths",
    type: "pdf",
    url: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "demo-ecrit-hg-1",
    title: "Histoire-Géo EMC — Les repères clés",
    description: "Les dates, cartes et notions d'EMC à connaître absolument.",
    category: "ecrites",
    subject: "histoire-geo-emc",
    type: "texte",
    url: "L'Histoire-Géographie et l'EMC demandent surtout de la méthode et quelques repères solides. Cette fiche regroupe les grandes périodes historiques, les repères géographiques essentiels et les valeurs de la République attendues.",
  },
  {
    id: "demo-ecrit-arts-1",
    title: "Arts plastiques — Culture artistique",
    description: "Les mouvements et œuvres incontournables à maîtriser.",
    category: "ecrites",
    subject: "arts-plastiques",
    type: "pdf",
    url: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "demo-ecrit-musique-1",
    title: "Musique — Le vocabulaire de base",
    description: "Rythme, mélodie, tempo : le lexique musical expliqué simplement.",
    category: "ecrites",
    subject: "musique",
    type: "texte",
    url: "La musique au CRPE ne demande pas d'être musicien. Il faut maîtriser un vocabulaire de base : le rythme, la pulsation, le tempo, la hauteur, le timbre... Cette fiche te donne toutes les définitions clés avec des exemples simples.",
  },
  {
    id: "demo-ecrit-langues-1",
    title: "Langues — L'anglais pour le CRPE",
    description: "Le niveau attendu et comment le préparer efficacement.",
    category: "ecrites",
    subject: "langues",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  // -------------------------- ÉPREUVES ORALES --------------------------
  {
    id: "demo-oral-1",
    title: "Oral de leçon Français — La méthode complète",
    description:
      "La structure exacte d'une bonne leçon de français, du plan à la conclusion.",
    category: "orales",
    subject: "oral-lecon",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "demo-oral-2",
    title: "Oral de leçon — Exemple entièrement rédigé",
    description: "Un exemple de séquence détaillée pour t'inspirer.",
    category: "orales",
    subject: "oral-lecon",
    type: "pdf",
    url: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "demo-oral-3",
    title: "EPS + Valeurs de la République — Réussir l'entretien",
    description:
      "Comment structurer ton oral d'EPS et défendre les valeurs de la République.",
    category: "orales",
    subject: "eps",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "demo-oral-4",
    title: "EPS — Les questions pièges du jury (et mes réponses)",
    description: "Ma préparation aux questions les plus délicates du jury.",
    category: "orales",
    subject: "eps",
    type: "texte",
    url: "Le jury de l'oral d'EPS aime tester ta capacité à réagir. Voici les questions qui reviennent le plus souvent, et comment j'y ai répondu le jour de mon oral pour obtenir 16.",
  },

  // --------------------------- MÉTHODOLOGIE ----------------------------
  {
    id: "demo-methodo-1",
    title: "Construire un planning de révision efficace",
    description:
      "La méthode pour planifier tes semaines sans t'épuiser ni rien oublier.",
    category: "methodo",
    subject: "general",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "demo-methodo-2",
    title: "Gérer son stress le jour J",
    description:
      "Mes techniques concrètes pour rester calme et concentré aux épreuves.",
    category: "methodo",
    subject: "general",
    type: "texte",
    url: "Le stress est normal, mais il se gère. Respiration, préparation mentale, sommeil, organisation de la veille... Voici tout ce que j'ai mis en place pour arriver serein le jour du concours.",
  },
  {
    id: "demo-methodo-3",
    title: "Méthodes de travail : apprendre plus vite",
    description:
      "Répétition espacée, fiches actives, auto-évaluation : les techniques qui marchent.",
    category: "methodo",
    subject: "general",
    type: "pdf",
    url: "https://www.africau.edu/images/default/sample.pdf",
  },

  // Les SUJETS BLANCS ne sont plus des ressources de démonstration :
  // ils sont désormais gérés par un système dédié (lib/sujets-blancs) qui
  // génère automatiquement pages, filtres et PDF. Voir /sujets-blancs.
];
