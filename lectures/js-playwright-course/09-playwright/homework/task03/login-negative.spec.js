import { test, expect } from "@playwright/test";

test("Test A", async ({ page }) => {
    await page.goto("http://training.skillo-bg.com:4300/users/login");

    await page.locator("#defaultLoginFormUsername").fill("wrong@example.com");
    await page.locator("#defaultLoginFormPassword").fill("badpassword");
    await page.locator("#sign-in-button").click();

    await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");
    await expect(page.locator("#sign-in-button")).toBeVisible();
    await expect(page.locator("#nav-link-profile")).toBeHidden();

});

test("Test B", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/users/login");

  const signInButton = page.locator("#sign-in-button");
  const usernameField = page.locator("#defaultLoginFormUsername");
  const passwordField = page.locator("#defaultLoginFormPassword");
  const profileLink = page.locator("#nav-link-profile");

  try {
    await signInButton.click({ timeout: 2000 });
    console.log("Clicked Sign in button successfully.");
  } catch (error) {
    console.warn("Sign in button was disabled or not clickable — skipping click.");
  }

  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");

  await expect(signInButton).toBeDisabled();

  await expect(profileLink).toBeHidden();

  await usernameField.fill("testuser");
  try {
    await signInButton.click({ timeout: 2000 });
    console.log("Clicked Sign in with only username.");
  } catch (error) {
    console.warn("Sign in button still disabled with only username.");
  }
  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");

  await usernameField.clear();
  await passwordField.fill("password123");
  try {
    await signInButton.click({ timeout: 2000 });
    console.log("Clicked Sign in with only password.");
  } catch (error) {
    console.warn("Sign in button still disabled with only password.");
  }
  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");
  await expect(profileLink).toBeHidden();
});

