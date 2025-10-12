let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS", "FAIL"];

// Use an array accumulator: [passCount, failCount, skipCount]
let resultCounts = results.reduce(
  function (counts, result) {
    if (result === "PASS") {
      counts[0]++;
    } else if (result === "FAIL") {
      counts[1]++;
    } else if (result === "SKIP") {
      counts[2]++;
    }
    // Important: always return the accumulator for the next iteration
    return counts;
  },
  [0, 0, 0]
);

console.log("Results counts (PASS, FAIL, SKIP)", resultCounts);
