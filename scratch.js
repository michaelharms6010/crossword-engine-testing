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
console.log(join(["oven", "envier", "erase", "serious"]))
console.log(join(["aaa", "bbb", "ccc", "ddd"]))

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