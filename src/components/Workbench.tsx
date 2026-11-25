"use client";

import { useMemo, useState } from "react";

import { AuditReportView } from "./AuditReportView";
import { GoalChips } from "./GoalChips";
import { StackEditor } from "./StackEditor";
import { monographs } from "@/data";
import { auditStack } from "@/lib/engine";
import { suggestedGoals } from "@/lib/search";
import type { Stack, StackItem } from "@/lib/types";

const SAMPLE: StackItem[] = [
  { slug: "collagen-hydrolysate", form: "powder", doseMg: 10000, servings: 1, timing: "morning_food" },
  { slug: "nac", form: "tablets", doseMg: 600, servings: 2, timing: "empty_stomach" },
  { slug: "triple-strength-fish-oil", form: "softgels", doseMg: 1000, servings: 2, timing: "midday" },
  { slug: "zinc-picolinate", form: "veg capsules", doseMg: 50, servings: 1, timing: "evening" },
  { slug: "liposomal-glutathione", form: "liposomal veg capsules", doseMg: 250, servings: 1, timing: "empty_stomach" },
  { slug: "ghk-cu", form: "tablets", doseMg: 0.12, servings: 1, timing: "bedtime" },
];

export function Workbench() {
  const [items, setItems] = useState<StackItem[]>(SAMPLE);
  const report = useMemo(() => auditStack(items), [items]);
  const goals = useMemo(() => suggestedGoals().slice(0, 12), []);
  const stack: Stack = { id: "sample-session", name: "Sample stack", items };

  function addGoal(goal: string) {
    const match = monographs.find(
      (monograph) => monograph.goals.includes(goal) && !items.some((item) => item.slug === monograph.slug),
    );
    if (!match) return;
    setItems([
      ...items,
      {
        slug: match.slug,
        form: match.forms[0]?.name ?? "standard",
        doseMg: match.doseRange.high,
        servings: 1,
        timing: match.forms[0]?.timing ?? "morning_food",
      },
    ]);
  }

  return (
    <div className="workbench">
      <section className="panel">
        <StackEditor items={items} onChange={setItems} />
        <h2>Goal-first draft</h2>
        <p className="count">Add the first matching monograph for a goal.</p>
        <GoalChips goals={goals} onPick={addGoal} />
      </section>
      <section className="panel">
        <AuditReportView report={report} stack={stack} />
      </section>
    </div>
  );
}
