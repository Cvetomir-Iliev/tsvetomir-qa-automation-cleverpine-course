// Helper promises
const somePromise = () =>
  new Promise((resolve) => setTimeout(() => resolve("Success"), 200));
const riskyOperation = () =>
  new Promise((_, reject) => setTimeout(() => reject("Failure"), 200));
let resource = null;

// ✅ GOOD: Always use async/await with try...catch for operations that can fail
async function goodErrorHandling() {
  try {
    const result = await riskyOperation();
    console.log("GOOD (Error Handling): This won't be logged.");
  } catch (error) {
    console.log("GOOD (Error Handling): Caught error successfully ->", error);
  }
}

// ✅ GOOD: Use finally for cleanup
async function goodResourceManagement() {
  try {
    resource = "Acquired";
    console.log("GOOD (Resource Management): Resource is", resource);
    await riskyOperation();
  } catch (error) {
    // Handle error
  } finally {
    resource = "Released";
    console.log("GOOD (Resource Management): Resource is", resource);
  }
}

// ✅ GOOD: Mark functions as async when using await
async function properAsyncFunction() {
  let result = await somePromise();
  console.log("GOOD (Async Keyword): Got result ->", result);
  return result;
}

// ❌ AVOID: Using await without try...catch on a promise that might reject
async function unsafeAsync() {
  // This will cause an UnhandledPromiseRejection error and may crash the process
  try {
    await riskyOperation();
    console.log("AVOID (No try...catch): This is not reached.");
  } catch (e) {
    console.log(
      "AVOID (No try...catch): The error would be unhandled without this outer catch. Message:",
      e
    );
  }
}

// ❌ AVOID: Forgetting the async keyword
function forgotAsync() {
  // let result = await somePromise(); // This line would cause a SyntaxError
  console.log(
    "AVOID (Forgot async): The line above is commented out because it's a syntax error."
  );
}

async function runAll() {
  await goodErrorHandling();
  console.log("---");
  await goodResourceManagement();
  console.log("---");
  await properAsyncFunction();
  console.log("---");
  await unsafeAsync();
  console.log("---");
  forgotAsync();
}

runAll();
