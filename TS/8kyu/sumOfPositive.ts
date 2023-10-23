export function positiveSum(arr:number[]):number {
    return arr.reduce((positiveSum , number )=> number  > 0 ? positiveSum += number : positiveSum, 0);
}

console.log(positiveSum([-1,-2,-3]));