// Starting with a JavaScript object
let apiResponse = {
  statusCode: 200,
  message: "User created successfully",
  data: {
    userId: 12345,
    username: "testuser",
    email: "testuser@example.com",
  },
  timestamp: Date.now(),
};

console.log("Original object:", apiResponse);

// JSON.stringify() - Convert object to JSON string
let jsonString = JSON.stringify(apiResponse);
console.log("JSON string:", jsonString);
console.log("Type:", typeof jsonString); // "string"

// JSON.parse() - Convert JSON string back to object
let parsedObject = JSON.parse(jsonString);
console.log("Parsed back to object:", parsedObject);
console.log("Type:", typeof parsedObject); // "object"

// Verify they have the same data (using techniques from Lecture 2)
console.log(
  "Status codes match:",
  apiResponse.statusCode === parsedObject.statusCode
);
console.log("Messages match:", apiResponse.message === parsedObject.message);
