// Each .then() can return a value for the next .then()
function loadTestData() {
  console.log("📂 Loading test data...");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const jsonString = '{"username":"testuser","email":"test@example.com"}';
      console.log("Data loaded, now parsing...");
      resolve(jsonString);
    }, 1000);
  });
}

function parseTestData(jsonString) {
  console.log("📝 Parsing test data...");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      try {
        const data = JSON.parse(jsonString);
        console.log("Data parsed:", data);
        console.log("Now validating...");
        resolve(data);
      } catch (error) {
        reject(new Error("Failed to parse JSON."));
      }
    }, 500);
  });
}

function validateTestData(data) {
  console.log("✔️  Validating test data...");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (data.username && data.email) {
        resolve({ validated: true, data: data });
      } else {
        reject(new Error("Missing required fields in data."));
      }
    }, 500);
  });
}

// Chain all three operations together
loadTestData()
  .then(function (jsonString) {
    // The return value of this .then() is passed to the next one
    return parseTestData(jsonString);
  })
  .then(function (data) {
    // The parsed data is received here
    return validateTestData(data);
  })
  .then(function (finalResult) {
    // The final validated result is received here
    console.log("✅ All operations completed!");
    console.log("Final result:", finalResult);
  })
  .catch(function (error) {
    // A single .catch() can handle errors from any part of the chain
    console.error("❌ An error occurred in the chain:", error.message);
  });
