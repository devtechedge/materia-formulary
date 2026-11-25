import { FilterBar, type FilterValues } from "@/components/FilterBar";
import { ModeBadge } from "@/components/ModeBadge";
import { MonographTable } from "@/components/MonographTable";
import { databaseEnabled } from "@/db/client";
import { searchMonographs } from "@/lib/search";
import type { EvidenceGrade } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata = { title: "Formulary" };

type Params = Promise<{ q?: string; category?: string; grade?: string; goal?: string }>;

export default async function BrowsePage({ searchParams }: { searchParams: Params }) {
  const params = await searchParams;
  const values: FilterValues = {
    q: params.q,
    category: params.category,
    grade: params.grade,
    goal: params.goal,
  };
  const rows = searchMonographs({
    q: values.q,
    category: values.category,
    grade: values.grade as EvidenceGrade | undefined,
    goal: values.goal,
  });

  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Formulary</p>
        <h1>Browse the shelf</h1>
        <p className="lede">
          Every entry links to a public source listing. A grade describes the strength of evidence
          for the stated use, not a verdict on the ingredient in general.
        </p>
        <p style={{ margin: "1rem 0" }}>
          <ModeBadge mode={databaseEnabled() ? "live" : "demo"} />
        </p>
        <FilterBar values={values} />
        <p className="count" aria-live="polite">
          {rows.length} of 130 monographs shown
        </p>
        <MonographTable rows={rows} />
      </div>
    </section>
  );
}
