import { test, expect } from "@playwright/test";
// Use module-relative file URL so it doesn't depend on process.cwd()
const loginPageUrl = new URL("../pages/login-page.html", import.meta.url).href;

test("debugging with console.log", async ({ page }) => {
  console.log("=== Test Starting ===");

  await page.goto(loginPageUrl);
  console.log("✓ Navigated to login page");

  // Log the current URL
  console.log("Current URL:", page.url());

  // Log the page title
  const title = await page.title();
  console.log("Page title:", title);

  await page.locator("#username").fill("admin");
  console.log("✓ Filled username");

  await page.locator("#password").fill("admin123");
  console.log("✓ Filled password");

  // Get the value we just typed
  const usernameValue = await page.locator("#username").inputValue();
  console.log("Username field contains:", usernameValue);

  await page.locator("#login-button").click();
  console.log("✓ Clicked login button");

  // Check if we got redirected to home page and welcome is visible
  console.log("Current URL after login:", page.url());
  const isWelcomeVisible = await page.locator("#welcome").isVisible();
  console.log("Welcome visible on home page?", isWelcomeVisible);

  console.log("=== Test Completed ===");

  await expect(page.locator("#welcome")).toBeVisible();
});
