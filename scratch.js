function ascending(str) {
    let len = 1;
    while (len <= str.length / 2) {
        let numbers = [];
        for (i = 0; i < str.length; i+=len) {
            numbers.push(Number(str.slice(i, i+len)))
            
        }
        console.log(numbers)
        len += 1;
        if (testAscending(numbers)) return true
    }
    return false
}

function testAscending(arr) {
    if (arr.length > 1) {
        for (i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[i-1] + 1) return false
        }
        return true
    }
}

console.log(ascending("123124"))