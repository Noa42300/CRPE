/* =========================================================================
   keyboard.js — Rendu SVG d'un clavier de piano avec touches surlignées.
   Rendu net à l'écran ET à l'impression (noir & blanc lisible).
   ========================================================================= */
(function (global) {
  'use strict';

  const WHITE_PC = [0, 2, 4, 5, 7, 9, 11];        // do ré mi fa sol la si
  const BLACK_PC = { 1: 0, 3: 1, 6: 3, 8: 4, 10: 5 }; // pc -> index de blanche précédente

  function isWhite(pc) { return WHITE_PC.indexOf(((pc % 12) + 12) % 12) >= 0; }

  /**
   * Dessine un clavier.
   * opts = {
   *   startMidi: MIDI de départ (défaut C3 = 48),
   *   octaves: nombre d'octaves (défaut 2),
   *   highlight: [{midi, role, label}]  role: 'root'|'note'|'scale'
   *   showLabels: booléen (noms de notes sur les touches surlignées),
   *   frNames: booléen (do ré mi au lieu de C D E),
   *   width: largeur px
   * }
   * Renvoie une chaîne SVG.
   */
  function render(opts) {
    opts = opts || {};
    const startMidi = opts.startMidi != null ? opts.startMidi : 48;
    const octaves = opts.octaves || 2;
    const highlight = opts.highlight || [];
    const showLabels = opts.showLabels !== false;
    const frNames = !!opts.frNames;
    const totalWhite = 7 * octaves;
    const ww = 40;                 // largeur touche blanche
    const wh = 165;                // hauteur touche blanche
    const bw = 26;                 // largeur touche noire
    const bh = 104;                // hauteur touche noire
    const pad = 6;
    const W = totalWhite * ww + pad * 2;
    const H = wh + pad * 2 + 4;

    const hByMidi = {};
    highlight.forEach(h => { hByMidi[h.midi] = h; });
    const fingers = opts.fingers || {};        // { midi: numéro de doigt }
    const interactive = !!opts.interactive;    // touches cliquables

    const roleFill = {
      root:  '#c0392b',   // rouge = fondamentale
      note:  '#2e6ff2',   // bleu = notes de l'accord
      scale: '#1f9e6b'    // vert = notes de gamme
    };
    const roleFillLight = {
      root:  '#f4c9c2',
      note:  '#c9d9fb',
      scale: '#bfe6d6'
    };

    let whites = '';
    let blacks = '';
    let labels = '';

    // 1er passage : touches blanches
    let whiteIndex = 0;
    const midiToX = {}; // centre x de chaque touche (blanche ou noire) surlignée
    for (let m = startMidi; whiteIndex < totalWhite; m++) {
      const pc = ((m % 12) + 12) % 12;
      if (isWhite(pc)) {
        const x = pad + whiteIndex * ww;
        const h = hByMidi[m];
        let fill = '#ffffff';
        let stroke = '#333';
        if (h) {
          fill = h.role === 'root' ? roleFill.root
               : (h.role === 'scale' ? roleFillLight.scale : roleFillLight.note);
        }
        whites += '<rect class="wk' + (interactive ? ' clk' : '') + '" data-midi="' + m + '" x="' + x + '" y="' + pad +
                  '" width="' + ww + '" height="' + wh +
                  '" rx="4" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.4"/>';
        midiToX[m] = x + ww / 2;
        if (h && showLabels) {
          const name = frNames ? Theory.frName(Theory.noteName(m, true)) : Theory.noteName(m, false);
          const tcol = h.role === 'root' ? '#fff' : '#0b1b3a';
          labels += '<text x="' + (x + ww / 2) + '" y="' + (pad + wh - 12) +
                    '" text-anchor="middle" font-size="13" font-weight="700" fill="' + tcol + '" pointer-events="none">' +
                    esc(name) + '</text>';
        }
        if (fingers[m]) {
          labels += fingerBadge(x + ww / 2, pad + wh - 34, fingers[m], false);
        }
        whiteIndex++;
      }
    }

    // 2e passage : touches noires (par-dessus)
    whiteIndex = 0;
    for (let m = startMidi; whiteIndex < totalWhite; m++) {
      const pc = ((m % 12) + 12) % 12;
      if (isWhite(pc)) { whiteIndex++; continue; }
      // touche noire : positionnée entre deux blanches
      const prevWhiteIdx = whiteIndex - 1; // index de la blanche à gauche
      const x = pad + (prevWhiteIdx + 1) * ww - bw / 2;
      const h = hByMidi[m];
      let fill = '#1a1a1a';
      if (h) {
        fill = h.role === 'root' ? roleFill.root
             : (h.role === 'scale' ? roleFill.scale : roleFill.note);
      }
      blacks += '<rect class="bk' + (interactive ? ' clk' : '') + '" data-midi="' + m + '" x="' + x + '" y="' + pad +
                '" width="' + bw + '" height="' + bh +
                '" rx="3" fill="' + fill + '" stroke="#000" stroke-width="1.2"/>';
      midiToX[m] = x + bw / 2;
      if (h && showLabels) {
        const name = frNames ? Theory.frName(Theory.noteName(m, true)) : Theory.noteName(m, true);
        labels += '<text x="' + (x + bw / 2) + '" y="' + (pad + bh - 10) +
                  '" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" pointer-events="none">' +
                  esc(name) + '</text>';
      }
      if (fingers[m]) {
        labels += fingerBadge(x + bw / 2, pad + bh - 30, fingers[m], true);
      }
    }

    return '<svg class="kbd" viewBox="0 0 ' + W + ' ' + H + '" width="100%" ' +
           'preserveAspectRatio="xMidYMid meet" role="img" ' +
           'style="max-width:' + (opts.width || W) + 'px">' +
           whites + blacks + labels + '</svg>';
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Pastille de doigté (numéro dans un cercle)
  function fingerBadge(cx, cy, num, onBlack) {
    return '<g pointer-events="none">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="9" fill="#fff5c9" stroke="#7a5c00" stroke-width="1.2"/>' +
      '<text x="' + cx + '" y="' + (cy + 0.5) + '" text-anchor="middle" dominant-baseline="central" ' +
      'font-size="12" font-weight="800" fill="#5a4300">' + num + '</text></g>';
  }

  // Fabrique les objets highlight à partir d'une liste de MIDI (1er = fondamentale)
  function highlightFromMidis(midis, role) {
    return midis.map((m, i) => ({
      midi: m,
      role: (role === 'scale') ? (i === 0 || i === midis.length - 1 ? 'root' : 'scale') : (i === 0 ? 'root' : 'note')
    }));
  }

  // Choisit un startMidi qui englobe joliment un ensemble de MIDI
  function frameFor(midis, octaves) {
    octaves = octaves || 2;
    const lo = Math.min.apply(null, midis);
    // démarre sur le Do inférieur le plus proche
    let start = lo - (((lo % 12) + 12) % 12);
    const hi = Math.max.apply(null, midis);
    while (start + octaves * 12 <= hi) start -= 12 * 0; // garde-fou
    // élargit si besoin
    if (hi - start >= octaves * 12) octaves = Math.ceil((hi - start + 1) / 12);
    return { startMidi: start, octaves: octaves };
  }

  // Associe une liste de MIDI (grave->aigu) à un tableau de doigts
  function fingersMap(midis, arr) {
    const map = {};
    if (!arr) return map;
    const sorted = midis.slice().sort((a, b) => a - b);
    sorted.forEach((m, i) => { if (arr[i] != null) map[m] = arr[i]; });
    return map;
  }

  global.Keyboard = { render, highlightFromMidis, frameFor, fingersMap };
})(typeof window !== 'undefined' ? window : this);
