"use strict";
function sumPairs(ints, s) {
    const seen = new Set();
    for (const n of ints) {
        if (seen.has(s - n))
            return [s - n, n];
        seen.add(n);
        console.log(seen);
    }
}
console.log(sumPairs([4, 3, 2, 3, 4], 6));
