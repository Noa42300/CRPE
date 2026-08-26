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

## Repères techniques

- Vite + React + TypeScript + Tailwind + IndexedDB, PWA hors ligne.
- Données : `days`, `settings`, `templates`, `plans`, `sequences`, `rituals`.
- Synchro cloud à sens unique (GitHub → appli) via `public/journal.json`,
  fusion non destructive (jamais d'écrasement du travail local).
- Confidentialité : `sanitizeForPublic()` retire toute donnée élève ;
  verrou par code PIN à l'ouverture.
- Écriture « PE » : `.font-ecole` (cursive) + `.seyes` (lignage Seyès).
