export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.url = new URL("../pages/dashboard.html", import.meta.url).href;
    // Locator instances
    this.welcomeMessage = this.page.locator("#welcome-message");
  }
  // Expose locators; let tests assert with expect(dashboardPage.welcomeMessage)
}
