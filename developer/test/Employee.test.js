// I linked const Employee with require ("../ JavaScript / Employee");
// i use test () method tests for a match in a string.
// mail takes the place of the event
// i use  Get to binds an object property to a function
const Employee = require("../JavaScript/Employee");

test("Can instantiate Employee instance", () => {
  const mail = new Employee();
  expect(typeof(mail)).toBe("object");
});

test("Set name via constructor arguments", () => {
  const name = "Sandu";
  const mail = new Employee(name);
  expect(mail.name).toBe(name);
});

test("Set id via constructor argument", () => {
  const testValue = 100;
  const mail = new Employee("Foo", testValue);
  expect(mail.id).toBe(testValue);
});

test("Set email via constructor argument", () => {
  const testValue = "SanduCorobcenco@email.com";
  const mail = new Employee("Foo", 1, testValue);
  expect(mail.email).toBe(testValue);
});

test("Set name via getName()", () => {
  const testValue = "Sandu";
  const mail = new Employee(testValue);
  expect(mail.getName()).toBe(testValue);
});

test("Set id via getId()", () => {
  const testValue = 100;
  const mail = new Employee("Foo", testValue);
  expect(mail.getId()).toBe(testValue);
});

test("Set email via getEmail()", () => {
  const testValue = "SanduCorobcenco@email.com";
  const mail = new Employee("Foo", 1, testValue);
  expect(mail.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const mail = new Employee("Sandu", 1, "SanduCorobcenco@email.com");
  expect(mail.getRole()).toBe(testValue);
});