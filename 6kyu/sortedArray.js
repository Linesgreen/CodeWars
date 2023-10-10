function isCircleSorted(arr) {
  if (arr.length === 0) {
    return false;
  }
  let minNum = arr.indexOf(Math.min(...arr));
  console.log(minNum);
  let tempArr = arr.splice(minNum, arr.length - minNum);
  arr = [...tempArr, ...arr];
  console.log(arr);

  let answer1 =
    arr.reduce((acum, item) => (acum <= item ? (acum = item) : undefined)) ===
    arr[arr.length - 1];

  minNum = arr.lastIndexOf(Math.min(...arr));
  console.log(minNum);
  tempArr = arr.splice(minNum, arr.length - minNum);
  arr = [...tempArr, ...arr];

  let answer2 =
    arr.reduce((acum, item) => (acum <= item ? (acum = item) : undefined)) ===
    arr[arr.length - 1];
  return answer1 || answer2;
}

console.log(isCircleSorted([1, 2, 3, 4, 1]));
