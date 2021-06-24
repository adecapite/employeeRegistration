// including Employee class to test
const Engineer = require("../library/engineer");
// setting new Engineer with arguments into a variable
const engineer = new Engineer("Anthony", 1, "anthony@email.com", "addecapite");

// 'describing' -- (testing) -- Engineer class method getGithub()
describe("Engineer's GitHub", () => {
  // testing the value returned by getGithub method
  it("Returns the Engineer's GitHub username", () => {
    // expecting return value to be 'addecapite'
    expect(engineer.getGithub()).toBe("addecapite");
  });
});
// 'describing' -- (testing) -- Engineer class method getRole()
describe("Engineer's role", () => {
  // testing the value returned by getRole method
  it('Returns the role of the new employee as "Engineer"', () => {
    // expecting return value to be 'Engineer'
    expect(engineer.getRole()).toBe("Engineer");
  });
});