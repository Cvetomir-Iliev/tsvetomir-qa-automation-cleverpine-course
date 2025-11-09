import { DashboardPage } from "./10-DashboardPage.js"; // Adjusted path

export class LoginPage {
  // ... existing code from 05-LoginPage.js ...
  constructor(page) {
    this.page = page;
    this.url = new URL("../pages/login.html", import.meta.url).href;
    this.username = this.page.locator("#username");
    this.password = this.page.locator("#password");
    this.loginButton = this.page.locator("#login-button");
    this.errorMessage = this.page.locator("#error-message");
    this.successMessage = this.page.locator("#success-message");
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async fillUsername(username) {
    await this.username.fill(username);
  }

  async fillPassword(password) {
    await this.password.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async waitForSuccessMessage() {
    await this.successMessage.waitFor({ state: "visible" });
  }
  // ... end of existing code ...

  async loginAndNavigate(username, password) {
    await this.login(username, password);
    await this.waitForSuccessMessage();
    // Wait for navigation to complete
    await this.page.waitForURL(/dashboard.html/);
    // Return new page object for next page
    return new DashboardPage(this.page);
  }
}
