/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */


function findShort(s){
    return s.match(/\w+'*\w*/g).reduce((shortedWord, word) => shortedWord.length < word.length ? shortedWord : word ).length;
}

console.log(findShort("Let's travel abroad shall we"));