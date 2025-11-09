import { test, expect } from "@playwright/test";
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("basic XPath selectors", async ({ page }) => {
  await page.goto(tablePageUrl);

  // XPath syntax in Playwright: start with // or xpath=

  // Find by tag name
  const rows = page.locator("//tr");
  console.log("Rows found:", await rows.count());

  // Find by attribute
  const table = page.locator('//table[@id="users-table"]');
  await expect(table).toBeVisible();

  // Find by text content
  const johnRow = page.locator('//tr[contains(., "John Doe")]');
  await expect(johnRow).toBeVisible();

  console.log("✓ Basic XPath working");
});
