import { GRADE_DEFINITIONS, GRADE_ORDER } from "@/lib/evidence";

export function RubricTable() {
  return (
    <div className="table-wrap">
      <table>
        <caption>Evidence rubric applied to every monograph and rule</caption>
        <thead>
          <tr>
            <th scope="col">Grade</th>
            <th scope="col">Label</th>
            <th scope="col">Definition</th>
          </tr>
        </thead>
        <tbody>
          {GRADE_ORDER.map((grade) => (
            <tr key={grade}>
              <th scope="row">{grade}</th>
              <td>{GRADE_DEFINITIONS[grade].label}</td>
              <td>{GRADE_DEFINITIONS[grade].description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
