import { test } from "@playwright/test";
const dynamicPageUrl = new URL("../pages/dynamic-page.html", import.meta.url)
  .href;

test("handle alert dialog", async ({ page }) => {
  await page.goto(dynamicPageUrl);

  // Set up dialog handler BEFORE triggering the dialog
  page.on("dialog", async (dialog) => {
    console.log("Dialog type:", dialog.type()); // 'alert'
    console.log("Dialog message:", dialog.message()); // 'This is an alert!'

    // Accept the dialog (click OK)
    await dialog.accept();
    console.log("✓ Alert accepted");
  });

  // Now click the button that triggers the alert
  await page.locator("#show-alert").click();

  // Dialog is automatically handled by our handler above
});

test("handle confirm dialog - accept", async ({ page }) => {
  await page.goto(dynamicPageUrl);

  page.on("dialog", async (dialog) => {
    if (dialog.type() === "confirm") {
      await dialog.accept();
      console.log("✓ Confirm accepted");
    } else {
      await dialog.dismiss();
    }
  });

  await page.locator("#show-confirm").click();
});

test("handle confirm dialog - dismiss", async ({ page }) => {
  await page.goto(dynamicPageUrl);

  page.on("dialog", async (dialog) => {
    if (dialog.type() === "confirm") {
      await dialog.dismiss();
      console.log("✓ Confirm dismissed");
    } else {
      await dialog.dismiss();
    }
  });

  await page.locator("#show-confirm").click();
});

test("handle prompt dialog (handler demo)", async ({ page }) => {
  // Page doesn't have a prompt; demonstrate how to handle it in general
  page.on("dialog", async (dialog) => {
    if (dialog.type() === "prompt") {
      await dialog.accept("Automated input");
    } else {
      await dialog.dismiss();
    }
  });
  // No trigger available on this page.
  console.log("✓ Prompt handler demonstrated (no prompt on page)");
});
