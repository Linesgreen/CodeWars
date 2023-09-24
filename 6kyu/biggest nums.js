/* Write a function that given an array of numbers >= 0, will arrange them such that they form the biggest number.

For example:

[1, 2, 3] --> "321" (3-2-1)
[3, 30, 34, 5, 9] --> "9534330" (9-5-34-3-30)
The results will be large so make sure to return a string. */


function swap(arr, a, b) {
  let temp = arr[a]; 
  arr[a] = arr[b];
  arr[b] = temp; 
} 

function defCompare (a, b) { 
return a.toString() + b.toString() > b.toString() + a.toString() ? 1 : -1; 
}


function biggest(nums) {
let count_equal = 1;
  for (i = 0; i < nums.length; i += 1) { 
    nums[i] == nums[i+1] ? count_equal += 1 : count_equal = count_equal;
  }
  console.log(count_equal);
 if (count_equal === nums.length ) {
  return nums[0].toString();
 }
  
  const { length } = nums;
  for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) { 
          if (defCompare(nums[j], nums[j + 1]) === 1) {
              swap(nums, j, j + 1);
             
          }
      }
  }
  return nums.reverse().toString().replace(/,/gi,'');
}   

console.log(biggest([0,0,0,0,0,0] )) ;

