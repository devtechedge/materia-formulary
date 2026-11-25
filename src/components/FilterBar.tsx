"use client";

import { useRouter } from "next/navigation";

import { categories } from "@/data";

export interface FilterValues {
  q?: string;
  category?: string;
  grade?: string;
  goal?: string;
}

export function FilterBar({ values }: { values: FilterValues }) {
  const router = useRouter();

  function go(next: FilterValues) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(next)) {
      if (value) params.set(key, value);
    }
    router.push(`/browse${params.size ? `?${params.toString()}` : ""}`);
  }

  return (
    <div className="filters no-print">
      <label>
        <span className="count">Category</span>
        <select
          className="input"
          value={values.category ?? ""}
          onChange={(event) => go({ ...values, category: event.target.value })}
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="count">Evidence</span>
        <select
          className="input"
          value={values.grade ?? ""}
          onChange={(event) => go({ ...values, grade: event.target.value })}
        >
          <option value="">All grades</option>
          <option value="A">A / Strong</option>
          <option value="B">B / Moderate</option>
          <option value="C">C / Limited</option>
          <option value="D">D / Insufficient</option>
        </select>
      </label>
      <button className="btn secondary" type="button" onClick={() => go({ q: values.q })}>
        Reset filters
      </button>
    </div>
  );
}
