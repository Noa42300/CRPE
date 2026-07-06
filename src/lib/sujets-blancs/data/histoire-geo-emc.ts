/**
 * SUJETS BLANCS — HISTOIRE-GÉOGRAPHIE & EMC (Seconde épreuve, Domaine 3)
 * ---------------------------------------------------------------------
 * Trois disciplines : géographie, EMC, histoire. On évalue repères,
 * connaissances fondamentales et capacité à rédiger de façon claire et
 * argumentée, ou à exploiter des documents. Thèmes originaux, distincts
 * des sujets officiels.
 */
import type { SujetBlanc } from "../types";

export const HGEMC_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1
  // ======================================================================
  {
    slug: "hgemc-1-habiter-et-republique",
    matiere: "histoire-geo-emc",
    titre: "Sujet blanc n°1 — Habiter la ville, vivre en République",
    description:
      "Géographie de l'urbanisation, symboles et valeurs de la République, et étude de la Révolution française à partir de documents. Un sujet complet couvrant les trois disciplines.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 3 (Histoire-Géographie EMC)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Répondre de façon claire, structurée et argumentée.",
      "Le barème est indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Géographie — Habiter les métropoles",
        points: 7,
        blocks: [
          {
            type: "p",
            text: "Aujourd'hui, plus de la moitié de la population mondiale vit en ville, et cette proportion augmente. Les métropoles concentrent population, activités et pouvoirs.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Définir les termes « métropole » et « urbanisation ».", points: 2 },
              { num: "2.", text: "Citer deux atouts et deux difficultés liés à la vie dans une grande métropole.", points: 3 },
              { num: "3.", text: "Qu'appelle-t-on l'étalement urbain ? Quelles conséquences a-t-il sur l'environnement ?", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "EMC — Les symboles et valeurs de la République",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Citer trois symboles de la République française et expliquer la signification de l'un d'eux.", points: 3 },
              { num: "2.", text: "Que signifie la devise « Liberté, Égalité, Fraternité » ? Illustrer chaque terme par un exemple concret de la vie à l'école.", points: 3 },
            ],
          },
        ],
      },
      {
        titre: "Histoire — La Révolution française (CM)",
        points: 7,
        intro:
          "En classe de CM, on étudie la Révolution française à partir des documents suivants.",
        blocks: [
          {
            type: "document",
            titre: "Document 1 — Déclaration des droits de l'homme et du citoyen (1789), extrait",
            source: "Adapté, article premier.",
            lines: [
              "« Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune. »",
            ],
          },
          {
            type: "document",
            titre: "Document 2 — Repères",
            lines: [
              "14 juillet 1789 : prise de la Bastille. 26 août 1789 : Déclaration des droits de l'homme et du citoyen. 1792 : proclamation de la République.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "À partir des documents, indiquer quelles idées nouvelles la Révolution introduit par rapport à la société d'Ancien Régime.", points: 4 },
              { num: "2.", text: "Que doivent retenir les élèves de cette période ? Formuler deux ou trois points essentiels.", points: 3 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Discipline", "Compétences évaluées", "Points"],
      lignes: [
        ["Géographie", "Notions d'urbanisation, atouts/limites, étalement urbain", "7"],
        ["EMC", "Symboles, devise, transposition scolaire", "6"],
        ["Histoire", "Exploitation de documents, repères, mise en récit", "7"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend des définitions précises, l'emploi de repères datés exacts et, en histoire, une exploitation des documents (et non leur simple recopie). Les réponses « pour les élèves » doivent hiérarchiser l'essentiel.",
    correction: [
      {
        titre: "Géographie — Habiter les métropoles",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Définir « métropole » et « urbanisation ».",
            reponse: [
              "**Métropole** : grande ville (ou agglomération) qui concentre de nombreux habitants, des activités économiques importantes et des fonctions de commandement (pouvoirs politiques, économiques, culturels), et qui rayonne sur un vaste territoire.",
              "**Urbanisation** : processus de développement et d'extension des villes, marqué par l'augmentation de la part de la population vivant en ville.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Deux atouts et deux difficultés d'une grande métropole.",
            reponse: [
              "Atouts : offre d'emplois et d'activités, accès aux services (santé, écoles, universités, transports, culture, commerces).",
              "Difficultés : pollution et embouteillages, coût élevé du logement, inégalités sociales et parfois insécurité, bruit et manque d'espaces verts.",
            ],
            attendu:
              "Deux atouts et deux difficultés distincts, formulés en lien avec la vie urbaine.",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Étalement urbain et conséquences.",
            reponse: [
              "L'**étalement urbain** désigne l'extension de la ville vers ses périphéries (lotissements, zones commerciales), qui gagne sur les espaces agricoles et naturels.",
              "Conséquences environnementales : artificialisation et imperméabilisation des sols, perte de terres agricoles et de biodiversité, augmentation des déplacements en voiture (donc des émissions).",
            ],
          },
        ],
      },
      {
        titre: "EMC — Les symboles et valeurs de la République",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Trois symboles et signification de l'un.",
            reponse: [
              "Symboles : le **drapeau tricolore** (bleu-blanc-rouge), **La Marseillaise** (hymne national), **Marianne**, la **devise** « Liberté, Égalité, Fraternité », le **14 juillet** (fête nationale), le **coq**.",
              "Exemple de signification : le drapeau tricolore associe le blanc de la royauté au bleu et au rouge de la ville de Paris ; il devient l'emblème de la nation depuis la Révolution et symbolise l'unité des citoyens.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Sens de la devise + exemples scolaires.",
            reponse: [
              "**Liberté** : pouvoir agir et penser librement dans le respect des règles → à l'école, la liberté d'expression lors d'un débat, dans le respect de la parole d'autrui.",
              "**Égalité** : les citoyens ont les mêmes droits → à l'école, filles et garçons ont accès aux mêmes activités, chacun est traité équitablement.",
              "**Fraternité** : solidarité et respect entre les personnes → à l'école, l'entraide entre élèves, les actions de coopération, la lutte contre le harcèlement.",
            ],
            attendu:
              "Chaque terme défini ET illustré par un exemple concret et scolaire.",
          },
        ],
      },
      {
        titre: "Histoire — La Révolution française",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 4,
            question: "Idées nouvelles apportées par la Révolution.",
            reponse: [
              "Le document 1 affirme que les hommes « naissent et demeurent libres et égaux en droits » : c'est une rupture avec la société d'**Ancien Régime**, divisée en trois ordres (clergé, noblesse, tiers état) avec des privilèges de naissance.",
              "Idées nouvelles : l'**égalité en droits** (fin des privilèges), la **liberté**, l'idée que les distinctions ne se justifient que par « l'utilité commune » (le mérite, non la naissance). La souveraineté passe du roi à la nation, aboutissant à la proclamation de la **République en 1792**.",
            ],
            attendu:
              "Exploiter le document (citer/reformuler) et l'opposer à l'Ancien Régime ; mobiliser les repères (1789, 1792).",
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Ce que les élèves doivent retenir.",
            reponse: [
              "1789 marque la fin de la monarchie absolue et de la société des privilèges.",
              "La Déclaration des droits de l'homme et du citoyen (26 août 1789) pose des principes toujours actuels : liberté, égalité.",
              "En 1792, la République est proclamée. Ces événements fondent nos valeurs et institutions actuelles.",
            ],
            attendu:
              "Sélectionner 2-3 idées essentielles, datées, formulées simplement pour des élèves de CM.",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2
  // ======================================================================
  {
    slug: "hgemc-2-mobilites-et-engagement",
    matiere: "histoire-geo-emc",
    titre: "Sujet blanc n°2 — Se déplacer, s'engager, comprendre le passé",
    description:
      "Géographie des mobilités et des transports, engagement et responsabilité en EMC, et étude de la monarchie absolue de Louis XIV. Sujet exigeant sur les trois disciplines.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 3 (Histoire-Géographie EMC)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Répondre de façon claire, structurée et argumentée.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Géographie — Se déplacer au quotidien",
        points: 7,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Citer différents modes de déplacement et distinguer ceux qui sont individuels de ceux qui sont collectifs.", points: 2 },
              { num: "2.", text: "Pourquoi encourage-t-on aujourd'hui les « mobilités douces » ? Donner deux exemples et deux avantages.", points: 3 },
              { num: "3.", text: "En quoi les possibilités de déplacement peuvent-elles être inégales selon les territoires (ville / campagne) ?", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "EMC — S'engager et être responsable",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Qu'est-ce qu'un délégué de classe ? Comment est-il désigné et quel est son rôle ?", points: 3 },
              { num: "2.", text: "Expliquer ce que signifie « être responsable » à l'école, en donnant deux exemples de responsabilités confiées aux élèves.", points: 3 },
            ],
          },
        ],
      },
      {
        titre: "Histoire — Louis XIV et la monarchie absolue",
        points: 7,
        blocks: [
          {
            type: "document",
            titre: "Document — Le château de Versailles",
            source: "D'après un manuel d'histoire, cycle 3.",
            lines: [
              "À partir de 1682, Louis XIV installe la cour à Versailles, dans un immense château entouré de jardins. La noblesse y vit sous le regard du roi, qui contrôle ainsi les grands du royaume. Le roi gouverne seul : il choisit ses ministres, dirige l'armée et la justice, et affirme tenir son pouvoir de Dieu.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "À partir du document, expliquer ce qu'est une monarchie absolue de droit divin.", points: 3 },
              { num: "2.", text: "Pourquoi Louis XIV fait-il venir la noblesse à Versailles ? Quel intérêt politique y trouve-t-il ?", points: 2 },
              { num: "3.", text: "Formuler ce que les élèves doivent retenir de ce règne.", points: 2 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Discipline", "Compétences évaluées", "Points"],
      lignes: [
        ["Géographie", "Mobilités, développement durable, inégalités territoriales", "7"],
        ["EMC", "Représentation, engagement, responsabilité", "6"],
        ["Histoire", "Monarchie absolue, exploitation de document, repères", "7"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On valorise les définitions rigoureuses (mobilités douces, monarchie absolue de droit divin) et l'exploitation du document historique. En EMC, les exemples doivent être ancrés dans la vie de classe.",
    correction: [
      {
        titre: "Géographie — Se déplacer au quotidien",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Modes de déplacement individuels / collectifs.",
            reponse: [
              "Individuels : la marche, le vélo, la trottinette, la voiture, la moto.",
              "Collectifs : le bus, le tramway, le métro, le train, le car scolaire, l'avion.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Mobilités douces : exemples et avantages.",
            reponse: [
              "Les **mobilités douces** (ou actives) sont des déplacements non motorisés ou peu polluants : **marche, vélo, trottinette**, transports en commun électriques.",
              "Avantages : elles réduisent la pollution et les émissions de gaz à effet de serre, désengorgent les villes, et sont bénéfiques pour la santé (activité physique).",
            ],
            attendu:
              "Définir la notion, donner deux exemples et deux avantages (environnement, santé…).",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Inégalités de déplacement ville/campagne.",
            reponse: [
              "En ville, les transports en commun sont nombreux et fréquents ; à la campagne, ils sont rares, ce qui rend la voiture souvent indispensable.",
              "Ces différences créent des inégalités d'accès à l'emploi, aux services et aux loisirs selon le lieu où l'on habite.",
            ],
          },
        ],
      },
      {
        titre: "EMC — S'engager et être responsable",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Le délégué de classe.",
            reponse: [
              "Le délégué est un élève qui **représente ses camarades**. Il est **élu** par la classe, au cours d'un vote (souvent à bulletin secret), après que des candidats se sont présentés.",
              "Son rôle : porter la parole de la classe (auprès des enseignants, lors de conseils), transmettre les informations, participer à la vie démocratique de l'école. C'est un apprentissage de la représentation et du vote.",
            ],
            attendu:
              "Mentionner l'élection (vote), la fonction de représentation, le lien avec l'apprentissage de la démocratie.",
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Être responsable à l'école.",
            reponse: [
              "Être responsable, c'est **assumer ses actes** et **tenir un rôle** au service du groupe, en respectant les règles communes.",
              "Exemples : être responsable du matériel ou de la distribution, s'occuper du recyclage, aider un camarade (tutorat), respecter les engagements pris lors d'un projet de classe.",
            ],
          },
        ],
      },
      {
        titre: "Histoire — Louis XIV et la monarchie absolue",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Monarchie absolue de droit divin.",
            reponse: [
              "**Monarchie absolue** : le roi détient tous les pouvoirs (il fait les lois, dirige la justice, l'armée, choisit ses ministres) et gouverne seul, sans les partager.",
              "**De droit divin** : le roi affirme tenir son pouvoir de Dieu ; il n'a de comptes à rendre qu'à Dieu. Le document le montre : Louis XIV « gouverne seul » et « affirme tenir son pouvoir de Dieu ».",
            ],
            attendu:
              "Décomposer l'expression (absolue = concentration des pouvoirs ; droit divin = pouvoir reçu de Dieu) en s'appuyant sur le document.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Pourquoi la noblesse à Versailles ?",
            reponse: [
              "En faisant vivre la noblesse à la cour, sous son regard, Louis XIV la **surveille et la contrôle** : occupés par la vie de cour et les faveurs royales, les nobles ne peuvent plus comploter contre lui.",
              "C'est un moyen d'affaiblir les grands seigneurs et de renforcer l'autorité du roi.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Ce que les élèves doivent retenir.",
            reponse: [
              "Louis XIV (le « Roi-Soleil ») règne longuement et incarne la monarchie absolue de droit divin.",
              "Il installe la cour à Versailles (1682) pour contrôler la noblesse et affirmer sa puissance. Son règne marque l'apogée du pouvoir royal en France.",
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
    slug: "hgemc-3-environnement-et-decouvertes",
    matiere: "histoire-geo-emc",
    titre: "Sujet blanc n°3 — Environnement, liberté d'expression et grandes découvertes",
    description:
      "Géographie des risques et du développement durable, liberté d'expression et médias en EMC, et étude des grandes découvertes au XVᵉ-XVIᵉ siècle. Trois disciplines articulées.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 3 (Histoire-Géographie EMC)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Répondre de façon claire, structurée et argumentée.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Géographie — Risques et développement durable",
        points: 7,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Qu'est-ce qu'un risque naturel ? Citer trois exemples de risques naturels.", points: 2 },
              { num: "2.", text: "Définir le « développement durable » et présenter ses trois piliers.", points: 3 },
              { num: "3.", text: "Citer deux actions concrètes qu'une commune peut mettre en œuvre pour un aménagement plus durable.", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "EMC — Liberté d'expression et esprit critique",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Qu'est-ce que la liberté d'expression ? A-t-elle des limites ? Lesquelles ?", points: 3 },
              { num: "2.", text: "Face à une information trouvée sur Internet, quels réflexes un élève doit-il adopter pour exercer son esprit critique ?", points: 3 },
            ],
          },
        ],
      },
      {
        titre: "Histoire — Le temps des grandes découvertes",
        points: 7,
        blocks: [
          {
            type: "document",
            titre: "Document — Repères",
            lines: [
              "1492 : Christophe Colomb atteint l'Amérique. Fin du XVᵉ siècle : les progrès de la navigation (caravelle, boussole, cartes) permettent de longs voyages en mer. Les Européens cherchent de nouvelles routes vers les épices et l'or.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "À partir du document, expliquer pourquoi les Européens se lancent dans de grands voyages maritimes à la fin du XVᵉ siècle.", points: 3 },
              { num: "2.", text: "Quels progrès techniques rendent ces voyages possibles ?", points: 2 },
              { num: "3.", text: "Citer une conséquence importante de ces découvertes pour les peuples rencontrés.", points: 2 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Discipline", "Compétences évaluées", "Points"],
      lignes: [
        ["Géographie", "Risques, développement durable, aménagement", "7"],
        ["EMC", "Liberté d'expression, éducation aux médias", "6"],
        ["Histoire", "Grandes découvertes, causes et conséquences, repères", "7"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend des définitions structurées (les trois piliers du développement durable), un traitement nuancé de la liberté d'expression (droits ET limites), et une mise en relation causes/conséquences en histoire.",
    correction: [
      {
        titre: "Géographie — Risques et développement durable",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Risque naturel et exemples.",
            reponse: [
              "Un **risque naturel** est la possibilité qu'un phénomène naturel dangereux (aléa) touche une population et cause des dégâts.",
              "Exemples : inondation, séisme (tremblement de terre), tempête, éruption volcanique, glissement de terrain, feu de forêt.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Développement durable et ses trois piliers.",
            reponse: [
              "**Développement durable** : un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à satisfaire les leurs.",
              "Trois piliers : **environnemental** (préserver la planète, les ressources, la biodiversité), **social** (répondre aux besoins de tous, réduire les inégalités), **économique** (une activité viable et durable). Le développement durable se situe à la rencontre des trois.",
            ],
            attendu:
              "Définition correcte + les trois piliers nommés et explicités.",
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Deux actions communales durables.",
            reponse: [
              "Exemples : développer les pistes cyclables et les transports en commun ; créer ou préserver des espaces verts ; installer le tri des déchets ; économiser l'énergie des bâtiments publics ; privilégier les circuits courts dans les cantines.",
              "Deux exemples pertinents suffisent.",
            ],
          },
        ],
      },
      {
        titre: "EMC — Liberté d'expression et esprit critique",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Liberté d'expression et ses limites.",
            reponse: [
              "La **liberté d'expression** est le droit de dire, écrire et publier ses opinions. C'est une liberté fondamentale, protégée par la loi (Déclaration de 1789, article 11).",
              "Elle a des **limites** : elle s'arrête là où commence le respect d'autrui et de la loi. Sont interdits l'injure, la diffamation, les propos racistes, l'incitation à la haine ou à la violence. La liberté d'expression n'autorise pas à dire n'importe quoi.",
            ],
            attendu:
              "Affirmer le droit ET poser ses limites légales : réponse nuancée exigée.",
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Réflexes d'esprit critique face à une info.",
            reponse: [
              "**Vérifier la source** : qui publie ? un site fiable, un média reconnu ?",
              "**Recouper l'information** : est-elle confirmée par d'autres sources sérieuses ?",
              "**S'interroger sur l'intention** (informer, convaincre, vendre, faire réagir ?), repérer la date, distinguer un fait d'une opinion, se méfier des images sorties de leur contexte.",
            ],
            attendu:
              "Plusieurs réflexes concrets d'éducation aux médias (source, recoupement, intention).",
          },
        ],
      },
      {
        titre: "Histoire — Le temps des grandes découvertes",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Pourquoi les grands voyages ?",
            reponse: [
              "Les Européens cherchent de **nouvelles routes commerciales** vers l'Asie pour se procurer les épices, la soie et l'or, alors que les routes terrestres sont longues et contrôlées par d'autres.",
              "S'y ajoutent la curiosité, l'esprit de conquête et la volonté de diffuser la religion chrétienne. Le document rappelle la recherche « des épices et de l'or ».",
            ],
            attendu:
              "Mobiliser les motivations économiques (épices, or) en s'appuyant sur le document.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Progrès techniques.",
            reponse: [
              "La **caravelle** (navire maniable adapté à la haute mer), la **boussole** (pour s'orienter), l'**astrolabe** et de meilleures **cartes marines** rendent possibles les longs voyages loin des côtes.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Une conséquence pour les peuples rencontrés.",
            reponse: [
              "Les peuples d'Amérique subissent la **colonisation** : conquêtes, domination, travail forcé, et surtout des **maladies** apportées par les Européens qui déciment les populations. Les civilisations amérindiennes sont bouleversées.",
              "On accepte aussi : les échanges de produits (le « grand échange » : maïs, pomme de terre… / chevaux, blé), l'esclavage.",
            ],
          },
        ],
      },
    ],
  },
];
