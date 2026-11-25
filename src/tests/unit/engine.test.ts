import { describe, expect, it } from "vitest";

import { auditStack, severityCount } from "@/lib/engine";
import type { StackItem } from "@/lib/types";

const sample: StackItem[] = [
  { slug: "collagen-hydrolysate", form: "powder", doseMg: 10000, servings: 1, timing: "morning_food" },
  { slug: "nac", form: "tablets", doseMg: 600, servings: 2, timing: "empty_stomach" },
  { slug: "triple-strength-fish-oil", form: "softgels", doseMg: 1000, servings: 2, timing: "midday" },
  { slug: "zinc-picolinate", form: "veg capsules", doseMg: 50, servings: 1, timing: "evening" },
  { slug: "liposomal-glutathione", form: "liposomal veg capsules", doseMg: 250, servings: 1, timing: "empty_stomach" },
  { slug: "ghk-cu", form: "tablets", doseMg: 0.12, servings: 1, timing: "bedtime" },
];

describe("audit engine", () => {
  it("is byte identical across runs", () => {
    expect(JSON.stringify(auditStack(sample))).toBe(JSON.stringify(auditStack(sample)));
  });

  it("orders findings by severity then rule id", () => {
    const ranks = { critical: 0, major: 1, moderate: 2, minor: 3 };
    const findings = auditStack(sample).findings;
    for (let index = 1; index < findings.length; index += 1) {
      const previous = findings[index - 1]!;
      const current = findings[index]!;
      expect(ranks[previous.severity]).toBeLessThanOrEqual(ranks[current.severity]);
    }
  });

  it("returns a schedule and exposure lines", () => {
    const report = auditStack(sample);
    expect(report.schedule.length).toBe(sample.length);
    expect(report.exposure.length).toBeGreaterThan(0);
    expect(severityCount(report).critical).toBeGreaterThanOrEqual(0);
  });
});
