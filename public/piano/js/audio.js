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

  // Joue une note (fréquence) à un instant t, pour une durée donnée.
  // Son « piano » : harmoniques légèrement inharmoniques + bruit de marteau
  // à l'attaque + filtre passe-bas qui se referme (le timbre s'assombrit).
  function playFreq(freq, when, dur, vel) {
    ensure();
    const t = when != null ? when : ctx.currentTime;
    dur = dur || 1.1;
    vel = vel == null ? 0.8 : vel;

    const voice = ctx.createGain();
    // filtre par note : brillant à l'attaque, se referme ensuite
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    tone.Q.value = 0.6;
    tone.frequency.setValueAtTime(Math.min(9000, freq * 8 + 2500), t);
    tone.frequency.exponentialRampToValueAtTime(Math.max(700, freq * 3), t + Math.min(dur, 1.4));
    voice.connect(tone);
    tone.connect(master);

    // Harmoniques : l'inharmonicité (léger # des aigus) donne le grain du piano.
    const partials = [
      { r: 1,    g: 1.0,  d: 1.00 },
      { r: 2.001,g: 0.50, d: 0.85 },
      { r: 3.003,g: 0.28, d: 0.70 },
      { r: 4.006,g: 0.15, d: 0.55 },
      { r: 5.01, g: 0.09, d: 0.45 },
      { r: 6.02, g: 0.05, d: 0.35 }
    ];
    const peak = 0.15 * vel;
    partials.forEach(p => {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq * p.r;
      const g = ctx.createGain();
      // chaque partiel a sa propre enveloppe : les aigus s'éteignent plus vite
      const pk = peak * p.g;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(pk, t + 0.006);
      g.gain.exponentialRampToValueAtTime(pk * 0.30, t + 0.25 * p.d);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur * p.d + 0.05);
      o.connect(g); g.connect(voice);
      o.start(t); o.stop(t + dur + 0.08);
    });

    // Bruit de marteau : très court, filtré, pour l'attaque « percussive »
    const nLen = 0.03;
    const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * nLen), ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const nf = ctx.createBiquadFilter();
    nf.type = 'bandpass'; nf.frequency.value = Math.min(6000, freq * 4 + 1500); nf.Q.value = 0.8;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.06 * vel, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + nLen);
    noise.connect(nf); nf.connect(ng); ng.connect(master);
    noise.start(t); noise.stop(t + nLen + 0.01);
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
