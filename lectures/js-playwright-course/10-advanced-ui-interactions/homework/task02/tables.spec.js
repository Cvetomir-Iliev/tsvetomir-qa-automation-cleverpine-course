
import { test, expect } from '@playwright/test';
import { getLocalUrl } from '../task01/getLocalUrl.js';

const tablePageUrl = getLocalUrl('../pages/table-page.html', import.meta.url);

test.describe('Task 2: Tables — Review & Moderate Submissions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(tablePageUrl);
  });

  test('Test A: Count and headers', async ({ page }) => {
    // Count rows
    const rows = page.locator('tbody > tr');
    await expect(rows).toHaveCount(5);

    // Read headers
    const headers = page.locator('thead th');
    await expect(headers).toHaveText([
      'Speaker',
      'Session Format',
      'Topics',
      'Audience Level',
      'Files',
      'Status',
      'Actions',
    ]);

    // Verify Total submissions
    await expect(page.locator('#total-count')).toHaveText('5');
  });

  test('Test B: Approve Session — alert dialog + status update', async ({ page }) => {
    // Locate the row by visible speaker name and scope inside it
    const row = page.locator('tbody tr', { hasText: 'John Doe' });

    // Set up one-time alert handler before clicking Approve
    const waitDialog = page.waitForEvent('dialog');
    await row.getByRole('button', { name: /Approve submission for John Doe/i }).click();
    const dialog = await waitDialog;

    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Approved submission for John Doe');
    await dialog.accept();

    // Verify we remain on the same page and row still present
    await expect(page).toHaveURL(tablePageUrl);
    await expect(row).toBeVisible();

    // Status pill becomes "Approved"
    await expect(row.locator('[data-label="Status"] .pill')).toHaveText('Approved');

    // Total submissions unchanged
    await expect(page.locator('#total-count')).toHaveText('5');
  });

  test('Test C: Decline Session — confirm dialog + row removal', async ({ page }) => {
    const row = page.locator('tbody tr', { hasText: 'Jane Smith' });

    // Ensure the row exists before action
    await expect(row).toBeVisible();

    // Register confirm dialog, then click Decline
    const waitDialog = page.waitForEvent('dialog');
    await row.getByRole('button', { name: /Decline submission for Jane Smith/i }).click();
    const dialog = await waitDialog;

    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Are you sure you want to decline the submission for Jane Smith?');
    await dialog.accept();

    // Verify row is removed
    await expect(row).toHaveCount(0);

    // Total submissions decremented
    await expect(page.locator('#total-count')).toHaveText('4');
  });
});
