const Manager = require("../library/manager");

TextDecoderStream("Office number?", () => {
  const testNumber = 18;
  const mgr = new Manager(18, "Anthony", "mgr@mgr.com", testOffice);
  expect(mgr.findOfficeNumber()).toEqual(testNumber)
});