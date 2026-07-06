/**
 * SUJETS BLANCS — LANGUE VIVANTE (Seconde épreuve, Domaine 4)
 * ----------------------------------------------------------
 * Niveau B1 du CECRL : à partir d'un document, questions de compréhension
 * puis production d'un texte d'environ 120 mots. Textes ORIGINAUX, ancrés
 * dans la culture de l'aire linguistique. Corrigés avec réponses attendues
 * et propositions de production.
 */
import type { SujetBlanc } from "../types";

export const LANGUES_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1 — Anglais : Screen time
  // ======================================================================
  {
    slug: "langues-1-anglais-screen-time",
    matiere: "langues",
    titre: "Sujet blanc n°1 — Anglais : Children and screen time",
    description:
      "Compréhension d'un texte anglais sur les écrans et l'enfance, puis expression écrite (~120 mots). Niveau B1, ancré dans le débat éducatif britannique.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 4 (Langue vivante : anglais)",
    duree: "45 min conseillées",
    totalPoints: 20,
    consignes: [
      "Answer the comprehension questions in your own words, in English.",
      "Write about 120 words for the expression task.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Reading — Children and screen time",
        points: 10,
        blocks: [
          {
            type: "document",
            titre: "Text (about 190 words)",
            source: "Original text written for this mock exam.",
            lines: [
              "Most parents today worry about how much time their children spend in front of screens. Tablets, phones and televisions are everywhere, and many young children can use them before they can even read.",
              "Teachers report that some pupils arrive at school tired because they have watched videos late into the night. Others find it hard to concentrate, or to play with classmates in the playground, because they are used to being entertained by a screen.",
              "However, screens are not the enemy. Used wisely, digital tools can help children learn languages, discover the world and become creative. The real question is not whether children should use screens, but how and for how long.",
              "Many schools now teach pupils to think critically about what they see online, and encourage families to set clear limits at home. Experts agree on one point: nothing can replace real play, conversation and time spent outdoors. A balance must be found, so that technology serves childhood instead of stealing it.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "a.", text: "What are parents worried about, according to the text?", points: 2 },
              { num: "b.", text: "According to the text, what problems can too much screen time cause at school? (Give two.)", points: 3 },
              { num: "c.", text: "The text says « screens are not the enemy ». Explain what the author means by this.", points: 3 },
              { num: "d.", text: "What solutions are mentioned to find a balance? (Give two.)", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "Writing — Expression (about 120 words)",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Task",
            lines: [
              "In your opinion, how can teachers and parents help children develop a healthy relationship with screens? Give examples from your own experience.",
              "Write about 120 words in English.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["Compréhension", "Repérage et reformulation des informations (a-d)", "10"],
        ["Expression", "Contenu, richesse lexicale, correction grammaticale (B1)", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "En compréhension, on valorise la reformulation personnelle (et non le recopiage du texte). En expression, on évalue la pertinence des idées, la variété du lexique et la correction de la langue au niveau B1.",
    correction: [
      {
        titre: "Reading — Éléments de réponse attendus",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 2,
            question: "What are parents worried about?",
            reponse: [
              "Parents worry about **how much time their children spend in front of screens** (tablets, phones, televisions), which children can use even before they can read.",
            ],
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Two problems caused at school.",
            reponse: [
              "Pupils may come to school **tired** because they watched videos late at night.",
              "They may find it **hard to concentrate** or **to play with classmates**, because they are used to being entertained by a screen.",
            ],
            attendu:
              "Deux problèmes distincts, reformulés (fatigue / concentration / socialisation).",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "« Screens are not the enemy » — meaning.",
            reponse: [
              "The author means that screens are **not bad in themselves**. Used wisely, digital tools can be useful and positive: they can help children learn languages, discover the world and be creative.",
              "The problem is not the screen itself but the **way** and the **amount of time** it is used.",
            ],
            attendu:
              "Montrer la nuance : l'outil n'est pas mauvais, c'est l'usage qui compte.",
          },
          {
            type: "qa",
            num: "d.",
            points: 2,
            question: "Two solutions for balance.",
            reponse: [
              "Schools **teach pupils to think critically** about what they see online.",
              "Families are encouraged to **set clear limits at home**, and to keep time for real play, conversation and outdoor activities.",
            ],
          },
        ],
      },
      {
        titre: "Writing — Proposition de production (~120 mots)",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "attendu",
            titre: "Critères d'évaluation",
            lines: [
              "Contenu et pertinence des idées (4 pts) ; richesse et précision du lexique (3 pts) ; correction grammaticale et cohérence, niveau B1 (3 pts).",
            ],
          },
          {
            type: "p",
            text: "**Exemple de production :** *Teachers and parents can work together to help children use screens in a healthy way. First, adults should set clear rules, for example no screens during meals or before bedtime. It is also important to explain why these limits exist, so that children understand and accept them. At school, teachers can show pupils how to search for reliable information and how to protect their privacy online. In my experience, children copy what adults do, so parents should also limit their own screen time. Finally, families should offer other activities, such as reading, sport or games outside. When children have interesting things to do, they spend less time in front of a screen.* (≈ 120 mots)",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2 — Espagnol : La naturaleza en la ciudad
  // ======================================================================
  {
    slug: "langues-2-espagnol-naturaleza-ciudad",
    matiere: "langues",
    titre: "Sujet blanc n°2 — Espagnol : La naturaleza en la ciudad",
    description:
      "Compréhension d'un texte espagnol sur la végétalisation des villes, puis expression écrite (~120 mots). Niveau B1, thème environnemental.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 4 (Langue vivante : espagnol)",
    duree: "45 min conseillées",
    consignes: [
      "Responda a las preguntas de comprensión en español, con sus propias palabras.",
      "Escriba unas 120 palabras para la expresión.",
      "Baremo indicativo, sobre 20 puntos.",
    ],
    totalPoints: 20,
    sujet: [
      {
        titre: "Comprensión — La naturaleza vuelve a la ciudad",
        points: 10,
        blocks: [
          {
            type: "document",
            titre: "Texto (unas 180 palabras)",
            source: "Texto original escrito para este examen de prueba.",
            lines: [
              "Cada vez más ciudades europeas quieren dejar más espacio a la naturaleza. En Barcelona, en Madrid o en Valencia, los ayuntamientos plantan árboles, crean jardines y transforman antiguas calles en zonas verdes donde los niños pueden jugar.",
              "Estos proyectos no son solo bonitos: también son útiles. Los árboles dan sombra y refrescan el aire durante los veranos, cada vez más calurosos. Las plantas absorben la contaminación y ofrecen un refugio a los pájaros y a los insectos.",
              "Además, los espacios verdes son buenos para las personas. Pasear entre los árboles reduce el estrés, invita a caminar y permite encontrarse con los vecinos. Muchas escuelas participan también, creando pequeños huertos donde los alumnos aprenden a cultivar verduras.",
              "Sin embargo, transformar una ciudad lleva tiempo y dinero. Algunos habitantes protestan cuando se quitan plazas de aparcamiento. Poco a poco, sin embargo, la idea avanza: una ciudad más verde es una ciudad donde se vive mejor.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "a.", text: "¿Qué hacen los ayuntamientos de varias ciudades españolas, según el texto?", points: 2 },
              { num: "b.", text: "Cite dos ventajas de los árboles y de las plantas mencionadas en el texto.", points: 3 },
              { num: "c.", text: "¿Por qué son buenos los espacios verdes para las personas? (Dé dos razones.)", points: 3 },
              { num: "d.", text: "¿Qué dificultad se menciona en el último párrafo?", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "Expresión — (unas 120 palabras)",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Tarea",
            lines: [
              "En su opinión, ¿cómo se puede hacer una ciudad (o un barrio) más agradable y más ecológica? Dé ejemplos concretos.",
              "Escriba unas 120 palabras en español.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["Compréhension", "Repérage et reformulation (a-d)", "10"],
        ["Expression", "Contenu, lexique, correction grammaticale (B1)", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On valorise la reformulation en espagnol (éviter le simple recopiage). En expression, on attend un texte cohérent d'environ 120 mots, au niveau B1, avec un lexique adapté au thème.",
    correction: [
      {
        titre: "Comprensión — Éléments de réponse attendus",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 2,
            question: "¿Qué hacen los ayuntamientos?",
            reponse: [
              "Los ayuntamientos **plantan árboles, crean jardines y transforman calles en zonas verdes** donde los niños pueden jugar (en ciudades como Barcelona, Madrid o Valencia).",
            ],
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Dos ventajas de los árboles y las plantas.",
            reponse: [
              "Los árboles **dan sombra y refrescan el aire** durante los veranos calurosos.",
              "Las plantas **absorben la contaminación** y **ofrecen un refugio a los pájaros y a los insectos**.",
            ],
            attendu: "Deux avantages distincts, reformulés.",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "¿Por qué son buenos para las personas?",
            reponse: [
              "Pasear entre los árboles **reduce el estrés** e invita a caminar.",
              "Permite **encontrarse con los vecinos** (crea vínculos sociales) ; las escuelas crean huertos donde los alumnos aprenden a cultivar.",
            ],
          },
          {
            type: "qa",
            num: "d.",
            points: 2,
            question: "¿Qué dificultad se menciona?",
            reponse: [
              "Transformar una ciudad **lleva tiempo y dinero**, y algunos habitantes **protestan** cuando se quitan plazas de aparcamiento.",
            ],
          },
        ],
      },
      {
        titre: "Expresión — Proposition de production (~120 mots)",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "attendu",
            titre: "Critères d'évaluation",
            lines: [
              "Contenu et pertinence (4 pts) ; lexique adapté au thème (3 pts) ; correction grammaticale et cohérence, niveau B1 (3 pts).",
            ],
          },
          {
            type: "p",
            text: "**Ejemplo de producción :** *Para mí, se puede hacer un barrio más agradable y más ecológico con acciones sencillas. Primero, sería útil plantar más árboles y crear pequeños parques donde la gente pueda descansar y los niños jugar. También se podrían instalar carriles para bicicletas, para que las personas usen menos el coche. Otra idea es organizar un huerto compartido, donde los vecinos cultiven verduras juntos: así se protege la naturaleza y se crean lazos entre las personas. Además, las escuelas pueden enseñar a los alumnos a reciclar y a cuidar las plantas. Estos cambios necesitan tiempo, pero poco a poco un barrio más verde se convierte en un lugar donde se vive mejor.* (≈ 120 palabras)",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 3 — Anglais : Learning through sport
  // ======================================================================
  {
    slug: "langues-3-anglais-learning-through-sport",
    matiere: "langues",
    titre: "Sujet blanc n°3 — Anglais : Learning through sport",
    description:
      "Compréhension d'un texte anglais sur le rôle du sport à l'école, puis expression écrite (~120 mots). Niveau B1, thème du bien-être et de la coopération.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 4 (Langue vivante : anglais)",
    duree: "45 min conseillées",
    totalPoints: 20,
    consignes: [
      "Answer the comprehension questions in your own words, in English.",
      "Write about 120 words for the expression task.",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Reading — More than a game",
        points: 10,
        blocks: [
          {
            type: "document",
            titre: "Text (about 195 words)",
            source: "Original text written for this mock exam.",
            lines: [
              "When people think about school, they usually imagine reading, writing and mathematics. Yet sport and physical activity play a role that is just as important, even if it is often forgotten.",
              "On the playground or in the gym, children learn lessons that no textbook can teach. They discover how to win without boasting and how to lose without giving up. They learn to follow rules, to wait for their turn, and to trust their teammates. A shy pupil may find, during a game, a confidence that stays with them in the classroom.",
              "Sport is also good for the body and the mind. Moving regularly helps children sleep better, concentrate longer and feel less stressed. After an active break, many teachers notice that their pupils are calmer and more ready to learn.",
              "Of course, sport should never become a competition where only the strongest have a place. The goal at school is not to train champions, but to help every child enjoy moving, cooperating and progressing at their own pace. In this way, a simple game becomes a real lesson for life.",
            ],
          },
          {
            type: "questions",
            items: [
              { num: "a.", text: "According to the text, what do people usually associate with school, and what is often forgotten?", points: 2 },
              { num: "b.", text: "What lessons can children learn through sport that « no textbook can teach »? (Give two.)", points: 3 },
              { num: "c.", text: "How can sport help pupils in the classroom, according to the text?", points: 3 },
              { num: "d.", text: "What does the author say the goal of sport at school should NOT be?", points: 2 },
            ],
          },
        ],
      },
      {
        titre: "Writing — Expression (about 120 words)",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Task",
            lines: [
              "Do you agree that sport teaches important values? What role should physical activity have at school? Give examples from your own experience.",
              "Write about 120 words in English.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["Compréhension", "Repérage et reformulation (a-d)", "10"],
        ["Expression", "Contenu, lexique, correction grammaticale (B1)", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une reformulation personnelle des idées du texte et, en expression, une prise de position argumentée d'environ 120 mots, au niveau B1.",
    correction: [
      {
        titre: "Reading — Éléments de réponse attendus",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 2,
            question: "What is associated with school / often forgotten?",
            reponse: [
              "People usually associate school with **reading, writing and mathematics**.",
              "What is often forgotten is the important role of **sport and physical activity**.",
            ],
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Two lessons learned through sport.",
            reponse: [
              "Children learn **to win without boasting and to lose without giving up**.",
              "They learn **to follow rules, to wait for their turn and to trust their teammates**; a shy child can also gain confidence.",
            ],
            attendu: "Deux « leçons » distinctes, reformulées.",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "How sport helps in the classroom.",
            reponse: [
              "Moving regularly helps children **sleep better, concentrate longer and feel less stressed**.",
              "After an active break, pupils are often **calmer and more ready to learn**.",
            ],
          },
          {
            type: "qa",
            num: "d.",
            points: 2,
            question: "What the goal should NOT be.",
            reponse: [
              "Sport at school should **not become a competition where only the strongest have a place**, nor aim only to **train champions**. The goal is to help every child enjoy moving and progress at their own pace.",
            ],
          },
        ],
      },
      {
        titre: "Writing — Proposition de production (~120 mots)",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "attendu",
            titre: "Critères d'évaluation",
            lines: [
              "Contenu et argumentation (4 pts) ; lexique (3 pts) ; correction grammaticale et cohérence, niveau B1 (3 pts).",
            ],
          },
          {
            type: "p",
            text: "**Exemple de production :** *I completely agree that sport teaches important values. When I was at school, playing team games taught me how to cooperate and how to accept defeat without being angry. Sport also helped me feel more confident and make friends. At school, I think physical activity should be part of every day, not only once a week. Short active breaks can help pupils concentrate again after a difficult lesson. However, teachers should be careful: the aim is not to find the best players, but to help everyone enjoy moving and improving. If each child feels included, sport becomes a way to learn respect, effort and teamwork. These are lessons that are useful for the whole of life.* (≈ 120 mots)",
          },
        ],
      },
    ],
  },
];
