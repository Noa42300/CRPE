# 🎹 Piano Autodidacte

Application web (PWA) autonome pour apprendre le piano en autodidacte : accords,
gammes, tonalités, cercle des quintes, journal de pratique et **générateur de
fiches imprimables** pour se constituer un classeur.

## Ouvrir l'appli

- En local : ouvrir `index.html` (ou servir le dossier avec un petit serveur
  statique pour activer le mode hors-ligne / PWA).
- Déployée avec le site : accessible à l'adresse **`/piano/`**.

## Ce qu'elle fait

| Onglet | Contenu |
|--------|---------|
| **Parcours** | Programme progressif en modules (du plus utile au plus avancé). |
| **Accords** | Schéma exact du clavier, notes surlignées, son, arpège. 18 types d'accords × 12 fondamentales. |
| **Gammes** | 12 gammes (majeure, mineures, modes, pentatoniques, blues), audio montant/descendant. |
| **Tonalités** | Les 7 accords qui « vont ensemble » + progressions incontournables (I-V-vi-IV, ii-V-I…). |
| **Cercle des quintes** | Carte interactive des tonalités et de leurs relatives. |
| **Journal** | Suivi des séances (temps, régularité, série de jours) — stocké dans le navigateur. |
| **Classeur 🖨** | Génère des fiches noir & blanc → `Ctrl/Cmd + P` → PDF ou impression. |

## Le son

Le son est **synthétisé en temps réel** (Web Audio API), donc l'appli marche
100 % hors-ligne, sans aucun fichier audio à télécharger. Chaque note joue la
fréquence exacte (La 440 Hz comme référence).

## Technique

- Aucune dépendance, aucun build : HTML + CSS + JavaScript pur.
- `js/theory.js` — moteur de théorie musicale (calcule tout : accords, gammes, harmonie).
- `js/keyboard.js` — rendu SVG du clavier (écran + impression).
- `js/audio.js` — synthèse sonore.
- `js/app.js` — interface et vues.
- `sw.js` + `manifest.webmanifest` — installation et fonctionnement hors-ligne.
