
const Employee = require("./Employee");
// I create a clasee Engnieer and i extend the Employee sub class
// i have a constructor with 4 parameters
// and a super class name id and email 
// github parameter it is a subclass
// i use  Get to binds an object property to a function

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); 
    this.github = github;
    this.id = id
    this.email = email;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
  getID () {
    return this.id;
    }
  getEmail() {
    return this.email;
    }
}
// this exports the class module

module.exports = Engineer;