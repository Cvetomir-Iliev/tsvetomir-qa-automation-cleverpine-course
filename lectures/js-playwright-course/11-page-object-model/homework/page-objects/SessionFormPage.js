// @ts-check
export class SessionFormPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.url = new URL('../../10-advanced-ui-interactions/homework/pages/registration-form.html', import.meta.url).href;

    // Locators
    this.titleHeading = page.getByRole('heading', { name: 'Submit Your Playwright Summit Session' });
    this.formatSelect = page.locator('#session-format');
    this.filesInput = page.locator('#materials');
    this.cocCheckbox = page.getByLabel('I agree to follow the summit code of conduct');
    this.submitButton = page.getByTestId('submit-proposal').or(page.getByRole('button', { name: 'Submit Session Proposal' }));

    // Topic checkboxes via accessible labels (stable, not brittle to IDs)
    this.topic = (label) => this.page.getByLabel(label);

    // Audience radios are nested; scope via group then pick by label
    this.audienceGroup = page.getByLabel('Audience level');
    this.audience = (label) => this.audienceGroup.getByLabel(label);
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  /** @param {string|{label:string}|{value:string}} valueOrLabel */
  async selectFormat(valueOrLabel) {
    if (typeof valueOrLabel === 'string') {
      try {
        await this.formatSelect.selectOption(valueOrLabel);
      } catch {
        await this.formatSelect.selectOption({ label: valueOrLabel });
      }
    } else {
      await this.formatSelect.selectOption(valueOrLabel);
    }
  }

  /** @param {string[]} items @param {boolean} shouldCheck */
  async setTopics(items, shouldCheck = true) {
    let ok = true;
    for (const t of items) {
      const cb = this.topic(t);
      if (shouldCheck) {
        await cb.check();
        ok = ok && await cb.isChecked();
      } else {
        await cb.uncheck();
        ok = ok && !(await cb.isChecked());
      }
    }
    return ok;
  }

  /** @param {string} levelLabel */
  async selectAudience(levelLabel) {
    await this.audience(levelLabel).check();
  }

  /** @param {Array<string|import('@playwright/test').FilePayload>|string} files */
  async uploadFiles(files) {
    await this.filesInput.setInputFiles(files);
  }

  async acceptCodeOfConduct() {
    await this.cocCheckbox.check();
  }

  async unacceptCodeOfConduct() {
    await this.cocCheckbox.uncheck();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  /**
   * High-level: perform end-to-end submission
   * @param {{format:string|{label:string}|{value:string}, topics:string[], audience:string, files:Array<string|import('@playwright/test').FilePayload>|string, acceptCoC?:boolean}} data
   */
  async completeSubmission(data) {
    await this.selectFormat(data.format);
    if (data.topics?.length) await this.setTopics(data.topics, true);
    if (data.audience) await this.selectAudience(data.audience);
    if (data.files) await this.uploadFiles(data.files);
    if (data.acceptCoC ?? true) await this.acceptCodeOfConduct();
    await this.clickSubmit();
  }
}
