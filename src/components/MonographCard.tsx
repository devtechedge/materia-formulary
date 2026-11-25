import { EvidenceChip } from "./EvidenceChip";
import { SLOT_LABELS } from "@/lib/protocol";
import type { Monograph } from "@/lib/types";

export function MonographCard({ monograph }: { monograph: Monograph }) {
  return (
    <article className="panel">
      <p className="eyebrow">{monograph.category}</p>
      <h1>{monograph.name}</h1>
      <p className="lede">{monograph.mechanism}</p>
      <EvidenceChip grade={monograph.evidenceGrade} />

      <div className="table-wrap" style={{ marginTop: "1rem" }}>
        <table>
          <caption>Formulary facts for {monograph.name}</caption>
          <tbody>
            <tr>
              <th scope="row">Typical adult dose</th>
              <td className="num">
                {monograph.doseRange.low}-{monograph.doseRange.high} {monograph.doseRange.unit}
                {monograph.doseRange.upperLimit ? `, upper limit ${monograph.doseRange.upperLimit}` : ""}
              </td>
            </tr>
            <tr>
              <th scope="row">Timing</th>
              <td>{monograph.timing}</td>
            </tr>
            <tr>
              <th scope="row">Forms</th>
              <td>{monograph.forms.map((form) => form.name).join(", ")}</td>
            </tr>
            <tr>
              <th scope="row">First slot</th>
              <td>{SLOT_LABELS[monograph.forms[0]?.timing ?? "morning_food"]}</td>
            </tr>
            <tr>
              <th scope="row">Reviewed</th>
              <td className="num">
                {monograph.lastReviewed} by {monograph.reviewer}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Summary</h2>
      <p>{monograph.summary}</p>

      <h2>Cautions</h2>
      <ul>
        {monograph.cautions.map((caution) => (
          <li key={caution}>{caution}</li>
        ))}
      </ul>

      <h2>Sources</h2>
      <ul>
        {monograph.citations.map((citation) => (
          <li key={citation.url}>
            <a href={citation.url} rel="noreferrer" target="_blank">
              {citation.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="count">Source listing: {monograph.provenance}</p>
    </article>
  );
}
