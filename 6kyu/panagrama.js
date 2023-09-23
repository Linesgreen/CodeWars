/* A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation. */


// для выполнения задания я модифицировал свой код alphabet.js из 7kyu
// В нем я считал колличество каждых букв в предложении.

function isPangram(string) {
    
    let alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0,
        f: 0, g: 0, h: 0, i: 0, j: 0, k: 0,
        l: 0, m: 0, n: 0, o: 0, p: 0, q: 0,
        r: 0, s: 0, t: 0, u: 0, v: 0, w: 0,
        x: 0, y: 0, z: 0 } 

        // для перебора знчений записанных в объект alphabet был создан массив имен свойств этого объекта
    let alphabetMap = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    string = string.toLowerCase();   
    
    for (let i = 0; i < string.length; i += 1) { 
        switch (string[i]) {
            case 'a' :alphabet.a += 1; 
            break; 
            case 'b' :alphabet.b += 1; 
            break;
            case 'c' :alphabet.c += 1; 
            break;
            case 'd' :alphabet.d += 1; 
            break;
            case 'e' :alphabet.e += 1; 
            break;
            case 'f' :alphabet.f += 1; 
            break;
            case 'g' :alphabet.g += 1; 
            break;
            case 'h' :alphabet.h += 1; 
            break;
            case 'i' :alphabet.i += 1; 
            break;
            case 'j' :alphabet.j += 1; 
            break;
            case 'k' :alphabet.k += 1; 
            break;
            case 'l' :alphabet.l += 1; 
            break;
            case 'm' :alphabet.m += 1; 
            break;
            case 'n' :alphabet.n += 1; 
            break;
            case 'o' :alphabet.o += 1; 
            break;
            case 'p' :alphabet.p += 1; 
            break;
            case 'q' :alphabet.q += 1; 
            break;
            case 'r' :alphabet.r += 1; 
            break;
            case 's' :alphabet.s += 1; 
            break;
            case 't' :alphabet.t += 1; 
            break;
            case 'u' :alphabet.u += 1; 
            break;
            case 'v' :alphabet.v += 1; 
            break;
            case 'w' :alphabet.w += 1; 
            break;
            case 'x' :alphabet.x += 1; 
            break;
            case 'y' :alphabet.y += 1; 
            break;
            case 'z' :alphabet.z += 1; 
            break; 
        } 
    } 
    let letterCount = 0; 
    for (i = 0; i < alphabetMap.length ; i += 1) {
        
        if (alphabet[alphabetMap[i]] >= 1) {
            letterCount += 1;
        }
     } 
     return letterCount == 26 ? true : false 
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));