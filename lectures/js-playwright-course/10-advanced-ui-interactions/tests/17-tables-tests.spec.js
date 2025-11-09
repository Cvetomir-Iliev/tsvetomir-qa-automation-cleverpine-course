import { test, expect } from "@playwright/test";
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("count table rows", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Count all rows in tbody
  const rows = page.locator("#users-table tbody tr");
  const rowCount = await rows.count();

  console.log("Total rows:", rowCount);
  expect(rowCount).toBe(5);
});

test("get data from specific cell", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Get data from first row, second column (Name)
  const firstRowName = await page
    .locator("#users-table tbody tr:first-child td:nth-child(2)")
    .textContent();

  console.log("First user name:", firstRowName);
  expect(firstRowName).toBe("John Doe");
});

test("iterate through all table rows", async ({ page }) => {
  await page.goto(tablePageUrl);

  const rows = page.locator("#users-table tbody tr");
  const rowCount = await rows.count();

  const data = [];
  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);
    const id = (await row.locator("td:nth-child(1)").textContent())?.trim();
    const name = (await row.locator("td:nth-child(2)").textContent())?.trim();
    const email = (await row.locator("td:nth-child(3)").textContent())?.trim();
    const role = (await row.locator("td:nth-child(4)").textContent())?.trim();
    const status = (await row.locator("td:nth-child(5)").textContent())?.trim();
    data.push({ id, name, email, role, status });
  }

  console.log("All users:", data);
  expect(data.length).toBe(5);
});

test("find specific row by content", async ({ page }) => {
  await page.goto(tablePageUrl);

  const janeRow = page.locator("#users-table tbody tr", {
    hasText: "Jane Smith",
  });
  await expect(janeRow).toBeVisible();

  const email = await janeRow.locator("td:nth-child(3)").textContent();
  console.log("Jane's email:", email);
  expect(email).toBe("jane@example.com");
});

test("click button in specific row", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Use Alice Brown (matches page data)
  const aliceRow = page.locator("#users-table tbody tr", {
    hasText: "Alice Brown",
  });
  await expect(aliceRow).toBeVisible();

  page.once("dialog", async (dialog) => {
    // table page shows alert on Edit with the user name
    expect(dialog.message()).toContain("Editing user: Alice Brown");
    await dialog.accept();
  });

  await aliceRow.locator(".edit-btn").click();
  console.log("✓ Clicked Edit button in Alice's row");
});

test("verify table headers", async ({ page }) => {
  await page.goto(tablePageUrl);

  const headers = page.locator("#users-table thead th");
  const headerTexts = (await headers.allTextContents()).map((t) => t.trim());
  console.log("Table headers:", headerTexts);

  expect(headerTexts).toEqual([
    "ID",
    "Name",
    "Email",
    "Role",
    "Status",
    "Actions",
  ]);
});

test("filter and count specific data", async ({ page }) => {
  await page.goto(tablePageUrl);

  const activeUsers = page.locator("#users-table tbody tr td:nth-child(5)", {
    hasText: "Active",
  });
  const activeCount = await activeUsers.count();
  console.log("Active users:", activeCount);
  // Page currently has 5 Active entries
  expect(activeCount).toBe(5);
});
