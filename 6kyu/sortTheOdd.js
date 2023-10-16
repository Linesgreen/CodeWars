/* You will be given an array of numbers. 
You have to sort the odd numbers in ascending order 
while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
   let chetArray = [];
   let nechetArray = array.filter(function(number,index) {
        if ( number % 2 === 0 || number === 0) {
            chetArray.push([number,index])
            return false
        } else {return true}
    }
   
    )
    nechetArray.sort((a,b) => a - b );
    chetArray.forEach(numCoord => nechetArray.splice(numCoord[1], 0, numCoord[0]) );
    return nechetArray;
    
}

