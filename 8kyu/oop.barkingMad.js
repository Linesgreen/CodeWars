class Dog {
    constructor(breed) {
    this.breed = breed;
    }

    bark() {
        return "Woof";
    };
  }
  
  var snoopy = new Dog("Beagle");
  
  snoopy.bark = function() {
    return "Woof";
  };
  
  var scoobydoo = new Dog("Great Dane");

  console.log(scoobydoo.bark());
  