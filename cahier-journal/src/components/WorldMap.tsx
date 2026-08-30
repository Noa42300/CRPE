/**
 * Planisphère clair et épuré (projection Equal Earth), 100 % autonome.
 * Le pays cible est mis en couleur, la France en bleu, et un repère marque
 * précisément chaque position (utile pour les petits pays insulaires).
 * Données : world-atlas (bundlées) — aucune requête réseau, fonctionne hors ligne.
 */
import { useMemo } from "react";
import { geoEqualEarth, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import worldData from "world-atlas/countries-110m.json";

const W = 900;
const H = 460;

// Extrait les frontières une seule fois (hors Antarctique, pour l'épure).
const COUNTRIES: Feature<Geometry, { name: string }>[] = (() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fc = feature(worldData as any, (worldData as any).objects.countries) as unknown as FeatureCollection<Geometry, { name: string }>;
  return fc.features.filter((f) => String(f.id) !== "010");
})();

const PARIS: [number, number] = [2.35, 48.85];

export function WorldMap({
  iso,
  lat,
  lon,
  accent = "#f97316",
  nom,
  drapeau,
}: {
  iso: string;
  lat: number;
  lon: number;
  accent?: string;
  nom: string;
  drapeau: string;
}) {
  const { paths, target, franceXY, targetXY, sphereD, graticuleD } = useMemo(() => {
    const projection = geoEqualEarth().fitExtent(
      [
        [16, 16],
        [W - 16, H - 16],
      ],
      { type: "Sphere" },
    );
    const path = geoPath(projection);
    const paths = COUNTRIES.map((f) => ({
      id: String(f.id),
      d: path(f) ?? "",
      isFrance: String(f.id) === "250",
      isTarget: String(f.id) === iso,
    }));
    return {
      paths,
      target: paths.find((p) => p.isTarget) ?? null,
      franceXY: projection(PARIS),
      targetXY: projection([lon, lat]),
      sphereD: path({ type: "Sphere" }) ?? "",
      graticuleD: path(geoGraticule10()) ?? "",
    };
  }, [iso, lat, lon]);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Carte : ${nom}`}>
      <defs>
        <clipPath id="sphere-clip"><path d={sphereD} /></clipPath>
      </defs>
      {/* océan */}
      <path d={sphereD} fill="#dceffb" stroke="#bcdcef" strokeWidth={1.5} />
      <g clipPath="url(#sphere-clip)">
        <path d={graticuleD} fill="none" stroke="#c7e2f2" strokeWidth={0.5} />
        {paths.map((p) => (
          <path
            key={p.id}
            d={p.d}
            fill={p.isTarget ? accent : p.isFrance ? "#3b82f6" : "#e7e2d8"}
            stroke="#ffffff"
            strokeWidth={0.4}
          />
        ))}
      </g>

      {/* repère France */}
      {franceXY && (
        <g transform={`translate(${franceXY[0]},${franceXY[1]})`}>
          <circle r={5} fill="#2563eb" stroke="#fff" strokeWidth={2} />
          <text y={-9} textAnchor="middle" fontSize={15} fontWeight={700} fill="#1e3a8a" fontFamily="Lexend, system-ui" stroke="#fff" strokeWidth={3} paintOrder="stroke">France</text>
        </g>
      )}
      {/* repère pays cible */}
      {targetXY && (
        <g transform={`translate(${targetXY[0]},${targetXY[1]})`}>
          <circle r={6} fill={accent} stroke="#fff" strokeWidth={2} />
          <text y={20} textAnchor="middle" fontSize={17} fontWeight={800} fill="#7c2d12" fontFamily="Lexend, system-ui" stroke="#fff" strokeWidth={3.5} paintOrder="stroke">{drapeau} {nom}</text>
        </g>
      )}
      {!target && targetXY && (
        <text x={targetXY[0]} y={targetXY[1] - 12} textAnchor="middle" fontSize={11} fill="#9a3412">(petite île)</text>
      )}
    </svg>
  );
}
