// HomePage.js - Our first Page Object!

export class HomePage {
  // Step 1: Constructor receives the page object
  constructor(page) {
    this.page = page;
    // Store the URL as a property for easy navigation (module-relative)
    this.url = new URL("../pages/home.html", import.meta.url).href;

    // Create Playwright Locator instances for elements
    this.pageTitle = this.page.locator("#page-title");
    this.loginLink = this.page.locator("#login-link");
    this.aboutLink = this.page.locator("#about-link");
    this.contactLink = this.page.locator("#contact-link");
    this.welcomeText = this.page.locator("#welcome-text");
  }

  // Step 2: Locators are created in the constructor as Locator instances

  // Step 3: Navigation method
  async navigate() {
    await this.page.goto(this.url);
  }

  // Step 4: Action methods - what users can do
  async clickLogin() {
    await this.loginLink.click();
  }

  async clickAbout() {
    await this.aboutLink.click();
  }

  async clickContact() {
    await this.contactLink.click();
  }

  // Step 5: Expose locators; let tests assert with expect(locator)
  // Prefer using expect(homePage.pageTitle).toHaveText(...) in tests
}
