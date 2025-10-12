let testResults = ["PASS", "FAIL", "PASS", "SKIP"];
let formatedResults = [];

for (let i = 0; i < testResults.length; i++) {
    if(testResults === "PASS") {
        formatedResults.push("===>PASS<===")
    } else {
        formatedResults.push("==>Other<==")
    }

}
console.log("Old way results:", formatedResults);

let betterFormatted = testResults.map(function (testResults) {
    if (testResults === "PASS") {
        return "===>PASS<===";
    } else  {
        return "==>Other<==";
    }
})

console.log("New way result:", betterFormatted);

let testCases = ["login", "logout", "register"];
let testNames = testCases.map(function(testCase) {
return "test_" + testCase;
})
console.log("Transformed:", testNames);