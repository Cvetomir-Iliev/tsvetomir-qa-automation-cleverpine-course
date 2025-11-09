// File: login-refactored.spec.js
import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/05-LoginPage.js"; // Adjusted path

test("login with valid credentials - POM WAY", async ({ page }) => {
  // Step 1: Create page object
  const loginPage = new LoginPage(page);

  // Step 2: Navigate
  await loginPage.navigate();

  // Step 3: Perform login (combines fill username, password, and click)
  await loginPage.login("admin", "admin123");

  // Step 4-5: Verify (locator-based expect auto-waits)
  await expect(loginPage.successMessage).toBeVisible();
  await expect(loginPage.successMessage).toContainText("Login successful");
});

test("login with invalid credentials - POM WAY", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("wronguser", "wrongpass");
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText("Invalid");
});

test("login with empty username - POM WAY", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillPassword("admin123");
  await loginPage.clickLoginButton();
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText("Please enter both");
});
