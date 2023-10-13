/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true 
XO("zzoo") => false */



"use strict";
function XO(str) {
    if(str.length == 0) return true;
    return (str.toLowerCase().match(/x/g) && str.toLowerCase().match(/o/g)) === null ?
     false : str.toLowerCase().match(/x/g).length === str.toLowerCase().match(/o/g).length;
}

console.log("xoxoxxoo".split('x'));