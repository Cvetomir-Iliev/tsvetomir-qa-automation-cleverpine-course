import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/03-HomePage.js"; // Adjusted path

test("verify home page title", async ({ page }) => {
  // Step 1: Create instance of HomePage
  const homePage = new HomePage(page);
  await test.step("Navigate to home page", async () => {
    await homePage.navigate();
  });
  // Verify (assertions typically outside of steps for clarity)
  await expect(homePage.pageTitle).toHaveText(/Welcome/);
});

test("verify navigation links are visible", async ({ page }) => {
  const homePage = new HomePage(page);
  await test.step("Navigate to home page", async () => {
    await homePage.navigate();
  });
  await expect(homePage.loginLink).toBeVisible();
});

test("navigate to login page", async ({ page }) => {
  const homePage = new HomePage(page);
  await test.step("Navigate to home page", async () => {
    await homePage.navigate();
  });
  await test.step("Navigate to login page", async () => {
    await homePage.clickLogin();
    await expect(page).toHaveURL(/login.html/);
  });
});
