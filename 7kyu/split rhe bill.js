// var group = {
//     A: 20, 
//     B: 15, 
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}

function splitTheBill(x) {
    let sum = 0; 
    // Первый цикл для нахождения общей суммы счета
    for (key in x) {
        sum += x[key] ;    
    } 
    sum = sum / Object.keys(x).length
// Второй цикл для определения задолженности
    for (key in x) {
        x[key] = (x[key] - sum);    
// Проверяем является ли результат задолженности целым числом 
        Number.isInteger(x[key]) == true ? null: x[key] = Number(x[key].toFixed(2));
    } 
    return x;
}

