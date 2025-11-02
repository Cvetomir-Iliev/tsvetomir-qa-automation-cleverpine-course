import { test, expect } from "@playwright/test";

test("complete example with all concepts", async ({ page }) => {
  // 1. Use page to navigate
  await page.goto("https://practice.expandtesting.com/login");

  // 2. Use locators to find and interact with elements
  const usernameInput = page.locator("#username");
  const passwordInput = page.locator("#password");
  const loginButton = page.locator("#submit-login");

  await usernameInput.fill("practice");
  await passwordInput.fill("SuperSecretPassword!");
  await loginButton.click();

  // 3. Use expect to verify results
  await expect(page).toHaveURL("https://practice.expandtesting.com/secure");
  await expect(page.locator("#flash-message")).toHaveText(
    "You logged into a secure area!"
  );
  await expect(page.locator("#username")).toHaveText("Hi, practice!");
});
