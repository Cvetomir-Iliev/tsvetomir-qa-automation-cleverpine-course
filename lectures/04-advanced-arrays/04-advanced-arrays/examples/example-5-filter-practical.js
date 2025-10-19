// Example 1: Filter slow performance tests
let testTimes = [150, 800, 1500, 200, 2500, 300];

let slowTests = testTimes.filter(function (time) {
  return time > 1000;
});

console.log("All times:", testTimes);
console.log("Slow tests (>1000ms):", slowTests); // [1500, 2500]

// Example 2: Find tests that contain specific keywords
let testNames = [
  "user_login",
  "admin_login",
  "password_reset",
  "user_logout",
  "admin_delete",
];

let adminTests = testNames.filter(function (name) {
  return name.includes("admin");
});

let loginTests = testNames.filter(function (name) {
  return name.includes("login");
});

console.log("Admin tests:", adminTests); // ["admin_login", "admin_delete"]
console.log("Login tests:", loginTests); // ["user_login", "admin_login"]

// Example 3: Filter valid email addresses from test data
let emailList = [
  "user@test.com",
  "invalid-email",
  "admin@company.com",
  "",
  "another@valid.org",
];

let validEmails = emailList.filter(function (email) {
  return email.includes("@") && email.includes(".") && email.length > 0;
});

console.log("All emails:", emailList);
console.log("Valid emails:", validEmails); // ["user@test.com", "admin@company.com", "another@valid.org"]

// Example 4: Filter test results by multiple criteria (using parallel arrays)
let names = ["login_test", "logout_test", "register_test", "delete_test"];
let statuses = ["PASS", "FAIL", "PASS", "PASS"];
let times = [250, 100, 1200, 800];

// Find indices of passed tests that took less than 1000ms
let quickPassedIndices = [];
for (let i = 0; i < names.length; i++) {
  if (statuses[i] === "PASS" && times[i] < 1000) {
    quickPassedIndices.push(i);
  }
}

console.log("Quick passed test indices:", quickPassedIndices);

// Get the names of those tests
let quickPassedTests = quickPassedIndices.map(function (index) {
  return names[index];
});

console.log("Quick passed tests:", quickPassedTests); // ["login_test", "delete_test"]
