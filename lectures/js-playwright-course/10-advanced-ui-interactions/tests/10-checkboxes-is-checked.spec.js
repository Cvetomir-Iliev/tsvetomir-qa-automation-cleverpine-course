import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("check if checkbox is already checked before clicking", async ({
  page,
}) => {
  await page.goto(complexFormPageUrl);

  const checkbox = page.locator("#interest-coding");

  // Check initial state
  const initiallyChecked = await checkbox.isChecked();
  console.log("Initially checked?", initiallyChecked);
  expect(initiallyChecked).toBe(false);

  // Check it
  await checkbox.check();

  // Verify state changed
  const nowChecked = await checkbox.isChecked();
  console.log("Now checked?", nowChecked);
  expect(nowChecked).toBe(true);
});
