/* In this kata, your job is to return the two distinct highest values in a list. 
If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  [] */


function twoHighest(arr) {
   let x = Math.max(...arr) ; // Впервые применяю поиск максимального значения в массиве
   let y = 0 ;
   switch (arr.length) {
    case 0: return [];
    case 1: return [arr[0]];
   }
  for (let i = 0; i < arr.length; i += 1) 
 {
if ((y < arr[i]) && x != arr[i]) {
    y = arr[i];
}
 }
 return [x,y];
}



  console.log(twoHighest([15,11,2,11]));