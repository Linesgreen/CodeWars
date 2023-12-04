"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
/* If we list all the natural numbers below 10
that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Finish the solution so that it returns the sum
of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
class Challenge {
    solution(num) {
        let answer = 0;
        for (let i = 1; i < num; i += 1) {
            i % 3 && i % 5 ? answer += 0 : answer += i;
        }
        return answer;
    }
}
exports.Challenge = Challenge;
let test = new Challenge();
console.log(test.solution(10));
