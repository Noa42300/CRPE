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

  // ------------------------------------------------------------ ACCORDS
  const chordState = { root: 'C', type: 'maj' };
  function renderChords() {
    const c = $('#chord-body');
    const chord = T.buildChord(chordState.root, chordState.type, 4);
    const frame = K.frameFor(chord.midis, 2);
    const hi = K.highlightFromMidis(chord.midis, 'chord');
    const kbd = K.render({ startMidi: frame.startMidi, octaves: Math.max(2, frame.octaves), highlight: hi, frNames });

    const pills = chord.notes.map((n, i) =>
      '<div class="note-pill"><b>' + (frNames ? T.frName(n) : n) + '</b><small>' + chord.degrees[i] + '</small></div>'
    ).join('');

    c.innerHTML =
      '<div class="controls no-print">' +
        field('Fondamentale', selectHtml('chord-root', ROOTS.map(r => opt(r, r === chordState.root, frNames ? T.frName(r) : r)))) +
        field('Type d\'accord', selectHtml('chord-type', Object.keys(T.CHORDS).map(k => opt(k, k === chordState.type, T.CHORDS[k].name)))) +
        '<button class="btn" id="chord-play">▶ Écouter l\'accord</button>' +
        '<button class="btn ghost" id="chord-arp">↗ Arpège</button>' +
      '</div>' +
      '<h2 style="margin-top:16px">' + esc(chord.label) + ' <span class="hint">— ' + esc(chord.def.name) + '</span></h2>' +
      '<div class="kbd-wrap">' + kbd + '</div>' + legend('chord') +
      '<div class="notes-row">' + pills + '</div>' +
      '<p class="hint">Intervalles : ' + chord.degrees.join(' · ') + '  •  Notes MIDI : ' + chord.midis.join(', ') + '</p>';

    $('#chord-root').onchange = e => { chordState.root = e.target.value; renderChords(); };
    $('#chord-type').onchange = e => { chordState.type = e.target.value; renderChords(); };
    $('#chord-play').onclick = () => A.playChord(chord.midis, 1.8);
    $('#chord-arp').onclick = () => A.playArpeggio(chord.midis, 0.18, 1.0);
  }

  // ------------------------------------------------------------ GAMMES
  const scaleState = { root: 'C', type: 'major' };
  function renderScales() {
    const c = $('#scale-body');
    const sc = T.buildScale(scaleState.root, scaleState.type, 4);
    const frame = K.frameFor(sc.midis, 2);
    const hi = K.highlightFromMidis(sc.midis, 'scale');
    const kbd = K.render({ startMidi: frame.startMidi, octaves: Math.max(2, frame.octaves), highlight: hi, frNames });

    const pills = sc.notes.map((n, i) =>
      '<div class="note-pill"><b>' + (frNames ? T.frName(n) : n) + '</b><small>' + (i === sc.notes.length - 1 ? '8' : (i + 1)) + '</small></div>'
    ).join('');

    c.innerHTML =
      '<div class="controls no-print">' +
        field('Tonique', selectHtml('scale-root', ROOTS.map(r => opt(r, r === scaleState.root, frNames ? T.frName(r) : r)))) +
        field('Type de gamme', selectHtml('scale-type', Object.keys(T.SCALES).map(k => opt(k, k === scaleState.type, T.SCALES[k].name)))) +
        '<button class="btn" id="scale-play">▶ Monter</button>' +
        '<button class="btn ghost" id="scale-updown">↕ Monter &amp; descendre</button>' +
      '</div>' +
      '<h2 style="margin-top:16px">' + esc(sc.label) + '</h2>' +
      '<div class="kbd-wrap">' + kbd + '</div>' + legend('scale') +
      '<div class="notes-row">' + pills + '</div>' +
      '<p class="hint">Formule (demi-tons) : ' + sc.def.semis.join(' – ') + '</p>';

    $('#scale-root').onchange = e => { scaleState.root = e.target.value; renderScales(); };
    $('#scale-type').onchange = e => { scaleState.type = e.target.value; renderScales(); };
    $('#scale-play').onclick = () => A.playScale(sc.midis, 0.28, false);
    $('#scale-updown').onclick = () => A.playScale(sc.midis, 0.26, true);
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
    c.innerHTML =
      '<p class="hint">Génère des fiches propres en noir &amp; blanc, puis <b>Ctrl/Cmd + P</b> → « Enregistrer en PDF » ou imprime pour ton classeur. Choisis ce que tu veux inclure :</p>' +
      '<div class="controls no-print">' +
        field('Tonalité', selectHtml('cl-root', ROOTS.map(r => opt(r, r === 'C')))) +
        field('Mode', selectHtml('cl-mode', [opt('major', true, 'Majeur'), opt('minor', false, 'Mineur')])) +
      '</div>' +
      '<div class="chips no-print" style="margin:12px 0">' +
        chip('cl-chords', true, 'Dictionnaire d\'accords (12 fondamentales)') +
        chip('cl-key', true, 'Accords de la tonalité + progressions') +
        chip('cl-scales', true, 'Gammes principales') +
      '</div>' +
      '<button class="btn no-print" id="cl-gen">📄 Générer l\'aperçu</button> ' +
      '<button class="btn ghost no-print" id="cl-print">🖨 Imprimer / PDF</button>' +
      '<div id="cl-preview" style="margin-top:18px"></div>';

    $('#cl-gen').onclick = buildSheets;
    $('#cl-print').onclick = () => { buildSheets(); window.print(); };
    buildSheets();

    function buildSheets() {
      const root = $('#cl-root').value, mode = $('#cl-mode').value;
      const wantChords = $('#cl-chords').classList.contains('active');
      const wantKey = $('#cl-key').classList.contains('active');
      const wantScales = $('#cl-scales').classList.contains('active');
      let html = '';

      if (wantKey) {
        const dia = T.diatonicChords(root, mode, false);
        const dia7 = T.diatonicChords(root, mode, true);
        html += sheet('Tonalité de ' + labelNote(root) + ' ' + (mode === 'major' ? 'majeur' : 'mineur'),
          '<p>Les 7 accords qui vont ensemble. Fondamentale en rouge foncé, autres notes en bleu.</p>' +
          '<div class="grid cols-3">' + dia.map((d, i) => sheetCard(d.roman + '  ·  ' + d.chord.label + '  (7e : ' + dia7[i].chord.label + ')', d.chord.midis)).join('') + '</div>');
      }
      if (wantChords) {
        const types = ['maj', 'min', '7', 'maj7', 'm7'];
        types.forEach(ty => {
          html += sheet('Accords ' + T.CHORDS[ty].name,
            '<div class="grid cols-3">' + ROOTS.map(r => { const ch = T.buildChord(r, ty, 4); return sheetCard(ch.label, ch.midis); }).join('') + '</div>');
        });
      }
      if (wantScales) {
        const types = ['major', 'minor', 'pentaMin', 'pentaMaj'];
        types.forEach(ty => {
          html += sheet('Gammes — ' + T.SCALES[ty].name,
            '<div class="grid cols-2">' + ['C', 'G', 'D', 'A', 'F', 'Bb'].map(r => { const s = T.buildScale(r, ty, 4); return sheetCard(s.label, s.midis, 'scale'); }).join('') + '</div>');
        });
      }
      $('#cl-preview').innerHTML = html || '<p class="hint">Sélectionne au moins une section.</p>';
    }
    function sheet(title, inner) {
      return '<div class="print-sheet card"><h2>' + esc(title) + '</h2>' + inner + '</div>';
    }
    function sheetCard(title, midis, kind) {
      const frame = K.frameFor(midis, 2);
      const hi = K.highlightFromMidis(midis.map(m => m), kind === 'scale' ? 'scale' : 'chord');
      return '<div style="margin-bottom:8px"><b>' + esc(title) + '</b>' +
        K.render({ startMidi: frame.startMidi, octaves: Math.max(2, frame.octaves), highlight: hi, frNames, width: 360 }) + '</div>';
    }
  }

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
    // Débloque l'audio au 1er clic (politique navigateurs)
    document.body.addEventListener('pointerdown', () => A.ensure(), { once: true });
  }
  function renderAll() {
    renderParcours(); renderChords(); renderScales(); renderKeys(); renderCircle(); renderJournal(); renderClasseur();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
