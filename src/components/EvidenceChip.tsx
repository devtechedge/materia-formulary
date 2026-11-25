import type { EvidenceGrade } from "@/lib/types";

import { GRADE_DEFINITIONS } from "@/lib/evidence";

export function EvidenceChip({ grade }: { grade: EvidenceGrade }) {
  const label = GRADE_DEFINITIONS[grade].label;
  return (
    <span className={`chip grade-${grade.toLowerCase()}`} title={`${label}: ${GRADE_DEFINITIONS[grade].description}`}>
      {grade} / {label}
    </span>
  );
}
