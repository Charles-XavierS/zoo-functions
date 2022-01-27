const data = require('../data/zoo_data');

const { prices } = data;
const { child, adult, senior } = prices;

function countEntrants(entrants) {
  const childVisitor = entrants.filter((yearsOld) => yearsOld.age < 18);
  const adultVisitor = entrants.filter((yearsOld) => yearsOld.age >= 18 && yearsOld.age < 50);
  const seniorVisitor = entrants.filter((yearsOld) => yearsOld.age >= 50);
  return { child: childVisitor.length, adult: adultVisitor.length, senior: seniorVisitor.length };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const entrantsCount = countEntrants(entrants);
  const totalPrice = [entrantsCount.child * child, entrantsCount
    .adult * adult, entrantsCount.senior * senior];
  return totalPrice.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { calculateEntry, countEntrants };
