// Complex nested JSON structure (common in real API responses)
let complexApiResponse = `{
  "user": {
    "id": 12345,
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    "settings": {
      "notifications": {
        "email": true,
        "sms": false
      },
      "privacy": {
        "profileVisible": true,
        "dataSharing": false
      }
    }
  },
  "tests": [
    {
      "id": 1,
      "name": "profile_update",
      "status": "PASS"
    },
    {
      "id": 2, 
      "name": "notification_settings",
      "status": "FAIL"
    }
  ]
}`;

// Parse and navigate nested data
let data = JSON.parse(complexApiResponse);

// Access nested properties (using dot notation from objects)
console.log("User ID:", data.user.id);
console.log("User email:", data.user.profile.email);
console.log("Email notifications:", data.user.settings.notifications.email);

// Process nested arrays (using array methods from Lecture 4)
let testStatuses = data.tests.map((test) => test.status);
let failedTestNames = data.tests
  .filter((test) => test.status === "FAIL")
  .map((test) => test.name);

console.log("Test statuses:", testStatuses);
console.log("Failed test names:", failedTestNames);
