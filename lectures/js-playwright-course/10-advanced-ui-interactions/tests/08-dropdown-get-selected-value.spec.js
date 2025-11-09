import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("get selected dropdown value", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Select an option
  await page.locator("#country").selectOption("uk");

  // Get the selected value
  const selectedValue = await page.locator("#country").inputValue();
  console.log("Selected value:", selectedValue); // Logs: uk

  // Get the visible text of the selected option
  const selectedText = await page
    .locator("#country option:checked")
    .textContent();
  console.log("Selected text:", selectedText); // Logs: United Kingdom

  // Verify
  expect(selectedValue).toBe("uk");
});
