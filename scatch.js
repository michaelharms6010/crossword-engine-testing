let coffeetemp = 120;
let coffeeFullness = 10;

while (coffeeFullness) {
    if (coffeetemp > 100) {
        console.log("It's too hot! It's " + coffeetemp + " degrees.");
        coffeetemp -= 1;
    } else {
        console.log("You take a sip. Yum!");
        coffeeFullness -= 1;
    }
}
console.log("Your coffee is empty!")