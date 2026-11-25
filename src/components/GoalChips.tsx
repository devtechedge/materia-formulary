"use client";

export function GoalChips({ goals, onPick }: { goals: string[]; onPick: (goal: string) => void }) {
  return (
    <div className="goals no-print" role="group" aria-label="Protocol goals">
      {goals.map((goal) => (
        <button className="goal-chip" type="button" key={goal} onClick={() => onPick(goal)}>
          {goal}
        </button>
      ))}
    </div>
  );
}
