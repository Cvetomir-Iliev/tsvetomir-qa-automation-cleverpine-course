// JSON.stringify() can format JSON for easier reading
let testSuiteResults = {
  suiteName: "API Testing Suite",
  environment: "staging",
  totalTests: 15,
  passed: 12,
  failed: 2,
  skipped: 1,
  tests: [
    { name: "create_user", status: "PASS", duration: 245 },
    { name: "login_user", status: "PASS", duration: 180 },
    { name: "update_profile", status: "FAIL", duration: 320 },
  ],
};

// Regular JSON (compact)
let compactJson = JSON.stringify(testSuiteResults);
console.log("Compact JSON:");
console.log(compactJson);

// Pretty-printed JSON (formatted with indentation)
let prettyJson = JSON.stringify(testSuiteResults, null, 2);
console.log("\nPretty JSON:");
console.log(prettyJson);

// The second parameter (null) is for a replacer function (advanced topic)
// The third parameter (2) is the number of spaces for indentation
