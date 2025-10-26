// API Test class using string methods and conditionals
class ApiTest {
  constructor(name, method, endpoint, expectedStatus = 200) {
    this.name = name;
    this.method = method.toUpperCase(); // String method from Lecture 2
    this.endpoint = endpoint;
    this.expectedStatus = expectedStatus;
    this.actualStatus = null;
    this.responseData = null;
    this.errors = []; // Array for collecting errors
  }

  // Validate endpoint format (using string methods from Lecture 2)
  validateEndpoint() {
    if (!this.endpoint.startsWith("/")) {
      this.errors.push("Endpoint must start with '/'");
    }
    if (this.endpoint.includes(" ")) {
      this.errors.push("Endpoint cannot contain spaces");
    }
    return this.errors.length === 0;
  }

  // Simulate API call execution
  execute(actualStatus, responseData) {
    this.actualStatus = actualStatus;
    this.responseData = responseData;

    // Using conditional logic from Lecture 2
    if (this.actualStatus === this.expectedStatus) {
      return "PASS";
    } else {
      this.errors.push(
        `Expected status ${this.expectedStatus}, got ${this.actualStatus}`
      );
      return "FAIL";
    }
  }

  // Get test results
  getResults() {
    return {
      name: this.name,
      method: this.method,
      endpoint: this.endpoint,
      status: this.actualStatus === this.expectedStatus ? "PASS" : "FAIL",
      errors: this.errors,
    };
  }
}

// Test the API test class
let userCreationTest = new ApiTest("create_user", "post", "/api/users", 201);

console.log("Endpoint valid:", userCreationTest.validateEndpoint());

let result = userCreationTest.execute(201, {
  userId: 123,
  message: "User created",
});
console.log("Test result:", result);
console.log("Full results:", userCreationTest.getResults());
