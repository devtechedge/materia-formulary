import { describe, expect, it } from "vitest";

import { buildSchedule, groupSchedule, SLOT_ORDER } from "@/lib/protocol";
import type { StackItem } from "@/lib/types";

const items: StackItem[] = [
  { slug: "melatonin", form: "capsules", doseMg: 3, servings: 1, timing: "bedtime" },
  { slug: "collagen-hydrolysate", form: "powder", doseMg: 10000, servings: 1, timing: "morning_food" },
  { slug: "nac", form: "tablets", doseMg: 600, servings: 1, timing: "empty_stomach" },
];

describe("protocol compiler", () => {
  it("sorts entries into the declared slot order", () => {
    const schedule = buildSchedule(items);
    expect(schedule.map((entry) => entry.slot)).toEqual(["morning_food", "empty_stomach", "bedtime"]);
  });

  it("groups only occupied slots", () => {
    const groups = groupSchedule(buildSchedule(items));
    expect(groups.map((group) => group.slot)).toEqual(["morning_food", "empty_stomach", "bedtime"]);
    expect(SLOT_ORDER).toHaveLength(5);
  });

  it("adds a cofactor note to collagen", () => {
    const entry = buildSchedule(items).find((candidate) => candidate.slug === "collagen-hydrolysate");
    expect(entry?.note).toContain("vitamin-c");
  });
});
