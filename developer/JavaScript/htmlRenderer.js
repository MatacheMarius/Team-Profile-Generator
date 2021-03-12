// "path" is Node.js native utility module
const path = require("path");
const fs = require("fs");

// Access the path to templates
// and i acces the hole HTMl folder
const templateHtml = path.resolve(__dirname, "../Html");
// i create a const render with a parameter emp 
// ... emp it is a Immediately Invoked Function Expression
//(function () {
//   console.log(‘hello’)
// })();

const render = (emp) => {
  const html = [];
// i create filter() method creates a new array with all The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// i create map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  html.push(
    ...emp
      .filter((emp) => emp.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  html.push(
    ...emp
      .filter((emp) => emp.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    ...emp
      .filter((emp) => emp.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  return renderMain(html.join(""));
};

const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templateHtml, "manager.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber",manager.getOfficeNumber()
  );
  return template;
};
// i create 3 functions  const renderEngineer    const renderIntern   const renderMain  
// and i use path.resolve  to resolve a sequence of path-segments to an absolute path for manager, engineer, intern and main HTMl
// i use a let template and it is = fs.readFileSync becouse i need to read this file amd i use utf8 becouse all the time when we use readFIle we need to pot utf8 to conect html to the server

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templateHtml, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templateHtml, "intern.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(templateHtml, "main.html"),
    "utf8"
  );
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};
console.log("value");

module.exports = render;