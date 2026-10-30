/* Transfert direct téléphone → PC en Wi-Fi (WebRTC).
 * Un relais sert seulement à ce que les deux appareils se trouvent (code à 6 chiffres) :
 * Supabase Realtime si le site l'a configuré, sinon ntfy.sh (service public, sans compte).
 * La vidéo passe ensuite en direct par le réseau local, jamais par le relais.
 * Utilisé par index.html (envoi) et pc.html (réception). */
(function () {
  'use strict';
  const ICE = [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }];
  const MB = 1048576;
  let client = null;

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.onload = res;
      s.onerror = () => rej(new Error('chargement impossible (' + src + ')'));
      document.head.appendChild(s);
    });
  }

  // Canal de mise en relation. ?signal=local : BroadcastChannel entre deux onglets (tests).
  async function signal(code, onMsg) {
    if (new URLSearchParams(location.search).get('signal') === 'local') {
      const bc = new BroadcastChannel('tp-' + code), me = Math.random();
      bc.onmessage = (e) => { if (e.data.from !== me) onMsg(e.data.msg); };
      return { send: (m) => bc.postMessage({ from: me, msg: m }), close: () => bc.close() };
    }
    const relay = new URLSearchParams(location.search).get('relay');
    const cfg = relay ? {} : await fetch('/api/teleprompteur/config', { cache: 'no-store' }).then((r) => r.json()).catch(() => ({}));
    if (!cfg.url || !cfg.key) return ntfySignal(code, onMsg, relay || 'https://ntfy.sh');
    if (!window.supabase) await loadScript(new URL('vendor/supabase.js', document.currentScript ? document.currentScript.src : location.href).href);
    client = client || window.supabase.createClient(cfg.url, cfg.key, { auth: { persistSession: false, autoRefreshToken: false } });
    const ch = client.channel('tp-transfer-' + code, { config: { broadcast: { self: false } } });
    ch.on('broadcast', { event: 'sig' }, ({ payload }) => onMsg(payload));
    await new Promise((res, rej) => {
      const t = setTimeout(() => rej(new Error('le relais ne répond pas')), 15000);
      ch.subscribe((st) => {
        if (st === 'SUBSCRIBED') { clearTimeout(t); res(); }
        else if (st === 'CHANNEL_ERROR' || st === 'TIMED_OUT') { clearTimeout(t); rej(new Error('relais indisponible (' + st + ')')); }
      });
    });
    return { send: (m) => ch.send({ type: 'broadcast', event: 'sig', payload: m }), close: () => client.removeChannel(ch) };
  }

  // Relais ntfy.sh : messages publiés en HTTP, reçus en flux (SSE).
  // ntfy limite un message à 4 Ko : les messages plus longs sont envoyés en morceaux.
  async function ntfySignal(code, onMsg, base) {
    const url = base.replace(/\/$/, '') + '/crpe-teleprompteur-' + code;
    const me = Math.random().toString(36).slice(2), pieces = {};
    const es = new EventSource(url + '/sse');
    await new Promise((res, rej) => {
      const t = setTimeout(() => { es.close(); rej(new Error('le relais ne répond pas')); }, 12000);
      es.onopen = () => { clearTimeout(t); res(); };
    });
    es.onmessage = (e) => {
      let d, m;
      try { d = JSON.parse(e.data); if (d.event !== 'message') return; m = JSON.parse(d.message); } catch { return; }
      if (m.from === me) return;
      const box = pieces[m.id] = pieces[m.id] || [];
      box[m.i] = m.d;
      if (box.filter((x) => x !== undefined).length < m.n) return;
      delete pieces[m.id];
      try { onMsg(JSON.parse(box.join(''))); } catch {}
    };
    let queue = Promise.resolve();
    return {
      send(msg) {
        const str = JSON.stringify(msg), id = Math.random().toString(36).slice(2), n = Math.ceil(str.length / 3000) || 1;
        for (let i = 0; i < n; i++) {
          const body = JSON.stringify({ from: me, id, i, n, d: str.slice(i * 3000, (i + 1) * 3000) });
          queue = queue.then(() => fetch(url, { method: 'POST', body }).catch(() => {}));
        }
        return queue;
      },
      close() { es.close(); }
    };
  }

  // Connexion pair à pair. Les adresses réseau sont rassemblées avant l'envoi de l'offre/réponse :
  // un seul message par côté, moins de dépendance au relais.
  function peer() {
    const pc = new RTCPeerConnection({ iceServers: ICE });
    return {
      pc,
      remote: (desc) => pc.setRemoteDescription(desc),
      async local(desc) {
        await pc.setLocalDescription(desc);
        if (pc.iceGatheringState !== 'complete') {
          await new Promise((res) => {
            const t = setTimeout(res, 4000);
            pc.addEventListener('icegatheringstatechange', () => { if (pc.iceGatheringState === 'complete') { clearTimeout(t); res(); } });
          });
        }
        return pc.localDescription.toJSON();
      },
      ice() {}
    };
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Envoi d'un fichier (Blob) sur un canal de données ouvert.
  // Le PC confirme ce qu'il a écrit sur disque (ack) : on ne prend jamais plus de 64 Mo d'avance.
  async function sendFile(dc, pc, file, onProgress) {
    let acked = 0, done = false, failed = null;
    const result = new Promise((res, rej) => {
      dc.addEventListener('message', (e) => {
        const m = JSON.parse(e.data);
        if (m.t === 'ack') acked = m.n;
        if (m.t === 'done') { done = true; res(m.n); }
        if (m.t === 'error') { failed = new Error(m.message); rej(failed); }
      });
      dc.addEventListener('close', () => { if (!done) rej(failed || new Error('connexion coupée')); });
    });
    result.catch(() => {});
    const size = file.size;
    const msg = Math.min(64 * 1024, (pc.sctp && pc.sctp.maxMessageSize) || 64 * 1024);
    dc.bufferedAmountLowThreshold = 2 * MB;
    dc.send(JSON.stringify({ t: 'start', name: file.name, size, type: file.type }));
    const t0 = performance.now();
    let sent = 0;
    while (sent < size) {
      const buf = await file.slice(sent, Math.min(size, sent + 8 * MB)).arrayBuffer();
      for (let p = 0; p < buf.byteLength; p += msg) {
        while (dc.readyState === 'open' && (dc.bufferedAmount > 8 * MB || sent + p - acked > 64 * MB)) await sleep(15);
        if (dc.readyState !== 'open') throw failed || new Error('connexion coupée');
        dc.send(buf.slice(p, p + msg));
      }
      sent += buf.byteLength;
      onProgress(sent, size, sent / ((performance.now() - t0) / 1000));
    }
    dc.send(JSON.stringify({ t: 'end', n: size }));
    return result;
  }

  // ---------- Mode « relais de flux » (sans WebRTC) ----------
  // L'app de l'écran d'accueil d'iPhone peut ne pas avoir WebRTC. On passe alors par un piping server
  // (ppng.io) : le téléphone envoie chaque morceau en POST, le PC le lit au même moment en GET ;
  // le serveur fait seulement passer les octets, il ne stocke rien.
  const PIPE_PART = 32 * MB;
  function pipeBase() { return new URLSearchParams(location.search).get('pipe') || 'https://ppng.io'; }

  async function retry(times, fn) {
    for (let k = 0; ; k++) {
      try { return await fn(); } catch (e) { if (k + 1 >= times) throw e; await sleep(1500 * (k + 1)); }
    }
  }

  async function pipeSend(pipe, file, onProgress) {
    const parts = Math.ceil(file.size / pipe.part);
    const t0 = performance.now();
    for (let i = 0; i < parts; i++) {
      const a = i * pipe.part, b = Math.min(file.size, a + pipe.part);
      await retry(4, async () => {
        const r = await fetch(pipe.base + '/' + pipe.id + '-' + i, { method: 'POST', body: file.slice(a, b) });
        if (!r.ok) throw new Error('relais ' + r.status);
      });
      onProgress(b, file.size, b / ((performance.now() - t0) / 1000));
    }
  }

  // Chaque morceau est gardé en mémoire (32 Mo) avant écriture : un morceau raté peut être relu sans corrompre le fichier.
  async function pipeReceive(pipe, size, write, onProgress) {
    const parts = Math.ceil(size / pipe.part);
    const t0 = performance.now();
    let done = 0;
    for (let i = 0; i < parts; i++) {
      const expected = Math.min(pipe.part, size - i * pipe.part);
      const buf = await retry(4, async () => {
        const r = await fetch(pipe.base + '/' + pipe.id + '-' + i, { cache: 'no-store' });
        if (!r.ok) throw new Error('relais ' + r.status);
        const reader = r.body.getReader(), chunks = [];
        let got = 0;
        for (;;) {
          const { value, done: end } = await reader.read();
          if (end) break;
          chunks.push(value); got += value.byteLength;
          onProgress(done + got, size, (done + got) / ((performance.now() - t0) / 1000));
        }
        if (got !== expected) throw new Error('morceau ' + (i + 1) + ' incomplet');
        return new Blob(chunks);
      });
      await write(buf);
      done += expected;
      onProgress(done, size, done / ((performance.now() - t0) / 1000));
    }
    return done;
  }

  function newPipe() {
    const id = 'crpe-tp-' + Array.from(crypto.getRandomValues(new Uint8Array(12)), (x) => x.toString(16).padStart(2, '0')).join('');
    return { base: pipeBase(), id, part: PIPE_PART };
  }

  window.TPTransfer = { signal, peer, sendFile, pipeSend, pipeReceive, newPipe, MB };
})();
