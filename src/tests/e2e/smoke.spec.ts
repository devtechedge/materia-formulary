import { expect, test } from "@playwright/test";

const ROUTES = ["/", "/browse", "/compare", "/draft", "/audit", "/methodology", "/journal"];

test("every public route renders without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  for (const route of ROUTES) {
    const response = await page.goto(route);
    expect(response?.ok(), `${route} should return 200`).toBe(true);
    await expect(page.locator("h1").first()).toBeVisible();
  }

  expect(errors).toEqual([]);
});
