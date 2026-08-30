/**
 * Petite carte du monde (projection simple) pour situer un pays par rapport à
 * la France. Graticule + repères de continents + deux marqueurs (France et le
 * pays) reliés par un trait, avec la direction et la distance approximative.
 * 100 % autonome (aucune image externe), lisible au vidéoprojecteur.
 */

const PARIS = { lat: 48.85, lon: 2.35 };

// viewBox 360 × 180 (équirectangulaire : x = lon+180, y = 90-lat).
const W = 360;
const H = 180;
const px = (lon: number) => lon + 180;
const py = (lat: number) => 90 - lat;

const CONTINENTS: { nom: string; lat: number; lon: number }[] = [
  { nom: "Europe", lat: 55, lon: 15 },
  { nom: "Afrique", lat: 3, lon: 20 },
  { nom: "Asie", lat: 48, lon: 95 },
  { nom: "Amérique du Nord", lat: 48, lon: -100 },
  { nom: "Amérique du Sud", lat: -15, lon: -60 },
  { nom: "Océanie", lat: -25, lon: 140 },
];

function distanceKm(lat: number, lon: number): number {
  const R = 6371;
  const dLat = ((lat - PARIS.lat) * Math.PI) / 180;
  const dLon = ((lon - PARIS.lon) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((PARIS.lat * Math.PI) / 180) *
      Math.cos((lat * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function direction(lat: number, lon: number): string {
  const φ1 = (PARIS.lat * Math.PI) / 180;
  const φ2 = (lat * Math.PI) / 180;
  const Δλ = ((lon - PARIS.lon) * Math.PI) / 180;
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x =
    Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  const dirs = ["nord", "nord-est", "est", "sud-est", "sud", "sud-ouest", "ouest", "nord-ouest"];
  return dirs[Math.round(((brng + 360) % 360) / 45) % 8];
}

export function WorldMiniMap({
  lat,
  lon,
  drapeau,
  nom,
}: {
  lat: number;
  lon: number;
  drapeau: string;
  nom: string;
}) {
  const dist = Math.round(distanceKm(lat, lon) / 100) * 100;
  const dir = direction(lat, lon);

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl border border-stone-200 bg-[#dbeafe] dark:border-stone-700" role="img" aria-label={`Carte : ${nom} par rapport à la France`}>
        {/* mers */}
        <rect x={0} y={0} width={W} height={H} fill="#cfe3f7" />
        {/* graticule tous les 30° */}
        {[30, 60, 90, 120, 150].map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={W} y2={y} stroke="#a9c7e8" strokeWidth={0.4} />
        ))}
        {[60, 120, 180, 240, 300].map((x) => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={H} stroke="#a9c7e8" strokeWidth={0.4} />
        ))}
        {/* équateur + méridien de Greenwich, un peu plus marqués */}
        <line x1={0} y1={py(0)} x2={W} y2={py(0)} stroke="#8fb3da" strokeWidth={0.8} />
        <line x1={px(0)} y1={0} x2={px(0)} y2={H} stroke="#8fb3da" strokeWidth={0.8} />

        {/* étiquettes de continents */}
        {CONTINENTS.map((c) => (
          <text key={c.nom} x={px(c.lon)} y={py(c.lat)} textAnchor="middle" fontSize={5.5} fill="#5b7391" fontFamily="ui-sans-serif, system-ui" style={{ fontWeight: 600 }}>
            {c.nom}
          </text>
        ))}

        {/* trait France → pays */}
        <line x1={px(PARIS.lon)} y1={py(PARIS.lat)} x2={px(lon)} y2={py(lat)} stroke="#c9481f" strokeWidth={1} strokeDasharray="3 2" />

        {/* marqueur France */}
        <circle cx={px(PARIS.lon)} cy={py(PARIS.lat)} r={3} fill="#2563eb" stroke="#fff" strokeWidth={1} />
        <text x={px(PARIS.lon)} y={py(PARIS.lat) - 5} textAnchor="middle" fontSize={6} fill="#1e3a8a" fontFamily="ui-sans-serif, system-ui" style={{ fontWeight: 700 }}>
          France
        </text>

        {/* marqueur pays */}
        <circle cx={px(lon)} cy={py(lat)} r={3.4} fill="#c9481f" stroke="#fff" strokeWidth={1} />
        <text x={px(lon)} y={py(lat) + 9} textAnchor="middle" fontSize={6.5} fill="#7c2d12" fontFamily="ui-sans-serif, system-ui" style={{ fontWeight: 700 }}>
          {drapeau} {nom}
        </text>
      </svg>

      <p className="mt-3 text-center text-lg text-stone-700 dark:text-stone-200">
        {drapeau} <strong>{nom}</strong> se trouve au <strong>{dir}</strong> de la France,
        à environ <strong>{dist.toLocaleString("fr-FR")} km</strong>.
      </p>
    </div>
  );
}
