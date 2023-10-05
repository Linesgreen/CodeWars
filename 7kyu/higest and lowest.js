//  найти наибольшее и наименьшее значение и вывести результат вида x -b
 
 
 function highAndLow(numbers){ 
  let  number = numbers.split(' ');
  let realNumber = []; 
  for ( let i = 0; i < number.length; i++) {
    realNumber.push(number[i]*1);
  } 
  number = realNumber.join(','); 
    return `${Math.max.apply(null, realNumber)} ${Math.min.apply(null, realNumber)}` ;
  } 


  
   console.log(highAndLow("-2 1 2 3 4 5"));
