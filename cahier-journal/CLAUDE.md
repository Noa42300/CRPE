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

## Repères techniques

- Vite + React + TypeScript + Tailwind + IndexedDB, PWA hors ligne.
- Données : `days`, `settings`, `templates`, `plans`, `sequences`, `rituals`.
- Synchro cloud à sens unique (GitHub → appli) via `public/journal.json`,
  fusion non destructive (jamais d'écrasement du travail local).
- Confidentialité : `sanitizeForPublic()` retire toute donnée élève ;
  verrou par code PIN à l'ouverture.
- Écriture « PE » : `.font-ecole` (cursive) + `.seyes` (lignage Seyès).
