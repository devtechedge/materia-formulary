import { monographs } from "@/data";
import type { EvidenceGrade, Monograph } from "./types";

export interface SearchQuery {
  q?: string;
  category?: string;
  grade?: EvidenceGrade;
  goal?: string;
}

export function searchMonographs(query: SearchQuery): Monograph[] {
  const needle = query.q?.trim().toLowerCase() ?? "";
  return monographs
    .filter((monograph) => {
      if (query.category && monograph.category !== query.category) return false;
      if (query.grade && monograph.evidenceGrade !== query.grade) return false;
      if (query.goal && !monograph.goals.includes(query.goal)) return false;
      if (!needle) return true;
      const haystack = [monograph.name, ...monograph.aliases, monograph.category, monograph.summary]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function suggestedGoals(): string[] {
  return [...new Set(monographs.flatMap((monograph) => monograph.goals))].sort();
}
