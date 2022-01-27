const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const searchAnimal = data.species.find((specie) => specie.name === animal);
  return searchAnimal.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
