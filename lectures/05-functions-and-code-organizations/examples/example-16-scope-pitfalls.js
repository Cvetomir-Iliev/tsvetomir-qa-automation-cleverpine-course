// ❌ AVOID: Accidentally creating global variables
function badExample() {
  // In non-strict environments, missing 'let/const/var' would create a global.
  // ESM modules run in strict mode by default, so to demonstrate the pitfall
  // without throwing, we simulate sloppy mode using the Function constructor.
  const sloppy = new Function(`
    // No declaration keyword -> becomes a global property (bad!)
    testCounter = 0;
    testCounter++;
  `);
  sloppy();
}

badExample();
// Access explicitly via globalThis to show the accidental global pollution
console.log(globalThis.testCounter); // 1 - exists on global object (dangerous!)
// Clean up the accidental global so the next example behaves as intended
delete globalThis.testCounter;

// ✅ GOOD: Always declare variables with let
function goodExample() {
  let testCounter = 0; // Properly scoped
  testCounter++;
  return testCounter;
}

console.log(goodExample()); // 1
try {
  console.log(testCounter); // ERROR - not accessible (good!)
} catch (e) {
  console.error(e.message);
}

// ✅ GOOD: Use function parameters instead of relying on global variables
let defaultTimeout = 5000; // Global configuration

// Better approach - accept timeout as parameter
function executeTest(testName, timeout = defaultTimeout) {
  console.log(`Running ${testName} with ${timeout}ms timeout`);
  // ... test logic would go here
  return "PASS";
}

// Can use different timeouts for different tests
console.log(executeTest("fast_test", 1000));
console.log(executeTest("slow_test", 10000));
console.log(executeTest("normal_test")); // Uses default
