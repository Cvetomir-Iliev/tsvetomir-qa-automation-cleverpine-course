let timeoutSeconds = 30;
let maxRetries = 3;
let expetedItemCount = 5;
let userId = 12345;
let responceTime = 250.75;

console.log(
    timeoutSeconds,
    maxRetries,
    expetedItemCount,
    userId,
    responceTime
);

// Converting string to number (common in web testing)
let userIdFromInput = "67890";
let numericUserId = Number(userIdFromInput);
console.log("Numeric User ID:", numericUserId);
console.log("Type: ", typeof numericUserId);

// Parsing number from mixed content
let responseTime = "334ms";
let timeValue = parseInt(responseTime);
console.log("Parsed Time Value:", timeValue);
