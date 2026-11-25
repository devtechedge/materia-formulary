import { describe, expect, it } from "vitest";

import { auditStack } from "@/lib/engine";
import { auditToMarkdown } from "@/lib/export";
import type { StackItem } from "@/lib/types";

const items: StackItem[] = [
  { slug: "collagen-hydrolysate", form: "powder", doseMg: 10000, servings: 1, timing: "morning_food" },
  { slug: "zinc-picolinate", form: "veg capsules", doseMg: 50, servings: 1, timing: "evening" },
];

describe("markdown export", () => {
  it("includes findings, exposure and a schedule", () => {
    const report = auditStack(items);
    const markdown = auditToMarkdown(report, { id: "s", name: "Test stack", items });
    expect(markdown).toContain("Test stack");
    expect(markdown).toContain("## Findings");
    expect(markdown).toContain("## Daily exposure");
    expect(markdown).toContain("## Protocol schedule");
    expect(markdown).not.toMatch(/\u2014/);
  });
});
