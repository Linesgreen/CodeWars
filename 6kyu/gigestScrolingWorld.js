/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position 
in the alphabet: a = 1, b = 2, c = 3;

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, 
return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */


function high(x){
        let wordsArray =  x.split(' ');
        let lettersWeigthArray = wordsArray.map(word => word
                                    .match(/[a-z]/g))
                                    .map(lettersArray => lettersArray.reduce((acum, letter) => {
                                        return acum += ((letter.charCodeAt(0)) - 96)
                                    },0))
        let maxWeigtWordIndex = lettersWeigthArray.indexOf(Math.max.apply(null, lettersWeigthArray));
        return wordsArray[maxWeigtWordIndex];                          
    }
    

console.log(high('aaa b'));