import { EvidenceChip } from "./EvidenceChip";
import type { Finding } from "@/lib/types";

export function FindingRow({ finding, index }: { finding: Finding; index: number }) {
  return (
    <details className={`finding ${finding.severity}`}>
      <summary>
        {index + 1}. {finding.ruleId} / {finding.severity}: {finding.title}
      </summary>
      <p>{finding.explanation}</p>
      <p className="action">Action: {finding.action}</p>
      <p className="count">
        <EvidenceChip grade={finding.evidenceGrade} />{" "}
        <a href={finding.citation.url} rel="noreferrer" target="_blank">
          {finding.citation.label}
        </a>
      </p>
    </details>
  );
}
