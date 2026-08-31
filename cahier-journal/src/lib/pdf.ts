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
  // On rend l'élément capturable (il est normalement hors écran).
  const prev = el.style.cssText;
  el.style.position = "fixed";
  el.style.left = "0";
  el.style.top = "0";
  el.style.zIndex = "-1";
  el.style.background = "#ffffff";
  try {
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
      windowWidth: el.scrollWidth,
      windowHeight: el.scrollHeight,
    });
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
    pdf.save(filename);
  } finally {
    el.style.cssText = prev;
  }
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
