import type { EvidenceGrade } from "./types";

export const GRADE_DEFINITIONS: Record<EvidenceGrade, { label: string; description: string }> = {
  A: {
    label: "Strong",
    description: "Consistent findings from multiple randomised controlled trials or a systematic review in humans.",
  },
  B: {
    label: "Moderate",
    description: "Human evidence exists but is limited, mixed, or small in scale.",
  },
  C: {
    label: "Limited",
    description: "Mostly observational, mechanistic, or traditional use with little direct human trial evidence.",
  },
  D: {
    label: "Insufficient",
    description: "No reliable human evidence for the stated use. Included for completeness only.",
  },
};

export const GRADE_ORDER: EvidenceGrade[] = ["A", "B", "C", "D"];

export function gradeRank(grade: EvidenceGrade): number {
  return GRADE_ORDER.indexOf(grade);
}

export function isEvidenceGrade(value: string): value is EvidenceGrade {
  return GRADE_ORDER.includes(value as EvidenceGrade);
}
