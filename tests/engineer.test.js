const Engineer = require("../library/engineer");

test("Can get GitHub username", () => {
  const testGitHub= "adecapite";
  const eng = new Engineer(1, "ANthony", "anthony@email.com", testGitHub);
  expect(eng.getGitHub()).toEqual(testGitHub);
});