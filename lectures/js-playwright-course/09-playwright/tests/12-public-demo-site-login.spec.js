import { test, expect } from "@playwright/test";

test("login test on public demo site", async ({ page }) => {
  // Navigate to a public test automation practice site
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // Fill in credentials (this site uses: student/Password123)
  await page.locator("#username").fill("student");
  await page.locator("#password").fill("Password123");

  // Click submit button
  await page.locator("#submit").click();

  // Verify successful login
  await expect(page.locator(".post-title")).toContainText(
    "Logged In Successfully"
  );

  // Verify logout button is visible
  await expect(page.locator(".wp-block-button")).toBeVisible();
});
