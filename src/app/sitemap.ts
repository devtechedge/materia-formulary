import type { MetadataRoute } from "next";

const BASE = "https://materia-formulary.vercel.app";
const PATHS = ["", "/browse", "/compare", "/draft", "/audit", "/methodology", "/journal"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-11-26T00:00:00Z"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
