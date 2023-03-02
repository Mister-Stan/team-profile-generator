// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(role, name, id, email, officeNumber) {
    // call the constructor of the Employee
    super(role, name, id, email);
    this.officeNumber = officeNumber;
  }
   getOfficeNumber() {
   return this.officeNumber;
  }
}   

module.exports = Manager;