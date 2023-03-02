// TODO: Write code to define and export the Employee class
class Employee {
  constructor(role, name, id, email) {
      this.role = role;
      this.name = name;
      this.id = id;
      this.email = email;
  }
 
  // retrieve infos about the Employee obj
  getName() {
      return this.name;
  }

  getRole() {
      return this.role;
  }

  getId() {
      return this.id;
  }

  getEmail() {
      return this.email;
  }

}

module.exports = Employee;