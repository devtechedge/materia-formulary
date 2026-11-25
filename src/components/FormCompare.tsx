import { monographBySlug } from "@/data";

const PAIRS = [
  ["zinc-picolinate", "zinc"],
  ["liposomal-glutathione", "nac"],
  ["triple-strength-fish-oil", "flax-oil"],
  ["collagen-hydrolysate", "uc-ii-joint-health-with-undenatured-type-ii-collagen"],
  ["magnesium-glycinate", "magnesium-citrate"],
  ["ghk-cu", "collagen-hydrolysate"],
] as const;

export function FormCompare() {
  return (
    <div className="compare-grid">
      {PAIRS.map(([leftSlug, rightSlug]) => {
        const left = monographBySlug.get(leftSlug);
        const right = monographBySlug.get(rightSlug);
        if (!left || !right) return null;
        return (
          <article className="entry-card" key={`${leftSlug}-${rightSlug}`}>
            <p className="eyebrow">Form comparison</p>
            <h3>
              {left.name} versus {right.name}
            </h3>
            <p>
              {left.name}: {left.summary.slice(0, 150)}.
            </p>
            <p>
              {right.name}: {right.summary.slice(0, 150)}.
            </p>
            <p className="count">
              Grades {left.evidenceGrade} and {right.evidenceGrade}. Mechanistic claims are labelled as such.
            </p>
          </article>
        );
      })}
    </div>
  );
}
