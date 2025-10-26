// Without classes: repetitive object creation
let testUser1 = {
  username: "user1",
  email: "user1@test.com",
  password: "pass123",
  validate: function () {
    return this.email.includes("@") && this.password.length >= 6;
  },
};

let testUser2 = {
  username: "user2",
  email: "user2@test.com",
  password: "pass456",
  validate: function () {
    return this.email.includes("@") && this.password.length >= 6;
  },
};

// Notice the duplication? Classes solve this!
console.log("User 1 valid:", testUser1.validate());
console.log("User 2 valid:", testUser2.validate());
