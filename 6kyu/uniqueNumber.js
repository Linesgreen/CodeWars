function findUniq(arr) {
    return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
  }
  

 console.log( findUniq([ 0, 0, 0.55, 0, 0 ]));