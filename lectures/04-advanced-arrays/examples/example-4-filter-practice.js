let testNames = ["user_login", "admin_login", "password_reset", "user_logout", "admin_delete"];

let adminTests = testNames.filter(function(testName){
    return testName.includes("admin");
});

let LoginTest = testNames.filter(function(testName){
    return testName.includes("login");
});

console.log("Admin tests: ", adminTests);
console.log("Login tests:", LoginTest);

/// Map Filter Chaining

let results = ["PASS", "FAIL", "PASS", "SKIP", "FAILL"];

let formatedResults = results
.filter(function(result) {
    return result = "FAIL";
})
.map(function(result) {
    return " 🛑 " + result + " - Needs Investigation";
});

console.log("Formatted Failures:", formatedResults);