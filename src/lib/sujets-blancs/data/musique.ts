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

  // ======================================================================
  // SUJET 4 — La voix et le chant choral
  // ======================================================================
  {
    slug: "musique-4-la-voix-et-le-chant-choral",
    matiere: "musique",
    titre: "Sujet blanc n°4 — La voix, premier instrument",
    description:
      "La voix comme instrument universel et le chant choral. Réflexion sur les registres vocaux et sur les bienfaits de la pratique chorale à l'école.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Éducation musicale)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Éducation musicale — La voix et le chant choral",
        points: 20,
        blocks: [
          {
            type: "document",
            titre: "Citation",
            source: "Formulation originale (support de réflexion).",
            lines: [
              "« La voix est le seul instrument que chacun porte en soi : avant de jouer d'un instrument, l'enfant chante ; avant de lire une note, il fredonne. »",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "En quoi la voix peut-elle être considérée comme un instrument à part entière ? Vous évoquerez les registres vocaux et la spécificité du chant choral.",
                points: 10,
              },
              {
                num: "b.",
                text: "Quels sont les bienfaits de la pratique du chant choral à l'école ? Comment mettre en place un projet de chorale avec une classe ?",
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
        ["a.", "La voix comme instrument, registres, chant choral", "10"],
        ["b.", "Bienfaits et mise en œuvre d'une chorale de classe", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend un vocabulaire vocal correct (registres, polyphonie, a cappella) et, pour la question b, une mise en œuvre réaliste articulant apprentissage, écoute et plaisir de chanter ensemble.",
    correction: [
      {
        titre: "Éducation musicale — La voix et le chant choral",
        points: 20,
        blocks: [
          {
            type: "p",
            text: "**a. La voix, un instrument à part entière.**",
          },
          {
            type: "intro",
            citation:
              "La musique exprime ce qui ne peut être dit et sur quoi il est impossible de rester silencieux.",
            auteur: "Victor Hugo (1802-1885), William Shakespeare",
            paragraphs: [
              "Victor Hugo reconnaît à la musique le pouvoir de dire l'indicible, ce que les mots seuls ne peuvent atteindre.",
              "Or la voix est le premier moyen par lequel l'être humain accède à cette expression : instrument intime et universel, elle mérite d'être considérée comme un instrument de musique à part entière.",
            ],
          },
          {
            type: "p",
            text: "La voix produit des sons de hauteurs et de timbres variés ; elle possède des **registres** (grave, médium, aigu) et se décline selon les tessitures (soprano, alto, ténor, basse). Elle peut chanter seule ou en groupe, avec ou sans accompagnement (**a cappella**). Le **chant choral** en fait un instrument collectif : plusieurs voix se superposent (unisson, puis **polyphonie** à plusieurs parties) pour former un ensemble harmonieux, exigeant écoute mutuelle et justesse.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Bienfaits et mise en œuvre d'une chorale de classe.",
            reponse: [
              "Bienfaits : le chant choral développe l'**oreille** et la justesse, la **mémoire**, la **respiration** et la maîtrise du corps ; il apprend à **écouter les autres** et à tenir sa place dans un groupe (coopération, cohésion) ; il procure le plaisir de chanter ensemble et la confiance en soi.",
              "Mise en œuvre : choisir un répertoire adapté à l'âge, apprendre le chant par imitation (phrase par phrase), travailler la posture et la respiration, commencer à l'unisson avant d'introduire éventuellement un canon ou une deuxième voix, et fixer un objectif (un petit concert, une fête d'école) qui motive les élèves.",
            ],
            attendu:
              "Citer plusieurs bienfaits (musicaux, corporels, sociaux) ET décrire une démarche progressive et motivante.",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Éducation musicale",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Mobiliser le vocabulaire précis** (registre, tessiture, unisson, polyphonie, a cappella).",
              "**Distinguer les plans** : la voix comme instrument (technique) et le chant choral (pratique collective).",
              "**Introduire la réponse rédigée** par une amorce (une citation d'artiste ou d'écrivain bien choisie est valorisée).",
              "**Pour la mise en œuvre**, proposer une démarche progressive (imitation, unisson puis polyphonie) et un objectif motivant.",
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
              "**Confondre hauteur (grave/aigu) et intensité (fort/doux)** en décrivant la voix.",
              "**Négliger la dimension collective** du chant choral (écoute mutuelle, polyphonie).",
              "**Proposer un répertoire inadapté** à l'âge des élèves.",
              "**Commencer directement par la réponse** sans introduction construite.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 5 — Les musiques du monde
  // ======================================================================
  {
    slug: "musique-5-les-musiques-du-monde",
    matiere: "musique",
    titre: "Sujet blanc n°5 — Les musiques du monde",
    description:
      "Diversité et métissage des musiques du monde. Réflexion sur ce qu'elles apportent et sur l'ouverture culturelle qu'elles permettent à l'école.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Éducation musicale)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Éducation musicale — Diversité des musiques du monde",
        points: 20,
        blocks: [
          {
            type: "document",
            titre: "Citation",
            source: "Formulation originale (support de réflexion).",
            lines: [
              "« Chaque peuple a inventé ses instruments, ses rythmes et ses chants ; réunies, ces musiques dessinent la carte sonore de l'humanité. »",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Qu'appelle-t-on « musiques du monde » ? Montrez, à l'aide d'exemples, la diversité des instruments et des traditions musicales selon les cultures.",
                points: 10,
              },
              {
                num: "b.",
                text: "En quoi faire découvrir les musiques du monde à l'école contribue-t-il à l'ouverture culturelle des élèves ? Proposez une activité d'écoute.",
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
        ["a.", "Notion de musiques du monde, diversité, exemples", "10"],
        ["b.", "Ouverture culturelle + activité d'écoute", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend des exemples précis et variés (instruments, aires culturelles) et, pour la question b, une activité d'écoute active reliant musique et ouverture au monde.",
    correction: [
      {
        titre: "Éducation musicale — Diversité des musiques du monde",
        points: 20,
        blocks: [
          {
            type: "p",
            text: "**a. Les musiques du monde et leur diversité.**",
          },
          {
            type: "intro",
            citation: "La musique est la langue universelle de l'humanité.",
            auteur: "Henry Wadsworth Longfellow (1807-1882), Outre-Mer",
            paragraphs: [
              "L'écrivain américain Longfellow voit dans la musique une langue que tous les peuples partagent, par-delà les frontières et les mots.",
              "Les musiques du monde illustrent ce paradoxe : elles sont à la fois très diverses selon les cultures et universellement compréhensibles comme expression humaine. C'est cette diversité que le développement va montrer.",
            ],
          },
          {
            type: "p",
            text: "On appelle « **musiques du monde** » l'ensemble des musiques traditionnelles et populaires des différentes cultures, souvent transmises oralement. Leur diversité est immense : instruments propres à chaque aire (djembé et kora en Afrique de l'Ouest, sitar et tablas en Inde, gamelan en Indonésie, cornemuse en Écosse, guitare flamenca en Espagne), rythmes et échelles particuliers, fonctions variées (fête, rituel, danse, travail). Les musiques actuelles naissent souvent du **métissage** de ces traditions (jazz, musiques latines).",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Ouverture culturelle et activité d'écoute.",
            reponse: [
              "Découvrir les musiques du monde développe la **curiosité** et le **respect de la diversité** : les élèves entendent d'autres timbres, d'autres langues, d'autres façons de faire de la musique, et comprennent que chaque culture a sa richesse. Cela favorise l'ouverture et lutte contre les préjugés.",
              "Activité d'écoute : faire écouter deux extraits de régions différentes, faire **repérer les instruments**, décrire le rythme et l'ambiance avec des mots, situer la musique sur une carte, éventuellement accompagner par des percussions corporelles. On relie écoute active, vocabulaire et culture (lien possible avec la géographie).",
            ],
            attendu:
              "Justifier l'apport culturel ET proposer une activité d'écoute active (repérer, décrire, situer), pas seulement « écouter ».",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Parler des musiques du monde",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Donner des exemples précis et variés** (instruments, aires culturelles) plutôt que des généralités.",
              "**Employer un vocabulaire juste** (timbre, rythme, tradition orale, métissage).",
              "**Introduire la réponse** par une amorce pertinente (citation bien choisie).",
              "**Proposer une écoute active** : toujours associer l'écoute à une tâche (repérer, décrire, comparer, situer).",
              "**Croiser les disciplines** (géographie, langues, EMC) pour l'ouverture culturelle.",
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
              "**Rester dans le vague** (« il y a beaucoup de musiques ») sans exemples concrets d'instruments ou de cultures.",
              "**Proposer une écoute passive** sans tâche précise pour les élèves.",
              "**Réduire les musiques du monde à un folklore figé** : montrer aussi les métissages et la vitalité actuelle.",
              "**Plaquer une citation** sans l'expliquer ni la relier au propos.",
            ],
          },
        ],
      },
    ],
  },
];
