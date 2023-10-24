/* Find the missing letter
Write a method that takes an array of consecutive (increasing) letters
as input and that returns the missing letter in the array.

You will always get a valid array.
And it will be always exactly one letter be missing.
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)

*/
export function findMissingLetter(array:string[]):string|number|undefined {
   let alphabet : string = "abcdefghijklmnopqrstuvwxyz";
   if ( array[0].toLowerCase()  != array[0]) {
      alphabet = alphabet.toUpperCase();
   }
   let stringArray:string =  array.join("");
   for (let i : number = 0; i < stringArray.length  + 1; i += 1) {
      let compareIndex = alphabet.indexOf(stringArray.slice(i));
      if ( compareIndex != -1) {
          return alphabet[compareIndex-1]
      }
   }
}

console.log(findMissingLetter(['P','Q','R','S']))