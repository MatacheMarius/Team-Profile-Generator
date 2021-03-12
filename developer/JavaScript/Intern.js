
const Employee = require("./Employee");
// I create a clasee intern and i extend the Employee sub class
// i have a constructor with 4 parameters
// and a super class name id and email 
// school it is a subclass
// i use  Get to binds an object property to a function
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); 
    this.school = school;
    this.id = id;
    this.email = email; 
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
  getID () {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}
// This exports Intern class module
module.exports = Intern;