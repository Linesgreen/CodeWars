/* DESCRIPTION:
A simple substitution cipher replaces one character
 from an alphabet with a character from an alternate alphabet, 
 where each character's position in an alphabet is mapped 
 to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be. */



class SubstitutionCipher {
    constructor(abc1, abc2){
        this.alphabet = abc1.split("");
        this.codedAlphabed = abc2.split("");
    }

    encode (str) {
        return str.split("").map(letter => {
            if (this.alphabet.indexOf(letter) === -1) {
                return letter;
            } 
            return this.codedAlphabed[this.alphabet.indexOf(letter)]
        }).join("")
          
       
    
    }
    decode (str) {
        return str.split("").map(letter => {
            if (this.codedAlphabed.indexOf(letter) === -1) {
                return letter;
            } 
            return this.alphabet[this.codedAlphabed.indexOf(letter)]
        }).join("")
    }    
  }

  let abc1 = "abcdefghijklmnopqrstuvwxyz";
  let abc2 = "etaoinshrdlucmfwypvbgkjqxz";
  let sub = new SubstitutionCipher(abc1,abc2);


  console.log(sub.decode("qxz"));