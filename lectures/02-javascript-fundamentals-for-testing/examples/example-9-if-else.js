let actualStatusCode = 200;
let expectedStatusCode = 200;

if (actualStatusCode === expectedStatusCode) {
    console.log("API Test passed");
} else {
    console.log("API Test failed");
}

let responseTime = 300;
let statusCode = 200;
let hasData = true;

if (statusCode === 200 && responseTime < 500 && hasData) {
    console.log("All API checks passed");
} else if (statusCode !== 200) {
    console.log("API check failed: Invalid status code", statusCode);
} else if (responseTime >= 500) {
    console.log("API check failed: Response time too slow", responseTime + "ms");
} else if (!hasData) {
    console.log("API check failed: No data returned");
} else {
    console.log("API check failed: Unknown reason");
}