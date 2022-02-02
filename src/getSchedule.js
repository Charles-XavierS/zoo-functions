const data = require('../data/zoo_data');

const { species, hours } = data;

const weekDays = Object.keys(hours);
const animailsList = species.map((animal) => animal.name);

function getDayByAnimal(scheduleTarget) {
  const animalsDays = species.find((specie) => specie.name === scheduleTarget).availability;
  return animalsDays;
}

function getAnimalsByDay(day) {
  const animalsAvailability = species.filter((specie) => specie.availability.includes(day));
  const animalsNames = animalsAvailability.map((animal) => animal.name);
  return animalsNames;
}

function getDays(day) {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const hoursOfZoo = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  const animalsInExhibition = getAnimalsByDay(day);
  return { [day]: { officeHour: hoursOfZoo, exhibition: animalsInExhibition } };
}

function getCompleteSchedule(scheduleTarget) {
  if (scheduleTarget !== weekDays || scheduleTarget !== animailsList) {
    return weekDays.reduce((acc, day) => ({ ...acc, ...getDays(day) }), {});
  }
}

function getSchedule(scheduleTarget) {
  if (weekDays.includes(scheduleTarget)) {
    return getDays(scheduleTarget);
  }
  if (animailsList.includes(scheduleTarget)) {
    return getDayByAnimal(scheduleTarget);
  }
  return getCompleteSchedule(scheduleTarget);
}

module.exports = getSchedule;
