function encryptor(key, message) {
  let answer = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (key < 0) {
    alphabet = alphabet.split("").reverse().join("");
    ALPHABET = ALPHABET.split("").reverse().join("");
    key *= -1;
  }

  for (letter of message) {
    letter == letter.toLowerCase() ? (x = alphabet) : (x = ALPHABET);
    if (x.indexOf(letter) == -1) {
      answer += letter;
    } else {
      let key_i = x.indexOf(letter);
      answer += x[key_i + key];
    }
  }
  return answer;
}

console.log(encryptor(-29, "@Vlad"));
