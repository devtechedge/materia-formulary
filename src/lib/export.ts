import { SLOT_LABELS } from "./protocol";
import type { AuditReport, Stack } from "./types";

export function auditToMarkdown(report: AuditReport, stack: Stack): string {
  const lines: string[] = [
    `# Stack Audit: ${stack.name}`,
    "",
    `Items reviewed: ${report.itemCount}.`,
    `Findings: ${report.findings.length}.`,
    "",
    "## Findings",
    "",
  ];

  if (report.findings.length === 0) {
    lines.push("No deterministic findings were triggered for this stack.");
  }

  for (const finding of report.findings) {
    lines.push(`### ${finding.ruleId} / ${finding.severity}: ${finding.title}`);
    lines.push("");
    lines.push(finding.explanation);
    lines.push("");
    lines.push(`Action: ${finding.action}`);
    lines.push("");
    lines.push(`Evidence grade ${finding.evidenceGrade}. Source: ${finding.citation.label} (${finding.citation.url}).`);
    lines.push("");
  }

  lines.push("## Daily exposure");
  lines.push("");
  for (const line of report.exposure) {
    const limit = line.upperLimit === undefined ? "" : `, upper limit ${line.upperLimit} mg`;
    lines.push(`- ${line.name}: ${line.elementalMg} mg${limit}${line.overLimit ? " (over limit)" : ""}.`);
  }

  lines.push("");
  lines.push("## Protocol schedule");
  lines.push("");
  for (const entry of report.schedule) {
    lines.push(`- ${SLOT_LABELS[entry.slot]}: ${entry.name}, ${entry.form}, ${entry.doseMg} mg.`);
  }

  lines.push("");
  lines.push("Educational reference only. Not medical advice. Correlation is not causation.");
  return lines.join("\n");
}
