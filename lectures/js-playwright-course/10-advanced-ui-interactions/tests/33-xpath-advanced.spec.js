import { test, expect } from "@playwright/test";
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("advanced XPath navigation", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Find element and go to parent
  // CSS can't do this! XPath can navigate up
  const editButton = page.locator('//button[text()="Edit"]').first();
  const parentRow = editButton.locator("xpath=ancestor::tr");

  // Find sibling elements
  const firstCell = parentRow.locator("xpath=td[1]");
  const userId = await firstCell.textContent();
  console.log("User ID of row with Edit button:", userId);

  // Find by multiple conditions (AND)
  const activeAdmin = page.locator(
    '//tr[contains(., "Admin") and contains(., "Active")]'
  );
  await expect(activeAdmin).toBeVisible();

  console.log("✓ Advanced XPath navigation");
});
