import { test, expect } from "@playwright/test";
// Use module-relative file URL so it doesn't depend on process.cwd()
const loginPageUrl = new URL("../pages/login-page.html", import.meta.url).href;

test("complete debugging example", async ({ page }) => {
  // Console logging for tracking progress
  console.log("Step 1: Navigating to login page");
  await page.goto(loginPageUrl);

  console.log("Step 2: Verifying page loaded");
  const pageTitle = await page.title();
  console.log("Page title:", pageTitle);

  console.log("Step 3: Filling credentials");
  await page.locator("#username").fill("admin");

  // Check what we typed
  const typedUsername = await page.locator("#username").inputValue();
  console.log("Username field value:", typedUsername);

  await page.locator("#password").fill("admin123");

  // Pause to inspect before clicking
  console.log("Pausing before login click...");
  await page.pause();

  console.log("Step 4: Clicking login button");
  await page.locator("#login-button").click();

  console.log("Step 5: Verifying success");
  await expect(page).toHaveURL(/home-page\.html/);
  const isVisible = await page.locator("#welcome").isVisible();
  console.log("Welcome visible?", isVisible);
  await expect(page.locator("#welcome")).toBeVisible();
  console.log("Test completed successfully!");
});
