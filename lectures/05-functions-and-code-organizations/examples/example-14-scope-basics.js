// GLOBAL SCOPE - variables accessible everywhere
let globalMessage = "Available everywhere";

function testGlobalAccess() {
  console.log("Inside function:", globalMessage); // Works!
}

testGlobalAccess(); // Output: "Inside function: Available everywhere"
console.log("Outside function:", globalMessage); // Works!

// FUNCTION SCOPE - variables only accessible inside the function
function testFunctionScope() {
  let localMessage = "Only available inside this function";
  console.log("Inside function:", localMessage); // Works!
}

testFunctionScope();
try {
  console.log("Outside function:", localMessage); // ERROR! localMessage is not defined
} catch (e) {
  console.error(e.message);
}
