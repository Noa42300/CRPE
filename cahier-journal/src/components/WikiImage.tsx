/**
 * Image illustrative chargée depuis Wikipédia (fr) via l'API PageImages
 * (CORS activé par `origin=*`, redirections suivies). Affiche une vraie photo
 * libre de droits pour un monument / une tradition. Repli élégant si l'image
 * est indisponible (hors ligne, titre introuvable).
 *
 * Nécessite une connexion la première fois ; l'image est ensuite mise en cache
 * par le navigateur.
 */
import { useEffect, useState } from "react";

export function WikiImage({
  title,
  alt,
  accent,
  height = "clamp(180px, 30vh, 320px)",
}: {
  title: string;
  alt: string;
  accent: string;
  height?: string;
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    setSrc(null);
    setFailed(false);
    if (!title) { setFailed(true); return; }
    const url =
      "https://fr.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages" +
      "&piprop=thumbnail&pithumbsize=1200&redirects=1&origin=*&titles=" +
      encodeURIComponent(title);
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (!alive) return;
        const pages = d?.query?.pages ?? {};
        const first = Object.values(pages)[0] as { thumbnail?: { source?: string } } | undefined;
        const s = first?.thumbnail?.source;
        if (s) setSrc(s);
        else setFailed(true);
      })
      .catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [title]);

  const search = `https://fr.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(title)}`;

  if (failed || !src) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed text-center"
        style={{ height, borderColor: accent, background: `${accent}12` }}
      >
        {src === null && !failed ? (
          <span className="animate-pulse text-sm font-bold" style={{ color: accent }}>Chargement de l'image…</span>
        ) : (
          <>
            <span className="text-sm font-bold" style={{ color: accent }}>{alt}</span>
            <a href={search} target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: accent }}>
              Voir des images ↗
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <figure className="m-0 overflow-hidden rounded-2xl" style={{ height }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
        style={{ height }}
      />
    </figure>
  );
}
