export function ModeBadge({ mode }: { mode: "demo" | "live" }) {
  return (
    <span className="mode-note" aria-label={`Data mode: ${mode}`}>
      {mode === "demo" ? "Demo data" : "Live data"}
    </span>
  );
}
