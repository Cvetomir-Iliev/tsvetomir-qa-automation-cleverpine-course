// ✅ Good: Clear class purpose and naming
class TestDataGenerator {
  constructor(baseUrl, environment) {
    this.baseUrl = baseUrl;
    this.environment = environment;
    this.userCounter = 0;
  }

  generateTestUser() {
    this.userCounter++;
    return {
      username: `testuser${this.userCounter}`,
      email: `testuser${this.userCounter}@${this.environment}.test.com`,
      password: `TestPass${this.userCounter}!`,
    };
  }

  generateApiEndpoint(path) {
    return this.baseUrl + path;
  }
}

let dataGen = new TestDataGenerator("https://api.test.com", "staging");
console.log("Test user 1:", dataGen.generateTestUser());
console.log("Test user 2:", dataGen.generateTestUser());
console.log("API endpoint:", dataGen.generateApiEndpoint("/users"));

// ✅ Good: Constructor parameter validation
class TestConfiguration {
  constructor(environment, timeout, maxRetries) {
    // Validate required parameters
    if (!environment) {
      throw new Error("Environment is required");
    }

    this.environment = environment;
    this.timeout = timeout || 5000; // Default timeout
    this.maxRetries = maxRetries || 3; // Default retries
    this.baseUrl = this.getBaseUrl();
  }

  getBaseUrl() {
    // Using conditional logic from Lecture 2
    if (this.environment === "development") {
      return "http://localhost:3000";
    } else if (this.environment === "staging") {
      return "https://staging.example.com";
    } else if (this.environment === "production") {
      return "https://example.com";
    } else {
      return "http://localhost:3000"; // Default
    }
  }
}

let config = new TestConfiguration("staging", 10000, 5);
console.log("Test config:", config);
