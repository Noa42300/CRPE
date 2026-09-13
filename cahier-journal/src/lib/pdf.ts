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
  const cw = canvas.width;
  const ch = canvas.height;
  const pxPerMm = cw / pageW;
  const pageHpx = Math.max(1, Math.floor(pageH * pxPerMm));

  // Pagination « intelligente » : au lieu de couper toutes les pages à hauteur
  // fixe (ce qui tranche une illustration ou une ligne en deux), on recule le
  // point de coupe jusqu'à une ligne quasi blanche. Ainsi les plaques base-10,
  // les tableaux et les exercices ne sont jamais coupés au milieu.
  const ctx = canvas.getContext("2d");
  const rowClean = (y: number): boolean => {
    if (!ctx) return true;
    try {
      const data = ctx.getImageData(0, y, cw, 1).data;
      for (let x = 0; x < cw; x += 6) {
        const i = x * 4;
        if (data[i] < 244 || data[i + 1] < 244 || data[i + 2] < 244) return false;
      }
      return true;
    } catch {
      return true; // canvas « taint » → on retombe sur la coupe fixe
    }
  };

  let start = 0;
  let first = true;
  while (start < ch) {
    let end = Math.min(start + pageHpx, ch);
    if (end < ch) {
      // On cherche une ligne blanche dans les 25 % du bas de la page.
      const minEnd = start + Math.floor(pageHpx * 0.72);
      for (let y = end; y > minEnd; y--) {
        if (rowClean(y)) { end = y; break; }
      }
    }
    const sliceH = end - start;
    const tmp = document.createElement("canvas");
    tmp.width = cw; tmp.height = sliceH;
    const tctx = tmp.getContext("2d");
    if (tctx) {
      tctx.fillStyle = "#ffffff";
      tctx.fillRect(0, 0, cw, sliceH);
      tctx.drawImage(canvas, 0, start, cw, sliceH, 0, 0, cw, sliceH);
    }
    const sliceData = tmp.toDataURL("image/jpeg", 0.95);
    if (!first) pdf.addPage();
    pdf.addImage(sliceData, "JPEG", 0, 0, pageW, sliceH / pxPerMm);
    first = false;
    start = end;
    // On ignore un tout petit reliquat (évite une page blanche parasite).
    if (ch - start < pageHpx * 0.04) break;
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
