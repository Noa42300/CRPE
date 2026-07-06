/**
 * SUJETS BLANCS — ARTS PLASTIQUES (Seconde épreuve, Domaine 2)
 * -----------------------------------------------------------
 * Analyse d'œuvres et réflexion (réponses courtes, ~15 lignes). Les œuvres
 * citées sont décrites dans le sujet (le candidat n'a pas besoin de la
 * reproduction pour raisonner). On évalue la culture artistique et la
 * capacité à articuler connaissances et analyse. Contenus originaux.
 */
import type { SujetBlanc } from "../types";

export const ARTS_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1 — Le portrait
  // ======================================================================
  {
    slug: "arts-1-le-portrait-et-le-regard",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°1 — Le portrait et le regard",
    description:
      "Questionner ce qu'un portrait donne à voir : ressemblance, intériorité, mise en scène. Deux questions d'analyse courtes autour de l'autoportrait et du portrait peint.",
    difficulty: "moyen",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre à chaque question par une réponse courte, structurée (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — Portrait et intériorité",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "portrait-clair-obscur",
            titre: "Document — Portrait en clair-obscur",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "Support de réflexion.",
            lines: [
              "On considère un autoportrait peint : l'artiste se représente de trois-quarts, le regard tourné vers le spectateur. Le visage émerge d'un fond sombre, éclairé par une lumière latérale qui accentue les traits et laisse une partie du visage dans l'ombre. Les vêtements sont sobres ; rien ne détourne l'attention du visage et surtout des yeux, qui semblent fixer celui qui regarde.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Un portrait cherche-t-il seulement à ressembler au modèle, ou peut-il exprimer autre chose ? Développez à partir de la description proposée.",
                points: 10,
              },
              {
                num: "b.",
                text: "Quels moyens plastiques (lumière, cadrage, regard, fond) l'artiste utilise-t-il pour donner de la présence et de la profondeur au personnage ? Comment ces choix pourraient-ils être exploités dans une séquence d'arts plastiques au cycle 3 ?",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Analyse : ressemblance vs expression, culture artistique", "10"],
        ["b.", "Lecture des moyens plastiques + transposition pédagogique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On n'attend pas une érudition encyclopédique mais une lecture sensible et argumentée, appuyée sur des notions plastiques précises (cadrage, lumière, composition) et, pour la question b, un lien réaliste avec la classe.",
    correction: [
      {
        titre: "Arts plastiques — Portrait et intériorité",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "Ressemblance ou expression ?",
            reponse: [
              "Un portrait vise d'abord une **ressemblance** : reconnaître le modèle, ses traits. Mais il ne s'y réduit pas : il cherche aussi à révéler un **caractère, une intériorité, une émotion**.",
              "Dans la description, le fond sombre et la lumière latérale isolent le visage et concentrent l'attention sur le regard : l'artiste ne montre pas seulement « à quoi ressemble » la personne, il suggère sa présence psychologique, une pensée, une gravité.",
              "On peut mobiliser la distinction entre portrait « d'apparat » (montrer un statut) et portrait « psychologique » (montrer une âme), et rappeler que l'autoportrait est aussi une interrogation de l'artiste sur lui-même.",
            ],
            attendu:
              "Dépasser l'idée de simple copie : montrer que le portrait construit du sens (intériorité, statut, émotion) par des choix plastiques.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Moyens plastiques et transposition en classe.",
            reponse: [
              "Moyens plastiques : la **lumière** (clair-obscur latéral) modèle le visage et crée du volume et du mystère ; le **cadrage** serré centre sur l'essentiel ; le **fond sombre et neutre** fait ressortir la figure ; le **regard frontal** crée un lien avec le spectateur (adresse directe).",
              "En classe (cycle 3) : proposer une séquence « faire un portrait qui exprime une émotion » — travail sur la lumière (source unique, ombres), sur le cadrage (gros plan), sur l'expression du visage. Support : photographies, peintures de référence, puis production plastique (dessin, peinture, photo) et verbalisation.",
              "On articule ainsi **rencontre avec les œuvres**, **pratique** et **langage** (décrire ses choix), conformément aux programmes d'arts plastiques.",
            ],
            attendu:
              "Nommer précisément les moyens plastiques ET proposer une exploitation pédagogique cohérente (pratique + rencontre d'œuvres + verbalisation).",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2 — Paysage et point de vue
  // ======================================================================
  {
    slug: "arts-2-paysage-et-point-de-vue",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°2 — Le paysage et le point de vue",
    description:
      "Le paysage n'est jamais une simple copie du réel : cadrage, lumière et composition traduisent un regard. Analyse d'une œuvre paysagère et réflexion sur la représentation.",
    difficulty: "moyen",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — Représenter un paysage",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "paysage-plans",
            titre: "Document — Paysage en plans successifs",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "Support de réflexion.",
            lines: [
              "On considère un paysage peint : au premier plan, quelques arbres sombres encadrent la scène ; au second plan, une rivière serpente vers un village ; à l'arrière-plan, des collines s'estompent dans une brume bleutée. Le ciel occupe la moitié supérieure du tableau, traversé d'une lumière dorée de fin de journée. Les touches sont plus nettes au premier plan, plus floues au loin.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "En quoi un paysage peint est-il une interprétation du réel plutôt qu'une simple reproduction ? Appuyez-vous sur la description.",
                points: 10,
              },
              {
                num: "b.",
                text: "Comment l'artiste crée-t-il une impression de profondeur ? Quels procédés pourraient être découverts par des élèves lors d'une séance sur « représenter l'espace » ?",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Représentation vs réel, subjectivité du regard", "10"],
        ["b.", "Procédés de profondeur + transposition pédagogique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "L'enjeu est de montrer que le paysage est une construction (choix de cadrage, de lumière) et de nommer les procédés de représentation de l'espace, mobilisables avec des élèves.",
    correction: [
      {
        titre: "Arts plastiques — Représenter un paysage",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "Interprétation ou reproduction ?",
            reponse: [
              "Le peintre **choisit** un point de vue, un cadrage, un moment (« lumière dorée de fin de journée ») : autant de décisions qui orientent la perception. Le paysage n'est pas neutre, il traduit une **sensation, une atmosphère**.",
              "La lumière dorée, la brume, l'organisation en plans successifs construisent une ambiance mélancolique ou paisible : l'artiste exprime un regard, une émotion, et non un relevé topographique.",
              "On peut évoquer la différence entre le paysage « fenêtre sur le monde » et le paysage comme « état d'âme » (romantisme, impressionnisme), et rappeler que même la photographie suppose des choix.",
            ],
            attendu:
              "Montrer que les choix plastiques (cadrage, lumière, moment) font du paysage une interprétation subjective.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Procédés de profondeur et séance de classe.",
            reponse: [
              "Procédés : l'**étagement des plans** (premier plan / arrière-plan), la **superposition**, la **diminution des tailles**, l'**atténuation des couleurs et des contrastes au loin** (perspective atmosphérique : le lointain devient bleuté et flou), la **netteté décroissante** des touches.",
              "En classe : faire observer ces procédés sur des œuvres, puis proposer une production « représenter un paysage profond » où les élèves expérimentent l'étagement des plans, le chevauchement, le dégradé du lointain. Verbalisation des solutions trouvées.",
              "On relie rencontre d'œuvres, expérimentation plastique et acquisition d'un vocabulaire (plan, horizon, perspective).",
            ],
            attendu:
              "Nommer plusieurs procédés (étagement, superposition, perspective atmosphérique) et les transformer en situation d'apprentissage.",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 3 — La couleur et l'abstraction
  // ======================================================================
  {
    slug: "arts-3-couleur-et-abstraction",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°3 — La couleur et l'abstraction",
    description:
      "Quand l'art se libère de la ressemblance : formes, couleurs et émotions. Analyse d'une œuvre abstraite et réflexion sur ce que « comprendre » une œuvre veut dire.",
    difficulty: "difficile",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — Quand la forme se libère du réel",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "composition-abstraite",
            titre: "Document — Composition abstraite géométrique",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "Support de réflexion.",
            lines: [
              "On considère une composition abstraite : de grands aplats de couleurs vives (rouge, jaune, bleu) s'organisent en formes géométriques séparées par des lignes noires épaisses. Aucun objet reconnaissable n'est représenté. L'équilibre naît du rapport entre les surfaces colorées et les vides blancs.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Une œuvre abstraite, sans sujet reconnaissable, peut-elle « vouloir dire » quelque chose ? Argumentez à partir de la description.",
                points: 10,
              },
              {
                num: "b.",
                text: "Comment aborder une telle œuvre avec des élèves qui disent souvent « c'est facile » ou « ça ne représente rien » ? Proposez une démarche et une activité plastique.",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Sens de l'abstraction, rôle de la couleur et de la composition", "10"],
        ["b.", "Médiation des conceptions d'élèves + activité plastique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une réflexion qui prenne au sérieux l'abstraction (la couleur et la forme comme langage) et, pour la question b, une réponse qui déconstruise le préjugé « c'est facile / ça ne représente rien ».",
    correction: [
      {
        titre: "Arts plastiques — Quand la forme se libère du réel",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "L'abstraction peut-elle faire sens ?",
            reponse: [
              "Une œuvre abstraite ne représente pas d'objet, mais elle **agit par ses moyens propres** : la couleur, la forme, la ligne, le rythme, l'équilibre. Ces éléments produisent des sensations et des émotions (dynamisme, calme, tension).",
              "Dans la description, les couleurs primaires vives et les lignes noires créent un **équilibre construit** entre pleins et vides : l'œuvre parle d'ordre, d'harmonie, de rapport entre les couleurs, et non d'un récit. Le sens est dans la relation des formes, pas dans un sujet.",
              "On peut rappeler que l'abstraction, née au début du XXᵉ siècle, revendique l'autonomie des moyens plastiques : la peinture n'a plus à imiter le monde pour exister.",
            ],
            attendu:
              "Défendre l'idée que couleur/forme/composition constituent un langage porteur de sens et d'émotion.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Aborder l'abstraction avec des élèves.",
            reponse: [
              "Prendre au sérieux la réaction (« ça ne représente rien ») pour la déplacer : faire **décrire** précisément ce que l'on voit (couleurs, formes, équilibre), verbaliser les émotions ressenties, montrer les **choix** de l'artiste (pourquoi ce rouge ici ? cette ligne ?).",
              "Contre l'idée que « c'est facile », proposer une activité : composer une œuvre abstraite exprimant une émotion (la joie, la colère) uniquement avec des couleurs et des formes, puis confronter les productions — les élèves découvrent que les choix sont difficiles et signifiants.",
              "Démarche : rencontre de l'œuvre → verbalisation → pratique → retour réflexif. On développe le regard et le vocabulaire plastique.",
            ],
            attendu:
              "Transformer le préjugé en objet de travail ; proposer une activité plastique où les élèves éprouvent que l'abstraction suppose des choix.",
          },
        ],
      },
    ],
  },
];
