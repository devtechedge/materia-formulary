import { groupSchedule, SLOT_LABELS } from "@/lib/protocol";
import type { ProtocolEntry } from "@/lib/types";

export function ProtocolCard({ entries }: { entries: ProtocolEntry[] }) {
  const groups = groupSchedule(entries);
  return (
    <div>
      <div className="section-head">
        <h2>Protocol Card</h2>
        <span className="count">Prints to one page</span>
      </div>
      {groups.map((group) => (
        <section className="protocol-slot" key={group.slot}>
          <h3>{SLOT_LABELS[group.slot]}</h3>
          <ul>
            {group.entries.map((entry, index) => (
              <li key={`${entry.slug}-${index}`}>
                {entry.name}, {entry.form}, {entry.doseMg} mg
                {entry.note ? `. ${entry.note}` : ""}
              </li>
            ))}
          </ul>
        </section>
      ))}
      {groups.length === 0 ? <p className="count">Add ingredients to build a schedule.</p> : null}
    </div>
  );
}
