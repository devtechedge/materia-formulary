import { expect, test } from "@playwright/test";

test("the formulary API reports a count", async ({ request }) => {
  const response = await request.get("/api/monographs?q=nac");
  expect(response.ok()).toBe(true);
  const body = await response.json();
  expect(body.count).toBeGreaterThan(0);
});

test("the audit API is deterministic", async ({ request }) => {
  const payload = {
    id: "s1",
    name: "Test",
    items: [{ slug: "zinc-picolinate", form: "veg capsules", doseMg: 50, servings: 1, timing: "evening" }],
  };
  const first = await (await request.post("/api/audit", { data: payload })).json();
  const second = await (await request.post("/api/audit", { data: payload })).json();
  expect(JSON.stringify(first)).toBe(JSON.stringify(second));
});

test("invalid stacks are rejected", async ({ request }) => {
  const response = await request.post("/api/audit", { data: { id: "s", name: "X", items: [] } });
  expect(response.ok()).toBe(true);
  const bad = await request.post("/api/audit", { data: { id: "s", name: "X", items: [{ slug: "" }] } });
  expect(bad.status()).toBe(400);
});
