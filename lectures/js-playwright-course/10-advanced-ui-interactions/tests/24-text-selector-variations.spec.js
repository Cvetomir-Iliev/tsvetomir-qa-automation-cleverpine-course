import { test, expect } from "@playwright/test";
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("text selector variations", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Exact text match (use quotes)
  const johnRow = page.locator('text="John Doe"');
  await expect(johnRow).toBeVisible();

  // Partial text match (no quotes or with quotes)
  // Use .first() to avoid strict mode when multiple matches exist
  const johnPartial = page.locator("text=John").first();
  await expect(johnPartial).toBeVisible();

  // Case-sensitive exact match (use regular expression)
  const caseMatch = page.locator("text=/^John Doe$/");
  await expect(caseMatch).toBeVisible();

  console.log("✓ Different text selector variations");
});
