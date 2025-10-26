function demonstrateReturnBehavior() {
  try {
    console.log("In try block");
    return "Returning from try";
  } catch (error) {
    console.log("In catch block");
    return "Returning from catch";
  } finally {
    console.log("Finally block runs even with return!");
  }

  console.log("This never executes");
}

let result = demonstrateReturnBehavior();
console.log("Function returned:", result);

// Practical example: Test data processor with guaranteed cleanup
function processTestDataSafely(testData) {
  let processingStarted = false;
  let tempFiles = [];

  try {
    processingStarted = true;
    console.log("🔄 Starting test data processing");

    // Simulate creating temporary files
    tempFiles.push("temp_test_data.json");
    tempFiles.push("temp_results.json");

    if (!testData || !Array.isArray(testData)) {
      throw new Error("Invalid test data provided");
    }

    // Simulate processing
    let processedResults = testData.map((test) => ({
      name: test.name,
      processed: true,
      timestamp: Date.now(),
    }));

    console.log("✅ Test data processed successfully");
    return { success: true, data: processedResults };
  } catch (error) {
    console.log("❌ Processing failed:", error.message);
    return { success: false, error: error.message };
  } finally {
    // Cleanup always happens
    if (processingStarted) {
      console.log("🧹 Cleaning up processing resources");

      // Simulate cleaning up temporary files
      for (let i = 0; i < tempFiles.length; i++) {
        console.log(`🧹 Removing temporary file: ${tempFiles[i]}`);
      }
    }

    console.log("🧹 Cleanup completed");
  }
}

// Test the data processor
console.log("\n=== Test Data Processing with Cleanup ===");
let validData = [{ name: "test1" }, { name: "test2" }];
let result1 = processTestDataSafely(validData);
console.log("Result 1:", result1);

console.log(); // Empty line
let result2 = processTestDataSafely(null);
console.log("Result 2:", result2);
