let testNames = ["zebra_test", "alpha_test", "beta_test"];
let sortedNames = testNames.slice().sort();

console.log("Origin:", testNames);
console.log("Sorted:", sortedNames);

let score = [100, 20, 30, 5];
let wrongSort = score.slice().sort();
console.log("wrong sort:", wrongSort);
// default sort coerces to strings: incorrect for numbers
let correctSort = score.slice().sort((a, b) => a - b);
console.log("correct sort:", correctSort);