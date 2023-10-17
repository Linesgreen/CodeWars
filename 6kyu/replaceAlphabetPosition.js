function alphabetPosition(text) {
  let Arrletters = text.toLowerCase().match(/[a-z]/g)
   return  Arrletters === null ? -1 : Arrletters.map(letter => (letter.charCodeAt(0)) - 96).join(" ") ;
  }

  
  console.log(alphabetPosition("man"));
