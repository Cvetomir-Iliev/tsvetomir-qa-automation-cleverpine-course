// Test User Class
class TestUser {
  constructor(username, email, password, role = "admin", active = true) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.active = active;
  }
  isValidEmail() {
    return this.email.includes("@") && this.email.length > 5;
  }
  isValidPassword() {
    return this.password.length >= 8;
  }
  validate() {
    return this.isValidEmail() && this.isValidPassword();
  }
  getInfo() {
    return `User: ${this.username} (${this.email})`;
  }

}
console.log("Test User Class: ", TestUser);
let user1 = new TestUser("testuser1", "testuser1@example.com", "securepass123");
let user2 = new TestUser("testuser2", "testuser2@example.com", "securepass123");

console.log("Test User Instance 1:", user1);
console.log("User 1 Info:", user1.getInfo());
console.log("User 1 Valid:", user1.validate());

console.log("Test User Instance 2:", user2);
console.log("User 2 Info:", user2.getInfo());
console.log("User 2 Valid:", user2.validate());


// Test Case Class
class TestCase {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.status = "PENDING";
      this.duration = 0;
    }
    start() {
      this.status = "RUNNING";
      console.log(`Started test: ${this.name}`);
    }   
    complete(status, durationMs) {
      this.status = status;
      this.duration = durationMs;
      console.log(`Completed test: ${this.name} - ${this.status} (${this.duration}ms)`);
    }
    getSummary() {
      return `Test: ${this.name} - ${this.status} (${this.duration}ms)`;
    }
  }
  console.log("Test Case Class: ", TestCase);
  let test1 = new TestCase("login_test", "Test user login with valid credentials");
  let test2 = new TestCase("logout_test", "Test user logout functionality");
  
  console.log("Test Case Instance 1:", test1);
  console.log("Test 1 Summary:", test1.getSummary());
  
  console.log("Test Case Instance 2:", test2);
  console.log("Test 2 Summary:", test2.getSummary());

  test1.start();
  setTimeout(() => {
    test1.complete("PASS", 250);
    console.log("Test 1 Summary:", test1.getSummary());
  }, 100);
  test2.start();
  setTimeout(() => {
    test2.complete("FAIL", 180);
    console.log("Test 2 Summary:", test2.getSummary());
  }, 50);
  
  module.exports = {
    TestUser,
    TestCase,
  };
