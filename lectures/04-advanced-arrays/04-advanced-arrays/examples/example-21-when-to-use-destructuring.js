// ✅ Good uses of destructuring:
// 1. When you have structured data arrays
let [username, password] = ["testuser", "testpass123"];
console.log(username, password);

// 2. When swapping variables
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(a, b);

// 3. When you only need specific elements
let errorList = ["Error 1", "Error 2", "Error 3"];
let [firstError, , thirdError] = errorList;
console.log(firstError, thirdError);

// 4. When returning multiple values from a function (we'll learn more about functions later)
function getTestInfo() {
  return ["login_test", "PASS", 250];
}
let [name, result, time] = getTestInfo();
console.log(name, result, time);

// ❌ When destructuring might be overkill:
// 1. When you need all elements individually anyway
let simpleArray = [1, 2, 3];
// Sometimes just using simpleArray[0], simpleArray[1] is clearer
console.log(simpleArray[0], simpleArray[1], simpleArray[2]);

// 2. When the array structure is unpredictable
// Destructuring assumes you know the array structure
