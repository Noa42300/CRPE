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
