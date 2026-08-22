@echo off
chcp 65001 >nul
title Cahier Journal
cd /d "%~dp0"

echo ============================================
echo    Cahier Journal - demarrage
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [X] Node.js n'est pas installe.
  echo     Telecharge-le ici, installe-le, puis relance ce fichier :
  echo     https://nodejs.org  ^(bouton "LTS"^)
  echo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Premiere utilisation : installation des composants...
  echo ^(cela peut prendre 1 a 2 minutes, une seule fois^)
  call npm install
  if errorlevel 1 ( echo Echec de l'installation. & pause & exit /b 1 )
)

echo.
echo L'application va s'ouvrir dans ton navigateur.
echo Laisse cette fenetre NOIRE ouverte pendant que tu l'utilises.
echo Pour quitter : ferme cette fenetre.
echo.

start "" http://localhost:5173
call npm run dev

pause
