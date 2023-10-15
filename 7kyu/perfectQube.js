



function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))) {
        return -1;
    }
     let perfectCube = sq + 1;
     while ( !Number.isInteger(Math.sqrt(perfectCube))) {
        perfectCube += 1;
     }
     return perfectCube;
  }



  console.log(findNextSquare(15));