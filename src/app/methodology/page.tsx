import { RubricTable } from "@/components/RubricTable";
import { monographs } from "@/data";
import { rules } from "@/data/rules";

export const metadata = { title: "Method" };

export default function MethodologyPage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Method</p>
        <h1>How the formulary is built</h1>
        <p className="lede">
          MATERIA lists {monographs.length} real products sourced from public NOW Foods and iHerb
          catalog listings. Each entry records the exact listing URL, a typical adult dose range,
          common forms, timing, cautions, an evidence grade and a review date. No claim is fetched
          at runtime. Citations are stored links.
        </p>

        <h2>Evidence rubric</h2>
        <RubricTable />

        <h2>Source hierarchy</h2>
        <p>
          Human randomised trials and systematic reviews rank highest. Human observational studies
          and small trials come next. Mechanistic and traditional evidence is recorded as such and
          never described as clinical proof. Where a label potency could not be confirmed on the
          page checked, the research note says so.
        </p>

        <h2>Rules</h2>
        <p>
          The {rules.length} interaction rules are deterministic functions of the ingredient slugs
          and categories in a stack. They do not use a language model, do not call a network service
          and do not vary between runs. Severity, evidence grade, citation and suggested action are
          stored with each rule. A rule firing is a prompt to review, not a clinical conclusion.
        </p>
        <p>
          Exposure totals apply an elemental fraction per form for zinc, magnesium, calcium, iron
          and copper. Each monograph states its fraction. Where the checked label did not declare
          one, the value is marked indicative rather than verified. Form comparisons are not proof
          of clinical superiority. Rules for St John&apos;s wort, SAM-e and caffeine stay at category
          level because this snapshot has no checked product page for them; they are disclosed here
          rather than hidden behind a missing slug.
        </p>

        <h2>Review process</h2>
        <p>
          Every monograph carries a review date and reviewer initials. An append-only review log is
          provisioned in the database path with account scoping. The public demo uses the checked
          snapshot dated 26 November 2026.
        </p>

        <h2>Limitations</h2>
        <p>
          A product listing is not a clinical trial. Blends are graded at ingredient level where
          product level evidence is absent. Dose ranges are typical adult ranges from labels and
          human studies, not personal recommendations. The outcome journal stores local scores
          only and cannot establish causation. Nothing here diagnoses, prescribes or replaces a
          qualified professional.
        </p>
      </div>
    </section>
  );
}
