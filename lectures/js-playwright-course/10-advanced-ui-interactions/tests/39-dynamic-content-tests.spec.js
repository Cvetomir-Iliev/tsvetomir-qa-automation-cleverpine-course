import { test, expect } from "@playwright/test";
const dynamicPageUrl = new URL("../pages/dynamic-page.html", import.meta.url)
  .href;

test("wait for element to become visible", async ({ page }) => {
  await page.goto(dynamicPageUrl);

  // Click button that loads content
  await page.locator("#load-content").click();

  // Wait for loading indicator to appear
  await page.locator("#loading").waitFor({ state: "visible" });
  console.log("✓ Loading indicator appeared");

  // Wait for loading indicator to disappear
  await page.locator("#loading").waitFor({ state: "hidden" });
  console.log("✓ Loading indicator disappeared");

  // Wait for content to appear
  await page.locator("#content").waitFor({ state: "visible" });
  console.log("✓ Content appeared");

  // Verify content is visible
  await expect(page.locator("#content")).toBeVisible();
  await expect(page.locator("#content")).toContainText("loaded dynamically");
});

test("different waitFor states", async ({ page }) => {
  await page.goto(dynamicPageUrl);

  // Wait for element to be attached to DOM (default)
  await page.locator("#hidden-element").waitFor({ state: "attached" });
  console.log("✓ Element is attached to DOM");

  // Wait for element to be detached from DOM
  // (we won't actually trigger this, just showing the syntax)

  // Wait for element to be visible
  await page.locator("#show-hidden").click();
  await page.locator("#hidden-element").waitFor({ state: "visible" });
  console.log("✓ Hidden element became visible");

  // Wait for element to be hidden
  // await page.locator('#element').waitFor({ state: 'hidden' });
});
