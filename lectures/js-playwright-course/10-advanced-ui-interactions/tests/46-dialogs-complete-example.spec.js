import { test } from "@playwright/test";
const dynamicPageUrl = new URL("../pages/dynamic-page.html", import.meta.url)
  .href;

test("comprehensive dialog handling", async ({ page }) => {
  await page.goto(dynamicPageUrl);

  // Universal dialog handler
  page.on("dialog", async (dialog) => {
    const type = dialog.type();
    const message = dialog.message();

    console.log(`Handling ${type} dialog: "${message}"`);

    switch (type) {
      case "alert":
        await dialog.accept();
        break;
      case "confirm":
        // Accept if message contains 'confirm', dismiss otherwise
        if (message.toLowerCase().includes("confirm")) {
          await dialog.accept();
        } else {
          await dialog.dismiss();
        }
        break;
      case "prompt":
        await dialog.accept("Automated response");
        break;
      default:
        await dialog.dismiss();
    }
  });

  // Trigger various dialogs
  await page.locator("#show-alert").click();
  await page.locator("#show-confirm").click();

  console.log("✓ All dialogs handled");
});
