class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.startTime = null;
    this.endTime = null;
    this.duration = 0;
  }

  // Start the test
  start() {
    this.status = "RUNNING";
    this.startTime = Date.now();
    console.log(`Started test: ${this.name}`);
  }

  // Complete the test
  complete(status) {
    this.status = status;
    this.endTime = Date.now();
    this.duration = this.endTime - this.startTime;
    console.log(
      `Completed test: ${this.name} - ${this.status} (${this.duration}ms)`
    );
  }

  // Get test summary
  getSummary() {
    return {
      name: this.name,
      status: this.status,
      duration: this.duration,
    };
  }
}

// Using the TestCase class
let loginTest = new TestCase(
  "login_functionality",
  "Test user login with valid credentials"
);

loginTest.start();
// Simulate test execution
setTimeout(() => {
  loginTest.complete("PASS");
  console.log("Test summary:", loginTest.getSummary());
}, 100);
