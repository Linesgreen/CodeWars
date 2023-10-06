function findOdd(A) {
  answer = 0;
  A.forEach(function (item) {
    count = 0;
    for (number of A) {
      item === number ? (count += 1) : null;
    }
    if (count % 2 == 1) {
      answer = item;
    }
  });
  return answer;
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
