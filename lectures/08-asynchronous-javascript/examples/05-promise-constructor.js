// Practical example: Simulating test data loading
function loadTestData() {
  return new Promise(function (resolve, reject) {
    console.log("🔄 Loading test data...");
    setTimeout(function () {
      // Simulate loading data from a file
      const data = { userId: 1, testId: "abc-123" };
      console.log("✅ Data loaded successfully");
      resolve(data);

      // In case of an error, e.g., file not found
      // reject(new Error("Failed to load test data"));
    }, 1500);
  });
}

let dataPromise = loadTestData();
console.log("Data promise created:", dataPromise);

dataPromise.then((data) => {
  console.log("Received data:", data);
});
