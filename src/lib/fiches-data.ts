/**
 * Données des FICHES CLAIRES (Français)
 * -------------------------------------
 * 42 fiches de révision autonomes, réparties en 4 blocs.
 * Format de chaque fiche : Définition / Points clés / Exemple /
 * Pièges CRPE / À retenir.
 *
 * Pour AJOUTER une fiche : copie un bloc { ... } et modifie son contenu.
 * Le texte entre **doubles astérisques** s'affiche en gras.
 */

// Les 4 grands blocs de fiches.
export type FicheBloc = "grammaire" | "conjugaison" | "lexique" | "stylistique";

export interface Fiche {
  bloc: FicheBloc;
  titre: string;
  definition: string;
  points: string[];
  exemple: string[];
  pieges: string[];
  retenir: string;
}

// Libellés + couleur d'accent de chaque bloc (classes Tailwind figées).
export const FICHE_BLOCS: Record<
  FicheBloc,
  { label: string; pill: string; swatch: string }
> = {
  grammaire: {
    label: "Grammaire",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    swatch: "bg-sky-500",
  },
  conjugaison: {
    label: "Conjugaison",
    pill: "bg-teal-100 text-teal-700 border-teal-200",
    swatch: "bg-teal-500",
  },
  lexique: {
    label: "Lexique",
    pill: "bg-orange-100 text-orange-700 border-orange-200",
    swatch: "bg-orange-500",
  },
  stylistique: {
    label: "Stylistique",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    swatch: "bg-violet-500",
  },
};

export const FICHES: Fiche[] = [
  // ============================ GRAMMAIRE ============================
  {
    bloc: "grammaire",
    titre: "Les classes de mots",
    definition:
      "Les classes de mots (ou natures) regroupent les mots selon leur **identité grammaticale**, indépendamment de la phrase.",
    points: [
      "**Variables** : nom, déterminant, adjectif, verbe, pronom.",
      "**Invariables** : adverbe, préposition, conjonctions, interjection.",
      "La **nature** ne change jamais (≠ la fonction).",
    ],
    exemple: ["Le petit chat dort.", "le → déterminant", "petit → adjectif", "chat → nom", "dort → verbe"],
    pieges: [
      "Ne pas confondre **nature** (fixe) et **fonction** (variable).",
      "« le » peut être déterminant ou pronom : homonymie, pas changement de nature.",
    ],
    retenir: "La classe = la carte d'identité du mot : 5 variables, 5 invariables.",
  },
  {
    bloc: "grammaire",
    titre: "Les fonctions grammaticales",
    definition:
      "La fonction est le **rôle** qu'un mot ou groupe de mots joue dans la phrase.",
    points: [
      "Autour du verbe : sujet, COD, COI, complément circonstanciel, attribut.",
      "Autour du nom : épithète.",
      "Une même classe peut occuper des fonctions différentes.",
    ],
    exemple: ["Le chat mange la souris.", "le chat → sujet", "la souris → COD (mange quoi ?)"],
    pieges: [
      "**COD** direct (voir qqn) vs **COI** avec préposition (parler à qqn).",
      "L'**attribut** suit un verbe d'état (être, sembler, devenir).",
    ],
    retenir: "La fonction dépend de la phrase : un mot sujet ici peut être COD ailleurs.",
  },
  {
    bloc: "grammaire",
    titre: "Les propositions",
    definition:
      "Une proposition s'organise autour d'un **verbe conjugué**. Autant de verbes conjugués = autant de propositions.",
    points: [
      "**Indépendante** : se suffit à elle-même.",
      "**Principale** : commande une subordonnée.",
      "**Subordonnée** : dépend de la principale.",
    ],
    exemple: ["Je pense que tu as raison.", "Je pense → principale", "que tu as raison → subordonnée"],
    pieges: [
      "Compter les **verbes conjugués**, pas les infinitifs.",
      "Deux indépendantes : juxtaposées (,) ou coordonnées (et, mais…).",
    ],
    retenir: "1 verbe conjugué = 1 proposition. La subordonnée ne tient pas seule.",
  },
  {
    bloc: "grammaire",
    titre: "La subordination",
    definition:
      "La subordination relie une **subordonnée** à une **principale** dont elle dépend, via un subordonnant.",
    points: [
      "Subordonnants : que, quand, lorsque, parce que, si, comme, bien que.",
      "Elle précise la principale (temps, cause, condition…).",
      "Supprimée, la principale reste correcte.",
    ],
    exemple: ["Je pars quand tu arrives.", "Je pars → principale", "quand tu arrives → subordonnée de temps"],
    pieges: [
      "« que » conjonction (Je crois que…) ≠ « que » pronom relatif (le livre que je lis).",
      "Subordination (dépendance) ≠ coordination (égalité).",
    ],
    retenir: "Le subordonnant accroche la subordonnée à la principale.",
  },
  {
    bloc: "grammaire",
    titre: "Les types de phrases",
    definition:
      "Le type de phrase exprime l'**intention de communication**. Une phrase a un seul type.",
    points: [
      "**Déclarative** : informe.",
      "**Interrogative** : questionne.",
      "**Impérative** : ordonne, conseille.",
      "**Exclamative** : exprime une émotion.",
    ],
    exemple: [
      "Tu viens. → déclarative",
      "Viens-tu ? → interrogative",
      "Viens ! → impérative",
      "Comme tu es grand ! → exclamative",
    ],
    pieges: [
      "Analyser l'**intention**, pas seulement la ponctuation.",
      "Type (4, obligatoire) ≠ forme (qui s'ajoute).",
    ],
    retenir: "4 types = 4 intentions. Un seul type, mais plusieurs formes cumulables.",
  },
  {
    bloc: "grammaire",
    titre: "Les formes de phrases",
    definition:
      "La forme modifie le sens et **s'ajoute** au type. Une phrase combine plusieurs formes.",
    points: [
      "Affirmative / négative.",
      "Active / passive.",
      "Neutre / emphatique (mise en relief : C'est… que).",
    ],
    exemple: [
      "Le chat mange la souris. → active, affirmative, neutre",
      "La souris est mangée par le chat. → passive",
      "C'est le chat qui mange… → emphatique",
    ],
    pieges: [
      "Les formes se **cumulent** (négative + passive + emphatique).",
      "Forme négative ≠ type interrogatif.",
    ],
    retenir: "Le type dit l'intention ; les formes précisent la construction.",
  },
  {
    bloc: "grammaire",
    titre: "L'accord dans le groupe nominal",
    definition:
      "Dans le GN, déterminant et adjectif s'accordent en **genre** et en **nombre** avec le nom noyau.",
    points: [
      "Chaîne d'accord : déterminant + adjectif + nom.",
      "Le nom noyau commande tout le groupe.",
      "L'adjectif s'accorde même éloigné du nom.",
    ],
    exemple: ["un petit chat → des petits chats", "Les élèves, attentifs, écoutent."],
    pieges: [
      "L'adjectif détaché ou attribut s'accorde même à distance.",
      "Couleurs dérivées de noms : souvent invariables (des yeux marron).",
    ],
    retenir: "Tout le GN s'aligne sur le nom noyau, en genre et en nombre.",
  },
  {
    bloc: "grammaire",
    titre: "Voix active et voix passive",
    definition:
      "La voix indique si le sujet **fait** l'action (active) ou la **subit** (passive).",
    points: [
      "Active : le sujet est l'agent.",
      "Passive : le sujet subit ; agent introduit par « par ».",
      "Passif = être + participe passé, accordé avec le sujet.",
      "Seuls les verbes à COD se mettent au passif.",
    ],
    exemple: ["Le chien mord l'homme. → active", "L'homme est mordu par le chien. → passive"],
    pieges: [
      "Au passif, le COD de l'actif devient sujet.",
      "Passif (est mordu) ≠ verbe d'état + attribut (est fatigué).",
    ],
    retenir: "Active = le sujet agit ; passive = le sujet subit (être + participe passé + par).",
  },

  // =========================== CONJUGAISON ===========================
  {
    bloc: "conjugaison",
    titre: "Les valeurs des temps",
    definition:
      "La valeur d'un temps indique **comment et pourquoi** il est employé, au-delà de sa place chronologique.",
    points: [
      "Présent : actualité, vérité générale, habitude.",
      "Imparfait : description, habitude passée, arrière-plan.",
      "Passé simple : action ponctuelle achevée (récit).",
      "Passé composé : action passée reliée au présent.",
      "Conditionnel : hypothèse, politesse ; subjonctif : doute, souhait.",
    ],
    exemple: [
      "Il pleut. → présent d'actualité",
      "Il pleuvait. → imparfait descriptif",
      "Il pleut toujours en avril. → habitude",
    ],
    pieges: [
      "Un temps a **plusieurs valeurs** : justifier par le contexte.",
      "Imparfait / passé simple structurent le récit (décor vs événement).",
    ],
    retenir: "Le temps situe l'action ; la valeur explique l'intention.",
  },
  {
    bloc: "conjugaison",
    titre: "Le présent de l'indicatif",
    definition:
      "Le présent exprime une action qui se déroule **au moment où l'on parle**.",
    points: [
      "1er groupe : -e, -es, -e, -ons, -ez, -ent.",
      "2e groupe (finir) : -is, -is, -it, -issons, -issez, -issent.",
      "3e groupe : irrégulier.",
    ],
    exemple: ["je mange (1er)", "tu finis (2e)", "il prend (3e)"],
    pieges: [
      "Valeurs : actualité, habitude, vérité générale (L'eau bout à 100 °C).",
      "Verbes en -ger/-cer : nous mangeons, nous plaçons.",
    ],
    retenir: "Présent = maintenant, mais aussi habitude et vérité générale.",
  },
  {
    bloc: "conjugaison",
    titre: "L'imparfait de l'indicatif",
    definition:
      "L'imparfait exprime une action passée **non achevée**, descriptive ou habituelle.",
    points: [
      "Terminaisons pour tous : -ais, -ais, -ait, -ions, -iez, -aient.",
      "Radical = présent en « nous » (nous finiss-ons → je finiss-ais).",
      "Valeurs : description, habitude, arrière-plan.",
    ],
    exemple: ["je mangeais", "nous parlions", "Il faisait beau et les oiseaux chantaient."],
    pieges: [
      "Ne pas oublier le **i** : nous étudiions, vous criiez.",
      "Imparfait (durée) ≠ passé simple (événement bref).",
    ],
    retenir: "L'imparfait plante le décor : mêmes terminaisons partout (-ais…).",
  },
  {
    bloc: "conjugaison",
    titre: "Le passé composé",
    definition: "Action passée **terminée** ayant un lien avec le présent.",
    points: [
      "**avoir** ou **être** au présent + participe passé.",
      "Être : verbes de mouvement/état et pronominaux.",
      "Valeurs : action ponctuelle, résultat actuel.",
    ],
    exemple: ["j'ai mangé", "je suis allé(e)"],
    pieges: [
      "Accord : avec **être** → sujet ; avec **avoir** → COD placé avant.",
      "Sans COD antéposé (avoir) : participe invariable.",
    ],
    retenir: "avoir/être + participe passé. Accord selon l'auxiliaire.",
  },
  {
    bloc: "conjugaison",
    titre: "Le passé simple",
    definition: "Action **brève, unique et achevée** dans un récit.",
    points: [
      "Temps du **récit littéraire**, couplé à l'imparfait.",
      "Terminaisons selon le groupe : -a/-èrent, -it/-irent, -ut/-urent.",
      "Exprime l'événement de premier plan.",
    ],
    exemple: ["il mangea", "il partit", "Il faisait nuit quand il arriva."],
    pieges: [
      "Rare à l'oral, surtout dans les textes narratifs.",
      "il chanta (passé simple) ≠ il chantait (imparfait).",
    ],
    retenir: "Le passé simple = l'action qui surgit dans le récit.",
  },
  {
    bloc: "conjugaison",
    titre: "Le futur simple",
    definition: "Action qui **aura lieu plus tard**.",
    points: [
      "Terminaisons : -ai, -as, -a, -ons, -ez, -ont.",
      "Ajoutées le plus souvent à l'infinitif (manger → je mangerai).",
      "Valeurs : projet, prévision, certitude.",
    ],
    exemple: ["je mangerai", "nous finirons"],
    pieges: [
      "Garder le **-r-** : je mangerai (futur) ≠ je mangerais (conditionnel).",
      "Radicaux irréguliers : j'irai, je ferai, je verrai.",
    ],
    retenir: "Futur = -r- + terminaisons de « avoir » (-ai, -as, -a…).",
  },
  {
    bloc: "conjugaison",
    titre: "Le futur antérieur",
    definition: "Action future **accomplie avant** une autre action future.",
    points: [
      "Auxiliaire au **futur** + participe passé.",
      "Marque l'antériorité entre deux faits à venir.",
      "Peut exprimer une supposition (il aura oublié).",
    ],
    exemple: ["J'aurai fini quand tu arriveras.", "Nous serons partis avant midi."],
    pieges: [
      "Mêmes règles d'accord que le passé composé.",
      "Le futur antérieur se produit **avant** le futur simple.",
    ],
    retenir: "Auxiliaire au futur + participe passé = fini avant une autre action future.",
  },
  {
    bloc: "conjugaison",
    titre: "Le conditionnel présent",
    definition:
      "Exprime une **hypothèse**, une action sous condition ou une demande **polie**.",
    points: [
      "Radical du **futur** + terminaisons de l'**imparfait**.",
      "Valeurs : hypothèse, politesse, incertitude.",
      "Principale d'un système : Si + imparfait, … conditionnel.",
    ],
    exemple: ["je mangerais", "Je voudrais un café. (politesse)", "Si j'avais le temps, je viendrais."],
    pieges: [
      "je mangerais (hypothèse) ≠ je mangerai (certitude).",
      "Après « si » de condition : jamais de conditionnel (Si j'avais).",
    ],
    retenir: "Conditionnel = radical du futur + terminaisons de l'imparfait.",
  },
  {
    bloc: "conjugaison",
    titre: "Le conditionnel passé",
    definition: "Action **non réalisée** dans le passé : hypothèse passée ou regret.",
    points: [
      "Auxiliaire au **conditionnel présent** + participe passé.",
      "Valeurs : regret, reproche, hypothèse passée.",
      "Système : Si + plus-que-parfait, … conditionnel passé.",
    ],
    exemple: ["j'aurais mangé", "Si tu m'avais prévenu, je serais venu."],
    pieges: [
      "Mêmes règles d'accord que les temps composés.",
      "Exprime souvent le **regret** (j'aurais dû…).",
    ],
    retenir: "Auxiliaire au conditionnel + participe passé = ce qui aurait pu être.",
  },
  {
    bloc: "conjugaison",
    titre: "Le subjonctif présent",
    definition: "Action **envisagée** : incertaine, souhaitée, nécessaire.",
    points: [
      "Introduit par « que » (il faut que, vouloir que, bien que).",
      "Terminaisons : -e, -es, -e, -ions, -iez, -ent.",
      "Valeurs : obligation, doute, souhait, but.",
    ],
    exemple: ["Il faut que je vienne.", "Il faut qu'il fasse ses devoirs."],
    pieges: [
      "Volonté/doute/sentiment → subjonctif ; certitude → indicatif (Je pense qu'il vient).",
      "Irréguliers : aille, fasse, soit, ait, puisse.",
    ],
    retenir: "Le subjonctif = le monde du possible et du voulu, après « que ».",
  },
  {
    bloc: "conjugaison",
    titre: "Le subjonctif passé",
    definition: "Action **incertaine ou souhaitée déjà accomplie**.",
    points: [
      "Auxiliaire au **subjonctif présent** + participe passé.",
      "Marque l'antériorité sur le verbe principal.",
      "Mêmes déclencheurs que le subjonctif présent.",
    ],
    exemple: ["Je doute qu'il soit venu.", "Bien qu'il ait fini, il continue."],
    pieges: [
      "Action **antérieure** à celle de la principale.",
      "Accord du participe comme aux temps composés.",
    ],
    retenir: "Subjonctif de avoir/être + participe passé = envisagé mais déjà fait.",
  },
  {
    bloc: "conjugaison",
    titre: "L'impératif présent",
    definition: "Exprime un **ordre, un conseil ou une interdiction**.",
    points: [
      "3 personnes seulement ; **pas de sujet**.",
      "1er groupe : pas de -s à la 2e sing. (mange).",
      "Sauf devant en/y : manges-en.",
    ],
    exemple: ["Viens !", "Finissons !", "Écoutez bien."],
    pieges: [
      "Pas de -s : mange, va, ouvre (mais finis, prends).",
      "Pronoms après le verbe : Donne-le-moi.",
    ],
    retenir: "Ordre sans sujet, 3 personnes. Pas de -s aux verbes en -er.",
  },
  {
    bloc: "conjugaison",
    titre: "L'impératif passé",
    definition: "Ordre à avoir **accompli avant** un moment donné (forme rare).",
    points: [
      "Auxiliaire **avoir/être** à l'impératif + participe passé.",
      "Action à terminer avant une échéance.",
      "Sans sujet, 3 personnes.",
    ],
    exemple: ["Sois parti avant 8 h.", "Ayez fini pour demain."],
    pieges: [
      "Ne pas confondre avec le passé composé.",
      "Accord du participe avec « être ».",
    ],
    retenir: "avoir/être à l'impératif + participe passé = accompli avant une échéance.",
  },
  {
    bloc: "conjugaison",
    titre: "L'infinitif",
    definition: "Forme **non conjuguée** du verbe ; c'est la forme du dictionnaire.",
    points: [
      "Classe les groupes (-er, -ir, -re/-oir).",
      "Présent (manger) ou passé (avoir mangé).",
      "Fonctionne comme un nom (sujet, COD…).",
    ],
    exemple: ["manger, finir, prendre", "J'aime lire. (infinitif COD)"],
    pieges: [
      "-er (infinitif) vs -é (participe) : test « prendre/pris » (Il va manger → il va prendre ✔).",
      "Après une préposition : infinitif (avant de partir).",
    ],
    retenir: "Forme de base invariable. Astuce prendre/pris pour -er / -é.",
  },
  {
    bloc: "conjugaison",
    titre: "Le participe présent",
    definition:
      "Forme verbale **invariable** en -ant, action simultanée au verbe principal.",
    points: [
      "Terminaison : -ant.",
      "Précédé de « en » = gérondif (en mangeant).",
      "À distinguer de l'adjectif verbal (variable).",
    ],
    exemple: ["Les enfants courant dans la cour rient. (invariable)", "Une eau courante. (adjectif verbal)"],
    pieges: [
      "Participe présent **invariable** ; adjectif verbal **s'accorde**.",
      "Orthographe : fatigant (adj.) / fatiguant (part.).",
    ],
    retenir: "-ant invariable comme verbe ; avec « en » = gérondif.",
  },
  {
    bloc: "conjugaison",
    titre: "Le participe passé",
    definition:
      "Forme utilisée dans les **temps composés** et la **voix passive** ; il peut s'accorder.",
    points: [
      "Formes : -é, -i, ou irrégulières (pris, fait, mis).",
      "Employé avec être, avoir, ou seul (adjectif).",
      "L'accord dépend de l'auxiliaire.",
    ],
    exemple: ["mangé, fini, pris", "Les fleurs coupées. (accordé)"],
    pieges: [
      "Accord : être → sujet ; avoir → COD antéposé ; seul → comme un adjectif.",
      "-é (participe) vs -er (infinitif) : test pris/prendre.",
    ],
    retenir: "Brique des temps composés. Accord = repérer l'auxiliaire.",
  },

  // ============================= LEXIQUE =============================
  {
    bloc: "lexique",
    titre: "Les préfixes",
    definition:
      "Élément placé **au début** d'un mot pour en modifier le sens, sans changer sa classe.",
    points: [
      "Négation : in-, im-, il-, ir-, dé-, a- (possible → impossible).",
      "Répétition : re- (faire → refaire).",
      "Intensité/position : anti-, hyper-, sur-, pré-, trans-.",
    ],
    exemple: ["légal → illégal", "charger → décharger", "actif → hyperactif"],
    pieges: [
      "Le préfixe **ne change pas la classe** (faire/refaire restent des verbes).",
      "in- s'adapte : im-, il-, ir- selon la consonne.",
    ],
    retenir: "Préfixe = devant le radical, modifie le sens, pas la nature.",
  },
  {
    bloc: "lexique",
    titre: "Les suffixes",
    definition:
      "Élément placé **à la fin** d'un mot ; modifie le sens et souvent la **classe**.",
    points: [
      "Action : -tion, -sion, -ment, -age.",
      "Manière (adverbe) : -ment.",
      "Possibilité (adjectif) : -able, -ible.",
      "Agent : -eur, -euse, -iste.",
    ],
    exemple: ["rapide → rapidement (adj. → adverbe)", "lire → lecture (verbe → nom)"],
    pieges: [
      "Le suffixe **change souvent la classe** (contrairement au préfixe).",
      "Un radical reçoit plusieurs suffixes (terre → terrestre, terrien).",
    ],
    retenir: "Suffixe = après le radical ; modifie le sens ET souvent la nature.",
  },
  {
    bloc: "lexique",
    titre: "Les racines grecques et latines",
    definition:
      "Éléments anciens, grecs ou latins, qui servent à construire de nombreux mots.",
    points: [
      "Latin : aqua (eau), scribere (écrire), portare (porter).",
      "Grec : bio (vie), phon (son), graph (écrire).",
      "Se combinent avec préfixes et suffixes.",
    ],
    exemple: ["bio + graph + ie → biographie", "aqua + duc → aqueduc"],
    pieges: [
      "Les racines aident à **deviner le sens** d'un mot inconnu.",
      "Mots hybrides : télé (grec) + vision (latin).",
    ],
    retenir: "Décomposer en racines = une clé du vocabulaire savant.",
  },
  {
    bloc: "lexique",
    titre: "La formation des mots",
    definition: "Les **procédés** de création de mots à partir d'éléments existants.",
    points: [
      "**Dérivation** : préfixe + radical + suffixe.",
      "**Composition** : plusieurs mots (porte + feuille).",
      "**Conversion** : changement de classe sans changer la forme.",
    ],
    exemple: ["manger → mangeable (dérivation)", "chemin de fer (composition)", "le rire (conversion)"],
    pieges: [
      "Famille de mots (même radical) ≠ champ lexical (même thème).",
      "Composition : soudée, avec trait d'union ou séparée.",
    ],
    retenir: "3 procédés : dérivation, composition, conversion.",
  },
  {
    bloc: "lexique",
    titre: "Le champ lexical",
    definition: "Ensemble des mots se rapportant à un **même thème** dans un texte.",
    points: [
      "Mots de **classes différentes** (noms, verbes, adjectifs).",
      "Révèle le thème et l'atmosphère.",
      "Outil clé de l'analyse de texte.",
    ],
    exemple: ["Mer : vague, océan, plage, sable, marin, écume."],
    pieges: [
      "Champ lexical (thème) ≠ famille de mots (radical).",
      "Aide à identifier l'**intention** de l'auteur.",
    ],
    retenir: "Champ lexical = des mots variés autour d'un même thème.",
  },
  {
    bloc: "lexique",
    titre: "Le champ sémantique",
    definition: "Les **différents sens** d'un **seul mot** selon les contextes.",
    points: [
      "Concerne un mot **polysémique**.",
      "Le contexte sélectionne le sens.",
      "À distinguer du champ lexical.",
    ],
    exemple: ["feuille d'arbre", "feuille de papier", "feuille de route"],
    pieges: [
      "Champ sémantique = 1 mot / plusieurs sens.",
      "Champ lexical = plusieurs mots / 1 thème.",
    ],
    retenir: "Champ sémantique = les multiples sens d'un seul mot (polysémie).",
  },
  {
    bloc: "lexique",
    titre: "Les synonymes",
    definition: "Mots de **sens proche**, de même classe grammaticale.",
    points: [
      "Évitent les répétitions, nuancent.",
      "L'intensité/le registre varie (content < heureux < ravi).",
      "Jamais parfaitement interchangeables.",
    ],
    exemple: ["beau → joli", "rapide → vif, prompt"],
    pieges: [
      "Registres différents : maison / demeure / baraque.",
      "Le bon synonyme dépend du **contexte**.",
    ],
    retenir: "Sens proche, jamais identique : le contexte départage.",
  },
  {
    bloc: "lexique",
    titre: "Les antonymes",
    definition: "Mots de **sens opposé**, de même classe grammaticale.",
    points: [
      "Mot différent (grand/petit) ou préfixe (possible/impossible).",
      "Servent à construire des oppositions.",
      "Dépendent parfois du contexte.",
    ],
    exemple: ["grand / petit", "chaud / froid", "heureux / malheureux"],
    pieges: [
      "Un mot polysémique a plusieurs antonymes (léger ≠ lourd ou sérieux).",
      "Antonyme lexical (jour/nuit) vs par préfixe (faire/défaire).",
    ],
    retenir: "Sens opposés, même classe. Le contraire peut dépendre du sens.",
  },
  {
    bloc: "lexique",
    titre: "Les homonymes",
    definition:
      "Mots qui se **prononcent** et/ou s'**écrivent** pareil, mais de sens différents.",
    points: [
      "Homophones : même son (mer/mère/maire).",
      "Homographes : même orthographe, sens différent.",
      "Le contexte lève l'ambiguïté.",
    ],
    exemple: ["mer / mère / maire", "ver / vers / verre / vert"],
    pieges: [
      "Cœur de l'orthographe : a/à, et/est, son/sont, ces/ses, ou/où.",
      "S'appuyer sur le sens et la classe.",
    ],
    retenir: "Même son (ou graphie), sens différents : le contexte tranche.",
  },
  {
    bloc: "lexique",
    titre: "Les paronymes",
    definition: "Mots qui se **ressemblent** par la forme, mais de sens différents.",
    points: [
      "Différence d'une ou deux lettres.",
      "Source d'erreurs fréquentes.",
      "Testés dans les questions pièges.",
    ],
    exemple: ["collision / collusion", "conjecture / conjoncture", "éminent / imminent"],
    pieges: [
      "Bien vérifier le **sens** de chacun.",
      "Très fréquents à l'oral du CRPE.",
    ],
    retenir: "Formes voisines, sens éloignés (collision ≠ collusion).",
  },
  {
    bloc: "lexique",
    titre: "Les figures de style (introduction)",
    definition: "Procédés d'expression qui rendent un texte plus imagé et expressif.",
    points: [
      "Comparaison : outil (comme, tel que).",
      "Métaphore : comparaison **sans** outil.",
      "Personnification : traits humains.",
      "Hyperbole : exagération ; anaphore : répétition en tête.",
    ],
    exemple: [
      "Il est fort comme un lion. (comparaison)",
      "Cette montagne est un géant. (métaphore)",
      "Le vent hurlait. (personnification)",
    ],
    pieges: [
      "Comparaison vs métaphore : présence de l'**outil**.",
      "Au CRPE : identifier **et** expliquer l'effet.",
    ],
    retenir: "Outil « comme » = comparaison ; sans outil = métaphore.",
  },

  // =========================== STYLISTIQUE ===========================
  {
    bloc: "stylistique",
    titre: "Les registres de langue",
    definition: "Manière de s'exprimer adaptée à la **situation de communication**.",
    points: [
      "**Familier** : oral, entre proches, relâché.",
      "**Courant** : neutre, quotidien, correct.",
      "**Soutenu** : écrit/formel, recherché.",
    ],
    exemple: ["J'suis crevé. (familier)", "Je suis fatigué. (courant)", "Je suis extrêmement las. (soutenu)"],
    pieges: [
      "Identifier via le **contexte** (qui, à qui, où).",
      "Marques **lexicales** et **syntaxiques**.",
    ],
    retenir: "3 registres : familier, courant, soutenu. Le contexte guide.",
  },
  {
    bloc: "stylistique",
    titre: "Les types de discours",
    definition: "Façon dont un texte **rapporte les paroles ou les pensées**.",
    points: [
      "**Direct** : paroles citées (guillemets, verbe introducteur).",
      "**Indirect** : intégrées en subordonnée « que ».",
      "**Indirect libre** : sans introducteur, fondu dans le récit.",
    ],
    exemple: [
      "Il dit : « Je viens demain. » (direct)",
      "Il dit qu'il viendra demain. (indirect)",
      "Il viendrait demain. C'était décidé. (indirect libre)",
    ],
    pieges: [
      "Direct → indirect : changements de temps, pronoms, marqueurs (demain → le lendemain).",
      "L'indirect libre est fréquent chez les romanciers.",
    ],
    retenir: "Direct = citation ; indirect = « que » ; indirect libre = fondu dans le récit.",
  },
  {
    bloc: "stylistique",
    titre: "Les figures de style (approfondissement)",
    definition: "Procédés d'écriture créant images, oppositions et effets sonores.",
    points: [
      "Comparaison / métaphore / personnification.",
      "Hyperbole (exagération) / anaphore (répétition en tête).",
      "**Antithèse** : deux termes opposés.",
    ],
    exemple: [
      "Je vis, je meurs. (antithèse)",
      "Je meurs de faim. (hyperbole)",
      "Toujours debout, toujours prêt. (anaphore)",
    ],
    pieges: [
      "Antithèse (mots opposés) ≠ oxymore (contraires dans le même groupe : une obscure clarté).",
      "Identifier **puis** expliquer l'effet.",
    ],
    retenir: "Au CRPE, identifier ne suffit pas : justifier l'effet.",
  },
  {
    bloc: "stylistique",
    titre: "La tonalité d'un texte",
    definition: "L'**émotion** ou l'impression que le texte cherche à produire.",
    points: [
      "Comique / ironique (se moque).",
      "Tragique (fatalité) / pathétique (émeut).",
      "Lyrique (émotions perso) / épique (grandeur).",
    ],
    exemple: ["Il pleut encore… quelle surprise ! (ironique)", "Ô temps, suspends ton vol ! (lyrique)"],
    pieges: [
      "Tonalité (effet) ≠ type de texte (narratif…).",
      "L'ironie = décalage entre le dit et le pensé.",
    ],
    retenir: "La tonalité = l'émotion visée ; plusieurs peuvent se mêler.",
  },
  {
    bloc: "stylistique",
    titre: "L'analyse de texte (méthode CRPE)",
    definition:
      "Démarche organisée pour **comprendre et interpréter** un texte à partir d'indices.",
    points: [
      "1. Lire le texte en entier.",
      "2. Identifier le type de texte.",
      "3. Repérer registre et tonalité.",
      "4. Relever figures de style et temps verbaux.",
      "5. Dégager l'intention de l'auteur.",
    ],
    exemple: [
      "Roman : narratif + imparfait/passé simple + champ lexical de la peur → atmosphère angoissante.",
    ],
    pieges: [
      "Toujours **justifier avec des citations**.",
      "Ne pas paraphraser : interpréter.",
    ],
    retenir: "Une analyse = des observations justifiées par le texte.",
  },
  {
    bloc: "stylistique",
    titre: "Les types de textes",
    definition:
      "La **visée dominante** d'un texte : raconter, décrire, convaincre ou expliquer.",
    points: [
      "**Narratif** : raconte.",
      "**Descriptif** : décrit.",
      "**Argumentatif** : défend une opinion.",
      "**Explicatif** : fait comprendre.",
    ],
    exemple: ["Roman → narratif", "Article scientifique → explicatif", "Discours → argumentatif"],
    pieges: [
      "Textes mixtes : identifier la visée **dominante**.",
      "Type de texte (visée) ≠ genre (roman, poème…).",
    ],
    retenir: "4 visées : narrer, décrire, argumenter, expliquer.",
  },
  {
    bloc: "stylistique",
    titre: "Lecture et compréhension (implicite)",
    definition: "Comprendre l'**explicite** (écrit) et l'**implicite** (suggéré).",
    points: [
      "Repérer l'explicite (donné directement).",
      "Déduire l'implicite (sous-entendus).",
      "Interpréter les intentions.",
    ],
    exemple: ["Il a fermé la porte sans un mot.", "→ Implicite : colère ou tristesse."],
    pieges: [
      "L'implicite se **déduit d'indices**, ne s'invente pas.",
      "Présupposé (admis) vs sous-entendu (à interpréter).",
    ],
    retenir: "Bien lire = comprendre l'explicite ET déduire l'implicite.",
  },
];
