#!/bin/bash
# Double-cliquez sur ce fichier pour lancer le Cahier Journal.
cd "$(dirname "$0")" || exit 1

echo "============================================"
echo "   Cahier Journal - démarrage"
echo "============================================"
echo

if ! command -v node >/dev/null 2>&1; then
  echo "[X] Node.js n'est pas installé."
  echo "    Téléchargez-le ici (bouton LTS), installez-le, puis relancez ce fichier :"
  echo "    https://nodejs.org"
  echo
  read -r -p "Appuyez sur Entrée pour fermer."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Première utilisation : installation des composants (1 à 2 min, une seule fois)..."
  npm install || { echo "Échec de l'installation."; read -r; exit 1; }
fi

echo
echo "L'application va s'ouvrir dans votre navigateur."
echo "Laissez cette fenêtre ouverte pendant l'utilisation. Fermez-la pour quitter."
echo

( sleep 3; open http://localhost:5173 ) &
npm run dev
