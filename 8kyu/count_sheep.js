// Подсчитываем колличество true в массиве

// Дима биба

function countSheeps(sheeps) {
  let beep_beep_i_am_sheep = 0;

  for (const sheep of sheeps) {
    sheep == true ? beep_beep_i_am_sheep += 1: null ;
  }
  
  return beep_beep_i_am_sheep;
}

console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
