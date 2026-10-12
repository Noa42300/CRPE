import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { StoreProvider } from "./lib/store";

/**
 * Mise à jour fiable après un déploiement.
 * -----------------------------------------
 * Le service worker est en « autoUpdate » (skipWaiting + clientsClaim) : à
 * chaque nouveau déploiement, le nouveau SW prend la main immédiatement, MÊME
 * sur une page déjà ouverte qui tourne encore avec l'ancien code. Résultat :
 * l'ancienne page essaie de charger « à la demande » ses anciens morceaux de
 * code (génération PDF : html2canvas / jsPDF…) qui n'existent plus dans le
 * nouveau cache → le téléchargement PDF échouait pour TOUS les documents, et il
 * fallait fermer/rouvrir l'appli à la main.
 *
 * Correctif : dès qu'un nouveau SW prend le contrôle de la page, on recharge
 * UNE fois automatiquement. Le code exécuté correspond alors toujours au cache
 * actif → les diapos, leçons et PDF arrivent sans manip. On ne recharge pas
 * lors de la toute première installation (il n'y avait pas de contrôleur).
 */
if ("serviceWorker" in navigator) {
  const hadController = !!navigator.serviceWorker.controller;
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloading || !hadController) return;
    reloading = true;
    window.location.reload();
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
