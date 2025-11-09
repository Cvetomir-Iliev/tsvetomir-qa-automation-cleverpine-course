import { test, expect } from "@playwright/test";
import path from "node:path";

const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("upload a single file", async ({ page }) => {
  const filePath = path.resolve(
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
  );
  await page.goto(complexFormPageUrl);

  await page.locator("#resume").setInputFiles(filePath);

  // Verify selected file name via DOM API
  const fileName = await page
    .locator("#resume")
    .evaluate((el) => el.files[0]?.name);
  expect(fileName).toBe("sample-resume.pdf");
  console.log("✓ File uploaded:", fileName);
});

test("upload multiple files and verify results", async ({ page }) => {
  const files = [
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file1.txt"),
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file2.txt"),
  ];
  await page.goto(complexFormPageUrl);

  // Upload multiple files
  await page.locator("#resume").setInputFiles(files);

  // Minimal required form inputs
  await page.locator("#country").selectOption("canada");
  await page.locator("#interest-coding").check();
  await page.locator("#exp-intermediate").check();
  await page.locator("#terms").check();

  // Submit form to populate #result-resume
  await page.locator("#submit-button").click();

  // Verify results visible and both filenames appear
  await expect(page.locator("#result")).toBeVisible();
  await expect(page.locator("#result-resume")).toContainText("file1.txt");
  await expect(page.locator("#result-resume")).toContainText("file2.txt");

  // Sanity check: input holds multiple files
  const count = await page.locator("#resume").evaluate((el) => el.files.length);
  expect(count).toBeGreaterThan(1);
  console.log("✓ Multiple files uploaded and verified in results:", count);
});

test("clear uploaded file", async ({ page }) => {
  const filePath = path.resolve(
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
  );
  await page.goto(complexFormPageUrl);

  await page.locator("#resume").setInputFiles(filePath);

  let fileName = await page
    .locator("#resume")
    .evaluate((el) => el.files[0]?.name);
  expect(fileName).toBe("sample-resume.pdf");

  // Clear
  await page.locator("#resume").setInputFiles([]);

  const fileCount = await page
    .locator("#resume")
    .evaluate((el) => el.files.length);
  expect(fileCount).toBe(0);
  console.log("✓ File upload cleared");
});

test("complete form submission with all elements", async ({ page }) => {
  const filePath = path.resolve(
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
  );
  await page.goto(complexFormPageUrl);

  console.log("Step 1: Select country");
  await page.locator("#country").selectOption("canada");

  console.log("Step 2: Check interests");
  await page.locator("#interest-coding").check();
  await page.locator("#interest-testing").check();

  console.log("Step 3: Select experience level");
  await page.locator("#exp-intermediate").check();

  console.log("Step 4: Upload resume");
  await page.locator("#resume").setInputFiles(filePath);

  console.log("Step 5: Accept terms");
  await page.locator("#terms").check();

  console.log("Step 6: Submit form");
  await page.locator("#submit-button").click();

  await expect(page.locator("#result")).toBeVisible();
  await expect(page.locator("#result-country")).toContainText("Canada");
  await expect(page.locator("#result-interests")).toContainText("coding");
  await expect(page.locator("#result-interests")).toContainText("testing");
  await expect(page.locator("#result-experience")).toContainText(
    "intermediate"
  );

  // Verify resume file name in results
  await expect(page.locator("#result-resume")).toContainText(
    "sample-resume.pdf"
  );

  console.log("✓ Complete form submission successful!");
});
