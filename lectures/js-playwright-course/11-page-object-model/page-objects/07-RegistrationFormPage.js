export class RegistrationFormPage {
  constructor(page) {
    this.page = page;
    this.url = new URL("../pages/registration-form.html", import.meta.url).href;
    // Locator instances
    this.countryDropdown = this.page.locator("#country");

    this.interestCoding = this.page.locator("#interest-coding");
    this.interestTesting = this.page.locator("#interest-testing");
    this.interestDesign = this.page.locator("#interest-design");
    this.interestDevOps = this.page.locator("#interest-devops");

    this.experienceBeginner = this.page.locator("#exp-beginner");
    this.experienceIntermediate = this.page.locator("#exp-intermediate");
    this.experienceAdvanced = this.page.locator("#exp-advanced");

    this.resumeInput = this.page.locator("#resume");
    this.termsCheckbox = this.page.locator("#terms");
    this.submitButton = this.page.locator("#submit-button");

    this.resultSection = this.page.locator("#result");
    this.resultCountry = this.page.locator("#result-country");
    this.resultInterests = this.page.locator("#result-interests");
    this.resultExperience = this.page.locator("#result-experience");
    this.resultResume = this.page.locator("#result-resume");
  }

  // ===== LOCATORS =====
  // (Locator instances are created in the constructor)

  // ===== NAVIGATION =====

  async navigate() {
    await this.page.goto(this.url);
    console.log("Navigated to registration form");
  }

  // ===== DROPDOWN ACTIONS =====

  async selectCountry(country) {
    await this.countryDropdown.selectOption(country);
    console.log(`Selected country: ${country}`);
  }

  async selectCountryByLabel(countryLabel) {
    await this.countryDropdown.selectOption({ label: countryLabel });
    console.log(`Selected country by label: ${countryLabel}`);
  }

  async getSelectedCountry() {
    return await this.countryDropdown.inputValue();
  }

  // ===== CHECKBOX ACTIONS =====

  async setInterests(interests, shouldCheck = true) {
    // Accept a single interest string or an array of interests
    const items = Array.isArray(interests) ? interests : [interests];

    const interestLocators = {
      coding: this.interestCoding,
      testing: this.interestTesting,
      design: this.interestDesign,
      devops: this.interestDevOps,
    };

    // Track whether all requested interests reached the desired state
    let allMatch = true;

    for (const interest of items) {
      const key = String(interest).toLowerCase();
      const locator = interestLocators[key];
      if (!locator) {
        // Unknown interest name -> mark as not matched and continue
        allMatch = false;
        console.warn(`Unknown interest: ${interest}`);
        continue;
      }

      // Perform the action
      if (shouldCheck) {
        await locator.check();
      } else {
        await locator.uncheck();
      }

      // Verify final state and update overall result
      const isChecked = await locator.isChecked();
      if (isChecked !== Boolean(shouldCheck)) {
        allMatch = false;
      }
    }

    // Return true if all requested interests are in the desired state
    return allMatch;
  }

  // ===== RADIO BUTTON ACTIONS =====

  async selectExperience(level) {
    const experienceLocators = {
      beginner: this.experienceBeginner,
      intermediate: this.experienceIntermediate,
      advanced: this.experienceAdvanced,
    };

    const locator = experienceLocators[level.toLowerCase()];
    if (locator) {
      await locator.check();
      console.log(`Selected experience: ${level}`);
    }
  }

  async getSelectedExperience() {
    // Check which radio is selected
    if (await this.experienceBeginner.isChecked()) {
      return "beginner";
    }
    if (await this.experienceIntermediate.isChecked()) {
      return "intermediate";
    }
    if (await this.experienceAdvanced.isChecked()) {
      return "advanced";
    }
    return null;
  }

  // ===== FILE UPLOAD ACTIONS =====

  async uploadResume(files) {
    const paths = Array.isArray(files) ? files : [files];
    await this.resumeInput.setInputFiles(paths);
    console.log(
      `Uploaded ${paths.length} file${paths.length === 1 ? "" : "s"}`
    );
  }

  async clearFileUpload() {
    await this.resumeInput.setInputFiles([]);
    console.log("Cleared file upload");
  }

  // ===== TERMS CHECKBOX =====

  async acceptTerms() {
    await this.termsCheckbox.check();
    console.log("Accepted terms and conditions");
  }

  async isTermsAccepted() {
    return await this.termsCheckbox.isChecked();
  }

  // ===== FORM SUBMISSION =====

  async clickSubmit() {
    await this.submitButton.click();
    console.log("Clicked submit button");
  }

  // ===== COMPLEX ACTIONS =====
  // High-level methods that complete entire workflows

  async completeRegistration(data) {
    // data object structure:
    // {
    //   country: 'usa',
    //   interests: ['coding', 'testing'],
    //   experience: 'intermediate',
    //   resumePath: '/path/to/file.pdf' or ['file1.pdf','file2.pdf']
    // }

    await this.selectCountry(data.country);
    await this.setInterests(data.interests, true);
    await this.selectExperience(data.experience);

    if (data.resumePath) {
      await this.uploadResume(data.resumePath);
    }

    await this.acceptTerms();
    await this.clickSubmit();

    console.log("Completed full registration");
  }

  async fillPartialRegistration(data) {
    // Fill only provided fields (for testing validation)
    if (data.country) await this.selectCountry(data.country);
    if (data.interests) await this.setInterests(data.interests, true);
    if (data.experience) await this.selectExperience(data.experience);
    if (data.resumePath) await this.uploadResume(data.resumePath);
    if (data.acceptTerms) await this.acceptTerms();

    console.log("Filled partial registration");
  }
}
