/**
 * SUJETS BLANCS — ÉDUCATION MUSICALE (Seconde épreuve, Domaine 2)
 * --------------------------------------------------------------
 * Réponses courtes (~15 lignes) prenant appui sur une citation ou un
 * document. On évalue la culture musicale, la maîtrise du vocabulaire et
 * la capacité à relier connaissances et réflexion. Contenus originaux.
 */
import type { SujetBlanc } from "../types";

export const MUSIQUE_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1 — L'orchestre et les familles d'instruments
  // ======================================================================
  {
    slug: "musique-1-orchestre-et-timbres",
    matiere: "musique",
    titre: "Sujet blanc n°1 — L'orchestre et les timbres",
    description:
      "Familles d'instruments, notion de timbre et rôle de l'orchestre. Deux questions courtes mêlant culture musicale et transposition pédagogique.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Éducation musicale)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Éducation musicale — Familles d'instruments et timbre",
        points: 20,
        blocks: [
          {
            type: "document",
            titre: "Citation",
            source: "Propos d'un chef d'orchestre (support de réflexion, formulation originale).",
            lines: [
              "« Un orchestre, c'est un peuple de timbres : chaque instrument y parle de sa propre voix, et pourtant tous s'accordent pour ne faire qu'un seul chant. »",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Qu'appelle-t-on le « timbre » d'un instrument ? Présentez les grandes familles d'instruments de l'orchestre en donnant un exemple pour chacune, et en justifiant le classement.",
                points: 10,
              },
              {
                num: "b.",
                text: "Comment faire découvrir les timbres et les familles d'instruments à des élèves de cycle 2 ou 3 ? Proposez une œuvre de référence adaptée et une activité d'écoute.",
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
        ["a.", "Notion de timbre, familles d'instruments, justification", "10"],
        ["b.", "Choix d'une œuvre + activité d'écoute adaptée", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une définition juste du timbre (à ne pas confondre avec la hauteur ou l'intensité) et un classement des familles fondé sur le mode de production du son. La question b doit proposer une œuvre réellement adaptée et une activité d'écoute active.",
    correction: [
      {
        titre: "Éducation musicale — Familles d'instruments et timbre",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "Timbre et familles d'instruments.",
            reponse: [
              "Le **timbre** est la « couleur » du son, ce qui permet de reconnaître un instrument (ou une voix) d'un autre, même s'ils jouent la même note à la même intensité. Il se distingue de la **hauteur** (grave/aigu) et de l'**intensité** (fort/faible).",
              "Les grandes familles selon le mode de production du son : les **cordes** (violon, guitare — son produit par une corde frottée, pincée ou frappée) ; les **vents / bois** (flûte, clarinette, hautbois) et les **cuivres** (trompette, trombone — colonne d'air) ; les **percussions** (tambour, xylophone — instrument frappé ou secoué). On peut ajouter les claviers.",
              "Le classement se fonde sur la manière dont l'instrument produit et fait vibrer le son.",
            ],
            attendu:
              "Définir le timbre (distinct de hauteur/intensité) ET classer les familles selon le mode de production du son, avec exemples.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Faire découvrir les timbres en classe.",
            reponse: [
              "Œuvre de référence adaptée : *Pierre et le Loup* de Prokofiev (chaque personnage est incarné par un instrument), ou *Le Carnaval des animaux* de Saint-Saëns, ou le *Guide de l'orchestre pour les jeunes* de Britten.",
              "Activité d'écoute active : faire associer un timbre à un personnage/animal, reconnaître un instrument, lever une image quand on l'entend, décrire le son avec des mots (doux, brillant, grave). On procède par écoutes courtes et répétées, avec un vocabulaire construit progressivement.",
              "On relie **écouter**, **décrire** et **s'exprimer** conformément aux programmes d'éducation musicale.",
            ],
            attendu:
              "Une œuvre pertinente ET une activité d'écoute active avec verbalisation (pas seulement « écouter »).",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2 — Le rythme et la pulsation
  // ======================================================================
  {
    slug: "musique-2-rythme-et-pulsation",
    matiere: "musique",
    titre: "Sujet blanc n°2 — Le rythme, la pulsation, le corps",
    description:
      "Notions fondamentales du langage musical : pulsation, tempo, rythme. Réflexion sur la place du corps dans l'apprentissage musical à l'école.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Éducation musicale)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Éducation musicale — Pulsation, tempo et rythme",
        points: 20,
        blocks: [
          {
            type: "document",
            titre: "Citation",
            source: "Formulation originale (support de réflexion).",
            lines: [
              "« Avant de savoir lire une note, l'enfant sait déjà taper dans ses mains, marcher en cadence, balancer son corps : le rythme se vit avant de se comprendre. »",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Distinguez précisément les notions de pulsation, de tempo et de rythme. Illustrez chacune par un exemple simple.",
                points: 10,
              },
              {
                num: "b.",
                text: "En quoi le corps est-il un outil essentiel pour faire percevoir le rythme aux élèves ? Décrivez une activité corporelle et rythmique réalisable en classe.",
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
        ["a.", "Pulsation / tempo / rythme : distinction rigoureuse", "10"],
        ["b.", "Corps et apprentissage, activité rythmique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "Le point délicat est de NE PAS confondre pulsation (battement régulier), tempo (vitesse de la pulsation) et rythme (organisation des durées). L'activité proposée doit engager réellement le corps.",
    correction: [
      {
        titre: "Éducation musicale — Pulsation, tempo et rythme",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "Pulsation, tempo, rythme.",
            reponse: [
              "**Pulsation** : le battement régulier et constant qui sous-tend la musique, comme les battements du cœur ; on la ressent quand on tape du pied de façon régulière.",
              "**Tempo** : la **vitesse** de cette pulsation (lent, modéré, rapide). Un même morceau peut être joué à des tempos différents ; le tempo se mesure en battements par minute.",
              "**Rythme** : l'**organisation des durées** des sons (longs, courts, silences) sur la pulsation. Exemple : les paroles d'une chanson forment un rythme (syllabes longues et brèves) qui se superpose à la pulsation régulière.",
              "Résumé : la pulsation est régulière, le tempo indique sa vitesse, le rythme est le jeu des durées par-dessus.",
            ],
            attendu:
              "Trois définitions distinctes et non confondues, chacune illustrée. La confusion pulsation/rythme est la principale erreur à éviter.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Le corps et le rythme en classe.",
            reponse: [
              "Le corps permet de **vivre** la musique avant de la conceptualiser : marcher sur la pulsation, frapper des rythmes, se balancer, développent une perception intériorisée. C'est la démarche des pédagogies actives (Dalcroze, Orff).",
              "Activité possible : marcher en cercle sur la pulsation d'une musique (ressentir le battement régulier), puis frapper dans les mains le rythme des paroles d'une comptine (percussions corporelles), enfin varier le tempo (marcher plus vite/plus lentement).",
              "On travaille ainsi l'écoute, la coordination et l'intériorisation de la pulsation, en engageant tout le corps.",
            ],
            attendu:
              "Justifier le rôle du corps (intériorisation) et décrire une activité corporelle progressive (pulsation → rythme → tempo).",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 3 — Musique et émotion (le baroque)
  // ======================================================================
  {
    slug: "musique-3-musique-et-emotion-baroque",
    matiere: "musique",
    titre: "Sujet blanc n°3 — Musique et émotion à l'époque baroque",
    description:
      "Comment la musique cherche à émouvoir : l'exemple de la période baroque. Réflexion sur les moyens musicaux de l'expression et sur l'écoute sensible.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Éducation musicale)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Éducation musicale — Émouvoir par les sons",
        points: 20,
        blocks: [
          {
            type: "document",
            titre: "Citation",
            source: "Formulation originale s'inspirant de la théorie baroque des affects (support de réflexion).",
            lines: [
              "« La musique baroque veut peindre les passions de l'âme : la joie, la douleur, la colère ou l'apaisement. Le compositeur cherche moins à plaire qu'à toucher, et fait de chaque pièce le portrait d'un sentiment. »",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "En vous appuyant sur la citation, montrez comment la musique peut exprimer des émotions. Citez deux compositeurs de la période baroque (en situant approximativement cette période) et justifiez leur pertinence.",
                points: 10,
              },
              {
                num: "b.",
                text: "La musique d'aujourd'hui cherche-t-elle encore à susciter des émotions ? Nuancez et donnez des exemples issus de répertoires variés.",
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
        ["a.", "Expression des émotions, repères sur le baroque, compositeurs", "10"],
        ["b.", "Ouverture aux musiques actuelles, exemples variés, nuance", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend des repères chronologiques corrects sur le baroque (env. 1600–1750) et des compositeurs pertinents, ainsi que des moyens musicaux nommés (tempo, mode majeur/mineur, nuances). La question b doit dépasser l'énumération et discuter le lien musique/émotion aujourd'hui.",
    correction: [
      {
        titre: "Éducation musicale — Émouvoir par les sons",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "La musique et l'expression des émotions (baroque).",
            reponse: [
              "La musique exprime les émotions par des **moyens sonores** : le **tempo** (rapide pour la joie, lent pour la tristesse), le **mode** (majeur souvent lumineux, mineur souvent grave), les **nuances** (fort/doux), le **rythme**, les **contrastes**. La période baroque théorise cela sous le nom de « théorie des affects ».",
              "Période baroque : environ **1600 à 1750**. Compositeurs pertinents : **Jean-Sébastien Bach** (musique religieuse et instrumentale, expressive et architecturée), **Antonio Vivaldi** (*Les Quatre Saisons*, qui « peignent » la nature et les sensations), **Georg Friedrich Haendel**, **Henry Purcell**.",
              "Exemple : dans *Les Quatre Saisons*, Vivaldi imite l'orage, le chant des oiseaux, le froid de l'hiver : la musique devient descriptive et émotionnelle.",
            ],
            attendu:
              "Nommer des moyens musicaux précis ET situer le baroque (~1600-1750) avec au moins deux compositeurs justifiés.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "La musique d'aujourd'hui et l'émotion.",
            reponse: [
              "Oui, la musique actuelle cherche toujours à émouvoir, mais par des moyens élargis : musiques de films (qui soulignent les émotions d'une scène), chansons, musiques actuelles, musiques du monde, musiques électroniques.",
              "Nuance attendue : toutes les musiques ne visent pas l'émotion de la même façon — certaines cherchent à faire danser, d'autres à faire réfléchir, à créer une ambiance, ou à expérimenter des sons. L'émotion reste centrale mais coexiste avec d'autres fonctions (sociale, festive, rituelle).",
              "Exemples variés : une bande originale de film, une chanson engagée, une musique traditionnelle, une œuvre contemporaine — chacune mobilise timbre, rythme et intensité pour toucher l'auditeur.",
            ],
            attendu:
              "Dépasser l'énumération : discuter les fonctions de la musique aujourd'hui et donner des exemples de répertoires diversifiés.",
          },
        ],
      },
    ],
  },
];
