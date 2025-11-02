import { test } from "@playwright/test";

test("custom error handling", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/");

  try {
    // Try to find an optional element
    await page.locator("#optional-element").click({ timeout: 2000 });
    console.log("Optional element was clicked");
  } catch (error) {
    console.log("Optional element not found, continuing test", String(error));
  }

  // Test continues regardless
  await page.locator("#search-button").click();
});
