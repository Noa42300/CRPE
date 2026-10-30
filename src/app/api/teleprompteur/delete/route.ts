/**
 * Téléprompteur : supprime de Vercel Blob une prise déjà téléchargée
 * (le stockage gratuit est limité, il faut libérer la place).
 */
import { del } from "@vercel/blob";

export async function POST(request: Request) {
  const { url } = (await request.json()) as { url?: string };
  let target: URL;
  try {
    target = new URL(url ?? "");
  } catch {
    return Response.json({ error: "Adresse invalide" }, { status: 400 });
  }
  // Uniquement les fichiers envoyés par le téléprompteur, sur le stockage Vercel Blob.
  if (!target.hostname.endsWith(".blob.vercel-storage.com") || !target.pathname.startsWith("/teleprompteur/")) {
    return Response.json({ error: "Fichier refusé" }, { status: 400 });
  }
  try {
    await del(target.origin + target.pathname);
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
