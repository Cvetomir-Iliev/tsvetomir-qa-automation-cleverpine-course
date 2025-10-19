let testScores = [85, 92, 78, 96];

// Calculate average score using reduce
let sum = testScores.reduce(function (accumulator, score) {
  console.log(`Step: ${accumulator} + ${score} = ${accumulator + score}`);
  return accumulator + score;
}, 0);

let average = sum / testScores.length;
console.log(`Average score: ${average}`);

// Step by step what happens:
// Step 1: 0 + 85 = 85 (accumulator starts at 0)
// Step 2: 85 + 92 = 177
// Step 3: 177 + 78 = 255
// Step 4: 255 + 96 = 351
// Final: 351 / 4 = 87.75
