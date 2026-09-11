/* =========================================================================
   pdf.js — Génère le classeur en PDF téléchargeable (jsPDF), claviers dessinés
   en vectoriel (net à toute taille). Consomme le même modèle de sections que
   l'aperçu HTML.  Section = {type, ...}.
   ========================================================================= */
(function (global) {
  'use strict';
  const T = global.Theory, K = global.Keyboard;

  const PAGE_W = 595.28, PAGE_H = 841.89, M = 40;
  const CONTENT_W = PAGE_W - 2 * M;

  function jsPDFCtor() {
    const j = global.jspdf;
    return j && j.jsPDF ? j.jsPDF : null;
  }
  function available() { return !!jsPDFCtor(); }

  // Couleurs (RGB)
  const COL = {
    white: [255, 255, 255], wStroke: [70, 70, 70],
    black: [26, 26, 26],
    root: [192, 57, 43], noteFill: [201, 217, 251], noteBlack: [46, 111, 242],
    scaleFill: [191, 230, 214], scaleBlack: [31, 158, 107],
    text: [17, 24, 39], muted: [90, 90, 90]
  };
  const WHITE_PC = [0, 2, 4, 5, 7, 9, 11];
  const isWhite = pc => WHITE_PC.indexOf(((pc % 12) + 12) % 12) >= 0;

  // Dessine un clavier ; renvoie la hauteur utilisée.
  function drawKeyboard(doc, x, y, availW, midis, kind, showFingers, frNames) {
    const frame = K.frameFor(midis, 2);
    const startMidi = frame.startMidi;
    const octaves = Math.max(2, frame.octaves);
    const totalWhite = 7 * octaves;
    const ww = availW / totalWhite;
    const wh = Math.min(ww * 3.6, 70);
    const bw = ww * 0.62, bh = wh * 0.62;

    const roles = {};
    const hl = K.highlightFromMidis(midis, kind === 'scale' ? 'scale' : 'chord');
    hl.forEach(h => { roles[h.midi] = h.role; });
    const fingMap = showFingers ? K.fingersMap(midis, kind === 'scale' ? null : T.chordFingersRH(midis.length)) : {};

    // Touches blanches
    let wi = 0;
    const xOfMidi = {};
    for (let m = startMidi; wi < totalWhite; m++) {
      const pc = ((m % 12) + 12) % 12;
      if (!isWhite(pc)) continue;
      const kx = x + wi * ww;
      const role = roles[m];
      let fill = COL.white;
      if (role === 'root') fill = COL.root;
      else if (role === 'scale') fill = COL.scaleFill;
      else if (role === 'note') fill = COL.noteFill;
      doc.setDrawColor.apply(doc, COL.wStroke);
      doc.setFillColor.apply(doc, fill);
      doc.setLineWidth(0.6);
      doc.rect(kx, y, ww, wh, 'FD');
      xOfMidi[m] = kx + ww / 2;
      if (role) {
        const name = frNames ? T.frName(T.noteName(m, false)) : T.noteName(m, false);
        doc.setFontSize(Math.max(5.5, ww * 0.42));
        const tc = role === 'root' ? [255, 255, 255] : COL.text;
        doc.setTextColor.apply(doc, tc);
        doc.text(String(name), kx + ww / 2, y + wh - 4, { align: 'center' });
      }
      wi++;
    }
    // Touches noires
    wi = 0;
    for (let m = startMidi; wi < totalWhite; m++) {
      const pc = ((m % 12) + 12) % 12;
      if (isWhite(pc)) { wi++; continue; }
      const kx = x + wi * ww - bw / 2;
      const role = roles[m];
      let fill = COL.black;
      if (role === 'root') fill = COL.root;
      else if (role === 'scale') fill = COL.scaleBlack;
      else if (role === 'note') fill = COL.noteBlack;
      doc.setDrawColor(0, 0, 0);
      doc.setFillColor.apply(doc, fill);
      doc.setLineWidth(0.5);
      doc.rect(kx, y, bw, bh, 'FD');
      xOfMidi[m] = kx + bw / 2;
      if (role) {
        const name = frNames ? T.frName(T.noteName(m, true)) : T.noteName(m, true);
        doc.setFontSize(Math.max(5, bw * 0.42));
        doc.setTextColor(255, 255, 255);
        doc.text(String(name), kx + bw / 2, y + bh - 3, { align: 'center' });
      }
    }
    // Doigtés (pastilles)
    Object.keys(fingMap).forEach(mm => {
      const cx = xOfMidi[mm]; if (cx == null) return;
      const cy = y + wh + 7;
      doc.setFillColor(255, 245, 201); doc.setDrawColor(122, 92, 0); doc.setLineWidth(0.7);
      doc.circle(cx, cy, 6, 'FD');
      doc.setFontSize(8); doc.setTextColor(90, 67, 0);
      doc.text(String(fingMap[mm]), cx, cy + 2.6, { align: 'center' });
    });

    return wh + (Object.keys(fingMap).length ? 16 : 2);
  }

  // Génère le document et le télécharge.
  // Renvoie une promesse : 'saved' | 'browser' | code d'erreur.
  async function generate(sections, meta) {
    const JsPDF = jsPDFCtor();
    if (!JsPDF) return false;
    const frNames = meta && meta.frNames;
    const doc = new JsPDF({ unit: 'pt', format: 'a4' });
    let first = true;
    let y = M;

    function newPage() { doc.addPage(); y = M; }
    function ensure(h) { if (y + h > PAGE_H - M) newPage(); }
    function heading(txt) {
      ensure(28);
      doc.setFont('helvetica', 'bold'); doc.setFontSize(15); doc.setTextColor.apply(doc, COL.text);
      doc.text(txt, M, y + 6); y += 20;
      doc.setDrawColor(180, 180, 180); doc.setLineWidth(0.8); doc.line(M, y, PAGE_W - M, y); y += 14;
    }

    sections.forEach(sec => {
      if (!first) newPage();
      first = false;

      if (sec.type === 'cover') {
        y = 150;
        // petit clavier décoratif
        drawKeyboard(doc, M + CONTENT_W / 2 - 90, y, 180, [60, 64, 67], 'chord', false, frNames);
        y += 90;
        doc.setFont('helvetica', 'bold'); doc.setFontSize(30); doc.setTextColor.apply(doc, COL.text);
        doc.text(sec.title, PAGE_W / 2, y, { align: 'center' }); y += 30;
        if (sec.owner) { doc.setFontSize(16); doc.setFont('helvetica', 'normal'); doc.text(sec.owner, PAGE_W / 2, y, { align: 'center' }); y += 22; }
        doc.setFontSize(11); doc.setTextColor.apply(doc, COL.muted);
        doc.text(sec.subtitle || '', PAGE_W / 2, y, { align: 'center' }); y += 40;
        if (sec.toc && sec.toc.length) {
          doc.setFont('helvetica', 'bold'); doc.setFontSize(13); doc.setTextColor.apply(doc, COL.text);
          doc.text('Sommaire', M + 40, y); y += 20;
          doc.setFont('helvetica', 'normal'); doc.setFontSize(11);
          sec.toc.forEach((t, i) => { doc.text((i + 1) + '.  ' + t, M + 40, y); y += 18; });
        }
        return;
      }

      if (sec.type === 'list') {
        heading(sec.title);
        if (sec.intro) {
          doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor.apply(doc, COL.muted);
          const lines = doc.splitTextToSize(sec.intro, CONTENT_W); ensure(lines.length * 13);
          doc.text(lines, M, y); y += lines.length * 13 + 6;
        }
        doc.setFontSize(11); doc.setTextColor.apply(doc, COL.text);
        sec.items.forEach(it => {
          const lines = doc.splitTextToSize('•  ' + it, CONTENT_W - 8); ensure(lines.length * 14);
          doc.text(lines, M + 4, y + 10); y += lines.length * 14 + 4;
        });
        return;
      }

      if (sec.type === 'keyblock') {
        heading(sec.title);
        if (sec.intro) {
          doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor.apply(doc, COL.muted);
          doc.text(sec.intro, M, y); y += 16;
        }
        drawGrid(doc, sec.chords, 3, sec.fingers, frNames, 'Les 7 accords');
        drawGrid(doc, [sec.scale], 2, sec.fingers, frNames, 'La gamme');
        subhead('Progressions à connaître');
        doc.setFont('helvetica', 'normal'); doc.setFontSize(10.5); doc.setTextColor.apply(doc, COL.text);
        sec.progs.forEach(it => {
          const lines = doc.splitTextToSize('•  ' + it, CONTENT_W - 8); ensure(lines.length * 13);
          doc.text(lines, M + 4, y + 9); y += lines.length * 13 + 3;
        });
        return;
      }

      if (sec.type === 'grid') {
        heading(sec.title);
        drawGrid(doc, sec.items, sec.cols || 2, null, frNames);
        return;
      }
    });

    function subhead(txt) {
      ensure(22); y += 6;
      doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor.apply(doc, COL.text);
      doc.text(txt, M, y + 4); y += 16;
    }
    function drawGrid(doc, items, cols, fingersOverride, frNames, label) {
      if (label) subhead(label);
      const gap = 14;
      const cellW = (CONTENT_W - gap * (cols - 1)) / cols;
      let col = 0, rowH = 0, rowY = y;
      items.forEach(item => {
        const fingers = fingersOverride != null ? fingersOverride : item.fingers;
        const octv = Math.max(2, K.frameFor(item.midis, 2).octaves);
        const kbH = Math.min((cellW / (7 * octv)) * 3.6, 70);
        const cardH = 14 + kbH + (fingers ? 16 : 4) + 10;
        if (col === 0) { ensure(cardH); rowY = y; rowH = 0; }
        const cx = M + col * (cellW + gap);
        doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor.apply(doc, COL.text);
        doc.text(String(item.label), cx, rowY + 8);
        const used = drawKeyboard(doc, cx, rowY + 14, cellW, item.midis, item.kind, fingers, frNames);
        rowH = Math.max(rowH, 14 + used + 10);
        col++;
        if (col >= cols) { col = 0; y = rowY + rowH; }
      });
      if (col !== 0) y = rowY + rowH;
    }

    const name = (meta && meta.filename) || 'classeur-piano.pdf';

    // Dans l'appli Claude (artifact), le téléchargement direct est bloqué :
    // on passe par la capacité « downloads » (avec confirmation du visiteur).
    if (global.claude && typeof global.claude.use === 'function') {
      try {
        const dl = await global.claude.use('downloads');
        if (dl && dl.save) {
          const blob = doc.output('blob');
          await dl.save({ filename: name, data: blob });
          return 'saved';
        }
      } catch (e) { return (e && e.code) ? e.code : 'declined'; }
    }
    // Site déployé / fichier local : téléchargement navigateur classique.
    doc.save(name);
    return 'browser';
  }

  global.PianoPDF = { generate, available };
})(typeof window !== 'undefined' ? window : this);
