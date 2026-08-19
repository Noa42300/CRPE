/**
 * SUJETS BLANCS — MATHÉMATIQUES « NIVEAU CRPE »
 * ---------------------------------------------
 * Cinq sujets exigeants, plus proches d'un véritable sujet écrit de
 * mathématiques du CRPE que les sujets « Simple » : problèmes à plusieurs
 * étapes, raisonnement, justification et rédaction mathématique.
 *
 * Ils s'inspirent d'exercices de brevet (APMEP : Pondichéry et Amérique du
 * Nord 2015) adaptés, recombinés et rehaussés au niveau attendu au concours.
 * Toutes les valeurs numériques et tous les résultats ont été vérifiés.
 *
 * ⚠️ Ces sujets sont marqués `niveau: "crpe"` ; les sujets historiques du
 * fichier maths.ts sont marqués `niveau: "simple"`.
 */
import type { SujetBlanc } from "../types";

export const MATHS_CRPE_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 6 — La grande course cycliste
  // ======================================================================
  {
    slug: "maths-6-la-grande-course-cycliste",
    matiere: "maths",
    niveau: "crpe",
    titre: "Sujet blanc n°6 — La grande course cycliste",
    description:
      "Un problème complet autour d'une course cycliste : lecture et interprétation de données, proportionnalité, vitesses et conversions, géométrie (théorème de Thalès), statistiques et calcul littéral. Niveau CRPE.",
    epreuve: "Épreuve écrite de mathématiques (CRPE) — Problème et exercices",
    duree: "3 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "La qualité de la rédaction, la rigueur des justifications et le soin apporté aux raisonnements seront pris en compte dans l'évaluation.",
      "Toute trace de recherche, même incomplète, sera valorisée. Les quatre exercices sont indépendants et peuvent être traités dans l'ordre de votre choix.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Lecture de données et proportionnalité",
        points: 5,
        intro:
          "Toutes les réponses seront justifiées, notamment en indiquant les calculs et les unités.",
        blocks: [
          {
            type: "p",
            text: "Lors d'une étape d'une course cycliste, on relève la distance totale parcourue depuis le départ à la fin de chaque heure. La dernière relève est effectuée à l'arrivée, à 4 h 30 de course.",
          },
          {
            type: "table",
            titre: "Distance parcourue depuis le départ",
            entetes: [
              "Durée (h)",
              "0",
              "1",
              "2",
              "3",
              "4",
              "4,5",
            ],
            lignes: [
              ["Distance (km)", "0", "40", "82", "120", "168", "190"],
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Quelle est la distance totale de cette étape ? Calculer la vitesse moyenne du cycliste sur l'ensemble de l'étape, arrondie au km/h.",
                points: 1.5,
              },
              {
                num: "2.",
                text: "La distance parcourue est-elle proportionnelle à la durée de parcours ? Justifier la réponse à l'aide de calculs.",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Pendant quelle heure de course la vitesse moyenne du cycliste a-t-elle été la plus élevée ? Préciser cette vitesse.",
                points: 1,
              },
              {
                num: "4.",
                text: "Quelle distance le cycliste a-t-il parcourue lors de la dernière demi-heure ? À quelle vitesse moyenne roulait-il alors ?",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Alignements et théorème de Thalès",
        points: 4,
        intro: "Un schéma soigné pourra accompagner la rédaction.",
        blocks: [
          {
            type: "p",
            text: "Pour filmer la course, un avion relais (point A) transmet les images captées par deux hélicoptères et deux motos. On sait que l'avion A, le premier hélicoptère L et la première moto N sont alignés ; de même, l'avion A, le second hélicoptère H et la seconde moto M sont alignés.",
          },
          {
            type: "p",
            text: "Les deux hélicoptères volent à la même altitude et les deux motos roulent sur une route horizontale. On donne : AL = AH = 720 m, LH = 270 m et AN = AM = 1 km.",
          },
          {
            type: "figure",
            illustration: "crpe-thales-course",
            titre: "Schéma — La captation de la course",
            legende:
              "Figure non à l'échelle. A, L, N sont alignés ; A, H, M sont alignés ; (LH) // (MN).",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Expliquer pourquoi les droites (LH) et (MN) sont parallèles.",
                points: 1,
              },
              {
                num: "2.",
                text: "Calculer la distance MN entre les deux motos.",
                points: 2,
              },
              {
                num: "3.",
                text: "Le triangle AMN est-il un agrandissement du triangle ALH ? Si oui, préciser le rapport d'agrandissement sous forme de fraction irréductible.",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Statistiques du classement",
        points: 5,
        blocks: [
          {
            type: "p",
            text: "À l'issue d'une étape, les coureurs ont parcouru 3 260,5 km depuis le grand départ. Le classement des neuf premiers coureurs, avec leur temps de course total, est donné ci-dessous.",
          },
          {
            type: "table",
            titre: "Temps de course total des neuf premiers coureurs",
            entetes: ["Rang", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            lignes: [
              [
                "Temps",
                "80 h 45",
                "80 h 52",
                "80 h 53",
                "80 h 53",
                "80 h 55",
                "80 h 57",
                "80 h 59",
                "81 h 00",
                "81 h 00",
              ],
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Calculer l'étendue de cette série statistique. Que représente-t-elle concrètement ?",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Déterminer la médiane des temps de course. Détailler la démarche.",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Le coureur classé 2ᵉ a mis 80 h 52 min pour parcourir les 3 260,5 km. Calculer sa vitesse moyenne, arrondie au km/h.",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Programme de calcul et écriture scientifique",
        points: 6,
        intro: "Chaque résultat sera justifié par un raisonnement ou un calcul.",
        blocks: [
          {
            type: "p",
            text: "Un organisateur propose ce programme de calcul aux spectateurs :",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Choisir un nombre.",
              "Lui soustraire 10.",
              "Élever le résultat au carré.",
              "Soustraire à ce résultat le carré du nombre choisi au départ.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "On note x le nombre choisi. Montrer que le résultat du programme est égal à −20x + 100.",
                points: 2,
              },
              {
                num: "2.",
                text: "Un spectateur obtient −340. Quel nombre avait-il choisi ? Rédiger la résolution de l'équation.",
                points: 2,
              },
              {
                num: "3.",
                text: "Le nombre de spectateurs sur le parcours est estimé par le calcul suivant. Donner son écriture scientifique, puis son écriture décimale : (5 × 10⁶ × 1,2 × 10⁻⁸) ÷ (2,4 × 10⁵).",
                points: 2,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine évalué", "Points"],
      lignes: [
        ["1", "Organisation et gestion de données, proportionnalité, vitesses", "5"],
        ["2", "Géométrie plane, théorème de Thalès, agrandissement", "4"],
        ["3", "Statistiques (étendue, médiane), vitesse et conversions", "5"],
        ["4", "Calcul littéral, équations, puissances de 10", "6"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On valorise les raisonnements justifiés, la distinction entre grandeur cumulée et grandeur instantanée, l'usage rigoureux des unités et la maîtrise du théorème de Thalès dans une configuration correctement identifiée.",
    correction: [
      {
        titre: "Exercice 1 — Lecture de données et proportionnalité",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Distance totale et vitesse moyenne sur l'étape.",
            reponse: [
              "La distance totale est la dernière valeur du tableau : **190 km**.",
              "La durée totale est 4,5 h. Vitesse moyenne = distance ÷ durée = 190 ÷ 4,5 ≈ 42,2 km/h, soit environ **42 km/h**.",
            ],
            attendu:
              "Utiliser la relation v = d ÷ t avec des unités cohérentes (km et h) et arrondir correctement.",
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Y a-t-il proportionnalité entre distance et durée ?",
            reponse: [
              "On compare les quotients distance ÷ durée : 40 ÷ 1 = 40 ; 82 ÷ 2 = 41 ; 120 ÷ 3 = 40 ; 168 ÷ 4 = 42 ; 190 ÷ 4,5 ≈ 42,2.",
              "Ces quotients ne sont pas tous égaux : **il n'y a pas proportionnalité**. Le cycliste n'a pas roulé à vitesse constante.",
            ],
            attendu:
              "Tester l'égalité des quotients (le coefficient de proportionnalité). Un seul quotient différent suffit à conclure la non-proportionnalité.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Heure la plus rapide.",
            reponse: [
              "On calcule la distance parcourue durant chaque heure : 1ʳᵉ h : 40 km ; 2ᵉ h : 82 − 40 = 42 km ; 3ᵉ h : 120 − 82 = 38 km ; 4ᵉ h : 168 − 120 = 48 km.",
              "La distance la plus grande est parcourue lors de la **4ᵉ heure**, à une vitesse moyenne de **48 km/h**.",
            ],
            attendu:
              "Raisonner sur les écarts (distance cumulée) et non sur les valeurs brutes du tableau.",
          },
          {
            type: "qa",
            num: "4.",
            points: 1,
            question: "Dernière demi-heure.",
            reponse: [
              "Distance sur la dernière demi-heure : 190 − 168 = **22 km**.",
              "Vitesse moyenne = 22 ÷ 0,5 = **44 km/h** (parcourir 22 km en une demi-heure revient à 44 km en une heure).",
            ],
            attendu:
              "Bien convertir 30 min en 0,5 h avant de calculer la vitesse.",
          },
        ],
      },
      {
        titre: "Exercice 2 — Alignements et théorème de Thalès",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1,
            question: "Pourquoi (LH) // (MN) ?",
            reponse: [
              "Les deux hélicoptères sont à la même altitude, donc (LH) est horizontale ; les deux motos roulent sur une route horizontale, donc (MN) est horizontale.",
              "Deux droites horizontales (situées dans le même plan vertical de la scène) sont **parallèles** : (LH) // (MN).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Distance MN.",
            reponse: [
              "Les points A, L, N sont alignés et A, H, M sont alignés, avec (LH) // (MN). D'après le **théorème de Thalès** :",
              "AL ÷ AN = AH ÷ AM = LH ÷ MN.",
              "On remplace (1 km = 1 000 m) : 720 ÷ 1000 = 270 ÷ MN.",
              "Donc MN = (270 × 1000) ÷ 720 = 270 000 ÷ 720 = **375 m**.",
            ],
            attendu:
              "Identifier la configuration de Thalès (deux droites sécantes en A coupées par deux parallèles), écrire les bons rapports, convertir 1 km en 1 000 m.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Agrandissement ?",
            reponse: [
              "Le triangle AMN a les mêmes angles que ALH (côtés parallèles) : c'est un agrandissement de ALH.",
              "Rapport = AN ÷ AL = 1000 ÷ 720 = **25/18** (≈ 1,39), après simplification par 40.",
            ],
            attendu:
              "Reconnaître l'agrandissement et donner le rapport sous forme de fraction irréductible.",
          },
        ],
      },
      {
        titre: "Exercice 3 — Statistiques du classement",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Étendue.",
            reponse: [
              "Étendue = valeur maximale − valeur minimale = 81 h 00 − 80 h 45 = **15 min**.",
              "Elle représente l'écart de temps entre le premier et le dernier des neuf coureurs de ce classement.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Médiane.",
            reponse: [
              "La série compte 9 valeurs, déjà rangées dans l'ordre croissant. La médiane est la valeur de rang (9 + 1) ÷ 2 = 5, c'est-à-dire la 5ᵉ valeur.",
              "Médiane = **80 h 55 min** : quatre coureurs ont un temps inférieur ou égal, quatre un temps supérieur ou égal.",
            ],
            attendu:
              "Justifier la position de la médiane (rang 5 pour 9 valeurs) et vérifier que la série est ordonnée.",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Vitesse moyenne du 2ᵉ coureur.",
            reponse: [
              "80 h 52 min = 80 + 52 ÷ 60 = 80 + 0,8667… ≈ 80,867 h.",
              "Vitesse = 3 260,5 ÷ 80,867 ≈ 40,3 km/h, soit environ **40 km/h**.",
            ],
            attendu:
              "Convertir les minutes en fraction d'heure (52 min = 52/60 h) avant de diviser. L'erreur classique est de diviser par 80,52.",
          },
        ],
      },
      {
        titre: "Exercice 4 — Programme de calcul et écriture scientifique",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Le résultat vaut −20x + 100.",
            reponse: [
              "En partant de x : x − 10, puis (x − 10)².",
              "(x − 10)² = x² − 2 × 10 × x + 10² = x² − 20x + 100 (identité remarquable).",
              "On soustrait le carré du nombre de départ : (x² − 20x + 100) − x² = **−20x + 100**.",
            ],
            attendu:
              "Utiliser correctement l'identité (a − b)² = a² − 2ab + b², puis simplifier les termes en x².",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Résoudre −20x + 100 = −340.",
            reponse: [
              "−20x + 100 = −340",
              "−20x = −340 − 100 = −440",
              "x = −440 ÷ (−20) = **22**.",
              "Le spectateur avait choisi le nombre 22. (Vérification : (22 − 10)² − 22² = 144 − 484 = −340. ✔)",
            ],
            attendu:
              "Isoler le terme en x, ne pas se tromper de signe, et vérifier le résultat par un retour à l'énoncé.",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Écriture scientifique.",
            reponse: [
              "On regroupe les nombres et les puissances de 10 : (5 × 1,2 ÷ 2,4) × (10⁶ × 10⁻⁸ ÷ 10⁵).",
              "Partie numérique : 5 × 1,2 = 6 ; 6 ÷ 2,4 = 2,5.",
              "Puissances : 10^(6 − 8 − 5) = 10⁻⁷.",
              "Résultat : **2,5 × 10⁻⁷**, soit en écriture décimale **0,000 000 25**.",
            ],
            attendu:
              "Utiliser les règles des puissances (10ᵃ × 10ᵇ = 10^(a+b) ; 10ᵃ ÷ 10ᵇ = 10^(a−b)) et vérifier que le facteur est bien compris entre 1 et 10.",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Données, vitesses et Thalès",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Grandeur cumulée ou instantanée ?",
            lines: [
              "Dans un tableau de distances « depuis le départ », les valeurs sont cumulées : la distance d'une heure précise s'obtient par différence entre deux valeurs successives.",
              "Pour une vitesse moyenne, toujours ramener le temps en heures (30 min = 0,5 h ; 52 min = 52/60 h) avant de diviser.",
            ],
          },
          {
            type: "note",
            variant: "methode",
            titre: "Reconnaître une configuration de Thalès",
            lines: [
              "Deux droites sécantes en un même point, coupées par deux droites parallèles : on écrit les rapports en respectant l'ordre des sommets.",
              "On vérifie l'homogénéité des unités (ici, convertir les km en m) avant tout calcul.",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "Conclure à la proportionnalité après un seul quotient : il faut vérifier TOUS les quotients.",
              "Diviser par 80,52 au lieu de 80 + 52/60 pour la vitesse moyenne : c'est une confusion entre l'écriture horaire et l'écriture décimale.",
              "Oublier de convertir 1 km en 1 000 m dans l'égalité de Thalès.",
              "Écrire 25 × 10⁻⁸ comme écriture scientifique : le facteur doit être compris entre 1 et 10.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 7 — À la chocolaterie
  // ======================================================================
  {
    slug: "maths-7-a-la-chocolaterie",
    matiere: "maths",
    niveau: "crpe",
    titre: "Sujet blanc n°7 — À la chocolaterie",
    description:
      "Arithmétique (divisibilité, division euclidienne, PGCD), fractions et partages, pourcentages successifs et mise en équation d'un problème géométrique. Un sujet qui demande méthode et justification. Niveau CRPE.",
    epreuve: "Épreuve écrite de mathématiques (CRPE) — Problème et exercices",
    duree: "3 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "Chaque affirmation devra être justifiée. La clarté de la rédaction est évaluée.",
      "Les quatre exercices sont indépendants.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Les assortiments de Pâques",
        points: 6,
        intro: "Les réponses seront justifiées, notamment par des calculs de divisibilité.",
        blocks: [
          {
            type: "p",
            text: "Un chocolatier a fabriqué 2 622 œufs et 2 530 poissons en chocolat. Il souhaite préparer des assortiments identiques (même composition dans chaque paquet) en utilisant tous les chocolats, sans qu'il en reste.",
          },
          {
            type: "figure",
            illustration: "crpe-chocolats",
            titre: "Les chocolats fabriqués",
            legende:
              "Illustration de contexte : œufs et poissons en chocolat.",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Le chocolatier peut-il réaliser exactement 19 paquets identiques utilisant tous les chocolats ? Justifier.",
                points: 2,
              },
              {
                num: "2.",
                text: "Déterminer le plus grand nombre de paquets identiques qu'il peut réaliser. On expliquera la méthode utilisée (division euclidienne).",
                points: 2.5,
              },
              {
                num: "3.",
                text: "Pour ce nombre maximal de paquets, donner la composition exacte de chaque paquet.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Les tablettes vendues dans la journée",
        points: 4,
        blocks: [
          {
            type: "p",
            text: "Le matin, la boutique vend les deux tiers de son stock de tablettes. L'après-midi, elle vend les trois quarts de ce qui reste.",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Quelle fraction du stock initial a été vendue l'après-midi ?",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Quelle fraction du stock initial reste-t-il à la fermeture ?",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Le stock initial était de 2 400 tablettes. Combien en reste-t-il le soir ? Vérifier la cohérence avec la question 2.",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Une hausse puis une baisse",
        points: 4,
        intro: "Toutes les réponses seront justifiées.",
        blocks: [
          {
            type: "p",
            text: "Une boîte de chocolats coûte 24 €. À l'approche des fêtes, son prix augmente de 15 %. En janvier, ce nouveau prix baisse de 15 %.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Calculer le prix de la boîte après la hausse de 15 %.", points: 1 },
              { num: "2.", text: "Calculer le prix de la boîte après la baisse de 15 %.", points: 1.5 },
              {
                num: "3.",
                text: "Une hausse de 15 % suivie d'une baisse de 15 % ramène-t-elle au prix de départ ? Justifier, puis donner le pourcentage global d'évolution.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Le motif triangulaire de l'emballage",
        points: 6,
        intro:
          "Toute trace de recherche, même non aboutie, sera prise en compte dans l'évaluation.",
        blocks: [
          {
            type: "p",
            text: "Sur un emballage, on découpe trois petits triangles équilatéraux identiques dans les trois coins d'un grand triangle équilatéral de côté 6 cm. Il reste alors un hexagone (grisé). On souhaite que la somme des périmètres des trois petits triangles soit égale au périmètre de l'hexagone restant.",
          },
          {
            type: "p",
            text: "On note c la longueur (en cm) du côté d'un petit triangle équilatéral. Chaque côté du grand triangle est ainsi partagé en trois parties : c, puis (6 − 2c), puis c.",
          },
          {
            type: "figure",
            illustration: "crpe-triangle-hexagone",
            titre: "Figure — Les découpes dans le triangle",
            legende:
              "Le grand triangle est équilatéral (côté 6 cm). Les trois triangles des coins (en pointillés) ont pour côté c ; l'hexagone gris est la figure restante. Figure non à l'échelle.",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Exprimer, en fonction de c, la somme des périmètres des trois petits triangles.",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Montrer que le périmètre de l'hexagone gris est égal à 18 − 3c.",
                points: 2,
              },
              {
                num: "3.",
                text: "Déterminer la valeur de c qui répond au problème. Rédiger la résolution de l'équation et conclure.",
                points: 2.5,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine évalué", "Points"],
      lignes: [
        ["1", "Divisibilité, division euclidienne, PGCD", "6"],
        ["2", "Fractions d'une quantité, fraction d'une fraction", "4"],
        ["3", "Pourcentages successifs, coefficient multiplicateur", "4"],
        ["4", "Mise en équation, calcul littéral, géométrie", "6"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une démarche arithmétique justifiée (et non un simple résultat de calculatrice), la maîtrise de la « fraction d'une fraction » et l'usage du coefficient multiplicateur pour les pourcentages successifs.",
    correction: [
      {
        titre: "Exercice 1 — Les assortiments de Pâques",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "19 paquets identiques sont-ils possibles ?",
            reponse: [
              "Il faut que 19 divise à la fois 2 622 et 2 530.",
              "2 622 ÷ 19 = 138 (car 19 × 138 = 2 622) : 19 divise 2 622.",
              "2 530 ÷ 19 : 19 × 133 = 2 527, il reste 3. Donc 19 ne divise pas 2 530.",
              "**Non**, le chocolatier ne peut pas faire 19 paquets identiques sans reste.",
            ],
            attendu:
              "Comprendre que « paquets identiques sans reste » impose que le nombre de paquets soit un diviseur commun aux deux quantités.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2.5,
            question: "Plus grand nombre de paquets.",
            reponse: [
              "Le plus grand nombre de paquets identiques est le **PGCD** de 2 622 et 2 530.",
              "Algorithme d'Euclide : 2 622 = 2 530 × 1 + 92 ; 2 530 = 92 × 27 + 46 ; 92 = 46 × 2 + 0.",
              "Le dernier reste non nul est 46 : PGCD(2 622 ; 2 530) = **46**. Le chocolatier peut réaliser au maximum 46 paquets.",
            ],
            attendu:
              "Poser proprement les divisions euclidiennes successives et conclure par le dernier reste non nul.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Composition de chaque paquet.",
            reponse: [
              "Œufs par paquet : 2 622 ÷ 46 = **57**.",
              "Poissons par paquet : 2 530 ÷ 46 = **55**.",
              "Chaque paquet contient donc 57 œufs et 55 poissons.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Les tablettes vendues dans la journée",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Fraction vendue l'après-midi.",
            reponse: [
              "Après le matin, il reste 1 − 2/3 = 1/3 du stock.",
              "L'après-midi, on vend les trois quarts de ce tiers : 3/4 × 1/3 = 3/12 = **1/4** du stock initial.",
            ],
            attendu:
              "Traduire « les trois quarts de ce qui reste » par un produit de fractions (fraction d'une fraction).",
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Fraction restante le soir.",
            reponse: [
              "Total vendu = 2/3 (matin) + 1/4 (après-midi) = 8/12 + 3/12 = 11/12.",
              "Reste = 1 − 11/12 = **1/12** du stock initial.",
              "(On peut aussi calculer directement : il reste 1/4 de ce qui restait à midi, soit 1/4 × 1/3 = 1/12.)",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Application à 2 400 tablettes.",
            reponse: [
              "Matin : 2/3 × 2 400 = 1 600 vendues ; reste 800.",
              "Après-midi : 3/4 × 800 = 600 vendues ; reste 200.",
              "Il reste **200 tablettes**. Cohérence : 1/12 × 2 400 = 200. ✔",
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Une hausse puis une baisse",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1,
            question: "Prix après la hausse.",
            reponse: [
              "Augmenter de 15 % revient à multiplier par 1,15 : 24 × 1,15 = **27,60 €**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Prix après la baisse.",
            reponse: [
              "Baisser de 15 % revient à multiplier par 0,85 : 27,60 × 0,85 = **23,46 €**.",
            ],
            attendu:
              "Utiliser le coefficient multiplicateur (0,85) plutôt que de retirer 15 % de 24 €.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Retour au prix de départ ?",
            reponse: [
              "**Non** : 23,46 € < 24 €. Le prix final est inférieur au prix initial.",
              "Coefficient global : 1,15 × 0,85 = 0,9775, soit une **baisse de 2,25 %** par rapport au prix de départ.",
              "La baisse de 15 % porte sur un prix plus élevé que la hausse : les deux variations ne se compensent pas.",
            ],
            attendu:
              "Comprendre qu'on ne cumule pas les pourcentages : on multiplie les coefficients (1,15 × 0,85 ≠ 1).",
          },
        ],
      },
      {
        titre: "Exercice 4 — Le motif triangulaire de l'emballage",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Somme des périmètres des petits triangles.",
            reponse: [
              "Chaque petit triangle équilatéral de côté c a un périmètre de 3c.",
              "Pour les trois triangles : 3 × 3c = **9c**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Périmètre de l'hexagone.",
            reponse: [
              "L'hexagone possède six côtés : trois côtés de longueur c (issus des découpes) et trois côtés de longueur 6 − 2c (parties centrales des côtés du grand triangle).",
              "Périmètre = 3 × c + 3 × (6 − 2c) = 3c + 18 − 6c = **18 − 3c**.",
            ],
            attendu:
              "Identifier les deux types de côtés de l'hexagone et développer 3(6 − 2c).",
          },
          {
            type: "qa",
            num: "3.",
            points: 2.5,
            question: "Valeur de c.",
            reponse: [
              "On veut 9c = 18 − 3c.",
              "9c + 3c = 18, soit 12c = 18, donc c = 18 ÷ 12 = **1,5 cm**.",
              "Le côté des petits triangles doit mesurer 1,5 cm. (Vérification : 9 × 1,5 = 13,5 et 18 − 3 × 1,5 = 13,5. ✔)",
            ],
            attendu:
              "Mettre le problème en équation, regrouper les termes en c, résoudre et vérifier que 0 < c < 3 (condition de faisabilité géométrique).",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Arithmétique et pourcentages",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "« Paquets identiques sans reste » → diviseur commun",
            lines: [
              "Un partage en groupes identiques épuisant deux stocks impose que le nombre de groupes divise les deux quantités : le maximum est leur PGCD.",
              "Le PGCD s'obtient proprement par l'algorithme d'Euclide (divisions euclidiennes successives, dernier reste non nul).",
            ],
          },
          {
            type: "note",
            variant: "methode",
            titre: "Pourcentages successifs",
            lines: [
              "Augmenter de t % : multiplier par (1 + t/100). Diminuer de t % : multiplier par (1 − t/100).",
              "Pour enchaîner deux évolutions, on multiplie les coefficients : c'est un produit, jamais une somme.",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "Croire qu'une hausse de 15 % suivie d'une baisse de 15 % ramène au prix initial (faux : coefficient 0,9775).",
              "Additionner les fractions du matin et de l'après-midi sans les ramener au même dénominateur.",
              "Confondre « les 3/4 du reste » (fraction d'une fraction) avec « 3/4 du stock initial ».",
              "Donner le PGCD sans montrer l'algorithme d'Euclide.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 8 — Géométrie dans l'espace : la pyramide
  // ======================================================================
  {
    slug: "maths-8-geometrie-la-pyramide",
    matiere: "maths",
    niveau: "crpe",
    titre: "Sujet blanc n°8 — Géométrie dans l'espace : la pyramide",
    description:
      "Volumes, agrandissement-réduction (coefficients k, k² et k³), théorème de Pythagore, échelle et patron, conversions d'unités de volume. Un sujet de géométrie exigeant. Niveau CRPE.",
    epreuve: "Épreuve écrite de mathématiques (CRPE) — Problème et exercices",
    duree: "3 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "Les valeurs exactes seront privilégiées ; les arrondis demandés seront respectés.",
      "Le soin des figures et la rigueur des justifications sont évalués.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Le flacon de parfum",
        points: 8,
        intro: "On donnera les valeurs exactes puis, si demandé, les valeurs arrondies.",
        blocks: [
          {
            type: "p",
            text: "Un flacon a la forme d'une pyramide SABC de sommet S et de base le triangle ABC, rectangle et isocèle en A. On donne AB = AC = 7,5 cm. La hauteur [AS] de la pyramide est perpendiculaire à la base et mesure AS = 15 cm.",
          },
          {
            type: "figure",
            illustration: "crpe-pyramide-sabc",
            titre: "Figure — La pyramide SABC et sa section",
            legende:
              "Base ABC rectangle et isocèle en A ; hauteur [AS] perpendiculaire à la base ; section S'MN parallèle à la base. Figure non à l'échelle.",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Calculer l'aire du triangle ABC, puis le volume de la pyramide SABC. Arrondir au cm³.",
                points: 3,
              },
              {
                num: "2.",
                text: "Pour fabriquer le bouchon, on coupe la pyramide par un plan parallèle à la base passant par un point S′ de [SA] tel que SS′ = 6 cm. La petite pyramide SS′MN ainsi obtenue est une réduction de SABC. Déterminer le rapport de cette réduction.",
                points: 2,
              },
              {
                num: "3.",
                text: "En déduire le volume de la petite pyramide (bouchon), puis le volume maximal de parfum que peut contenir le flacon (partie située sous le plan de coupe). Arrondir au cm³.",
                points: 3,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — La hauteur d'une pyramide monumentale",
        points: 6,
        intro: "Toutes les réponses seront justifiées.",
        blocks: [
          {
            type: "p",
            text: "Une pyramide régulière a pour base un carré ABCD de côté 35,50 m. Ses quatre arêtes issues du sommet S mesurent chacune 33,14 m. On note H le centre du carré (intersection des diagonales), pied de la hauteur [SH].",
          },
          {
            type: "figure",
            illustration: "crpe-pyramide-carree",
            titre: "Figure — La pyramide à base carrée",
            legende:
              "Base carrée ABCD, sommet S, centre H et hauteur [SH]. Figure non à l'échelle.",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Calculer la longueur de la diagonale AC du carré, puis la longueur AH. On donnera des valeurs approchées au centimètre.",
                points: 2.5,
              },
              {
                num: "2.",
                text: "Calculer la hauteur SH de la pyramide, arrondie au centimètre. (On pourra utiliser le triangle SAH, rectangle en H.)",
                points: 2,
              },
              {
                num: "3.",
                text: "On réalise une maquette à l'échelle 1/800. Quelle est, en centimètres, la longueur d'une arête latérale de la maquette ? Arrondir au millimètre.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Conversions et grandeurs",
        points: 6,
        intro: "Aucune réponse ne sera acceptée sans unité.",
        blocks: [
          {
            type: "p",
            text: "Un aquarium a la forme d'un pavé droit de dimensions 1,2 m × 0,8 m × 0,5 m.",
          },
          {
            type: "figure",
            illustration: "crpe-pave-aquarium",
            titre: "Figure — L'aquarium",
            legende:
              "Pavé droit : longueur 1,2 m, profondeur 0,8 m, hauteur 0,5 m. Figure non à l'échelle.",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Calculer le volume de l'aquarium en m³, puis le convertir en litres (on rappelle que 1 m³ = 1 000 L).",
                points: 2,
              },
              {
                num: "2.",
                text: "On remplit l'aquarium jusqu'aux 3/4 de sa hauteur. Quel volume d'eau, en litres, contient-il alors ?",
                points: 2,
              },
              {
                num: "3.",
                text: "Un robinet a un débit de 8 litres par minute. Combien de temps faut-il pour remplir l'aquarium aux 3/4 ? Donner le résultat en minutes et secondes.",
                points: 2,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine évalué", "Points"],
      lignes: [
        ["1", "Volume d'une pyramide, réduction, coefficient k³", "8"],
        ["2", "Théorème de Pythagore, diagonale, échelle", "6"],
        ["3", "Conversions d'unités de volume, débit, proportionnalité", "6"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On valorise la distinction entre les coefficients d'agrandissement pour les longueurs (k), les aires (k²) et les volumes (k³), l'emploi rigoureux du théorème de Pythagore et la maîtrise des conversions d'unités de volume.",
    correction: [
      {
        titre: "Exercice 1 — Le flacon de parfum",
        points: 8,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Aire de la base et volume.",
            reponse: [
              "ABC est rectangle et isocèle en A, ses deux côtés de l'angle droit valent 7,5 cm.",
              "Aire ABC = (7,5 × 7,5) ÷ 2 = 56,25 ÷ 2 = 28,125 cm².",
              "Volume d'une pyramide = (1/3) × aire de base × hauteur = (1/3) × 28,125 × 15 = 28,125 × 5 = 140,625 cm³.",
              "Soit environ **141 cm³**.",
            ],
            attendu:
              "Connaître la formule du volume d'une pyramide (1/3 × base × hauteur) et l'aire d'un triangle rectangle (produit des côtés de l'angle droit divisé par 2).",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Rapport de réduction.",
            reponse: [
              "La petite pyramide et la grande ont le même sommet S ; le rapport de réduction est le rapport des hauteurs mesurées depuis S.",
              "k = SS′ ÷ SA = 6 ÷ 15 = **2/5** (= 0,4).",
            ],
            attendu: "Prendre le rapport des hauteurs issues du sommet commun S.",
          },
          {
            type: "qa",
            num: "3.",
            points: 3,
            question: "Volume du bouchon et volume de parfum.",
            reponse: [
              "Les volumes sont multipliés par k³ : volume du bouchon = 140,625 × (2/5)³ = 140,625 × 8/125 = **9 cm³**.",
              "Le parfum occupe la partie sous le plan de coupe : 140,625 − 9 = 131,625 cm³.",
              "Soit environ **132 cm³** de parfum.",
            ],
            attendu:
              "Appliquer le coefficient k³ pour les volumes (et non k). Le volume de parfum est la différence grande pyramide − petite pyramide.",
          },
        ],
      },
      {
        titre: "Exercice 2 — La hauteur d'une pyramide monumentale",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2.5,
            question: "Diagonale AC et longueur AH.",
            reponse: [
              "Le triangle ABC est rectangle en B (angle du carré) avec AB = BC = 35,50 m. D'après Pythagore : AC² = 35,50² + 35,50² = 1 260,25 + 1 260,25 = 2 520,5.",
              "AC = √2 520,5 ≈ 50,20 m.",
              "H est le centre du carré, milieu de [AC] : AH = AC ÷ 2 ≈ 25,10 m.",
            ],
            attendu:
              "Utiliser Pythagore pour la diagonale, puis se souvenir que les diagonales d'un carré se coupent en leur milieu.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Hauteur SH.",
            reponse: [
              "Le triangle SAH est rectangle en H. D'après Pythagore : SH² = SA² − AH² = 33,14² − 25,10²… ",
              "On calcule avec les valeurs exactes : AH² = AC² ÷ 4 = 2 520,5 ÷ 4 = 630,125 ; SA² = 33,14² = 1 098,2596.",
              "SH² = 1 098,2596 − 630,125 = 468,1346, donc SH = √468,1346 ≈ **21,64 m**.",
            ],
            attendu:
              "Travailler avec AH² (valeur exacte 630,125) plutôt qu'avec l'arrondi de AH, pour limiter les erreurs d'arrondi.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Maquette à l'échelle 1/800.",
            reponse: [
              "Une arête latérale réelle mesure 33,14 m = 3 314 cm.",
              "À l'échelle 1/800 : 3 314 ÷ 800 = 4,1425 cm ≈ **4,1 cm** (au mm près).",
            ],
            attendu:
              "Convertir en centimètres avant de diviser par 800 ; respecter l'arrondi au millimètre.",
          },
        ],
      },
      {
        titre: "Exercice 3 — Conversions et grandeurs",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Volume en m³ et en litres.",
            reponse: [
              "Volume = 1,2 × 0,8 × 0,5 = 0,48 m³.",
              "Conversion : 0,48 × 1 000 = **480 L**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Volume aux 3/4.",
            reponse: [
              "Remplir aux 3/4 de la hauteur (base inchangée) revient à remplir les 3/4 du volume : 3/4 × 480 = **360 L**.",
            ],
            attendu:
              "Comprendre que remplir aux 3/4 de la hauteur d'un pavé droit correspond aux 3/4 du volume (la base ne change pas).",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Temps de remplissage.",
            reponse: [
              "Il y a proportionnalité entre le volume et le temps : temps = 360 ÷ 8 = 45 min.",
              "Ici le résultat tombe juste : **45 minutes** (soit 45 min 0 s).",
            ],
            attendu:
              "Reconnaître une situation de proportionnalité (débit constant) et diviser le volume par le débit.",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Agrandissement, réduction, conversions",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Les trois coefficients",
            lines: [
              "Pour un agrandissement/réduction de rapport k : les longueurs sont multipliées par k, les aires par k², les volumes par k³.",
              "Repérer d'abord ce que l'on cherche (longueur, aire ou volume) pour choisir la bonne puissance de k.",
            ],
          },
          {
            type: "note",
            variant: "methode",
            titre: "Conversions de volumes",
            lines: [
              "1 m³ = 1 000 L ; 1 L = 1 dm³ ; 1 cm³ = 1 mL.",
              "Toujours convertir les longueurs dans la même unité avant de calculer un volume.",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "Multiplier le volume par k au lieu de k³ lors d'une réduction.",
              "Oublier le facteur 1/3 dans le volume d'une pyramide.",
              "Utiliser l'arrondi de AH (au lieu de AH² exact) et accumuler des erreurs d'arrondi.",
              "Se tromper de conversion : 0,48 m³ vaut 480 L, pas 48 L.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 9 — Ouvrir un stand pour la fête de l'école
  // ======================================================================
  {
    slug: "maths-9-le-stand-de-la-fete",
    matiere: "maths",
    niveau: "crpe",
    titre: "Sujet blanc n°9 — Le stand de la fête de l'école",
    description:
      "Un problème ouvert de prise de décision (pourcentages, moyennes pondérées, comparaison de scénarios), un exercice de probabilités à deux épreuves et un travail sur les pourcentages. Raisonnement et justification au premier plan. Niveau CRPE.",
    epreuve: "Épreuve écrite de mathématiques (CRPE) — Problème et exercices",
    duree: "3 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "Pour le problème ouvert, toute trace de recherche, même non aboutie, sera prise en compte.",
      "Les raisonnements devront être rédigés et justifiés.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Quel emplacement choisir ? (problème ouvert)",
        points: 9,
        intro:
          "En vous appuyant sur les informations ci-dessous, déterminez l'emplacement le plus rentable pour l'été (du 1ᵉʳ juin au 31 août inclus).",
        blocks: [
          {
            type: "p",
            text: "Pour financer un projet de classe, une association tient un stand de glaces durant tout l'été, du 1ᵉʳ juin au 31 août inclus. Elle hésite entre deux emplacements.",
          },
          {
            type: "note",
            variant: "info",
            titre: "Information 1 — Loyers",
            lines: [
              "Emplacement A (bord de plage) : 2 500 € par mois.",
              "Emplacement B (centre-ville) : 60 € par jour.",
            ],
          },
          {
            type: "note",
            variant: "info",
            titre: "Information 2 — Météo de l'été",
            lines: [
              "Sur toute la période, le soleil brille 75 % des jours.",
              "Le reste du temps (25 % des jours), le temps est nuageux ou pluvieux.",
            ],
          },
          {
            type: "table",
            titre: "Information 3 — Recette prévue par jour selon la météo",
            entetes: ["", "Jour de soleil", "Jour nuageux/pluvieux"],
            lignes: [
              ["Emplacement A (plage)", "500 €", "50 €"],
              ["Emplacement B (centre-ville)", "350 €", "300 €"],
            ],
          },
          {
            type: "p",
            text: "On rappelle que juin compte 30 jours, juillet et août 31 jours chacun. La « recette » correspond aux ventes ; le « bénéfice » est la recette diminuée du loyer.",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Déterminer le nombre total de jours d'ouverture, puis le nombre de jours de soleil et le nombre de jours nuageux/pluvieux.",
                points: 2,
              },
              {
                num: "2.",
                text: "Calculer le bénéfice de l'été pour chacun des deux emplacements. Détailler les calculs (loyer et recette).",
                points: 5,
              },
              {
                num: "3.",
                text: "Conclure : quel emplacement est le plus rentable, et de combien d'euros ?",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Le jeu de la fête",
        points: 8,
        intro: "Les probabilités seront données sous forme de fractions puis, si utile, en écriture décimale.",
        blocks: [
          {
            type: "p",
            text: "Un jeu se déroule en deux temps. D'abord, le joueur ouvre l'une des 5 portes : une seule mène à la « salle du trésor », les 4 autres à la « salle de consolation ». Ensuite, il choisit une enveloppe parmi 8.",
          },
          {
            type: "list",
            items: [
              "**Salle du trésor** (8 enveloppes) : 1 enveloppe contient 100 €, 5 enveloppes contiennent 20 €, et les autres contiennent 10 €.",
              "**Salle de consolation** (8 enveloppes) : 5 enveloppes contiennent 5 €, les autres sont vides.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Quelle est la probabilité que le joueur accède à la salle du trésor ?",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Un joueur se trouve dans la salle du trésor. Combien d'enveloppes contiennent 10 € ? Quelle est la probabilité qu'il gagne au moins 20 € ?",
                points: 3,
              },
              {
                num: "3.",
                text: "Un autre joueur se trouve dans la salle de consolation. Quelle est la probabilité qu'il ne gagne rien ?",
                points: 1.5,
              },
              {
                num: "4.",
                text: "Justifier que gagner exactement 100 € est un événement moins probable que gagner exactement 20 €, dans la salle du trésor.",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Comparaison en pourcentage",
        points: 3,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "En reprenant les bénéfices de l'exercice 1, de quel pourcentage (arrondi à l'unité) le meilleur emplacement dépasse-t-il l'autre ?",
                points: 1.5,
              },
              {
                num: "2.",
                text: "L'association espérait 30 000 € de bénéfice. Quel pourcentage de cet objectif le meilleur emplacement permet-il d'atteindre ? Arrondir à l'unité.",
                points: 1.5,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine évalué", "Points"],
      lignes: [
        ["1", "Problème ouvert, pourcentages, moyenne pondérée, décision", "9"],
        ["2", "Probabilités à deux épreuves, événement contraire", "8"],
        ["3", "Pourcentages de comparaison et d'objectif", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "Le problème ouvert valorise l'organisation de la démarche (jours × recette, prise en compte du loyer). En probabilités, on attend l'usage de l'événement contraire et une lecture attentive des effectifs.",
    correction: [
      {
        titre: "Exercice 1 — Quel emplacement choisir ?",
        points: 9,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Nombre de jours.",
            reponse: [
              "Nombre de jours : 30 (juin) + 31 (juillet) + 31 (août) = **92 jours**.",
              "Jours de soleil : 75 % de 92 = 0,75 × 92 = 69 jours.",
              "Jours nuageux/pluvieux : 92 − 69 = 23 jours (ou 0,25 × 92 = 23).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 5,
            question: "Bénéfice de chaque emplacement.",
            reponse: [
              "**Emplacement A (plage).** Loyer : 3 mois × 2 500 = 7 500 €.",
              "Recette : 69 jours × 500 € + 23 jours × 50 € = 34 500 + 1 150 = 35 650 €.",
              "Bénéfice A = 35 650 − 7 500 = **28 150 €**.",
              "**Emplacement B (centre-ville).** Loyer : 92 jours × 60 € = 5 520 €.",
              "Recette : 69 jours × 350 € + 23 jours × 300 € = 24 150 + 6 900 = 31 050 €.",
              "Bénéfice B = 31 050 − 5 520 = **25 530 €**.",
            ],
            attendu:
              "Structurer le calcul (loyer d'un côté, recette météo-dépendante de l'autre), et bien compter 3 mois de loyer pour la plage mais 92 jours pour le centre-ville.",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Conclusion.",
            reponse: [
              "28 150 € > 25 530 € : l'**emplacement A (plage)** est le plus rentable.",
              "Écart : 28 150 − 25 530 = **2 620 €** de bénéfice supplémentaire.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Le jeu de la fête",
        points: 8,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Accéder à la salle du trésor.",
            reponse: [
              "1 porte sur 5 mène au trésor : P(trésor) = **1/5** = 0,2.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Enveloppes à 10 € et probabilité de gagner au moins 20 €.",
            reponse: [
              "Sur 8 enveloppes : 1 à 100 €, 5 à 20 €, donc 8 − 1 − 5 = **2 enveloppes à 10 €**.",
              "« Gagner au moins 20 € » est le contraire de « gagner 10 € ».",
              "P(au moins 20 €) = 1 − P(10 €) = 1 − 2/8 = 6/8 = **3/4** = 0,75.",
            ],
            attendu:
              "Compléter les effectifs (2 enveloppes à 10 €) puis utiliser l'événement contraire plutôt que d'additionner les cas favorables.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Ne rien gagner (salle de consolation).",
            reponse: [
              "5 enveloppes contiennent 5 €, donc 8 − 5 = 3 sont vides.",
              "P(rien) = **3/8** = 0,375.",
            ],
          },
          {
            type: "qa",
            num: "4.",
            points: 2,
            question: "Comparer P(100 €) et P(20 €).",
            reponse: [
              "P(100 €) = 1/8 et P(20 €) = 5/8.",
              "Comme 1/8 < 5/8, gagner exactement 100 € est **moins probable** que gagner exactement 20 € : il y a moins d'enveloppes favorables (1 contre 5) pour un même nombre total d'enveloppes.",
            ],
            attendu:
              "Comparer deux probabilités de même dénominateur en comparant les numérateurs (effectifs favorables).",
          },
        ],
      },
      {
        titre: "Exercice 3 — Comparaison en pourcentage",
        points: 3,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "De quel pourcentage A dépasse-t-il B ?",
            reponse: [
              "On compare l'écart au bénéfice de B (référence) : (28 150 − 25 530) ÷ 25 530 = 2 620 ÷ 25 530 ≈ 0,1026.",
              "Soit environ **10 %** de plus.",
            ],
            attendu:
              "Un pourcentage d'écart se calcule par rapport à la valeur de référence (ici le bénéfice de B).",
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Pourcentage de l'objectif atteint.",
            reponse: [
              "28 150 ÷ 30 000 ≈ 0,938, soit environ **94 %** de l'objectif de 30 000 €.",
            ],
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Problème ouvert et probabilités",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Organiser un problème de décision",
            lines: [
              "Lister les données utiles, séparer les coûts (loyer) des recettes, puis comparer des grandeurs de même nature (ici des bénéfices).",
              "Attention aux unités de facturation différentes : un loyer mensuel (× 3 mois) face à un loyer journalier (× 92 jours).",
            ],
          },
          {
            type: "note",
            variant: "methode",
            titre: "Événement contraire",
            lines: [
              "« Au moins … » se calcule souvent plus vite avec l'événement contraire : P(A) = 1 − P(non A).",
              "On vérifie toujours que la somme des probabilités de tous les cas vaut 1.",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "Compter le loyer de la plage sur 92 jours au lieu de 3 mois.",
              "Oublier de retrancher le loyer : comparer des recettes au lieu de bénéfices.",
              "Additionner les cas favorables (100 € et 20 €) au lieu d'utiliser l'événement contraire.",
              "Calculer le pourcentage d'écart par rapport à la mauvaise référence.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 10 — Programmes de calcul et fonctions
  // ======================================================================
  {
    slug: "maths-10-programmes-et-fonctions",
    matiere: "maths",
    niveau: "crpe",
    titre: "Sujet blanc n°10 — Programmes de calcul et fonctions",
    description:
      "Calcul littéral (développement, identités, équations), programmes de calcul à démontrer, fonctions affines et situations de coût, lecture d'un tableur et proportionnalité. Un sujet centré sur le raisonnement algébrique. Niveau CRPE.",
    epreuve: "Épreuve écrite de mathématiques (CRPE) — Problème et exercices",
    duree: "3 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "Les démonstrations en calcul littéral doivent être entièrement rédigées.",
      "Les quatre exercices sont indépendants.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Calcul littéral et équations",
        points: 5,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Développer et réduire l'expression (x − 1)².",
                points: 1,
              },
              {
                num: "2.",
                text: "Vérifier que −2 est une solution de l'équation 2x² + 3x − 2 = 0, puis vérifier que 1/2 en est l'autre solution.",
                points: 2,
              },
              {
                num: "3.",
                text: "On considère la fonction f définie par f(x) = 3x + 2. Calculer l'image de 4, puis déterminer l'antécédent de −7 par f.",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Deux programmes de calcul",
        points: 5,
        intro: "On note x le nombre choisi au départ.",
        blocks: [
          {
            type: "table",
            titre: "Deux programmes",
            entetes: ["Programme A", "Programme B"],
            lignes: [
              ["Choisir un nombre", "Choisir un nombre"],
              ["Lui ajouter 3", "Le multiplier par 2"],
              ["Multiplier le résultat par 2", "Ajouter 2 au résultat"],
              ["Soustraire 4", "—"],
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Montrer que le programme A donne le résultat 2x + 2.",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Exprimer le résultat du programme B en fonction de x. Que peut-on en conclure sur les deux programmes ?",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Pour quel nombre de départ le résultat de ces programmes est-il égal à 5x − 7 ? Rédiger la résolution.",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Deux formules pour la sortie scolaire",
        points: 6,
        intro: "Toutes les réponses seront justifiées.",
        blocks: [
          {
            type: "p",
            text: "Pour une sortie, une compagnie de bus propose deux formules pour une classe. On note n le nombre d'élèves.",
          },
          {
            type: "list",
            items: [
              "**Formule A** : 8 € par élève.",
              "**Formule B** : un forfait de 60 € pour le bus, puis 5 € par élève.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Exprimer, en fonction de n, le coût de chaque formule. Préciser la nature de chaque fonction.",
                points: 2,
              },
              {
                num: "2.",
                text: "Pour une classe de 25 élèves, calculer le coût de chaque formule et indiquer la plus avantageuse.",
                points: 2,
              },
              {
                num: "3.",
                text: "À partir de combien d'élèves la formule B devient-elle plus avantageuse que la formule A ? Résoudre l'inéquation correspondante et conclure.",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Tableur et proportionnalité",
        points: 4,
        blocks: [
          {
            type: "p",
            text: "On étudie un carré de côté c (en cm). Un tableur calcule, pour différentes valeurs de c, le périmètre P et l'aire A du carré.",
          },
          {
            type: "figure",
            illustration: "crpe-carre-cote-c",
            titre: "Figure — Le carré étudié",
            legende: "Carré de côté c (support de la feuille de calcul).",
          },
          {
            type: "table",
            titre: "Feuille de calcul",
            entetes: ["", "A", "B", "C"],
            lignes: [
              ["1", "Côté c (cm)", "Périmètre P", "Aire A"],
              ["2", "3", "12", "9"],
              ["3", "5", "20", "25"],
              ["4", "8", "…", "…"],
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Quelle formule peut-on saisir dans la cellule B2 pour calculer le périmètre, puis recopier vers le bas ?",
                points: 1,
              },
              {
                num: "2.",
                text: "Compléter la ligne 4 (côté 8 cm) : périmètre et aire.",
                points: 1,
              },
              {
                num: "3.",
                text: "Le périmètre est-il proportionnel au côté ? Et l'aire ? Justifier dans chaque cas.",
                points: 2,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine évalué", "Points"],
      lignes: [
        ["1", "Développement, identités remarquables, équations, fonctions", "5"],
        ["2", "Programmes de calcul, calcul littéral, équation", "5"],
        ["3", "Fonctions affines, inéquation, situation de coût", "6"],
        ["4", "Tableur, proportionnalité, aires et périmètres", "4"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une rédaction complète des développements (chaque étape justifiée), la reconnaissance des fonctions affines et linéaires, et la distinction nette entre proportionnalité (périmètre) et non-proportionnalité (aire).",
    correction: [
      {
        titre: "Exercice 1 — Calcul littéral et équations",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1,
            question: "Développer (x − 1)².",
            reponse: [
              "(x − 1)² = x² − 2 × x × 1 + 1² = **x² − 2x + 1** (identité (a − b)²).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Solutions de 2x² + 3x − 2 = 0.",
            reponse: [
              "Pour x = −2 : 2 × (−2)² + 3 × (−2) − 2 = 2 × 4 − 6 − 2 = 8 − 8 = 0. Donc −2 est solution. ✔",
              "Pour x = 1/2 : 2 × (1/2)² + 3 × (1/2) − 2 = 2 × 1/4 + 3/2 − 2 = 1/2 + 3/2 − 2 = 2 − 2 = 0. Donc 1/2 est solution. ✔",
            ],
            attendu:
              "Substituer la valeur et mener le calcul en respectant les priorités (le carré d'abord).",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Image et antécédent pour f(x) = 3x + 2.",
            reponse: [
              "Image de 4 : f(4) = 3 × 4 + 2 = **14**.",
              "Antécédent de −7 : on résout 3x + 2 = −7, soit 3x = −9, donc x = **−3**.",
            ],
            attendu:
              "Ne pas confondre image (on calcule f(4)) et antécédent (on résout f(x) = −7).",
          },
        ],
      },
      {
        titre: "Exercice 2 — Deux programmes de calcul",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Programme A.",
            reponse: [
              "En partant de x : x + 3, puis 2 × (x + 3), puis on soustrait 4.",
              "2(x + 3) − 4 = 2x + 6 − 4 = **2x + 2**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Programme B et conclusion.",
            reponse: [
              "En partant de x : 2x, puis 2x + 2. Résultat B = **2x + 2**.",
              "Les deux programmes donnent la même expression 2x + 2 : ils fournissent **toujours le même résultat**, quel que soit le nombre de départ.",
            ],
            attendu:
              "Conclure l'égalité des programmes à partir de l'égalité des expressions littérales, valable pour tout x.",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Résultat égal à 5x − 7.",
            reponse: [
              "On résout 2x + 2 = 5x − 7.",
              "2 + 7 = 5x − 2x, soit 9 = 3x, donc x = **3**.",
              "Pour le nombre 3, les programmes donnent 2 × 3 + 2 = 8, et 5 × 3 − 7 = 8. ✔",
            ],
            attendu:
              "Regrouper les termes en x d'un côté, les constantes de l'autre, puis vérifier.",
          },
        ],
      },
      {
        titre: "Exercice 3 — Deux formules pour la sortie scolaire",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Coût de chaque formule.",
            reponse: [
              "Formule A : A(n) = 8n. C'est une fonction **linéaire** (proportionnelle au nombre d'élèves).",
              "Formule B : B(n) = 60 + 5n. C'est une fonction **affine** (forfait 60 € + 5 € par élève).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Coût pour 25 élèves.",
            reponse: [
              "A(25) = 8 × 25 = 200 €.",
              "B(25) = 60 + 5 × 25 = 60 + 125 = 185 €.",
              "La **formule B** est la plus avantageuse (185 € < 200 €).",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "À partir de combien d'élèves B est-elle plus avantageuse ?",
            reponse: [
              "On cherche n tel que B(n) < A(n) : 60 + 5n < 8n.",
              "60 < 8n − 5n, soit 60 < 3n, donc n > 20.",
              "n étant un nombre entier d'élèves, la formule B est plus avantageuse **à partir de 21 élèves**. (À 20 élèves, les deux coûtent 160 €.)",
            ],
            attendu:
              "Poser et résoudre l'inéquation, puis interpréter avec un nombre entier d'élèves (le cas d'égalité n = 20 est à commenter).",
          },
        ],
      },
      {
        titre: "Exercice 4 — Tableur et proportionnalité",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1,
            question: "Formule du périmètre en B2.",
            reponse: [
              "Le périmètre d'un carré vaut 4 fois le côté : on saisit **=4*A2** (puis on recopie vers le bas).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Ligne 4 (côté 8 cm).",
            reponse: [
              "Périmètre : 4 × 8 = **32 cm**.",
              "Aire : 8 × 8 = 8² = **64 cm²**.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Proportionnalité ?",
            reponse: [
              "Périmètre : P = 4c. Les quotients P ÷ c valent 12/3 = 4 ; 20/5 = 4 ; 32/8 = 4 : constants. Le **périmètre est proportionnel au côté** (coefficient 4).",
              "Aire : A = c². Les quotients A ÷ c valent 9/3 = 3 ; 25/5 = 5 ; 64/8 = 8 : non constants. L'**aire n'est pas proportionnelle au côté** (elle est proportionnelle au carré du côté).",
            ],
            attendu:
              "Tester la constance du quotient. Bien distinguer le périmètre (proportionnel) de l'aire (non proportionnelle, en c²).",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Calcul littéral et fonctions",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Prouver qu'un programme donne toujours le même résultat",
            lines: [
              "On traduit chaque étape en expression littérale à partir de x, puis on développe et on réduit.",
              "Deux programmes donnent le même résultat pour tout x si et seulement si leurs expressions réduites sont identiques.",
            ],
          },
          {
            type: "note",
            variant: "methode",
            titre: "Fonction linéaire ou affine ?",
            lines: [
              "Fonction linéaire : f(x) = ax (passe par l'origine, situation de proportionnalité).",
              "Fonction affine : f(x) = ax + b (avec b ≠ 0, présence d'un terme fixe comme un forfait).",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "Écrire (x − 1)² = x² − 1 (oubli du double produit −2x).",
              "Confondre image et antécédent d'une fonction.",
              "Dire que l'aire d'un carré est proportionnelle à son côté : elle est proportionnelle au carré du côté.",
              "Oublier d'interpréter n comme un entier dans l'inéquation (cas d'égalité à 20 élèves).",
            ],
          },
        ],
      },
    ],
  },
];
