/* =========================================================================
   audio.js — Son de piano synthétisé (Web Audio API). Aucune dépendance,
   aucun fichier externe : fonctionne hors-ligne. Chaque note est un mélange
   d'harmoniques avec une enveloppe type piano (attaque nette, longue chute).
   ========================================================================= */
(function (global) {
  'use strict';

  let ctx = null;
  let master = null;

  function ensure() {
    if (!ctx) {
      const AC = global.AudioContext || global.webkitAudioContext;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.9;
      // léger filtre pour adoucir
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 6500;
      master.connect(lp);
      lp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // Joue une note (fréquence) à un instant t, pour une durée donnée
  function playFreq(freq, when, dur, vel) {
    ensure();
    const t = when != null ? when : ctx.currentTime;
    dur = dur || 1.1;
    vel = vel == null ? 0.8 : vel;

    const voice = ctx.createGain();
    voice.connect(master);

    // Harmoniques (série qui sonne « piano »)
    const partials = [
      { r: 1, g: 1.0 },
      { r: 2, g: 0.45 },
      { r: 3, g: 0.22 },
      { r: 4, g: 0.12 },
      { r: 6, g: 0.06 }
    ];
    const oscs = [];
    partials.forEach(p => {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq * p.r;
      const g = ctx.createGain();
      g.gain.value = p.g;
      o.connect(g);
      g.connect(voice);
      oscs.push(o);
    });

    // Enveloppe : attaque 6ms, chute exponentielle
    const peak = 0.16 * vel;
    voice.gain.setValueAtTime(0.0001, t);
    voice.gain.exponentialRampToValueAtTime(peak, t + 0.006);
    voice.gain.exponentialRampToValueAtTime(peak * 0.35, t + 0.35);
    voice.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    oscs.forEach(o => { o.start(t); o.stop(t + dur + 0.05); });
  }

  function playMidi(midi, when, dur, vel) {
    playFreq(Theory.midiToFreq(midi), when, dur, vel);
  }

  // Joue un accord (toutes les notes ensemble)
  function playChord(midis, dur) {
    ensure();
    const t = ctx.currentTime + 0.02;
    midis.forEach(m => playMidi(m, t, dur || 1.6, 0.8));
  }

  // Arpège : notes l'une après l'autre
  function playArpeggio(midis, step, dur) {
    ensure();
    step = step || 0.16;
    const t0 = ctx.currentTime + 0.02;
    midis.forEach((m, i) => playMidi(m, t0 + i * step, dur || 0.9, 0.85));
  }

  // Gamme montante puis (option) descendante
  function playScale(midis, step, down) {
    ensure();
    step = step || 0.28;
    const t0 = ctx.currentTime + 0.02;
    let seq = midis.slice();
    if (down) seq = seq.concat(midis.slice(0, -1).reverse());
    seq.forEach((m, i) => playMidi(m, t0 + i * step, step * 0.95, 0.85));
    return seq.length * step;
  }

  // Progression : une liste d'accords (chaque accord = liste de MIDI)
  function playProgression(chords, chordDur) {
    ensure();
    chordDur = chordDur || 1.1;
    let t = ctx.currentTime + 0.05;
    chords.forEach(midis => {
      midis.forEach(m => playMidi(m, t, chordDur * 1.05, 0.72));
      t += chordDur;
    });
    return chords.length * chordDur;
  }

  global.Audio2 = { ensure, playFreq, playMidi, playChord, playArpeggio, playScale, playProgression };
})(typeof window !== 'undefined' ? window : this);
