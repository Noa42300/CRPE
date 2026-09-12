# Cahier Journal — conventions du projet

Application personnelle et privée d'un·e enseignant·e (PES, classe CE1-CE2
à double niveau). 100 % locale (IndexedDB), hors ligne (PWA), déployée sur
GitHub Pages. Aucune donnée élève ne quitte l'appareil.

## Règle de rédaction des contenus pédagogiques (IMPORTANT)

Quand j'ajoute des **séances, séquences, rituels, progressions,
programmations** ou tout autre contenu qui sera affiché dans l'appli :

- **Toujours écrire à la première personne du singulier**, comme si
  l'enseignant·e l'avait rédigé lui-même : « je distribue le papier »,
  « j'explique aux élèves que… », « je circule dans les rangs »,
  « je note au tableau… », « je fais reformuler la consigne ».
- **Ne jamais laisser transparaître que le texte a été généré** (pas de ton
  générique/impersonnel, pas de « l'enseignant fait… », pas de tournures
  d'IA). Le contenu doit se lire comme des notes de préparation authentiques.
- Rester concret, pratique et fidèle au niveau CE1-CE2 et aux programmes.

### Effectif de la classe
- La classe compte **23 élèves** (13 CE1 + 10 CE2). Toute activité qui s'appuie
  sur le nombre d'élèves (nombre du jour, fleur du nombre, problèmes…) doit
  utiliser **23**, jamais 25.

### Rédaction du déroulement d'une séance (IMPORTANT)
- Dans le **déroulement**, **CHAQUE étape** (`note`) contient **5 à 6 tirets**,
  et chaque tiret est **une phrase que l'enseignant·e dira à l'oral** aux élèves
  (discours direct, entre guillemets « … »), courte et simple. Pas seulement la
  première étape : **toutes** les étapes, du début à la fin de la séance.
- La première étape **explique l'activité** : le but et la tâche
  (« Aujourd'hui, on va jouer aux petits chevaux pour apprendre à compter »),
  puis la consigne concrète (« Pour jouer, on prend les dés… »).
- Les indications qui ne se disent pas à voix haute (gestes, observations) vont
  entre parenthèses, en aparté, à la fin de l'étape.
- Cette règle s'applique à **toutes les séances déjà écrites et à toutes les
  suivantes**.

### Données élèves sensibles & différenciation (IMPORTANT)
- Les **besoins particuliers** des élèves (PAP, PPRE, troubles — TDAH, TSA…) sont
  des **données de santé sur des mineurs**. Elles vivent **uniquement** dans le
  champ `besoins` (local) de chaque élève du roster, **jamais** dans
  `journal.json`, dans ce fichier, ni dans aucun contenu publié
  (`sanitizeForPublic` retire tout le roster).
- Ne **jamais** écrire un **nom d'élève associé à un trouble/diagnostic** dans une
  séance, une différenciation ou tout contenu synchronisé. La différenciation
  rédigée dans les séances reste **générique et non nominative** (« pour un élève
  à besoins attentionnels : consignes fractionnées, minuteur visuel, place au
  calme » ; « pour un élève TSA : anticiper les changements, supports visuels,
  espace de retour au calme »).

### Erreurs fréquentes & remédiation (IMPORTANT — pour CHAQUE séance)
- Chaque activité d'apprentissage a un champ **`obstacles`** : les **erreurs que les
  élèves peuvent rencontrer** (les blocages du type « je n'y arrive pas ») **et la
  remédiation rapide** pour les débloquer sur le moment. C'est **anticipé avant** la
  séance (≠ bilan, rempli après). S'affiche dans un onglet dédié et sur la fiche de prép.
- Le rédiger pour **toutes les séances** (pédagogiques), au format « Erreurs
  fréquentes : … / Remédiation rapide : … », concret et actionnable en classe.
- Quand un manuel fournit déjà « erreurs rencontrées / remédiation » (ex. « 1,2,3
  Étude de la langue »), **s'en servir** comme source.

### Correction de chaque activité
- Chaque activité a un champ **`correction`** (les réponses attendues / la
  production visée). Le remplir dès que l'activité a des réponses ; il s'affiche
  dans un onglet « Correction » de la séance et sur la fiche de préparation.

### Documents à imprimer (une seule rubrique)
- Dans une séance, il n'y a **qu'une seule** rubrique « 📄 Documents à
  imprimer » : elle réunit la fiche de préparation, les supports élèves fournis
  (`supportsForActivity`) et les documents ajoutés par l'enseignant·e
  (`<Attachments bare/>`). Ne pas recréer deux cases séparées.
- Chaque document a une **loupe « Aperçu »** (`PreviewModal`) qui prévisualise
  en plein écran **sans télécharger** ; le téléchargement PDF et l'impression se
  font depuis la ligne du document ou depuis l'aperçu.

### Style des fiches élèves — MODÈLE AUTHENTIQUE (exercices & leçons) — IMPORTANT
- Les fiches doivent **ressembler à de vraies fiches de PE CE1-CE2**, pas à des
  documents « générés par IA ». Modèle de référence : les fiches type
  « Fiche de Mathématiques n° X » (calcul mental en cases, additions en colonnes,
  problème illustré, colonne « Je sais… » à droite).
- **PAS d'orange** ni de bandeaux / filets / pastilles « déco IA ». Le **chrome
  est en encre noire** (titres, filets, cadre). Les couleurs vives sont réservées
  aux **illustrations** et au **matériel pédagogique** (base 10 : centaines bleues,
  dizaines oranges, unités vertes — ça, on garde).
- **Cadre noir** fin autour de la page ; **en-tête** « titre (manuscrit) + Prénom : …… »
  avec un filet noir ; consignes **numérotées** et **soulignées**, courtes.
- **Nombres et exemples en écriture manuscrite** (police type Caveat), plus grands,
  faciles à lire pour des CE1-CE2.
- **Colonne « Je sais… » à droite** (auto-évaluation) : champ `competences: string[]`
  de `FicheData` (une entrée par exercice) → rendu « Je sais … » + petite case à
  cocher/compter. À remplir pour toutes les **fiches d'exercices**.
- **Illustrations mignonnes et parlantes** (pictos maison agrandis, futurs vrais
  visuels), enfant-friendly. Toujours privilégier le concret et le ludique.
- Le composant `FichePedagogiqueA4` applique ce modèle ; s'appuyer dessus (et sur
  de vraies fiches de CE1-CE2 comme référence) pour toute nouvelle fiche.

## Organisation matérielle de la classe (référence)

Quand je rédige une séance, indiquer le bon support de rangement :

- **Cahier cinéma** — sorties / films.
- **Cahier violet** — anglais **et** évaluations de français (double usage indiqué
  par l'enseignant·e).
- **Cahier blanc** — poésies.
- **Classeur** — exercices sur fiche de français / maths.
- **Cahier rouge** — leçons de maths.
- **Cahier bleu** — leçons de français.
- **Cahier orange** — évaluations de maths.
- **Cahier gris** — exercices d'entraînement.
- **Cahier jaune** — cahier de liaison.
- **Cahier vert** — dictées.
- **Pochette noire** — travail en autonomie / pas fini / projet voyage.
- **Pochette jaune** — documents.

## Méthodes et manuels (2026-2027)

- **Mathématiques** : méthode **Tandem**.
- **Français** : **Graphémo** = **LA méthode d'orthographe ET de dictées** (pas
  « 1, 2, 3… » pour les dictées). Programmation Graphémo 32 semaines dans
  `src/lib/progDisciplines.ts` (`PROG_GRAPHEMO`). **La dictée hebdomadaire se
  fait toujours sur le THÈME 1.** Semaine 1 = dictée diagnostique, semaine 7 =
  dictée diagnostique finale. « **1, 2, 3… Étude de la langue** » sert seulement
  d'**appoint en grammaire**.
- **Lecture / phonologie** : **GraphoGame**.
- **Vidéos** : pour chaque séance, si une **vidéo YouTube courte (2-3 min)**
  explique la notion de façon enfantine, la renseigner dans le champ `video`
  (lien exact) de l'activité — elle s'affiche en lien cliquable dans la séance
  et sur la fiche de prép.
- **Banque de fichiers autonomie CE2** : en maths, les tandems sont par classe.
  Pendant que je fais la **leçon guidée aux CE1** (projetée), les **CE2 sont en
  autonomie** sur un fichier préparé à l'avance (puis institutionnalisation). On
  **constitue une banque** de ces fichiers autonomie CE2 qui **suit la
  programmation de maths** (`PROG_MATHS`) : **un fichier par chapitre de chaque
  thématique**, à préparer d'avance pour en avoir toujours d'côté.
- **EPS — continuité des séances** : une séquence EPS **se suit** (on ne passe pas
  d'athlétisme à jeux collectifs d'une séance à l'autre). Chaque séance poursuit
  la précédente (P1 : « courir longtemps » S1 → S2 → …). **Chaque séance EPS a une
  fiche qui schématise le terrain** (plots, distances idéales) et précise la
  **sécurité active / passive / affective** (voir `EpsTerrainSupport`).
- **Anglais** : la programmation annuelle (18 séquences) vient du document de
  l'enseignant·e, transcrite dans `PROG_ANGLAIS` (ordre des séquences et des
  séances fidèle au document ; rattachement par période à confirmer). Vidéos
  anglais : **des classiques de la musique** (ex. The Beatles « Hello, Goodbye »),
  pas de comptines trop enfantines.
- **Organisation en TANDEMS** (double niveau) : un tandem CE1, un tandem CE2.
  Alternance : pendant qu'un niveau est en **leçon guidée** avec l'enseignant·e,
  l'autre est en **travail autonome**. En tenir compte dans le déroulement des
  séances (qui est avec le PE / qui est en autonomie).
- **Poésie / récitation** : quota officiel Cycle 2 ≈ **30 min/semaine** ;
  séquences générées CE1/CE2 sans manuel.
- **Service à mi-temps** : l'enseignant·e n'assure que le **lundi et le mardi**
  (le reste de la semaine = complément). Ne préparer que ces deux jours
  (`settings.joursTravailles = [1, 2]`).

## Volumes horaires hebdomadaires à respecter (IMPORTANT)

Service à mi-temps : les volumes s'entendent **sur les DEUX jours (lundi + mardi)
réunis**, pas par jour. Référence dans `src/lib/horaires.ts`.

- **Français : 5 h sur les 2 jours** (~2 h 30/jour) — **IMPÉRATIF, non négociable.**
- **Mathématiques : 2 h 15 sur les 2 jours** (~1 h 07/jour) — **IMPÉRATIF.**
- Langue vivante (anglais) : 1 h 30 souhaité, **45 min acceptable** si besoin.
- EPS : 1 h 30 — ajustable.
- Questionner le monde : 45 min (histoire en P1) — ajustable.
- **Musique : ne PAS programmer** (conservatoire dès début octobre).

Règle de préparation : quand je bâtis lundi + mardi, vérifier que le cumul des
créneaux atteint **300 min de français** et **135 min de maths** sur les deux
jours. On peut réduire le reste, jamais ces deux-là.

## Programmations annuelles intégrées (référence permanente)

- Les programmations officielles (Français : répartition annuelle + dictées
  Graphémo + sommaire EDL ; Maths CE1 et CE2 par période/domaine, méthode Tandem)
  sont **ancrées dans le code** : `src/lib/programmations.ts`. Elles s'affichent
  en lecture seule dans **Programmations** (français & maths) avec un bouton
  « Pré-remplir mes zones ». **S'y référer** pour programmer les séances.
- Les programmations **Questionner le monde** (Histoire, Géographie, Sciences),
  **Anglais** et **EMC** sont dans `src/lib/progDisciplines.ts` et s'affichent en
  référence (lecture seule) dans **Programmations**. Règles à respecter quand je
  génère des séances :
  - **Numéroter chaque séquence de 1 à N** (recommencer à 1 à chaque nouvelle
    séquence), et non selon la numérotation d'origine des documents.
  - **Histoire, géographie et sciences** entrent toutes dans « Questionner le
    monde » (`qlm`).
  - **Période 1 : uniquement l'HISTOIRE** ; la **séance 1 est déjà faite**
    (commencer à la séance 2).
- Données purement pédagogiques (aucune donnée élève) : peuvent être versionnées.

## Sections « Info élèves » et « Idées séances »

- **Info élèves** (`InfoElevesView`, store IndexedDB `studentNotes`) : pour chaque
  élève du roster, une **synthèse/profil** libre + des **observations datées**
  (matière, +, à travailler, pistes) accumulées à chaque correction, pour préparer
  le **LSU** (bouton « Copier pour le LSU »). Dictée vocale via le micro du clavier.
  **DONNÉE SENSIBLE (mineurs)** : strictement locale, **jamais** dans `journal.json`
  ni publiée (`sanitizeForPublic` vide `studentNotes` ; le suivi n'est restauré
  qu'en import « replace », jamais en « merge »).
- **Idées séances** (`IdeesSeancesView` + `lib/generateSeance.ts`) : générateur
  **local et déterministe** qui assemble une fiche de séance conforme (objectifs,
  compétences + réf. programmes 2020, déroulement à la 1re personne, différenciation
  CE1/CE2, **erreurs & remédiation**, correction, matériel) à partir d'une notion.
  C'est un **squelette à relire/personnaliser**, pas une génération libre par IA ;
  pour une séance sur mesure très riche, passer par l'assistant (moi). La séance
  générée peut être ajoutée à un jour, rangée en Bibliothèque, ou imprimée.
- Toute nouvelle fiche de séance (générée ou rédigée) **doit** contenir la partie
  `obstacles` (erreurs fréquentes & remédiation).

## Repères techniques

- Vite + React + TypeScript + Tailwind + IndexedDB, PWA hors ligne.
- Données : `days`, `settings`, `templates`, `plans`, `sequences`, `rituals`,
  `attachments`, `reminders`, `studentNotes` (IndexedDB, DB_VERSION 7).
- Synchro cloud à sens unique (GitHub → appli) via `public/journal.json`,
  fusion non destructive (jamais d'écrasement du travail local).
- Confidentialité : `sanitizeForPublic()` retire toute donnée élève ;
  verrou par code PIN à l'ouverture.
- Écriture « PE » : `.font-ecole` (cursive) + `.seyes` (lignage Seyès).
