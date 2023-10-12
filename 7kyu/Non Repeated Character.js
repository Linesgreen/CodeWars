/* You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
You can assume, that the input string has always non-zero length.

Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated) */

function firstNonRepeated(s) {
    let  testWord = s;
    let count = 0;
    for (i = 0; i < s.length; i += 1)
    {
        var regular = new RegExp(s[i]); 
        
        testWord = s.replace(s[i], '*');
       
        if (regular.test(testWord) == false ) {
            return s[i];
        } else { count += 1; }
        
        
    }
    if ( count = s.length) {return null}
    return s[0];
  }



  console.log(firstNonRepeated('vvlladd'));

  function firstNonRepeated1(s) {
    let reapeatRegEx = /(\w)\1/g;
    let  answer = s.match(reapeatRegEx)
    answer.forEach((letters) => s = s.replace(letters, ""));
    return s;
    
  }
  console.log(firstNonRepeated1("vvlladd"))