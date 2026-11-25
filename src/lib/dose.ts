import type { Monograph, StackItem } from "./types";

export interface ExposureLine {
  slug: string;
  name: string;
  elementalMg: number;
  upperLimit?: number;
  overLimit: boolean;
}

export function elementalPerServing(item: StackItem, monograph: Monograph): number {
  const form = monograph.forms.find((candidate) => candidate.name === item.form);
  const factor = form?.elementalMg ?? 1;
  return round(item.doseMg * factor * item.servings);
}

export function round(value: number, places = 2): number {
  const scale = 10 ** places;
  return Math.round(value * scale) / scale;
}

export function computeExposure(
  items: StackItem[],
  monographs: Map<string, Monograph>,
): ExposureLine[] {
  const totals = new Map<string, number>();

  for (const item of items) {
    const monograph = monographs.get(item.slug);
    if (!monograph) continue;
    totals.set(item.slug, (totals.get(item.slug) ?? 0) + elementalPerServing(item, monograph));
  }

  return [...totals.entries()]
    .map(([slug, elementalMg]) => {
      const monograph = monographs.get(slug);
      const upperLimit = monograph?.doseRange.upperLimit;
      return {
        slug,
        name: monograph?.name ?? slug,
        elementalMg: round(elementalMg),
        upperLimit,
        overLimit: upperLimit !== undefined && elementalMg > upperLimit,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function formatDose(value: number, unit: string): string {
  return `${round(value)} ${unit}`;
}
