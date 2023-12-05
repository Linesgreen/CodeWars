"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSmileys = void 0;
//return the total number of smiling faces in the array
function countSmileys(arr) {
    const smilesCount = arr.reduce((count, smile) => {
        if (/([:;])([-~])?([)D])$/i.test(smile)) {
            count++;
        }
        return count;
    }, 0);
    return smilesCount;
}
exports.countSmileys = countSmileys;
console.log(countSmileys([':)', ';(', ';}', ':-D']));
