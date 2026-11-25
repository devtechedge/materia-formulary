import { describe, expect, it } from "vitest";

import { computeExposure, elementalPerServing } from "@/lib/dose";
import { monographBySlug } from "@/data";
import type { StackItem } from "@/lib/types";

const zinc = monographBySlug.get("zinc-picolinate")!;

describe("dose arithmetic", () => {
  it("multiplies dose by servings using the form factor", () => {
    const item: StackItem = { slug: zinc.slug, form: zinc.forms[0]!.name, doseMg: 25, servings: 2, timing: "evening" };
    expect(elementalPerServing(item, zinc)).toBe(50);
  });

  it("sums exposure by ingredient and flags an upper limit", () => {
    const items: StackItem[] = [
      { slug: zinc.slug, form: zinc.forms[0]!.name, doseMg: 30, servings: 1, timing: "evening" },
      { slug: zinc.slug, form: zinc.forms[0]!.name, doseMg: 30, servings: 1, timing: "midday" },
    ];
    const exposure = computeExposure(items, new Map([[zinc.slug, zinc]]));
    expect(exposure).toHaveLength(1);
    expect(exposure[0]!.elementalMg).toBe(60);
    expect(exposure[0]!.overLimit).toBe(true);
  });
});
