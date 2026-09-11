/* =========================================================================
   app.js — Interface : Parcours, Accords, Gammes, Tonalités, Journal, Classeur.
   ========================================================================= */
(function () {
  'use strict';
  const T = window.Theory, K = window.Keyboard, A = window.Audio2;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const ROOTS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

  // Préférence : noms français (do ré mi) ?
  let frNames = load('frNames', false);

  // ------------------------------------------------------------ Navigation
  function nav(id) {
    $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + id));
    $$('nav.tabs button').forEach(b => b.classList.toggle('active', b.dataset.go === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    location.hash = id;
  }
  window.addEventListener('hashchange', () => {
    const id = location.hash.replace('#', '');
    if (id && $('#view-' + id)) nav(id);
  });

  // Ouvre un outil pré-réglé (utilisé par le programme jour par jour)
  function openChord(root, type, inv) { chordState.root = root; chordState.type = type; chordState.inv = inv || 0; renderChords(); nav('accords'); }
  function openScale(root, type) { scaleState.root = root; scaleState.type = type; renderScales(); nav('gammes'); }
  function openKey(root, mode) { keyState.root = root; keyState.mode = mode; renderKeys(); nav('tonalites'); }
  function openView(id) { nav(id); }

  // ------------------------------------------------------------ ACCORDS
  const chordState = { root: 'C', type: 'maj', inv: 0, fingers: false };
  function renderChords() {
    const c = $('#chord-body');
    const base = T.buildChord(chordState.root, chordState.type, 4);
    const nInv = base.midis.length;
    if (chordState.inv >= nInv) chordState.inv = 0;
    const chord = T.invertChord(chordState.root, chordState.type, 4, chordState.inv);
    const frame = K.frameFor(chord.midis, 2);
    const hi = K.highlightFromMidis(chord.midis, 'chord');
    const fingers = chordState.fingers ? K.fingersMap(chord.midis, T.chordFingersRH(chord.midis.length)) : {};
    const kbd = K.render({ startMidi: frame.startMidi, octaves: Math.max(2, frame.octaves), highlight: hi, fingers, frNames });

    const pills = chord.notes.map((n, i) =>
      '<div class="note-pill"><b>' + (frNames ? T.frName(n) : n) + '</b><small>' + chord.degrees[i] + '</small></div>'
    ).join('');

    const invChips = Array.from({ length: nInv }, (_, i) =>
      '<button class="chip ' + (i === chordState.inv ? 'active' : '') + '" data-inv="' + i + '">' +
      (i === 0 ? 'Fondamental' : i + (i === 1 ? 'er' : 'e') + ' renv.') + '</button>').join('');

    c.innerHTML =
      '<div class="controls no-print">' +
        field('Fondamentale', selectHtml('chord-root', ROOTS.map(r => opt(r, r === chordState.root, frNames ? T.frName(r) : r)))) +
        field('Type d\'accord', selectHtml('chord-type', Object.keys(T.CHORDS).map(k => opt(k, k === chordState.type, T.CHORDS[k].name)))) +
        '<button class="btn" id="chord-play">▶ Écouter</button>' +
        '<button class="btn ghost" id="chord-arp">↗ Arpège animé</button>' +
      '</div>' +
      '<div class="controls no-print" style="margin-top:10px">' +
        '<label class="field">Renversement<span class="chips" style="margin-top:2px">' + invChips + '</span></label>' +
        '<label class="field" style="justify-content:flex-end"><span class="chips" style="margin-top:2px"><button class="chip ' + (chordState.fingers ? 'active' : '') + '" id="chord-fing">👆 Doigtés</button></span></label>' +
      '</div>' +
      '<h2 style="margin-top:16px">' + esc(chord.label) + ' <span class="hint">— ' + esc(chord.def.name) + ' · ' + esc(T.INVERSION_NAMES[chord.inversion]) + '</span></h2>' +
      '<div class="kbd-wrap">' + kbd + '</div>' + legend('chord') +
      '<div class="notes-row">' + pills + '</div>' +
      '<p class="hint">Basse : ' + esc(frNames ? T.frName(chord.bass) : chord.bass) + ' (' + esc(chord.bassDegree) + ')  •  Intervalles : ' + base.degrees.join(' · ') + '</p>';

    $('#chord-root').onchange = e => { chordState.root = e.target.value; chordState.inv = 0; renderChords(); };
    $('#chord-type').onchange = e => { chordState.type = e.target.value; chordState.inv = 0; renderChords(); };
    $('#chord-play').onclick = () => A.playChord(chord.midis, 1.8);
    $('#chord-arp').onclick = () => animateArp($('#chord-body .kbd'), chord.midis, 0.28);
    $('#chord-fing').onclick = () => { chordState.fingers = !chordState.fingers; renderChords(); };
    $$('[data-inv]', c).forEach(b => b.onclick = () => { chordState.inv = +b.dataset.inv; renderChords(); });
  }

  // ------------------------------------------------------------ GAMMES
  const scaleState = { root: 'C', type: 'major', fingers: false };
  function renderScales() {
    const c = $('#scale-body');
    const sc = T.buildScale(scaleState.root, scaleState.type, 4);
    const frame = K.frameFor(sc.midis, 2);
    const hi = K.highlightFromMidis(sc.midis, 'scale');
    const fingArr = T.scaleFingersRH(scaleState.root, scaleState.type);
    const fingers = (scaleState.fingers && fingArr) ? K.fingersMap(sc.midis, fingArr) : {};
    const kbd = K.render({ startMidi: frame.startMidi, octaves: Math.max(2, frame.octaves), highlight: hi, fingers, frNames });

    const pills = sc.notes.map((n, i) =>
      '<div class="note-pill"><b>' + (frNames ? T.frName(n) : n) + '</b><small>' + (i === sc.notes.length - 1 ? '8' : (i + 1)) + '</small></div>'
    ).join('');

    const fingNote = scaleState.fingers
      ? (fingArr ? '<p class="hint">Doigté main droite (une octave montante). Main gauche : miroir.</p>'
                 : '<p class="hint">Doigté standard : pouce sur la tonique, passage du pouce après 3 puis 4 notes. (Numéros précis fournis pour les gammes majeures usuelles et La/Mi/Ré/Do mineur.)</p>')
      : '';

    const isPenta = scaleState.type === 'pentaMin' || scaleState.type === 'pentaMaj' || scaleState.type === 'blues';
    const q = encodeURIComponent('gamme ' + sc.def.name + ' piano ' + (isPenta ? 'impro' : 'doigté') + ' débutant');

    c.innerHTML =
      '<div class="controls no-print">' +
        field('Tonique', selectHtml('scale-root', ROOTS.map(r => opt(r, r === scaleState.root, frNames ? T.frName(r) : r)))) +
        field('Type de gamme', selectHtml('scale-type', Object.keys(T.SCALES).map(k => opt(k, k === scaleState.type, T.SCALES[k].name)))) +
        '<span class="chips"><button class="chip ' + (scaleState.fingers ? 'active' : '') + '" id="scale-fing">👆 Doigtés</button></span>' +
      '</div>' +
      '<h2 style="margin-top:16px">' + esc(sc.label) + '</h2>' +
      '<div class="kbd-wrap">' + kbd + '</div>' + legend('scale') +
      '<div class="notes-row">' + pills + '</div>' +
      '<p class="hint">Formule (demi-tons) : ' + sc.def.semis.join(' – ') + '</p>' + fingNote +
      '<h3>Sens de jeu — dans quel sens la jouer</h3>' +
      '<p class="hint">Travaille-la dans <b>tous les sens</b> : en <b>montant</b> (grave→aigu), en <b>descendant</b> (aigu→grave), en <b>aller-retour</b>, puis « en tierces » et « en arpège » pour délier les doigts.</p>' +
      '<div class="controls no-print">' +
        '<button class="btn small" id="sc-up">▶ Monter</button>' +
        '<button class="btn small" id="sc-down">▶ Descendre</button>' +
        '<button class="btn small" id="sc-updown">↕ Aller-retour</button>' +
        '<button class="btn ghost small" id="sc-thirds">▶ En tierces</button>' +
        '<button class="btn ghost small" id="sc-arp">▶ En arpège (1-3-5)</button>' +
      '</div>' +
      '<h3>Improvisation — un exemple que l\'appli joue</h3>' +
      '<p class="hint">' + (isPenta
        ? 'Cette gamme est parfaite pour improviser : lance un exemple, puis rejoue-le et modifie-le. Aucune fausse note possible.'
        : 'Improvise en restant sur ces notes. Écoute l\'exemple, puis invente le tien par-dessus la tonique.') + '</p>' +
      '<div class="controls no-print">' +
        '<button class="btn" id="sc-impro">🎲 Jouer une impro (animée)</button>' +
        '<a class="btn ghost small" href="https://www.youtube.com/results?search_query=' + q + '" target="_blank" rel="noopener">▶ Voir une vidéo (YouTube)</a>' +
      '</div>';

    const kb = () => $('#scale-body .kbd');
    $('#scale-root').onchange = e => { scaleState.root = e.target.value; renderScales(); };
    $('#scale-type').onchange = e => { scaleState.type = e.target.value; renderScales(); };
    $('#scale-fing').onclick = () => { scaleState.fingers = !scaleState.fingers; renderScales(); };
    $('#sc-up').onclick = () => animateScale(kb(), sc.midis, 0.28, false);
    $('#sc-down').onclick = () => animateArp(kb(), sc.midis.slice().reverse(), 0.28);
    $('#sc-updown').onclick = () => animateScale(kb(), sc.midis, 0.26, true);
    $('#sc-thirds').onclick = () => animateArp(kb(), scaleThirds(sc.midis), 0.22);
    $('#sc-arp').onclick = () => animateArp(kb(), scaleArpeggio(sc.midis), 0.26);
    $('#sc-impro').onclick = () => animateArp(kb(), improLick(sc.midis), 0.24);
  }
  // Gamme « en tierces » : 1-3, 2-4, 3-5… (délie les doigts)
  function scaleThirds(midis) {
    const out = [];
    for (let i = 0; i + 2 < midis.length; i++) { out.push(midis[i]); out.push(midis[i + 2]); }
    return out;
  }
  // Arpège (accord de la gamme) : degrés 1-3-5(-8)
  function scaleArpeggio(midis) {
    const idx = [0, 2, 4].filter(i => i < midis.length);
    const out = idx.map(i => midis[i]);
    out.push(midis[0] + 12);
    return out;
  }
  // Petit motif d'impro aléatoire dans la gamme (contour mélodique doux)
  function improLick(midis) {
    const pool = midis.concat(midis.slice(0, -1).map(m => m + 12)); // 2 octaves env.
    let i = Math.floor(Math.random() * Math.min(3, pool.length));
    const lick = [];
    for (let n = 0; n < 9; n++) {
      lick.push(pool[Math.max(0, Math.min(pool.length - 1, i))]);
      i += [-2, -1, 1, 1, 2, 2, 3][Math.floor(Math.random() * 7)];
      if (i < 0) i = 1; if (i > pool.length - 1) i = pool.length - 2;
    }
    lick.push(midis[0]); // on retombe sur la tonique
    return lick;
  }

  // ------------------------------------------------------------ TONALITÉS (harmonie)
  const keyState = { root: 'C', mode: 'major', sevenths: false };
  function renderKeys() {
    const c = $('#key-body');
    const dia = T.diatonicChords(keyState.root, keyState.mode, keyState.sevenths);

    const degCards = dia.map(d =>
      '<div class="deg-card" data-midis="' + d.chord.midis.join(',') + '">' +
        '<div class="rn">' + esc(d.roman) + '</div>' +
        '<div class="lbl">' + esc(frNames ? T.frName(d.root) + d.chord.def.suffix : d.chord.label) + '</div>' +
        '<div class="kbd-mini">' + K.render({
            startMidi: 48, octaves: 2,
            highlight: K.highlightFromMidis(d.chord.midis.map(m => 48 + ((m - 48) % 24 + 24) % 24), 'chord'),
            showLabels: false, width: 260
          }) + '</div>' +
      '</div>'
    ).join('');

    const progs = T.PROGRESSIONS[keyState.mode].map((p, i) => {
      const steps = p.deg.map(dg => '<div class="step">' + esc(dia[dg].chord.label) + '</div>').join('<span class="hint">→</span>');
      return '<div class="prog"><div class="meta"><b>' + esc(p.name) + '</b><small>' + esc(p.desc) + '</small>' +
             '<div class="steps" style="margin-top:8px">' + steps + '</div></div>' +
             '<button class="btn small" data-prog="' + i + '">▶ Écouter</button></div>';
    }).join('');

    c.innerHTML =
      '<div class="controls no-print">' +
        field('Tonalité', selectHtml('key-root', ROOTS.map(r => opt(r, r === keyState.root, frNames ? T.frName(r) : r)))) +
        field('Mode', selectHtml('key-mode', [opt('major', keyState.mode === 'major', 'Majeur'), opt('minor', keyState.mode === 'minor', 'Mineur')])) +
        '<label class="field">7e ?<span class="chips" style="margin-top:2px"><button class="chip ' + (keyState.sevenths ? '' : 'active') + '" data-sev="0">Triades</button><button class="chip ' + (keyState.sevenths ? 'active' : '') + '" data-sev="1">Accords de 7e</button></span></label>' +
      '</div>' +
      '<h2 style="margin-top:16px">Les accords qui vont ensemble en ' + esc(frNames ? T.frName(keyState.root) : keyState.root) + ' ' + (keyState.mode === 'major' ? 'majeur' : 'mineur') + '</h2>' +
      '<p class="hint">Ce sont les 7 accords « maison » de la tonalité. Ils sonnent bien entre eux : c\'est la base pour composer et improviser. Clique un accord pour l\'entendre.</p>' +
      '<div class="grid cols-7" style="margin-top:10px">' + degCards + '</div>' +
      '<h3>Progressions incontournables</h3>' + progs;

    $('#key-root').onchange = e => { keyState.root = e.target.value; renderKeys(); };
    $('#key-mode').onchange = e => { keyState.mode = e.target.value; renderKeys(); };
    $$('[data-sev]', c).forEach(b => b.onclick = () => { keyState.sevenths = b.dataset.sev === '1'; renderKeys(); });
    $$('.deg-card', c).forEach(el => el.onclick = () => {
      const midis = el.dataset.midis.split(',').map(Number);
      A.playChord(midis, 1.6);
    });
    $$('[data-prog]', c).forEach(b => b.onclick = () => {
      const p = T.PROGRESSIONS[keyState.mode][+b.dataset.prog];
      A.playProgression(p.deg.map(dg => dia[dg].chord.midis), 1.0);
    });
  }

  // ------------------------------------------------------------ CERCLE DES QUINTES
  function renderCircle() {
    const el = $('#circle-body');
    const cx = 210, cy = 210, rOuter = 178, rInner = 118;
    let svg = '<svg class="cof" viewBox="0 0 420 420" width="100%" style="max-width:420px">';
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rOuter + '" fill="none" stroke="#2e3766" stroke-width="1"/>';
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rInner + '" fill="none" stroke="#2e3766" stroke-width="1"/>';
    T.CIRCLE.forEach((maj, i) => {
      const ang = (i / 12) * 2 * Math.PI - Math.PI / 2;
      const ox = cx + Math.cos(ang) * (rOuter - 26);
      const oy = cy + Math.sin(ang) * (rOuter - 26);
      const ix = cx + Math.cos(ang) * (rInner - 22);
      const iy = cy + Math.sin(ang) * (rInner - 22);
      const rel = T.noteName((T.pcIndex(maj) + 9) % 12, maj.indexOf('b') >= 0);
      svg += '<text x="' + ox + '" y="' + oy + '" text-anchor="middle" dominant-baseline="central" font-size="21" font-weight="800" fill="#eef1ff" data-key="' + maj + '" data-mode="major">' + esc(frNames ? T.frName(maj) : maj) + '</text>';
      svg += '<text x="' + ix + '" y="' + iy + '" text-anchor="middle" dominant-baseline="central" font-size="14" font-weight="700" fill="#a9b2de" data-key="' + rel + '" data-mode="minor">' + esc((frNames ? T.frName(rel) : rel)) + 'm</text>';
    });
    svg += '<text x="210" y="205" text-anchor="middle" font-size="12" fill="#a9b2de">Majeur</text>';
    svg += '<text x="210" y="222" text-anchor="middle" font-size="11" fill="#6a75ad">min. relatives</text>';
    svg += '</svg>';
    el.innerHTML = '<div class="circle-wrap">' + svg + '</div>' +
      '<p class="hint" style="text-align:center">Les tonalités voisines (une quinte d\'écart) partagent presque toutes leurs notes : on module facilement de l\'une à l\'autre. Clique une tonalité pour l\'ouvrir dans « Tonalités ».</p>';
    $$('text[data-key]', el).forEach(t => t.onclick = () => {
      keyState.root = t.dataset.key.replace('m', ''); keyState.mode = t.dataset.mode;
      keyState.root = t.dataset.key; renderKeys(); nav('tonalites');
    });
  }

  // ------------------------------------------------------------ PROGRAMME (jour par jour)
  // Chaque séance = une petite dose : une suite d'accords, une gamme, un objectif.
  // Si c'est dur, on la garde plusieurs jours (bouton « je continue »).
  const SEANCES = [
    { phase: 'Phase 1 · Repères & accords majeurs', title: 'Repérage du clavier + accord de Do majeur',
      goal: 'Nommer les notes sans hésiter, plaquer Do majeur (Do-Mi-Sol) main droite.',
      tasks: [{ label: 'Voir l\'accord Do majeur', go: ['chord', 'C', 'maj'] }, { label: 'Écouter la gamme de Do', go: ['scale', 'C', 'major'] }],
      tip: 'Repère les groupes de 2 et 3 touches noires : Do est juste à gauche du groupe de 2.' },
    { phase: 'Phase 1 · Repères & accords majeurs', title: 'Accords Sol et Fa majeurs',
      goal: 'Plaquer Sol (Sol-Si-Ré) et Fa (Fa-La-Do) proprement.',
      tasks: [{ label: 'Sol majeur', go: ['chord', 'G', 'maj'] }, { label: 'Fa majeur', go: ['chord', 'F', 'maj'] }],
      tip: 'Même « forme » que Do : 4 demi-tons puis 3. La main garde la même géométrie.' },
    { phase: 'Phase 1 · Repères & accords majeurs', title: 'Enchaîner Do → Fa → Sol (I–IV–V)',
      goal: 'Passer entre les 3 accords sans regarder, en rythme régulier.',
      tasks: [{ label: 'Voir I–IV–V en Do', go: ['key', 'C', 'major'] }],
      tip: 'C\'est la base du blues, du rock et de la variété. Boucle-les 5 minutes.' },
    { phase: 'Phase 1 · Repères & accords majeurs', title: 'Accords majeurs La, Mi, Ré',
      goal: 'Compléter les 6 accords majeurs les plus courants.',
      tasks: [{ label: 'La majeur', go: ['chord', 'A', 'maj'] }, { label: 'Mi majeur', go: ['chord', 'E', 'maj'] }, { label: 'Ré majeur', go: ['chord', 'D', 'maj'] }],
      tip: 'Ces accords ont des touches noires : vise le bord des noires, pas le fond.' },
    { phase: 'Phase 1 · Repères & accords majeurs', title: 'I–IV–V en Sol majeur',
      goal: 'Transposer la suite d\'accords dans une nouvelle tonalité.',
      tasks: [{ label: 'I–IV–V en Sol', go: ['key', 'G', 'major'] }],
      tip: 'Sol-Do-Ré. Si tu retrouves les mêmes formes, c\'est gagné.' },

    { phase: 'Phase 2 · Accords mineurs', title: 'La mineur & Mi mineur',
      goal: 'Sentir la différence majeur/mineur (la tierce descend d\'un demi-ton).',
      tasks: [{ label: 'La mineur', go: ['chord', 'A', 'min'] }, { label: 'Mi mineur', go: ['chord', 'E', 'min'] }],
      tip: 'Mineur = plus « triste ». Compare Do majeur et La mineur à l\'oreille.' },
    { phase: 'Phase 2 · Accords mineurs', title: 'Ré mineur + suite Do–Lam–Fa–Sol',
      goal: 'Mélanger majeurs et mineurs dans une progression.',
      tasks: [{ label: 'Ré mineur', go: ['chord', 'D', 'min'] }, { label: 'La suite en Do (I–vi–IV–V)', go: ['key', 'C', 'major'] }],
      tip: 'Do–Lam–Fa–Sol : la progression des ballades. Joue-la en boucle.' },
    { phase: 'Phase 2 · Accords mineurs', title: 'La progression pop I–V–vi–IV',
      goal: 'Maîtriser LA suite la plus jouée au monde.',
      tasks: [{ label: 'Ouvrir en Do', go: ['key', 'C', 'major'] }],
      tip: 'Do–Sol–Lam–Fa. Des milliers de tubes tiennent là-dessus.' },
    { phase: 'Phase 2 · Accords mineurs', title: 'Renversements de Do, Fa, Sol',
      goal: 'Lier les accords sans sauter la main partout.',
      tasks: [{ label: 'Do majeur (teste les renversements)', go: ['chord', 'C', 'maj'] }, { label: 'Fa majeur', go: ['chord', 'F', 'maj'] }],
      tip: 'Dans l\'onglet Accords, clique « 1er renv. », « 2e renv. » : la main bouge à peine.' },

    { phase: 'Phase 3 · Gammes & doigtés', title: 'Gamme de Do majeur (doigtés)',
      goal: 'Monter/descendre la gamme main droite avec le bon doigté.',
      tasks: [{ label: 'Gamme de Do + doigtés', go: ['scale', 'C', 'major'] }],
      tip: 'Doigté 1-2-3, passage du pouce, 1-2-3-4-5. Lentement d\'abord.' },
    { phase: 'Phase 3 · Gammes & doigtés', title: 'Gamme de Sol majeur',
      goal: 'Une gamme avec un Fa♯ : gérer la touche noire.',
      tasks: [{ label: 'Gamme de Sol', go: ['scale', 'G', 'major'] }],
      tip: 'Même doigté que Do. Seul le Fa devient Fa♯.' },
    { phase: 'Phase 3 · Gammes & doigtés', title: 'Gamme de Fa majeur',
      goal: 'Gérer un doigté légèrement différent (Si♭).',
      tasks: [{ label: 'Gamme de Fa', go: ['scale', 'F', 'major'] }],
      tip: 'Le doigté de Fa change un peu : suis les numéros affichés.' },
    { phase: 'Phase 3 · Gammes & doigtés', title: 'Gamme de La mineur',
      goal: 'La gamme mineure de base (relative de Do majeur).',
      tasks: [{ label: 'Gamme de La mineur', go: ['scale', 'A', 'minor'] }],
      tip: 'Mêmes touches blanches que Do majeur, mais on part de La.' },
    { phase: 'Phase 3 · Gammes & doigtés', title: 'Pentatonique mineure de La (impro)',
      goal: 'La gamme « qui sonne toujours bien » pour improviser.',
      tasks: [{ label: 'Pentatonique de La', go: ['scale', 'A', 'pentaMin'] }],
      tip: '5 notes seulement. Improvise dessus par-dessus un La mineur.' },

    { phase: 'Phase 4 · Harmonie & tonalités', title: 'Les 7 accords de Do majeur',
      goal: 'Connaître tous les accords « maison » d\'une tonalité.',
      tasks: [{ label: 'Tonalité de Do majeur', go: ['key', 'C', 'major'] }],
      tip: 'I ii iii IV V vi vii°. Ce sont eux qui sonnent bien ensemble.' },
    { phase: 'Phase 4 · Harmonie & tonalités', title: 'La cadence ii–V–I',
      goal: 'La progression reine du jazz et de la variété.',
      tasks: [{ label: 'Ouvrir Do majeur (passe en accords de 7e)', go: ['key', 'C', 'major'] }],
      tip: 'Dans Tonalités, active « Accords de 7e » : Ré m7 – Sol7 – Do maj7.' },
    { phase: 'Phase 4 · Harmonie & tonalités', title: 'Tonalité de La mineur',
      goal: 'Explorer une tonalité mineure et sa couleur.',
      tasks: [{ label: 'Tonalité de La mineur', go: ['key', 'A', 'minor'] }],
      tip: 'Essaie i–VI–III–VII : la « pop mineure » moderne.' },
    { phase: 'Phase 4 · Harmonie & tonalités', title: 'Le cercle des quintes',
      goal: 'Comprendre comment les tonalités sont reliées.',
      tasks: [{ label: 'Ouvrir le cercle des quintes', go: ['view', 'cercle'] }],
      tip: 'Les tonalités voisines partagent presque toutes leurs notes.' },

    { phase: 'Phase 5 · Couleur & style', title: 'Accords de 7e (maj7, m7, 7)',
      goal: 'Ajouter de la couleur : la base du son « moderne/émotionnel ».',
      tasks: [{ label: 'Do maj7', go: ['chord', 'C', 'maj7'] }, { label: 'Ré m7', go: ['chord', 'D', 'm7'] }, { label: 'Sol 7', go: ['chord', 'G', '7'] }],
      tip: 'C\'est ce qui donne le grain « Sofiane Pamar » aux accords.' },
    { phase: 'Phase 5 · Couleur & style', title: 'add9 & sus (couleurs modernes)',
      goal: 'Enrichir sans complexifier : des accords ouverts et lumineux.',
      tasks: [{ label: 'Do add9', go: ['chord', 'C', 'add9'] }, { label: 'Ré sus4', go: ['chord', 'D', 'sus4'] }],
      tip: 'Remplace un accord simple par sa version add9 : écoute la différence.' },
    { phase: 'Phase 5 · Couleur & style', title: 'Accompagnement main gauche',
      goal: 'Basse + accord : main gauche qui soutient, main droite qui chante.',
      tasks: [{ label: 'Repartir d\'une tonalité', go: ['key', 'C', 'major'] }],
      tip: 'Main gauche : joue la fondamentale grave, puis l\'accord. Boucle.' },
    { phase: 'Phase 5 · Couleur & style', title: 'Repiquer un morceau à l\'oreille',
      goal: 'Utiliser ton oreille de guitariste pour trouver les accords.',
      tasks: [{ label: 'Reconnaître un accord', go: ['view', 'reconnaissance'] }, { label: 'Entraîner l\'oreille', go: ['view', 'oreille'] }],
      tip: 'Trouve la tonique, teste I–V–vi–IV : 8 fois sur 10 ça colle.' },
    { phase: 'Phase 5 · Couleur & style', title: 'Improviser & composer',
      goal: 'Poser une mélodie sur une progression que tu inventes.',
      tasks: [{ label: 'Pentatonique pour improviser', go: ['scale', 'A', 'pentaMin'] }, { label: 'Choisir une tonalité', go: ['key', 'C', 'major'] }],
      tip: 'Enregistre-toi, réécoute, corrige. C\'est là qu\'on progresse le plus vite.' }
  ];

  // Un morceau / exercice pour CHAQUE séance (crescendo). On encode des suites
  // d'accords ou des mélodies (données publiques), jouables dans l'appli ; le
  // lien pointe vers une RECHERCHE YouTube (jamais un lien mort).
  const SONGS = {
    1:  { title: 'Au clair de la lune', artist: 'traditionnel', level: 'Très facile', why: 'Ta première vraie mélodie : rien que Do-Ré-Mi-Fa, main droite.', melody: ['C4', 'C4', 'C4', 'D4', 'E4', 'D4', 'C4', 'E4', 'D4', 'D4', 'C4'], yt: 'au clair de la lune piano tuto débutant lent' },
    2:  { title: 'Frère Jacques', artist: 'traditionnel', level: 'Très facile', why: 'Une mélodie que tout le monde connaît, pour enchaîner les notes.', melody: ['C4', 'D4', 'E4', 'C4', 'C4', 'D4', 'E4', 'C4', 'E4', 'F4', 'G4', 'E4', 'F4', 'G4'], yt: 'frère jacques piano tuto débutant' },
    3:  { title: 'La Bamba', artist: 'Ritchie Valens', level: 'Très facile', why: 'Rien que Do–Fa–Sol, en boucle.', chords: [['C', 'maj'], ['F', 'maj'], ['G', 'maj']], yt: 'tuto piano La Bamba accords débutant' },
    4:  { title: 'Wild Thing', artist: 'The Troggs', level: 'Facile', why: 'La–Ré–Mi (I-IV-V en La) : tes nouveaux accords majeurs.', chords: [['A', 'maj'], ['D', 'maj'], ['E', 'maj']], yt: 'Wild Thing piano chords tuto' },
    5:  { title: "Knockin' on Heaven's Door", artist: 'Bob Dylan', level: 'Facile', why: 'Sol–Ré–Lam–Do : dans la foulée du I–IV–V en Sol.', chords: [['G', 'maj'], ['D', 'maj'], ['A', 'min'], ['C', 'maj']], yt: 'tuto piano Knockin on Heavens Door accords' },
    6:  { title: 'Zombie', artist: 'The Cranberries', level: 'Facile', why: 'Mi mineur + Do + Sol + Ré : tes premiers mineurs en situation.', chords: [['E', 'min'], ['C', 'maj'], ['G', 'maj'], ['D', 'maj']], yt: 'tuto piano Zombie Cranberries accords' },
    7:  { title: 'Stand By Me', artist: 'Ben E. King', level: 'Facile', why: "C'est exactement Do–Lam–Fa–Sol.", chords: [['C', 'maj'], ['A', 'min'], ['F', 'maj'], ['G', 'maj']], yt: 'tuto piano Stand By Me accords débutant' },
    8:  { title: 'Let It Be', artist: 'The Beatles', level: 'Facile', why: 'La progression pop I–V–vi–IV que tu viens de voir.', chords: [['C', 'maj'], ['G', 'maj'], ['A', 'min'], ['F', 'maj']], yt: 'tuto piano Let It Be accords débutant' },
    9:  { title: 'Someone Like You', artist: 'Adele', level: 'Intermédiaire', why: 'Mêmes 4 accords, mais avec des renversements pour bien les lier.', chords: [['C', 'maj'], ['G', 'maj'], ['A', 'min'], ['F', 'maj']], yt: 'tuto piano Someone Like You accords renversements' },
    10: { title: 'Ode à la joie', artist: 'Beethoven', level: 'Facile', why: 'Toute la mélodie tient dans la gamme de Do : parfait après le travail de gamme.', melody: ['E4', 'E4', 'F4', 'G4', 'G4', 'F4', 'E4', 'D4', 'C4', 'C4', 'D4', 'E4', 'E4', 'D4', 'D4'], yt: 'ode à la joie piano débutant main droite' },
    11: { title: 'Amazing Grace', artist: 'traditionnel', level: 'Facile', why: 'Une ballade en Sol, avec la gamme que tu viens de voir.', chords: [['G', 'maj'], ['C', 'maj'], ['D', 'maj']], yt: 'amazing grace piano facile sol majeur' },
    12: { title: 'Exercice : gamme de Fa', artist: 'entraînement', level: 'Facile', why: 'Monte et descends la gamme de Fa lentement, puis regarde le doigté en vidéo.', yt: 'gamme de Fa majeur doigté piano débutant' },
    13: { title: 'Hallelujah', artist: 'Leonard Cohen', level: 'Intermédiaire', why: 'Do, Lam, Fa, Sol, Mim : tout ce que tu connais, en une ballade.', chords: [['C', 'maj'], ['A', 'min'], ['F', 'maj'], ['G', 'maj'], ['E', 'min']], yt: 'tuto piano Hallelujah accords débutant' },
    14: { title: 'Impro pentatonique', artist: 'à toi de jouer', level: 'Facile', why: 'Improvise : joue ces 5 notes dans le désordre par-dessus un La mineur. Aucune fausse note possible.', melody: ['A4', 'C5', 'D5', 'E5', 'D5', 'C5', 'A4', 'C5', 'A4'], yt: 'impro piano pentatonique la mineur débutant' },
    15: { title: 'No Woman No Cry', artist: 'Bob Marley', level: 'Intermédiaire', why: 'Les 7 accords de Do majeur en action (I–V–vi–IV).', chords: [['C', 'maj'], ['G', 'maj'], ['A', 'min'], ['F', 'maj']], yt: 'No Woman No Cry piano chords tuto' },
    16: { title: 'Autumn Leaves (Les Feuilles mortes)', artist: 'standard jazz', level: 'Intermédiaire', why: 'Le ii–V–I en situation réelle, avec des accords de 7e.', chords: [['D', 'm7'], ['G', '7'], ['C', 'maj7'], ['A', 'm7']], yt: 'tuto piano Autumn Leaves ii V I débutant' },
    17: { title: 'Despacito (version étude)', artist: 'Luis Fonsi', level: 'Intermédiaire', why: 'i–VI–III–VII en La mineur (adapté en touches blanches).', chords: [['A', 'min'], ['F', 'maj'], ['C', 'maj'], ['G', 'maj']], yt: 'tuto piano Despacito accords' },
    18: { title: 'Le cercle des quintes en vidéo', artist: 'théorie', level: 'Intermédiaire', why: 'Regarde comment on passe d\'une tonalité à sa voisine (une quinte).', yt: 'cercle des quintes expliqué simplement piano' },
    19: { title: 'River Flows in You', artist: 'Yiruma', level: 'Avancé', goal: true, why: 'LE morceau piano « émotionnel » — ton objectif rêvé. Accords de 7e et arpèges.', chords: [['A', 'maj'], ['E', 'maj'], ['F#', 'min'], ['D', 'maj']], yt: 'tuto piano River Flows in You facile' },
    20: { title: 'Wonderwall', artist: 'Oasis', level: 'Intermédiaire', why: 'Le morceau roi des accords sus / add9.', chords: [['E', 'm7'], ['G', 'maj'], ['D', 'sus4'], ['C', 'add9']], yt: 'Wonderwall piano chords tuto' },
    21: { title: 'Accompagnement main gauche', artist: 'entraînement', level: 'Intermédiaire', why: 'Main gauche : basse puis accord, en boucle. La droite chante par-dessus.', chords: [['C', 'maj'], ['G', 'maj'], ['A', 'min'], ['F', 'maj']], yt: 'accompagnement piano main gauche basse accord débutant' },
    22: { title: 'Perfect', artist: 'Ed Sheeran', level: 'Intermédiaire', why: 'Repique-le à l\'oreille : I–vi–IV–V, tu connais déjà tout.', chords: [['C', 'maj'], ['A', 'min'], ['F', 'maj'], ['G', 'maj']], yt: 'tuto piano Perfect Ed Sheeran accords' },
    23: { title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', level: 'Avancé', goal: true, why: 'Inspiration compo : accords simples, énorme émotion. Analyse-la puis compose la tienne.', chords: [['A', 'min'], ['F', 'maj'], ['C', 'maj'], ['G', 'maj']], yt: 'tuto piano Nuvole Bianche facile' }
  };
  function noteToMidi(s) { const m = String(s).match(/^([A-G][#b]?)(\d)$/); return m ? 12 * (+m[2] + 1) + T.pcIndex(m[1]) : 60; }

  // Explication courte (2-3 phrases) pour chaque séance — « en clair ».
  const EXPLAIN = {
    1: "Le piano répète toujours le même motif de 12 touches. Repère Do juste avant chaque groupe de 2 touches noires : tout en découle. Un accord de Do majeur, c'est 3 notes ensemble : Do, Mi, Sol.",
    2: "Un accord majeur se construit toujours pareil : la note de base, puis on saute pour prendre la 3e et la 5e note au-dessus. Sol majeur = Sol-Si-Ré, Fa majeur = Fa-La-Do. Même geste de main, déplacé ailleurs.",
    3: "Ces trois accords sont les piliers d'une tonalité : avec eux seuls tu accompagnes des centaines de chansons. On les note I, IV, V (des numéros pour la « place » de chaque accord). Enchaîne-les en boucle, main détendue.",
    4: "Mêmes règles, mais ces accords utilisent des touches noires. Vise le bord avant des noires pour rester fluide. Tu couvres maintenant les 6 accords majeurs les plus fréquents.",
    5: "Transposer, c'est jouer la même idée en partant d'une autre note. Le I-IV-V devient ici Sol-Do-Ré. Si tu retrouves les mêmes formes de main, c'est que la logique est acquise.",
    6: "Un accord mineur sonne plus doux/triste : on abaisse juste la note du milieu d'un demi-ton. La mineur = La-Do-Mi. Compare-le à Do majeur : mêmes voisins, couleur opposée.",
    7: "Mélanger majeurs et mineurs crée du relief. La suite Do-Lam-Fa-Sol est le moteur d'un paquet de ballades. Le petit « m » d'un accord veut simplement dire mineur.",
    8: "Quatre accords, des milliers de tubes. Chiffres romains majuscules (I, IV, V) = accords majeurs, minuscules (vi) = mineurs. Do-Sol-Lam-Fa : joue-la jusqu'à l'avoir dans les doigts.",
    9: "Un renversement, c'est le même accord avec les notes rangées dans un autre ordre. Ça évite de sauter la main partout : les accords s'enchaînent en douceur. Teste les boutons « 1er / 2e renv. » dans l'onglet Accords.",
    10: "Une gamme, c'est les 7 notes d'une tonalité jouées à la suite. Le doigté (numéros des doigts) sert à passer le pouce au bon endroit sans t'emmêler. Va lentement et régulier avant d'accélérer.",
    11: "La même gamme décalée : un seul changement, le Fa devient Fa♯ (une touche noire). Le doigté, lui, ne bouge pas. C'est ta 2e tonalité.",
    12: "Ici le doigté change un peu à cause du Si♭. Suis simplement les numéros affichés sur les touches. Travaille la main droite seule d'abord.",
    13: "La gamme mineure de base. Elle utilise les mêmes touches blanches que Do majeur, mais commence sur La : d'où sa couleur mélancolique. On dit qu'elle est la « relative mineure » de Do.",
    14: "Une gamme de 5 notes qui sonne toujours bien : difficile d'y faire une fausse note, parfaite pour improviser. Lance un La mineur et balade-toi librement dedans.",
    15: "Chaque tonalité a 7 accords « maison » (ses degrés) qui sonnent bien ensemble. On les numérote de I à VII. Les connaître, c'est pouvoir accompagner ou composer sans chercher au hasard.",
    16: "La cadence la plus utilisée en jazz et variété : elle « ramène à la maison » (l'accord I). En Do : Ré m7 – Sol7 – Do maj7. Le « 7 » ajoute une note qui crée une petite tension puis une détente.",
    17: "On explore une tonalité mineure et ses accords. La suite i-VI-III-VII est la « pop mineure » moderne. Écoute la différence d'ambiance avec le majeur.",
    18: "Une carte qui range les tonalités par proximité. Deux tonalités voisines partagent presque toutes leurs notes : on passe de l'une à l'autre sans heurt. C'est un outil clé pour composer et moduler.",
    19: "Ajouter une 4e note (la 7e) enrichit la couleur : c'est le son « moderne/émotionnel ». maj7 = doux et lumineux, m7 = velouté, 7 = un peu tendu. C'est la base du style que tu vises.",
    20: "D'autres couleurs faciles : add9 ajoute une note brillante, sus remplace la 3e par une note « en suspension ». Elles ouvrent le son sans compliquer la main. Remplace un accord simple par sa version add9 pour entendre la différence.",
    21: "On répartit le travail : la main gauche pose la basse (note grave) puis l'accord, la main droite chante la mélodie. C'est la base de tout accompagnement au piano. Commence très lentement, en boucle.",
    22: "Trouver les accords d'une chanson rien qu'en écoutant. Repère d'abord la note de base (la tonique), puis teste I-V-vi-IV : ça colle très souvent. Ton oreille de guitariste est un vrai atout ici.",
    23: "On assemble tout : une progression + une mélodie = une composition. Improvise sur la pentatonique par-dessus tes accords et garde ce qui te plaît. Enregistre-toi, réécoute, ajuste : c'est là qu'on progresse le plus."
  };

  // Petit lexique : le vocabulaire de base, une ligne chacun.
  const LEXIQUE = [
    ['Fondamentale', "la note qui donne son nom à l'accord (le « Do » de Do majeur)."],
    ['Tierce', "la note du milieu de l'accord ; c'est elle qui décide majeur (gai) ou mineur (triste)."],
    ['Quinte', "la note du haut de l'accord de base ; elle le rend stable et plein."],
    ['Septième (7e)', "une note en plus qui ajoute de la couleur (accords maj7, m7, 7)."],
    ['Accord', "au moins 3 notes jouées en même temps."],
    ['Majeur / mineur', "les deux couleurs de base ; mineur = plus sombre (tierce abaissée d'un demi-ton)."],
    ['Renversement', "le même accord, notes dans un autre ordre, pour mieux lier les accords."],
    ['Gamme', "les 7 notes d'une tonalité jouées à la suite."],
    ['Tonique', "la note de départ d'une gamme / tonalité (la « maison »)."],
    ['Tonalité', "l'ensemble de notes et d'accords organisés autour d'une tonique (ex : Do majeur)."],
    ['Degré', "la « place » d'un accord dans la tonalité, notée de I à VII."],
    ['Diatonique', "qui appartient à la tonalité (ses 7 accords « maison »)."],
    ['Cadence', "un enchaînement d'accords qui conclut une phrase (ex : ii-V-I)."],
    ['Arpège', "les notes d'un accord jouées l'une après l'autre, pas ensemble."],
    ['Demi-ton', "le plus petit écart entre deux touches voisines (blanche ↔ noire)."],
    ['Pentatonique', "gamme de 5 notes, idéale pour improviser."],
    ['Transposer', "rejouer la même chose en partant d'une autre note."]
  ];
  function lexiqueHTML() {
    return '<details class="card no-print" style="margin-top:16px"><summary style="cursor:pointer;font-weight:700">📖 Petit lexique (tierce, quinte, cadence…)</summary>' +
      '<div style="margin-top:10px">' + LEXIQUE.map(l =>
        '<p style="margin:6px 0"><b>' + esc(l[0]) + '</b> : ' + esc(l[1]) + '</p>').join('') + '</div></details>';
  }

  function songMidis(chords) { return chords.map(c => T.buildChord(c[0], c[1], 4).midis); }
  function songHTML(song) {
    if (!song) return '';
    const chips = song.chords ? song.chords.map((c, i) =>
      '<button class="chip" data-song-chord="' + i + '">' + esc(T.buildChord(c[0], c[1], 4).label) + '</button>').join(' ') : '';
    const q = encodeURIComponent(song.yt);
    return '<div class="card" style="background:var(--bg2);border-left:4px solid var(--accent2);margin-top:12px">' +
      '<div class="rn" style="color:var(--muted);font-weight:700;font-size:12px;letter-spacing:1px">🎵 EN MUSIQUE' +
      '<span class="badge" style="margin-left:8px">' + esc(song.level) + '</span>' + (song.goal ? '<span class="badge" style="margin-left:6px">🌟 objectif</span>' : '') + '</div>' +
      '<h3 style="margin:4px 0;color:var(--text);text-transform:none;letter-spacing:0;font-size:16px">' + esc(song.title) + ' <span class="hint">— ' + esc(song.artist) + '</span></h3>' +
      '<p style="margin:0 0 8px">' + esc(song.why) + '</p>' +
      (chips ? '<div class="chips" style="margin-bottom:10px">' + chips + '</div>' : '') +
      '<div class="controls no-print">' +
        (song.chords ? '<button class="btn small" id="song-play">▶ Jouer les accords</button> ' : '') +
        (song.melody ? '<button class="btn small" id="song-melody">▶ Jouer la mélodie</button> ' : '') +
        '<a class="btn ghost small" href="https://www.youtube.com/results?search_query=' + q + '" target="_blank" rel="noopener">▶ Voir la vidéo (YouTube)</a>' +
      '</div></div>';
  }

  function dispatchGo(go) {
    if (go[0] === 'chord') openChord(go[1], go[2]);
    else if (go[0] === 'scale') openScale(go[1], go[2]);
    else if (go[0] === 'key') openKey(go[1], go[2]);
    else if (go[0] === 'view') openView(go[1]);
  }

  function renderProgramme() {
    const el = $('#programme-body');
    const prog = load('prog', { cur: 1, done: {} });
    if (prog.cur < 1) prog.cur = 1;
    if (prog.cur > SEANCES.length) prog.cur = SEANCES.length;
    const idx = prog.cur - 1;
    const s = SEANCES[idx];
    const doneCount = Object.keys(prog.done).length;
    const pct = Math.round(doneCount / SEANCES.length * 100);

    const tasks = s.tasks.map((t, i) =>
      '<button class="btn ' + (i ? 'ghost' : '') + ' small" data-go="' + idx + '-' + i + '">' + esc(t.label) + ' ➜</button>').join(' ');

    const list = SEANCES.map((x, i) => {
      const st = prog.done[i + 1] ? '✅' : (i + 1 === prog.cur ? '▶️' : '·');
      return '<div class="log-row" style="cursor:pointer" data-seance="' + (i + 1) + '">' +
        '<span class="date">' + st + ' Séance ' + (i + 1) + '</span>' +
        '<span>' + esc(x.title) + '</span>' +
        '<span class="hint" style="font-size:11px">' + esc(x.phase.split('·')[0].trim()) + '</span></div>';
    }).join('');

    el.innerHTML =
      '<div class="stat-row">' +
        '<div class="stat"><b>' + prog.cur + '</b><small>séance en cours</small></div>' +
        '<div class="stat"><b>' + doneCount + ' / ' + SEANCES.length + '</b><small>séances validées</small></div>' +
        '<div class="stat"><b>' + pct + '%</b><small>du programme</small></div>' +
      '</div>' +
      '<div class="card" style="background:var(--bg2);border-left:4px solid var(--accent)">' +
        '<div class="rn" style="color:var(--muted);font-weight:700;font-size:12px;letter-spacing:1px">SÉANCE ' + prog.cur + ' · ' + esc(s.phase) + '</div>' +
        '<h2 style="margin:4px 0 6px">' + esc(s.title) + '</h2>' +
        '<p style="margin:0 0 8px"><b>Objectif :</b> ' + esc(s.goal) + '</p>' +
        (EXPLAIN[prog.cur] ? '<div style="background:rgba(109,139,255,.10);border-radius:10px;padding:10px 12px;margin:0 0 10px"><b>📖 En clair :</b> ' + esc(EXPLAIN[prog.cur]) + '</div>' : '') +
        '<div class="controls" style="margin-bottom:10px">' + tasks + '</div>' +
        '<p class="hint">💡 ' + esc(s.tip) + '</p>' +
        '<div class="controls no-print" style="margin-top:12px">' +
          '<button class="btn" id="pg-done">✅ Acquis — séance suivante</button>' +
          '<button class="btn ghost" id="pg-stay">🔁 Pas encore — je continue demain</button>' +
          (prog.cur > 1 ? '<button class="btn ghost small" id="pg-prev">◀ Précédente</button>' : '') +
        '</div>' +
        songHTML(SONGS[prog.cur]) +
      '</div>' +
      lexiqueHTML() +
      '<h3 style="color:var(--muted);text-transform:uppercase;letter-spacing:.6px;font-size:13px;margin:18px 0 8px">Toutes les séances</h3>' +
      list;

    $$('[data-go]', el).forEach(b => b.onclick = () => {
      const [si, ti] = b.dataset.go.split('-').map(Number);
      dispatchGo(SEANCES[si].tasks[ti].go);
    });
    const song = SONGS[prog.cur];
    if (song) {
      const sp = $('#song-play', el);
      if (sp) sp.onclick = () => A.playProgression(songMidis(song.chords), 1.0);
      const sm = $('#song-melody', el);
      if (sm) sm.onclick = () => A.playArpeggio(song.melody.map(noteToMidi), 0.42, 0.9);
      $$('[data-song-chord]', el).forEach(b => b.onclick = () => {
        const c = song.chords[+b.dataset.songChord]; openChord(c[0], c[1]);
      });
    }
    $('#pg-done').onclick = () => {
      prog.done[prog.cur] = today();
      if (prog.cur < SEANCES.length) prog.cur++;
      save('prog', prog);
      // journalise aussi la séance validée
      const logs = load('logs', []); logs.push({ date: today(), min: 20, what: 'Séance ' + (prog.cur - 1) + ' — ' + s.title }); save('logs', logs);
      renderProgramme(); renderJournal();
    };
    $('#pg-stay').onclick = () => {
      const note = $('#pg-stay'); note.textContent = '👍 Pas de souci — reviens demain, la séance t\'attend.';
      note.disabled = true;
    };
    if ($('#pg-prev')) $('#pg-prev').onclick = () => { prog.cur--; save('prog', prog); renderProgramme(); };
    $$('[data-seance]', el).forEach(r => r.onclick = () => { prog.cur = +r.dataset.seance; save('prog', prog); renderProgramme(); });
  }

  // ------------------------------------------------------------ PARCOURS
  function renderParcours() {
    const modules = [
      { t: 'Module 0 — Réglages & repères', badge: 'Semaine 1', items: [
        'Posture, main arrondie, poignet souple (tu as déjà l\'oreille et le rythme de la guitare).',
        'Repérer les groupes de 2 et 3 touches noires → nommer Do sans réfléchir.',
        'Nommer toutes les notes du clavier en < 5 s (onglet Accords/Gammes comme antisèche).' ] },
      { t: 'Module 1 — Accords majeurs & mineurs (priorité n°1)', badge: 'Sem. 1-3', items: [
        'Les 12 accords majeurs, puis les 12 mineurs, main droite (onglet Accords).',
        'Reconnaître la « forme » : majeur = 4+3 demi-tons, mineur = 3+4.',
        'Enchaîner 2 accords sans regarder : Do→Sol, La m→Fa, etc.',
        'Objectif : plaquer n\'importe quel accord majeur/mineur en < 2 s.' ] },
      { t: 'Module 2 — Les accords qui vont ensemble', badge: 'Sem. 3-6', items: [
        'Onglet Tonalités : les 7 accords diatoniques d\'une tonalité.',
        'Jouer les progressions I–V–vi–IV et ii–V–I dans 3 tonalités.',
        'Comprendre le cercle des quintes (onglet dédié).',
        'Main gauche : fondamentale + quinte pendant que la droite plaque l\'accord.' ] },
      { t: 'Module 3 — Gammes & doigtés', badge: 'Sem. 5-10', items: [
        'Gammes majeures (Do, Sol, Fa d\'abord) mains séparées puis ensemble.',
        'Gammes mineures naturelle/harmonique, puis pentatoniques (impro).',
        'Passages du pouce fluides ; travailler lentement au métronome.' ] },
      { t: 'Module 4 — Accompagnement & style (« Sofiane Pamar »)', badge: 'Sem. 8+', items: [
        'Renversements d\'accords pour lier les positions sans sauter.',
        'Motifs main gauche : basse-accord, arpèges, patterns pop/variété.',
        'Accords de 7e, add9, sus : la couleur des reprises modernes.',
        'Repiquer un morceau à l\'oreille (ton atout de guitariste).' ] },
      { t: 'Module 5 — Impro & composition', badge: 'Sem. 12+', items: [
        'Improviser sur une pentatonique par-dessus une grille.',
        'Composer une progression, y poser une mélodie.',
        'Enregistrer, réécouter, corriger : le cycle qui fait progresser vite.' ] }
    ];
    const html = modules.map(m =>
      '<div class="module"><h3>' + esc(m.t) + '<span class="badge">' + esc(m.badge) + '</span></h3>' +
      '<ul>' + m.items.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul></div>'
    ).join('');
    $('#parcours-body').innerHTML =
      '<p class="hint">Un fil clair, du plus utile au plus avancé. Tu es discipliné et tu as déjà les bases harmoniques de la guitare : on capitalise dessus. Coche mentalement, entraîne-toi dans les onglets, et note tes séances dans le Journal.</p>' + html;
  }

  // ------------------------------------------------------------ SOLFÈGE
  const SOLF_NOTES = [ // note, octave, nom FR, midi
    ['C', 4, 'Do'], ['D', 4, 'Ré'], ['E', 4, 'Mi'], ['F', 4, 'Fa'],
    ['G', 4, 'Sol'], ['A', 4, 'La'], ['B', 4, 'Si'], ['C', 5, 'Do aigu']
  ];
  const solfState = { i: 0, quiz: false, answer: null, score: 0, total: 0 };

  // Position verticale d'une note sur la portée (clé de sol)
  function staffY(letter, oct) {
    const order = 'CDEFGAB';
    const step = oct * 7 + order.indexOf(letter);
    return 78 - (step - 30) * 6; // E4 (step 30) sur la 1re ligne du bas
  }
  function staffSVG(letter, oct, showName) {
    const y = staffY(letter, oct);
    let s = '<svg viewBox="0 0 320 120" width="100%" style="max-width:320px;background:#fff;border-radius:10px">';
    // 5 lignes
    for (let i = 0; i < 5; i++) { const ly = 30 + i * 12; s += '<line x1="34" y1="' + ly + '" x2="300" y2="' + ly + '" stroke="#222" stroke-width="1"/>'; }
    // clé de sol (unicode ; sinon la portée reste lisible)
    s += '<text x="16" y="74" font-size="52" fill="#222" font-family="serif">𝄞</text>';
    // ligne supplémentaire pour Do central (C4)
    if (letter === 'C' && oct === 4) s += '<line x1="196" y1="90" x2="228" y2="90" stroke="#222" stroke-width="1"/>';
    // tête de note
    s += '<ellipse cx="212" cy="' + y + '" rx="8.5" ry="6" fill="#c0392b" transform="rotate(-18 212 ' + y + ')"/>';
    if (showName) s += '<text x="212" y="112" text-anchor="middle" font-size="14" font-weight="700" fill="#222">' + esc(showName) + '</text>';
    s += '</svg>';
    return s;
  }
  function rhythmSVG(kind) {
    const head = (fill) => '<ellipse cx="20" cy="34" rx="8" ry="6" fill="' + (fill ? '#222' : 'none') + '" stroke="#222" stroke-width="1.6" transform="rotate(-18 20 34)"/>';
    let inner = '<svg viewBox="0 0 44 48" width="44" height="48">';
    if (kind === 'ronde') inner += head(false);
    else if (kind === 'blanche') inner += head(false) + '<line x1="28" y1="30" x2="28" y2="6" stroke="#222" stroke-width="1.6"/>';
    else if (kind === 'noire') inner += head(true) + '<line x1="28" y1="30" x2="28" y2="6" stroke="#222" stroke-width="1.6"/>';
    else inner += head(true) + '<line x1="28" y1="30" x2="28" y2="6" stroke="#222" stroke-width="1.6"/><path d="M28 6 q10 4 6 16" fill="none" stroke="#222" stroke-width="1.6"/>';
    return inner + '</svg>';
  }

  function renderSolfege() {
    const c = $('#solfege-body');
    const cur = SOLF_NOTES[solfState.i];
    const midi = noteToMidi(cur[0] + cur[1]);
    const kbHi = [{ midi: midi, role: 'root' }];
    const kbd = K.render({ startMidi: 60, octaves: 2, highlight: kbHi, frNames: true });

    // Boutons de notes (Do..Do)
    const noteBtns = SOLF_NOTES.map((n, i) =>
      '<button class="chip ' + (!solfState.quiz && i === solfState.i ? 'active' : '') + '" data-solf="' + i + '">' + esc(n[2]) + '</button>').join(' ');

    const rhythms = [
      ['ronde', 'Ronde', '4 temps'], ['blanche', 'Blanche', '2 temps'],
      ['noire', 'Noire', '1 temps'], ['croche', 'Croche', '½ temps']
    ].map(r => '<div class="note-pill" style="background:#fff;color:#222;min-width:80px">' + rhythmSVG(r[0]) +
      '<b style="color:#222">' + r[1] + '</b><small style="color:#555">' + r[2] + '</small></div>').join('');

    c.innerHTML =
      // Bloc 1 : lire les notes
      '<div class="card"><h2>1 · Lire une note</h2>' +
        '<p class="hint">La musique s\'écrit sur une <b>portée</b> (5 lignes) avec une <b>clé de sol</b>. Choisis une note : tu la vois sur la portée, tu la vois sur le clavier, et tu l\'entends.</p>' +
        '<div style="display:flex;gap:18px;flex-wrap:wrap;align-items:center">' +
          '<div id="solf-staff">' + staffSVG(cur[0], cur[1], (solfState.quiz ? '?' : cur[2])) + '</div>' +
          '<div style="flex:1;min-width:240px"><div class="kbd-wrap" style="margin:0">' + kbd + '</div></div>' +
        '</div>' +
        '<div class="controls no-print" style="margin-top:10px"><span class="chips">' + noteBtns + '</span>' +
          '<button class="btn small" id="solf-play">▶ Écouter</button>' +
          '<button class="btn ghost small" id="solf-quiz">' + (solfState.quiz ? '✕ Quitter le quiz' : '🎯 Mode quiz') + '</button>' +
        '</div>' +
        (solfState.quiz ? '<p class="hint" id="solf-fb" style="min-height:20px;margin-top:8px">Quelle note est affichée ? Clique son nom. — Score : <b>' + solfState.score + ' / ' + solfState.total + '</b></p>' : '') +
      '</div>' +
      // Bloc 2 : reconnaître les touches
      '<div class="card"><h2>2 · Reconnaître les touches</h2>' +
        '<p class="hint">Les touches noires vont par <b>groupes de 2 et de 3</b>. Juste <b>à gauche du groupe de 2</b>, c\'est toujours un <b>Do</b>. À partir de là, tu comptes : Do, Ré, Mi, Fa, Sol, La, Si… puis ça recommence.</p>' +
        '<div class="kbd-wrap">' + K.render({ startMidi: 60, octaves: 2, highlight: [{ midi: 60, role: 'root' }, { midi: 72, role: 'root' }], frNames: true }) + '</div>' +
        '<p class="hint">Les deux touches rouges sont des <b>Do</b>. Repère-les, et tout le reste se déduit.</p>' +
      '</div>' +
      // Bloc 3 : le rythme
      '<div class="card"><h2>3 · Le rythme (durée des notes)</h2>' +
        '<p class="hint">La forme de la note dit combien de temps elle dure. Compte « 1-2-3-4 » régulièrement (au métronome plus tard).</p>' +
        '<div class="notes-row">' + rhythms + '</div>' +
      '</div>' +
      // Bloc 4 : téléchargements
      '<div class="card"><h2>4 · À imprimer</h2>' +
        '<p class="hint">Des feuilles prêtes pour écrire dessus une fois imprimées.</p>' +
        '<div class="controls no-print">' +
          '<button class="btn" id="solf-dl-staff">⬇ Portées vierges (PDF)</button>' +
          '<button class="btn ghost" id="solf-dl-sheet">⬇ Fiche « les notes » (PDF)</button>' +
          '<a class="btn ghost small" href="https://www.youtube.com/results?search_query=' + encodeURIComponent('apprendre à lire les notes solfège piano débutant') + '" target="_blank" rel="noopener">▶ Vidéo : lire les notes</a>' +
        '</div>' +
        '<p class="hint" id="solf-dlnote" style="margin-top:8px"></p>' +
      '</div>';

    $$('[data-solf]', c).forEach(b => b.onclick = () => {
      const i = +b.dataset.solf;
      if (solfState.quiz) { answerSolf(i); }
      else { solfState.i = i; renderSolfege(); A.playMidi(noteToMidi(SOLF_NOTES[i][0] + SOLF_NOTES[i][1]), null, 1.2, 0.85); }
    });
    $('#solf-play').onclick = () => A.playMidi(midi, null, 1.4, 0.85);
    $('#solf-quiz').onclick = () => { solfState.quiz = !solfState.quiz; if (solfState.quiz) newSolfQuiz(); else renderSolfege(); };
    $('#solf-dl-staff').onclick = () => solfDownload('staff');
    $('#solf-dl-sheet').onclick = () => solfDownload('sheet');
  }
  function newSolfQuiz() {
    solfState.i = Math.floor(Math.random() * SOLF_NOTES.length);
    solfState.answer = solfState.i;
    renderSolfege();
    const cur = SOLF_NOTES[solfState.i];
    A.playMidi(noteToMidi(cur[0] + cur[1]), null, 1.2, 0.85);
  }
  function answerSolf(i) {
    solfState.total++;
    const ok = i === solfState.answer;
    if (ok) solfState.score++;
    const fb = $('#solf-fb');
    const good = SOLF_NOTES[solfState.answer][2];
    if (fb) fb.innerHTML = (ok ? '✅ Oui, c\'était <b>' + esc(good) + '</b> !' : '❌ Non, c\'était <b>' + esc(good) + '</b>.') +
      ' — Score : <b>' + solfState.score + ' / ' + solfState.total + '</b>';
    // révèle la note puis enchaîne
    solfState.quiz = false; // pour afficher le nom un instant
    const staff = $('#solf-staff'); if (staff) staff.innerHTML = staffSVG(SOLF_NOTES[solfState.answer][0], SOLF_NOTES[solfState.answer][1], good);
    solfState.quiz = true;
    setTimeout(newSolfQuiz, 1400);
  }
  async function solfDownload(kind) {
    const note = $('#solf-dlnote');
    if (!window.PianoPDF) { if (note) note.textContent = '⚠ Module PDF non chargé.'; return; }
    if (note) note.textContent = '⏳ Génération…';
    let res;
    try { res = kind === 'staff' ? await PianoPDF.staffPaper({}) : await PianoPDF.solfegeSheet({ frNames: true }); }
    catch (e) { res = 'error'; }
    if (note) note.textContent = res === 'saved' ? '✅ PDF prêt — accepte l\'enregistrement.'
      : res === 'browser' ? '✅ PDF téléchargé.'
      : res === 'declined' ? 'ℹ️ Annulé.'
      : '⚠ Téléchargement indisponible ici — utilise « Imprimer » depuis un navigateur, ou le site.';
  }

  // ------------------------------------------------------------ JOURNAL (tracker)
  function renderJournal() {
    const c = $('#journal-body');
    const logs = load('logs', []);
    const total = logs.reduce((s, l) => s + (+l.min || 0), 0);
    const streak = computeStreak(logs);
    const days = new Set(logs.map(l => l.date)).size;

    c.innerHTML =
      '<div class="stat-row">' +
        '<div class="stat"><b>' + Math.round(total / 60 * 10) / 10 + ' h</b><small>temps total</small></div>' +
        '<div class="stat"><b>' + days + '</b><small>jours pratiqués</small></div>' +
        '<div class="stat"><b>' + streak + '</b><small>jours d\'affilée</small></div>' +
      '</div>' +
      '<div class="controls no-print" style="margin-bottom:14px">' +
        field('Date', '<input type="date" id="log-date" value="' + today() + '">') +
        field('Minutes', '<input type="text" id="log-min" placeholder="30" style="min-width:80px">') +
        field('Travaillé', '<input type="text" id="log-what" placeholder="Accords majeurs, gamme de Do…" style="min-width:220px">') +
        '<button class="btn" id="log-add">+ Ajouter</button>' +
      '</div>' +
      '<div id="log-list">' + (logs.length ? logs.slice().reverse().map((l, ri) =>
        '<div class="log-row"><span class="date">' + esc(l.date) + '</span>' +
        '<span>' + esc(l.what || '—') + '</span>' +
        '<span><b>' + esc(String(l.min)) + '\'</b> <button class="btn ghost small no-print" data-del="' + (logs.length - 1 - ri) + '">✕</button></span></div>'
      ).join('') : '<p class="hint">Aucune séance enregistrée. Ajoute ta première pratique du jour ✨</p>') + '</div>';

    $('#log-add').onclick = () => {
      const date = $('#log-date').value || today();
      const min = parseInt($('#log-min').value, 10) || 0;
      const what = $('#log-what').value.trim();
      if (!min) { $('#log-min').focus(); return; }
      logs.push({ date, min, what });
      save('logs', logs); renderJournal();
    };
    $$('[data-del]', c).forEach(b => b.onclick = () => {
      logs.splice(+b.dataset.del, 1); save('logs', logs); renderJournal();
    });
  }
  function computeStreak(logs) {
    const set = new Set(logs.map(l => l.date));
    let s = 0; const d = new Date();
    for (;;) { const iso = d.toISOString().slice(0, 10); if (set.has(iso)) { s++; d.setDate(d.getDate() - 1); } else break; }
    return s;
  }

  // ------------------------------------------------------------ CLASSEUR (impression)
  function renderClasseur() {
    const c = $('#classeur-body');
    const owner = load('owner', '');
    c.innerHTML =
      '<p class="hint">Compose ton classeur, puis <b>⬇ Télécharge le PDF</b> (ou imprime). Tout sort en noir &amp; blanc, une section par page.</p>' +
      '<div class="controls no-print">' +
        field('Ton prénom (page de garde)', '<input type="text" id="cl-owner" placeholder="Noa" value="' + esc(owner) + '" style="min-width:160px">') +
        field('Tonalité', selectHtml('cl-root', ROOTS.map(r => opt(r, r === 'C')))) +
        field('Mode', selectHtml('cl-mode', [opt('major', true, 'Majeur'), opt('minor', false, 'Mineur')])) +
        '<label class="field" style="justify-content:flex-end"><span class="chips" style="margin-top:2px"><button class="chip active" id="cl-fing">👆 Doigtés</button></span></label>' +
      '</div>' +
      '<div class="chips no-print" style="margin:12px 0">' +
        chip('cl-cover', true, 'Page de garde + sommaire') +
        chip('cl-keyfull', true, 'La tonalité, complète (1 page)') +
        chip('cl-chords', true, 'Dictionnaire d\'accords (maj/min/7/maj7/m7)') +
        chip('cl-scales', true, 'Gammes principales') +
      '</div>' +
      '<button class="btn no-print" id="cl-pdf">⬇ Télécharger le PDF</button> ' +
      '<button class="btn ghost no-print" id="cl-print">🖨 Imprimer</button> ' +
      '<button class="btn ghost no-print" id="cl-gen">🔄 Rafraîchir l\'aperçu</button>' +
      '<p class="hint no-print" id="cl-note" style="margin-top:8px"></p>' +
      '<div id="cl-preview" style="margin-top:18px"></div>';

    let currentModel = [];
    $('#cl-owner').onchange = e => save('owner', e.target.value.trim());
    $('#cl-fing').onclick = function () { this.classList.toggle('active'); buildSheets(); };
    $('#cl-gen').onclick = buildSheets;
    $('#cl-print').onclick = () => { buildSheets(); window.print(); };
    $('#cl-pdf').onclick = async () => {
      buildSheets();
      const note = $('#cl-note');
      if (!window.PianoPDF || !PianoPDF.available()) {
        note.textContent = '⚠ Le module PDF n\'est pas chargé (vérifie ta connexion au premier lancement).';
        return;
      }
      const who = ($('#cl-owner').value || owner || '').trim();
      note.textContent = '⏳ Génération du PDF…';
      let res;
      try {
        res = await PianoPDF.generate(currentModel, {
          frNames: frNames, owner: who,
          filename: 'classeur-piano' + (who ? '-' + who.toLowerCase().replace(/\s+/g, '-') : '') + '.pdf'
        });
      } catch (e) { res = 'error'; }
      if (res === 'saved') note.textContent = '✅ PDF prêt — accepte l\'enregistrement.';
      else if (res === 'browser') note.textContent = '✅ PDF téléchargé.';
      else if (res === 'declined') note.textContent = 'ℹ️ Téléchargement annulé.';
      else note.textContent = '⚠ Téléchargement indisponible ici — utilise « Imprimer », ou la version sur ton site.';
    };
    buildSheets();

    // Construit le modèle de sections (partagé par l'aperçu HTML et le PDF)
    function buildModel() {
      const root = $('#cl-root').value, mode = $('#cl-mode').value;
      const modeLbl = mode === 'major' ? 'majeur' : 'mineur';
      const withFing = $('#cl-fing').classList.contains('active');
      const model = [];

      if ($('#cl-keyfull').classList.contains('active')) {
        const dia = T.diatonicChords(root, mode, false);
        const dia7 = T.diatonicChords(root, mode, true);
        const scale = T.buildScale(root, mode === 'major' ? 'major' : 'minor', 4);
        model.push({
          type: 'keyblock',
          title: 'Tonalité de ' + labelNote(root) + ' ' + modeLbl,
          intro: 'Tout ce qui « va ensemble » dans cette tonalité.',
          fingers: withFing,
          chords: dia.map((d, i) => ({ label: d.roman + ' · ' + d.chord.label + ' (7e : ' + dia7[i].chord.label + ')', midis: d.chord.midis, kind: 'chord' })),
          scale: { label: scale.label, midis: scale.midis, kind: 'scale' },
          progs: T.PROGRESSIONS[mode].map(p => p.name + ' — ' + p.desc + ' : ' + p.deg.map(d => dia[d].chord.label).join(' → '))
        });
      }
      if ($('#cl-chords').classList.contains('active')) {
        ['maj', 'min', '7', 'maj7', 'm7'].forEach(ty => {
          model.push({
            type: 'grid', cols: 3, title: 'Dictionnaire — accords ' + T.CHORDS[ty].name,
            items: ROOTS.map(r => { const ch = T.buildChord(r, ty, 4); return { label: ch.label, midis: ch.midis, kind: 'chord', fingers: withFing }; })
          });
        });
      }
      if ($('#cl-scales').classList.contains('active')) {
        ['major', 'minor', 'pentaMin', 'pentaMaj'].forEach(ty => {
          model.push({
            type: 'grid', cols: 2, title: 'Gammes — ' + T.SCALES[ty].name,
            items: ['C', 'G', 'D', 'A', 'F', 'Bb'].map(r => { const s = T.buildScale(r, ty, 4); return { label: s.label, midis: s.midis, kind: 'scale', fingers: false }; })
          });
        });
      }

      const toc = model.map(s => s.title);
      if ($('#cl-cover').classList.contains('active')) {
        const who = ($('#cl-owner').value || owner || '').trim();
        model.unshift({
          type: 'cover', title: 'Mon classeur de piano', owner: who,
          subtitle: 'Accords · Gammes · Tonalités — ' + new Date().toLocaleDateString('fr-FR'), toc: toc
        });
      }
      return model;
    }

    function buildSheets() {
      currentModel = buildModel();
      $('#cl-preview').innerHTML = currentModel.length
        ? currentModel.map(renderSectionHTML).join('')
        : '<p class="hint">Sélectionne au moins une section.</p>';
    }

    function renderSectionHTML(sec) {
      if (sec.type === 'cover') {
        return '<div class="print-sheet card" style="text-align:center;padding:40px 20px">' +
          '<div style="font-size:60px">🎹</div>' +
          '<h1 style="font-size:34px;margin:10px 0">' + esc(sec.title) + '</h1>' +
          (sec.owner ? '<p style="font-size:18px">' + esc(sec.owner) + '</p>' : '') +
          '<p class="hint">' + esc(sec.subtitle) + '</p>' +
          (sec.toc.length ? '<div style="margin-top:26px;text-align:left;max-width:520px;margin-inline:auto">' +
            '<h3>Sommaire</h3><ol style="line-height:1.9">' + sec.toc.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol></div>' : '') +
          '</div>';
      }
      if (sec.type === 'keyblock') {
        return sheet(sec.title,
          '<p>' + esc(sec.intro) + '</p>' +
          '<h3>Les 7 accords</h3><div class="grid cols-3">' + sec.chords.map(it => sheetCard(it, sec.fingers)).join('') + '</div>' +
          '<h3>La gamme</h3><div class="grid cols-2">' + sheetCard(sec.scale, false) + '</div>' +
          '<h3>Progressions à connaître</h3><ul>' + sec.progs.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>');
      }
      if (sec.type === 'grid') {
        const cls = sec.cols === 3 ? 'cols-3' : 'cols-2';
        return sheet(sec.title, '<div class="grid ' + cls + '">' + sec.items.map(it => sheetCard(it, it.fingers)).join('') + '</div>');
      }
      return '';
    }
    function sheet(title, inner) {
      return '<div class="print-sheet card"><h2>' + esc(title) + '</h2>' + inner + '</div>';
    }
    function sheetCard(item, withFing) {
      const frame = K.frameFor(item.midis, 2);
      const hi = K.highlightFromMidis(item.midis, item.kind === 'scale' ? 'scale' : 'chord');
      const fingers = (withFing && item.kind !== 'scale') ? K.fingersMap(item.midis, T.chordFingersRH(item.midis.length)) : {};
      return '<div style="margin-bottom:8px"><b>' + esc(item.label) + '</b>' +
        K.render({ startMidi: frame.startMidi, octaves: Math.max(2, frame.octaves), highlight: hi, fingers, frNames, width: 360 }) + '</div>';
    }
  }

  // ------------------------------------------------------------ Animation clavier
  function litKey(container, midi, delay, dur) {
    if (!container) return;
    const el = container.querySelector('rect[data-midi="' + midi + '"]');
    if (!el) return;
    setTimeout(() => { el.classList.add('lit'); setTimeout(() => el.classList.remove('lit'), dur); }, delay);
  }
  function animateArp(container, midis, step) {
    A.ensure();
    midis.forEach((m, i) => setTimeout(() => {
      A.playMidi(m, null, 1.0, 0.85); litKey(container, m, 0, step * 1000 * 1.7);
    }, i * step * 1000));
  }
  function animateScale(container, midis, step, down) {
    A.ensure();
    let seq = midis.slice();
    if (down) seq = seq.concat(midis.slice(0, -1).reverse());
    seq.forEach((m, i) => setTimeout(() => {
      A.playMidi(m, null, step * 1.15, 0.85); litKey(container, m, 0, step * 1000 * 1.1);
    }, i * step * 1000));
  }

  // ------------------------------------------------------------ RECONNAISSANCE
  const recSel = {};   // midi -> true
  function renderRecognize() {
    const c = $('#recognize-body');
    const selected = Object.keys(recSel).map(Number).sort((a, b) => a - b);
    const hi = selected.map((m, i) => ({ midi: m, role: i === 0 ? 'root' : 'note' }));
    const kbd = K.render({ startMidi: 60, octaves: 2, highlight: hi, interactive: true, frNames });

    const pcs = selected.map(m => ((m % 12) + 12) % 12);
    const matches = pcs.length >= 2 ? T.identifyChord(pcs) : [];
    let verdict;
    if (!selected.length) verdict = '<span class="hint">Clique des touches sur le clavier pour composer un accord…</span>';
    else if (matches.length) verdict = 'C\'est un <b style="font-size:20px">' + matches.map(esc).join('</b> ou <b style="font-size:20px">') + '</b> !';
    else verdict = '<span class="hint">Notes : ' + selected.map(m => esc(frNames ? T.frName(T.noteName(m, false)) : T.noteName(m, false))).join(' · ') + ' — pas un accord standard reconnu (essaie 3-4 notes).</span>';

    c.innerHTML =
      '<p class="hint">Joue un accord sur ton piano, reproduis-le ici en cliquant les touches : l\'appli te dit ce que c\'est. Parfait pour vérifier ce que tu trouves à l\'oreille.</p>' +
      '<div class="kbd-wrap">' + kbd + '</div>' +
      '<div class="card" style="background:var(--bg2);margin:10px 0">' + verdict + '</div>' +
      '<div class="controls no-print">' +
        '<button class="btn" id="rec-play">▶ Écouter</button>' +
        '<button class="btn ghost" id="rec-clear">✕ Effacer</button>' +
      '</div>';

    $$('#recognize-body rect.clk').forEach(r => r.addEventListener('click', () => {
      const m = +r.getAttribute('data-midi');
      if (recSel[m]) delete recSel[m]; else recSel[m] = true;
      A.playMidi(m, null, 1.0, 0.8);
      renderRecognize();
    }));
    $('#rec-play').onclick = () => { if (selected.length) A.playChord(selected, 1.8); };
    $('#rec-clear').onclick = () => { Object.keys(recSel).forEach(k => delete recSel[k]); renderRecognize(); };
  }

  // ------------------------------------------------------------ OREILLE
  const earState = { mode: 'interval', answer: null, options: [], done: false, seq: null, score: 0, total: 0 };
  const EAR_CHORDS = ['maj', 'min', '7', 'maj7', 'm7', 'dim'];
  function renderEar() {
    const c = $('#ear-body');
    c.innerHTML =
      '<div class="controls no-print">' +
        '<span class="chips">' +
          earChip('interval', 'Intervalles') + earChip('chord', 'Type d\'accord') + earChip('prog', 'Progressions') +
        '</span>' +
        '<div class="stat" style="flex:0 0 auto;padding:8px 14px">Score : <b style="display:inline">' + earState.score + ' / ' + earState.total + '</b></div>' +
      '</div>' +
      '<div style="text-align:center;margin:22px 0">' +
        '<button class="btn" id="ear-play" style="font-size:16px;padding:14px 24px">🔊 Écouter</button> ' +
        '<button class="btn ghost" id="ear-next">➜ Nouvelle question</button>' +
      '</div>' +
      '<div id="ear-options" class="grid cols-3" style="max-width:640px;margin:0 auto"></div>' +
      '<p class="hint" id="ear-feedback" style="text-align:center;min-height:24px;margin-top:14px"></p>';

    $$('[data-ear]', c).forEach(b => b.onclick = () => { earState.mode = b.dataset.ear; newEar(); });
    $('#ear-play').onclick = playEar;
    $('#ear-next').onclick = newEar;
    if (!earState.answer) newEar(); else paintEar();
  }
  function earChip(mode, label) {
    return '<button class="chip ' + (earState.mode === mode ? 'active' : '') + '" data-ear="' + mode + '">' + label + '</button>';
  }
  function newEar() {
    earState.done = false; earState.answer = null; earState.options = [];
    const rootBase = 57 + Math.floor(Math.random() * 6); // A3..
    if (earState.mode === 'interval') {
      const pool = T.INTERVALS.filter(iv => iv.semis <= 12);
      const pick = pool[Math.floor(Math.random() * pool.length)];
      earState.answer = pick.name;
      earState.seq = { type: 'mel', midis: [rootBase, rootBase + pick.semis] };
      earState.options = choices(pool.map(p => p.name), pick.name, 4);
    } else if (earState.mode === 'chord') {
      const key = EAR_CHORDS[Math.floor(Math.random() * EAR_CHORDS.length)];
      const ch = T.buildChord(T.noteName(rootBase, false), key, 4);
      earState.answer = T.CHORDS[key].name;
      earState.seq = { type: 'chord', midis: ch.midis };
      earState.options = choices(EAR_CHORDS.map(k => T.CHORDS[k].name), T.CHORDS[key].name, 4);
    } else {
      const progs = T.PROGRESSIONS.major;
      const p = progs[Math.floor(Math.random() * progs.length)];
      const dia = T.diatonicChords('C', 'major', false);
      earState.answer = p.name;
      earState.seq = { type: 'prog', chords: p.deg.map(d => dia[d].chord.midis) };
      earState.options = choices(progs.map(x => x.name), p.name, Math.min(4, progs.length));
    }
    paintEar();
    setTimeout(playEar, 250);
  }
  function paintEar() {
    const box = $('#ear-options'); if (!box) return;
    box.innerHTML = earState.options.map(o =>
      '<button class="deg-card" style="text-align:center" data-opt="' + esc(o) + '">' + esc(o) + '</button>').join('');
    $$('[data-opt]', box).forEach(b => b.onclick = () => answerEar(b.dataset.opt));
    const fb = $('#ear-feedback'); if (fb) fb.textContent = '';
  }
  function answerEar(opt) {
    if (earState.done) return;
    earState.done = true; earState.total++;
    const ok = opt === earState.answer;
    if (ok) earState.score++;
    $$('#ear-options [data-opt]').forEach(b => {
      if (b.dataset.opt === earState.answer) b.style.borderColor = 'var(--scale)';
      if (b.dataset.opt === opt && !ok) b.style.borderColor = 'var(--root)';
    });
    const fb = $('#ear-feedback');
    fb.innerHTML = ok ? '✅ Bravo, c\'était bien <b>' + esc(earState.answer) + '</b>.'
                      : '❌ C\'était <b>' + esc(earState.answer) + '</b>. Réécoute pour l\'ancrer.';
    $('.stat b', $('#ear-body')).textContent = earState.score + ' / ' + earState.total;
  }
  function playEar() {
    const s = earState.seq; if (!s) return;
    if (s.type === 'mel') A.playArpeggio(s.midis, 0.55, 1.2);
    else if (s.type === 'chord') A.playChord(s.midis, 1.8);
    else A.playProgression(s.chords, 0.9);
  }
  function choices(pool, answer, n) {
    const others = pool.filter(x => x !== answer);
    shuffle(others);
    const set = [answer].concat(others.slice(0, n - 1));
    shuffle(set);
    return set;
  }
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }

  // ------------------------------------------------------------ Helpers UI
  function field(lbl, inner) { return '<label class="field">' + esc(lbl) + inner + '</label>'; }
  function selectHtml(id, opts) { return '<select id="' + id + '">' + opts.join('') + '</select>'; }
  function opt(val, sel, label) { return '<option value="' + esc(val) + '"' + (sel ? ' selected' : '') + '>' + esc(label != null ? label : val) + '</option>'; }
  function chip(id, active, label) { return '<button class="chip ' + (active ? 'active' : '') + '" id="' + id + '" onclick="this.classList.toggle(\'active\')">' + esc(label) + '</button>'; }
  function legend(kind) {
    return '<div class="legend"><span><i class="dot root"></i> Fondamentale</span>' +
      (kind === 'scale' ? '<span><i class="dot scale"></i> Notes de la gamme</span>' : '<span><i class="dot note"></i> Notes de l\'accord</span>') + '</div>';
  }
  function labelNote(n) { return frNames ? T.frName(n) : n; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function today() { return new Date().toISOString().slice(0, 10); }
  function load(k, d) { try { const v = localStorage.getItem('piano.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem('piano.' + k, JSON.stringify(v)); } catch (e) {} }

  // ------------------------------------------------------------ Init
  function init() {
    $$('nav.tabs button').forEach(b => b.onclick = () => nav(b.dataset.go));
    const fr = $('#fr-toggle');
    if (fr) { fr.checked = frNames; fr.onchange = () => { frNames = fr.checked; save('frNames', frNames); renderAll(); }; }
    renderAll();
    const id = location.hash.replace('#', '');
    nav(id && $('#view-' + id) ? id : 'parcours');
    // Débloque l'audio au 1er geste (iOS compris). On écoute plusieurs
    // types d'événements et on réessaie tant que ce n'est pas débloqué.
    const unlock = () => { try { A.unlock(); } catch (e) {} };
    ['touchend', 'pointerdown', 'mousedown', 'click', 'keydown'].forEach(ev =>
      document.addEventListener(ev, unlock, { passive: true }));
  }
  function renderAll() {
    renderProgramme(); renderParcours(); renderChords(); renderScales(); renderKeys(); renderCircle();
    renderRecognize(); renderEar(); renderSolfege(); renderJournal(); renderClasseur();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
