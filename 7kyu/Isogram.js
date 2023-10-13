function isIsogram(str){
    return str.split("").reduce((count, letter) => count + str.toLowerCase().indexOf(letter) - str.toLowerCase().lastIndexOf(letter),0) === 0;
  }


  console.log(isIsogram("VlaAd"));