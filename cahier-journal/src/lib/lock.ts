/**
 * Verrouillage par code PIN
 * -------------------------
 * Protège l'ouverture de l'application sur un appareil partagé. Seule une
 * EMPREINTE salée (SHA-256) du code est stockée localement — jamais le code
 * lui-même, jamais en ligne. C'est une protection côté appareil (pas un
 * secret serveur) : les données locales ne sont pas chiffrées.
 */

const KEY = "cj_pin";

interface StoredPin {
  salt: string;
  hash: string;
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function randomSalt(): string {
  const a = new Uint8Array(16);
  crypto.getRandomValues(a);
  return Array.from(a)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return toHex(digest);
}

function read(): StoredPin | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as StoredPin;
    return p.salt && p.hash ? p : null;
  } catch {
    return null;
  }
}

/** Un code est-il défini ? */
export function hasPin(): boolean {
  return read() !== null;
}

/** Définit (ou remplace) le code PIN. */
export async function setPin(pin: string): Promise<void> {
  const salt = randomSalt();
  const hash = await sha256(salt + pin);
  try {
    localStorage.setItem(KEY, JSON.stringify({ salt, hash }));
  } catch {
    /* stockage indisponible : on ignore */
  }
}

/** Retire le code PIN. */
export function clearPin(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

/** Vérifie un code saisi. */
export async function verifyPin(pin: string): Promise<boolean> {
  const stored = read();
  if (!stored) return true; // pas de code = ouvert
  const hash = await sha256(stored.salt + pin);
  return hash === stored.hash;
}
