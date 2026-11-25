import { FormCompare } from "@/components/FormCompare";

export const metadata = { title: "Form comparison" };

export default function ComparePage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Form comparison</p>
        <h1>Same ingredient, different form</h1>
        <p className="lede">
          Form changes absorption, tolerability and sometimes the risk profile. These pairs are
          drawn from the formulary. Mechanistic differences are labelled as such and are not
          presented as proven clinical superiority.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <FormCompare />
        </div>
      </div>
    </section>
  );
}
