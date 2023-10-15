
  
  function compareAnimals(a, b) { if (a.numberOfLegs < b.numberOfLegs) { return -1; } if (a.numberOfLegs > b.numberOfLegs) { return 1; } if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0; }

  function sortAnimal(animals) { let copy = animals.slice(); copy.sort(compareAnimals); return copy; }



console.log(sortAnimal([{"name":"Monster1","numberOfLegs":93},{"name":"Monster2","numberOfLegs":91},{"name":"Monster3","numberOfLegs":93},{"name":"Monster0","numberOfLegs":93},{"name":"Monster5","numberOfLegs":93},{"name":"Monster4","numberOfLegs":92}]));
[ { name: 'Monster1', numberOfLegs: 93 }, { name: 'Monster3', numberOfLegs: 93 }, { name: 'Monster0', numberOfLegs: 93 }, { name: 'Monster5', numberOfLegs: 93 }, { name: 'Monster4', numberOfLegs: 92 }, { name: 'Monster2', numberOfLegs: 91 } ] 
[ { name: 'Monster2', numberOfLegs: 91 }, { name: 'Monster4', numberOfLegs: 92 }, { name: 'Monster0', numberOfLegs: 93 }, { name: 'Monster1', numberOfLegs: 93 }, { name: 'Monster3', numberOfLegs: 93 }, { name: 'Monster5', numberOfLegs: 93 } ]
