import { describe, expect, it } from "vitest";

import { ruleById, rules } from "@/data/rules";
import { monographBySlug } from "@/data";

describe("interaction rules", () => {
  it("ships at least twenty five unique rules", () => {
    expect(rules.length).toBeGreaterThanOrEqual(25);
    expect(new Set(rules.map((rule) => rule.id)).size).toBe(rules.length);
  });

  it("gives every rule a citation, severity and action", () => {
    for (const rule of rules) {
      expect(rule.citation.url).toMatch(/^https:\/\//);
      expect(["critical", "major", "moderate", "minor"]).toContain(rule.severity);
      expect(rule.action.length).toBeGreaterThan(10);
      expect(ruleById.get(rule.id)).toBe(rule);
    }
  });

  it("points most rules at slugs that exist in the dataset", () => {
    const known = rules.filter((rule) => rule.slugs.some((slug) => monographBySlug.has(slug)));
    expect(known.length).toBeGreaterThanOrEqual(25);
  });
});
