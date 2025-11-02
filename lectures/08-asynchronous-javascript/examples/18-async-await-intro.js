function executeTestCase(testName) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Result of ${testName}`), 1000);
  });
}

// Promise with .then() (functional but verbose)
function oldStyleAsync() {
  executeTestCase("test1")
    .then((result) => {
      console.log("Old style success:", result);
    })
    .catch((error) => {
      console.error("Old style error:", error);
    });
}

// Same thing with async/await (cleaner!)
async function newStyleAsync() {
  try {
    // 'await' pauses the function until the promise is resolved
    const result = await executeTestCase("test1");
    console.log("New style success:", result);
  } catch (error) {
    console.error("New style error:", error);
  }
}

console.log("Running old style:");
oldStyleAsync();

// We need a small delay to see the output separately
setTimeout(() => {
  console.log("\nRunning new style:");
  newStyleAsync();
}, 1500);
