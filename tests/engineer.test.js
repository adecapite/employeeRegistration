const Engineer = require("../library/engineer");


test("Github username?", () => {
  const testGitHub = "adecapite";
  const eng = new Engineer(1, "Anthony", "employee@employee.com", testGitHub);
  expect(eng.getGitHub()).toequal(testGitHub);
});