// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(role, name, id, email, github) {
  // call the constructor of the Employee
  super(role, name, id, email);
  this.github = github;
  }
    getGithub() {
      return this.github;
  }
}

module.exports = Engineer;