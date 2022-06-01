const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager = null, employees = []) {
    super(name, salary, title, manager),
    this.employees = employees
  };

  addEmployee(employee) {
    this.employees.push(employee);
  };

  _totalSubSalary() {
    let sum = 0;
    for (let i = 0; i < this.employees.length; i++) {  //Loop through every employee.
      let currentEmployee = this.employees[i];  //Pick out first employee from employees array.
      if (currentEmployee instanceof Manager) {  //Check to see if current employee is an instanceof Manager and BASE CASE
        sum += currentEmployee.salary;  //Add manager's salary to sum.
        sum += currentEmployee._totalSubSalary();  //Add their employees salaries to sum recursively.
      } else {
        sum += currentEmployee.salary;  //If not a manager, add employee's salary to the sum.
      }
    }

    return sum;  //Return the overall sum.
  };

  calculateBonus(multiplier) {
    return (this._totalSubSalary() + this.salary) * multiplier;
  };
}

module.exports = Manager;
