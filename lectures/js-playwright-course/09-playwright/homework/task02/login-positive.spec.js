// Verify positive login

import { test, expect } from "@playwright/test";

test("Positive Login", async ({ page }) => {
    await page.goto("http://training.skillo-bg.com:4300/posts/all");
    await page.click("#nav-link-login");
    await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");
    await expect(page.locator("#sign-in-button")).toBeVisible();

    await page.locator("#defaultLoginFormUsername").fill("cekata90@gmail.com");
    await page.locator("#defaultLoginFormPassword").fill("Temp12345");
    await page.locator("#sign-in-button").click();

    await expect(page.locator("#nav-link-profile")).toBeVisible();
    await page.locator("#nav-link-profile").click();
    await expect(page).toHaveURL(/\/users\/\d+$/);
    await expect(page.locator("h2")).toBeVisible();
    await expect(page.locator("h2")).toHaveText("Tsvetomir");

    
})