"use client";

import { monographs } from "@/data";
import { SLOT_LABELS } from "@/lib/protocol";
import type { StackItem, TimingSlot } from "@/lib/types";

const SLOTS = Object.keys(SLOT_LABELS) as TimingSlot[];

export function StackEditor({
  items,
  onChange,
}: {
  items: StackItem[];
  onChange: (items: StackItem[]) => void;
}) {
  function update(index: number, patch: Partial<StackItem>) {
    onChange(items.map((item, position) => (position === index ? { ...item, ...patch } : item)));
  }

  function add() {
    const first = monographs[0];
    if (!first) return;
    onChange([
      ...items,
      {
        slug: first.slug,
        form: first.forms[0]?.name ?? "standard",
        doseMg: first.doseRange.high,
        servings: 1,
        timing: first.forms[0]?.timing ?? "morning_food",
      },
    ]);
  }

  return (
    <div>
      <div className="section-head">
        <h2>Working stack</h2>
        <span className="count">{items.length} items</span>
      </div>
      {items.map((item, index) => (
        <div className="stack-row" key={`${item.slug}-${index}`}>
          <select
            aria-label={`Ingredient ${index + 1}`}
            value={item.slug}
            onChange={(event) => {
              const monograph = monographs.find((candidate) => candidate.slug === event.target.value);
              update(index, {
                slug: event.target.value,
                form: monograph?.forms[0]?.name ?? "standard",
                doseMg: monograph?.doseRange.high ?? 100,
                timing: monograph?.forms[0]?.timing ?? "morning_food",
              });
            }}
          >
            {monographs.map((monograph) => (
              <option key={monograph.slug} value={monograph.slug}>
                {monograph.name}
              </option>
            ))}
          </select>
          <input
            aria-label={`Dose in milligrams for ${item.slug}`}
            type="number"
            min={1}
            value={item.doseMg}
            onChange={(event) => update(index, { doseMg: Number(event.target.value) })}
          />
          <select
            aria-label={`Timing for ${item.slug}`}
            value={item.timing}
            onChange={(event) => update(index, { timing: event.target.value as TimingSlot })}
          >
            {SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {SLOT_LABELS[slot]}
              </option>
            ))}
          </select>
          <button
            className="btn secondary"
            type="button"
            aria-label={`Remove ${item.slug}`}
            onClick={() => onChange(items.filter((_, position) => position !== index))}
          >
            Remove
          </button>
        </div>
      ))}
      <p>
        <button className="btn secondary" type="button" onClick={add}>
          Add ingredient
        </button>
      </p>
    </div>
  );
}
