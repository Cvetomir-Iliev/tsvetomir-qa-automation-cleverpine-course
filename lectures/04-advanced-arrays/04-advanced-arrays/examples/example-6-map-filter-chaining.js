// Process test results: filter failed tests, then format them
let results = ["PASS", "FAIL", "PASS", "SKIP", "FAIL"];

let formattedFailures = results
  .filter(function (result) {
    return result === "FAIL";
  })
  .map(function (result) {
    return "🚨 " + result + " - Needs Investigation";
  });

console.log("Formatted failures:", formattedFailures);
// Output: ["🚨 FAIL - Needs Investigation", "🚨 FAIL - Needs Investigation"]

// Another example: Find long test names and make them uppercase
let testNames = [
  "login",
  "user_registration_with_email_verification",
  "logout",
  "password_reset_flow",
];

let longTestNamesUppercase = testNames
  .filter(function (name) {
    return name.length > 20;
  })
  .map(function (name) {
    return name.toUpperCase();
  });

console.log("Long test names (uppercase):", longTestNamesUppercase);
// Output: ["USER_REGISTRATION_WITH_EMAIL_VERIFICATION", "PASSWORD_RESET_FLOW"]
