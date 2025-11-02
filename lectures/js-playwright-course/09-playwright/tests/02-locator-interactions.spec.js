import { test } from "@playwright/test";

test("locator interactions", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");

  // Create locators
  const usernameInput = page.locator("#username");
  const passwordInput = page.locator("#password");
  const submitButton = page.locator("#submit-login");

  // Type into inputs
  await usernameInput.fill("practice");
  await passwordInput.fill("SuperSecretPassword!");

  // Click the button
  await submitButton.click();
});
