export class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = new URL("../pages/login.html", import.meta.url).href;
    // Create Locator instances for frequently used elements
    this.username = this.page.locator("#username");
    this.password = this.page.locator("#password");
    this.loginButton = this.page.locator("#login-button");
    this.errorMessage = this.page.locator("#error-message");
    this.successMessage = this.page.locator("#success-message");
    this.loginContainer = this.page.locator(".login-container");
  }

  // ===== LOCATORS =====
  // Group related locators together for clarity

  // ===== LOCATORS =====
  // (Locator instances are created in the constructor)

  // ===== NAVIGATION =====

  async navigate() {
    await this.page.goto(this.url);
    console.log("Navigated to login page");
  }

  // ===== BASIC ACTIONS =====
  // Atomic actions - single operations

  async fillUsername(username) {
    await this.username.fill(username);
    console.log(`Filled username: ${username}`);
  }

  async fillPassword(password) {
    await this.password.fill(password);
    console.log("Filled password: ****");
  }

  async clickLoginButton() {
    await this.loginButton.click();
    console.log("Clicked login button");
  }

  // ===== COMPLEX ACTIONS =====
  // Methods that combine multiple steps

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
    console.log(`Performed login with username: ${username}`);
  }

  async loginAndWaitForSuccess(username, password) {
    await this.login(username, password);
    await this.waitForSuccessMessage();
    console.log("Login successful");
  }

  async loginAndWaitForError(username, password) {
    await this.login(username, password);
    await this.waitForErrorMessage();
    console.log("Login failed as expected");
  }

  async clearForm() {
    await this.username.clear();
    await this.password.clear();
    console.log("Cleared login form");
  }

  // ===== GETTERS =====
  // Avoid textContent() getters for assertions; expose locators instead

  // ===== STATE CHECKS =====
  // Boolean methods to check element states

  async isErrorVisible() {
    return await this.errorMessage.isVisible();
  }

  async isSuccessVisible() {
    return await this.successMessage.isVisible();
  }

  async isLoginButtonEnabled() {
    return await this.loginButton.isEnabled();
  }

  async isUsernameFieldEmpty() {
    const value = await this.username.inputValue();
    return value === "";
  }

  // ===== WAIT METHODS =====
  // Explicit waits for specific conditions

  async waitForErrorMessage() {
    await this.errorMessage.waitFor({ state: "visible" });
  }

  async waitForSuccessMessage() {
    await this.successMessage.waitFor({ state: "visible" });
  }

  async waitForPageLoad() {
    await this.loginContainer.waitFor({ state: "visible" });
  }

  // ===== VALIDATION HELPERS =====
  // Prefer expect(locator) in tests instead of string comparisons here
}
