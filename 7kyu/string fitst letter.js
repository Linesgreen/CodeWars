/* In this exercise, a string is passed to a method and a new string 
has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces. */

function makeString(s){
   let word = s[0];  
    for (let i = 1; i < s.length - 1; i += 1) {
        s[i] == " " ? word += s[i + 1]: null;
     }
    return word; 
  }
  
  console.log(makeString('Vobla Lada Ananas Double I Sonick Love Alpaka Vupsen" '));