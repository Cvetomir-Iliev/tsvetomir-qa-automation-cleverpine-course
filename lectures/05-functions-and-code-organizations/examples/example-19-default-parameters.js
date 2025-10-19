// Without default parameters - need to check if parameter exists
function analyzeTestResults(results, includeSkipped) {
  if (includeSkipped === undefined) {
    includeSkipped = true;
  }

  let analysisResults = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "SKIP" && !includeSkipped) {
      continue;
    }
    analysisResults.push(results[i]);
  }
  return analysisResults;
}

// With default parameters (cleaner syntax)
function analyzeTestResultsBetter(results, includeSkipped = true) {
  let analysisResults = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "SKIP" && !includeSkipped) {
      continue;
    }
    analysisResults.push(results[i]);
  }
  return analysisResults;
}

// Test both approaches
let testResults = ["PASS", "FAIL", "SKIP", "PASS"];

console.log("Include skipped (old way):", analyzeTestResults(testResults));
console.log(
  "Exclude skipped (old way):",
  analyzeTestResults(testResults, false)
);

console.log(
  "Include skipped (default):",
  analyzeTestResultsBetter(testResults)
);
console.log("Exclude skipped:", analyzeTestResultsBetter(testResults, false));
