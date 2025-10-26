// Class definition - a blueprint for test users
class TestUser {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.isActive = true; // Default value
  }

  // Method available to all instances
  validate() {
    return this.email.includes("@") && this.password.length >= 6;
  }

  // Method to get user info
  getInfo() {
    return `User: ${this.username} (${this.email})`;
  }
}

// Creating instances with the 'new' keyword
let user1 = new TestUser("testuser1", "user1@test.com", "password123");
let user2 = new TestUser("testuser2", "user2@test.com", "securepass");

console.log("User 1:", user1.getInfo());
console.log("User 2:", user2.getInfo());
console.log("User 1 valid:", user1.validate());
console.log("User 2 valid:", user2.validate());
