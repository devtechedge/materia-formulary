import { monographBySlug } from "@/data";
import type { ProtocolEntry, StackItem, TimingSlot } from "./types";

export const SLOT_ORDER: TimingSlot[] = [
  "morning_food",
  "empty_stomach",
  "midday",
  "evening",
  "bedtime",
];

export const SLOT_LABELS: Record<TimingSlot, string> = {
  morning_food: "Morning with food",
  empty_stomach: "Empty stomach",
  midday: "Midday",
  evening: "Evening",
  bedtime: "Bedtime",
};

export function buildSchedule(items: StackItem[]): ProtocolEntry[] {
  const entries: ProtocolEntry[] = items.map((item) => {
    const monograph = monographBySlug.get(item.slug);
    const noteParts: string[] = [];
    if (monograph?.cofactors?.length) {
      noteParts.push(`Cofactor to note: ${monograph.cofactors.join(", ")}.`);
    }
    if (monograph?.cycling) noteParts.push(monograph.cycling);
    return {
      slot: item.timing,
      slug: item.slug,
      name: monograph?.name ?? item.slug,
      form: item.form,
      doseMg: item.doseMg * item.servings,
      note: noteParts.length ? noteParts.join(" ") : undefined,
    };
  });

  return entries.sort(
    (a, b) =>
      SLOT_ORDER.indexOf(a.slot) - SLOT_ORDER.indexOf(b.slot) || a.name.localeCompare(b.name),
  );
}

export function groupSchedule(entries: ProtocolEntry[]): Array<{ slot: TimingSlot; entries: ProtocolEntry[] }> {
  return SLOT_ORDER.map((slot) => ({
    slot,
    entries: entries.filter((entry) => entry.slot === slot),
  })).filter((group) => group.entries.length > 0);
}
