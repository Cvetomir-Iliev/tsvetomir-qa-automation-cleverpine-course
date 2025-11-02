// Helper function to simulate a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Without promises: Sequential, blocking
// Note: In a real Node.js environment, there isn't a built-in synchronous sleep
// function because it's highly discouraged. This is a simulation of the concept.
function sequentialTests() {
  console.log("--- Starting Sequential Simulation ---");
  console.log("Test 1 started");
  // This is a blocking operation, nothing else can run
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // blocking wait
  }
  console.log("Test 1 finished after 2s");

  console.log("Test 2 started");
  const start2 = Date.now();
  while (Date.now() - start2 < 1000) {
    // blocking wait
  }
  console.log("Test 2 finished after 1s");
  console.log("--- Sequential Simulation Finished ---");
}

// With promises: Can handle async operations properly
async function asyncTests() {
  console.log("\n--- Starting Async Tests ---");

  const test1 = delay(2000).then(() => "Test 1 finished");
  console.log("Test 1 promise created");

  const test2 = delay(1000).then(() => "Test 2 finished");
  console.log("Test 2 promise created");

  console.log("Both tests are running in parallel...");

  const result1 = await test1;
  console.log(result1);

  const result2 = await test2;
  console.log(result2);

  console.log("--- Async Tests Finished ---");
}

sequentialTests();
asyncTests();
