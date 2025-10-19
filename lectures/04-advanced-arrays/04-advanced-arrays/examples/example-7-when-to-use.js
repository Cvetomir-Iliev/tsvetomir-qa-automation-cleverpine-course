// Use MAP when: You want to transform every element
let scores = [85, 92, 78, 96];
let grades = scores.map(function (score) {
  return score >= 90 ? "A" : score >= 80 ? "B" : "C";
});
console.log("Grades:", grades);

// Use FILTER when: You want to select elements that meet criteria
let highScores = scores.filter(function (score) {
  return score >= 90;
});
console.log("High scores:", highScores);

// Use BASIC LOOPS when: You need more complex logic or early exit
let foundFirstFailure = false;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 70) {
    foundFirstFailure = true;
    break; // Exit early
  }
}
console.log("Found a failure:", foundFirstFailure);
