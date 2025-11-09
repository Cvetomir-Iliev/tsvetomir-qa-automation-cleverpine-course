import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;
test("comprehensive role selector examples", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Buttons
  const submitButton = page.locator("role=button[name=/Submit/i]"); // Case insensitive regex
  await expect(submitButton).toBeVisible();

  // Checkboxes
  const termsCheckbox = page.locator("role=checkbox[name=/terms/i]");
  await termsCheckbox.check();

  // Radio buttons
  const beginnerRadio = page.locator('role=radio[name="Beginner"]');
  await beginnerRadio.check();

  // Combobox (select/dropdown)
  const countrySelect = page.locator("role=combobox");
  await countrySelect.selectOption("canada");

  console.log("✓ All role selectors working");
});

test("role selectors for table navigation", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Find table
  const table = page.locator("role=table");
  await expect(table).toBeVisible();

  // Find rows
  const rows = page.locator("role=row");
  console.log("Total rows:", await rows.count());

  // Find cells
  const cells = page.locator("role=cell");
  console.log("Total cells:", await cells.count());

  // Find specific button by role and name
  const editButtons = page.locator('role=button[name="Edit"]');
  console.log("Edit buttons:", await editButtons.count());
});
