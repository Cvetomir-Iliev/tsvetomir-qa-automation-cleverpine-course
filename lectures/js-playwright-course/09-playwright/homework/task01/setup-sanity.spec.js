// Sanity Check

import { test, expect } from "@playwright/test";

test("Setup sanity check", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/posts/all");
  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/posts/all");

  await page.click("#nav-link-login");
  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");
});
