// @ts-check
import { test, expect } from '@playwright/test';
import { SessionFormPage } from '../page-objects/SessionFormPage.js';
import { SessionConfirmationPage } from '../page-objects/SessionConfirmationPage.js';
import { SubmissionsTablePage } from '../page-objects/SubmissionsTablePage.js';

test.describe('POM Regression Suite', () => {
  test('Submission happy path + Table moderation (approve & decline)', async ({ page }) => {
    const form = new SessionFormPage(page);
    await form.navigate();

    const files = [{ name: 'deck.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4\n') }];

    await Promise.all([
      page.waitForURL((u) => u.href.includes('session-confirmation.html')),
      form.completeSubmission({
        format: 'deep-dive',
        topics: ['Automated Testing'],
        audience: 'Intermediate',
        files,
        acceptCoC: true,
      }),
    ]);
    const confirm = new SessionConfirmationPage(page);
    await expect(confirm.successHeading).toBeVisible();
    await expect(page.getByText('Deep Dive (45 mins)')).toBeVisible();

    const tbl = new SubmissionsTablePage(page);
    await tbl.navigate();

    let once = page.waitForEvent('dialog');
    await tbl.approve('John Doe');
    let d = await once;
    await d.accept();
    await expect(tbl.getRowBySpeaker('John Doe').locator('[data-label="Status"] .pill')).toHaveText('Approved');

    once = page.waitForEvent('dialog');
    await tbl.decline('Jane Smith');
    d = await once;
    await d.accept();
    await expect(tbl.getRowBySpeaker('Jane Smith')).toHaveCount(0);
  });
});
