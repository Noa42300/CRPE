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
        whites += '<rect x="' + x + '" y="' + pad + '" width="' + ww + '" height="' + wh +
                  '" rx="4" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.4"/>';
        midiToX[m] = x + ww / 2;
        if (h && showLabels) {
          const name = frNames ? Theory.frName(Theory.noteName(m, true)) : Theory.noteName(m, false);
          const tcol = h.role === 'root' ? '#fff' : '#0b1b3a';
          labels += '<text x="' + (x + ww / 2) + '" y="' + (pad + wh - 12) +
                    '" text-anchor="middle" font-size="13" font-weight="700" fill="' + tcol + '">' +
                    esc(name) + '</text>';
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
      blacks += '<rect x="' + x + '" y="' + pad + '" width="' + bw + '" height="' + bh +
                '" rx="3" fill="' + fill + '" stroke="#000" stroke-width="1.2"/>';
      midiToX[m] = x + bw / 2;
      if (h && showLabels) {
        const name = frNames ? Theory.frName(Theory.noteName(m, true)) : Theory.noteName(m, true);
        labels += '<text x="' + (x + bw / 2) + '" y="' + (pad + bh - 10) +
                  '" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">' +
                  esc(name) + '</text>';
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

  global.Keyboard = { render, highlightFromMidis, frameFor };
})(typeof window !== 'undefined' ? window : this);
