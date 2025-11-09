// @ts-check
import { test, expect } from '@playwright/test';
import { SubmissionsTablePage } from '../page-objects/SubmissionsTablePage.js';

test.describe('Tables — Review & Moderate Submissions (POM)', () => {
  test.beforeEach(async ({ page }) => {
    const tbl = new SubmissionsTablePage(page);
    await tbl.navigate();
  });

  test('Test A: Count and headers', async ({ page }) => {
    const tbl = new SubmissionsTablePage(page);

    await expect(tbl.rows).toHaveCount(5);
    await expect(tbl.headers).toHaveText([
      'Speaker',
      'Session Format',
      'Topics',
      'Audience Level',
      'Files',
      'Status',
      'Actions',
    ]);
    await expect(tbl.totalCountEl).toHaveText('5');
  });

  test('Test B: Approve Session — alert dialog + status update', async ({ page }) => {
    const tbl = new SubmissionsTablePage(page);

    const once = page.waitForEvent('dialog');
    await tbl.approve('John Doe');
    const dialog = await once;
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Approved submission for John Doe');
    await dialog.accept();

    await expect(tbl.getRowBySpeaker('John Doe')).toBeVisible();
    await expect(tbl.getRowBySpeaker('John Doe').locator('[data-label="Status"] .pill')).toHaveText('Approved');
    await expect(tbl.totalCountEl).toHaveText('5');
  });

  test('Test C: Decline Session — confirm dialog + row removal', async ({ page }) => {
    const tbl = new SubmissionsTablePage(page);
    const row = tbl.getRowBySpeaker('Jane Smith');
    await expect(row).toBeVisible();

    const once = page.waitForEvent('dialog');
    await tbl.decline('Jane Smith');
    const dialog = await once;
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Are you sure you want to decline the submission for Jane Smith?');
    await dialog.accept();

    await expect(row).toHaveCount(0);
    await expect(tbl.totalCountEl).toHaveText('4');
  });
});
