function deleteNth(arr, n) {
    var map = new Map();
    var answArr = [];
    arr.forEach(function (number) {
        if (!map.has(number)) {
            answArr.push(number);
            map.set(number, 1);
            return;
        }
        map.set(number, map.get(number) + 1);
        if (map.get(number) <= n) {
            answArr.push(number);
            return;
        }
    });
    return answArr;
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
