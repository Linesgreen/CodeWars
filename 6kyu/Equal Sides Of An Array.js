"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEvenIndex = void 0;
function findEvenIndex(arr) {
    var _loop_1 = function (i) {
        var result = void 0;
        result = arr.reduce(function (acum, number, index) {
            if (index < i && i != index) {
                acum[0] += number;
            }
            else if (i != index) {
                acum[1] += number;
            }
            return acum;
        }, [0, 0]);
        console.log(result);
        if (result[0] === result[1]) {
            return { value: i };
        }
    };
    for (var i = 0; i < arr.length; i += 1) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return -1;
}
exports.findEvenIndex = findEvenIndex;
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
//[{1,2,3,4,3,2,1}]
