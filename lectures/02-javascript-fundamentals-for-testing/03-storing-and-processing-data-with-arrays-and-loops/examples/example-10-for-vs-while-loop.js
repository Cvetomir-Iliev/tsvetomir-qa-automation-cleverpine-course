// FOR loops:
// Working with arrays
// you know the exact number of interations
// you need an index counter - i

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log("For loop example");
for (let i = 0; i < browsers.length; i++) {
    console.log("Testing browsers:", browsers[i]);
}

// While loops when:
// you don't know how many interations you need
// you are waiting for a condition to become true
// you are processing until something is empy/complete

let attemps = 0;
let success = false;

while(!success && attemps < 5) {
    attemps++
    //simulate a random sucess
    success = Math.random() > 0.5;
    console.log(`Attempt ${attemps}: ${success ? "Success!" : "Failed, retying..."}`);
}