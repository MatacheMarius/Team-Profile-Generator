  // I linked const Engineer with require ("../ JavaScript / Engineer");
  // i use test () method tests for a match in a string.
  // Git takes the place of the event
  // i use  Get to binds an object property to a function

const Engineer = require("../JavaScript/Engineer");

test("Set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const Git = new Engineer("Foo", 1, "https://github.com/obrienceob", testValue);
  expect(Git.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const Git = new Engineer("Foo", 1, "https://github.com/obrienceob", "GitHubUser");
  expect(Git.getRole()).toBe(testValue);
});

test("Get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const Git = new Engineer("Foo", 1, "https://github.com/obrienceob", testValue);
  expect(Git.getGithub()).toBe(testValue);
});