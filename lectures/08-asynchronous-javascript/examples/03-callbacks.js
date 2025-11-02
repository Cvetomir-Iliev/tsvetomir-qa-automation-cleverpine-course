// Callback-based async code (old style - for understanding only)
function simulateApiCall(callback) {
  console.log("📡 Making API request...");
  setTimeout(function () {
    console.log("✅ API request complete");
    let result = { userId: 123, username: "testuser" };
    callback(result);
  }, 2000);
}

console.log("Starting test");

simulateApiCall(function (result) {
  console.log("Got result:", result);
  console.log("Test completed");
});

console.log("Test running...");
