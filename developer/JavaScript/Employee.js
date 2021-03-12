// i create a class Emplyee class
// After i creeat a constructor  with 3 parameters name id and email
// i use  Get to binds an object property to a function
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    // this are methods
    // I set the method and will return this.constructor
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return "Employee";
    }
  }
  // Export the Employee class
  module.exports = Employee;