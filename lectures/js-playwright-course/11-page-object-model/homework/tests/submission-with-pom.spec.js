// @ts-check
import { test, expect } from '@playwright/test';
import { SessionFormPage } from '../page-objects/SessionFormPage.js';
import { SessionConfirmationPage } from '../page-objects/SessionConfirmationPage.js';

test.describe('Submission flow with POM', () => {
  test('Happy path — successful submission and confirmation', async ({ page }) => {
    const form = new SessionFormPage(page);
    await form.navigate();

    const files = [
      { name: 'deck.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4\n%...') },
      { name: 'talk-outline.txt', mimeType: 'text/plain', buffer: Buffer.from('Outline of the talk') },
    ];

    await Promise.all([
      page.waitForURL((u) => u.href.includes('session-confirmation.html')),
      form.completeSubmission({
        format: 'deep-dive',
        topics: ['Automated Testing', 'Visual Regression'],
        audience: 'Intermediate',
        files,
        acceptCoC: true,
      }),
    ]);

    const confirm = new SessionConfirmationPage(page);
    await expect(confirm.successHeading).toBeVisible();
    await expect(page.getByText('Deep Dive (45 mins)')).toBeVisible();
    await expect(page.getByText('Automated Testing, Visual Regression')).toBeVisible();
    await expect(page.getByText('Intermediate')).toBeVisible();
    await expect(page.getByText(/deck\.pdf/)).toBeVisible();
    await expect(page.getByText(/talk-outline\.txt/)).toBeVisible();
  });

  test('Negative — validation blocks submission when required data is missing', async ({ page }) => {
    const form = new SessionFormPage(page);
    await form.navigate();

    await form.selectFormat('lightning');
    await form.setTopics(['Automated Testing'], true);
    await form.selectAudience('Introductory');

    const [dialog] = await Promise.all([
      page.waitForEvent('dialog'),
      form.clickSubmit(),
    ]);

    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Please confirm acceptance of the code of conduct.');
    await dialog.accept();

    await expect(page).toHaveURL(form.url);
    await expect(form.titleHeading).toBeVisible();
  });
});
