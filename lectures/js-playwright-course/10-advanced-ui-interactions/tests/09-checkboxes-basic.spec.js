import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("check and uncheck checkboxes", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Check a checkbox
  await page.locator("#interest-coding").check();
  console.log("✓ Checked coding checkbox");

  // Verify it's checked
  await expect(page.locator("#interest-coding")).toBeChecked();

  // Check another one
  await page.locator("#interest-testing").check();

  // Verify both are checked
  await expect(page.locator("#interest-coding")).toBeChecked();
  await expect(page.locator("#interest-testing")).toBeChecked();

  // Uncheck the first one
  await page.locator("#interest-coding").uncheck();

  // Verify states
  await expect(page.locator("#interest-coding")).not.toBeChecked();
  await expect(page.locator("#interest-testing")).toBeChecked();
});

test("check multiple checkboxes at once", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Check multiple checkboxes
  const checkboxes = [
    "#interest-coding",
    "#interest-testing",
    "#interest-design",
  ];

  for (const checkbox of checkboxes) {
    await page.locator(checkbox).check();
  }

  // Verify all are checked
  for (const checkbox of checkboxes) {
    await expect(page.locator(checkbox)).toBeChecked();
  }

  console.log("✓ Checked multiple checkboxes");
});
