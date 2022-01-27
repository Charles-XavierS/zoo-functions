const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((searchEmployee) => searchEmployee.firstName === employeeName
  || searchEmployee.lastName === employeeName);
}

module.exports = getEmployeeByName;
