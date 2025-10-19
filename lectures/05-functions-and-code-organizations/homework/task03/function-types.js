// 1: Format test Result
function formatTestResultDecl(testName, status) {
    let icon = status === "PASS" ? "✅" : "❌";
    return icon + " " + testName + ": " + status;
}

let formatTestResultExpr = function (testName, status) {
    let icon = status === "PASS" ? "✅" : "❌";
    return icon + " " + testName + ": " + status;
}

let formatTestResultArrow = (testName, status) => {
    let icon = status === "PASS" ? "✅" : "❌";
    return icon + " " + testName + ": " + status;
}

console.log(formatTestResultDecl("login_test", "PASS"));
console.log(formatTestResultExpr("logout_test", "FAIL"));
console.log(formatTestResultArrow("register_test", "PASS"));


// 2: Average time
function calculateAverageDecl(numbers) {
    let sum = numbers.reduce(function(total, num){
        return total + num;;
    }, 0);
    return sum / numbers.length;
};

let calculateAverageExpr = function (numbers) {
  let sum = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum / numbers.length;
};

let calculateAverageArrow = (numbers) => {
  let sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum / numbers.length;
};

console.log("Average:", calculateAverageDecl([10, 20, 30]));
console.log("Average:", calculateAverageExpr([10, 20, 30]));
console.log("Average:", calculateAverageArrow([10, 20, 30]));