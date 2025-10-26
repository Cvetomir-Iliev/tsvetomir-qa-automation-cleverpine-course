let testResults = {
  testName: "login_test",
  status: "RUNNING",
};

console.log("Initial:", testResults);

// Adding new properties
testResults.executionTime = 800;
testResults.environment = "staging";

// Modifying existing properties
testResults.status = "PASS";

console.log("After modifications:", testResults);

// Adding with bracket notation
testResults["retry-count"] = 0;
testResults["error-message"] = null;

// Deleting properties
delete testResults["error-message"];

console.log("Final result:", testResults);
