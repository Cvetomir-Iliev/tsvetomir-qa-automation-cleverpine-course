import { test, expect } from "@playwright/test";
// Use module-relative file URL so it doesn't depend on process.cwd()
const loginPageUrl = new URL("../pages/login-page.html", import.meta.url).href;

test.skip("strategic pausing for debugging", async ({ page }) => {
  await page.goto(loginPageUrl);

  // Pause before login to inspect the form
  console.log("Pausing to inspect login form...");
  await page.pause();

  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");
  await page.locator("#login-button").click();

  // Pause after login to inspect results
  console.log("Pausing to inspect login results...");
  await page.pause();

  await expect(page).toHaveURL(/home-page\.html/);
  await expect(page.locator("#welcome")).toBeVisible();
});
