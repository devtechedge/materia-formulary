import Link from "next/link";

import { ModeBadge } from "@/components/ModeBadge";
import { SearchBox } from "@/components/SearchBox";
import { Workbench } from "@/components/Workbench";
import { monographs } from "@/data";
import { rules } from "@/data/rules";
import { databaseEnabled } from "@/db/client";

const ENTRIES = [
  {
    num: "01",
    title: "Browse",
    href: "/browse",
    text: "A searchable shelf of independent monographs. Every entry carries a form, a dose range, an evidence grade and a source.",
  },
  {
    num: "02",
    title: "Draft",
    href: "/draft",
    text: "Start from a goal, add a monograph, and shape a time-phased daily schedule with cofactors and cycling noted.",
  },
  {
    num: "03",
    title: "Audit",
    href: "/audit",
    text: "Run a deterministic check for interactions, duplicate exposure and timing conflicts. Each finding names its rule and source.",
  },
];

export default function HomePage() {
  const mode = databaseEnabled() ? "live" : "demo";
  return (
    <>
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">Independent clinical formulary</p>
          <h1>What you take, examined properly.</h1>
          <p className="lede">
            MATERIA is a reference desk for holistic supplements. It sells nothing. It lists{" "}
            {monographs.length} real products from checked public sources, grades the evidence for
            each stated use, and checks a proposed stack against {rules.length} deterministic rules.
            Snapshot dated 26 November 2026. <Link href="/methodology">Method and sources</Link>.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            <ModeBadge mode={mode} /> <span className="count">No account needed to browse, draft or audit.</span>
          </p>
          <div style={{ maxWidth: "640px", marginTop: "1.5rem" }}>
            <SearchBox />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid-3">
            {ENTRIES.map((entry) => (
              <Link className="entry-card" href={entry.href} key={entry.num}>
                <span className="num">{entry.num}</span>
                <h2>{entry.title}</h2>
                <p>{entry.text}</p>
                <span className="count">Open {entry.title.toLowerCase()} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">The desk</p>
              <h2>Run the same loop the formulary uses</h2>
              <p className="lede">
                A sample stack is loaded with collagen hydrolysate, NAC, triple strength fish oil,
                zinc picolinate, liposomal glutathione and GHK-Cu. Change any line and the audit
                recomputes immediately.
              </p>
            </div>
          </div>
          <Workbench />
        </div>
      </section>
    </>
  );
}
