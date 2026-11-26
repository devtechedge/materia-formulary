"use client";

export function GoalChips({
  goals,
  onPick,
  used = [],
}: {
  goals: string[];
  onPick: (goal: string) => void;
  used?: string[];
}) {
  return (
    <div className="goals no-print" role="group" aria-label="Protocol goals">
      {goals.map((goal) => (
        <button
          className="goal-chip"
          type="button"
          key={goal}
          disabled={used.includes(goal)}
          onClick={() => onPick(goal)}
        >
          {used.includes(goal) ? `${goal} added` : goal}
        </button>
      ))}
    </div>
  );
}
