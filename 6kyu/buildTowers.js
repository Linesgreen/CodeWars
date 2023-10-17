function towerBuilder(nFloors) {
    let lastFloor = new Array(nFloors*2 - 1);
    lastFloor = lastFloor.fill('*',0 , nFloors * 2 - 1)
    let string = lastFloor.join("")
    floorLength = nFloors * 2 - 1
    let indent = 1;
    let count = nFloors*2 - 2
    nFloors --;
    while (nFloors > 0) {
        let arr = new Array(floorLength)
        arr = arr.fill('*',indent,count)
        arr = arr.fill('*',indent,count);
        for (let i = 0; i < arr.length; i+=1) {
            if (typeof arr[i] === "undefined") {
                arr[i] = ["_"];
              }
        }
        arr = arr.reverse().join('')
        string += ',' + arr
        indent += 1;
        count -= 1;
        nFloors -= 1;
        

    }
    return string = string.replace(/_/g, ' ').split(",").reverse();
  }

 console.log(towerBuilder([50]));
