const Intern = require("../library/intern");

test("School?", () => {
  const testSchool = "Bowling Green";
  const intern = new Intern(1, "Anthony", "employee@employee.com", testSchool);
  expect(intern.findSchool()).toEqual(testSchool);
});