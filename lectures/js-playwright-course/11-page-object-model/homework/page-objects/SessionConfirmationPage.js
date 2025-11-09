// @ts-check
export class SessionConfirmationPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.url = new URL('../../10-advanced-ui-interactions/homework/pages/session-confirmation.html', import.meta.url).href;

    // Key locators to assert against (match Lecture 10 assertions)
    this.successHeading = page.getByRole('heading', { name: 'Thank you for your submission!' });
    this.summary = {
      // These are intentionally lax so tests can assert specific items like "Deep Dive (45 mins)"
      // and filenames via page.getByText(...) in the test.
      format: page.getByText(/Deep Dive|Lightning|Workshop|Talk|Format/i),
      topics: page.getByText(/Automated Testing|Visual Regression|Topics/i),
      audience: page.getByText(/Introductory|Intermediate|Advanced/i),
      files: page.getByText(/\.\w{1,5}$/i).first()
    };
  }

  async isLoaded() {
    return this.successHeading.isVisible();
  }
}
