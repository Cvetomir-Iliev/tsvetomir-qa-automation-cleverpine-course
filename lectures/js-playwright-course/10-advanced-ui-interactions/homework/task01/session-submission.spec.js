import { test, expect } from '@playwright/test';
import { getLocalUrl } from './getLocalUrl.js';


const formUrl = getLocalUrl('../pages/registration-form.html', import.meta.url);
const confirmUrl = getLocalUrl('../pages/session-confirmation.html', import.meta.url);

test.describe('Task 1: Session Submission & Confirmation', () => {
  test('Happy path — successful submission and confirmation', async ({ page }) => {
    await page.goto(formUrl);

    // Select a session format
    await page.selectOption('#session-format', 'deep-dive'); // Deep Dive (45 mins)

    // Choose topics (checkboxes)
    await page.getByLabel('Automated Testing').check();
    await page.getByLabel('Visual Regression').check();

    // Audience level (radio)
    await page.getByLabel('Audience level').getByLabel('Intermediate').check();

    // Upload one or more files (create virtual files via buffers)
    const files = [
      { name: 'deck.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4\n%...') },
      { name: 'talk-outline.txt', mimeType: 'text/plain', buffer: Buffer.from('Outline of the talk') },
    ];
    await page.setInputFiles('#materials', files);

    // Accept code of conduct
    await page.getByLabel('I agree to follow the summit code of conduct').check();

    // Submit and ensure navigation
    await Promise.all([
      page.waitForURL((url) => url.href.startsWith(confirmUrl)),
      page.getByTestId('submit-proposal').click(),
    ]);

    // Verify confirmation contents reflect selections
    await expect(page.getByRole('heading', { name: 'Thank you for your submission!' })).toBeVisible();
    await expect(page.getByText('Deep Dive (45 mins)')).toBeVisible();
    await expect(page.getByText('Automated Testing, Visual Regression')).toBeVisible();
    await expect(page.getByText('Intermediate')).toBeVisible();
    await expect(page.getByText(/deck\.pdf/)).toBeVisible();
    await expect(page.getByText(/talk-outline\.txt/)).toBeVisible();
  });

  test('Negative — validation blocks submission when required data is missing', async ({ page }) => {
    await page.goto(formUrl);

    // Intentionally omit acceptance of Code of Conduct to trigger validation.
    // Fill other required bits to ensure this is the missing piece.
    await page.selectOption('#session-format', 'lightning');
    await page.getByLabel('Automated Testing').check();
    await page.getByLabel('Audience level').getByLabel('Introductory').check();

    // Register one-time dialog handler before clicking submit.
    const [dialog] = await Promise.all([
      page.waitForEvent('dialog'),
      page.getByRole('button', { name: 'Submit Session Proposal' }).click(),
    ]);

    // Assert dialog type and message, then accept it.
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Please confirm acceptance of the code of conduct.');
    await dialog.accept();

    // Verify we remain on the form page (no navigation occurred).
    await expect(page).toHaveURL(formUrl);
    await expect(page.getByRole('heading', { name: 'Submit Your Playwright Summit Session' })).toBeVisible();

    // (Optional) Try another missing field variant: clear format and try again.
    await page.selectOption('#session-format', '');
    const [dialog2] = await Promise.all([
      page.waitForEvent('dialog'),
      page.getByRole('button', { name: 'Submit Session Proposal' }).click(),
    ]);
    expect(dialog2.type()).toBe('alert');
    expect(dialog2.message()).toContain('Please select a session format before continuing.');
    await dialog2.accept();
    await expect(page).toHaveURL(formUrl);
  });
});
