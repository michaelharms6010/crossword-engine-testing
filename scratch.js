let coffeetemp = 120;
let coffeeFullness = 10;

const coffeeHandler = (temp, fullness) => {
    if (coffeetemp > 100) {
        console.log("It's too hot! It's " + coffeetemp + " degrees.");
        coffeetemp -= 1;
    } else {
        console.log("You take a sip. Yum!");
        coffeeFullness -= 1;
    }
}


while (coffeeFullness) {
    coffeeHandler(coffeetemp, coffeeFullness)
}
console.log("Your coffee is empty!")

// Grid adjacency test - call it "inline" - 
// interprets selection direciton, 
// resets grid if new selection doesn't fit the direction
