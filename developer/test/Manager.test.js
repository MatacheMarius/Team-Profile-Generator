  // I linked const Manager with require ("../ JavaScript /anager;
  // i use test () method tests for a match in a string.
  // man takes the place of the event
  // i use  Get to binds an object property to a function
const Manager = require("../JavaScript/Manager");


test("Set office number via constructor argument", () => {
  const testValue = 100;
  const man = new Manager("Foo", 1, "matachemarius92@gmail.com", testValue);
  expect(man.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const man = new Manager("Foo", 1, "matachemarius92@gmail.com", 100);
  expect(man.getRole()).toBe(testValue);
});

test("Get office number via getOffice()", () => {
  const testValue = 100;
  const man = new Manager("Foo", 1, "matachemarius92@gmail.com", testValue);
  expect(man.getOfficeNumber()).toBe(testValue);
});