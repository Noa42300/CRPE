/**
 * Carte régionale « zoomée » (projection Mercator), 100 % autonome et hors ligne.
 * On cadre serré sur la région qui contient le pays cible ET la France : pour un
 * pays d'Europe, on obtient l'Europe occidentale/centrale (et non un planisphère).
 * Le pays cible est en BLEU VIF, la France en ORANGE, les autres pays grisés.
 * Données : world-atlas (bundlées).
 */
import { useMemo } from "react";
import { geoMercator, geoPath, geoCircle } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import worldData from "world-atlas/countries-110m.json";

const W = 900;
const H = 500;
const TARGET = "#2563eb"; // bleu vif
const FRANCE = "#f97316"; // orange

const COUNTRIES: Feature<Geometry, { name: string }>[] = (() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fc = feature(worldData as any, (worldData as any).objects.countries) as unknown as FeatureCollection<Geometry, { name: string }>;
  return fc.features.filter((f) => String(f.id) !== "010");
})();

const byId = (id: string) => COUNTRIES.find((f) => String(f.id) === id);
const PARIS: [number, number] = [2.35, 48.85];

export function WorldMap({
  iso,
  lat,
  lon,
  nom,
}: {
  iso: string;
  lat: number;
  lon: number;
  accent?: string;
  nom: string;
  drapeau?: string;
}) {
  const { paths, sphere, franceXY, targetXY, proxy } = useMemo(() => {
    const target = byId(iso);
    // Zone à cadrer : pays cible (ou petit disque autour du point) + Paris.
    // On cadre sur Paris (France métropolitaine) et non sur la géométrie
    // complète de la France, qui inclut la Guyane et fausserait le zoom.
    const proxy: Feature<Geometry, object> | null = target
      ? null
      : { type: "Feature", geometry: geoCircle().center([lon, lat]).radius(4)(), properties: {} };
    const parisFocus: Feature<Geometry, object> = {
      type: "Feature", geometry: geoCircle().center(PARIS).radius(2.5)(), properties: {},
    };
    const focus: Feature<Geometry, object>[] = [target, proxy, parisFocus].filter(Boolean) as Feature<Geometry, object>[];
    const fc: FeatureCollection = { type: "FeatureCollection", features: focus };

    const projection = geoMercator().fitExtent([[28, 28], [W - 28, H - 28]], fc);
    const path = geoPath(projection);
    const paths = COUNTRIES.map((f) => ({
      id: String(f.id),
      d: path(f) ?? "",
      role: String(f.id) === "250" ? "france" : String(f.id) === iso ? "target" : "other",
    }));
    return {
      paths,
      sphere: proxy ? path(proxy) ?? "" : "",
      franceXY: projection(PARIS),
      targetXY: projection([lon, lat]),
      proxy,
    };
  }, [iso, lat, lon]);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Carte : ${nom}`}>
      <rect x={0} y={0} width={W} height={H} fill="#dbeafe" />
      {paths.map((p) => (
        <path
          key={p.id}
          d={p.d}
          fill={p.role === "target" ? TARGET : p.role === "france" ? FRANCE : "#e4e1d8"}
          stroke="#ffffff"
          strokeWidth={0.7}
        />
      ))}
      {/* petit pays insulaire non cartographié : disque proxy en bleu */}
      {proxy && <path d={sphere} fill={TARGET} stroke="#fff" strokeWidth={1} />}

      {/* repère + nom France */}
      {franceXY && (
        <g transform={`translate(${franceXY[0]},${franceXY[1]})`}>
          <circle r={5} fill={FRANCE} stroke="#fff" strokeWidth={2} />
          <text y={-10} textAnchor="middle" fontSize={20} fontWeight={800} fill="#9a3412" fontFamily="Lexend, system-ui" stroke="#fff" strokeWidth={4} paintOrder="stroke">France</text>
        </g>
      )}
      {/* repère + nom pays cible */}
      {targetXY && (
        <g transform={`translate(${targetXY[0]},${targetXY[1]})`}>
          <circle r={6} fill={TARGET} stroke="#fff" strokeWidth={2} />
          <text y={24} textAnchor="middle" fontSize={22} fontWeight={800} fill="#1e3a8a" fontFamily="Lexend, system-ui" stroke="#fff" strokeWidth={4.5} paintOrder="stroke">{nom}</text>
        </g>
      )}
    </svg>
  );
}
