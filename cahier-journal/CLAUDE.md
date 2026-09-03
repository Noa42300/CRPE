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
- **Français** : **Graphémo** + le manuel **« 1, 2, 3… Étude de la langue »**.
- Les programmations/progressions vont être fournies par l'enseignant·e et
  remplaceront les contenus provisoires.

## Repères techniques

- Vite + React + TypeScript + Tailwind + IndexedDB, PWA hors ligne.
- Données : `days`, `settings`, `templates`, `plans`, `sequences`, `rituals`.
- Synchro cloud à sens unique (GitHub → appli) via `public/journal.json`,
  fusion non destructive (jamais d'écrasement du travail local).
- Confidentialité : `sanitizeForPublic()` retire toute donnée élève ;
  verrou par code PIN à l'ouverture.
- Écriture « PE » : `.font-ecole` (cursive) + `.seyes` (lignage Seyès).
