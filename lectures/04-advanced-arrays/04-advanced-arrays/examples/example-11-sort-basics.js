// Basic sort (alphabetical)
let testNames = ["zebra_test", "alpha_test", "beta_test"];
let sortedNames = testNames.sort();

console.log("Original:", testNames);
console.log("Sorted:", sortedNames); // ["alpha_test", "beta_test", "zebra_test"]

// Important: sort() modifies the original array!
// To avoid this, make a copy first:
let originalTests = ["zebra_test", "alpha_test", "beta_test"];
let sortedCopy = originalTests.slice().sort(); // slice() creates a copy

console.log("Original unchanged:", originalTests);
console.log("Sorted copy:", sortedCopy);
