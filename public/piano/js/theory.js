/* =========================================================================
   theory.js — Moteur de théorie musicale (notes, accords, gammes, tonalités)
   Aucune dépendance. Tout est calculé, rien n'est codé en dur inutilement.
   ========================================================================= */
(function (global) {
  'use strict';

  // 12 notes chromatiques, en dièses et en bémols
  const SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const FLAT  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  // Noms français (do ré mi…) pour l'affichage optionnel
  const FR = {
    'C': 'Do', 'C#': 'Do♯', 'Db': 'Ré♭', 'D': 'Ré', 'D#': 'Ré♯', 'Eb': 'Mi♭',
    'E': 'Mi', 'F': 'Fa', 'F#': 'Fa♯', 'Gb': 'Sol♭', 'G': 'Sol', 'G#': 'Sol♯',
    'Ab': 'La♭', 'A': 'La', 'A#': 'La♯', 'Bb': 'Si♭', 'B': 'Si'
  };

  // Familles d'accords : formule en demi-tons depuis la fondamentale
  const CHORDS = {
    'maj':   { name: 'Majeur',            suffix: '',      semis: [0, 4, 7],          degrees: ['1', '3', '5'] },
    'min':   { name: 'Mineur',            suffix: 'm',     semis: [0, 3, 7],          degrees: ['1', '♭3', '5'] },
    'dim':   { name: 'Diminué',           suffix: 'dim',   semis: [0, 3, 6],          degrees: ['1', '♭3', '♭5'] },
    'aug':   { name: 'Augmenté',          suffix: 'aug',   semis: [0, 4, 8],          degrees: ['1', '3', '♯5'] },
    'sus2':  { name: 'Suspendu 2',        suffix: 'sus2',  semis: [0, 2, 7],          degrees: ['1', '2', '5'] },
    'sus4':  { name: 'Suspendu 4',        suffix: 'sus4',  semis: [0, 5, 7],          degrees: ['1', '4', '5'] },
    '6':     { name: 'Sixte majeure',     suffix: '6',     semis: [0, 4, 7, 9],       degrees: ['1', '3', '5', '6'] },
    'm6':    { name: 'Sixte mineure',     suffix: 'm6',    semis: [0, 3, 7, 9],       degrees: ['1', '♭3', '5', '6'] },
    'maj7':  { name: 'Majeur 7',          suffix: 'maj7',  semis: [0, 4, 7, 11],      degrees: ['1', '3', '5', '7'] },
    '7':     { name: 'Septième (dom.)',   suffix: '7',     semis: [0, 4, 7, 10],      degrees: ['1', '3', '5', '♭7'] },
    'm7':    { name: 'Mineur 7',          suffix: 'm7',    semis: [0, 3, 7, 10],      degrees: ['1', '♭3', '5', '♭7'] },
    'm7b5':  { name: 'Mineur 7 ♭5',       suffix: 'm7♭5',  semis: [0, 3, 6, 10],      degrees: ['1', '♭3', '♭5', '♭7'] },
    'dim7':  { name: 'Diminué 7',         suffix: 'dim7',  semis: [0, 3, 6, 9],       degrees: ['1', '♭3', '♭5', '♭♭7'] },
    'add9':  { name: 'Add 9',             suffix: 'add9',  semis: [0, 4, 7, 14],      degrees: ['1', '3', '5', '9'] },
    '9':     { name: 'Neuvième (dom.)',   suffix: '9',     semis: [0, 4, 7, 10, 14],  degrees: ['1', '3', '5', '♭7', '9'] },
    'maj9':  { name: 'Majeur 9',          suffix: 'maj9',  semis: [0, 4, 7, 11, 14],  degrees: ['1', '3', '5', '7', '9'] },
    'm9':    { name: 'Mineur 9',          suffix: 'm9',    semis: [0, 3, 7, 10, 14],  degrees: ['1', '♭3', '5', '♭7', '9'] }
  };

  // Gammes : formule en demi-tons
  const SCALES = {
    'major':      { name: 'Majeure (Ionien)',   semis: [0, 2, 4, 5, 7, 9, 11] },
    'minor':      { name: 'Mineure naturelle',  semis: [0, 2, 3, 5, 7, 8, 10] },
    'harmonic':   { name: 'Mineure harmonique', semis: [0, 2, 3, 5, 7, 8, 11] },
    'melodic':    { name: 'Mineure mélodique',  semis: [0, 2, 3, 5, 7, 9, 11] },
    'dorian':     { name: 'Dorien',             semis: [0, 2, 3, 5, 7, 9, 10] },
    'phrygian':   { name: 'Phrygien',           semis: [0, 1, 3, 5, 7, 8, 10] },
    'lydian':     { name: 'Lydien',             semis: [0, 2, 4, 6, 7, 9, 11] },
    'mixolydian': { name: 'Mixolydien',         semis: [0, 2, 4, 5, 7, 9, 10] },
    'locrian':    { name: 'Locrien',            semis: [0, 1, 3, 5, 6, 8, 10] },
    'pentaMaj':   { name: 'Pentatonique maj.',  semis: [0, 2, 4, 7, 9] },
    'pentaMin':   { name: 'Pentatonique min.',  semis: [0, 3, 5, 7, 10] },
    'blues':      { name: 'Blues',              semis: [0, 3, 5, 6, 7, 10] }
  };

  // Cercle des quintes (sens horaire depuis Do)
  const CIRCLE = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];

  // Armures : nombre de dièses (+) ou bémols (-) pour chaque tonalité majeure
  const KEY_SIG = {
    'C': 0, 'G': 1, 'D': 2, 'A': 3, 'E': 4, 'B': 5, 'F#': 6, 'Db': -5,
    'Ab': -4, 'Eb': -3, 'Bb': -2, 'F': -1, 'Gb': -6, 'C#': 7
  };

  // Degrés diatoniques (qualité de l'accord de chaque degré)
  const DIATONIC = {
    major: [
      { rn: 'I',   type: 'maj',  seventh: 'maj7' },
      { rn: 'ii',  type: 'min',  seventh: 'm7' },
      { rn: 'iii', type: 'min',  seventh: 'm7' },
      { rn: 'IV',  type: 'maj',  seventh: 'maj7' },
      { rn: 'V',   type: 'maj',  seventh: '7' },
      { rn: 'vi',  type: 'min',  seventh: 'm7' },
      { rn: 'vii°', type: 'dim', seventh: 'm7b5' }
    ],
    minor: [
      { rn: 'i',   type: 'min',  seventh: 'm7' },
      { rn: 'ii°', type: 'dim',  seventh: 'm7b5' },
      { rn: 'III', type: 'maj',  seventh: 'maj7' },
      { rn: 'iv',  type: 'min',  seventh: 'm7' },
      { rn: 'v',   type: 'min',  seventh: 'm7' },
      { rn: 'VI',  type: 'maj',  seventh: 'maj7' },
      { rn: 'VII', type: 'maj',  seventh: '7' }
    ]
  };

  // Progressions d'accords courantes (par degrés, index 0-6)
  const PROGRESSIONS = {
    major: [
      { name: 'I – V – vi – IV', desc: 'La « pop » universelle (des milliers de tubes)', deg: [0, 4, 5, 3] },
      { name: 'ii – V – I',       desc: 'La cadence reine du jazz', deg: [1, 4, 0], sevenths: true },
      { name: 'I – vi – IV – V',  desc: 'Doo-wop / ballades années 50', deg: [0, 5, 3, 4] },
      { name: 'vi – IV – I – V',  desc: 'Variante émotionnelle très courante', deg: [5, 3, 0, 4] },
      { name: 'I – IV – V',       desc: 'Les 3 accords de base (blues, rock, folk)', deg: [0, 3, 4] },
      { name: 'I – IV – V – IV',  desc: 'Rock / boogie', deg: [0, 3, 4, 3] }
    ],
    minor: [
      { name: 'i – VI – III – VII', desc: 'La « pop mineure » (Despacito, etc.)', deg: [0, 5, 2, 6] },
      { name: 'i – iv – v',          desc: 'Cadence mineure classique', deg: [0, 3, 4] },
      { name: 'i – VII – VI – V',    desc: 'Descente andalouse (flamenco, épique)', deg: [0, 6, 5, 4] },
      { name: 'ii° – v – i',         desc: 'ii-V-i mineur (jazz)', deg: [1, 4, 0], sevenths: true }
    ]
  };

  // ---- Utilitaires ----------------------------------------------------------

  function noteName(midi, preferFlat) {
    const arr = preferFlat ? FLAT : SHARP;
    return arr[((midi % 12) + 12) % 12];
  }

  function pcIndex(name) {
    let i = SHARP.indexOf(name);
    if (i >= 0) return i;
    i = FLAT.indexOf(name);
    return i;
  }

  // Une tonalité préfère-t-elle les bémols ?
  function keyPrefersFlat(root, mode) {
    let ref = root;
    if (mode === 'minor') {
      // relative majeure = mineure + 3 demi-tons
      ref = SHARP[(pcIndex(root) + 3) % 12];
    }
    const sig = KEY_SIG[ref];
    if (sig === undefined) {
      // fallback : les noms bémols contiennent 'b'
      return root.indexOf('b') >= 0 || root.indexOf('♭') >= 0;
    }
    return sig < 0;
  }

  // Construit un accord : renvoie fondamentale, notes, notes MIDI, intervalles
  function buildChord(rootName, chordKey, octave) {
    octave = (octave == null) ? 4 : octave;
    const def = CHORDS[chordKey];
    const rootPc = pcIndex(rootName);
    const preferFlat = rootName.indexOf('b') >= 0 || rootName.indexOf('♭') >= 0;
    const rootMidi = 12 * (octave + 1) + rootPc;
    const midis = def.semis.map(s => rootMidi + s);
    const notes = midis.map(m => noteName(m, preferFlat));
    return {
      root: rootName,
      type: chordKey,
      def: def,
      label: rootName + def.suffix,
      notes: notes,
      degrees: def.degrees,
      midis: midis
    };
  }

  // Construit une gamme sur une octave (+ octave de fin)
  function buildScale(rootName, scaleKey, octave) {
    octave = (octave == null) ? 4 : octave;
    const def = SCALES[scaleKey];
    const rootPc = pcIndex(rootName);
    const preferFlat = keyPrefersFlat(rootName, scaleKey === 'minor' ? 'minor' : 'major') ||
                       rootName.indexOf('b') >= 0;
    const rootMidi = 12 * (octave + 1) + rootPc;
    const midis = def.semis.map(s => rootMidi + s);
    midis.push(rootMidi + 12); // note de tête
    const notes = midis.map(m => noteName(m, preferFlat));
    return {
      root: rootName,
      type: scaleKey,
      def: def,
      label: rootName + ' ' + def.name,
      notes: notes,
      midis: midis
    };
  }

  // Accords diatoniques d'une tonalité (« quels accords vont ensemble »)
  function diatonicChords(rootName, mode, withSevenths) {
    const scaleKey = (mode === 'minor') ? 'minor' : 'major';
    const scale = SCALES[scaleKey].semis;
    const rootPc = pcIndex(rootName);
    const preferFlat = keyPrefersFlat(rootName, mode);
    const table = DIATONIC[mode];
    return table.map((info, i) => {
      const degRootPc = (rootPc + scale[i]) % 12;
      const degRootName = noteName(degRootPc, preferFlat);
      const type = withSevenths ? info.seventh : info.type;
      const chord = buildChord(degRootName, type, 4);
      return {
        roman: info.rn,
        degree: i,
        root: degRootName,
        chord: chord,
        label: chord.label
      };
    });
  }

  // Détecte tous les accords connus qui contiennent exactement un set de pitch-classes
  function identifyChord(pcs) {
    const set = Array.from(new Set(pcs.map(p => ((p % 12) + 12) % 12))).sort((a, b) => a - b);
    const results = [];
    for (let root = 0; root < 12; root++) {
      for (const key in CHORDS) {
        const wanted = CHORDS[key].semis.map(s => (root + s) % 12).sort((a, b) => a - b);
        const wset = Array.from(new Set(wanted));
        if (wset.length === set.length && wset.every((v, i) => v === set[i])) {
          results.push(noteName(root, false) + CHORDS[key].suffix);
        }
      }
    }
    return results;
  }

  // Renversement d'un accord : on monte les n notes du bas d'une octave.
  // inversion 0 = position fondamentale, 1 = 1er renversement, etc.
  function invertChord(rootName, chordKey, octave, inversion) {
    const base = buildChord(rootName, chordKey, octave);
    const n = ((inversion % base.midis.length) + base.midis.length) % base.midis.length;
    let midis = base.midis.slice();
    let notes = base.notes.slice();
    let degrees = base.degrees.slice();
    for (let i = 0; i < n; i++) {
      midis.push(midis.shift() + 12);
      notes.push(notes.shift());
      degrees.push(degrees.shift());
    }
    // trie par hauteur pour l'affichage clavier
    const order = midis.map((m, i) => i).sort((a, b) => midis[a] - midis[b]);
    const bassDegree = degrees[order[0]];
    return {
      root: rootName, type: chordKey, def: base.def,
      label: base.label + (n ? ' / ' + notes[order[0]] : ''),
      inversion: n,
      bass: notes[order[0]], bassDegree: bassDegree,
      midis: order.map(i => midis[i]),
      notes: order.map(i => notes[i]),
      degrees: order.map(i => degrees[i])
    };
  }

  const INVERSION_NAMES = ['Position fondamentale', '1er renversement', '2e renversement', '3e renversement', '4e renversement'];

  // Doigté main droite pour un accord (nombre de notes -> doigts, du grave à l'aigu)
  function chordFingersRH(count) {
    if (count <= 3) return [1, 3, 5];
    if (count === 4) return [1, 2, 3, 5];
    return [1, 2, 3, 4, 5];
  }

  // Doigtés main droite (une octave montante) pour les gammes majeures usuelles.
  // Sources : doigtés standard du répertoire. null => on affiche un conseil générique.
  const MAJOR_FING_RH = {
    'C': [1, 2, 3, 1, 2, 3, 4, 5], 'G': [1, 2, 3, 1, 2, 3, 4, 5],
    'D': [1, 2, 3, 1, 2, 3, 4, 5], 'A': [1, 2, 3, 1, 2, 3, 4, 5],
    'E': [1, 2, 3, 1, 2, 3, 4, 5], 'B': [1, 2, 3, 1, 2, 3, 4, 5],
    'F': [1, 2, 3, 4, 1, 2, 3, 4]
  };
  const MINOR_FING_RH = { // mineure naturelle, quelques toniques sûres
    'A': [1, 2, 3, 1, 2, 3, 4, 5], 'E': [1, 2, 3, 1, 2, 3, 4, 5],
    'D': [1, 2, 3, 1, 2, 3, 4, 5], 'C': [1, 2, 3, 1, 2, 3, 4, 5]
  };
  function scaleFingersRH(rootName, scaleKey) {
    if (scaleKey === 'major') return MAJOR_FING_RH[rootName] || null;
    if (scaleKey === 'minor') return MINOR_FING_RH[rootName] || null;
    return null; // modes/pentas : conseil générique
  }

  // Intervalles (pour l'entraînement de l'oreille)
  const INTERVALS = [
    { semis: 1,  name: 'Seconde mineure', short: '2m' },
    { semis: 2,  name: 'Seconde majeure', short: '2M' },
    { semis: 3,  name: 'Tierce mineure',  short: '3m' },
    { semis: 4,  name: 'Tierce majeure',  short: '3M' },
    { semis: 5,  name: 'Quarte juste',    short: '4J' },
    { semis: 6,  name: 'Triton',          short: 'TT' },
    { semis: 7,  name: 'Quinte juste',    short: '5J' },
    { semis: 8,  name: 'Sixte mineure',   short: '6m' },
    { semis: 9,  name: 'Sixte majeure',   short: '6M' },
    { semis: 10, name: 'Septième mineure', short: '7m' },
    { semis: 11, name: 'Septième majeure', short: '7M' },
    { semis: 12, name: 'Octave',          short: '8' }
  ];

  function midiToFreq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  global.Theory = {
    SHARP, FLAT, FR, CHORDS, SCALES, CIRCLE, KEY_SIG, DIATONIC, PROGRESSIONS,
    INVERSION_NAMES, INTERVALS,
    noteName, pcIndex, keyPrefersFlat, buildChord, buildScale,
    invertChord, chordFingersRH, scaleFingersRH,
    diatonicChords, identifyChord, midiToFreq,
    frName: function (n) { return FR[n] || n; }
  };
})(typeof window !== 'undefined' ? window : this);
