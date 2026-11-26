// Prelucrează pozele sursă (Unsplash) cu aceeași corecție de culoare și le exportă WebP responsive.
// Folosire: node scripts/images.mjs <folder-surse>
import sharp from "sharp";
import fs from "node:fs";
const src = process.argv[2];
const map = { hero: "machines", forta: "powerrack", cardio: "cardiorow", gantere: "dumbbells", sala: "darkgym", vestiar: "lockergray", bar: "whey", industrial: "industrial" };
const widths = [640, 1024, 1600];
const out = {};
for (const [name, file] of Object.entries(map)) {
  const base = sharp(`${src}/${file}.jpg`).rotate();
  const meta = await base.metadata();
  const graded = await base
    .modulate({ saturation: 0.8, brightness: 0.97 })
    .composite([{ input: { create: { width: meta.width, height: meta.height, channels: 4, background: { r: 19, g: 32, b: 63, alpha: 0.14 } } }, blend: "soft-light" }])
    .toBuffer();
  for (const w of widths) {
    await sharp(graded).resize({ width: w, withoutEnlargement: true }).webp({ quality: 74, effort: 6 }).toFile(`public/images/${name}-${w}.webp`);
  }
  out[name] = { w: meta.width, h: meta.height };
}
console.log(JSON.stringify(out));
