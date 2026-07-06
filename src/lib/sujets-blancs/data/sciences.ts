/**
 * SUJETS BLANCS — SCIENCES ET TECHNOLOGIE (Seconde épreuve, Domaine 1)
 * -------------------------------------------------------------------
 * Questions mêlant physique-chimie, SVT et technologie, appuyées sur des
 * situations et des données. Contenus originaux. On évalue les
 * connaissances ET la démarche scientifique (observer, raisonner,
 * expliquer à des élèves).
 */
import type { SujetBlanc } from "../types";

export const SCIENCES_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1 — L'eau dans tous ses états
  // ======================================================================
  {
    slug: "sciences-1-l-eau-dans-tous-ses-etats",
    matiere: "sciences",
    titre: "Sujet blanc n°1 — L'eau dans tous ses états",
    description:
      "États et changements d'état, dissolution, cycle de l'eau et raisonnement d'élèves. Un sujet de sciences complet abordant physique-chimie et démarche d'investigation.",
    difficulty: "moyen",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 1 (Sciences et technologie)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Les réponses doivent être rédigées, justifiées, et adaptées quand la question porte sur des élèves.",
      "Le barème est indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "1.1 — Changements d'état",
        points: 7,
        blocks: [
          {
            type: "p",
            text: "On place au congélateur une bouteille en plastique remplie à ras bord d'eau liquide et soigneusement bouchée. Quelques heures plus tard, la bouteille est déformée : ses parois sont bombées.",
          },
          {
            type: "questions",
            items: [
              { num: "1.1.1", text: "Nommer le changement d'état qui s'est produit et indiquer la température à laquelle il se produit pour l'eau pure sous pression atmosphérique.", points: 2 },
              { num: "1.1.2", text: "Expliquer pourquoi la bouteille se déforme. Que peut-on en déduire sur le volume de l'eau lorsqu'elle gèle ?", points: 3 },
              { num: "1.1.3", text: "Un élève affirme : « quand l'eau gèle, sa masse augmente ». Cette affirmation est-elle correcte ? Justifier.", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "1.2 — Dissolution et mélanges",
        points: 7,
        blocks: [
          {
            type: "p",
            text: "En classe, on dissout une cuillère de sel dans un verre d'eau, puis une cuillère de sable dans un autre verre d'eau.",
          },
          {
            type: "questions",
            items: [
              { num: "1.2.1", text: "Dans chaque cas, indiquer si l'on obtient un mélange homogène ou hétérogène. Justifier.", points: 2 },
              { num: "1.2.2", text: "Proposer une technique pour séparer le sable de l'eau, puis une technique pour récupérer le sel dissous.", points: 3 },
              { num: "1.2.3", text: "Un élève pense que le sel « a disparu » dans l'eau. Comment lui montrer, par une expérience simple, que le sel est toujours présent ?", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "1.3 — Le cycle de l'eau",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.3.1", text: "Citer, dans l'ordre, les principales étapes du cycle de l'eau et nommer les changements d'état associés.", points: 3 },
              { num: "1.3.2", text: "Expliquer, en une démarche adaptée au cycle 3, comment fabriquer un modèle réduit du cycle de l'eau en classe.", points: 3 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["1.1", "Changements d'état, conservation de la masse, dilatation", "7"],
        ["1.2", "Mélanges, techniques de séparation, démarche expérimentale", "7"],
        ["1.3", "Cycle de l'eau, modélisation en classe", "6"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On distingue soigneusement masse (conservée) et volume (qui varie). Les réponses sur les élèves doivent proposer une expérience concrète et un raisonnement, pas seulement énoncer le savoir.",
    correction: [
      {
        titre: "1.1 — Changements d'état",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.1.1",
            points: 2,
            question: "Nom du changement d'état et température.",
            reponse: [
              "Il s'agit de la **solidification** (passage de l'état liquide à l'état solide).",
              "Pour l'eau pure, sous pression atmosphérique normale, elle se produit à **0 °C**.",
            ],
          },
          {
            type: "qa",
            num: "1.1.2",
            points: 3,
            question: "Pourquoi la bouteille se déforme.",
            reponse: [
              "L'eau qui gèle occupe un volume plus grand que l'eau liquide : en gelant, la glace pousse sur les parois de la bouteille pleine et fermée, qui se bombent.",
              "On en déduit que, contrairement à la plupart des corps, **le volume de l'eau augmente lorsqu'elle passe de l'état liquide à l'état solide** (l'eau se dilate en gelant).",
            ],
            attendu:
              "Relier la déformation à l'augmentation de volume ; c'est une propriété remarquable de l'eau.",
          },
          {
            type: "qa",
            num: "1.1.3",
            points: 2,
            question: "« Quand l'eau gèle, sa masse augmente. » Vrai ou faux ?",
            reponse: [
              "Affirmation **incorrecte**. Lors d'un changement d'état, la **masse se conserve** : la même quantité de matière est présente avant et après.",
              "Ce qui change, c'est le volume (il augmente), donc aussi la masse volumique (elle diminue), mais pas la masse elle-même. La confusion fréquente porte sur volume et masse.",
            ],
            attendu:
              "Énoncer la conservation de la masse et lever la confusion masse/volume.",
          },
        ],
      },
      {
        titre: "1.2 — Dissolution et mélanges",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.2.1",
            points: 2,
            question: "Homogène ou hétérogène ?",
            reponse: [
              "Eau + sel : mélange **homogène** — après dissolution, on ne distingue plus les constituants à l'œil nu, le liquide est limpide et uniforme.",
              "Eau + sable : mélange **hétérogène** — on distingue nettement le sable (qui se dépose au fond), les constituants restent visibles.",
            ],
          },
          {
            type: "qa",
            num: "1.2.2",
            points: 3,
            question: "Techniques de séparation.",
            reponse: [
              "Séparer le sable de l'eau : la **filtration** (le sable est retenu par le filtre, l'eau passe) ou la **décantation** puis on verse le liquide.",
              "Récupérer le sel dissous : l'**évaporation** — on chauffe (ou on laisse à l'air) l'eau salée ; l'eau s'évapore et le sel reste au fond.",
            ],
            attendu:
              "Filtration/décantation pour un mélange hétérogène ; évaporation pour récupérer un solide dissous.",
          },
          {
            type: "qa",
            num: "1.2.3",
            points: 2,
            question: "Montrer que le sel n'a pas disparu.",
            reponse: [
              "On peut faire **évaporer** l'eau salée : le sel réapparaît sous forme de cristaux, preuve qu'il était toujours là.",
              "On peut aussi goûter (dans un cadre pédagogique adapté) : l'eau a un goût salé ; ou comparer la masse totale avant/après dissolution, qui reste identique.",
            ],
            attendu:
              "Proposer une expérience simple et concluante (évaporation) reliée à la conservation de la matière.",
          },
        ],
      },
      {
        titre: "1.3 — Le cycle de l'eau",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.3.1",
            points: 3,
            question: "Étapes et changements d'état.",
            reponse: [
              "**Évaporation** : l'eau des océans, lacs et sols passe de l'état liquide à l'état gazeux (vapeur d'eau) sous l'effet du Soleil — changement d'état : vaporisation.",
              "**Condensation** : en altitude, la vapeur se refroidit et forme les nuages (fines gouttelettes) — changement d'état : liquéfaction (voire solidification pour la neige/grêle).",
              "**Précipitations** : pluie, neige, grêle tombent au sol.",
              "**Ruissellement et infiltration** : l'eau rejoint les cours d'eau, les nappes, puis les océans, et le cycle recommence.",
            ],
          },
          {
            type: "qa",
            num: "1.3.2",
            points: 3,
            question: "Modèle réduit en classe (cycle 3).",
            reponse: [
              "Dispositif : placer de l'eau chaude dans un récipient transparent fermé, poser dessus un couvercle (ou film) avec quelques glaçons.",
              "Observation : la vapeur monte (évaporation), rencontre la paroi froide, s'y condense en gouttelettes (condensation), qui retombent (précipitations).",
              "Démarche : partir des représentations des élèves, formuler une question, prévoir, observer, puis relier chaque étape du modèle au cycle réel. Insister sur les limites du modèle (échelle, Soleil remplacé par la source chaude).",
            ],
            attendu:
              "Décrire un montage réalisable ET la démarche d'investigation associée ; mentionner que c'est un modèle.",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2 — Le vivant et son environnement
  // ======================================================================
  {
    slug: "sciences-2-le-vivant-et-son-environnement",
    matiere: "sciences",
    titre: "Sujet blanc n°2 — Le vivant et son environnement",
    description:
      "Caractéristiques du vivant, classification, chaînes alimentaires et respiration. Sujet de SVT centré sur le raisonnement scientifique et les conceptions des élèves.",
    difficulty: "moyen",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 1 (Sciences et technologie)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Les réponses sont rédigées et justifiées ; certaines s'adressent à des élèves.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "2.1 — Vivant ou non-vivant ?",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "2.1.1", text: "Citer quatre caractéristiques communes à tous les êtres vivants.", points: 2 },
              { num: "2.1.2", text: "Deux élèves discutent. Léa affirme : « le feu est vivant car il bouge et se nourrit de bois ». Théo dit : « la graine n'est pas vivante car elle ne bouge pas ». Analyser chaque raisonnement et expliquer comment y répondre.", points: 4 },
            ],
          },
        ],
      },
      {
        titre: "2.2 — Classer les animaux",
        points: 7,
        blocks: [
          {
            type: "p",
            text: "On dispose des animaux suivants : la truite, le pigeon, la grenouille, la chauve-souris, le lézard.",
          },
          {
            type: "questions",
            items: [
              { num: "2.2.1", text: "Sur quels critères scientifiques (attributs) peut-on fonder un classement ? En proposer deux.", points: 2 },
              { num: "2.2.2", text: "Parmi ces animaux, lesquels sont des mammifères ? Justifier par un attribut.", points: 2 },
              { num: "2.2.3", text: "Un élève classe la chauve-souris parmi les oiseaux « parce qu'elle vole ». Expliquer pourquoi ce critère n'est pas pertinent scientifiquement.", points: 3 },
            ],
          },
        ],
      },
      {
        titre: "2.3 — Chaînes alimentaires et respiration",
        points: 7,
        blocks: [
          {
            type: "p",
            text: "Dans une prairie : herbe → sauterelle → grenouille → couleuvre.",
          },
          {
            type: "questions",
            items: [
              { num: "2.3.1", text: "Identifier le producteur, un consommateur primaire et un consommateur secondaire. Que signifie le sens des flèches ?", points: 3 },
              { num: "2.3.2", text: "Que deviendrait cette chaîne si les sauterelles disparaissaient ? Raisonner sur les conséquences.", points: 2 },
              { num: "2.3.3", text: "Tous ces animaux respirent. Quels gaz sont échangés lors de la respiration ? En quoi cela diffère-t-il de la photosynthèse de l'herbe ?", points: 2 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["2.1", "Caractéristiques du vivant, analyse de conceptions", "6"],
        ["2.2", "Classification par attributs, mammifères", "7"],
        ["2.3", "Réseaux trophiques, respiration vs photosynthèse", "7"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "La classification scientifique repose sur ce que les animaux « ont » (attributs partagés), non sur ce qu'ils « font » (voler, nager). On attend une analyse fine des conceptions erronées des élèves.",
    correction: [
      {
        titre: "2.1 — Vivant ou non-vivant ?",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "2.1.1",
            points: 2,
            question: "Quatre caractéristiques du vivant.",
            reponse: [
              "Un être vivant **naît, se nourrit, grandit (se développe), se reproduit et meurt**. On peut ajouter : il respire, il réagit à son environnement.",
              "Quatre attendus parmi : naître, se nourrir, croître, se reproduire, mourir, respirer.",
            ],
          },
          {
            type: "qa",
            num: "2.1.2",
            points: 4,
            question: "Analyser les raisonnements de Léa et Théo.",
            reponse: [
              "**Léa** confond « bouger / consommer » avec « être vivant ». Le feu se propage et « consomme » du bois, mais il ne naît pas, ne se reproduit pas et ne se développe pas comme un organisme : ce n'est pas un être vivant. Le mouvement seul n'est pas un critère.",
              "**Théo** applique le critère « bouger » qui n'est pas valable : beaucoup d'êtres vivants ne se déplacent pas (les plantes, un arbre). La graine est vivante : elle contient un embryon capable de germer, de croître et de se reproduire — elle est simplement en vie ralentie (dormance).",
              "Réponse pédagogique : proposer une expérience (faire germer des graines) pour montrer qu'elles se développent, et lister avec les élèves les vrais critères du vivant.",
            ],
            attendu:
              "Repérer la conception erronée (le mouvement comme critère) et proposer une réponse fondée sur les critères + une expérience.",
          },
        ],
      },
      {
        titre: "2.2 — Classer les animaux",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "2.2.1",
            points: 2,
            question: "Deux critères de classement scientifiques.",
            reponse: [
              "On classe selon des **attributs** que les animaux possèdent : présence de poils/mamelles, de plumes, d'écailles, de quatre membres, d'un squelette interne, etc.",
              "Exemples : « a un squelette interne (vertébrés) », « a des poils et allaite ses petits », « a des plumes ».",
            ],
            attendu:
              "Insister sur les attributs partagés (ce que l'animal A), pas sur le milieu ou le mode de déplacement.",
          },
          {
            type: "qa",
            num: "2.2.2",
            points: 2,
            question: "Quels mammifères ?",
            reponse: [
              "Seule la **chauve-souris** est un mammifère : elle possède des poils et allaite ses petits (mamelles).",
              "Les autres : truite (poisson), pigeon (oiseau, plumes), grenouille (amphibien), lézard (reptile, écailles).",
            ],
          },
          {
            type: "qa",
            num: "2.2.3",
            points: 3,
            question: "Pourquoi « voler » n'est pas un critère pertinent.",
            reponse: [
              "Le vol est un **mode de déplacement**, pas un attribut anatomique partagé. Des animaux très différents volent (insectes, oiseaux, chauves-souris) et beaucoup d'oiseaux ne volent pas (autruche, manchot).",
              "La chauve-souris a des **poils** et **allaite** : ce sont ces attributs qui la rangent parmi les mammifères, quelle que soit sa capacité à voler. La classification moderne regroupe selon les attributs hérités, pas selon les fonctions.",
            ],
            attendu:
              "Distinguer « ce que l'animal fait » de « ce que l'animal a » ; donner des contre-exemples.",
          },
        ],
      },
      {
        titre: "2.3 — Chaînes alimentaires et respiration",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "2.3.1",
            points: 3,
            question: "Producteur, consommateurs, sens des flèches.",
            reponse: [
              "Producteur : l'**herbe** (végétal chlorophyllien, produit sa matière par photosynthèse).",
              "Consommateur primaire : la **sauterelle** (mange le producteur). Consommateur secondaire : la **grenouille** (mange le consommateur primaire) ; la couleuvre est consommateur tertiaire.",
              "La flèche signifie « **est mangé par** » : elle indique le sens du transfert de matière et d'énergie (de la proie vers le prédateur).",
            ],
            attendu:
              "Bien orienter la flèche (« est mangé par ») et identifier les niveaux trophiques.",
          },
          {
            type: "qa",
            num: "2.3.2",
            points: 2,
            question: "Disparition des sauterelles.",
            reponse: [
              "Les grenouilles, privées de leur nourriture, verraient leur population diminuer (moins de ressources) ; par répercussion, les couleuvres seraient touchées.",
              "À l'inverse, l'herbe, moins consommée, pourrait proliférer. Cela illustre l'**interdépendance** des êtres vivants dans un écosystème : la disparition d'un maillon déséquilibre toute la chaîne.",
            ],
          },
          {
            type: "qa",
            num: "2.3.3",
            points: 2,
            question: "Respiration vs photosynthèse.",
            reponse: [
              "**Respiration** (animaux et végétaux, en permanence) : l'organisme **absorbe du dioxygène (O₂)** et **rejette du dioxyde de carbone (CO₂)**.",
              "**Photosynthèse** (végétaux chlorophylliens, à la lumière) : la plante **absorbe du CO₂** et **rejette de l'O₂**, tout en produisant sa matière organique. Ce sont donc des échanges gazeux inversés ; l'herbe fait les deux, mais la photosynthèse ne se produit qu'en présence de lumière.",
            ],
            attendu:
              "Ne pas confondre respiration (échanges inversés, jour et nuit) et photosynthèse (à la lumière).",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 3 — Énergie et objets techniques
  // ======================================================================
  {
    slug: "sciences-3-energie-et-objets-techniques",
    matiere: "sciences",
    titre: "Sujet blanc n°3 — Énergie et objets techniques",
    description:
      "Circuits électriques, sources et formes d'énergie, fonctions d'un objet technique et lecture d'un algorithme simple. Un sujet orienté physique et technologie.",
    difficulty: "difficile",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 1 (Sciences et technologie)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Les réponses sont rédigées et justifiées.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "3.1 — Circuit électrique",
        points: 7,
        blocks: [
          {
            type: "p",
            text: "On réalise un circuit avec une pile, deux lampes et un interrupteur.",
          },
          {
            type: "questions",
            items: [
              { num: "3.1.1", text: "Quels éléments sont indispensables pour qu'une lampe brille ? Qu'appelle-t-on un circuit fermé ?", points: 2 },
              { num: "3.1.2", text: "On monte les deux lampes en série. Que se passe-t-il si l'on dévisse une lampe ? Expliquer.", points: 2 },
              { num: "3.1.3", text: "On monte maintenant les deux lampes en dérivation (en parallèle). Répondre à la même question et comparer les deux montages.", points: 3 },
            ],
          },
        ],
      },
      {
        titre: "3.2 — Sources et formes d'énergie",
        points: 7,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "3.2.1", text: "Citer trois sources d'énergie renouvelables et deux sources non renouvelables.", points: 2 },
              { num: "3.2.2", text: "Un panneau solaire alimente une lampe. Décrire la chaîne des conversions d'énergie mises en jeu.", points: 3 },
              { num: "3.2.3", text: "Proposer une activité de classe permettant aux élèves de comprendre l'intérêt des économies d'énergie à l'école.", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "3.3 — Objet technique et algorithme",
        points: 6,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Programme d'un éclairage automatique",
            lines: [
              "Répéter indéfiniment",
              "  Si la luminosité mesurée < seuil, alors allumer la lampe",
              "  Sinon éteindre la lampe",
              "Fin Répéter",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "3.3.1", text: "Identifier la fonction technique « détecter la luminosité » : quel composant l'assure ?", points: 1.5 },
              { num: "3.3.2", text: "Dans quelles conditions la lampe s'allume-t-elle ? Décrire le comportement de l'objet au fil d'une journée.", points: 2.5 },
              { num: "3.3.3", text: "Citer un intérêt et une limite d'un tel dispositif automatique.", points: 2 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["3.1", "Circuits série/dérivation, raisonnement", "7"],
        ["3.2", "Sources et conversions d'énergie, éducation au développement durable", "7"],
        ["3.3", "Objet technique, fonctions, lecture d'algorithme", "6"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend un vocabulaire électrique correct (circuit fermé, série, dérivation) et une lecture rigoureuse de l'algorithme (condition, boucle). Les conversions d'énergie doivent être décrites comme une chaîne.",
    correction: [
      {
        titre: "3.1 — Circuit électrique",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "3.1.1",
            points: 2,
            question: "Conditions pour qu'une lampe brille ; circuit fermé.",
            reponse: [
              "Il faut un **générateur** (la pile), un **récepteur** (la lampe), des **fils conducteurs** et un circuit **sans coupure**.",
              "Un **circuit fermé** est une boucle ininterrompue permettant au courant de circuler ; si le circuit est ouvert (interrupteur ouvert, fil débranché), le courant ne passe pas et la lampe ne brille pas.",
            ],
          },
          {
            type: "qa",
            num: "3.1.2",
            points: 2,
            question: "Deux lampes en série, on en dévisse une.",
            reponse: [
              "En série, les lampes sont sur une seule boucle. Dévisser une lampe **ouvre le circuit** : le courant ne circule plus et **l'autre lampe s'éteint** aussi.",
            ],
          },
          {
            type: "qa",
            num: "3.1.3",
            points: 3,
            question: "Deux lampes en dérivation ; comparaison.",
            reponse: [
              "En dérivation, chaque lampe est sur sa propre boucle reliée à la pile. Dévisser une lampe n'interrompt pas l'autre boucle : **l'autre lampe continue de briller**.",
              "Comparaison : en série, les lampes dépendent les unes des autres et brillent plus faiblement ; en dérivation, elles sont indépendantes et brillent normalement. C'est pourquoi l'installation d'une maison est en dérivation.",
            ],
            attendu:
              "Opposer clairement les deux montages et relier à un usage concret (installation domestique).",
          },
        ],
      },
      {
        titre: "3.2 — Sources et formes d'énergie",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "3.2.1",
            points: 2,
            question: "Sources renouvelables et non renouvelables.",
            reponse: [
              "Renouvelables : **solaire, éolienne, hydraulique** (aussi géothermie, biomasse).",
              "Non renouvelables : **pétrole, charbon, gaz naturel** (aussi l'uranium/nucléaire).",
            ],
          },
          {
            type: "qa",
            num: "3.2.2",
            points: 3,
            question: "Chaîne de conversions panneau solaire → lampe.",
            reponse: [
              "Énergie **lumineuse** (Soleil) → convertie par le panneau photovoltaïque en énergie **électrique** → convertie par la lampe en énergie **lumineuse** (et un peu de chaleur).",
              "On peut schématiser : lumière → (panneau) → électricité → (lampe) → lumière + chaleur. Chaque conversion s'accompagne de pertes (souvent sous forme de chaleur).",
            ],
            attendu:
              "Décrire une chaîne énergétique avec les formes d'énergie nommées et les convertisseurs.",
          },
          {
            type: "qa",
            num: "3.2.3",
            points: 2,
            question: "Activité sur les économies d'énergie.",
            reponse: [
              "Exemple : réaliser avec les élèves un « diagnostic » des consommations de l'école (lumières allumées inutilement, radiateurs, veille des appareils), puis proposer des éco-gestes et créer des affiches.",
              "On valorise une démarche active, mesurable, reliée au quotidien des élèves (responsabilisation, EDD).",
            ],
          },
        ],
      },
      {
        titre: "3.3 — Objet technique et algorithme",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "3.3.1",
            points: 1.5,
            question: "Composant détectant la luminosité.",
            reponse: [
              "Un **capteur de luminosité** (photorésistance / cellule photoélectrique) assure la fonction « détecter la luminosité ».",
            ],
          },
          {
            type: "qa",
            num: "3.3.2",
            points: 2.5,
            question: "Conditions d'allumage et comportement sur une journée.",
            reponse: [
              "La lampe s'allume **lorsque la luminosité mesurée passe en dessous du seuil** (il fait sombre).",
              "Sur une journée : la nuit et au crépuscule, la luminosité est faible → la lampe est allumée ; en journée, la luminosité dépasse le seuil → la lampe reste éteinte. La boucle « Répéter indéfiniment » réévalue en permanence la condition.",
            ],
            attendu:
              "Lire correctement la condition (< seuil) et la boucle infinie ; décrire le fonctionnement jour/nuit.",
          },
          {
            type: "qa",
            num: "3.3.3",
            points: 2,
            question: "Intérêt et limite.",
            reponse: [
              "Intérêt : **économie d'énergie** et confort (allumage automatique seulement quand c'est nécessaire).",
              "Limite : dépendance au capteur (un capteur sale ou masqué fausse la mesure), déclenchements intempestifs (ombre passagère), coût/entretien du dispositif.",
            ],
          },
        ],
      },
    ],
  },
];
