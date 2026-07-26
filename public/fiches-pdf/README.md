# PDF des fiches

Ce dossier contient un PDF **par fiche** du site. Chaque bouton
« Télécharger en PDF » pointe vers le fichier correspondant :

```
/fiches-pdf/<matiere>/<slug>.pdf
```

## Matières (`<matiere>`)

| Dossier            | Rubrique du site        |
| ------------------ | ----------------------- |
| `francais`         | Fiches → Français       |
| `maths`            | Fiches → Mathématiques  |
| `histoire`         | Fiches → Histoire       |
| `anglais`          | Fiches → Anglais        |
| `espagnol`         | Fiches → Espagnol       |
| `svt`              | Fiches → SVT            |
| `physique-chimie`  | Fiches → Physique-Chimie|

## Remplacer un placeholder par la vraie fiche

Les fichiers actuellement présents sont des **placeholders** générés
automatiquement (un PDF valide d'une page, à remplacer).

Pour publier la vraie fiche : dépose ton PDF au **même emplacement**, en
conservant exactement le **même nom de fichier** (`<slug>.pdf`). Aucune
modification de code n'est nécessaire — le bouton pointera automatiquement
vers ton fichier.

- Le `<slug>` d'une fiche Maths / Histoire / Anglais / Espagnol / SVT /
  Physique-Chimie est celui utilisé dans son URL
  (ex : `/fiches/maths/les-fractions` → `maths/les-fractions.pdf`).
- Pour le Français, le `<slug>` est dérivé du titre de la fiche
  (ex : « Les classes de mots » → `francais/les-classes-de-mots.pdf`).

## Régénérer les placeholders

Si de nouvelles fiches sont ajoutées, régénère les placeholders manquants
avec :

```
node scripts/generate-fiche-pdfs.mjs
```

Le script n'écrase pas volontairement : il (re)génère un placeholder pour
chaque fiche. Si tu as déjà déposé de vrais PDF, sauvegarde-les avant de
relancer le script (il réécrit tous les fichiers).
