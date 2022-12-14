const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((searchEmployee) => searchEmployee
    .managers.find((searchManager) => searchManager === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => employee.managers.includes(managerId))
    .map((nameEmployee) => `${nameEmployee.firstName} ${nameEmployee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
