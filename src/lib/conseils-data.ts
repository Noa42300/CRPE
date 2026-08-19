/**
 * Données de la section « Tous les conseils que je peux te donner »
 * -----------------------------------------------------------------
 * Contenu textuel structuré, affiché sous forme d'accordéons (cartes)
 * dans la page Conseils. Chaque conseil est composé de blocs simples :
 *   - "p"          : un paragraphe
 *   - "list"       : une liste à puces (ou numérotée si `ordered`)
 *   - "subheading" : un sous-titre à l'intérieur du conseil
 *
 * Le texte entre **doubles astérisques** s'affiche en gras (RichText).
 */

export type ConseilBlock =
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "subheading"; text: string }
  // Lien mis en avant (bouton), avec une courte description facultative.
  | { type: "link"; href: string; label: string; description?: string };

export interface Conseil {
  id: string;
  emoji: string;
  titre: string;
  accroche: string; // courte phrase d'accroche (affichée sous le titre)
  blocks: ConseilBlock[];
}

export const CONSEILS: Conseil[] = [
  {
    id: "gerer-son-stress",
    emoji: "😌",
    titre: "Gérer son stress",
    accroche: "Voir le concours comme un examen parmi tant d'autres.",
    blocks: [
      {
        type: "p",
        text: "Personnellement, je n'ai jamais vraiment été stressé par les examens.",
      },
      {
        type: "p",
        text: "Tout ce qui ne touche ni à la santé ni à ma famille ne mérite pas que je perde mes moyens.",
      },
      {
        type: "p",
        text: "Je sais cependant que beaucoup de candidats vivent le CRPE avec **énormément de stress**.",
      },
      {
        type: "p",
        text: "Mon conseil est simple : voir le concours comme un examen parmi tant d'autres.",
      },
      { type: "p", text: "Vous avez **déjà réussi** :" },
      {
        type: "list",
        items: [
          "le brevet ;",
          "le bac ;",
          "le Grand Oral ;",
          "des partiels ;",
          "votre mémoire de licence.",
        ],
      },
      { type: "p", text: "Et plus tard, vous aurez :" },
      {
        type: "list",
        items: [
          "des inspections ;",
          "des entretiens d'embauche ;",
          "des formations ;",
          "d'autres évaluations.",
        ],
      },
      {
        type: "p",
        text: "Nous sommes évalués toute notre vie. Le CRPE est simplement **une étape de plus**.",
      },
      {
        type: "p",
        text: "Ce concours ne définira ni votre valeur ni votre capacité à devenir un excellent professeur.",
      },
    ],
  },
  {
    id: "mon-organisation",
    emoji: "🗓️",
    titre: "Mon organisation",
    accroche: "Des bases à l'automne, puis uniquement des sujets blancs.",
    blocks: [
      { type: "subheading", text: "De septembre à décembre" },
      {
        type: "list",
        items: [
          "révision des notions ;",
          "apprentissage des bases ;",
          "exercices.",
        ],
      },
      { type: "subheading", text: "De décembre jusqu'au concours" },
      {
        type: "p",
        text: "Uniquement des **sujets blancs**. La majorité provenaient de l'INSPE ou étaient générés avec l'IA.",
      },
      {
        type: "p",
        text: "Les étudiants hors INSPE peuvent tout à fait réussir, grâce aux formations complémentaires proposées par les universités et à des professeurs compétents.",
      },
      { type: "subheading", text: "Un conseil important" },
      {
        type: "p",
        text: "Ne pas acheter une dizaine de livres « **Objectif CRPE** ». Ils sont utiles, mais beaucoup trop chronophages.",
      },
      {
        type: "p",
        text: "Une année de préparation passe extrêmement vite : il faut aller à l'essentiel.",
      },
    ],
  },
  {
    id: "conseils-francais",
    emoji: "📖",
    titre: "Conseils pour le français",
    accroche: "Beaucoup d'étude de la langue, et une dissertation bien structurée.",
    blocks: [
      { type: "subheading", text: "L'étude de la langue" },
      {
        type: "list",
        items: [
          "énormément d'analyse grammaticale ;",
          "conjugaison ;",
          "orthographe ;",
          "lexique ;",
          "grammaire.",
        ],
      },
      { type: "subheading", text: "La dissertation" },
      {
        type: "p",
        text: "Je viens d'une prépa littéraire, j'avais donc déjà une bonne culture.",
      },
      { type: "p", text: "Je conseille de :" },
      {
        type: "list",
        items: [
          "revoir les grandes périodes littéraires ;",
          "apprendre quelques citations ;",
          "connaître les grands auteurs ;",
          "comparer leurs idées dans la copie.",
        ],
      },
      {
        type: "p",
        text: "La date d'un texte aide souvent à comprendre le sujet.",
      },
      { type: "subheading", text: "Une structure simple" },
      {
        type: "list",
        items: [
          "introduction (facultative mais conseillée) ;",
          "deux parties ;",
          "conclusion (facultative mais conseillée).",
        ],
      },
      {
        type: "p",
        text: "Évitez les copies qui répondent uniquement par « oui / non ».",
      },
    ],
  },
  {
    id: "conseils-maths",
    emoji: "➗",
    titre: "Conseils pour les mathématiques",
    accroche: "Pas besoin d'être un matheux : de la régularité et des brevets.",
    blocks: [
      {
        type: "p",
        text: "Je n'étais **absolument pas fort en maths**. En seconde, j'avais environ 6 de moyenne. Pourtant, j'ai obtenu **8/10 au CRPE**.",
      },
      { type: "p", text: "Grâce à :" },
      {
        type: "list",
        items: [
          "des maths presque tous les jours à l'INSPE ;",
          "des exercices réguliers ;",
          "des mécanismes répétés ;",
          "le soin apporté à la rédaction.",
        ],
      },
      { type: "subheading", text: "Mon plus gros conseil" },
      {
        type: "p",
        text: "À partir de février-mars, j'ai réalisé pratiquement tous les sujets de brevet depuis 2010 (France, Pondichéry, Amérique du Nord, etc.). Deux à trois brevets par semaine.",
      },
      {
        type: "link",
        href: "https://www.apmep.fr/Brevet-2015#Serie-generale",
        label: "Tous les sujets de brevet + corrigés (APMEP)",
        description:
          "Le site de l'APMEP regroupe gratuitement les sujets du brevet et leurs corrigés, année par année. Parfait pour s'entraîner comme je le conseille.",
      },
      { type: "p", text: "À force :" },
      {
        type: "list",
        items: [
          "on reconnaît les énoncés ;",
          "on automatise les méthodes ;",
          "les raisonnements deviennent naturels.",
        ],
      },
      {
        type: "p",
        text: "Le niveau attendu au CRPE correspond globalement à un **bon niveau brevet**. On attend de vous un futur professeur polyvalent, pas un mathématicien.",
      },
    ],
  },
  {
    id: "conseils-matieres-complementaires",
    emoji: "🧩",
    titre: "Conseils pour les matières complémentaires",
    accroche: "Langues, Histoire-Géo-EMC, Arts et Sciences : l'essentiel matière par matière.",
    blocks: [
      { type: "subheading", text: "Langues" },
      {
        type: "p",
        text: "Même si vous ne vous sentez pas légitime, n'hésitez pas à choisir une langue. Le niveau demandé est proche du lycée.",
      },
      { type: "p", text: "Revoir :" },
      {
        type: "list",
        items: [
          "vocabulaire ;",
          "conjugaison ;",
          "rédaction de 100 à 120 mots.",
        ],
      },
      {
        type: "p",
        text: "C'est souvent une matière **rentable**. Beaucoup de mes amis ont réussi sans avoir fait de langue depuis la Terminale.",
      },
      { type: "subheading", text: "Histoire-Géographie-EMC" },
      {
        type: "p",
        text: "J'ai énormément regardé de documentaires, puis demandé à l'IA de me générer des sujets blancs. Les deux sujets tombés au concours étaient très proches de ceux préparés.",
      },
      { type: "p", text: "Pour l'EMC :" },
      {
        type: "list",
        items: [
          "connaître les valeurs de la République ;",
          "apprendre du vocabulaire ;",
          "retenir quelques citations.",
        ],
      },
      { type: "subheading", text: "Arts" },
      {
        type: "p",
        text: "Ne pas apprendre toute l'histoire de l'art. Commencez par les œuvres au programme et maîtrisez-les parfaitement, puis seulement élargissez aux mouvements artistiques.",
      },
      {
        type: "p",
        text: "Les œuvres sont le point de départ de toute la réflexion.",
      },
      { type: "subheading", text: "Sciences" },
      {
        type: "p",
        text: "Je n'ai pas choisi cette spécialité. Mes amis ayant pris sciences ont surtout travaillé :",
      },
      {
        type: "list",
        items: [
          "les brevets ;",
          "les calculs ;",
          "les notions du cycle 4 ;",
          "les études de documents.",
        ],
      },
    ],
  },
  {
    id: "entraide",
    emoji: "🤝",
    titre: "L'entraide",
    accroche: "Un concours ne se réussit pas seul.",
    blocks: [
      {
        type: "p",
        text: "Comme je le dis dans la vidéo : **un concours ne se réussit pas seul**.",
      },
      {
        type: "list",
        items: [
          "créer des groupes de révision ;",
          "profiter des points forts de chacun.",
        ],
      },
    ],
  },
  {
    id: "temps-de-travail",
    emoji: "⏱️",
    titre: "Temps de travail",
    accroche: "La régularité vaut mieux que les grosses journées.",
    blocks: [
      {
        type: "p",
        text: "Je préfère **1 à 2 heures efficaces par jour** plutôt que 8 heures le week-end.",
      },
      {
        type: "p",
        text: "La régularité vaut largement mieux que les grosses journées.",
      },
    ],
  },
  {
    id: "hygiene-de-vie",
    emoji: "🌱",
    titre: "Hygiène de vie",
    accroche: "Ne vivez pas uniquement pour le concours.",
    blocks: [
      { type: "p", text: "Ne vivez pas uniquement pour le concours." },
      { type: "p", text: "Continuez à :" },
      {
        type: "list",
        items: [
          "sortir ;",
          "voir vos proches ;",
          "faire du sport ;",
          "bien dormir ;",
          "bien manger.",
        ],
      },
      {
        type: "p",
        text: "Ces éléments jouent énormément sur la réussite.",
      },
    ],
  },
  {
    id: "accepter-la-realite",
    emoji: "🎯",
    titre: "Accepter la réalité du concours",
    accroche: "50 % de travail, 50 % de chance.",
    blocks: [
      { type: "p", text: "Pour moi : **50 % travail**, **50 % chance**." },
      {
        type: "list",
        items: [
          "on ne peut pas tout savoir ;",
          "on ne choisit pas les sujets ;",
          "certaines années sont plus difficiles.",
        ],
      },
      { type: "p", text: "Il faut accepter cette part d'aléatoire." },
      {
        type: "p",
        text: "Si ce n'est pas pour cette année, on revient **plus fort** l'année suivante.",
      },
    ],
  },
];
