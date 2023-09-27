/* Complete  solution so that it returns true if the first string passed in ends
// with the 2nd argument (also a string). */

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  let x;
  for (let i =1; i <= ending.length; i += 1 ) {
    x = str[str.length-i] + x;
    console.log(x);
  }
  return x === ending;
}

console.log(solution('vlad', 'lad'));
