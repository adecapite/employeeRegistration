// including Employee class to test
const Intern = require("../library/intern");
// setting new Intern with arguments into a variable
const intern = new Intern(
  "Anthony",
  1,
  "anthony@email.com",
  "Bowling Green State University"
);

// 'describing' -- (testing) -- Intern class method getSchool()
describe("Intern's school", () => {
  // testing the value returned by getSchool method
  it("Returns the Intern's school", () => {
    // expecting return value to be 'Bowling Green State University'
    expect(intern.getSchool()).toBe("Bowling Green State University");
  });
});
// 'describing' -- (testing) -- Intern class method getRole()
describe("Intern's role", () => {
  // testing the value returned by getRole method
  it('Returns the role of the new employee as "Intern"', () => {
    // expecting return value to be 'Intern'
    expect(intern.getRole()).toBe("Intern");
  });
});