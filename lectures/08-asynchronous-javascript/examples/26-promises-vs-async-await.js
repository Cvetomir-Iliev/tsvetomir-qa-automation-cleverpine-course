function executeTestCase(testName, shouldPass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldPass) resolve(`Result for ${testName}`);
      else reject(`Error in ${testName}`);
    }, 500);
  });
}

// STYLE 1: Promise chains with .then() and .catch()
function testWithPromises() {
  return executeTestCase("test1", true)
    .then((result) => {
      console.log("Promise style success:", result);
      return result; // Pass result to the next .then()
    })
    .catch((error) => {
      console.error("Promise style error:", error);
      throw error; // Re-throw to be caught by the final handler
    });
}

// STYLE 2: async/await (cleaner and more readable)
async function testWithAsyncAwait() {
  try {
    const result = await executeTestCase("test1", true);
    console.log("Async/await style success:", result);
    return result;
  } catch (error) {
    console.error("Async/await style error:", error);
    throw error; // Re-throw to be caught by the final handler
  }
}

// Both work the same way and return a promise
async function runComparison() {
  console.log("=== Promise Style ===");
  await testWithPromises().then((result) => {
    console.log("Final handler received:", result);
  });

  console.log("\n=== Async/Await Style ===");
  await testWithAsyncAwait().then((result) => {
    console.log("Final handler received:", result);
  });
}

runComparison();
