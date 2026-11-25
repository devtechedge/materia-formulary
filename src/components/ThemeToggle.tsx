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

  return (
    <button className="btn secondary" type="button" onClick={toggle} aria-pressed={midnight}>
      {midnight ? "Day reading" : "Night reading"}
    </button>
  );
}
