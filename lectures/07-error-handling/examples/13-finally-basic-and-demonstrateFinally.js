// Basic finally syntax
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // This ALWAYS runs
}

// Simple example
function demonstrateFinally() {
  console.log("Starting operation...");

  try {
    console.log("Attempting risky operation");
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Caught error:", error.message);
  } finally {
    console.log("Cleanup: This always runs");
  }

  console.log("Function completed");
}

demonstrateFinally();
