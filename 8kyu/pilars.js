// Дано колличество столбов у дороги, дистанция между ними (м) и ширина столбов (см).
// Нужно найти расстояние между первым и последним столбом не учитывая их ширину ( первого и последнего).


function pillars(numPill, dist, width) {
    if (numPill == 1) {
        return 0;
    } else {
        return (numPill*width)-(2*width)+((dist*numPill)-dist)*100;
        
    }
  }

  console.log(pillars(11, 15, 30));