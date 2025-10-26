// ✅ Good: Descriptive property names
let apiTest = {
  testName: "user_creation_api",
  method: "POST",
  endpoint: "/api/users",
  expectedStatus: 201,
  actualStatus: null,
  responseData: null,
};
console.log("Good apiTest:", apiTest);

// ✅ Good: Consistent property naming (camelCase)
let userAccount = {
  firstName: "John",
  lastName: "Doe",
  emailAddress: "john.doe@test.com",
  accountType: "premium",
  isVerified: false,
};
console.log("Good userAccount:", userAccount);

// ✅ Good: Grouping related functionality
let passwordValidator = {
  minLength: 8,
  requireNumbers: true,
  requireSymbols: true,

  validate: function (password) {
    if (password.length < this.minLength) {
      return "Password too short";
    }
    if (this.requireNumbers && !/[0-9]/.test(password)) {
      return "Password must contain numbers";
    }
    return "Password is valid";
  },
};

// Test the validator
console.log(passwordValidator.validate("abc")); // "Password too short"
console.log(passwordValidator.validate("password123")); // "Password is valid"

// ❌ Avoid: Unclear property names
let bad = {
  n: "test",
  s: "PASS",
  t: 200,
};
console.log("Bad object:", bad);

// ❌ Avoid: Inconsistent naming
let inconsistent = {
  test_name: "login",
  TestStatus: "PASS",
  execution_Time: 200,
};
console.log("Inconsistent object:", inconsistent);
