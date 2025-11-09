// @ts-check
export class SubmissionsTablePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.url = new URL('../../10-advanced-ui-interactions/homework/pages/table-page.html', import.meta.url).href;

    this.table = page.locator('table');
    this.headers = page.locator('thead th');
    this.rows = page.locator('tbody > tr');
    this.totalCountEl = page.locator('#total-count');
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  getRowBySpeaker(name) {
    return this.page.locator('tbody tr', { hasText: name });
  }

  async getHeaders() {
    return await this.headers.allTextContents();
  }

  async getTotalCount() {
    const txt = await this.totalCountEl.textContent();
    return Number((txt || '').trim());
  }

  async approve(name) {
    const row = this.getRowBySpeaker(name);
    await row.getByRole('button', { name: new RegExp(`^Approve submission for ${this._escape(name)}$`, 'i') }).click();
  }

  async decline(name) {
    const row = this.getRowBySpeaker(name);
    await row.getByRole('button', { name: new RegExp(`^Decline submission for ${this._escape(name)}$`, 'i') }).click();
  }

  async getStatus(name) {
    const row = this.getRowBySpeaker(name);
    return row.locator('[data-label="Status"] .pill').textContent();
  }

  _escape(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
