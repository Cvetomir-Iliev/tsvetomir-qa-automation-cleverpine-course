import { test, expect } from "@playwright/test";
// Use module-relative file URL so it doesn't depend on process.cwd()
const loginPageUrl = new URL("../pages/login-page.html", import.meta.url).href;

test.skip("debugging with page.pause()", async ({ page }) => {
  await page.goto(loginPageUrl);

  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");

  // PAUSE HERE - test execution stops!
  await page.pause();

  // Test waits until you resume it
  await page.locator("#login-button").click();
  await expect(page).toHaveURL(/home-page\.html/);
  await expect(page.locator("#welcome")).toBeVisible();
});
