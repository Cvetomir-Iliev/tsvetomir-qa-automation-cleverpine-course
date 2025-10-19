// Old way: Using loops to process test results
let testResults = ["PASS", "FAIL", "PASS", "SKIP"];
let formattedResults = [];

for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "PASS") {
    formattedResults.push("✅ Passed");
  } else {
    formattedResults.push("❓ Other");
  }
}

console.log("Old way result:", formattedResults);

// New way: Using array methods (we'll learn this today!)
let betterFormatted = testResults.map(function (result) {
  if (result === "PASS") {
    return "✅ Passed";
  } else {
    return "❓ Other";
  }
});

console.log("New way result:", betterFormatted);
