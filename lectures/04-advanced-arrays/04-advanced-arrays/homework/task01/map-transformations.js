// Lecture 4 - Task 1: Transform data with map
// This file demonstrates Array.map to transform raw testing values into formatted outputs.
// Only concepts from lectures 1-4 are used.

// buildVisualStatuses(results: string[]): string[]
// - Transform PASS/FAIL/SKIP into visual labels suitable for reports
// - Uses map with a classic function callback (as in the lecture examples)
export function buildVisualStatuses(results) {
  return results.map(function (status) {
    if (status === "PASS") {
      return "✅ PASS";
    } else if (status === "FAIL") {
      return "🚨 FAIL - Needs Investigation";
    } else if (status === "SKIP") {
      return "⏭️ SKIP";
    }
    // Fallback for unexpected values; keeps the function total
    return status;
  });
}

// formatExecutionTimes(times: number[]): string[]
// - Append "ms" to each time value for human-readable formatting
export function formatExecutionTimes(times) {
  return times.map(function (t) {
    return t + "ms";
  });
}

// generateTestEmails(ids: number[]): string[]
// - Convert numeric user IDs to standard test emails
export function generateTestEmails(ids) {
  return ids.map(function (id) {
    return "testuser" + id + "@example.com";
  });
}

// ratePerformance(times: number[]): string[]
// - Categorize response times into Fast/Normal/Slow buckets
export function ratePerformance(times) {
  return times.map(function (time) {
    if (time < 300) {
      return "Fast";
    } else if (time <= 1000) {
      return "Normal";
    }
    return "Slow";
  });
}

// --- Minimal demonstrations (kept tiny on purpose) ---
const demoResults = ["PASS", "FAIL", "SKIP", "PASS"];
const demoTimes = [1250, 890, 2100, 456];
const demoIds = [101, 102, 103, 104];
const demoPerf = [200, 500, 1200, 800];

console.log("Visual statuses:", buildVisualStatuses(demoResults));
console.log("Formatted times:", formatExecutionTimes(demoTimes));
console.log("Generated emails:", generateTestEmails(demoIds));
console.log("Performance ratings:", ratePerformance(demoPerf));
