import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/05-LoginPage.js"; // Adjusted path

test("login with valid credentials using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  await test.step("Login with valid credentials", async () => {
    await loginPage.login("admin", "admin123");
  });
  // Verify
  await expect(loginPage.successMessage).toBeVisible();
  await expect(loginPage.successMessage).toContainText("Login successful");
});

test("login with invalid credentials using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  await test.step("Attempt login with invalid credentials", async () => {
    await loginPage.login("wronguser", "wrongpass");
  });
  // Verify
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText("Invalid");
});

test("login with empty fields using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  await test.step("Submit empty login form", async () => {
    await loginPage.clickLoginButton();
  });
  // Verify
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText("Please enter both");
});

test("fill and clear form using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  await test.step("Fill username and password", async () => {
    await loginPage.fillUsername("testuser");
    await loginPage.fillPassword("testpass");
  });
  await expect(loginPage.username).toHaveValue("testuser");

  await test.step("Clear form", async () => {
    await loginPage.clearForm();
  });
  await expect(loginPage.username).toHaveValue("");
});
