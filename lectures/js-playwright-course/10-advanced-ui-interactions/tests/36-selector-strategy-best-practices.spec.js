import { test } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("selector strategy best practices", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Priority 1: Role-based (best for stability and accessibility)
  await page.locator('role=button[name="Submit Registration"]').click();

  // Priority 2: Text-based (good for user-facing elements)
  await page.locator("text=Submit Registration").click();

  // Priority 3: ID (if stable)
  await page.locator("#submit-button").click();

  // Priority 4: Other attributes (data-testid is great!)
  await page.locator('[data-testid="submit-button"]').click();

  // Priority 5: CSS classes (less stable)
  await page.locator(".submit-button").click();

  // Last resort: XPath (when nothing else works)
  await page.locator('//button[contains(text(), "Submit")]').click();
});
