/**
 * Fiches d'ESPAGNOL (6 fiches, CRPE — objectif A2 → B1)
 */
import type { EspagnolFiche } from "./types";

export const ESPAGNOL_FICHES: EspagnolFiche[] = [
  // ================= FICHE 1 — VERBES ESSENTIELS =================
  {
    slug: "verbes-essentiels",
    numero: 1,
    titre: "Les verbes essentiels (SER / ESTAR + verbes fréquents)",
    intro:
      "L'espagnol repose sur une poignée de verbes très fréquents — et sur LA distinction incontournable : ser ou estar. C'est le socle de tout le reste.",
    retenir: [
      "3 familles de verbes : **-ar** (hablar), **-er** (comer), **-ir** (vivir).",
      "**SER** = identité, caractéristique durable · **ESTAR** = état passager, lieu.",
      "L'âge se dit avec **tener** : *Tengo 20 años* (jamais avec ser).",
      "10 verbes irréguliers couvrent l'essentiel : ser, estar, tener, hacer, ir, poder, querer, decir, ver, saber.",
    ],
    sections: [
      {
        titre: "Les 10 verbes indispensables",
        tableau: {
          entetes: ["Français", "Espagnol", "Yo (présent)", "Exemple"],
          lignes: [
            ["être", "ser / estar", "soy / estoy", "Soy francés · Estoy en casa"],
            ["avoir", "tener", "tengo", "Tengo 20 años"],
            ["faire", "hacer", "hago", "Hago los deberes"],
            ["aller", "ir", "voy", "Voy a la escuela"],
            ["pouvoir", "poder", "puedo", "Puedo ayudarte"],
            ["vouloir", "querer", "quiero", "Quiero aprender"],
            ["devoir", "deber", "debo", "Debo estudiar"],
            ["dire", "decir", "digo", "Digo la verdad"],
            ["voir", "ver", "veo", "Veo la película"],
            ["savoir", "saber", "sé", "Sé la respuesta"],
          ],
        },
      },
      {
        titre: "SER ou ESTAR ? (LA question de l'espagnol)",
        points: [
          "**SER** : identité, nationalité, profession, caractère permanent.",
          "**ESTAR** : état passager (fatigue, humeur), **localisation**.",
          "Astuce : si tu peux dire « c'est sa nature » → ser ; « c'est son état du moment / sa position » → estar.",
        ],
        tableau: {
          titre: "Comparaison directe",
          entetes: ["SER (nature)", "ESTAR (état / lieu)"],
          lignes: [
            ["Soy francés. (nationalité)", "Estoy cansado. (état passager)"],
            ["Es profesor. (profession)", "Está en casa. (lieu)"],
            ["Eres simpático. (caractère)", "Estás contento hoy. (humeur du jour)"],
          ],
        },
        exemples: [
          "Yo **soy** profesor. (identité)",
          "**Estoy** en casa. (lieu)",
          "**Tengo** 20 años. (âge → tener !)",
        ],
      },
      {
        titre: "La conjugaison régulière au présent (modèles)",
        tableau: {
          entetes: ["", "hablAR", "comER", "vivIR"],
          lignes: [
            ["yo", "hablo", "como", "vivo"],
            ["tú", "hablas", "comes", "vives"],
            ["él / ella", "habla", "come", "vive"],
            ["nosotros", "hablamos", "comemos", "vivimos"],
            ["vosotros", "habláis", "coméis", "vivís"],
            ["ellos / ellas", "hablan", "comen", "viven"],
          ],
        },
        points: [
          "Ces trois modèles couvrent la **grande majorité** des verbes espagnols.",
          "Repère la terminaison de l'infinitif (-ar / -er / -ir), applique le modèle.",
        ],
      },
    ],
    attention: [
      "~~Soy cansado~~ ❌ → **Estoy cansado** (la fatigue est un état, pas une identité).",
      "~~Soy 20 años~~ ❌ → **Tengo 20 años** (l'âge se dit avec tener).",
      "Certains adjectifs changent de sens : *ser listo* = être intelligent ; *estar listo* = être prêt.",
    ],
  },

  // ================= FICHE 2 — CONSTRUIRE DES PHRASES =================
  {
    slug: "construire-des-phrases",
    numero: 2,
    titre: "Construire une phrase (grammaire de base)",
    intro:
      "Bonne nouvelle : la phrase espagnole ressemble à la phrase française — avec deux originalités : le sujet souvent omis et les points d'interrogation inversés.",
    retenir: [
      "Structure : **Sujet + Verbe + Complément** (comme en français).",
      "Le **sujet est souvent omis** : la terminaison du verbe suffit (*Hablo español*).",
      "Négation ultra-simple : **no + verbe**.",
      "Question à l'écrit : **¿ … ?** (ouverture inversée obligatoire).",
    ],
    sections: [
      {
        titre: "La phrase affirmative",
        points: [
          "**Sujet + Verbe + Complément**.",
          "Le pronom sujet ne s'emploie que pour **insister** ou lever une ambiguïté.",
        ],
        exemples: [
          "(Yo) **hablo** español. = Je parle espagnol.",
          "Ella **come** pizza.",
          "**Estudiamos** en la universidad. (sujet « nosotros » sous-entendu)",
        ],
      },
      {
        titre: "La phrase négative",
        points: [
          "**no** se place juste **devant le verbe** — c'est tout.",
          "Double négation possible et correcte : *No veo nada* (je ne vois rien).",
        ],
        exemples: [
          "Yo **no hablo** inglés.",
          "Él **no trabaja** hoy.",
          "**No** entiendo **nada**.",
        ],
      },
      {
        titre: "La question",
        points: [
          "À l'écrit : **¿** en début et **?** en fin de question.",
          "Pas d'auxiliaire (contrairement à l'anglais) : intonation ou inversion simple.",
          "Mots interrogatifs (toujours accentués) : **¿Qué?** (quoi), **¿Dónde?** (où), **¿Cuándo?** (quand), **¿Por qué?** (pourquoi), **¿Cómo?** (comment), **¿Quién?** (qui).",
        ],
        exemples: [
          "**¿Hablas** español?",
          "**¿Dónde** vives?",
          "**¿Por qué** estudias español? — Porque me gusta.",
        ],
      },
      {
        titre: "Premiers connecteurs pour relier tes phrases",
        points: [
          "**y** = et (devient **e** devant i- : *padres e hijos*).",
          "**pero** = mais.",
          "**porque** = parce que.",
          "**también** = aussi · **tampoco** = non plus.",
        ],
        exemples: [
          "Hablo francés **y** español, **pero** no hablo alemán.",
          "Estudio español **porque** quiero ser profesor.",
        ],
      },
    ],
    attention: [
      "N'oublie jamais le **¿** d'ouverture à l'écrit : c'est une faute visible au CRPE.",
      "Pas de « do/does » à l'espagnole : la question se fait **sans auxiliaire**.",
      "**¿Por qué?** (pourquoi, en 2 mots avec accent) ≠ **porque** (parce que, en 1 mot).",
    ],
  },

  // ================= FICHE 3 — TEMPS ESSENTIELS =================
  {
    slug: "temps-essentiels",
    numero: 3,
    titre: "Les temps essentiels (présent, passé simple, passé composé)",
    intro:
      "Trois temps suffisent pour raconter et décrire au niveau B1. La clé : associer chaque temps à ses mots-indices (ayer, hoy, todos los días…).",
    retenir: [
      "**Présent** → habitudes et actions actuelles (le temps roi).",
      "**Pretérito indefinido** (passé simple) → action **terminée et datée** (*ayer, en 2010*).",
      "**Pretérito perfecto** (passé composé : he + participe) → action **récente ou reliée au présent** (*hoy, esta semana*).",
      "Participes : -ar → **-ado** (hablado) ; -er/-ir → **-ido** (comido, vivido).",
    ],
    sections: [
      {
        titre: "Vue d'ensemble des 3 temps",
        tableau: {
          entetes: ["Temps", "Usage", "Exemple", "Mots-indices"],
          lignes: [
            ["Presente", "habitudes, maintenant", "Trabajo todos los días.", "hoy, ahora, siempre, todos los días"],
            ["Pretérito indefinido", "action finie et datée", "Ayer **comí** pizza.", "ayer, la semana pasada, en 2010"],
            ["Pretérito perfecto", "action récente / bilan", "**He comido** ya.", "hoy, esta semana, ya, todavía no"],
          ],
        },
      },
      {
        titre: "Le présent (rappel des modèles)",
        points: [
          "hablar → hablo, hablas, habla, hablamos, habláis, hablan.",
          "Sert aussi pour un **futur proche** : *Mañana voy a Madrid* (avec ir a + infinitif).",
        ],
        exemples: [
          "Yo **trabajo** todos los días.",
          "Ella **estudia** en la universidad.",
          "**Voy a visitar** Madrid mañana. (futur proche : ir a + infinitif)",
        ],
      },
      {
        titre: "Le passé simple (pretérito indefinido)",
        points: [
          "Action **terminée**, coupée du présent, souvent datée.",
          "hablar → hablé, hablaste, **habló**… · comer → comí, comiste, **comió**…",
          "Irréguliers fréquents : **fui** (ir/ser), **hice** (hacer), **tuve** (tener), **estuve** (estar).",
        ],
        exemples: [
          "Ayer **comí** pizza.",
          "**Fui** a Madrid en 2019.",
          "**Hice** mis deberes anoche.",
        ],
      },
      {
        titre: "Le passé composé (pretérito perfecto)",
        points: [
          "Formation : **haber au présent (he, has, ha, hemos, habéis, han) + participe passé**.",
          "S'utilise pour une période **encore ouverte** : hoy, esta semana, este año.",
          "Le participe est **invariable** avec haber (contrairement au français avec être).",
        ],
        exemples: [
          "**He comido** ya. (aujourd'hui)",
          "Esta semana **hemos estudiado** mucho.",
          "¿**Has visto** la película?",
        ],
      },
    ],
    attention: [
      "L'**accent change le temps** : *hablo* = je parle ≠ *habló* = il/elle a parlé !",
      "Période finie (*ayer*) → indefinido ; période en cours (*hoy*) → perfecto.",
      "Jamais d'accord du participe avec haber : *ella ha comido* (pas ~~comida~~).",
    ],
  },

  // ================= FICHE 4 — VOCABULAIRE COURANT =================
  {
    slug: "vocabulaire-courant",
    numero: 4,
    titre: "Vocabulaire courant (école + quotidien)",
    intro:
      "Le vocabulaire de l'école et du quotidien couvre la plupart des situations CRPE. Apprends chaque nom AVEC son article : c'est lui qui donne le genre.",
    retenir: [
      "Apprends chaque nom **avec son article** : *el cuaderno*, *la clase*.",
      "En général : **-o** = masculin, **-a** = féminin (avec exceptions : *el día*, *la mano*).",
      "Pluriel simple : voyelle + **-s** (casa → casas) ; consonne + **-es** (profesor → profesores).",
      "Les adverbes de fréquence (siempre, a veces, nunca) rendent tes phrases naturelles.",
    ],
    sections: [
      {
        titre: "L'école (la escuela)",
        tableau: {
          entetes: ["Espagnol", "Français"],
          lignes: [
            ["la escuela", "l'école"],
            ["el profesor / la profesora", "le professeur / la professeure"],
            ["el alumno / la alumna", "l'élève"],
            ["la clase", "la classe, le cours"],
            ["el examen", "l'examen"],
            ["el cuaderno", "le cahier"],
            ["el libro", "le livre"],
            ["los deberes", "les devoirs"],
            ["el recreo", "la récréation"],
            ["aprender / enseñar", "apprendre / enseigner"],
          ],
        },
        exemples: [
          "Los alumnos hacen **los deberes** después de **la clase**.",
          "La profesora explica **la lección**.",
        ],
      },
      {
        titre: "La vie quotidienne",
        tableau: {
          entetes: ["Espagnol", "Français"],
          lignes: [
            ["la casa", "la maison"],
            ["el trabajo", "le travail"],
            ["la comida", "la nourriture, le repas"],
            ["el tiempo", "le temps (durée ou météo)"],
            ["la familia", "la famille"],
            ["levantarse", "se lever"],
            ["desayunar", "prendre le petit-déjeuner"],
            ["ir al trabajo / a la escuela", "aller au travail / à l'école"],
            ["volver a casa", "rentrer à la maison"],
            ["acostarse", "se coucher"],
          ],
        },
        exemples: [
          "**Me levanto** a las siete, **desayuno** y **voy** a la escuela.",
          "**Vuelvo** a casa a las seis.",
        ],
      },
      {
        titre: "La fréquence (indispensable pour décrire une routine)",
        points: [
          "**todos los días** = tous les jours.",
          "**siempre** = toujours · **a menudo** = souvent.",
          "**a veces** = parfois · **nunca** = jamais.",
        ],
        exemples: [
          "**Todos los días** estudio una hora.",
          "**A veces** como en la escuela, pero **nunca** por la noche.",
        ],
      },
    ],
    attention: [
      "**el día** est masculin malgré son -a ; **la mano** est féminin malgré son -o.",
      "**los deberes** (devoirs) est toujours au pluriel.",
      "*el tiempo* = le temps (météo OU durée) : le contexte décide.",
    ],
  },

  // ================= FICHE 5 — EXPRESSIONS + CONNECTEURS =================
  {
    slug: "expressions-et-connecteurs",
    numero: 5,
    titre: "Expressions utiles + connecteurs logiques",
    intro:
      "Opinion, structure, explication : ces formules toutes faites transforment des phrases simples en discours de niveau B1. À réutiliser telles quelles.",
    retenir: [
      "Opinion : **En mi opinión…**, **Creo que…**",
      "Accord : **Estoy de acuerdo** / désaccord : **No estoy de acuerdo**.",
      "Structure : **primero → luego → finalmente**.",
      "**Creo que** + indicatif ; c'est **No creo que** qui appelle le subjonctif (à ne pas utiliser avant B2).",
    ],
    sections: [
      {
        titre: "Donner son opinion",
        points: [
          "**En mi opinión…** = à mon avis…",
          "**Creo que… / Pienso que…** = je crois / pense que…",
          "**Estoy de acuerdo (con…)** = je suis d'accord (avec…).",
          "**No estoy de acuerdo porque…** = je ne suis pas d'accord car…",
          "**Para mí…** = pour moi…",
        ],
        exemples: [
          "**En mi opinión**, aprender idiomas es esencial.",
          "**Creo que** la escuela es muy importante.",
          "**Estoy de acuerdo** con esta idea.",
        ],
      },
      {
        titre: "Structurer un discours",
        tableau: {
          entetes: ["Espagnol", "Français", "Exemple"],
          lignes: [
            ["primero", "d'abord", "**Primero**, presento la escuela."],
            ["luego / después", "ensuite", "**Luego**, describo una clase."],
            ["además", "de plus", "**Además**, los alumnos cantan."],
            ["finalmente", "finalement", "**Finalmente**, doy mi opinión."],
            ["en conclusión", "en conclusion", "**En conclusión**, es un buen método."],
          ],
        },
      },
      {
        titre: "Expliquer et illustrer",
        points: [
          "**porque** = parce que.",
          "**por ejemplo** = par exemple.",
          "**eso significa que…** = cela signifie que…",
          "**es decir** = c'est-à-dire.",
          "**por eso** = c'est pourquoi.",
        ],
        exemples: [
          "Me gusta el español **porque** es una lengua bonita.",
          "Hay muchas actividades, **por ejemplo** canciones y juegos.",
          "Llueve mucho ; **por eso** nos quedamos en casa.",
        ],
      },
      {
        titre: "Contraster (niveau B1)",
        points: [
          "**pero** = mais · **sin embargo** = cependant.",
          "**aunque** = bien que / même si.",
          "**por un lado… por otro lado…** = d'un côté… de l'autre…",
        ],
        exemples: [
          "Me gusta la ciudad ; **sin embargo**, prefiero el campo.",
          "**Aunque** es difícil, me encanta el español.",
        ],
      },
    ],
    attention: [
      "**porque** (parce que) ≠ **¿por qué?** (pourquoi) — la question s'écrit en 2 mots avec accent.",
      "Ne traduis pas « je suis d'accord » par ~~soy de acuerdo~~ : c'est **estoy** de acuerdo.",
      "**sin embargo** s'écrit en deux mots.",
    ],
  },

  // ================= FICHE 6 — OBJECTIF B1 =================
  {
    slug: "objectif-b1",
    numero: 6,
    titre: "Objectif B1 : récap + erreurs fréquentes + méthode",
    intro:
      "La synthèse finale : ce qu'un niveau B1 doit maîtriser au CRPE, les pièges des francophones, et un plan d'entraînement simple.",
    retenir: [
      "**Grammaire** : présent solide + les 2 passés + ser/estar.",
      "**Lexique** : école, quotidien, opinion, fréquence.",
      "**Expression** : phrases simples correctes, reliées par des connecteurs.",
      "Règle d'or : **pense en espagnol**, ne traduis pas mot à mot.",
    ],
    sections: [
      {
        titre: "Check-list grammaire B1",
        points: [
          "Conjuguer le **présent** des 3 modèles (-ar, -er, -ir) sans hésiter.",
          "Connaître les irréguliers clés : ser, estar, tener, hacer, ir, poder, querer.",
          "Choisir entre **ser et estar** dans les cas courants.",
          "Utiliser **indefinido** (ayer…) et **perfecto** (hoy…) à bon escient.",
          "Maîtriser **gustar** : *me gusta el español* (littéralement « l'espagnol me plaît »).",
        ],
        exemples: [
          "**Me gusta** la música. / **Me gustan** los idiomas. (accord avec la chose aimée !)",
          "**Fui** a España el año pasado y **he vuelto** este mes.",
        ],
      },
      {
        titre: "Les erreurs de francophones à bannir",
        tableau: {
          entetes: ["❌ Erreur (calque du français)", "✅ Correct", "Pourquoi"],
          lignes: [
            ["Soy cansado", "**Estoy** cansado", "État passager → estar"],
            ["Soy 25 años", "**Tengo** 25 años", "L'âge se dit avec tener"],
            ["Soy de acuerdo", "**Estoy** de acuerdo", "Expression figée avec estar"],
            ["hablo (hier)", "habl**ó** / habl**é**", "L'accent change le temps !"],
            ["Yo gusto el español", "**Me gusta** el español", "gustar = « plaire », construction inversée"],
            ["Je vais à + infinitif calqué", "**Voy a** + infinitif", "Futur proche : ir a + infinitif"],
          ],
        },
      },
      {
        titre: "Niveau attendu au CRPE",
        points: [
          "Écrire des **phrases simples et correctes** (S-V-C).",
          "Comprendre un **texte simple** (école, vie quotidienne).",
          "S'exprimer à l'oral de façon **structurée** (primero, luego, finalmente).",
          "Vocabulaire de base **maîtrisé** plutôt que vocabulaire rare mal utilisé.",
        ],
      },
      {
        titre: "Plan d'entraînement simple",
        points: [
          "Chaque jour : 10 minutes de vocabulaire (fiches 1 et 4).",
          "Chaque semaine : écrire 5 phrases avec ser/estar + 5 phrases au passé.",
          "Lire un texte court en espagnol et noter 5 mots nouveaux.",
          "Avant l'épreuve : relire le tableau des erreurs ci-dessus.",
        ],
      },
    ],
    attention: [
      "Les **accents ne sont pas décoratifs** : hablo ≠ habló, esta ≠ está, si ≠ sí.",
      "**gustar** s'accorde avec la chose aimée : me gusta**n** los libros.",
      "Ne calque jamais le français : cherche la tournure espagnole (tener años, estar de acuerdo…).",
    ],
  },
];
