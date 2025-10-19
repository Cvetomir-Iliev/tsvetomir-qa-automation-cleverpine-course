// Basic map syntax: array.map(function(element) { return something; })

let testCases = ["login", "logout", "register", "reset_password"];

// Transform test case names to include "test_" prefix
let testNames = testCases.map(function (testCase) {
  return "test_" + testCase;
});

console.log("Original:", testCases);
console.log("Transformed:", testNames);
// Output: ["test_login", "test_logout", "test_register", "test_reset_password"]
