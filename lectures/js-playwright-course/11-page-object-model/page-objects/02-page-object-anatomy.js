// Basic structure of a Page Object
class PageName {
  // 1. Constructor - receives page object from Playwright
  constructor(page) {
    this.page = page; // Store reference to Playwright page
    // Locators created as Playwright Locator instances
    this.username = this.page.locator("#username");
    this.password = this.page.locator("#password");
    this.submit = this.page.locator("#submit");
    this.errorMessage = this.page.locator("#error-message");
  }

  // 2. Locators - defined as properties or getters
  // Alternative: use getters for locators (returns Playwright locator object)
  get usernameField() {
    return this.username;
  }

  // 3. Actions - methods that perform user actions
  async fillUsername(username) {
    await this.username.fill(username);
  }

  async clickSubmit() {
    await this.submit.click();
  }

  // 4. Complex actions - methods that combine multiple steps
  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password); // This method is missing in the example, but implied
    await this.clickSubmit();
  }

  // 5. Verifications - methods that check page state
  async isErrorVisible() {
    return await this.errorMessage.isVisible();
  }

  // Added for completeness
  async fillPassword(password) {
    await this.password.fill(password);
  }
}
