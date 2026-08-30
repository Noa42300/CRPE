/** Petits calculs géo depuis Paris (pour situer un pays). */
const PARIS = { lat: 48.85, lon: 2.35 };

export function distanceKm(lat: number, lon: number): number {
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

export function direction(lat: number, lon: number): string {
  const f1 = (PARIS.lat * Math.PI) / 180;
  const f2 = (lat * Math.PI) / 180;
  const dl = ((lon - PARIS.lon) * Math.PI) / 180;
  const y = Math.sin(dl) * Math.cos(f2);
  const x = Math.cos(f1) * Math.sin(f2) - Math.sin(f1) * Math.cos(f2) * Math.cos(dl);
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  const dirs = ["nord", "nord-est", "est", "sud-est", "sud", "sud-ouest", "ouest", "nord-ouest"];
  return dirs[Math.round(((brng + 360) % 360) / 45) % 8];
}
