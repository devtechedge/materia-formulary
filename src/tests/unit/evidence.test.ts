import { describe, expect, it } from "vitest";

import { GRADE_DEFINITIONS, GRADE_ORDER, gradeRank, isEvidenceGrade } from "@/lib/evidence";

describe("evidence grading", () => {
  it("defines all four grades", () => {
    expect(GRADE_ORDER).toEqual(["A", "B", "C", "D"]);
    for (const grade of GRADE_ORDER) {
      expect(GRADE_DEFINITIONS[grade].description.length).toBeGreaterThan(20);
    }
  });

  it("ranks grades in order", () => {
    expect(gradeRank("A")).toBeLessThan(gradeRank("D"));
    expect(isEvidenceGrade("A")).toBe(true);
    expect(isEvidenceGrade("Z")).toBe(false);
  });
});
