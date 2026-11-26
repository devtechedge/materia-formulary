"use client";

import { FindingRow } from "./FindingRow";
import { ProtocolCard } from "./ProtocolCard";
import { severityCount } from "@/lib/engine";
import type { AuditReport, Stack } from "@/lib/types";

export function AuditReportView({ report, stack }: { report: AuditReport; stack: Stack }) {
  const counts = severityCount(report);

  async function download() {
    const response = await fetch("/api/protocol", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(stack),
    });
    if (!response.ok) return;
    const text = await response.text();
    const url = URL.createObjectURL(new Blob([text], { type: "text/markdown" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "materia-protocol.md";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="section-head">
        <h2>Stack Audit</h2>
        <span className="count">
          {report.itemCount} items / {report.findings.length} findings / snapshot 26 Nov 2026
        </span>
      </div>

      {report.itemCount === 0 ? (
        <p className="notice">
          Your stack is empty. Add an ingredient or pick a goal to compile a protocol.
        </p>
      ) : (
        <>
          <p className="count">
            {counts.critical} critical, {counts.major} major, {counts.moderate} moderate,{" "}
            {counts.minor} minor
          </p>
          <div className="notices">
            {report.findings.length === 0 ? (
              <p className="notice">No deterministic findings were triggered for this stack.</p>
            ) : (
              report.findings.map((finding, index) => (
                <FindingRow key={`${finding.ruleId}-${index}`} finding={finding} index={index} />
              ))
            )}
          </div>
          <p className="notice">
            Next: take this card to a qualified professional and review any critical or major
            finding before changing a routine.
          </p>
        </>
      )}

      <div className="table-wrap" style={{ margin: "1.25rem 0" }}>
        <table>
          <caption>Daily exposure totals, elemental weight where the form declares one</caption>
          <thead>
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Daily exposure</th>
              <th scope="col">Limit</th>
            </tr>
          </thead>
          <tbody>
            {report.exposure.map((line) => (
              <tr key={line.slug}>
                <td>{line.name}</td>
                <td className="num">{line.elementalMg} mg</td>
                <td className="num">
                  {line.upperLimit === undefined ? "not stated" : `${line.upperLimit} mg${line.overLimit ? " (over)" : ""}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProtocolCard entries={report.schedule} />

      <p className="no-print">
        <button className="btn secondary" type="button" onClick={download}>
          Export Markdown
        </button>{" "}
        <button className="btn secondary" type="button" onClick={() => window.print()}>
          Print Protocol Card
        </button>
      </p>
    </div>
  );
}
