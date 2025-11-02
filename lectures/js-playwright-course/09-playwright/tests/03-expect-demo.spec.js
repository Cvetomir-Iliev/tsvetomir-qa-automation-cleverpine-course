import { test, expect } from "@playwright/test";

test("understanding expect", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/");

  // Verify page title
  await expect(page).toHaveTitle(
    "Automation Testing Practice Website for QA and Developers | UI and API"
  );

  // Verify element is visible
  await expect(page.locator("#main-title")).toBeVisible();

  // Verify element contains text
  await expect(page.locator("#main-title")).toContainText("Automation Testing Practice");
});
