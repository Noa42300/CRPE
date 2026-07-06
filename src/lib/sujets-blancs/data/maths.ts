/**
 * SUJETS BLANCS — MATHÉMATIQUES (Première épreuve d'admissibilité, Partie B)
 * -------------------------------------------------------------------------
 * Plusieurs exercices indépendants (nombres & probabilités, fonctions /
 * situations de coût, géométrie & grandeurs, proportions & statistiques,
 * QCM). Toutes les valeurs numériques ont été vérifiées.
 * Contenus entièrement originaux.
 */
import type { SujetBlanc } from "../types";

export const MATHS_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1
  // ======================================================================
  {
    slug: "maths-1-la-cooperative-scolaire",
    matiere: "maths",
    titre: "Sujet blanc n°1 — La coopérative scolaire",
    description:
      "Cinq exercices indépendants : rangement de nombres et probabilités, comparaison de tarifs, aire d'une figure, statistiques d'une enquête et QCM. Niveau conforme à la partie B.",
    epreuve: "Première épreuve d'admissibilité — Partie B (Mathématiques)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "Il sera tenu compte de la clarté des raisonnements et de la qualité de la rédaction.",
      "Chaque exercice est indépendant. Le barème est indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Nombres et probabilités",
        points: 4,
        blocks: [
          {
            type: "p",
            text: "On considère les six nombres suivants :",
          },
          {
            type: "table",
            entetes: ["A", "B", "C", "D", "E", "F"],
            lignes: [
              ["2,25", "9/4", "√5", "1 + 5/4", "7/2 − 1,1", "11/5"],
            ],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Ranger ces six nombres dans l'ordre croissant.", points: 2 },
              {
                num: "2.",
                text: "On choisit au hasard l'un de ces six nombres, chacun ayant la même probabilité d'être choisi. **a.** Quelle est la probabilité que le nombre choisi soit un nombre décimal ? **b.** Quelle est la probabilité qu'il soit strictement supérieur à 2 ?",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Trois formules pour la piscine",
        points: 5,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Une piscine municipale propose trois formules pour les sorties scolaires sur l'année :",
          },
          {
            type: "list",
            items: [
              "**Formule A** : 6 € par élève et par séance.",
              "**Formule B** : un abonnement annuel de 40 € pour la classe, puis 4 € par élève et par séance.",
              "**Formule C** : un forfait annuel de 250 € donnant droit à un nombre illimité de séances pour la classe.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Une classe de 25 élèves prévoit d'aller 8 fois à la piscine dans l'année. Calculer le coût de chaque formule et indiquer la plus avantageuse.",
                points: 2,
              },
              {
                num: "2.",
                text: "Pour une classe de 25 élèves, à partir de combien de séances la formule C devient-elle plus économique que la formule B ?",
                points: 2,
              },
              {
                num: "3.",
                text: "On note n le nombre de séances. Exprimer, pour une classe de 25 élèves, le coût de la formule B en fonction de n.",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Le logo du club",
        points: 4,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Le logo d'un club sportif est formé d'un carré ABCD de côté 10 cm. À l'intérieur, on trace le cercle inscrit (tangent aux quatre côtés). La zone coloriée est la partie du carré située à l'extérieur du cercle.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Déterminer l'aire du carré.", points: 0.5 },
              {
                num: "2.",
                text: "Déterminer la valeur exacte, puis une valeur approchée au mm² près, de l'aire de la zone coloriée.",
                points: 2,
              },
              {
                num: "3.",
                text: "On agrandit le logo à l'échelle 20. Quel sera le côté, en mètres, du nouveau carré ? Quelle sera l'aire du nouveau carré, en m² ?",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Enquête sur les déplacements",
        points: 4,
        blocks: [
          {
            type: "p",
            text: "Une enquête est menée auprès des 240 élèves d'une école sur leur mode de déplacement principal. 45 % des élèves sont des filles.",
          },
          {
            type: "list",
            items: [
              "Les deux tiers des filles viennent à pied.",
              "Les garçons venant à pied représentent 66 élèves.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Compléter le tableau des effectifs ci-dessous.",
                points: 2,
              },
              {
                num: "2.",
                text: "Calculer le pourcentage d'élèves de l'école qui viennent à pied.",
                points: 1,
              },
              {
                num: "3.",
                text: "Parmi les élèves qui viennent à pied, quel est le pourcentage de filles ? Arrondir à l'unité.",
                points: 1,
              },
            ],
          },
          {
            type: "table",
            titre: "Tableau à compléter (question 1)",
            entetes: ["", "Filles", "Garçons", "Total"],
            lignes: [
              ["Viennent à pied", "…", "66", "…"],
              ["Autre mode", "…", "…", "…"],
              ["Total", "…", "…", "240"],
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        intro:
          "Une seule réponse est exacte par question. Aucune justification n'est demandée. Une réponse fausse ou l'absence de réponse ne retire aucun point.",
        blocks: [
          {
            type: "table",
            entetes: ["Question", "A", "B", "C", "D"],
            lignes: [
              [
                "1. 25 % de 480, c'est :",
                "60",
                "96",
                "120",
                "125",
              ],
              [
                "2. Un pavé de 2 m × 1,5 m × 0,5 m a un volume, en litres, de :",
                "15 L",
                "150 L",
                "1 500 L",
                "15 000 L",
              ],
              [
                "3. Réduction de rapport 0,5 : l'aire est multipliée par :",
                "0,5",
                "0,25",
                "0,05",
                "2",
              ],
              [
                "4. La moyenne de 12 ; 8 ; 15 ; 5 est :",
                "9",
                "10",
                "11",
                "12",
              ],
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine", "Points"],
      lignes: [
        ["1", "Nombres, comparaison, probabilités", "4"],
        ["2", "Proportionnalité, fonctions affines, expression littérale", "5"],
        ["3", "Aires, agrandissement, valeurs exactes", "4"],
        ["4", "Pourcentages, tableau à double entrée", "4"],
        ["5", "QCM (grandeurs, statistiques, effets d'échelle)", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "La correction détaille les raisonnements attendus. On valorise les étapes justifiées, l'usage correct des unités et la distinction entre valeur exacte et valeur approchée.",
    correction: [
      {
        titre: "Exercice 1 — Nombres et probabilités",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Ranger les six nombres dans l'ordre croissant.",
            reponse: [
              "On convertit tout en valeurs décimales : A = 2,25 ; B = 9/4 = 2,25 ; C = √5 ≈ 2,236 ; D = 1 + 5/4 = 2,25 ; E = 7/2 − 1,1 = 3,5 − 1,1 = 2,4 ; F = 11/5 = 2,2.",
              "Ordre croissant : **F (2,2) < C (√5 ≈ 2,236) < A = B = D (2,25) < E (2,4)**.",
              "On note que A, B et D sont trois écritures d'un même nombre (2,25).",
            ],
            attendu:
              "Ramener chaque nombre à une écriture comparable ; repérer l'égalité 2,25 = 9/4 = 1 + 5/4 ; situer √5 entre 2,2 et 2,25 (car 2,236² ≈ 5).",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Probabilités.",
            reponse: [
              "**a.** Sont décimaux : A (2,25), B (9/4 = 2,25), D (2,25), E (2,4), F (2,2), soit 5 nombres. C = √5 est irrationnel, donc non décimal. P(décimal) = 5/6.",
              "**b.** Strictement supérieurs à 2 : tous les six le sont (le plus petit est F = 2,2 > 2). P(> 2) = 6/6 = 1.",
            ],
            attendu:
              "Bien identifier √5 comme non décimal ; reconnaître que l'événement de la question b est certain.",
          },
        ],
      },
      {
        titre: "Exercice 2 — Trois formules pour la piscine",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Coût de chaque formule pour 25 élèves et 8 séances.",
            reponse: [
              "Formule A : 6 € × 25 élèves × 8 séances = 1 200 €.",
              "Formule B : 40 € + 4 € × 25 × 8 = 40 + 800 = 840 €.",
              "Formule C : 250 € (forfait, séances illimitées).",
              "La **formule C** est la plus avantageuse (250 € < 840 € < 1 200 €).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "À partir de combien de séances C devient-elle plus économique que B ?",
            reponse: [
              "Pour n séances, coût B = 40 + 4 × 25 × n = 40 + 100n. Coût C = 250.",
              "On cherche n tel que 250 < 40 + 100n, soit 210 < 100n, soit n > 2,1.",
              "n étant un nombre entier de séances, C devient plus économique **à partir de 3 séances**.",
            ],
            attendu:
              "Poser l'inéquation, la résoudre, puis interpréter avec un nombre entier de séances (arrondi à l'entier supérieur).",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Coût de la formule B en fonction de n.",
            reponse: [
              "Coût B(n) = 40 + 100n (en euros), avec n le nombre de séances. C'est une fonction affine de coefficient directeur 100 et d'ordonnée à l'origine 40.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Le logo du club",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 0.5,
            question: "Aire du carré.",
            reponse: ["Aire = côté² = 10² = 100 cm²."],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Aire de la zone coloriée.",
            reponse: [
              "Le cercle inscrit a pour diamètre le côté du carré, soit 10 cm, donc un rayon r = 5 cm.",
              "Aire du disque = π × r² = π × 25 = 25π cm².",
              "Aire coloriée (exacte) = 100 − 25π cm².",
              "Valeur approchée : 100 − 25 × 3,14159… ≈ 100 − 78,54 ≈ **21,46 cm²**, soit environ 21,5 cm² (au mm² près : 21,46 cm²).",
            ],
            attendu:
              "Donner d'abord la valeur EXACTE (100 − 25π) puis la valeur approchée. Le rayon vaut la moitié du côté.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Agrandissement à l'échelle 20.",
            reponse: [
              "Nouveau côté = 10 cm × 20 = 200 cm = 2 m.",
              "Aire du nouveau carré = 2² = 4 m². (On peut vérifier : l'aire est multipliée par 20² = 400, or 100 cm² × 400 = 40 000 cm² = 4 m².)",
            ],
            attendu:
              "Les longueurs sont multipliées par 20, les aires par 20² = 400. Conversion cm → m maîtrisée.",
          },
        ],
      },
      {
        titre: "Exercice 4 — Enquête sur les déplacements",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Compléter le tableau.",
            reponse: [
              "Nombre de filles : 45 % de 240 = 0,45 × 240 = 108. Nombre de garçons : 240 − 108 = 132.",
              "Filles à pied : les deux tiers de 108 = (108 ÷ 3) × 2 = 72. Garçons à pied : 66 (donné). Total à pied = 72 + 66 = 138.",
              "Autre mode par différence : filles = 108 − 72 = 36 ; garçons = 132 − 66 = 66 ; total « autre mode » = 240 − 138 = 102.",
            ],
            attendu:
              "Méthode : calculer d'abord filles (108) et garçons (132), remplir les cases connues (fractions, valeur donnée), puis compléter par différence. La cohérence des totaux est le critère principal.",
          },
          {
            type: "table",
            titre: "Tableau complété",
            entetes: ["", "Filles", "Garçons", "Total"],
            lignes: [
              ["Viennent à pied", "72", "66", "138"],
              ["Autre mode", "36", "66", "102"],
              ["Total", "108", "132", "240"],
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Pourcentage d'élèves venant à pied.",
            reponse: [
              "Total à pied = 138 sur 240. Pourcentage = 138 ÷ 240 = 0,575 = **57,5 %**.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Parmi les élèves à pied, pourcentage de filles.",
            reponse: [
              "Filles à pied ÷ total à pied = 72 ÷ 138 ≈ 0,522 ≈ **52 %** (arrondi à l'unité).",
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        blocks: [
          {
            type: "table",
            titre: "Réponses",
            entetes: ["Question", "Réponse", "Justification rapide"],
            lignes: [
              ["1", "**C** (120)", "25 % = 1/4 ; 480 ÷ 4 = 120."],
              ["2", "**C** (1 500 L)", "V = 2 × 1,5 × 0,5 = 1,5 m³ = 1 500 L (1 m³ = 1 000 L)."],
              ["3", "**B** (0,25)", "Aire multipliée par le rapport au carré : 0,5² = 0,25."],
              ["4", "**B** (10)", "(12 + 8 + 15 + 5) ÷ 4 = 40 ÷ 4 = 10."],
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2
  // ======================================================================
  {
    slug: "maths-2-le-jardin-pedagogique",
    matiere: "maths",
    titre: "Sujet blanc n°2 — Le jardin pédagogique",
    description:
      "Problème filé et exercices : proportionnalité et pourcentages, périmètre et aire, vitesse et durée, programme de calcul et QCM. Un sujet exigeant et progressif.",
    epreuve: "Première épreuve d'admissibilité — Partie B (Mathématiques)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "La clarté des raisonnements et la qualité de la rédaction sont évaluées.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Le potager de l'école",
        points: 5,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "L'école aménage un potager rectangulaire de 12 m de long et 8 m de large. On veut l'entourer d'une bordure en bois, sauf sur une ouverture de 1 m pour l'entrée.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Calculer le périmètre du rectangle, puis la longueur de bordure nécessaire (ouverture déduite).", points: 1.5 },
              { num: "2.", text: "Calculer l'aire du potager.", points: 1 },
              {
                num: "3.",
                text: "On réserve 35 % de la surface aux plantes aromatiques. Quelle surface, en m², cela représente-t-il ?",
                points: 1.5,
              },
              {
                num: "4.",
                text: "La bordure se vend par planches de 2 m, au prix de 7,50 € la planche. Combien de planches faut-il acheter et quel sera le coût total ?",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — La sortie à vélo",
        points: 4,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Une classe part en randonnée à vélo. Le trajet aller mesure 18 km. Les élèves roulent à la vitesse moyenne de 12 km/h.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Combien de temps dure le trajet aller ? Donner le résultat en heures et minutes.", points: 1.5 },
              {
                num: "2.",
                text: "Le départ a lieu à 9 h 15 et une pause de 30 minutes est prévue à mi-parcours. À quelle heure la classe arrive-t-elle ?",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Au retour, fatiguée, la classe ne roule plus qu'à 9 km/h. Quelle est la durée du trajet retour ?",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Programme de calcul",
        points: 4,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Programme",
            lines: [
              "• Choisir un nombre.",
              "• Lui ajouter 3.",
              "• Multiplier le résultat par 2.",
              "• Soustraire le double du nombre de départ.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Appliquer le programme au nombre 5, puis au nombre 10.", points: 1.5 },
              { num: "2.", text: "Que remarque-t-on ? Émettre une conjecture.", points: 1 },
              {
                num: "3.",
                text: "En notant x le nombre choisi, démontrer la conjecture à l'aide du calcul littéral.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Fractions et partage",
        points: 4,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Pour la fête de l'école, on prépare des crêpes. On utilise 3/4 d'un sac de farine le matin, puis 2/5 du reste l'après-midi.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Quelle fraction du sac reste-t-il après le matin ?", points: 1 },
              { num: "2.", text: "Quelle fraction du sac total est utilisée l'après-midi ?", points: 1.5 },
              { num: "3.", text: "Quelle fraction du sac reste-t-il à la fin de la journée ?", points: 1.5 },
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        intro:
          "Une seule réponse exacte par question. Aucune justification n'est demandée.",
        blocks: [
          {
            type: "table",
            entetes: ["Question", "A", "B", "C", "D"],
            lignes: [
              ["1. 3/4 + 1/8 =", "4/12", "7/8", "1/2", "4/8"],
              ["2. 1,2 km en mètres :", "12 m", "120 m", "1 200 m", "12 000 m"],
              ["3. Un article à 40 € augmente de 15 %. Nouveau prix :", "46 €", "55 €", "6 €", "40,15 €"],
              ["4. Le triple de la moitié de 20 :", "10", "30", "60", "15"],
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine", "Points"],
      lignes: [
        ["1", "Périmètre, aire, pourcentage, situation concrète", "5"],
        ["2", "Vitesse, durée, gestion d'horaires", "4"],
        ["3", "Programme de calcul, preuve littérale", "4"],
        ["4", "Fractions, fraction d'une fraction", "4"],
        ["5", "QCM (fractions, conversions, pourcentages)", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend des raisonnements rédigés, l'attention aux unités et, pour l'exercice 3, une preuve par le calcul littéral (et non une simple vérification sur des exemples).",
    correction: [
      {
        titre: "Exercice 1 — Le potager de l'école",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Périmètre et longueur de bordure.",
            reponse: [
              "Périmètre = 2 × (longueur + largeur) = 2 × (12 + 8) = 2 × 20 = 40 m.",
              "Longueur de bordure = 40 − 1 (ouverture) = **39 m**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Aire du potager.",
            reponse: ["Aire = longueur × largeur = 12 × 8 = **96 m²**."],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Surface des aromatiques (35 %).",
            reponse: [
              "35 % de 96 = 0,35 × 96 = **33,6 m²**.",
            ],
          },
          {
            type: "qa",
            num: "4.",
            points: 1,
            question: "Nombre de planches et coût.",
            reponse: [
              "Il faut couvrir 39 m avec des planches de 2 m : 39 ÷ 2 = 19,5. On ne peut acheter que des planches entières, donc **20 planches**.",
              "Coût = 20 × 7,50 = **150 €**.",
            ],
            attendu:
              "L'arrondi doit se faire à l'entier SUPÉRIEUR (il faut au moins couvrir 39 m).",
          },
        ],
      },
      {
        titre: "Exercice 2 — La sortie à vélo",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Durée du trajet aller.",
            reponse: [
              "Durée = distance ÷ vitesse = 18 ÷ 12 = 1,5 h = **1 h 30 min**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Heure d'arrivée.",
            reponse: [
              "Départ 9 h 15 + 1 h 30 de route = 10 h 45, plus la pause de 30 min = **11 h 15**.",
            ],
            attendu: "Ne pas oublier d'ajouter la pause à la durée de roulage.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Durée du retour à 9 km/h.",
            reponse: [
              "Durée = 18 ÷ 9 = 2 h. Le retour dure **2 heures**.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Programme de calcul",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Application à 5 et à 10.",
            reponse: [
              "Pour 5 : 5 + 3 = 8 ; 8 × 2 = 16 ; 16 − (2 × 5) = 16 − 10 = **6**.",
              "Pour 10 : 10 + 3 = 13 ; 13 × 2 = 26 ; 26 − (2 × 10) = 26 − 20 = **6**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Conjecture.",
            reponse: [
              "On obtient 6 dans les deux cas. Conjecture : **le résultat est toujours 6, quel que soit le nombre de départ**.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Preuve par le calcul littéral.",
            reponse: [
              "Soit x le nombre choisi. Le programme donne : (x + 3) × 2 − 2x = 2x + 6 − 2x = 6.",
              "Le terme 2x disparaît : le résultat est **constant, égal à 6**, indépendamment de x. La conjecture est démontrée.",
            ],
            attendu:
              "Une preuve exige le calcul littéral (développement de 2(x+3) puis simplification), pas seulement des exemples numériques.",
          },
        ],
      },
      {
        titre: "Exercice 4 — Fractions et partage",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1,
            question: "Reste après le matin.",
            reponse: [
              "On a utilisé 3/4 du sac, il reste 1 − 3/4 = **1/4** du sac.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Fraction utilisée l'après-midi.",
            reponse: [
              "L'après-midi on utilise 2/5 du reste, c'est-à-dire 2/5 de 1/4 : (2/5) × (1/4) = 2/20 = **1/10** du sac total.",
            ],
            attendu:
              "« 2/5 du reste » = produit des deux fractions, et non 2/5 du sac entier.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Reste en fin de journée.",
            reponse: [
              "Utilisé au total : 3/4 + 1/10. Mise au même dénominateur (20) : 15/20 + 2/20 = 17/20.",
              "Reste = 1 − 17/20 = **3/20** du sac.",
              "Vérification : il restait 1/4 = 5/20 après le matin ; on en retire 1/10 = 2/20, il reste 3/20. ✔",
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        blocks: [
          {
            type: "table",
            titre: "Réponses",
            entetes: ["Question", "Réponse", "Justification rapide"],
            lignes: [
              ["1", "**B** (7/8)", "3/4 = 6/8 ; 6/8 + 1/8 = 7/8."],
              ["2", "**C** (1 200 m)", "1,2 km = 1,2 × 1 000 m = 1 200 m."],
              ["3", "**A** (46 €)", "40 × 1,15 = 46."],
              ["4", "**B** (30)", "Moitié de 20 = 10 ; triple = 30."],
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 3
  // ======================================================================
  {
    slug: "maths-3-la-kermesse",
    matiere: "maths",
    titre: "Sujet blanc n°3 — La kermesse",
    description:
      "Proportionnalité et échelle, probabilités d'une roue, géométrie du triangle rectangle (Pythagore), gestion d'un budget et QCM. Sujet complet et varié.",
    epreuve: "Première épreuve d'admissibilité — Partie B (Mathématiques)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "La qualité de la rédaction et des justifications est prise en compte.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — La roue de la kermesse",
        points: 4,
        blocks: [
          {
            type: "p",
            text: "Une roue de loterie est partagée en 12 secteurs identiques : 3 rouges (gain d'une peluche), 4 verts (gain d'un bonbon) et 5 jaunes (perdu). On fait tourner la roue une fois.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Quelle est la probabilité de gagner une peluche ? de gagner un bonbon ?", points: 1.5 },
              { num: "2.", text: "Quelle est la probabilité de gagner quelque chose (peluche ou bonbon) ?", points: 1.5 },
              { num: "3.", text: "Sur 60 parties, combien de bonbons peut-on s'attendre à distribuer ?", points: 1 },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Le plan de la cour",
        points: 4,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Sur un plan à l'échelle 1/200, la cour de l'école est représentée par un rectangle de 15 cm sur 9 cm.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Quelles sont les dimensions réelles de la cour, en mètres ?", points: 2 },
              { num: "2.", text: "Quelle est l'aire réelle de la cour, en m² ?", points: 1.5 },
              { num: "3.", text: "Une allée réelle de 6 m mesurera combien sur le plan ?", points: 0.5 },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Le cerf-volant",
        points: 5,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Pour l'atelier, on fabrique un support triangulaire ABC rectangle en A, avec AB = 6 cm et AC = 8 cm.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Calculer la longueur de l'hypoténuse BC.", points: 2 },
              { num: "2.", text: "Calculer l'aire du triangle ABC.", points: 1.5 },
              {
                num: "3.",
                text: "On agrandit le patron à l'échelle 2,5. Quelles seront les longueurs des trois côtés du nouveau triangle ?",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Le budget des stands",
        points: 4,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "L'association dispose de 480 € pour les lots. Elle dépense 3/8 de cette somme en jouets, puis 120 € en confiseries.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Quel montant est dépensé en jouets ?", points: 1.5 },
              { num: "2.", text: "Quel montant reste-t-il après ces deux achats ?", points: 1.5 },
              { num: "3.", text: "Quel pourcentage du budget initial représente ce reste ?", points: 1 },
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        intro: "Une seule réponse exacte par question.",
        blocks: [
          {
            type: "table",
            entetes: ["Question", "A", "B", "C", "D"],
            lignes: [
              ["1. Le PGCD de 24 et 36 :", "6", "12", "8", "72"],
              ["2. 0,25 en fraction irréductible :", "25/100", "1/4", "1/40", "5/20"],
              ["3. Aire d'un disque de rayon 3 cm (valeur exacte) :", "6π cm²", "9π cm²", "3π cm²", "9 cm²"],
              ["4. 2 h 45 min en minutes :", "245 min", "165 min", "145 min", "285 min"],
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine", "Points"],
      lignes: [
        ["1", "Probabilités, fréquences attendues", "4"],
        ["2", "Échelle, proportionnalité, aire", "4"],
        ["3", "Théorème de Pythagore, aire, agrandissement", "5"],
        ["4", "Fractions, pourcentages, budget", "4"],
        ["5", "QCM (arithmétique, fractions, aires, durées)", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "Sujet équilibré sur les quatre domaines. On veille à l'écriture des probabilités sous forme de fractions simplifiées et à l'application rigoureuse du théorème de Pythagore (identification de l'hypoténuse).",
    correction: [
      {
        titre: "Exercice 1 — La roue de la kermesse",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Probabilités d'une peluche, d'un bonbon.",
            reponse: [
              "P(peluche) = 3/12 = **1/4**. P(bonbon) = 4/12 = **1/3**.",
            ],
            attendu: "Simplifier les fractions.",
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Probabilité de gagner quelque chose.",
            reponse: [
              "Cas favorables : 3 + 4 = 7 secteurs sur 12. P(gagner) = **7/12**.",
              "On peut vérifier : P(perdu) = 5/12, et 7/12 + 5/12 = 1. ✔",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Nombre de bonbons attendus sur 60 parties.",
            reponse: [
              "Espérance de fréquence : 1/3 × 60 = **20 bonbons** environ.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Le plan de la cour",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Dimensions réelles.",
            reponse: [
              "Échelle 1/200 : 1 cm sur le plan = 200 cm = 2 m en réalité.",
              "Longueur : 15 cm × 200 = 3 000 cm = 30 m. Largeur : 9 cm × 200 = 1 800 cm = 18 m.",
              "La cour mesure **30 m sur 18 m**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Aire réelle.",
            reponse: ["Aire = 30 × 18 = **540 m²**."],
          },
          {
            type: "qa",
            num: "3.",
            points: 0.5,
            question: "Allée de 6 m sur le plan.",
            reponse: [
              "6 m = 600 cm ; sur le plan : 600 ÷ 200 = **3 cm**.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Le cerf-volant",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Longueur de l'hypoténuse BC.",
            reponse: [
              "Le triangle est rectangle en A, donc l'hypoténuse est BC. D'après le théorème de Pythagore : BC² = AB² + AC² = 6² + 8² = 36 + 64 = 100.",
              "Donc BC = √100 = **10 cm**.",
            ],
            attendu:
              "Nommer le théorème, identifier l'hypoténuse (côté opposé à l'angle droit).",
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Aire du triangle.",
            reponse: [
              "Les côtés de l'angle droit sont les côtés perpendiculaires : Aire = (AB × AC) ÷ 2 = (6 × 8) ÷ 2 = 48 ÷ 2 = **24 cm²**.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Côtés après agrandissement à l'échelle 2,5.",
            reponse: [
              "Chaque longueur est multipliée par 2,5 : AB → 6 × 2,5 = 15 cm ; AC → 8 × 2,5 = 20 cm ; BC → 10 × 2,5 = 25 cm.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Le budget des stands",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Montant dépensé en jouets.",
            reponse: [
              "3/8 de 480 = (480 ÷ 8) × 3 = 60 × 3 = **180 €**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Montant restant.",
            reponse: [
              "Dépenses totales : 180 + 120 = 300 €. Reste = 480 − 300 = **180 €**.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Pourcentage restant.",
            reponse: [
              "180 ÷ 480 = 0,375 = **37,5 %** du budget initial.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        blocks: [
          {
            type: "table",
            titre: "Réponses",
            entetes: ["Question", "Réponse", "Justification rapide"],
            lignes: [
              ["1", "**B** (12)", "24 = 12×2, 36 = 12×3 ; 12 divise les deux, c'est le plus grand."],
              ["2", "**B** (1/4)", "0,25 = 25/100 = 1/4."],
              ["3", "**B** (9π cm²)", "A = π × r² = π × 3² = 9π."],
              ["4", "**B** (165 min)", "2 h = 120 min ; 120 + 45 = 165."],
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 4 — Le nouveau stade (figures : graphique, diagramme, triangle)
  // ======================================================================
  {
    slug: "maths-4-le-nouveau-stade",
    matiere: "maths",
    titre: "Sujet blanc n°4 — Le nouveau stade",
    description:
      "Un sujet très visuel : fractions et pourcentages, lecture d'un graphique de tarifs, géométrie du triangle rectangle et exploitation d'un diagramme en barres.",
    epreuve: "Première épreuve d'admissibilité — Partie B (Mathématiques)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "Il sera tenu compte de la clarté des raisonnements et de la qualité de la rédaction.",
      "Chaque exercice est indépendant. Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — La billetterie",
        points: 4,
        blocks: [
          {
            type: "p",
            text: "Un stade contient 4 500 places. Lors d'un match, 3/5 des places sont occupées par des adultes, 20 % par des enfants, et le reste des places est vide.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Calculer le nombre de places occupées par des adultes.", points: 1 },
              { num: "2.", text: "Calculer le nombre de places occupées par des enfants.", points: 1 },
              { num: "3.", text: "En déduire le nombre de places vides.", points: 1 },
              { num: "4.", text: "Quel pourcentage des places du stade est vide ?", points: 1 },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Deux formules d'abonnement",
        points: 5,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Un supporter peut assister aux matchs de la saison selon deux formules :",
          },
          {
            type: "list",
            items: [
              "**Formule A** : 8 € par match, sans abonnement.",
              "**Formule B** : un abonnement de 30 € pour la saison, puis 5 € par match.",
            ],
          },
          {
            type: "figure",
            illustration: "maths-graph-tarifs",
            titre: "Document — Coût des deux formules selon le nombre de matchs",
            legende:
              "La droite bleue représente la formule A, la droite rouge la formule B (illustration originale).",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Par lecture graphique, estimer le nombre de matchs à partir duquel la formule B devient plus avantageuse que la formule A.",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Retrouver ce résultat par le calcul (on pourra exprimer le coût de chaque formule en fonction du nombre n de matchs).",
                points: 2,
              },
              {
                num: "3.",
                text: "Un supporter prévoit d'assister à 12 matchs. Quelle formule doit-il choisir ? Justifier par le calcul.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Le panneau d'affichage",
        points: 4,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Un panneau publicitaire a la forme d'un triangle ABC rectangle en A, avec AB = 3 m et AC = 4 m.",
          },
          {
            type: "figure",
            illustration: "maths-triangle-rectangle",
            titre: "Document — Le panneau triangulaire ABC",
            legende: "Figure non à l'échelle (illustration originale).",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Calculer la longueur de l'hypoténuse BC.", points: 2 },
              { num: "2.", text: "Calculer l'aire du panneau triangulaire.", points: 1 },
              {
                num: "3.",
                text: "On réalise une maquette du panneau à l'échelle 1/50. Donner les longueurs des trois côtés de la maquette, en centimètres.",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Comment viennent les élèves ?",
        points: 4,
        blocks: [
          {
            type: "p",
            text: "Une enquête est menée auprès des 120 élèves qui fréquentent le stade scolaire. Le diagramme en barres ci-dessous donne leur mode de déplacement principal.",
          },
          {
            type: "figure",
            illustration: "maths-graph-barres",
            titre: "Document — Mode de déplacement des 120 élèves",
            legende: "Diagramme en barres (illustration originale).",
          },
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Lire, pour chaque mode de déplacement, le nombre d'élèves concernés. Vérifier que le total est bien 120.",
                points: 1.5,
              },
              { num: "2.", text: "Quel pourcentage des élèves vient à pied ?", points: 1 },
              {
                num: "3.",
                text: "On veut représenter ces données par un diagramme circulaire. Calculer la mesure de l'angle du secteur correspondant aux élèves venant à vélo.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        intro: "Une seule réponse exacte par question. Aucune justification n'est demandée.",
        blocks: [
          {
            type: "table",
            entetes: ["Question", "A", "B", "C", "D"],
            lignes: [
              ["1. 3/5 de 4 500 :", "900", "1 500", "2 700", "3 600"],
              ["2. Un angle plat mesure :", "90°", "180°", "270°", "360°"],
              ["3. √49 =", "6", "7", "8", "24,5"],
              ["4. 0,2 exprimé en pourcentage :", "2 %", "20 %", "0,2 %", "200 %"],
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine", "Points"],
      lignes: [
        ["1", "Fractions, pourcentages d'un effectif", "4"],
        ["2", "Fonctions affines, lecture graphique, comparaison", "5"],
        ["3", "Théorème de Pythagore, aire, échelle", "4"],
        ["4", "Lecture de diagramme, pourcentages, angles", "4"],
        ["5", "QCM (fractions, angles, racines, pourcentages)", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "Sujet volontairement illustré (graphique, diagramme, figure). On valorise l'articulation entre lecture graphique et vérification par le calcul, ainsi que le soin apporté aux unités.",
    correction: [
      {
        titre: "Exercice 1 — La billetterie",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1,
            question: "Places occupées par des adultes.",
            reponse: ["3/5 de 4 500 = (4 500 ÷ 5) × 3 = 900 × 3 = **2 700 adultes**."],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Places occupées par des enfants.",
            reponse: ["20 % de 4 500 = 0,20 × 4 500 = **900 enfants**."],
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Nombre de places vides.",
            reponse: ["4 500 − 2 700 − 900 = **900 places vides**."],
          },
          {
            type: "qa",
            num: "4.",
            points: 1,
            question: "Pourcentage de places vides.",
            reponse: [
              "900 ÷ 4 500 = 0,20 = **20 %**. (On pouvait aussi remarquer : 3/5 = 60 % d'adultes, + 20 % d'enfants = 80 %, donc 20 % de places vides.)",
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Deux formules d'abonnement",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Lecture graphique du seuil.",
            reponse: [
              "Les deux droites se croisent au point entouré : à gauche de ce point, la droite bleue (formule A) est en dessous (moins chère) ; à droite, la droite rouge (formule B) passe en dessous.",
              "On lit une intersection **aux alentours de 10 matchs** : au-delà, la formule B devient plus avantageuse.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Vérification par le calcul.",
            reponse: [
              "Pour n matchs : coût A = 8n ; coût B = 30 + 5n.",
              "B est plus avantageuse quand 30 + 5n < 8n, soit 30 < 3n, soit n > 10.",
              "La formule B devient plus avantageuse **à partir de 11 matchs** (à 10 matchs, les deux coûtent 80 €).",
            ],
            attendu:
              "Poser les deux expressions, résoudre l'inéquation, puis interpréter avec un nombre entier de matchs. Le graphique et le calcul se confirment.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Choix pour 12 matchs.",
            reponse: [
              "Coût A = 8 × 12 = 96 €. Coût B = 30 + 5 × 12 = 30 + 60 = 90 €.",
              "90 € < 96 € : il doit choisir la **formule B** (économie de 6 €).",
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Le panneau d'affichage",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Longueur de l'hypoténuse BC.",
            reponse: [
              "Le triangle est rectangle en A, donc BC est l'hypoténuse. D'après le théorème de Pythagore : BC² = AB² + AC² = 3² + 4² = 9 + 16 = 25.",
              "BC = √25 = **5 m**.",
            ],
            attendu: "Nommer le théorème, identifier l'hypoténuse (opposée à l'angle droit).",
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Aire du panneau.",
            reponse: [
              "Aire = (AB × AC) ÷ 2 = (3 × 4) ÷ 2 = 12 ÷ 2 = **6 m²**.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Dimensions de la maquette (échelle 1/50).",
            reponse: [
              "À l'échelle 1/50, chaque longueur réelle est divisée par 50. 3 m = 300 cm → 6 cm ; 4 m = 400 cm → 8 cm ; 5 m = 500 cm → 10 cm.",
              "Maquette : **6 cm, 8 cm et 10 cm**.",
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — Comment viennent les élèves ?",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Lecture des effectifs.",
            reponse: [
              "À pied : 60 élèves ; à vélo : 40 élèves ; en voiture : 20 élèves.",
              "Vérification : 60 + 40 + 20 = **120 élèves**. ✔",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Pourcentage venant à pied.",
            reponse: ["60 ÷ 120 = 0,5 = **50 %**."],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Angle du secteur « vélo » (diagramme circulaire).",
            reponse: [
              "Le disque entier (360°) représente 120 élèves. Les 40 élèves à vélo correspondent à : (40 ÷ 120) × 360° = (1/3) × 360° = **120°**.",
            ],
            attendu:
              "Utiliser la proportionnalité entre effectif et angle (360° pour l'effectif total).",
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        blocks: [
          {
            type: "table",
            titre: "Réponses",
            entetes: ["Question", "Réponse", "Justification rapide"],
            lignes: [
              ["1", "**C** (2 700)", "3/5 × 4 500 = 2 700."],
              ["2", "**B** (180°)", "Un angle plat est un demi-tour."],
              ["3", "**B** (7)", "7 × 7 = 49."],
              ["4", "**B** (20 %)", "0,2 = 20/100 = 20 %."],
            ],
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Réussir un sujet de mathématiques du CRPE",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Lire tout l'exercice avant de commencer** : repérer les données, ce qui est cherché, et l'unité attendue dans la réponse.",
              "**Justifier chaque étape** : le barème valorise le raisonnement autant que le résultat. Une réponse juste non justifiée perd des points.",
              "**Soigner les unités** : convertir avant de calculer (m ↔ cm, m³ ↔ L), et vérifier l'unité finale.",
              "**Distinguer lecture graphique et calcul** : quand un graphique est fourni, la lecture donne une estimation ; le calcul la confirme de façon exacte.",
              "**Vérifier la vraisemblance** : un effectif est un entier ; une probabilité est comprise entre 0 et 1 ; une aire s'exprime en unités².",
            ],
          },
          {
            type: "note",
            variant: "methode",
            titre: "Pour la géométrie",
            lines: [
              "Avant d'appliquer le théorème de Pythagore, vérifier que le triangle est rectangle et identifier l'hypoténuse (le côté opposé à l'angle droit, toujours le plus long).",
              "Pour un agrandissement/réduction de rapport k : les longueurs sont multipliées par k, les aires par k², les volumes par k³.",
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
              "**Confondre « fraction de » et pourcentage** : 3/5 = 60 %, pas 35 %.",
              "**Oublier de convertir les unités** avant un calcul d'échelle (3 m = 300 cm avant de diviser par 50).",
              "**Appliquer le rapport d'échelle aux aires comme aux longueurs** : à l'échelle 1/50, l'aire est divisée par 50² = 2 500, pas par 50.",
              "**Arrondir trop tôt** : conserver les valeurs exactes le plus longtemps possible, n'arrondir qu'à la fin.",
              "**Répondre sans unité** : « 5 » au lieu de « 5 m » est pénalisé.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 5 — L'aménagement de la cour (figures : terrain, plan)
  // ======================================================================
  {
    slug: "maths-5-l-amenagement-de-la-cour",
    matiere: "maths",
    titre: "Sujet blanc n°5 — L'aménagement de la cour",
    description:
      "Aire d'une figure composée, plan à l'échelle et diagonale (Pythagore), volume d'un bac à sable et proportionnalité d'une recette. Un sujet riche en figures.",
    epreuve: "Première épreuve d'admissibilité — Partie B (Mathématiques)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "L'usage de la calculatrice est autorisé.",
      "La clarté des raisonnements et la qualité de la rédaction sont évaluées.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Exercice 1 — Le nouvel espace vert",
        points: 5,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "L'école aménage un espace vert dont la forme est un rectangle surmonté d'un triangle, comme sur le schéma ci-dessous.",
          },
          {
            type: "figure",
            illustration: "maths-terrain-composite",
            titre: "Document — Plan de l'espace vert",
            legende: "Figure non à l'échelle (illustration originale).",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Calculer l'aire de la partie rectangulaire.", points: 1 },
              { num: "2.", text: "Calculer l'aire de la partie triangulaire.", points: 1.5 },
              { num: "3.", text: "En déduire l'aire totale de l'espace vert.", points: 1 },
              {
                num: "4.",
                text: "On veut recouvrir tout l'espace vert de gazon vendu 8 € le m². Quel sera le coût total ?",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 2 — Le plan de la cour",
        points: 5,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "La cour de récréation est représentée par un rectangle sur un plan à l'échelle 1/200. Une allée relie deux coins opposés (voir le schéma).",
          },
          {
            type: "figure",
            illustration: "maths-plan-cour",
            titre: "Document — Plan de la cour (échelle 1/200)",
            legende: "Illustration originale.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Déterminer les dimensions réelles de la cour, en mètres.", points: 2 },
              { num: "2.", text: "Calculer l'aire réelle de la cour, en m².", points: 1.5 },
              {
                num: "3.",
                text: "Calculer la longueur réelle de l'allée diagonale, arrondie au mètre.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 3 — Le bac à sable",
        points: 4,
        intro: "Toutes les réponses devront être justifiées.",
        blocks: [
          {
            type: "p",
            text: "Un bac à sable a la forme d'un pavé droit de 3 m de long, 2 m de large et 0,4 m de haut.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Calculer le volume du bac à sable, en m³.", points: 1.5 },
              { num: "2.", text: "Exprimer ce volume en litres (rappel : 1 m³ = 1 000 L).", points: 1 },
              {
                num: "3.",
                text: "On remplit le bac de sable aux trois quarts de sa hauteur. Quel volume de sable, en m³, faut-il ?",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Exercice 4 — La recette de la kermesse",
        points: 3,
        blocks: [
          {
            type: "p",
            text: "Une recette de gâteau pour 4 personnes nécessite 200 g de farine. On suppose la quantité de farine proportionnelle au nombre de personnes.",
          },
          {
            type: "table",
            titre: "Tableau à compléter",
            entetes: ["Nombre de personnes", "4", "6", "10"],
            lignes: [["Farine (g)", "200", "…", "…"]],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Compléter le tableau de proportionnalité.", points: 1.5 },
              { num: "2.", text: "Quel est le coefficient de proportionnalité (masse de farine par personne) ?", points: 1 },
              { num: "3.", text: "Avec 750 g de farine, pour combien de personnes peut-on préparer le gâteau ?", points: 0.5 },
            ],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        intro: "Une seule réponse exacte par question.",
        blocks: [
          {
            type: "table",
            entetes: ["Question", "A", "B", "C", "D"],
            lignes: [
              ["1. 2,4 m³ en litres :", "24 L", "240 L", "2 400 L", "24 000 L"],
              ["2. Aire d'un rectangle 20 m × 12 m :", "64 m²", "120 m²", "240 m²", "32 m²"],
              ["3. √(30² + 40²) =", "50", "70", "35", "1 250"],
              ["4. Les 3/4 de 0,4 m :", "0,1 m", "0,3 m", "0,12 m", "0,75 m"],
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Exercice", "Domaine", "Points"],
      lignes: [
        ["1", "Aire d'une figure composée, coût", "5"],
        ["2", "Échelle, aire, diagonale (Pythagore)", "5"],
        ["3", "Volume d'un pavé, conversions, fraction", "4"],
        ["4", "Proportionnalité", "3"],
        ["5", "QCM (conversions, aires, Pythagore, fractions)", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "Sujet appuyé sur des figures. On attend un découpage clair des figures composées, une gestion rigoureuse des échelles et des unités, et l'emploi du théorème de Pythagore pour la diagonale.",
    correction: [
      {
        titre: "Exercice 1 — Le nouvel espace vert",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1,
            question: "Aire de la partie rectangulaire.",
            reponse: ["Aire du rectangle = longueur × largeur = 20 × 12 = **240 m²**."],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Aire de la partie triangulaire.",
            reponse: [
              "Le triangle a pour base 20 m (le haut du rectangle) et pour hauteur 9 m.",
              "Aire du triangle = (base × hauteur) ÷ 2 = (20 × 9) ÷ 2 = 180 ÷ 2 = **90 m²**.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Aire totale.",
            reponse: ["Aire totale = 240 + 90 = **330 m²**."],
            attendu: "Additionner les aires des deux figures simples qui composent la surface.",
          },
          {
            type: "qa",
            num: "4.",
            points: 1.5,
            question: "Coût du gazon.",
            reponse: ["Coût = 330 m² × 8 €/m² = **2 640 €**."],
          },
        ],
      },
      {
        titre: "Exercice 2 — Le plan de la cour",
        points: 5,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Dimensions réelles.",
            reponse: [
              "Échelle 1/200 : 1 cm sur le plan représente 200 cm = 2 m en réalité.",
              "Longueur : 15 cm × 200 = 3 000 cm = 30 m. Largeur : 9 cm × 200 = 1 800 cm = 18 m.",
              "La cour mesure **30 m sur 18 m**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Aire réelle.",
            reponse: ["Aire = 30 × 18 = **540 m²**."],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Longueur réelle de l'allée diagonale.",
            reponse: [
              "L'allée est la diagonale du rectangle : elle forme l'hypoténuse d'un triangle rectangle de côtés 30 m et 18 m.",
              "Pythagore : diagonale² = 30² + 18² = 900 + 324 = 1 224. Diagonale = √1 224 ≈ 34,99 m ≈ **35 m**.",
            ],
            attendu:
              "Reconnaître que la diagonale est l'hypoténuse d'un triangle rectangle et appliquer Pythagore.",
          },
        ],
      },
      {
        titre: "Exercice 3 — Le bac à sable",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Volume du bac.",
            reponse: ["Volume d'un pavé = L × l × h = 3 × 2 × 0,4 = **2,4 m³**."],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Volume en litres.",
            reponse: ["2,4 m³ × 1 000 = **2 400 L**."],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Volume de sable (aux trois quarts).",
            reponse: [
              "Trois quarts du volume : 3/4 × 2,4 = (2,4 ÷ 4) × 3 = 0,6 × 3 = **1,8 m³** de sable.",
            ],
            attendu:
              "« Aux trois quarts de la hauteur » revient ici à prendre les 3/4 du volume, car seule la hauteur de remplissage varie proportionnellement.",
          },
        ],
      },
      {
        titre: "Exercice 4 — La recette de la kermesse",
        points: 3,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Compléter le tableau.",
            reponse: [
              "La farine est proportionnelle au nombre de personnes. Pour 6 personnes : 200 × 6 ÷ 4 = 300 g. Pour 10 personnes : 200 × 10 ÷ 4 = 500 g.",
              "Tableau : 4 → 200 g ; 6 → **300 g** ; 10 → **500 g**.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1,
            question: "Coefficient de proportionnalité.",
            reponse: ["200 ÷ 4 = **50 g de farine par personne**."],
          },
          {
            type: "qa",
            num: "3.",
            points: 0.5,
            question: "Avec 750 g de farine.",
            reponse: ["750 ÷ 50 = **15 personnes**."],
          },
        ],
      },
      {
        titre: "Exercice 5 — QCM",
        points: 3,
        blocks: [
          {
            type: "table",
            titre: "Réponses",
            entetes: ["Question", "Réponse", "Justification rapide"],
            lignes: [
              ["1", "**C** (2 400 L)", "2,4 × 1 000 = 2 400."],
              ["2", "**C** (240 m²)", "20 × 12 = 240."],
              ["3", "**A** (50)", "30² + 40² = 2 500 ; √2 500 = 50."],
              ["4", "**B** (0,3 m)", "3/4 × 0,4 = 0,3."],
            ],
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Figures, échelles et volumes",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Décomposer une figure complexe** en figures simples (rectangle, triangle) dont on sait calculer l'aire, puis additionner (ou soustraire).",
              "**Faire une phrase-réponse** avec l'unité correcte à chaque question.",
              "**Échelle** : écrire la relation « 1 unité sur le plan → tant en réalité », convertir en une seule unité, puis multiplier ou diviser.",
              "**Diagonale d'un rectangle** : c'est l'hypoténuse d'un triangle rectangle → penser à Pythagore.",
              "**Volumes** : bien identifier la formule (pavé : L × l × h) et l'unité (m³, puis conversion en litres si demandé).",
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
              "**Oublier de diviser par 2** dans l'aire du triangle.",
              "**Confondre 1 m³ et 1 L** : 1 m³ = 1 000 L (et 1 L = 1 dm³).",
              "**Prendre la mauvaise échelle** : à l'échelle 1/200, la réalité est 200 fois plus grande que le plan.",
              "**Additionner les longueurs pour la diagonale** (30 + 18 = 48) au lieu d'appliquer Pythagore (√(30² + 18²) ≈ 35).",
              "**Confondre m² et m³** : une aire est en m², un volume en m³.",
            ],
          },
        ],
      },
    ],
  },
];
