import { expect, test } from "@playwright/test";

test("a search shows a monograph within the first result set", async ({ page }) => {
  await page.goto("/browse?q=zinc+picolinate");
  await expect(page.getByRole("link", { name: "Zinc Picolinate" })).toBeVisible();
  await expect(page.getByText(/monographs shown/)).toBeVisible();
});

test("category and grade filters narrow the shelf", async ({ page }) => {
  await page.goto("/browse");
  await page.getByLabel("Category").selectOption("vitamins");
  await page.getByLabel("Evidence").selectOption("A");
  await expect(page.getByText(/monographs shown/)).toBeVisible();
  const rows = page.locator("tbody tr");
  expect(await rows.count()).toBeGreaterThan(0);
});
