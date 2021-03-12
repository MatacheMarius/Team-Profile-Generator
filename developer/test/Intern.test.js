  // I linked const Intern with require ("../ JavaScript / Intern);
  // i use test () method tests for a match in a string.
  // Blah takes the place of the event
  // i use  Get to binds an object property to a function
const Intern = require("../JavaScript/Intern");

test("Set school via constructor", () => {
  const testValue = "another";
  const blah = new Intern("Foo", 1, "addanotherconstructor@gmail.com", testValue);
  expect(blah.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const blah = new Intern("Foo", 1, "addanotherconstructor@gmail.com", "another");
  expect(blah.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "another";
  const blah = new Intern("Foo", 1, "addanotherconstructor@gmail.com", testValue);
  expect(blah.getSchool()).toBe(testValue);
});