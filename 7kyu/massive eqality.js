/* Write a function that takes two arguments, and returns a new array populated with the elements that only appear once,
in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5] */


function hotSingles(arr1, arr2) {
    let answer = [];
   
        b = arr1; a = arr2; // обозначил переменные для удобства
    for ( i = 0; i < b.length; i += 1) {                            // перебираем первый массив на наличие повторений
        console.log(a[i]); 
       if ( a.includes(b[i]) == false && b[i] != undefined) {       // если узнаем что значения нет и что значение которое мы ищем не undefined  
        answer.includes(b[i]) ? answer = answer:answer.push(b[i]) ;}// и так же узнаем что это значение не было уже записанно в ответ, тогда заносим его
            
        
       }
       for ( i = 0; i < a.length; i += 1) {
         console.log(a[i]);
         
        if ( b.includes(a[i]) == false && a[i] != undefined) {
            answer.includes(a[i]) ? answer = answer:answer.push(a[i]);
      }   
    }
   
    return answer;
    } 

    console.log(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5]));