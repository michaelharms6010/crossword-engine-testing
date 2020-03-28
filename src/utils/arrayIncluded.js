export default function arrayIncluded(arr1, arr2) {

    function arraysEqual(arr1, arr2) {
        if (arr1.length != arr2.length) return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    if (arr1.filter(item => arraysEqual(item, arr2)).length > 0) return true
    return false

}