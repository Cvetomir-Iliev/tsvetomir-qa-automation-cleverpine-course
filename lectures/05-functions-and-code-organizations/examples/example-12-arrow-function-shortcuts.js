// When arrow functions have only one expression, you can make them shorter:

// Long form arrow function
let isPass = (result) => {
  return result === "PASS";
};

// Short form arrow function (implicit return)
let isPass2 = (result) => result === "PASS";

// Even shorter - single parameter doesn't need parentheses
let isPass3 = result => result === "PASS";

// All three work the same:
console.log(isPass("PASS")); // true
console.log(isPass2("FAIL")); // false
console.log(isPass3("PASS")); // true

// More examples of short arrow functions for testing:
let formatTime = (ms) => ms + "ms";
let isSlowTest = (time) => time > 1000;
let countPassed = (results) => results.filter((r) => r === "PASS").length;

console.log(formatTime(500)); // "500ms"
console.log(isSlowTest(1200)); // true
console.log(countPassed(["PASS", "FAIL", "PASS"])); // 2
