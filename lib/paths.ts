/** Sub-calea pe care e servit site-ul (ex. „/phoenix-demo” pe GitHub Pages). Goală local. */
export const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Adresa publică a site-ului, fără „/” la final. */
export const siteUrl = (process.env.SITE_URL ?? "https://manolacheioan.github.io/phoenix-demo").replace(/\/$/, "");

export const imageWidths = [640, 1024, 1600] as const;

/** srcset pentru o poză din public/images. */
export function srcSet(id: string) {
  return imageWidths.map((w) => `${base}/images/${id}-${w}.webp ${w}w`).join(", ");
}
export function src(id: string, w: (typeof imageWidths)[number] = 1024) {
  return `${base}/images/${id}-${w}.webp`;
}
