let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function(accumulator, currentNumber){
    console.log(`Adding ${currentNumber} to ${accumulator}`);
    return accumulator + currentNumber;
}, 0);
console.log("Total:", total);


