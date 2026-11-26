import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("unknown monograph slug returns 404", async ({ request }) => {
  const response = await request.get("/api/monographs/not-a-real-slug");
  expect(response.status()).toBe(404);
});

test("midnight theme has no WCAG AA violations", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /switch to dark mode/i }).click();
  expect(await page.locator("html").getAttribute("data-theme")).toBe("midnight");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("theme control is reachable by keyboard", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /switch to dark mode/i }).focus();
  const focused = await page.evaluate(() => document.activeElement?.getAttribute("aria-label"));
  expect(focused).toMatch(/switch to dark mode/i);
});

test("category filter preserves the search query", async ({ page }) => {
  await page.goto("/browse?q=zinc");
  await page.getByLabel("Category").selectOption("minerals");
  await expect(page).toHaveURL(/q=zinc/);
  await expect(page).toHaveURL(/category=minerals/);
});

test("the audit page fits a 320 pixel viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/audit");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test("print stylesheet hides the site header", async ({ page }) => {
  await page.goto("/audit");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("header.header")).toBeHidden();
});

test("a sixty item audit payload is accepted", async ({ request }) => {
  const items = Array.from({ length: 60 }, (_, index) => ({
    slug: "nac",
    form: "tablets",
    doseMg: 100 + index,
    servings: 1,
    timing: "empty_stomach",
  }));
  const response = await request.post("/api/audit", { data: { id: "s60", name: "Sixty", items } });
  expect(response.ok()).toBe(true);
  const body = await response.json();
  expect(body.itemCount).toBe(60);
});

test("two account cookies isolate saved stacks", async ({ request }) => {
  const alpha = "materia_account=aaaaaaaaaaaaaaaaaaaaaaaa";
  const beta = "materia_account=bbbbbbbbbbbbbbbbbbbbbbbb";
  const item = { slug: "nac", form: "tablets", doseMg: 600, servings: 1, timing: "empty_stomach" };

  await request.post("/api/stacks", {
    headers: { cookie: alpha },
    data: { id: "shared-id", name: "Alpha stack", items: [item] },
  });
  await request.post("/api/stacks", {
    headers: { cookie: beta },
    data: { id: "shared-id", name: "Beta stack", items: [item] },
  });

  const alphaBody = await (await request.get("/api/stacks", { headers: { cookie: alpha } })).json();
  const betaBody = await (await request.get("/api/stacks", { headers: { cookie: beta } })).json();

  expect(alphaBody.accountRef).toBe("aaaaaaaaaaaaaaaaaaaaaaaa");
  expect(betaBody.accountRef).toBe("bbbbbbbbbbbbbbbbbbbbbbbb");
  expect(alphaBody.stacks.find((stack: { name: string }) => stack.name === "Alpha stack")).toBeDefined();
  expect(alphaBody.stacks.find((stack: { name: string }) => stack.name === "Beta stack")).toBeUndefined();
  expect(betaBody.stacks.find((stack: { name: string }) => stack.name === "Beta stack")).toBeDefined();
  expect(betaBody.stacks.find((stack: { name: string }) => stack.name === "Alpha stack")).toBeUndefined();
});

test("an unknown form falls back without crashing", async ({ request }) => {
  const payload = {
    id: "s1",
    name: "Unknown form",
    items: [{ slug: "nac", form: "not-a-form", doseMg: 100, servings: 1, timing: "empty_stomach" }],
  };
  const response = await request.post("/api/audit", { data: payload });
  expect(response.ok()).toBe(true);
  expect((await response.json()).itemCount).toBe(1);
});
