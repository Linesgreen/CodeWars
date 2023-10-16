/* Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then 
it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str){
    
    let solution = str.match(/\w\w/g);
    if (solution === null) {return []}
    return (str.length % 2 === 0 ? solution : solution.push(str.at(-1) + '_') && solution) || []
}


console.log(solution('a'))