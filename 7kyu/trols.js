// Удаляем все глассные из предложния.

function disemvowel(str) {
  let new_str = '';
  for (i = 0; i < str.length; i += 1) {
    if (str[i] != 'A' && str[i] != 'a' && str[i] != 'E' && str[i] != 'e'
    && str[i] != 'I' && str[i] != 'i' && str[i] != 'O' && str[i] != 'o'
    && str[i] != 'U' && str[i] != 'u') {
      new_str += str[i];
    }
  }
  return new_str;
} 
console.log(disemvowel('Vlad'));