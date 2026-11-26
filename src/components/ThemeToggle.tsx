"use client";

import { useState } from "react";

export function ThemeToggle() {
  const [midnight, setMidnight] = useState(false);

  function toggle() {
    const next = document.documentElement.dataset.theme !== "midnight";
    setMidnight(next);
    document.documentElement.dataset.theme = next ? "midnight" : "light";
    try {
      localStorage.setItem("materia-theme", next ? "midnight" : "light");
    } catch {
      // Storage is optional.
    }
  }

  const visible = midnight ? "Day reading" : "Night reading";
  const action = midnight ? "switch to light mode" : "switch to dark mode";
  const accessibleName = `${visible}: ${action}`;

  return (
    <button
      className="btn secondary"
      type="button"
      onClick={toggle}
      aria-label={accessibleName}
      title={accessibleName}
      aria-pressed={midnight}
    >
      <span className="theme-icons" aria-hidden="true">
        <svg className="theme-icon moon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8 5.8 5.8 0 1 0 13.2 9.6Z" />
        </svg>
        <svg className="theme-icon sun" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="8" r="3" />
          <path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3.1 3.1l1.1 1.1M11.8 11.8l1.1 1.1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1" />
        </svg>
      </span>
      {visible}
    </button>
  );
}
