// Lecture 4 - Task 3: Aggregate metrics with reduce
// Demonstrates Array.reduce for counts, averages, and extremes

// countResultsByType(results: ("PASS"|"FAIL"|"SKIP")[]): [passCount, failCount, skipCount]
export function countResultsByType(results) {
  return results.reduce(
    function (counts, result) {
      // counts has fixed shape: [pass, fail, skip]
      if (result === "PASS") {
        counts[0] += 1;
      } else if (result === "FAIL") {
        counts[1] += 1;
      } else if (result === "SKIP") {
        counts[2] += 1;
      }
      return counts;
    },
    [0, 0, 0]
  ); // explicit initial value required
}

// averageTimeForPassed(results: string[], times: number[]): number
// - Compute average of times where result is PASS
export function averageTimeForPassed(results, times) {
  // Accumulator shape: [totalTime, count]
  const sumAndCount = results.reduce(
    function (acc, result, index) {
      if (result === "PASS") {
        acc[0] += times[index];
        acc[1] += 1;
      }
      return acc;
    },
    [0, 0]
  );

  const total = sumAndCount[0];
  const count = sumAndCount[1];
  if (count === 0) {
    return 0; // avoid division by zero; reasonable default for no passed tests
  }
  return total / count;
}

// findSlowestTest(names: string[], times: number[]): string
// - Return the name of the slowest test. If empty arrays, return "".
export function findSlowestTest(names, times) {
  if (!names || names.length === 0 || !times || times.length === 0) {
    return "";
  }

  // Accumulator: index of current slowest
  const slowestIndex = times.reduce(function (slowIdx, currentTime, idx) {
    const slowTime = times[slowIdx];
    if (currentTime > slowTime) {
      return idx;
    }
    return slowIdx;
  }, 0);

  return names[slowestIndex] || "";
}

// --- Minimal demonstrations ---
const demoResults = ["PASS", "FAIL", "PASS", "SKIP", "PASS", "FAIL"];
const demoTimes = [250, 100, 1200, 800, 600, 300];
const demoNames = [
  "login_test",
  "logout_test",
  "register_test",
  "delete_test",
  "update_test",
  "view_test",
];

console.log("Counts [PASS, FAIL, SKIP]:", countResultsByType(demoResults));
const avg = averageTimeForPassed(demoResults, demoTimes);
console.log("Average time for PASS:", avg.toFixed(1), "ms");
console.log("Slowest test:", findSlowestTest(demoNames, demoTimes));
