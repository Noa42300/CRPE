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
- La classe compte **23 élèves** (14 CE1 + 9 CE2). Toute activité qui s'appuie
  sur le nombre d'élèves (nombre du jour, fleur du nombre, problèmes…) doit
  utiliser **23**, jamais 25.

### Rédaction du déroulement d'une séance (IMPORTANT)
- Dans le **déroulement**, chaque étape (`note`) contient, **avec des tirets**,
  les **phrases que l'enseignant·e dira à l'oral** aux élèves (discours direct,
  entre guillemets « … »), courtes et simples.
- **Commencer par expliquer l'activité aux élèves** : le but et la tâche
  (« Aujourd'hui, on va jouer aux petits chevaux pour apprendre à compter »),
  puis la consigne concrète (« Pour jouer, on prend les dés… »).
- Une phrase brève par tiret. Les indications qui ne se disent pas à voix haute
  (gestes, observations) vont entre parenthèses, en aparté.

## Repères techniques

- Vite + React + TypeScript + Tailwind + IndexedDB, PWA hors ligne.
- Données : `days`, `settings`, `templates`, `plans`, `sequences`, `rituals`.
- Synchro cloud à sens unique (GitHub → appli) via `public/journal.json`,
  fusion non destructive (jamais d'écrasement du travail local).
- Confidentialité : `sanitizeForPublic()` retire toute donnée élève ;
  verrou par code PIN à l'ouverture.
- Écriture « PE » : `.font-ecole` (cursive) + `.seyes` (lignage Seyès).
