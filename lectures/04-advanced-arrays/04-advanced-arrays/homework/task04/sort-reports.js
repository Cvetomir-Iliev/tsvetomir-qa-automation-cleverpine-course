// Lecture 4 - Task 4: Order reports with sort
// Produces ordered views of data with Array.sort and comparison functions

// sortIndicesByTime(names: string[], times: number[]): number[]
// - Returns indices ordered from fastest to slowest without mutating inputs
export function sortIndicesByTime(names, times) {
  // Build indices [0..n-1], then sort them by times ascending
  const indices = [];
  for (let i = 0; i < times.length; i++) {
    indices.push(i);
  }
  return indices.slice().sort(function (a, b) {
    return times[a] - times[b];
  });
}

// sortNamesByLength(names: string[]): string[]
export function sortNamesByLength(names) {
  return names.slice().sort(function (a, b) {
    return a.length - b.length;
  });
}

// sortByPriority(priorities: ("HIGH"|"MEDIUM"|"LOW")[]): string[]
export function sortByPriority(priorities) {
  const mapping = { HIGH: 1, MEDIUM: 2, LOW: 3 };
  return priorities.slice().sort(function (a, b) {
    return mapping[a] - mapping[b];
  });
}

// sortFailedByPriorityThenTime(tests: [name, status, time, priority][]): same shape array
// - Input contains only failed tests
// - Sort by HIGH, MEDIUM, LOW first, then by time ascending (faster first within same priority)
export function sortFailedByPriorityThenTime(tests) {
  const mapping = { HIGH: 1, MEDIUM: 2, LOW: 3 };
  return tests.slice().sort(function (rowA, rowB) {
    const [, , timeA, priorityA] = rowA;
    const [, , timeB, priorityB] = rowB;

    const diffPriority = mapping[priorityA] - mapping[priorityB];
    if (diffPriority !== 0) {
      return diffPriority;
    }
    return timeA - timeB; // within same priority, sort by time asc
  });
}

// --- Minimal demonstrations ---
const demoNames = [
  "zebra_test",
  "alpha_test",
  "beta_test",
  "long_long_long_test",
];
const demoTimes = [500, 120, 350, 700];
const demoPriorities = ["LOW", "HIGH", "MEDIUM", "HIGH", "LOW"];
const demoFailed = [
  ["fail_login", "FAIL", 1200, "HIGH"],
  ["fail_delete", "FAIL", 800, "MEDIUM"],
  ["fail_update", "FAIL", 400, "HIGH"],
];

// Confirm non-mutation: show originals BEFORE and AFTER each call

// 1) sortIndicesByTime (uses names/times as read-only inputs)
console.log("BEFORE (names/times):", demoNames, demoTimes);
console.log(
  "Indices by time (fast->slow):",
  sortIndicesByTime(demoNames, demoTimes)
);
console.log("AFTER (names/times should be unchanged):", demoNames, demoTimes);

// 2) sortNamesByLength
console.log("BEFORE (names):", demoNames);
console.log("Names by length:", sortNamesByLength(demoNames));
console.log("AFTER (names should be unchanged):", demoNames);

// 3) sortByPriority
console.log("BEFORE (priorities):", demoPriorities);
console.log("Priorities sorted:", sortByPriority(demoPriorities));
console.log("AFTER (priorities should be unchanged):", demoPriorities);

// 4) sortFailedByPriorityThenTime
console.log("BEFORE (failed tests):", JSON.stringify(demoFailed));
console.log(
  "Failed by priority then time:",
  sortFailedByPriorityThenTime(demoFailed)
);
console.log(
  "AFTER (failed tests should be unchanged):",
  JSON.stringify(demoFailed)
);
