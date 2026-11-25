import { JournalWidget } from "@/components/JournalWidget";

export const metadata = { title: "Outcome journal" };

export default function JournalPage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Optional, local only</p>
        <h1>Outcome journal</h1>
        <p className="lede">
          A place to note a daily score against a stack revision. The scores stay in the browser
          tab and are never sent to a server. A trend here is a question to ask a clinician, not an
          answer.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <JournalWidget />
        </div>
      </div>
    </section>
  );
}
