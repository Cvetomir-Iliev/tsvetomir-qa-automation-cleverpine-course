// Lecture 4 - Task 2: Select subsets with filter
// Utilities built with Array.filter to focus views of test data.

// getFailedResults(results: string[]): string[]
// - Return only entries equal to "FAIL"
export function getFailedResults(results) {
  return results.filter(function (r) {
    return r === "FAIL";
  });
}

// getHighPriorityTests(tests: [name, status, time, priority][]): same shape array
// - Return tests where priority === "HIGH"
// - Use destructuring inside the filter callback
export function getHighPriorityTests(tests) {
  return tests.filter(function (row) {
    const [, , , priority] = row; // destructuring per lecture (only priority needed)
    return priority === "HIGH";
  });
}

// getSlowTests(tests: [name, status, time, priority][]): same shape array
// - Return tests with time > 1000ms
// - Use destructuring to read time
export function getSlowTests(tests) {
  return tests.filter(function (row) {
    const [, , time] = row; // only time needed
    return time > 1000;
  });
}

// findTestsByKeyword(names: string[], keyword: string): string[]
// - Return only names containing the keyword (case-sensitive per lecture's includes usage)
export function findTestsByKeyword(names, keyword) {
  return names.filter(function (n) {
    return n.includes(keyword);
  });
}

// --- Minimal demonstrations ---
const demoResults = ["PASS", "FAIL", "PASS", "SKIP", "FAIL", "PASS"];
const demoTests = [
  ["login_test", "PASS", 250, "HIGH"],
  ["logout_test", "FAIL", 1200, "LOW"],
  ["register_test", "PASS", 1500, "MEDIUM"],
  ["delete_test", "PASS", 800, "HIGH"],
];
const demoNames = [
  "user_login",
  "admin_login",
  "password_reset",
  "user_logout",
  "admin_delete",
];

console.log("Failed results:", getFailedResults(demoResults));
console.log("High priority tests:", getHighPriorityTests(demoTests));
console.log("Slow tests (>1000ms):", getSlowTests(demoTests));
console.log("Names with 'admin':", findTestsByKeyword(demoNames, "admin"));
