// Lecture 4 - Integration: Advanced Test Analytics Dashboard
// Reuse utilities from Tasks 1–5 on a single dataset
// Note: For simplicity and to keep this file self-contained per assignment guidance,
// we recreate the needed functions with identical names.

// ------------------------
// Dataset (6–8 rows): [name, status, time, priority]
// ------------------------
const rawTestData = [
  ["user_login", "PASS", 320, "HIGH"],
  ["admin_login", "FAIL", 1450, "HIGH"],
  ["password_reset", "PASS", 980, "MEDIUM"],
  ["user_logout", "PASS", 410, "LOW"],
  ["admin_delete", "FAIL", 870, "MEDIUM"],
  ["user_register", "SKIP", 0, "LOW"],
  ["email_verification", "PASS", 1120, "MEDIUM"],
];

// ------------------------
// Task 1 utils (map)
// ------------------------
function buildVisualStatuses(results) {
  return results.map(function (status) {
    if (status === "PASS") return "✅ PASS";
    if (status === "FAIL") return "🚨 FAIL - Needs Investigation";
    if (status === "SKIP") return "⏭️ SKIP";
    return status;
  });
}
function formatExecutionTimes(times) {
  return times.map(function (t) {
    return t + "ms";
  });
}

// ------------------------
// Task 2 utils (filter)
// ------------------------
function getFailedResults(results) {
  return results.filter(function (r) {
    return r === "FAIL";
  });
}
function getSlowTests(tests) {
  return tests.filter(function (row) {
    const [, , time] = row;
    return time > 1000;
  });
}

// ------------------------
// Task 3 utils (reduce)
// ------------------------
function countResultsByType(results) {
  return results.reduce(
    function (counts, result) {
      if (result === "PASS") counts[0] += 1;
      else if (result === "FAIL") counts[1] += 1;
      else if (result === "SKIP") counts[2] += 1;
      return counts;
    },
    [0, 0, 0]
  );
}
function averageTimeForPassed(results, times) {
  const pair = results.reduce(
    function (acc, res, idx) {
      if (res === "PASS") {
        acc[0] += times[idx];
        acc[1] += 1;
      }
      return acc;
    },
    [0, 0]
  );
  return pair[1] === 0 ? 0 : pair[0] / pair[1];
}

// ------------------------
// Task 4 utils (sort)
// ------------------------
function sortNamesByLength(names) {
  return names.slice().sort(function (a, b) {
    return a.length - b.length;
  });
}
function sortFailedByPriorityThenTime(tests) {
  const mapping = { HIGH: 1, MEDIUM: 2, LOW: 3 };
  return tests.slice().sort(function (a, b) {
    const [, , timeA, priorityA] = a;
    const [, , timeB, priorityB] = b;
    const diffP = mapping[priorityA] - mapping[priorityB];
    if (diffP !== 0) return diffP;
    return timeA - timeB;
  });
}

// ------------------------
// Task 5 utils (destructuring)
// ------------------------
function readTestRow(row) {
  const [name, status, time, priority] = row;
  return status + " " + name + " (" + time + "ms) - " + priority;
}

// ------------------------
// Glue: Extract parallel arrays
// ------------------------
const names = rawTestData.map(function (r) {
  return r[0];
});
const results = rawTestData.map(function (r) {
  return r[1];
});
const times = rawTestData.map(function (r) {
  return r[2];
});

// ------------------------
// Output Sections
// ------------------------
console.log("=== FORMATTED REPORTS ===");
console.log("Visual statuses:", buildVisualStatuses(results));
console.log("Execution times:", formatExecutionTimes(times));

console.log("\n=== FILTERED VIEWS ===");
console.log("Failed results:", getFailedResults(results));
// Add high-priority count per spec
const highPriorityCount = rawTestData.filter(function (row) {
  return row[3] === "HIGH";
}).length;
console.log("High priority count:", highPriorityCount);
console.log(
  "Slow tests (>1000ms):",
  getSlowTests(rawTestData).map(readTestRow)
);

console.log("\n=== METRICS ===");
const [passC, failC, skipC] = countResultsByType(results);
console.log("Counts [PASS, FAIL, SKIP]:", [passC, failC, skipC]);
console.log(
  "Average time (PASS):",
  averageTimeForPassed(results, times).toFixed(1) + "ms"
);

console.log("\n=== SORTED ===");
console.log("Names by length:", sortNamesByLength(names));
const failedOnly = rawTestData.filter(function (r) {
  return r[1] === "FAIL";
});
console.log(
  "Failed by priority then time:",
  sortFailedByPriorityThenTime(failedOnly).map(readTestRow)
);

console.log("\n=== ROW SUMMARIES ===");
rawTestData.forEach(function (row) {
  console.log("-", readTestRow(row));
});
