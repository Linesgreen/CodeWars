// Подсчитываем колличество true в массиве

// Дима биба

function countSheeps(sheep) {
  let y = 0;

  for (let i = 0; i < sheep.length; i += 1) {
    if (sheep[i] === true) {
      y += 1;
    }
  }
  return y;
}

console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
