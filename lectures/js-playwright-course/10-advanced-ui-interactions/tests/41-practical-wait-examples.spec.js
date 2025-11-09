import { test, expect } from "@playwright/test";
const dynamicPageUrl = new URL("../pages/dynamic-page.html", import.meta.url)
  .href;

test("waiting for dynamic list to load", async ({ page }) => {
  // Example: Waiting for search results to load
  await page.goto(dynamicPageUrl);

  await page.locator("#load-content").click();

  // Wait for loading spinner to disappear
  await page.locator("#loading").waitFor({ state: "hidden" });

  // Now the content should be ready
  await expect(page.locator("#content")).toBeVisible();
});

test("waiting with timeout", async ({ page }) => {
  await page.goto(dynamicPageUrl);

  try {
    // This will wait maximum 3 seconds
    await page.locator("#content").waitFor({
      state: "visible",
      timeout: 3000,
    });
  } catch {
    console.log("Element did not appear within 3 seconds");
  }
});
