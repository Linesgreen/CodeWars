let arr = [3, 30, 34, 5, 9];
function calcHighest(arr){
function customSort(a, b){
let ab = " "+a+b;
let ba = " "+b+a;
return +ba - +ab
}
arr.sort(customSort);
return arr.join("");
}

console.log(calcHighest(arr));