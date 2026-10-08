# Fichier d'autonomie CM1 (élèves de CE2 avancés)

- `fichier-autonomie-CM1.pdf` : fichier élève, 63 pages A4. Il contient une couverture, le mode d'emploi, la page « Mon parcours » et 30 missions. Chaque mission occupe une double page : la leçon à gauche, les exercices à droite. Les missions alternent entre le français et les maths.
- `corriges-fichier-autonomie-CM1.pdf` : corrigés réservés à l'enseignant, 5 pages, à imprimer à part.

## Impression

- Imprimer **en recto verso**, bord long. La page 1 (couverture) est seule ; ensuite chaque leçon (page paire) se trouve en face de ses exercices (page impaire).
- Imprimer à **100 % (« taille réelle »)**, pas en « ajuster à la page ». Sinon, les segments à mesurer de la mission 14 et les quadrillages de 5 mm ne gardent pas leurs dimensions.
- Le fichier reste lisible en noir et blanc : les niveaux sont repérés par le nombre de points (●, ●●, ●●●), pas seulement par la couleur.

## Modifier puis régénérer

Les leçons se trouvent dans `src/lecons.mjs` ; les exercices et les corrigés, dans `src/missions/*.mjs`. La mise en page est définie dans `src/lib.mjs`.

```bash
cd fichiers-autonomie/cm1
node src/build.mjs        # régénère les deux PDF (Playwright + Chromium)
```

Le script signale toute page dont le contenu dépasse la hauteur d'une feuille A4.

Polices : Andika et Lexend, sous licence SIL OFL (voir `fonts/`).
