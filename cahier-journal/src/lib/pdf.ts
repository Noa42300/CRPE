/**
 * Génération d'un PDF téléchargeable à partir d'un élément du DOM.
 * Rendu fidèle à la mise en page A4 (html2canvas → jsPDF), pagination
 * automatique sur plusieurs pages A4 si nécessaire.
 */
export async function downloadElementPdf(el: HTMLElement, filename: string): Promise<void> {
  // Chargées à la demande (grosses librairies) → n'alourdit pas le démarrage.
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);
  // S'assurer que les polices (Borel, Lexend…) sont chargées avant la capture.
  try { await (document as { fonts?: { ready?: Promise<unknown> } }).fonts?.ready; } catch { /* ignore */ }

  // On rend l'élément capturable (il est normalement hors écran, à gauche).
  const prev = el.style.cssText;
  el.style.position = "fixed";
  el.style.left = "0";
  el.style.top = "0";
  el.style.zIndex = "-1";
  el.style.background = "#ffffff";

  let canvas: HTMLCanvasElement;
  try {
    canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
    });
  } finally {
    el.style.cssText = prev;
  }

  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const imgW = pageW;
  const imgH = (canvas.height * pageW) / canvas.width;
  const imgData = canvas.toDataURL("image/jpeg", 0.95);

  let heightLeft = imgH;
  let position = 0;
  pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
  heightLeft -= pageH;
  while (heightLeft > 0) {
    position -= pageH;
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
    heightLeft -= pageH;
  }

  // Enregistrement robuste, compatible desktop ET tablette/PWA (iPad).
  // Sur iOS / application installée, le téléchargement par lien est souvent
  // ignoré silencieusement : on ouvre alors le PDF dans un nouvel onglet
  // (l'utilisateur l'enregistre / le partage depuis la visionneuse).
  const blob = pdf.output("blob");
  const url = URL.createObjectURL(blob);
  const ua = navigator.userAgent || "";
  const touch = (navigator as { maxTouchPoints?: number }).maxTouchPoints ?? 0;
  const isIOS = /iP(hone|ad|od)/.test(ua) || (navigator.platform === "MacIntel" && touch > 1);
  const standalone =
    (navigator as { standalone?: boolean }).standalone === true ||
    (typeof matchMedia !== "undefined" && matchMedia("(display-mode: standalone)").matches);

  if (isIOS || standalone) {
    const w = window.open(url, "_blank");
    if (!w) {
      // popup bloqué → dernier recours : lien de téléchargement.
      const a = document.createElement("a");
      a.href = url; a.download = filename; a.rel = "noopener";
      document.body.appendChild(a); a.click(); a.remove();
    }
  } else {
    const a = document.createElement("a");
    a.href = url; a.download = filename; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

/** Nettoie un intitulé pour en faire un nom de fichier sûr. */
export function safeFileName(s: string): string {
  return (
    s
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-zA-Z0-9\-_ ]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 60) || "fiche"
  );
}
