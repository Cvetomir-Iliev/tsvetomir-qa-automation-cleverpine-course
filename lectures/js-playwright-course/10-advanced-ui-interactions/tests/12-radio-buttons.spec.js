import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("select radio button", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Check a radio button (use check(), not click())
  await page.locator("#exp-intermediate").check();

  // Verify it's checked
  await expect(page.locator("#exp-intermediate")).toBeChecked();

  // Check another radio button in the same group
  await page.locator("#exp-advanced").check();

  // Now intermediate should be unchecked (only one can be selected)
  await expect(page.locator("#exp-intermediate")).not.toBeChecked();
  await expect(page.locator("#exp-advanced")).toBeChecked();

  console.log("✓ Radio button selection works correctly");
});

test("verify only one radio button is selected", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Select beginner
  await page.locator("#exp-beginner").check();

  // Get all checked radio buttons in this group
  const checkedRadios = page.locator('input[name="experience"]:checked');

  // Should be exactly 1
  await expect(checkedRadios).toHaveCount(1);

  console.log("✓ Only one radio button is selected");
});
