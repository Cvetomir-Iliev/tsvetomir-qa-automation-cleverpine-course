// Arrow Function - shorter syntax for simple functions
let calculateAverage = (numbers) => {
  let sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum / numbers.length;
};

console.log("Average:", calculateAverage([10, 20, 30])); // 20

// Arrow functions: (parameters) => { function body }
