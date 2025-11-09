import { test } from "@playwright/test";
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("combining text selectors with other selectors", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Find button with specific text and click first
  page.once("dialog", async (dialog) => await dialog.accept());
  const editButton = page.locator('button:has-text("Edit")').first();
  await editButton.click();

  // Find row containing specific text, then find button in it
  const janeRow = page.locator('tr:has-text("Jane Smith")');
  page.once("dialog", async (dialog) => await dialog.accept());
  await janeRow.locator('button:has-text("Edit")').click();
});

test("combining nth with other selectors (checkboxes)", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  const checkboxes = page.locator('input[type="checkbox"]');
  await checkboxes.first().check();
  await checkboxes.nth(1).check();
  await checkboxes.last().check();
});
