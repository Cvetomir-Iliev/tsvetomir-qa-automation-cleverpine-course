import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("CSS combinators", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Descendant selector (space) - any level below
  await page.locator("form input").first().fill("test");

  // Child selector (>) - direct child only
  await page.locator("form > div").first().isVisible();

  // Adjacent sibling selector (+) - immediately after
  await page.locator("label + input").first().fill("value");

  // General sibling selector (~) - any sibling after
  await page.locator("label ~ input").first().fill("value");

  console.log("✓ CSS combinators demonstrated");
});

test("CSS pseudo-classes", async ({ page }) => {
  await page.goto(tablePageUrl);

  // First and last child
  const firstRow = page.locator("#users-table tbody tr:first-child");
  const lastRow = page.locator("#users-table tbody tr:last-child");
  await expect(firstRow).toBeVisible();
  await expect(lastRow).toBeVisible();

  // Nth child
  const thirdRow = page.locator("#users-table tbody tr:nth-child(3)");
  await expect(thirdRow).toBeVisible();

  // Not selector - get cells that are not Active
  const notActive = page.locator(
    '#users-table tbody tr td:not(:has-text("Active"))'
  );
  await expect(notActive.first()).toBeVisible();

  // Checked state on form
  await page.goto(complexFormPageUrl);
  await page.locator("#interest-coding").check();
  const checkedBoxes = page.locator('input[type="checkbox"]:checked');
  const checkedCount = await checkedBoxes.count();
  console.log("Checked checkboxes:", checkedCount);
  expect(checkedCount).toBeGreaterThan(0);
});
