const { easeIn } = require("easier-js");

describe("easeIn", () => {
  it("should return the start value when amount is 0", () => {
    expect(easeIn(0, 1, 0, 1)).toBe(0);
    expect(easeIn(15, 30, 0, 2)).toBe(15);
    expect(easeIn(27, 12, 0, 16)).toBe(27);
  });

  it("should return the end value when amount is 1", () => {
    expect(easeIn(0, 1, 1, 1)).toBe(1);
    expect(easeIn(15, 30, 1, 2)).toBe(30);
    expect(easeIn(27, 12, 1, 16)).toBe(12);
  });

  it("should return the correct value when amount is between 0 and 1", () => {
    expect(easeIn(0, 1, 0.5, 2)).toBeCloseTo(0.25, 2);
    expect(easeIn(0, 1, 0.5, 3)).toBeCloseTo(0.125, 3);
    expect(easeIn(0, 1, 0.5, 4)).toBeCloseTo(0.0625, 4);
    expect(easeIn(0, 1, 0.2, 2)).toBeCloseTo(0.04, 2);
    expect(easeIn(0, 1, 0.2, 3)).toBeCloseTo(0.008, 3);
    expect(easeIn(0, 1, 0.2, 4)).toBeCloseTo(0.0016, 4);
    expect(easeIn(0, 1, 0.7, 2)).toBeCloseTo(0.49, 2);
    expect(easeIn(0, 1, 0.7, 3)).toBeCloseTo(0.343, 3);
    expect(easeIn(0, 1, 0.7, 4)).toBeCloseTo(0.2401, 4);
  });
});
