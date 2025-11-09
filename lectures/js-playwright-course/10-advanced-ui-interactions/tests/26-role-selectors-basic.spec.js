import { test } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("using role selectors", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Find by button role
  await page.locator('role=button[name="Submit Registration"]').click();

  // Find by textbox role (inputs)
  await page.locator("role=textbox").first().fill("test");

  // Find by checkbox role
  await page
    .locator('role=checkbox[name="I agree to the terms and conditions"]')
    .check();

  // Find by combobox role (select/dropdown)
  await page.locator('role=combobox[name="Country:"]').selectOption("usa");

  console.log("✓ Role selectors work perfectly");
});
