import { Workbench } from "@/components/Workbench";
import { rules } from "@/data/rules";

export const metadata = { title: "Audit a stack" };

export default function AuditPage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Deterministic check</p>
        <h1>Audit your stack</h1>
        <p className="lede">
          {rules.length} rules run over the ingredients you list. The same stack always produces
          the same findings in the same order. Every finding carries its rule id, the ingredients
          involved, an evidence grade and a source link.
        </p>
        <div style={{ margin: "1rem 0" }}>
          <p className="notice">
            This is an educational reference, not medical advice. Take the printed Protocol Card to
            a qualified professional.
          </p>
        </div>
        <Workbench />
      </div>
    </section>
  );
}
