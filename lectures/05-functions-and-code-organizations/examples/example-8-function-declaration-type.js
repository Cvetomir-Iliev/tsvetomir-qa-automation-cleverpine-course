// Function Declaration - the traditional way
function calculateAverage(numbers) {
  let sum = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum / numbers.length;
}

console.log("Average:", calculateAverage([10, 20, 30])); // 20
