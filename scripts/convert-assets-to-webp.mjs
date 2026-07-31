/**
 * Converts referenced raster assets to WebP and removes unused files.
 * Run: node scripts/convert-assets-to-webp.mjs
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

/** Already WebP; do not re-encode or delete (retention list for prune step). */
const KEEP_WEBP_ONLY = [
  "assets/treatments/notox-hero.webp",
  "assets/treatments/drip-spa-infusionen-hero.webp",
  "assets/treatments/treatments-hero.webp",
  "assets/treatments/liposana-3-hero.webp",
];

/** Paths under public/ that the app references (keep + convert). */
const USED_REL = [
  "assets/about/meso-annette.jpg",
  "assets/home/meso10.jpg",
  "assets/home/spa2.jpg",
  "assets/home/spa5.jpg",
  "assets/home/spa6.jpg",
  "assets/in.png",
  "assets/ing5.png",
  "assets/ing6.png",
  "assets/ing7.png",
  "assets/new5.jpg",
  "assets/new6.jpg",
  "assets/new8.jpg",
  "assets/vitamin1.png",
  "assets/vitamin2.png",
  "assets/vitamin3.png",
  "assets/treatments/doll-lips.jpeg",
  "assets/treatments/girls2.jpg",
  "assets/treatments/girls3.png",
  "assets/treatments/img.jpg",
  "assets/treatments/meso8.jpg",
  "assets/treatments/spa10.jpg",
  "assets/treatments/pdo-faden/spa8.jpg",
  "assets/treatments/pdo-faden/spa9.jpg",
];

const RASTER = /\.(jpe?g|png|gif|webp)$/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.name.startsWith("._")) {
      await fs.unlink(full).catch(() => {});
      continue;
    }
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function toWebpRel(rel) {
  return rel.replace(/\.(jpe?g|png|gif)$/i, ".webp");
}

async function main() {
  const converted = [];

  for (const rel of USED_REL) {
    const input = path.join(publicDir, rel);
    try {
      await fs.access(input);
    } catch {
      console.warn("Missing (skip):", rel);
      continue;
    }

    const webpRel = toWebpRel(rel);
    const output = path.join(publicDir, webpRel);
    await fs.mkdir(path.dirname(output), { recursive: true });

    await sharp(input)
      .rotate()
      .webp({ quality: 82, effort: 4 })
      .toFile(output);

    const [srcStat, outStat] = await Promise.all([
      fs.stat(input),
      fs.stat(output),
    ]);
    console.log(
      `${rel} → ${webpRel} (${Math.round(srcStat.size / 1024)}KB → ${Math.round(outStat.size / 1024)}KB)`
    );

    await fs.unlink(input);
    converted.push(webpRel);
  }

  const keepWebp = new Set(
    [
      ...converted.map((r) => path.join(publicDir, r)),
      ...KEEP_WEBP_ONLY.map((r) => path.join(publicDir, r)),
    ]
  );
  const allFiles = await walk(publicDir);

  for (const file of allFiles) {
    const base = path.basename(file);
    if (base.startsWith("._")) {
      await fs.unlink(file).catch(() => {});
      continue;
    }
    if (!RASTER.test(file)) continue;
    if (keepWebp.has(file)) continue;
    await fs.unlink(file);
    console.log("Removed unused:", path.relative(publicDir, file));
  }

  console.log(`Done. ${converted.length} WebP assets kept.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
