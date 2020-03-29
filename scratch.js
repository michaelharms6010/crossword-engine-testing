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


// checks if the gridpoitns in arr2 are in line with arr1
function checkLine(arr1, arr2) {
    if (arr1.length === 0) return true
    else if (arr1.length === 1) {
        // check if it's one away on row
        if (Math.abs((arr1[0][0] - arr2[0])) === 1 ) {
            if (Math.abs((arr1[0][1] - arr2[1])) === 1 ) {
                return "diagonal"
            }
            return "column"
        }
        if (Math.abs((arr1[0][1] - arr2[1])) === 1 ) {
            return "row"
        }
    } else if (arr1.length > 1) {



    }


}

