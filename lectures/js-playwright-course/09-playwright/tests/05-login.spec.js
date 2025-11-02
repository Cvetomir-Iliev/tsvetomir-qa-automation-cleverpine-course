// Import test and expect from Playwright
import { test, expect } from "@playwright/test";
// Use module-relative file URL
const loginPageUrl = new URL("../pages/login-page.html", import.meta.url).href;

// Our first test!
test("successful login redirects to home page", async ({ page }) => {
  // Step 1: Navigate to our login page
  await page.goto(loginPageUrl);

  // Step 2: Verify we're on the right page
  await expect(page).toHaveTitle("Test Login Page");
  await expect(page.locator("h1")).toHaveText("Login Page");

  // Step 3: Fill in the username
  await page.locator("#username").fill("admin");

  // Step 4: Fill in the password
  await page.locator("#password").fill("admin123");

  // Step 5: Click the login button
  await page.locator("#login-button").click();

  // Step 6: Verify we were redirected to the home page
  await expect(page).toHaveURL(/home-page\.html/); // Regex expression to match URL pattern
  await expect(page).toHaveTitle("Test Home Page");
  await expect(page.locator("#welcome")).toHaveText("Welcome, admin!");
});

test("login fails with invalid credentials", async ({ page }) => {
  // Navigate to login page
  await page.goto(loginPageUrl);

  // Try to login with wrong credentials
  await page.locator("#username").fill("wronguser");
  await page.locator("#password").fill("wrongpass");
  await page.locator("#login-button").click();

  // Verify error message appears and we remain on the login page
  await expect(page.locator("#error-message")).toBeVisible();
  await expect(page.locator("#error-message")).toHaveText(
    "Invalid username or password!"
  );
  await expect(page).toHaveTitle("Test Login Page");
  await expect(page).not.toHaveURL(/home-page\.html/);
});

test("login requires both username and password", async ({ page }) => {
  await page.goto(loginPageUrl);

  // Try to submit with empty fields
  await page.locator("#login-button").click();

  // Verify we remain on the login page with an error
  await expect(page).toHaveTitle("Test Login Page");
  await expect(page.locator("#error-message")).toBeVisible();

  // Try with only username
  await page.locator("#username").fill("admin");
  await page.locator("#login-button").click();

  // Still on login page (no redirect)
  await expect(page).toHaveTitle("Test Login Page");
  await expect(page).not.toHaveURL(/home-page\.html/);
});
