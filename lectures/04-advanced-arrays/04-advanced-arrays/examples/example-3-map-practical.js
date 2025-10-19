// Example 1: Format execution times for reports
let executionTimes = [1250, 890, 2100, 456]; // milliseconds

let formattedTimes = executionTimes.map(function (time) {
  return time + "ms";
});

console.log("Formatted execution times:", formattedTimes);
// Output: ["1250ms", "890ms", "2100ms", "456ms"]

// Example 2: Convert user IDs to email addresses
let userIds = [101, 102, 103, 104];

let testEmails = userIds.map(function (id) {
  return "testuser" + id + "@example.com";
});

console.log("Generated test emails:", testEmails);
// Output: ["testuser101@example.com", "testuser102@example.com", ...]

// Example 3: Add status icons to test results
let results = ["PASS", "FAIL", "PASS", "SKIP"];

let visualResults = results.map(function (status) {
  if (status === "PASS") {
    return "✅";
  } else if (status === "FAIL") {
    return "❌";
  } else {
    return "❓";
  }
});

console.log("Visual results:", visualResults);

// Example 4: Calculate performance ratings
let responseTimes = [200, 500, 1200, 800];

let performanceRatings = responseTimes.map(function (time) {
  if (time < 300) {
    return "Fast";
  } else if (time < 1000) {
    return "Normal";
  } else {
    return "Slow";
  }
});

console.log("Performance ratings:", performanceRatings);
// Output: ["Fast", "Normal", "Slow", "Normal"]
