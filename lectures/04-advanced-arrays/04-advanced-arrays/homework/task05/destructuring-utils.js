// Lecture 4 - Task 5: Extract values with destructuring
// Practice array destructuring and combine with map/filter/sort

// readTestRow(row: [name, status, time, priority]): string
// - Returns: "<status> <name> (<time>ms) - <priority>"
export function readTestRow(row) {
  const [name, status, time, priority] = row;
  return status + " " + name + " (" + time + "ms) - " + priority;
}

// extractFirstLast(arr: any[]): [first, last]
// - Assumes arr has at least 2 elements
export function extractFirstLast(arr) {
  const [first] = arr; // first element
  const last = arr[arr.length - 1];
  return [first, last];
}

// quickPassedAlphabetical(tests: [name, status, time, priority][]): string[]
// - Filter: status === "PASS" and time < 1000
// - Map: to name
// - Sort: alphabetical
export function quickPassedAlphabetical(tests) {
  return tests
    .filter(function (row) {
      const [, status, time] = row;
      return status === "PASS" && time < 1000;
    })
    .map(function (row) {
      const [name] = row;
      return name;
    })
    .sort(); // default alphabetical for strings
}

// --- Minimal demonstrations ---
const demoTests = [
  ["login", "PASS", 250, "HIGH"],
  ["logout", "FAIL", 1200, "LOW"],
  ["register", "PASS", 800, "MEDIUM"],
  ["reset_password", "PASS", 1500, "LOW"],
];

console.log("Read row:", readTestRow(demoTests[0]));
console.log("First/Last:", extractFirstLast([1, 2, 3, 4]));
console.log("Quick passed alphabetical:", quickPassedAlphabetical(demoTests));
