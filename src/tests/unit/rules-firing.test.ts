import { describe, expect, it } from "vitest";

import { auditStack } from "@/lib/engine";
import { monographBySlug } from "@/data";
import type { StackItem, TimingSlot } from "@/lib/types";

const SLUGS = [
  "zinc-picolinate", "iron", "calcium-and-magnesium", "triple-strength-fish-oil",
  "vitamin-d3-and-k2", "nac", "5-htp", "5-htp-with-glycine-taurine-and-inositol",
  "berberine-hcl", "alpha-lipoic-acid", "ashwagandha-standardized-extract", "kelp",
  "cod-liver-oil", "magnesium-glycinate", "liposomal-glutathione", "ghk-cu",
  "l-theanine", "melatonin", "collagen-hydrolysate", "methyl-b-12",
  "e-400-with-mixed-tocopherols", "co-enzyme-b-complex", "creatine",
  "probiotic-10", "ginkgo-biloba-with-eleuthero-root", "turmeric-curcumin", "nmn",
];

const items: StackItem[] = SLUGS.map((slug) => {
  const monograph = monographBySlug.get(slug)!;
  return {
    slug,
    form: monograph.forms[0]?.name ?? "standard",
    doseMg: 100,
    servings: 1,
    timing: (monograph.forms[0]?.timing ?? "morning_food") as TimingSlot,
  };
}).filter((item) => monographBySlug.has(item.slug));

describe("rule coverage", () => {
  it("fires at least twenty five rules on a deliberately broad stack", () => {
    const report = auditStack(items);
    const fired = new Set(report.findings.map((finding) => finding.ruleId));
    expect(fired.size).toBeGreaterThanOrEqual(25);
  });

  it("never fires the same rule twice", () => {
    const report = auditStack(items);
    const ids = report.findings.map((finding) => finding.ruleId);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
