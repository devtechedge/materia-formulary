// Captures first-visual screenshots and the social preview from the live alias.
// Run: SITE_URL=https://materia-formulary.vercel.app node scripts/capture-visual.mjs
export {};

import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const base = process.env.SITE_URL ?? "https://materia-formulary.vercel.app";
const out = "docs/screenshots";
await mkdir(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

const shots = [
  ["/", "01-formulary-desk.png"],
  ["/audit", "02-stack-audit.png"],
  ["/browse/collagen-hydrolysate", "03-monograph.png"],
];

for (const [route, file] of shots) {
  await page.goto(base + route, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${out}/${file}` });
  console.log(`captured ${file}`);
}

const social = await browser.newPage({ viewport: { width: 1280, height: 640 }, deviceScaleFactor: 1 });
await social.setContent(`<!doctype html><html><head><style>
  * { box-sizing: border-box; }
  body { margin: 0; background: #13202e; color: #f3f0e7; font-family: Arial, sans-serif; }
  .frame { width: 1280px; height: 640px; padding: 72px; display: flex; flex-direction: column; justify-content: space-between; }
  .mark { width: 26px; height: 26px; background: #b03d28; }
  .brand { font: 600 30px Georgia, serif; letter-spacing: .12em; margin-top: 22px; }
  h1 { font: 600 66px Georgia, serif; line-height: 1.05; margin: 0; max-width: 1000px; }
  .rule { height: 2px; background: #b03d28; width: 140px; }
  .row { display: flex; gap: 28px; font: 18px Arial, sans-serif; color: #a9b5c1; }
  .row b { color: #f3f0e7; font-weight: 600; }
</style></head><body><div class="frame">
  <div><div class="mark"></div><div class="brand">MATERIA</div></div>
  <div><h1>What you take,<br>examined properly.</h1><div class="rule" style="margin-top:28px"></div></div>
  <div class="row"><span><b>130</b> monographs</span><span><b>30</b> deterministic rules</span><span><b>A to D</b> evidence grades</span><span><b>One</b> printable Protocol Card</span></div>
</div></body></html>`);
await social.screenshot({ path: `${out}/social-preview.png` });
console.log("captured social-preview.png");

await browser.close();
