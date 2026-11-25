import { Workbench } from "@/components/Workbench";

export const metadata = { title: "Draft a protocol" };

export default function DraftPage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Goal first</p>
        <h1>Draft a protocol</h1>
        <p className="lede">
          Pick a goal to add the first matching monograph, then adjust form, dose and timing. The
          Protocol Card rebuilds on every change.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <Workbench />
        </div>
      </div>
    </section>
  );
}
