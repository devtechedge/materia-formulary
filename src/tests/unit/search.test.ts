import { describe, expect, it } from "vitest";

import { searchMonographs, suggestedGoals } from "@/lib/search";

describe("formulary search", () => {
  it("finds a named ingredient", () => {
    const results = searchMonographs({ q: "zinc picolinate" });
    expect(results.some((item) => item.slug === "zinc-picolinate")).toBe(true);
  });

  it("filters by grade and category", () => {
    const results = searchMonographs({ grade: "A", category: "vitamins" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((item) => item.evidenceGrade === "A" && item.category === "vitamins")).toBe(true);
  });

  it("offers goals drawn from the dataset", () => {
    expect(suggestedGoals()).toContain("skin elasticity");
  });
});
