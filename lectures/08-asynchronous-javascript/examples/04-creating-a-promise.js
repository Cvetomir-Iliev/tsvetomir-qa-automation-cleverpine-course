let testPromise = new Promise(function (resolve, reject) {
  console.log("Test execution started");
  
  setTimeout(function () {
    let testPassed = true;
    
    if (testPassed) {
      console.log("Pass");
      resolve("Test PASSED"); // Success
    } else {
      console.log("Failed");
      reject("Test FAILED"); // Failure
    }
  }, 2000);
});

console.log(testPromise);