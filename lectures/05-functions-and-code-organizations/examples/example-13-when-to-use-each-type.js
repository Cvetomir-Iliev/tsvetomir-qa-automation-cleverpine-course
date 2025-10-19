// Use FUNCTION DECLARATIONS when:
// - You want to call the function before it's defined (hoisting)
// - Writing main utility functions that will be used throughout your code

// console.log(validateUserInput("test")); // This would work because of hoisting
function validateUserInput(input) {
  return input && input.length > 0;
}
console.log(validateUserInput("test"));

// Use FUNCTION EXPRESSIONS when:
// - You want to assign functions conditionally
// - Working with functions as data

let formatter;
let environment = "development";

if (environment === "development") {
  formatter = function (message) {
    return "[DEV] " + message;
  };
} else {
  formatter = function (message) {
    return message;
  };
}

console.log(formatter("Test completed")); // "[DEV] Test completed"

// Use ARROW FUNCTIONS when:
// - Writing short, simple functions
// - Working with array methods (map, filter, reduce)

let testTimes = [200, 800, 1200, 450];
let slowTests = testTimes.filter((time) => time > 600);
let formattedTimes = testTimes.map((time) => time + "ms");
let totalTime = testTimes.reduce((sum, time) => sum + time, 0);

console.log("Slow tests:", slowTests); // [800, 1200]
console.log("Formatted:", formattedTimes); // ["200ms", "800ms", ...]
console.log("Total time:", totalTime); // 2650
