const Employee = require("../library/employee");

test("Employee name?", () => {
  const testName = "Anthony";
  const em = new Employee(1, testname, "employee@employee.com");
  expect(em.findName()).toEqual(testName);
});

test("Employee id?", () => {
  const testID = 18;
  const em = new Employee(testID, "Anthony", "employee@employee.com");
  expect(em.findId()).toEqual(testID);
});

test("Employee email?", () => {
  const testEmail = "employee@employee.com";
  const em = newEmployee(1, "Anthony", testEmail);
  expect(em.findEmail()).toEqual(testEmail)
});