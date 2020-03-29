import arrayIncluded from "./arrayIncluded"

export default function inLine(arr1, arr2, puzzle) {
    let direction = ""
    let maxrow = Math.max(puzzle.map((item, index) => index))
    let maxcol = Math.max(puzzle[0].map((item, index) => index))
    

    if ( arr1.length === 0) return true
    else if (arr1.length === 1) {
        if (arr1[0][0] === arr2[0]) return true
        else if (arr1[0][1] === arr2[1]) return true
        else if (arr1[0][0] - arr2[0] === arr1[0][1] - arr2[1]) return true
        else if (arr1[0][0] + arr2[0] === arr1[0][1] + arr2[1]) return true
        return false
    }




    else if (arr1.length > 1) {
        let firstpoint = arr1[0]
        let secondpoint = arr1[1]
        // if they're on the same row
        if (firstpoint[0] === secondpoint[0] && firstpoint[0] === arr2[0]) return true
        // if they're on the same column
        if (firstpoint[1] === secondpoint[1] && firstpoint[1] === arr2[1]) return true
        // TODO: if they're diagonal
        if (firstpoint[0] + arr2[0] === firstpoint[1] + arr2[1]) return true
        if (firstpoint[0] - arr2[0] === firstpoint[1] - arr2[1]) return true
        return false
    }

}