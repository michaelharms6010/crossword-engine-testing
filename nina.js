const nina = {
    name: "Nina",
    height: `5'11", FIVE NOTHIN'`,
    weight: 120,
    face_swollen: true,
    currently_manic: true,
    sigh: _ => console.log("OHHhhhhhhhhhhhhhhhhh.............."),
}
const mike = {
    name: "Mike",
    height: `6', a greek adonis`,
    weight: 185,
    face_swollen: false,
    currently_manic: false,
    sigh: _ => console.log("Hoo boy...."),
}


const loseWeight = person => {
    person.weight -= 1;
    person.sigh();
    console.log(`${person.name} worked out! She now weighs ${person.weight}lbs!`)
}

const eatCarbs = person => {
    person.currently_manic = !person.currently_manic;
    console.log( person.name + " ate carbs and " + (person.currently_manic ? "became manic" : "became depressed"))
}

loseWeight(nina);
eatCarbs(nina);
eatCarbs(nina);
loseWeight(nina);


loseWeight(mike);
eatCarbs(mike);
eatCarbs(mike);
loseWeight(mike);