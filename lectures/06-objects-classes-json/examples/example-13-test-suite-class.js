// Test Suite class using arrays and loops from Lectures 3 & 4
class TestSuite {
  constructor(name, environment) {
    this.name = name;
    this.environment = environment;
    this.tests = []; // Array to hold test cases
    this.startTime = null;
    this.endTime = null;
  }

  // Add test to suite
  addTest(test) {
    this.tests.push(test); // Array method from Lecture 3
  }

  // Remove test from suite
  removeTest(testName) {
    // Using array filter from Lecture 4
    this.tests = this.tests.filter((test) => test.name !== testName);
  }

  // Get test by name
  getTest(testName) {
    // Using array find (similar to filter from Lecture 4)
    return this.tests.find((test) => test.name === testName);
  }

  // Execute all tests
  executeAll() {
    this.startTime = Date.now();
    console.log(`\nExecuting test suite: ${this.name} in ${this.environment}`);

    // Using for loop from Lecture 3
    for (let i = 0; i < this.tests.length; i++) {
      let test = this.tests[i];
      console.log(`Running test ${i + 1}/${this.tests.length}: ${test.name}`);

      // Simulate test execution with conditional logic
      if (test.name.includes("login")) {
        test.status = "PASS";
      } else if (test.name.includes("payment")) {
        test.status = "FAIL";
      } else {
        test.status = "PASS";
      }
    }

    this.endTime = Date.now();
    console.log("Test suite execution completed");
  }

  // Get execution summary using array methods from Lecture 4
  getSummary() {
    let total = this.tests.length;
    let passed = this.tests.filter((test) => test.status === "PASS").length;
    let failed = this.tests.filter((test) => test.status === "FAIL").length;
    let pending = this.tests.filter((test) => test.status === "PENDING").length;

    return {
      suiteName: this.name,
      environment: this.environment,
      totalTests: total,
      passed: passed,
      failed: failed,
      pending: pending,
      successRate: total > 0 ? ((passed / total) * 100).toFixed(1) + "%" : "0%",
      executionTime: this.endTime - this.startTime,
    };
  }

  // Get failed tests (using array methods from Lecture 4)
  getFailedTests() {
    return this.tests
      .filter((test) => test.status === "FAIL")
      .map((test) => test.name);
  }
}

// Using the TestSuite class
let authSuite = new TestSuite("Authentication Tests", "staging");

// Add some test cases (creating simple test objects)
authSuite.addTest({ name: "login_valid_user", status: "PENDING" });
authSuite.addTest({ name: "login_invalid_password", status: "PENDING" });
authSuite.addTest({ name: "logout_functionality", status: "PENDING" });
authSuite.addTest({ name: "payment_processing", status: "PENDING" });

console.log("Initial tests:", authSuite.tests.length);

// Execute tests
authSuite.executeAll();

// Get summary
let summary = authSuite.getSummary();
console.log("\nExecution Summary:", summary);

let failedTests = authSuite.getFailedTests();
console.log("Failed tests:", failedTests);
