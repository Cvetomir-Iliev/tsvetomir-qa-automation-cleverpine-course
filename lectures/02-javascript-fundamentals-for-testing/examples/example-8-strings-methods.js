let errorMessage = "Invalid email address provided";
let userName = "   john.doe@example.com   ";
let pageTitle = "QA Automation Dashboard";
let apiResponse = "User created successfully with ID: 12345";

//indexOf - find position of text (return - 1 if not found)
let emailErrorPosition = errorMessage.indexOf("email");
console.log("Position of 'email' in errorMessage:", emailErrorPosition); // 8
console.log("Contains 'password' in errorMessage:", errorMessage.indexOf("password")); // -1

//includes
console.log("Error mention email: ", errorMessage.includes("email")); // true
console.log("Error mention password: ", errorMessage.includes("password")); // false

//slice - extract part of string
let domain = userName.slice(userName.indexOf("@")); // "@example.com   "
console.log("Extracted domain from userName:", domain);

//trim - remove whitespace from both ends
let cleanUsername = userName.trim();
console.log("Original:", userName);
console.log("Trimmed:", cleanUsername);

//toLowerCase and toUpperCase
let lowerCaseTitle = pageTitle.toLowerCase();
let upperCaseTitle = pageTitle.toUpperCase();
console.log("Lowercase title:", lowerCaseTitle);    
console.log("Uppercase title:", upperCaseTitle);

// split - cover string to array
let csvData = "test1,test2,test3,test4";
let testName = csvData.split(",");
console.log("Test names from CSV data:", testName); // ["test1", "test2", "test3", "test4"]

// replace - modify strings
let templateMessage = "Hello {USERNAME}, welcome {SITE}";
let personalizedMessage = templateMessage
    .replace("{USERNAME}", "John")
    .replace("{SITE}", "QA Portal");
console.log("Personalized message:", personalizedMessage); // "Hello John, welcome QA Portal"