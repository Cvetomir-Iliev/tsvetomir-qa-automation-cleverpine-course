import { test, expect } from "@playwright/test";
import { RegistrationFormPage } from "../page-objects/07-RegistrationFormPage.js"; // Adjusted path
import { fileURLToPath } from "node:url";
import fs from "fs";
import path from "path";

// Create dummy file for upload test
const testFilesDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../test-files"
);
if (!fs.existsSync(testFilesDir)) {
  fs.mkdirSync(testFilesDir, { recursive: true });
}
const testFilePath = path.join(testFilesDir, "sample.pdf");
if (!fs.existsSync(testFilePath)) {
  fs.writeFileSync(testFilePath, "dummy pdf content");
}

test("complete registration with all fields", async ({ page }) => {
  const formPage = new RegistrationFormPage(page);
  await test.step("Navigate to registration form", async () => {
    await formPage.navigate();
  });

  await test.step("Complete registration with data", async () => {
    await formPage.completeRegistration({
      country: "canada",
      interests: ["coding", "testing"],
      experience: "intermediate",
      resumePath: testFilePath,
    });
  });
  // Verify
  await expect(formPage.resultSection).toBeVisible();
  await expect(formPage.resultCountry).toContainText("Canada");
  await expect(formPage.resultInterests).toContainText("coding");
  await expect(formPage.resultExperience).toContainText("intermediate");
});

test("test individual form interactions", async ({ page }) => {
  const formPage = new RegistrationFormPage(page);
  await test.step("Navigate to registration form", async () => {
    await formPage.navigate();
  });

  await test.step("Select country and verify", async () => {
    await formPage.selectCountry("uk");
    await expect(formPage.countryDropdown).toHaveValue("uk");
  });

  await test.step("Check interests and verify", async () => {
    await formPage.setInterests(["coding", "design"], true);
    await expect(formPage.interestCoding).toBeChecked();
    await expect(formPage.interestDesign).toBeChecked();
  });

  await test.step("Select experience and verify", async () => {
    await formPage.selectExperience("advanced");
    await expect(formPage.experienceAdvanced).toBeChecked();
  });
});

test("test form validation - missing country", async ({ page }) => {
  const formPage = new RegistrationFormPage(page);
  await test.step("Navigate and fill partial form", async () => {
    await formPage.navigate();
    await formPage.fillPartialRegistration({
      interests: ["coding"],
      experience: "beginner",
      acceptTerms: true,
    });
  });

  await test.step("Submit and handle validation dialog", async () => {
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("country");
      await dialog.accept();
    });
    await formPage.clickSubmit();
  });
});

test("verify results via locator assertions", async ({ page }) => {
  const formPage = new RegistrationFormPage(page);
  await test.step("Navigate and complete registration", async () => {
    await formPage.navigate();
    await formPage.completeRegistration({
      country: "usa",
      interests: ["testing", "devops"],
      experience: "advanced",
      resumePath: testFilePath,
    });
  });

  await test.step("Wait for and verify results", async () => {
    // Prefer locator-based expect for auto-waiting and less flakiness
    await expect(formPage.resultSection).toBeVisible();
    await expect(formPage.resultCountry).toContainText("United States");
    await expect(formPage.resultInterests).toContainText("testing");
    await expect(formPage.resultExperience).toContainText("advanced");
  });
});
