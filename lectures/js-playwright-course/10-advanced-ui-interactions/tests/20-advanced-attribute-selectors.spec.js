import { test } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("advanced attribute selectors", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Attribute exists
  await page.locator("[type]").first().click(); // Any element with type attribute

  // Attribute starts with
  await page.locator('[id^="interest"]').first().check(); // id starts with "interest"

  // Attribute ends with
  await page.locator('[id$="button"]').click(); // id ends with "button"

  // Attribute contains
  await page.locator('[id*="exp"]').first().check(); // id contains "exp"

  console.log("✓ Advanced attribute selectors work");
});
