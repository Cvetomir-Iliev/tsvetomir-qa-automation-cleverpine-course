import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("select option from dropdown by value", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Select an option using its value attribute
  await page.locator("#country").selectOption("usa");

  // Verify the selection
  await expect(page.locator("#country")).toHaveValue("usa");

  console.log("✓ Selected USA from dropdown");
});

test("select option from dropdown by label text", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Select by the visible text (label)
  await page.locator("#country").selectOption({ label: "Canada" });

  // Verify the selection
  await expect(page.locator("#country")).toHaveValue("canada");

  console.log("✓ Selected Canada by label");
});

test("select option from dropdown by index", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Select by index (0 = first option, 1 = second option, etc.)
  // Index 1 would be "United States" (index 0 is the placeholder)
  await page.locator("#country").selectOption({ index: 1 });

  // Verify the selection
  await expect(page.locator("#country")).toHaveValue("usa");

  console.log("✓ Selected by index");
});
