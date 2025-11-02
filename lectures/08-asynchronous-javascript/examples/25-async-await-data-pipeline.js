// Helper functions simulating async operations

// 1. Load data from a source
async function loadData(source) {
  console.log(`1. Loading data from ${source}...`);
  await new Promise((res) => setTimeout(res, 500)); // Simulate network delay
  if (source === "invalid_source") {
    throw new Error("Source not found");
  }
  return '{"email":"test@example.com","testName":"login_test"}';
}

// 2. Validate the loaded data
async function validateData(data) {
  console.log("2. Validating data...");
  await new Promise((res) => setTimeout(res, 300));
  const parsed = JSON.parse(data); // Can throw a sync error
  if (!parsed.email || !parsed.testName) {
    throw new Error("Missing required fields");
  }
  return parsed;
}

// 3. Process the validated data
async function processData(data) {
  console.log("3. Processing data...");
  await new Promise((res) => setTimeout(res, 400));
  const processed = { ...data, processedAt: new Date().toISOString() };
  return processed;
}

// Complete async test data processing pipeline
async function processTestDataPipeline(dataSource) {
  let result = {};
  console.log(`\n--- Running pipeline for: ${dataSource} ---`);
  try {
    const rawData = await loadData(dataSource);
    const validatedData = await validateData(rawData);
    result = await processData(validatedData);
    console.log("✅ Pipeline completed successfully!");
    return { success: true, data: result };
  } catch (error) {
    console.error(`❌ Pipeline failed: ${error.message}`);
    return { success: false, error: error.message };
  } finally {
    console.log("--- Pipeline finished ---");
  }
}

// Test the pipeline
async function testPipelines() {
  console.log("--- Testing with valid data ---");
  const result1 = await processTestDataPipeline("valid_source");
  console.log("Final result:", result1);

  console.log("\n--- Testing with invalid data source ---");
  const result2 = await processTestDataPipeline("invalid_source");
  console.log("Final result:", result2);
}

testPipelines();
