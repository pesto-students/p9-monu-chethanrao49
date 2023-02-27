const mathOperations = require("./mathOperations");

test("two plus two is four", () => {
  expect(mathOperations.sum(2, 2)).toBe(4);
});


test("two minus two is zero", () => {
    expect(mathOperations.diff(2, 2)).toBe(0);
  });


test("two multiply by two is four", () => {
    expect(mathOperations.product(2, 2)).toBe(4);
  });