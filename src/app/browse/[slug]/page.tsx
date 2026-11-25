import { notFound } from "next/navigation";

import { FormCompare } from "@/components/FormCompare";
import { MonographCard } from "@/components/MonographCard";
import { monographBySlug, monographs } from "@/data";

export function generateStaticParams() {
  return monographs.map((monograph) => ({ slug: monograph.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const monograph = monographBySlug.get(slug);
  return { title: monograph?.name ?? "Monograph" };
}

export default async function MonographPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const monograph = monographBySlug.get(slug);
  if (!monograph) notFound();

  return (
    <section className="section">
      <div className="shell">
        <MonographCard monograph={monograph} />
        <div style={{ marginTop: "2.5rem" }}>
          <p className="eyebrow">Related reading</p>
          <h2>Form comparisons</h2>
          <FormCompare />
        </div>
      </div>
    </section>
  );
}
