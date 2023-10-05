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
        Number.isInteger(x[key]) == true ? null: x[key] = Number(x[key].toFixed(2));
    } 
    return x;
}


