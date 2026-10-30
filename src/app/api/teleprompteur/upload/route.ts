/**
 * Téléprompteur (/teleprompteur/) : autorise l'envoi direct d'une prise vers Vercel Blob.
 * Le fichier part du téléphone vers le stockage sans passer par ce serveur
 * (« client upload ») : seule la petite demande d'autorisation arrive ici.
 * Nécessite un store Vercel Blob relié au projet (variable BLOB_READ_WRITE_TOKEN).
 */
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody;
  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith("teleprompteur/")) throw new Error("Chemin refusé");
        return {
          allowedContentTypes: ["video/mp4", "video/webm", "video/quicktime"],
          maximumSizeInBytes: 4 * 1024 * 1024 * 1024,
          addRandomSuffix: true,
        };
      },
    });
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 400 });
  }
}
