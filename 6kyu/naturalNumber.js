/* If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 
below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once. */

function solution(number){
  if (number <= 0){
    return 0;
  }
  let x = 3; // multiples
  let y = 5;
  let summ = 0;
  
  for (i = 0; i < number; i+= 1) {
    if( i % x == 0 || i % y == 0) {
        console.log(`${i} подходит`)
        summ += i;
    }
}
return summ;
}

console.log(solution(10));