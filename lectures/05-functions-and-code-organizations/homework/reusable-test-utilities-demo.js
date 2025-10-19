"use strict";

/**
 * Reused utilities (copied from Tasks 1–3 to keep names identical)
 * Task 1: countPassedTests, formatExecutionTime, findFailedTests
 * Task 2: isValidEmail, formatDuration
 * Task 3: formatTestResultArrow, calculateAverageArrow (arrow variants)
 */

// ===== Task 1 =====
function countPassedTests(results) {
  let passedCount = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "PASS") {
      passedCount++;
    }
  }
  return passedCount;
}

function formatExecutionTime(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    return (milliseconds / 1000).toFixed(1) + "s";
  }
}

function findFailedTests(testNames, testResults) {
  let failedTests = [];
  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failedTests.push(testNames[i]);
    }
  }
  return failedTests;
}

// ===== Task 2 =====
function isValidEmail(email) {
  let hasAtSymbol = email.includes("@");
  let hasDotSymbol = email.includes(".");
  let isNotEmpty = email.length > 0;
  return hasAtSymbol && hasDotSymbol && isNotEmpty;
}

function formatDuration(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    return (milliseconds / 1000).toFixed(1) + "s";
  }
}

// ===== Task 3 (arrow variants) =====
let formatTestResultArrow = (testName, status) => {
  let icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + ": " + status;
};

let calculateAverageArrow = (numbers) => {
  let sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum / numbers.length;
};

// ======================================================================
// Tiny dataset
// ======================================================================
const names = [
  "login_test",
  "logout_flow",
  "register_user",
  "reset_password",
  "profile_update",
  "search_products",
  "checkout_payment"
];

const results = [
  "PASS",
  "FAIL",
  "PASS",
  "SKIP",
  "PASS",
  "FAIL",
  "PASS"
];

const times = [
  245,   // ms
  1340,  // ms
  980,   // ms
  2125,  // ms
  510,   // ms
  3450,  // ms
  870    // ms
];

// ======================================================================
// Mini report
// ======================================================================

// BASIC METRICS
console.log("=== BASIC METRICS ===");
const total = names.length;
const passedCount = countPassedTests(results);
const successRate = ((passedCount / total) * 100).toFixed(1);
console.log("Total:", total);
console.log("Passed:", passedCount);
console.log("Success Rate:", successRate + "%");

// FAILURES
console.log("\n=== FAILURES ===");
const failures = findFailedTests(names, results);
console.log(failures);

// FORMATTED TIMES
console.log("\n=== FORMATTED TIMES ===");
const formattedTimes = times.map(formatExecutionTime);
console.log(formattedTimes);

// FORMATTED RESULT LINES (Task 3 arrow utility in action)
console.log("\n=== RESULT LINES ===");
names.forEach((name, i) => {
  console.log(formatTestResultArrow(name, results[i]));
});

// AVERAGE DURATION (using Task 3 arrow avg + Task 2 formatter)
const averageMs = calculateAverageArrow(times);
console.log("\nAverage duration:", formatDuration(averageMs));

// EMAIL VALIDATION (SAMPLE)
console.log("\n=== EMAIL VALIDATION (SAMPLE) ===");
["qa@team.io", "bad-email", ""].forEach((email) => {
  console.log(email, "=>", isValidEmail(email));
});

// End of demo
