// 1. Default Parameters

let generateTestEmail = (baseName, domain = "test.com") => {
    if (!domain) {
        domain = "test.com";
    }
    return baseName + "@" + domain;
}
console.log(generateTestEmail("user123"));
console.log(generateTestEmail("tsvetomir", "dev.com"));

let findSlowTests = function(testTimes, threshold = 1000) {
    let slowTests = [];
    for (let i = 0; i < testTimes.length; i++) {
        if (testTimes[i] > threshold) {
            slowTests.push(testTimes[i]);
        }
    }
    return slowTests;
}

console.log(findSlowTests([100, 200, 300, 400, 500]));
console.log(findSlowTests([100, 200, 300, 400, 500], 5000));