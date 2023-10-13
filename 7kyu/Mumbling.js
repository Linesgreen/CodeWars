/* DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */


function accum(s) {
   return s.toLowerCase().split("").map((letter, index)=> `${(letter.repeat(index + 1))[0].toUpperCase()}${(letter.repeat(index + 1)).slice(1)}`).join("-");
}


console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));


// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"