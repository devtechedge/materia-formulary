import { describe, expect, it } from "vitest";

import { stackSchema, searchSchema } from "@/lib/validation";

describe("input validation", () => {
  it("accepts a valid stack", () => {
    const parsed = stackSchema.safeParse({
      id: "s1",
      name: "Test",
      items: [{ slug: "nac", form: "tablets", doseMg: 600, servings: 1, timing: "empty_stomach" }],
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects a non positive dose", () => {
    const parsed = stackSchema.safeParse({
      id: "s1",
      name: "Test",
      items: [{ slug: "nac", form: "tablets", doseMg: -1, servings: 1, timing: "empty_stomach" }],
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects an unknown evidence grade in search", () => {
    expect(searchSchema.safeParse({ grade: "Z" }).success).toBe(false);
  });
});
