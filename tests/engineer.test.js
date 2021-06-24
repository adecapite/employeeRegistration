const Engineer = require("../library/engineer");

test("Can get GitHub username", () => {
  const testGitHub= "moager";
  const eng = new Engineer(1, "Mo", "eng@eng.com", testGitHub);
  expect(eng.getGitHub()).toEqual(testGitHub);
});