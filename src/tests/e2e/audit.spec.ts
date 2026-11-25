import { expect, test } from "@playwright/test";

test("the sample audit renders findings and a protocol card", async ({ page }) => {
  await page.goto("/audit");
  await expect(page.getByRole("heading", { name: "Stack Audit" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Protocol Card" })).toBeVisible();
  await expect(page.locator(".finding").first()).toBeVisible();
  await expect(page.getByText(/findings \//)).toBeVisible();
});

test("the same stack yields the same first finding twice", async ({ page }) => {
  await page.goto("/audit");
  const first = await page.locator(".finding summary").first().innerText();
  await page.reload();
  const second = await page.locator(".finding summary").first().innerText();
  expect(first).toBe(second);
});
