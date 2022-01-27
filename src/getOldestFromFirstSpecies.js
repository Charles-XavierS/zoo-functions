const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const idForEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalSpecie = species.find((specie) => specie.id === idForEmployee)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalSpecie);
}

module.exports = getOldestFromFirstSpecies;
