import { test, expect } from "@playwright/test";
const framePageUrl = new URL("../pages/frame-page.html", import.meta.url).href;

test("interact with iframe content", async ({ page }) => {
  await page.goto(framePageUrl);

  // Method 1: Using frameLocator() - RECOMMENDED
  const frame = page.frameLocator("#my-frame");

  // Now interact with elements inside the frame
  await frame.locator("#frame-input").fill("Hello from Playwright!");
  await frame.locator("#frame-button").click();

  // Verify result inside frame
  await expect(frame.locator("#frame-result")).toContainText(
    "Hello from Playwright!"
  );

  console.log("✓ Interacted with iframe content");
});

test("interact with main page and iframe", async ({ page }) => {
  await page.goto(framePageUrl);

  // Click button on main page
  await page.locator("#main-button").click();
  console.log("✓ Clicked main page button");

  // Get frame locator
  const frame = page.frameLocator("#my-frame");

  // Interact with frame content
  await frame.locator("#frame-input").fill("Testing frames");
  await frame.locator("#frame-button").click();

  // Verify in frame
  await expect(frame.locator("#frame-result")).toBeVisible();

  console.log("✓ Interacted with both main page and frame");
});

test("wait for frame to load", async ({ page }) => {
  await page.goto(framePageUrl);

  // Frame locator automatically waits for frame to load
  const frame = page.frameLocator("#my-frame");

  // Wait for content inside frame to be ready
  await expect(frame.locator("h2")).toHaveText("Inside the Frame");

  console.log("✓ Frame loaded successfully");
});
