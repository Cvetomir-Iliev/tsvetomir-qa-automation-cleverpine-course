// Basic reduce syntax: array.reduce(function(accumulator, currentElement) { return newAccumulator; }, initialValue)

// Simple example: Sum all numbers
let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function (accumulator, currentNumber) {
  console.log(`Adding ${currentNumber} to ${accumulator}`);
  return accumulator + currentNumber;
}, 0); // Start with 0

console.log("Total:", total); // 100

// The same thing with a basic loop (to show the difference)
let totalLoop = 0;
for (let i = 0; i < numbers.length; i++) {
  totalLoop += numbers[i];
}
console.log("Total with loop:", totalLoop); // Same result, but more verbose
