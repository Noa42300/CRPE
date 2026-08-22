/**
 * Génère les icônes PNG de l'application (fond bleu encre + livre stylisé)
 * sans aucune dépendance externe : encodeur PNG minimal via zlib.
 * Lancé automatiquement avant le build (voir package.json → predev/prebuild
 * n'est pas utilisé ; on l'appelle à la main : `node scripts/make-icons.mjs`).
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public");
mkdirSync(OUT, { recursive: true });

// Couleurs (RVB)
const BG = [59, 91, 219]; // #3b5bdb
const PAGE1 = [255, 255, 255];
const PAGE2 = [219, 225, 247]; // #dbe1f7

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function makePng(size) {
  const w = size;
  const h = size;
  // Image RGBA
  const px = Buffer.alloc(w * h * 4);
  const set = (x, y, [r, g, b], a = 255) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const o = (y * w + x) * 4;
    px[o] = r;
    px[o + 1] = g;
    px[o + 2] = b;
    px[o + 3] = a;
  };

  const radius = size * 0.22;
  const inCorner = (x, y) => {
    // arrondit les coins
    const cx = Math.min(x, w - 1 - x);
    const cy = Math.min(y, h - 1 - y);
    if (cx < radius && cy < radius) {
      const dx = radius - cx;
      const dy = radius - cy;
      return dx * dx + dy * dy > radius * radius;
    }
    return false;
  };

  // Fond bleu (transparent hors des coins arrondis)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (inCorner(x, y)) set(x, y, [0, 0, 0], 0);
      else set(x, y, BG, 255);
    }
  }

  // Livre : deux pages inclinées
  const bx = size * 0.28;
  const by = size * 0.26;
  const bw = size * 0.44;
  const bh = size * 0.48;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const inBook = x >= bx && x <= bx + bw && y >= by && y <= by + bh;
      if (!inBook) continue;
      const mid = bx + bw / 2;
      set(x, y, x < mid ? PAGE1 : PAGE2, 255);
    }
  }
  // Reliure centrale
  const mid = Math.round(bx + bw / 2);
  for (let y = Math.round(by); y <= Math.round(by + bh); y++) {
    set(mid, y, BG, 160);
  }

  // Encodage PNG (filtre 0 par scanline)
  const raw = Buffer.alloc(h * (w * 4 + 1));
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0;
    px.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const idat = deflateSync(raw, { level: 9 });

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

for (const size of [192, 512]) {
  const png = makePng(size);
  writeFileSync(join(OUT, `icon-${size}.png`), png);
  console.log(`icon-${size}.png (${png.length} octets)`);
}
