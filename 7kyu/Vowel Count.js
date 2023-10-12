/*  Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */ 



function getCount(str) {
    let countVowels = 0;
    for (let i = 0; i < str.length; i += 1 ) {
     if (str.charAt(i) == 'a'|| str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
    countVowels += 1;
    }
    }
    return countVowels;
  } 

console.log(getCount('1234aaaee'));

function getCount1(str) {
  vovels = new RegExp('[aeio]','ig')
  return str.match(vovels).length;
}

console.log(getCount1("1234aaaee"));