const Manager = require("./JavaScript/Manager");
const Engineer = require("./JavaScript/Engineer");
const Intern = require("./JavaScript/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./JavaScript/htmlRenderer");

let employees = [];
let idDb = [];

const validateId = async (data) => {
  if (idDb.includes(data) === true) {
    return 'Please enter a unique ID number';
  }
  return true;
};

function addEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What kind of employee would you like to add next?',
      choices: ["Engineer", "Intern"],
    },
  ]).then(choice => {
    switch (choice.role) {
      case "Engineer":
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "Enter engineer's name"
          },
          {
            type: "number",
            name: "id",
            message: "Enter engineer's ID number",
            validate: validateId
          },
          {
            type: "input",
            name: "email",
            message: "Enter engineer's email",
          },
          {
            type: "input",
            name: "github",
            message: "Enter engineer's Github username",
          },
         {
            type: "confirm",
            name: "addAnother",
            message: "Do you need to add another employee?",
          }
        ]).then(data => {
          const engineer = new Engineer(data.name, data.id, data.email, data.github);
          employees.push(engineer);
          idDb.push(data.id);
          if (data.addAnother === true) {
            addEmployee();
          } else {
            fs.writeFile(outputPath, render(employees), (err) => {
              if (err) throw err;
            }
            );
            return
          }
        })
        break;
      case "Intern":
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "Enter intern's name"
          },
          {
            type: "number",
            name: "id",
            message: "Enter intern's ID number",
            validate: validateId,
          },
          {
            type: "input",
            name: "email",
            message: "Enter intern's email",
          },
          {
            type: "input",
            name: "school",
            message: "Enter intern's school name",
          },
          {
            type: "confirm",
            name: "addAnother",
            message: "Do you need to add another employee?",
          }
        ]).then(data => {
          const intern = new Intern(data.name, data.id, data.email, data.school);
          employees.push(intern);
          idDb.push(data.id);
          if (data.addAnother === true) {
            addEmployee();
          }
          else {
            fs.writeFile(outputPath, render(employees), (err) => {
              if (err) throw err;
            }
            );
            return;
          }
        })
        break;
      default:
        break;
    }
  })
}

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter your name"
  },
  {
    type: "number",
    name: "id",
    message: "Enter your ID number",
    validate: validateId,
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
 
  {
    type: "number",
    name: "officeNumber",
    message: "Enter your office number",
  }
]).then(data => {
  const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
  employees.push(manager);
  idDb.push(data.id);
  addEmployee();

})