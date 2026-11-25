"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBox({ initial = "" }: { initial?: string }) {
  const router = useRouter();
  const [value, setValue] = useState(initial);

  return (
    <form
      className="filters"
      onSubmit={(event) => {
        event.preventDefault();
        const query = value.trim();
        router.push(query ? `/browse?q=${encodeURIComponent(query)}` : "/browse");
      }}
    >
      <label className="grow" htmlFor="formulary-search">
        <span className="count">Search the formulary</span>
        <input
          id="formulary-search"
          className="input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="collagen, NAC, zinc picolinate"
        />
      </label>
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
}
