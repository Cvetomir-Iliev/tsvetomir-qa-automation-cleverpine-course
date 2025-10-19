// Function Expression - storing a function in a variable
let calculateAverage = function (numbers) {
  let sum = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum / numbers.length;
};

console.log("Average:", calculateAverage([10, 20, 30])); // 20

// Notice: function expressions end with semicolon!
// They're treated like variable assignments
