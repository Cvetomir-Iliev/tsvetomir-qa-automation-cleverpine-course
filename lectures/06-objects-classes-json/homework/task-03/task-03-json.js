// JSON Conversion Helpers
let userProfile = {
  username: "testuser1",
  email: "testuser1@example.com",
  role: "admin",
};
let caseList = [
  { name: "login_test", status: "PASS", duration: 250 },
  { name: "logout_test", status: "FAIL", duration: 180 },
  { name: "register_test", status: "PASS", duration: 1200 },
];

function toJson(value) {
  return JSON.stringify(value, null, 2);
}
function fromJson(jsonString) {
  return JSON.parse(jsonString);
}
// Convert userProfile
console.log("Before conversion (type):", typeof userProfile); // object
let userProfileJson = toJson(userProfile);
console.log("After conversion (type):", typeof userProfileJson); // string
console.log("User Profile JSON:", userProfileJson);

// Parse back and confirm property access
let userProfileParsed = fromJson(userProfileJson);
console.log("Parsed User Profile:", userProfileParsed);
console.log("Parsed email:", userProfileParsed.email);
console.log("Parsed role:", userProfileParsed.role);

//Convert caseList
console.log("\nBefore conversion (type):", typeof caseList); // object
let caseListJson = toJson(caseList);
console.log("After conversion (type):", typeof caseListJson); // string
console.log("Case List JSON:", caseListJson);

// Parse back and confirm array access
let caseListParsed = fromJson(caseListJson);
console.log("Parsed Case List:", caseListParsed);
console.log("Parsed Case List length:", caseListParsed.length);
console.log("First test name:", caseListParsed[0].name);

module.exports = {
  userProfile,
  caseList,
  toJson,
  fromJson,
};
