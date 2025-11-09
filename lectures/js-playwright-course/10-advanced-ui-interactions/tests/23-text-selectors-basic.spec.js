import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("find elements by exact text", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Find by exact text match
  const btn = page.locator("text=Submit Registration");
  await expect(btn).toBeVisible();
  await btn.click();

  console.log("✓ Clicked button by text");
});

test("find elements by partial text", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Find by partial text (case-insensitive)
  await page.locator("text=Submit").click(); // Matches "Submit Registration"

  console.log("✓ Found element by partial text");
});
