const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']



console.log(cleave('foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen', words))

function cleave(string, arr) {
    let input = string;
    let output = "";
    let match = "";
    while (input) {
        found = false;
        for (i = 0; i < arr.length; i++) {
            if (input.slice(0, arr[i].length) === arr[i]) {

                if (input.length === arr[i].length) {
                    console.log(input.slice(arr[i]))
                    found = true
                    match = arr[i];
                }
                for( j = 0; j < arr.length; j++) {
                    if (input.slice(arr[i].length, arr[i].length + arr[j].length) === arr[j]) {
                        console.log(input.slice(arr[i]))
                        found = true
                        match = arr[i];
                    } 
                } 
                
            } else if(!found && i === arr.length -1) {
                return "Cleaving stalled: Word not found"
            }
        }
        output += match + " "
        input = input.slice(match.length);
        match = "";
    }
    return output.trim()
}


// join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

function join(arr) {
    let min = 9999999;
    let outstring = "";
    let match = false;
    outstring += arr[0];
    for (i = 0; i < arr.length -1; i++) {
        match = false;
        for (j = 0; j < arr[i].length; j++) {
            let suffix = arr[i].slice(j) 
            let prefix = arr[i+1].slice(0, suffix.length)
            if (suffix.length < min && match === false) {
                min = suffix.length
            }
            if (prefix === suffix) {
                match = true;
                outstring+= arr[i+1].slice(suffix.length);
            }
        }
        if (match === false) {
            outstring += arr[i+1]
            min = 0
        }
    }
    return [outstring, min]
}

// function ascending(str) {
//     let len = 1;
//     while (len <= str.length / 2) {
//         let numbers = [];
//         for (i = 0; i < str.length; i+=len) {
//             numbers.push(Number(str.slice(i, i+len)))
            
//         }
//         console.log(numbers)
//         len += 1;
//         if (testAscending(numbers)) return true
//     }
//     return false
// }

// function testAscending(arr) {
//     if (arr.length > 1) {
//         for (i = 1; i < arr.length; i++) {
//             if (arr[i] !== arr[i-1] + 1) return false
//         }
//         return true
//     }
// }

// console.log(ascending("123124"))