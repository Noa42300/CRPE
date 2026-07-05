/**
 * Fiches d'ANGLAIS (6 fiches, CRPE — objectif B1 → B2)
 */
import type { AnglaisFiche } from "./types";

export const ANGLAIS_FICHES: AnglaisFiche[] = [
  // ================= FICHE 1 — VERBES ESSENTIELS =================
  {
    slug: "verbes-essentiels",
    numero: 1,
    titre: "Les verbes essentiels (irréguliers + fréquents)",
    intro:
      "20 verbes couvrent l'immense majorité des phrases anglaises. Les maîtriser (avec leurs formes irrégulières) est le meilleur investissement pour le CRPE.",
    retenir: [
      "Les verbes irréguliers tombent **très souvent** en QCM et en traduction.",
      "Le passé simple anglais = **prétérit** (action finie et datée).",
      "Le **present perfect** relie le passé au présent (have/has + participe passé).",
      "Apprends les verbes par **3 colonnes** : base — prétérit — participe passé.",
    ],
    sections: [
      {
        titre: "Les 20 verbes à maîtriser absolument",
        tableau: {
          entetes: ["Base form", "Prétérit", "Participe passé", "Sens"],
          lignes: [
            ["be", "was / were", "been", "être"],
            ["have", "had", "had", "avoir"],
            ["do", "did", "done", "faire"],
            ["go", "went", "gone", "aller"],
            ["get", "got", "got / gotten", "obtenir, devenir"],
            ["make", "made", "made", "faire, fabriquer"],
            ["take", "took", "taken", "prendre"],
            ["come", "came", "come", "venir"],
            ["see", "saw", "seen", "voir"],
            ["know", "knew", "known", "savoir, connaître"],
            ["think", "thought", "thought", "penser"],
            ["say", "said", "said", "dire"],
            ["tell", "told", "told", "raconter, dire à qqn"],
            ["give", "gave", "given", "donner"],
            ["find", "found", "found", "trouver"],
            ["feel", "felt", "felt", "ressentir"],
            ["put", "put", "put", "mettre"],
            ["bring", "brought", "brought", "apporter"],
            ["write", "wrote", "written", "écrire"],
            ["read", "read", "read", "lire"],
          ],
        },
      },
      {
        titre: "Comment les apprendre efficacement",
        points: [
          "Regroupe-les par **famille de sons** : think/thought, bring/brought (même modèle).",
          "Certains ne changent **jamais** : put – put – put ; read – read – read (seule la prononciation change).",
          "Révise en cachant une colonne, puis récite les deux autres.",
          "10 verbes par jour pendant une semaine = les 20 acquis durablement.",
        ],
        exemples: [
          "I **went** to London last year. → prétérit (action finie, datée)",
          "I have never **been** to Spain. → present perfect (expérience de vie)",
          "She **has written** three letters today. → present perfect (bilan encore ouvert)",
        ],
      },
      {
        titre: "say ou tell ? (différence classique)",
        points: [
          "**say** something : dire quelque chose (sans destinataire obligatoire).",
          "**tell** someone something : dire À quelqu'un (destinataire obligatoire).",
        ],
        exemples: [
          "She **said** that she was tired.",
          "She **told me** that she was tired. (tell + personne)",
        ],
      },
    ],
    attention: [
      "**read** s'écrit pareil aux 3 formes mais se prononce /riːd/ au présent et /rɛd/ au passé.",
      "**got / gotten** : « gotten » est américain ; « got » suffit au CRPE.",
      "Ne pas ajouter **-ed** à un verbe irrégulier : ~~goed~~ → **went**, ~~taked~~ → **took**.",
    ],
  },

  // ================= FICHE 2 — CONSTRUIRE DES PHRASES =================
  {
    slug: "construire-des-phrases",
    numero: 2,
    titre: "Construire des phrases (grammaire de base)",
    intro:
      "L'anglais est une langue à ordre fixe : Sujet + Verbe + Complément. Maîtriser l'affirmation, la négation et la question couvre 90 % des besoins.",
    retenir: [
      "Ordre **fixe** : Subject + Verb + Complement (S-V-C).",
      "Négation et question utilisent l'auxiliaire **do / does / did**.",
      "Après do/does/did → toujours la **base verbale** (sans -s, sans -ed).",
      "3ᵉ personne du singulier au présent : verbe + **-s**.",
    ],
    sections: [
      {
        titre: "La phrase affirmative",
        points: [
          "Structure : **Subject + Verb + Complement**.",
          "Au présent simple, ajoute **-s** à la 3ᵉ personne (he/she/it).",
        ],
        exemples: [
          "I **go** to school.",
          "She **likes** English. (like + s : 3ᵉ personne)",
        ],
      },
      {
        titre: "La phrase négative",
        points: [
          "Structure : **Subject + do/does/did + not + base verbale**.",
          "**do not = don't** · **does not = doesn't** · **did not = didn't**.",
          "C'est l'auxiliaire qui porte le temps et la personne, pas le verbe.",
        ],
        exemples: [
          "I **do not (don't) like** coffee.",
          "He **does not (doesn't) play** football. (play sans -s !)",
          "They **did not (didn't) come** yesterday. (come sans -ed !)",
        ],
      },
      {
        titre: "La question",
        points: [
          "Structure : **Do/Does/Did + subject + base verbale ?**",
          "Avec un mot interrogatif : **Wh- + do/does/did + sujet + verbe ?** (What, Where, When, Why, How).",
        ],
        exemples: [
          "**Do** you **like** music?",
          "**Does** she **work** here?",
          "**Where did** you **go** last summer?",
        ],
        tableau: {
          titre: "Le bon auxiliaire selon le temps",
          entetes: ["Temps", "Auxiliaire", "Exemple"],
          lignes: [
            ["Présent (I/you/we/they)", "do", "Do you play tennis?"],
            ["Présent (he/she/it)", "does", "Does he play tennis?"],
            ["Passé (tous)", "did", "Did they play tennis?"],
          ],
        },
      },
      {
        titre: "Le cas du verbe be (exception)",
        points: [
          "**be** n'utilise pas do/did : il s'inverse tout seul.",
          "Négation : be + not · Question : Be + sujet ?",
        ],
        exemples: [
          "She **is not (isn't)** tired.",
          "**Are** you ready? · **Was** he at school?",
        ],
      },
    ],
    attention: [
      "Jamais deux marques de temps : ~~Does she likes~~ → Does she **like** ?",
      "Jamais ~~I no like~~ → **I don't like**.",
      "Le **-s** de la 3ᵉ personne est l'oubli nº 1 des francophones : *she work* ❌ → *she works* ✅.",
    ],
  },

  // ================= FICHE 3 — TEMPS ESSENTIELS =================
  {
    slug: "temps-essentiels",
    numero: 3,
    titre: "Les temps essentiels (présent, passé, present perfect)",
    intro:
      "Quatre temps suffisent pour s'exprimer correctement au niveau B1-B2. L'enjeu : choisir le bon temps grâce aux mots-indices.",
    retenir: [
      "**Present simple** → habitudes, vérités générales.",
      "**Present continuous** (be + V-ing) → action en cours.",
      "**Past simple** (prétérit) → action finie et datée.",
      "**Present perfect** (have/has + participe passé) → lien passé ↔ présent.",
    ],
    sections: [
      {
        titre: "Vue d'ensemble des 4 temps",
        tableau: {
          entetes: ["Temps", "Usage", "Exemple", "Mots-indices"],
          lignes: [
            ["Present simple", "habitudes", "I **work** every day.", "every day, usually, often"],
            ["Present continuous", "en ce moment", "I **am studying** now.", "now, at the moment"],
            ["Past simple", "action finie", "I **visited** London last year.", "yesterday, last year, in 2010, ago"],
            ["Present perfect", "expérience, bilan", "I **have been** to London.", "ever, never, already, yet, just"],
          ],
        },
      },
      {
        titre: "Past simple ou present perfect ? (LE point clé)",
        points: [
          "**Past simple** : le moment est terminé ou précisé (yesterday, in 2019…). L'action est coupée du présent.",
          "**Present perfect** : le moment n'est pas précisé, ou la période continue encore. On fait un **bilan** au présent.",
          "Règle d'or : une **date précise** dans la phrase → past simple, jamais present perfect.",
        ],
        exemples: [
          "I **visited** London in 2019. (date précise → past simple)",
          "I **have visited** London three times. (bilan d'expérience → present perfect)",
          "She **has just finished** her homework. (résultat présent)",
        ],
      },
      {
        titre: "Formation à connaître",
        points: [
          "Present continuous : **be (am/is/are) + verbe-ing**.",
          "Past simple régulier : verbe + **-ed** ; irrégulier : 2ᵉ colonne (went, saw, took…).",
          "Present perfect : **have/has + participe passé** (3ᵉ colonne).",
        ],
        exemples: [
          "They **are playing** in the garden.",
          "We **watched** a film last night.",
          "He **has lost** his keys. (il ne les a toujours pas → conséquence présente)",
        ],
      },
    ],
    attention: [
      "~~I have seen him yesterday~~ ❌ → **I saw him yesterday** (date précise = past simple).",
      "Ne pas oublier **be** dans le present continuous : ~~I studying~~ → I **am** studying.",
      "**since** + point de départ (since 2020) ; **for** + durée (for three years).",
    ],
  },

  // ================= FICHE 4 — VOCABULAIRE COURANT =================
  {
    slug: "vocabulaire-courant",
    numero: 4,
    titre: "Vocabulaire courant (école + quotidien)",
    intro:
      "Le vocabulaire de l'école et de la vie quotidienne est le socle des sujets CRPE. Apprends-le par thème, en contexte, jamais mot à mot isolé.",
    retenir: [
      "Apprends le vocabulaire **par thème** et **dans une phrase**.",
      "**pupil** = élève (école primaire) ; *student* = plutôt étudiant.",
      "Les verbes de routine se construisent souvent avec **to get** et **to go**.",
      "10 mots bien réutilisés valent mieux que 50 mots récités.",
    ],
    sections: [
      {
        titre: "L'école et l'éducation",
        tableau: {
          entetes: ["Anglais", "Français"],
          lignes: [
            ["classroom", "salle de classe"],
            ["lesson", "cours, leçon"],
            ["homework", "devoirs"],
            ["pupil", "élève"],
            ["teacher", "professeur"],
            ["timetable", "emploi du temps"],
            ["playground", "cour de récréation"],
            ["break", "récréation, pause"],
            ["headteacher", "directeur / directrice"],
            ["to learn / to teach", "apprendre / enseigner"],
          ],
        },
        exemples: [
          "The **pupils** do their **homework** after the **lesson**.",
          "Our **timetable** changes every term.",
        ],
      },
      {
        titre: "La vie quotidienne",
        tableau: {
          entetes: ["Anglais", "Français"],
          lignes: [
            ["daily routine", "routine quotidienne"],
            ["to get up", "se lever"],
            ["to get dressed", "s'habiller"],
            ["to eat breakfast", "prendre le petit-déjeuner"],
            ["to go to work / school", "aller au travail / à l'école"],
            ["to come back home", "rentrer à la maison"],
            ["to go to bed", "se coucher"],
          ],
        },
        exemples: [
          "I **get up** at 7, I **eat breakfast**, then I **go to school**.",
          "She **comes back home** at 6 p.m.",
        ],
      },
      {
        titre: "Mots de liaison du quotidien",
        points: [
          "**then** = ensuite · **after that** = après cela · **before** = avant.",
          "**usually** = d'habitude · **sometimes** = parfois · **always** = toujours · **never** = jamais.",
          "Place des adverbes de fréquence : **avant** le verbe (I *usually* get up at 7) mais **après** be (She *is always* late).",
        ],
      },
    ],
    attention: [
      "**homework** est indénombrable : ~~homeworks~~ ❌ → *some homework*, *a lot of homework*.",
      "Faux ami : **a lecture** = une conférence (pas « la lecture » = *reading*).",
      "**teach** (enseigner) ≠ **learn** (apprendre) : *the teacher teaches, the pupil learns*.",
    ],
  },

  // ================= FICHE 5 — EXPRESSIONS + CONNECTEURS =================
  {
    slug: "expressions-et-connecteurs",
    numero: 5,
    titre: "Expressions utiles + connecteurs logiques",
    intro:
      "Les connecteurs sont LE marqueur du niveau B2 : ils structurent ton discours et tes écrits. Quelques expressions toutes faites suffisent à élever ton anglais.",
    retenir: [
      "Un texte B2 = des idées **reliées** par des connecteurs (however, therefore…).",
      "Donne ton opinion avec des formules fixes : *In my opinion…*, *From my point of view…*",
      "Structure toujours : **First of all… Then… Finally…**",
      "Un connecteur par phrase suffit : n'en accumule pas.",
    ],
    sections: [
      {
        titre: "Donner son opinion",
        points: [
          "**I think that…** = je pense que…",
          "**In my opinion…** = à mon avis…",
          "**From my point of view…** = de mon point de vue…",
          "**I agree with this idea because…** = je suis d'accord car…",
          "**I disagree because…** = je ne suis pas d'accord car…",
        ],
        exemples: [
          "**In my opinion**, learning English is essential for teachers.",
          "**I agree with** this idea **because** pupils need languages.",
        ],
      },
      {
        titre: "Expliquer et illustrer",
        points: [
          "**This means that…** = cela signifie que…",
          "**For example / For instance…** = par exemple…",
          "**It is used to…** = cela sert à…",
          "**It is important to…** = il est important de…",
        ],
        exemples: [
          "School starts at 8:30. **This means that** pupils get up early.",
          "**It is important to** speak slowly in class.",
        ],
      },
      {
        titre: "Les connecteurs logiques (niveau B2)",
        tableau: {
          entetes: ["Connecteur", "Sens", "Exemple"],
          lignes: [
            ["however", "cependant", "I like English; **however**, it is sometimes difficult."],
            ["therefore", "donc, par conséquent", "He was ill; **therefore**, he stayed home."],
            ["although", "bien que", "**Although** it was raining, we went out."],
            ["in addition", "de plus", "**In addition**, pupils learn songs."],
            ["on the one hand / on the other hand", "d'un côté / de l'autre", "**On the one hand** it is fun; **on the other hand** it takes time."],
            ["whereas", "tandis que", "She likes maths **whereas** he prefers English."],
          ],
        },
      },
      {
        titre: "Structurer un discours ou un écrit",
        points: [
          "**First of all…** = tout d'abord…",
          "**Then… / Next…** = ensuite…",
          "**Moreover…** = de plus…",
          "**Finally… / To conclude…** = enfin / pour conclure…",
        ],
        exemples: [
          "**First of all**, I will present the school. **Then**, I will describe a lesson. **Finally**, I will give my opinion.",
        ],
      },
    ],
    attention: [
      "**although** n'est jamais suivi de « but » : ~~Although… but…~~ ❌ (l'un OU l'autre).",
      "**however** s'isole par une ponctuation : *…; however, …* ou *However, …* en début de phrase.",
      "Ne traduis pas « par contre » par ~~by against~~ : dis **however** ou **on the other hand**.",
    ],
  },

  // ================= FICHE 6 — OBJECTIF B2 =================
  {
    slug: "objectif-b2",
    numero: 6,
    titre: "Objectif B2 : récap + erreurs à éviter",
    intro:
      "La check-list finale : ce qu'un niveau B2 doit maîtriser, et les erreurs typiques des francophones qui coûtent des points au CRPE.",
    retenir: [
      "**Grammaire** : 4 temps + modaux (can, must, should) + comparatifs.",
      "**Lexique** : quotidien, école, expressions d'opinion.",
      "**Écrit** : phrases courtes et correctes + connecteurs logiques.",
      "Le réflexe gagnant : ne **jamais** traduire mot à mot depuis le français.",
    ],
    sections: [
      {
        titre: "Check-list grammaire",
        points: [
          "Les temps : present simple, present continuous, past simple, **present perfect**.",
          "Les **modaux** : can (capacité), must (obligation), should (conseil).",
          "Les **comparatifs** : adjectif court + -er (*bigger*) ; adjectif long → more + adj (*more interesting*).",
          "Les **superlatifs** : the + adj-est (*the biggest*) / the most + adj (*the most interesting*).",
        ],
        exemples: [
          "You **should** revise every day. (conseil)",
          "Pupils **must** listen to the teacher. (obligation)",
          "This exercise is **easier** than the last one.",
          "English is **more useful** than I thought.",
        ],
      },
      {
        titre: "Check-list expression écrite",
        points: [
          "Écris des phrases **courtes mais correctes** (S-V-C).",
          "Relie tes idées avec des **connecteurs** (however, therefore, first of all…).",
          "Vérifie systématiquement : le **-s** de la 3ᵉ personne, le temps du verbe, l'ordre des mots.",
          "Relis en te demandant : « Est-ce que j'ai pensé cette phrase en anglais ou traduit du français ? »",
        ],
      },
      {
        titre: "Les erreurs de francophones à bannir",
        tableau: {
          entetes: ["❌ Erreur (calque du français)", "✅ Correct", "Pourquoi"],
          lignes: [
            ["I have 25 years", "I **am** 25 (years old)", "L'âge se dit avec be"],
            ["She work here", "She work**s** here", "-s à la 3ᵉ personne"],
            ["I have seen him yesterday", "I **saw** him yesterday", "Date précise → past simple"],
            ["He can to swim", "He can **swim**", "Modal + base verbale (sans to)"],
            ["I am agree", "I **agree**", "agree est un verbe, pas un adjectif"],
            ["informations", "**information**", "Indénombrable (comme homework, advice)"],
          ],
        },
      },
      {
        titre: "Plan d'entraînement simple",
        points: [
          "Chaque jour : 10 minutes de vocabulaire (fiches 1 et 4).",
          "Chaque semaine : écrire 5 phrases avec un connecteur différent (fiche 5).",
          "Avant l'épreuve : relire les erreurs à bannir ci-dessus.",
        ],
      },
    ],
    attention: [
      "Un modal n'est **jamais** suivi de « to » : can swim, must go, should learn.",
      "**information, advice, homework** : indénombrables → jamais de -s, jamais « an » devant.",
      "**I am agree** est l'erreur française nº 1 à l'écrit : dis **I agree**.",
    ],
  },
];
