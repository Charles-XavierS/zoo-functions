const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const animalsListObj = {};
    species.forEach((specie) => {
      animalsListObj[specie.name] = specie.residents.length;
      return animalsListObj;
    });
    return animalsListObj;
  }

  if (!animal.sex) {
    const searchAnimal = species.find((specie) => specie.name === animal.specie);
    return searchAnimal.residents.length;
  }

  const animalsCount = species.find((specie) => specie.name === animal.specie)
    .residents.filter((searchAnimalSex) => searchAnimalSex.sex === animal.sex);
  return animalsCount.length;
}

module.exports = countAnimals;
