import { describe, expect, it } from "vitest";

import { categories, monographBySlug, monographs } from "@/data";

describe("formulary dataset", () => {
  it("ships at least one hundred unique monographs", () => {
    expect(monographs.length).toBeGreaterThanOrEqual(100);
    expect(new Set(monographs.map((item) => item.slug)).size).toBe(monographs.length);
  });

  it("includes the six priority ingredients", () => {
    for (const slug of [
      "collagen-hydrolysate",
      "nac",
      "triple-strength-fish-oil",
      "zinc-picolinate",
      "liposomal-glutathione",
      "ghk-cu",
    ]) {
      expect(monographBySlug.has(slug)).toBe(true);
    }
  });

  it("gives every entry a source, a dose and a review date", () => {
    for (const monograph of monographs) {
      expect(monograph.citations.length).toBeGreaterThan(0);
      expect(monograph.provenance).toMatch(/^https:\/\//);
      expect(monograph.doseRange.high).toBeGreaterThan(0);
      expect(monograph.lastReviewed).toBe("2026-11-26");
    }
  });

  it("groups entries into categories", () => {
    expect(categories.length).toBeGreaterThan(10);
  });
});
