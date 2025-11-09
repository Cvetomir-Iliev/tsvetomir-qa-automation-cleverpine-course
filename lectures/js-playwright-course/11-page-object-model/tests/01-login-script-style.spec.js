import { test, expect } from "@playwright/test";
// Use module-relative file URL so it doesn't depend on process.cwd()
const loginPageUrl = new URL("../pages/login.html", import.meta.url).href;

test("login with valid credentials", async ({ page }) => {
  // Navigate to login page
  await page.goto(loginPageUrl);

  // Fill username
  await page.locator("#username").fill("admin");

  // Fill password
  await page.locator("#password").fill("admin123");

  // Click login button
  await page.locator("#login-button").click();

  // Wait for success message
  await expect(page.locator("#success-message")).toBeVisible();
  await expect(page.locator("#success-message")).toContainText(
    "Login successful"
  );
});

test("login with invalid credentials", async ({ page }) => {
  // Navigate to login page - DUPLICATE!
  await page.goto(loginPageUrl);

  // Fill username - DUPLICATE!
  await page.locator("#username").fill("wronguser");

  // Fill password - DUPLICATE!
  await page.locator("#password").fill("wrongpass");

  // Click login button - DUPLICATE!
  await page.locator("#login-button").click();

  // Verify error message
  await expect(page.locator("#error-message")).toBeVisible();
  await expect(page.locator("#error-message")).toContainText("Invalid");
});

test("login with empty username", async ({ page }) => {
  // Navigate to login page - DUPLICATE!
  await page.goto(loginPageUrl);

  // Leave username empty
  // Fill only password - DUPLICATE LOCATOR!
  await page.locator("#password").fill("admin123");

  // Click login button - DUPLICATE!
  await page.locator("#login-button").click();

  // Verify error message
  await expect(page.locator("#error-message")).toBeVisible();
  await expect(page.locator("#error-message")).toContainText(
    "Please enter both"
  );
});

test("login with empty password", async ({ page }) => {
  // Navigate to login page - DUPLICATE!
  await page.goto(loginPageUrl);

  // Fill username - DUPLICATE!
  await page.locator("#username").fill("admin");

  // Leave password empty
  // Click login button - DUPLICATE!
  await page.locator("#login-button").click();

  // Verify error message - DUPLICATE!
  await expect(page.locator("#error-message")).toBeVisible();
});
