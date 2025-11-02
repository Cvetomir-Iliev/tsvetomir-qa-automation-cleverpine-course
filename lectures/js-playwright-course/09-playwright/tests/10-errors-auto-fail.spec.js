import { test } from "@playwright/test";

test("errors are handled automatically", async ({ page }) => {
  // If any step fails, the test stops and fails
  await page.goto("https://practice.expandtesting.com/");

  // If this locator doesn't exist, test fails here
  await page.locator("#nonexistent").click();

  // This line won't run if previous step failed
  console.log("This might not execute");
});
