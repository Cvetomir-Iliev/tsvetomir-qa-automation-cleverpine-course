// And operator (&&) - all conditions must be true
let isLoggedIn = true;
let hadPermission = true;
let canAccesFeature = isLoggedIn && hadPermission;
console.log('Can access feature (AND):', canAccesFeature); // true

// Or operator (||) - at least one condition must be true
let isAdmin = false;
let isOwner = true;
let canDeleteitem = isAdmin || isOwner;
console.log('Can delete item (OR):', canDeleteitem); // true

// Not operator (!) - reverses the boolean value
let hasErrors = true;
let testPassed = !hasErrors;
console.log('Test passed (NOT):', testPassed); // false

// Complex test validation scenario
let statusCode = 200;
let responseTime = 300; // in ms
let hasRequiredData = true;

let apiTestPassed = (statusCode === 200 && responseTime < 500 && hasRequiredData);
console.log('API test passed (complex):', apiTestPassed); // true