import Link from "next/link";

import { EvidenceChip } from "./EvidenceChip";
import type { Monograph } from "@/lib/types";

export function MonographTable({ rows }: { rows: Monograph[] }) {
  return (
    <div className="table-wrap">
      <table>
        <caption>Formulary entries, alphabetical. Grade refers to the stated use, not the ingredient in general.</caption>
        <thead>
          <tr>
            <th scope="col">Monograph</th>
            <th scope="col">Category</th>
            <th scope="col">Typical adult dose</th>
            <th scope="col">Grade</th>
            <th scope="col">Reviewed</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.slug}>
              <td>
                <Link href={`/browse/${row.slug}`}>{row.name}</Link>
              </td>
              <td>{row.category}</td>
              <td className="num">
                {row.doseRange.low}-{row.doseRange.high} {row.doseRange.unit}
              </td>
              <td>
                <EvidenceChip grade={row.evidenceGrade} />
              </td>
              <td className="num">{row.lastReviewed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
