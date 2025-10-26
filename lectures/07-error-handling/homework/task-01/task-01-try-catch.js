// 1. Implement Safe JSON Parsing
function safeParse(jsonString) {
    try {
        let data = JSON.parse(jsonString);
        return { ok: true, data: data };
    } catch (error) {
        return { ok: false, error: error.message };
    }
}
// 2. Implement Safe Email Retrieval
function safeGetEmail(user) {
    try {
        return user.email;
    } catch (error) {
        console.log("Failed to retrieve email:", error.message);
        return "<no-email>";
    }
}
// 3. Implement Safe Array Push
function safePush(resultsArray, value) {
    try {
        resultsArray.push(value);
        return true;
    } catch (error) {
        return false;
    }
}
// 4. Implement Safe Success Rate Calculation
function safeSuccessRate(passed, total) {
    try {
        if (total === 0) {
            return "0.00%";
        }
        return ((passed / total) * 100).toFixed(2) + "%";
    } catch (error) {
        return "N/A";
    }
}

// 5. Demonstrate the functions
console.log("Safe Parse: ", safeParse('{"key": "value"}'));
console.log("Safe Parse: ", safeParse('{"invalid": json}'));

console.log("Safe Get Email: ", safeGetEmail({ email: "test@example.com" }));
console.log("Safe Get Email: ", safeGetEmail(null));

console.log("Safe Push: ", safePush([1, 2, 3], 4));
console.log("Safe Push: ", safePush(null, 4));

console.log("Safe Success Rate: ", safeSuccessRate(10, 20));
console.log("Safe Success Rate: ", safeSuccessRate(10, 0));

