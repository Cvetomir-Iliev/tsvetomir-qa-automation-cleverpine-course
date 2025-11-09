import { test, expect } from "@playwright/test";
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("selecting by position", async ({ page }) => {
  await page.goto(tablePageUrl);

  const rows = page.locator("#users-table tbody tr");

  // First row
  const firstRow = rows.first();
  const firstName = await firstRow.locator("td:nth-child(2)").textContent();
  console.log("First user:", firstName);

  // Last row
  const lastRow = rows.last();
  const lastName = await lastRow.locator("td:nth-child(2)").textContent();
  console.log("Last user:", lastName);

  // Specific row by index (0-based)
  const thirdRow = rows.nth(2); // Index 2 = third row
  const thirdName = await thirdRow.locator("td:nth-child(2)").textContent();
  console.log("Third user:", thirdName);

  expect(firstName).toBe("John Doe");
  expect(lastName).toBe("Charlie Green");
  expect(thirdName).toBe("Bob Johnson");
});
