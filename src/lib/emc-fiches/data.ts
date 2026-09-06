/**
 * Fiches d'EMC — Enseignement moral et civique (12 fiches, CRPE)
 * --------------------------------------------------------------
 * Thèmes : Valeurs & symboles de la République · Laïcité, droits & libertés
 * · Citoyenneté & institutions · Vivre ensemble à l'école.
 * Faits institutionnels, dates et textes vérifiés.
 */
import type { EmcFiche } from "./types";

export const EMC_FICHES: EmcFiche[] = [
  // ======= THÈME 1 — VALEURS & SYMBOLES DE LA RÉPUBLIQUE =======
  {
    slug: "les-valeurs-et-principes-de-la-republique",
    theme: "valeurs-republique",
    numero: 1,
    titre: "Les valeurs et principes de la République",
    intro:
      "La République française repose sur des valeurs et des principes communs, inscrits dans la Constitution.",
    definition:
      "La **République** française repose sur des **valeurs** et des **principes** partagés par tous les citoyens et inscrits dans la **Constitution**.",
    sections: [
      {
        titre: "La devise et les valeurs",
        groupes: [
          {
            points: [
              "**Liberté, Égalité, Fraternité** : la devise de la République.",
              "**Liberté** : agir dans le respect des lois et des autres.",
              "**Égalité** : les mêmes droits pour tous, sans distinction.",
              "**Fraternité** : solidarité et respect entre les citoyens.",
            ],
          },
        ],
      },
      {
        titre: "Les principes de la République",
        groupes: [
          {
            points: [
              "D'après la Constitution (article 1), la France est une République **indivisible, laïque, démocratique et sociale**.",
              "Elle assure l'**égalité devant la loi** de tous les citoyens.",
              "La **laïcité** garantit la liberté de conscience.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "La devise figure sur les mairies et les écoles.",
      "Filles et garçons ont les mêmes droits à l'école.",
      "La loi est la même pour tous les citoyens.",
    ],
    vocabulaire: [
      { terme: "République", sens: "régime où le pouvoir vient du peuple, non d'un roi." },
      { terme: "Devise", sens: "formule qui résume les valeurs (Liberté, Égalité, Fraternité)." },
      { terme: "Constitution", sens: "texte qui organise l'État et garantit les droits." },
      { terme: "Valeur", sens: "principe partagé auquel on croit." },
    ],
    retenir: [
      "Devise : Liberté, Égalité, Fraternité.",
      "La République est indivisible, laïque, démocratique et sociale.",
      "Mêmes droits pour tous (égalité devant la loi).",
      "Ces valeurs sont inscrites dans la Constitution.",
    ],
  },
  {
    slug: "les-symboles-de-la-republique",
    theme: "valeurs-republique",
    numero: 2,
    titre: "Les symboles de la République",
    intro:
      "La République se reconnaît à des symboles qui rappellent son histoire et ses valeurs.",
    definition:
      "La République est représentée par des **symboles** qui rappellent son histoire et ses valeurs.",
    sections: [
      {
        titre: "Les grands symboles",
        groupes: [
          {
            titre: "À connaître absolument",
            points: [
              "Le **drapeau tricolore** : bleu, blanc, rouge.",
              "**Marianne** : figure qui incarne la République.",
              "**La Marseillaise** : l'hymne national.",
              "La **devise** : Liberté, Égalité, Fraternité.",
              "Le **14 juillet** : la fête nationale.",
            ],
          },
        ],
      },
      {
        titre: "D'autres symboles",
        groupes: [
          {
            points: [
              "Le **coq** gaulois.",
              "Le **faisceau de licteur**.",
              "Le **buste de Marianne**, présent dans les mairies.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Le drapeau flotte sur les bâtiments publics et les écoles.",
      "On chante La Marseillaise lors des cérémonies.",
      "Le 14 juillet rappelle la prise de la Bastille (1789).",
    ],
    vocabulaire: [
      { terme: "Symbole", sens: "objet ou image qui représente une idée." },
      { terme: "Marianne", sens: "figure féminine symbolisant la République." },
      { terme: "Hymne", sens: "chant officiel d'un pays." },
      { terme: "Fête nationale", sens: "le 14 juillet en France." },
    ],
    retenir: [
      "Drapeau tricolore : bleu, blanc, rouge.",
      "Marianne incarne la République ; La Marseillaise est l'hymne.",
      "Devise : Liberté, Égalité, Fraternité.",
      "Fête nationale : le 14 juillet.",
    ],
  },

  // ======= THÈME 2 — LAÏCITÉ, DROITS & LIBERTÉS =======
  {
    slug: "la-laicite",
    theme: "laicite-libertes",
    numero: 3,
    titre: "La laïcité",
    intro:
      "La laïcité garantit à chacun la liberté de croire ou de ne pas croire, dans le respect de tous.",
    definition:
      "La **laïcité** est un principe qui **sépare les religions et l'État** et garantit la **liberté de conscience** : croire, ne pas croire ou changer de croyance.",
    sections: [
      {
        titre: "Ce que garantit la laïcité",
        groupes: [
          {
            points: [
              "La **liberté de conscience** (croire ou non).",
              "L'**égalité** de tous, quelles que soient les convictions.",
              "La **neutralité** de l'État et des services publics.",
            ],
          },
        ],
      },
      {
        titre: "La laïcité à l'école",
        groupes: [
          {
            points: [
              "L'école publique est **laïque** et **neutre**.",
              "Loi de **1905** : séparation des Églises et de l'État.",
              "Loi de **2004** : interdiction des **signes religieux ostensibles** à l'école publique.",
              "La **Charte de la laïcité à l'école** (2013) est affichée dans les établissements.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Les enseignants n'affichent pas leurs convictions religieuses.",
      "L'école respecte toutes les croyances sans en imposer aucune.",
      "La Charte de la laïcité rappelle les règles à tous.",
    ],
    vocabulaire: [
      { terme: "Laïcité", sens: "séparation des religions et de l'État." },
      { terme: "Liberté de conscience", sens: "liberté de croire ou de ne pas croire." },
      { terme: "Neutralité", sens: "ne favoriser aucune religion ni opinion." },
      { terme: "Ostensible", sens: "que l'on montre de façon visible." },
    ],
    retenir: [
      "Laïcité = séparation des religions et de l'État.",
      "Elle garantit la liberté de conscience et l'égalité.",
      "Loi de 1905 (séparation) ; loi de 2004 (école).",
      "Charte de la laïcité affichée dans les écoles (2013).",
    ],
  },
  {
    slug: "les-droits-de-l-enfant",
    theme: "laicite-libertes",
    numero: 4,
    titre: "Les droits de l'enfant",
    intro:
      "Les enfants ont des droits spécifiques, reconnus par une convention internationale.",
    definition:
      "Les enfants ont des **droits spécifiques**, reconnus par une convention internationale, pour être **protégés** et grandir dignement.",
    sections: [
      {
        titre: "La Convention des droits de l'enfant",
        groupes: [
          {
            points: [
              "Adoptée par l'**ONU en 1989** (CIDE).",
              "**Ratifiée par la France en 1990**.",
              "Elle concerne tous les enfants de moins de 18 ans.",
            ],
          },
        ],
      },
      {
        titre: "Quels droits ?",
        groupes: [
          {
            points: [
              "Droit à la **protection** (contre la violence, l'exploitation).",
              "Droit à l'**éducation** et à la **santé**.",
              "Droit à un **nom**, une **famille**, une **identité**.",
              "Droit d'**exprimer son opinion** et de jouer.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "L'instruction est un droit : elle est obligatoire de 3 à 16 ans en France.",
      "Chaque enfant a droit à un nom et à des soins.",
      "Le 20 novembre est la journée internationale des droits de l'enfant.",
    ],
    vocabulaire: [
      { terme: "CIDE", sens: "Convention internationale des droits de l'enfant (1989)." },
      { terme: "Droit", sens: "ce que la loi garantit à une personne." },
      { terme: "Protection", sens: "mise à l'abri du danger." },
      { terme: "Ratifier", sens: "approuver officiellement un traité." },
    ],
    retenir: [
      "Les enfants ont des droits spécifiques (CIDE, 1989).",
      "France : convention ratifiée en 1990.",
      "Droits : protection, éducation, santé, identité, opinion.",
      "Journée des droits de l'enfant : 20 novembre.",
    ],
  },
  {
    slug: "les-libertes-et-droits-fondamentaux",
    theme: "laicite-libertes",
    numero: 5,
    titre: "Les libertés et droits fondamentaux",
    intro:
      "Chaque personne possède des droits essentiels, garantis par des textes fondateurs.",
    definition:
      "Les **libertés fondamentales** sont les droits essentiels de chaque personne, garantis par des textes comme la **Déclaration des droits de l'homme et du citoyen (1789)**.",
    sections: [
      {
        titre: "Des textes fondateurs",
        groupes: [
          {
            points: [
              "La **DDHC de 1789** : liberté, égalité, sûreté.",
              "La **Déclaration universelle des droits de l'homme (1948)**, à l'échelle mondiale.",
              "Ces droits sont **universels** : pour tous les êtres humains.",
            ],
          },
        ],
      },
      {
        titre: "Quelques libertés",
        groupes: [
          {
            points: [
              "Liberté d'**expression** et d'**opinion**.",
              "Liberté de **conscience** et de **religion**.",
              "Liberté de **circulation**, de **réunion**, de la **presse**.",
              "Elles s'exercent dans le **respect de la loi et des autres**.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "On peut exprimer son opinion, sans insulter ni inciter à la haine.",
      "La presse est libre d'informer.",
      "La liberté des uns s'arrête où commence celle des autres.",
    ],
    vocabulaire: [
      { terme: "Liberté fondamentale", sens: "droit essentiel de chaque personne." },
      { terme: "DDHC", sens: "Déclaration des droits de l'homme et du citoyen (1789)." },
      { terme: "Universel", sens: "valable pour tous les êtres humains." },
      { terme: "Droit d'expression", sens: "liberté de dire ce que l'on pense." },
    ],
    retenir: [
      "Libertés fondamentales garanties depuis la DDHC (1789).",
      "Déclaration universelle des droits de l'homme (1948).",
      "Expression, conscience, réunion, presse…",
      "Elles s'exercent dans le respect de la loi et d'autrui.",
    ],
  },

  // ======= THÈME 3 — CITOYENNETÉ & INSTITUTIONS =======
  {
    slug: "la-democratie-et-le-vote",
    theme: "citoyennete",
    numero: 6,
    titre: "La démocratie et le vote",
    intro:
      "En démocratie, c'est le peuple qui détient le pouvoir et qui l'exerce en votant.",
    definition:
      "En **démocratie**, le pouvoir appartient au **peuple**, qui l'exerce en **votant** pour choisir ses représentants.",
    sections: [
      {
        titre: "Voter, un droit et un acte citoyen",
        groupes: [
          {
            points: [
              "Le vote est **universel** (tous les citoyens majeurs), **secret** et **égal** (une voix par personne).",
              "On vote à partir de **18 ans**.",
              "Voter est un **droit** et un **acte citoyen**.",
            ],
          },
        ],
      },
      {
        titre: "Élire des représentants",
        groupes: [
          {
            points: [
              "Élections **présidentielle**, **législatives**, **municipales**…",
              "Les élus **représentent** les citoyens et décident en leur nom.",
              "La démocratie suppose le **respect du résultat** et du débat.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "À 18 ans, on peut voter après s'être inscrit sur les listes électorales.",
      "Le président de la République est élu au suffrage universel direct.",
      "À l'école, élire des délégués prépare à l'exercice du vote.",
    ],
    vocabulaire: [
      { terme: "Démocratie", sens: "régime où le pouvoir vient du peuple." },
      { terme: "Suffrage universel", sens: "droit de vote pour tous les citoyens majeurs." },
      { terme: "Scrutin", sens: "opération de vote." },
      { terme: "Citoyen", sens: "personne ayant des droits et des devoirs dans la cité." },
    ],
    retenir: [
      "Démocratie = le pouvoir au peuple.",
      "Le vote est universel, secret et égal.",
      "On vote à 18 ans.",
      "Voter, c'est choisir ses représentants.",
    ],
  },
  {
    slug: "les-institutions-de-la-cinquieme-republique",
    theme: "citoyennete",
    numero: 7,
    titre: "Les institutions de la Ve République",
    intro:
      "Depuis 1958, la Ve République organise les pouvoirs de l'État français.",
    definition:
      "La **Ve République** (depuis **1958**) organise les **pouvoirs** de l'État français autour du président, du gouvernement et du Parlement.",
    sections: [
      {
        titre: "Qui détient le pouvoir ?",
        groupes: [
          {
            titre: "Le pouvoir exécutif",
            points: [
              "Le **président de la République**, élu pour **5 ans** au suffrage universel direct.",
              "Le **gouvernement**, dirigé par le **Premier ministre**, met en œuvre la politique.",
            ],
          },
          {
            titre: "Le pouvoir législatif",
            points: [
              "Le **Parlement** vote les lois.",
              "Il comprend l'**Assemblée nationale** (députés) et le **Sénat** (sénateurs).",
            ],
          },
        ],
      },
      {
        titre: "La séparation des pouvoirs",
        groupes: [
          {
            points: [
              "**Exécutif** (appliquer), **législatif** (voter les lois), **judiciaire** (juger).",
              "Cette séparation évite la concentration du pouvoir.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Le président est élu tous les 5 ans (quinquennat).",
      "Les députés sont élus lors des élections législatives.",
      "Les lois sont votées au Parlement puis appliquées par le gouvernement.",
    ],
    vocabulaire: [
      { terme: "Exécutif", sens: "pouvoir qui applique les lois (président, gouvernement)." },
      { terme: "Législatif", sens: "pouvoir qui vote les lois (Parlement)." },
      { terme: "Judiciaire", sens: "pouvoir qui juge (les tribunaux)." },
      { terme: "Quinquennat", sens: "mandat présidentiel de 5 ans." },
    ],
    retenir: [
      "Ve République depuis 1958.",
      "Président élu pour 5 ans (suffrage universel direct).",
      "Parlement (Assemblée nationale + Sénat) vote les lois.",
      "Séparation des pouvoirs : exécutif, législatif, judiciaire.",
    ],
  },
  {
    slug: "les-droits-et-les-devoirs-du-citoyen",
    theme: "citoyennete",
    numero: 8,
    titre: "Les droits et les devoirs du citoyen",
    intro:
      "Être citoyen, ce n'est pas seulement avoir des droits : c'est aussi assumer des devoirs.",
    definition:
      "Être **citoyen**, c'est avoir des **droits** mais aussi des **devoirs** envers la société.",
    sections: [
      {
        titre: "Des droits",
        groupes: [
          {
            points: [
              "Droits **civils** (liberté, sûreté, propriété).",
              "Droits **politiques** (voter, être élu).",
              "Droits **sociaux** (éducation, santé, protection).",
            ],
          },
        ],
      },
      {
        titre: "Des devoirs",
        groupes: [
          {
            points: [
              "**Respecter la loi** et les autres.",
              "**Voter** et participer à la vie de la cité.",
              "Payer ses **impôts**, être **solidaire**, participer à la **défense** (recensement, JDC).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "À 16 ans, on se fait recenser (puis Journée défense et citoyenneté).",
      "Respecter le règlement de l'école, c'est déjà agir en citoyen.",
      "Participer à des projets solidaires ou associatifs.",
    ],
    vocabulaire: [
      { terme: "Citoyen", sens: "membre d'une communauté, avec des droits et des devoirs." },
      { terme: "Droit", sens: "ce que la loi garantit." },
      { terme: "Devoir", sens: "ce que l'on doit à la société." },
      { terme: "Impôt", sens: "somme versée à l'État pour financer les services publics." },
    ],
    retenir: [
      "Citoyen = droits ET devoirs.",
      "Droits : civils, politiques, sociaux.",
      "Devoirs : respecter la loi, voter, impôts, solidarité.",
      "La citoyenneté s'apprend dès l'école.",
    ],
  },

  // ======= THÈME 4 — VIVRE ENSEMBLE À L'ÉCOLE =======
  {
    slug: "les-regles-et-le-respect",
    theme: "vie-collective",
    numero: 9,
    titre: "Les règles et le respect à l'école",
    intro:
      "Bien vivre ensemble suppose des règles communes qui protègent chacun.",
    definition:
      "La vie en groupe suppose des **règles communes** qui protègent chacun et permettent de **bien vivre ensemble**.",
    sections: [
      {
        titre: "Pourquoi des règles ?",
        groupes: [
          {
            points: [
              "Assurer la **sécurité** et le **respect** de tous.",
              "Permettre à chacun d'**apprendre** dans de bonnes conditions.",
              "Les règles s'appliquent à **tous** de la même façon.",
            ],
          },
        ],
      },
      {
        titre: "La règle et la sanction",
        groupes: [
          {
            points: [
              "Le **règlement intérieur** fixe les droits et les devoirs.",
              "Une **sanction** doit être **juste**, **expliquée** et **éducative**.",
              "Réparer et comprendre son erreur, plutôt que seulement punir.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Lever la main, écouter les autres, respecter le matériel.",
      "Le règlement intérieur de l'école est expliqué aux élèves.",
      "Un conseil d'élèves permet de discuter des règles.",
    ],
    vocabulaire: [
      { terme: "Règle", sens: "ce qui est permis ou interdit dans un groupe." },
      { terme: "Règlement intérieur", sens: "ensemble des règles d'un établissement." },
      { terme: "Sanction éducative", sens: "conséquence juste qui aide à comprendre son erreur." },
      { terme: "Respect", sens: "prise en compte des autres et des règles." },
    ],
    retenir: [
      "Vivre ensemble suppose des règles communes.",
      "Les règles protègent et valent pour tous.",
      "Le règlement intérieur fixe droits et devoirs.",
      "La sanction doit être juste, expliquée et éducative.",
    ],
  },
  {
    slug: "l-egalite-filles-garcons",
    theme: "vie-collective",
    numero: 10,
    titre: "L'égalité filles-garçons et la lutte contre les discriminations",
    intro:
      "L'égalité est une valeur de la République : chacun a les mêmes droits, quelles que soient ses différences.",
    definition:
      "L'**égalité** entre tous est une valeur de la République : chacun a les **mêmes droits**, quels que soient son sexe, son origine ou ses différences.",
    sections: [
      {
        titre: "L'égalité filles-garçons",
        groupes: [
          {
            points: [
              "Filles et garçons ont les **mêmes droits** et les **mêmes possibilités**.",
              "Lutter contre les **stéréotypes** (« métiers de filles / de garçons »).",
              "L'école forme à l'égalité et au respect mutuel.",
            ],
          },
        ],
      },
      {
        titre: "Lutter contre les discriminations",
        groupes: [
          {
            points: [
              "Une **discrimination** consiste à traiter quelqu'un moins bien à cause d'une différence.",
              "Elle est **interdite par la loi** (origine, sexe, handicap, religion…).",
              "Respecter les différences, c'est vivre l'**égalité** au quotidien.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Filles et garçons participent aux mêmes activités et aux mêmes sports.",
      "Se moquer de quelqu'un pour sa différence est interdit.",
      "L'école valorise le respect de tous.",
    ],
    vocabulaire: [
      { terme: "Égalité", sens: "mêmes droits pour tous." },
      { terme: "Stéréotype", sens: "idée toute faite sur un groupe de personnes." },
      { terme: "Discrimination", sens: "traitement injuste fondé sur une différence." },
      { terme: "Respect", sens: "reconnaître la valeur de chacun." },
    ],
    retenir: [
      "Égalité = mêmes droits pour tous.",
      "Filles et garçons : les mêmes possibilités.",
      "Les discriminations sont interdites par la loi.",
      "Combattre les stéréotypes et respecter les différences.",
    ],
  },
  {
    slug: "le-harcelement-scolaire",
    theme: "vie-collective",
    numero: 11,
    titre: "Le harcèlement scolaire",
    intro:
      "Le harcèlement est une violence répétée que l'on peut reconnaître, prévenir et faire cesser.",
    definition:
      "Le **harcèlement** est une **violence répétée** (physique, verbale ou en ligne) exercée contre une personne qui ne peut pas se défendre.",
    sections: [
      {
        titre: "Reconnaître le harcèlement",
        groupes: [
          {
            points: [
              "Des actes **répétés** : moqueries, insultes, mise à l'écart, coups.",
              "Un **déséquilibre** entre l'auteur et la victime.",
              "Le **cyberharcèlement** se poursuit sur les écrans et les réseaux.",
            ],
          },
        ],
      },
      {
        titre: "Réagir et prévenir",
        groupes: [
          {
            points: [
              "**En parler** à un adulte de confiance : ne pas rester seul.",
              "Le rôle des **témoins** : ne pas rire, aider, alerter.",
              "À l'école : le programme **pHARe** et le numéro **3018** (aide aux victimes).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Un élève mis à l'écart et moqué chaque jour subit du harcèlement.",
      "Un témoin qui alerte un adulte aide à faire cesser la situation.",
      "Des messages blessants répétés en ligne = cyberharcèlement.",
    ],
    vocabulaire: [
      { terme: "Harcèlement", sens: "violence répétée contre une personne." },
      { terme: "Cyberharcèlement", sens: "harcèlement sur Internet et les réseaux." },
      { terme: "Témoin", sens: "personne qui assiste à la situation." },
      { terme: "pHARe", sens: "programme de lutte contre le harcèlement à l'école." },
    ],
    retenir: [
      "Harcèlement = violence répétée + déséquilibre.",
      "Le cyberharcèlement se poursuit en ligne.",
      "En parler à un adulte ; les témoins ont un rôle clé.",
      "À l'école : programme pHARe, numéro 3018.",
    ],
  },
  {
    slug: "la-cooperation-et-l-engagement",
    theme: "vie-collective",
    numero: 12,
    titre: "La coopération et l'engagement",
    intro:
      "La classe est un premier lieu où l'on apprend à coopérer et à s'engager pour les autres.",
    definition:
      "La vie de la classe repose sur la **coopération** ; chacun peut aussi **s'engager** pour le collectif.",
    sections: [
      {
        titre: "Coopérer",
        groupes: [
          {
            points: [
              "Travailler **ensemble** vers un but commun.",
              "**Écouter**, partager, s'entraider.",
              "La coopération développe la **responsabilité** et l'autonomie.",
            ],
          },
        ],
      },
      {
        titre: "S'engager",
        groupes: [
          {
            points: [
              "Élire et être **délégué** de classe.",
              "Participer aux **conseils** d'élèves.",
              "S'investir dans des **projets** (solidarité, environnement : éco-délégués).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Un travail de groupe où chacun a un rôle précis.",
      "Les délégués représentent la classe et portent sa parole.",
      "Les éco-délégués agissent pour l'environnement dans l'école.",
    ],
    vocabulaire: [
      { terme: "Coopération", sens: "travailler ensemble vers un but commun." },
      { terme: "Délégué", sens: "élève élu pour représenter sa classe." },
      { terme: "Engagement", sens: "fait de s'investir pour les autres." },
      { terme: "Responsabilité", sens: "assumer un rôle et ses conséquences." },
    ],
    retenir: [
      "Coopérer = agir ensemble et s'entraider.",
      "S'engager : délégués, conseils d'élèves, projets.",
      "L'engagement développe la responsabilité.",
      "La classe est un premier lieu d'apprentissage citoyen.",
    ],
  },
];
