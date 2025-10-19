// ❌ Wrong: Default sort treats numbers as strings
let scores = [100, 20, 5, 30];
let wrongSort = scores.slice().sort();
console.log("Wrong sort:", wrongSort); // [100, 20, 30, 5] - treats as strings!

// ✅ Correct: Use comparison function for numbers
let correctSort = scores.slice().sort(function (a, b) {
  return a - b; // Ascending order
});
console.log("Correct sort:", correctSort); // [5, 20, 30, 100]

// Descending order
let descendingSort = scores.slice().sort(function (a, b) {
  return b - a; // Descending order
});
console.log("Descending sort:", descendingSort); // [100, 30, 20, 5]
