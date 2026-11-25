"use client";

import { useState } from "react";

interface Entry {
  date: string;
  score: number;
  note: string;
}

export function JournalWidget() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [score, setScore] = useState(5);
  const [note, setNote] = useState("");

  function add() {
    setEntries([...entries, { date: new Date().toISOString().slice(0, 10), score, note }]);
    setNote("");
  }

  return (
    <div className="panel">
      <h2>Local outcome journal</h2>
      <p className="notice">
        Scores stay in this browser tab. They are never sent to the server. Correlation is not causation.
      </p>
      <label>
        <span className="count">Score today from 0 to 10</span>
        <input
          className="input"
          type="number"
          min={0}
          max={10}
          value={score}
          onChange={(event) => setScore(Number(event.target.value))}
        />
      </label>
      <label>
        <span className="count">Note</span>
        <input className="input" value={note} onChange={(event) => setNote(event.target.value)} />
      </label>
      <p>
        <button className="btn secondary" type="button" onClick={add}>
          Record in this tab
        </button>
      </p>
      <div className="table-wrap">
        <table>
          <caption>Entries held only in local component state</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Score</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={`${entry.date}-${index}`}>
                <td className="num">{entry.date}</td>
                <td className="num">{entry.score}</td>
                <td>{entry.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
