const { easeIn, easeOut } = require("easier-js");

describe("easeIn", () => {
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

  it("should clamp amount when clamp is true", () => {
    expect(easeIn(0, 1, -5, 1, true)).toBe(0);
    expect(easeIn(0, 1, 50, 1, true)).toBe(1);
  });

  it("should not clamp amount when clamp is false", () => {
    expect(easeIn(0, 1, -1, 1, false)).toBeLessThan(0);
    expect(easeIn(0, 1, 2, 1, false)).toBeGreaterThan(1);
  });
});

describe("easeOut", () => {
  it("should return the correct value when amount is between 0 and 1", () => {
    expect(easeOut(0, 1, 0.5, 2)).toBeCloseTo(0.75, 2);
    expect(easeOut(0, 1, 0.5, 3)).toBeCloseTo(0.875, 3);
    expect(easeOut(0, 1, 0.5, 4)).toBeCloseTo(0.9375, 4);
    expect(easeOut(0, 1, 0.2, 2)).toBeCloseTo(0.36, 2);
    expect(easeOut(0, 1, 0.2, 3)).toBeCloseTo(0.488, 3);
    expect(easeOut(0, 1, 0.2, 4)).toBeCloseTo(0.59, 2);
    expect(easeOut(0, 1, 0.7, 2)).toBeCloseTo(0.9, 1);
    expect(easeOut(0, 1, 0.7, 3)).toBeCloseTo(0.973, 3);
    expect(easeOut(0, 1, 0.7, 4)).toBeCloseTo(0.9919, 4);
  });

  it("should clamp amount when clamp is true", () => {
    expect(easeOut(0, 1, -5, 1, true)).toBe(0);
    expect(easeOut(0, 1, 50, 1, true)).toBe(1);
  });

  it("should not clamp amount when clamp is false", () => {
    expect(easeOut(0, 1, -1, 1, false)).toBeLessThan(0);
    expect(easeOut(0, 1, 2, 1, false)).toBeGreaterThan(1);
  });
});
