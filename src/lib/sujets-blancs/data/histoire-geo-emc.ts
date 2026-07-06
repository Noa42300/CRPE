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

  // ======================================================================
  // SUJET 4 — Nourrir, s'engager, se souvenir
  // ======================================================================
  {
    slug: "hgemc-4-nourrir-s-engager-se-souvenir",
    matiere: "histoire-geo-emc",
    titre: "Sujet blanc n°4 — Nourrir le monde, s'engager, se souvenir",
    description:
      "Géographie de l'alimentation mondiale, égalité entre les filles et les garçons en EMC, et étude de la Première Guerre mondiale à partir d'un document. Réponses argumentées.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 3 (Histoire-Géographie EMC)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Répondre de façon claire, structurée et argumentée.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Géographie — Nourrir une population mondiale croissante",
        points: 7,
        blocks: [
          {
            type: "p",
            text: "La population mondiale dépasse 8 milliards d'habitants et continue d'augmenter. Nourrir tous les hommes est un défi majeur.",
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "Définir les termes « agriculture vivrière » et « agriculture productiviste ».", points: 2 },
              { num: "2.", text: "Citer deux défis liés à l'alimentation d'une population mondiale croissante.", points: 3 },
              { num: "3.", text: "Qu'appelle-t-on une agriculture « durable » ? Donner deux exemples de pratiques.", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "EMC — L'égalité entre les filles et les garçons",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Rappeler ce que dit la loi française sur l'égalité entre les femmes et les hommes.", points: 2 },
              { num: "2.", text: "En quoi l'école a-t-elle un rôle particulier pour construire l'égalité entre les filles et les garçons ? Répondre par un court développement argumenté.", points: 4 },
            ],
          },
        ],
      },
      {
        titre: "Histoire — La Première Guerre mondiale (CM2)",
        points: 7,
        blocks: [
          {
            type: "document",
            titre: "Document — Lettre d'un soldat (adaptée)",
            source: "Texte original s'inspirant des lettres de poilus, composé pour ce sujet.",
            lines: [
              "« Ma chère Louise, voilà trois jours que nous tenons la tranchée sous la pluie et les obus. La boue nous monte aux genoux, le froid nous transperce, et le sommeil nous fuit. Nous attendons la relève en pensant à vous. Ne t'inquiète pas : je tiens bon, comme tous les camarades. Embrasse les enfants pour moi. Ton Émile, ce 12 novembre 1916. »",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "À partir du document, décrire les conditions de vie des soldats dans les tranchées.", points: 3 },
              { num: "2.", text: "Situer la Première Guerre mondiale dans le temps (dates de début et de fin) et nommer ce type de guerre.", points: 2 },
              { num: "3.", text: "Que doivent retenir les élèves de ce conflit ?", points: 2 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Discipline", "Compétences évaluées", "Points"],
      lignes: [
        ["Géographie", "Notions agricoles, défis alimentaires, durabilité", "7"],
        ["EMC", "Égalité femmes-hommes, rôle de l'école, argumentation", "6"],
        ["Histoire", "Exploitation de document, repères, mise en perspective", "7"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend des définitions précises, des repères datés exacts et, pour la question développée d'EMC, une introduction construite avant l'argumentation.",
    correction: [
      {
        titre: "Géographie — Nourrir une population mondiale croissante",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Agriculture vivrière / productiviste.",
            reponse: [
              "**Agriculture vivrière** : agriculture destinée d'abord à nourrir le producteur et sa famille (autoconsommation), avec de faibles surplus.",
              "**Agriculture productiviste** : agriculture qui cherche à produire le plus possible pour le marché, en utilisant des machines, des engrais et des rendements élevés.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Deux défis alimentaires.",
            reponse: [
              "Nourrir davantage de personnes tout en préservant l'environnement (sols, eau, biodiversité).",
              "Réduire les inégalités : la faim persiste dans certaines régions tandis que le gaspillage existe ailleurs. (On accepte aussi : s'adapter au changement climatique.)",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Agriculture durable et pratiques.",
            reponse: [
              "Une **agriculture durable** répond aux besoins alimentaires sans épuiser les ressources ni dégrader l'environnement, pour préserver l'avenir.",
              "Exemples : limiter les pesticides (agriculture biologique), pratiquer la rotation des cultures, économiser l'eau, favoriser les circuits courts.",
            ],
          },
        ],
      },
      {
        titre: "EMC — L'égalité entre les filles et les garçons",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Ce que dit la loi.",
            reponse: [
              "L'égalité entre les femmes et les hommes est un **principe fondamental de la République** : la loi garantit les mêmes droits (voter, travailler, être payé également, accéder aux mêmes fonctions).",
              "Toute discrimination fondée sur le sexe est interdite ; l'égalité est inscrite dans la Constitution et dans de nombreuses lois.",
            ],
          },
          {
            type: "intro",
            citation: "On ne naît pas femme : on le devient.",
            auteur: "Simone de Beauvoir (1908-1986), Le Deuxième Sexe (1949)",
            paragraphs: [
              "Par cette phrase célèbre, la philosophe Simone de Beauvoir affirme que les différences de rôles entre femmes et hommes ne sont pas « naturelles » mais construites par l'éducation et la société.",
              "Cette idée éclaire le rôle de l'école : si les inégalités s'apprennent, elles peuvent aussi se défaire par l'éducation. C'est ce que le développement va montrer.",
            ],
          },
          {
            type: "p",
            text: "**1. L'école transmet l'égalité en droit et en acte.** Elle accueille filles et garçons dans les mêmes classes, leur propose les mêmes activités et les mêmes exigences, et lutte contre les stéréotypes (« les maths pour les garçons », « la danse pour les filles »).",
          },
          {
            type: "p",
            text: "**2. Elle agit sur les représentations.** Par le choix des exemples, des métiers présentés, des responsabilités confiées, l'enseignant montre que toutes les voies sont ouvertes aux deux sexes. L'école prévient aussi les violences et le sexisme (respect mutuel, coéducation).",
          },
          {
            type: "note",
            variant: "attendu",
            lines: [
              "Barème : introduction construite avec citation intégrée (1,5) ; deux arguments développés (2) ; exemples scolaires concrets (0,5).",
            ],
          },
        ],
      },
      {
        titre: "Histoire — La Première Guerre mondiale",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Conditions de vie dans les tranchées.",
            reponse: [
              "Le document montre des conditions très dures : la **boue**, la **pluie**, le **froid**, le manque de sommeil, le danger permanent des obus, l'attente de la relève.",
              "Les soldats (les « poilus ») vivent dans la peur et l'inconfort, loin de leur famille, à laquelle ils pensent (« en pensant à vous »).",
            ],
            attendu: "S'appuyer sur des éléments précis du texte pour décrire le quotidien du front.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Dates et type de guerre.",
            reponse: [
              "La Première Guerre mondiale se déroule de **1914 à 1918**.",
              "C'est une **guerre totale** (elle mobilise toute la société : soldats, économie, civils) et, sur le front ouest, une **guerre de position** (guerre des tranchées).",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Ce que les élèves doivent retenir.",
            reponse: [
              "Un conflit d'une violence inédite (des millions de morts), qui a marqué durablement les familles et les paysages.",
              "L'importance du devoir de mémoire (le 11 novembre, les monuments aux morts) pour se souvenir et comprendre la valeur de la paix.",
            ],
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Histoire-Géographie EMC",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Définir précisément** les notions demandées avant de les illustrer.",
              "**Dater et situer** systématiquement (une réponse d'histoire sans repères chronologiques est incomplète).",
              "**Exploiter les documents** : citer/reformuler des éléments précis, ne pas plaquer ses connaissances sans lien avec le texte.",
              "**Pour une question « développée »**, construire une courte introduction (amorce, éventuelle citation, problématique) puis deux arguments.",
              "**Pour les réponses « pour les élèves »**, hiérarchiser l'essentiel et rester simple.",
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
              "**Oublier les dates** (1914-1918) ou les confondre avec la Seconde Guerre mondiale (1939-1945).",
              "**Recopier le document** au lieu d'en extraire et reformuler les informations.",
              "**Rester vague en EMC** : il faut nommer le principe (égalité) et donner des exemples concrets.",
              "**Commencer la question développée directement par la réponse**, sans introduction.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 5 — Littoraux, droits de l'enfant, Moyen Âge
  // ======================================================================
  {
    slug: "hgemc-5-littoraux-droits-moyen-age",
    matiere: "histoire-geo-emc",
    titre: "Sujet blanc n°5 — Littoraux, droits de l'enfant et Moyen Âge",
    description:
      "Géographie du tourisme et des littoraux, droits de l'enfant en EMC, et étude de la société féodale au Moyen Âge à partir d'un document. Trois disciplines articulées.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 3 (Histoire-Géographie EMC)",
    duree: "1 h 20 conseillée",
    totalPoints: 20,
    consignes: [
      "Répondre de façon claire, structurée et argumentée.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Géographie — Aménager et protéger les littoraux",
        points: 7,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Pourquoi les littoraux attirent-ils autant de population et d'activités ? Donner deux raisons.", points: 2 },
              { num: "2.", text: "Quels problèmes le tourisme de masse peut-il poser sur un littoral ? Citer deux exemples.", points: 3 },
              { num: "3.", text: "Comment peut-on concilier fréquentation touristique et protection de l'environnement littoral ?", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "EMC — Les droits de l'enfant",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Qu'est-ce que la Convention internationale des droits de l'enfant ? Citer deux droits fondamentaux qu'elle garantit.", points: 3 },
              { num: "2.", text: "En quoi le droit à l'éducation est-il essentiel pour un enfant ? Répondre par un court développement argumenté.", points: 3 },
            ],
          },
        ],
      },
      {
        titre: "Histoire — La société féodale (CM1)",
        points: 7,
        blocks: [
          {
            type: "document",
            titre: "Document — La société au Moyen Âge (adapté)",
            source: "Texte de synthèse original, composé pour ce sujet.",
            lines: [
              "Au Moyen Âge, la société est très hiérarchisée. Au sommet, le roi ; puis les seigneurs, qui possèdent des terres, des châteaux et commandent des chevaliers. L'Église, très puissante, encadre la vie religieuse. Enfin, la grande majorité de la population est constituée de paysans qui cultivent la terre du seigneur et lui doivent des redevances et des corvées. En échange de sa protection, le seigneur exige fidélité et travail.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "1.", text: "À partir du document, présenter les différents groupes qui composent la société féodale.", points: 3 },
              { num: "2.", text: "Expliquer ce qu'est le lien entre un seigneur et ses paysans (droits et devoirs de chacun).", points: 2 },
              { num: "3.", text: "Formuler ce que les élèves doivent retenir de cette organisation sociale.", points: 2 },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Discipline", "Compétences évaluées", "Points"],
      lignes: [
        ["Géographie", "Attractivité des littoraux, tourisme, protection", "7"],
        ["EMC", "Droits de l'enfant, droit à l'éducation, argumentation", "6"],
        ["Histoire", "Société féodale, exploitation de document, repères", "7"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On valorise des définitions rigoureuses, l'exploitation du document historique, et une question d'EMC introduite avant d'être développée.",
    correction: [
      {
        titre: "Géographie — Aménager et protéger les littoraux",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Attractivité des littoraux.",
            reponse: [
              "Les littoraux offrent des activités économiques (ports, pêche, commerce, industries) et de nombreux emplois.",
              "Ils attirent aussi le tourisme et les loisirs (plages, climat, paysages), ce qui explique la forte concentration de population (littoralisation).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 3,
            question: "Problèmes du tourisme de masse.",
            reponse: [
              "Pression sur l'environnement : bétonnage du littoral, pollution, dégradation des dunes et des milieux naturels.",
              "Saturation : embouteillages, hausse des prix du logement, manque d'eau en saison, déchets. (On accepte aussi : conflits d'usage.)",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Concilier tourisme et protection.",
            reponse: [
              "Créer des espaces protégés (réserves, sentiers balisés), limiter la construction, développer un tourisme plus respectueux (transports doux, sensibilisation).",
              "L'objectif est un développement durable du littoral : accueillir les visiteurs sans détruire ce qui les attire.",
            ],
          },
        ],
      },
      {
        titre: "EMC — Les droits de l'enfant",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "La Convention et deux droits.",
            reponse: [
              "La **Convention internationale des droits de l'enfant** (adoptée par l'ONU en 1989) est un texte signé par la quasi-totalité des pays, qui reconnaît des droits propres à tous les enfants du monde.",
              "Exemples de droits : le droit à l'**éducation**, à la **santé**, à la **protection** (contre la violence, l'exploitation), à un nom et une nationalité, aux loisirs et au jeu.",
            ],
          },
          {
            type: "intro",
            paragraphs: [
              "L'éducation est souvent présentée comme le premier des droits, car il conditionne l'accès à tous les autres. Priver un enfant d'école, c'est limiter son avenir.",
              "On peut donc se demander en quoi le droit à l'éducation est essentiel — c'est l'objet de ce court développement.",
            ],
          },
          {
            type: "p",
            text: "**1. L'éducation émancipe.** Apprendre à lire, écrire, compter et raisonner permet à l'enfant de comprendre le monde, d'exercer son esprit critique et de faire des choix libres plus tard (métier, citoyenneté).",
          },
          {
            type: "p",
            text: "**2. L'éducation protège et rassemble.** Elle offre une protection contre l'exploitation (travail des enfants) et réduit les inégalités : l'école de la République accueille tous les enfants et transmet des valeurs communes. C'est un droit mais aussi une chance.",
          },
          {
            type: "note",
            variant: "attendu",
            lines: [
              "Barème : introduction qui pose l'enjeu (1) ; deux arguments développés (1,5) ; exemple ou ouverture (0,5).",
            ],
          },
        ],
      },
      {
        titre: "Histoire — La société féodale",
        points: 7,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 3,
            question: "Les groupes de la société féodale.",
            reponse: [
              "D'après le document : au sommet, le **roi** ; les **seigneurs**, qui possèdent des terres et des châteaux et commandent les **chevaliers** ; l'**Église** (le clergé), qui encadre la vie religieuse ; et la grande majorité, les **paysans**, qui cultivent la terre.",
              "La société est donc très **hiérarchisée**, chacun ayant une place définie.",
            ],
            attendu: "Distinguer les groupes en s'appuyant sur le document ; employer le mot « hiérarchie ».",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Le lien seigneur / paysans.",
            reponse: [
              "Les paysans cultivent la terre du seigneur et lui doivent des **redevances** (une part des récoltes) et des **corvées** (travaux gratuits).",
              "En échange, le seigneur leur assure sa **protection**. C'est un rapport de dépendance : devoirs des paysans, protection (et exigences) du seigneur.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Ce que les élèves doivent retenir.",
            reponse: [
              "Au Moyen Âge, la société est organisée en groupes hiérarchisés (roi, seigneurs, clergé, paysans).",
              "Elle repose sur la possession de la terre et sur des liens de dépendance entre seigneurs et paysans.",
            ],
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Structurer ses réponses",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Lire attentivement le document** et en extraire les informations utiles avant de rédiger.",
              "**Employer le vocabulaire spécifique** (littoralisation, hiérarchie, redevance, corvée…).",
              "**Introduire les questions développées** (EMC) au lieu de répondre d'emblée.",
              "**Distinguer droits et devoirs** quand la question l'exige (lien seigneur/paysans, droits de l'enfant).",
              "**Adapter les réponses « pour les élèves »** à leur niveau (CM1/CM2).",
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
              "**Oublier de dater la Convention des droits de l'enfant** (1989) ou de citer des droits concrets.",
              "**Confondre les groupes sociaux du Moyen Âge** ou oublier l'Église.",
              "**Ne voir que les avantages du tourisme** sans en montrer les limites environnementales.",
              "**Répondre sans structure** aux questions demandant un développement argumenté.",
            ],
          },
        ],
      },
    ],
  },
];
