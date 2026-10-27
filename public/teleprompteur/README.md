# Téléprompteur

PWA autonome (HTML + JS, aucune dépendance) accessible à l'adresse **`/teleprompteur/`**.

- Aperçu caméra avant/arrière ; le format (9:16 ou 16:9) suit la rotation du téléphone ; 1080p ou 4K si dispo.
- La caméra n'est ouverte qu'une fois : rotation et qualité passent par `applyConstraints` (pas de nouvelle demande d'accès).
- Texte collé qui défile en haut de l'écran (près de l'objectif), 20 à 100 caractères par ligne,
  vitesse en mots/minute, pause au toucher, glisser pour revenir en arrière, télécommande Bluetooth.
- Enregistrement via `MediaRecorder` (MP4/H.264 sur iPhone et Chrome récent), relecture,
  puis « Enregistrer dans Photos » (menu de partage) ou téléchargement du fichier, sans recompression.

Sur iPhone : ouvrir la page dans Safari → Partager → « Sur l'écran d'accueil ».
