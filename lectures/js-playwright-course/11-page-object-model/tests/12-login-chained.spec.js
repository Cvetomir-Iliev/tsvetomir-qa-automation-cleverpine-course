import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/11-LoginPage-with-chaining.js"; // Adjusted path

test("login and verify dashboard - chained page objects", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  // login returns DashboardPage object!
  const dashboardPage =
    await test.step("Login and navigate to dashboard", async () => {
      return await loginPage.loginAndNavigate("admin", "admin123");
    });

  await test.step("Verify welcome message on dashboard", async () => {
    await expect(dashboardPage.welcomeMessage).toBeVisible();
    await expect(dashboardPage.welcomeMessage).toContainText("admin");
  });
});
