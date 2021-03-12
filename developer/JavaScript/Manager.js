
const Employee = require("./Employee");
// I create a clasee Manager and i extend the Employee sub class
// i have a constructor with 4 parameters
// and a super class name id and email 
// officeNumber it is a subclass
// i use  Get to binds an object property to a function
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); 
    this.officeNumber = officeNumber;
    this.id = id
    this.email = email;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getID () {
    return this.id;
  }
  getEmail() {
    return this.email;
    }
}
// This exports class module
module.exports = Manager;