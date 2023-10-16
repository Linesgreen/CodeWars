/* Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value 
next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */


var uniqueInOrder=function(iterable){
    if (iterable.length === 0) {return []}
    if( typeof iterable === 'object') {
       return  iterable.join("").match(/(.)\1{0,}/g).map(letters => (Number(letters.charAt(0)) || letters.charAt(0))) 
    } else {
    return   iterable.match(/(.)\1{0,}/g).map(letters => letters.charAt(0)) 
    }
  }


  console.log(uniqueInOrder([1,1,1,2,3,4,5,6,6,6,6]))