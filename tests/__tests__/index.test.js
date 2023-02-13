const { easeIn, easeOut, easeInOut, easeInNormalised, easeOutNormalised, easeInOutNormalised, lerp } = require("easier-js");

describe("lerp", () => {
  it("should return the correct value", () => {
    expect(lerp(0, 1, 0.5)).toBe(0.5);
    expect(lerp(0, 1, 0.2)).toBe(0.2);
    expect(lerp(0, 1, 0.7)).toBe(0.7);
    expect(lerp(10, 20, 0.5)).toBe(15);
    expect(lerp(20, 10, 0.5)).toBe(15);
  });
});

describe("easeIn", () => {
  it("should return the correct value", () => {
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
  it("should return the correct value", () => {
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

describe("easeInOut", () => {
  it("should return the correct value", () => {
    expect(easeInOut(0, 1, 0.5, 2)).toBe(0.5);
    expect(easeInOut(0, 1, 0.5, 3)).toBe(0.5);
    expect(easeInOut(0, 1, 0.5, 4)).toBe(0.5);
    expect(easeInOut(0, 1, 0.2, 2)).toBeCloseTo(0.104, 3);
    expect(easeInOut(0, 1, 0.2, 3)).toBeCloseTo(0.104, 3);
    expect(easeInOut(0, 1, 0.2, 4)).toBeCloseTo(0.11936, 5);
    expect(easeInOut(0, 1, 0.7, 2)).toBeCloseTo(0.784, 3);
    expect(easeInOut(0, 1, 0.7, 3)).toBeCloseTo(0.784, 3);
    expect(easeInOut(0, 1, 0.7, 4)).toBeCloseTo(0.76636, 5);
  });

  it("should clamp amount when clamp is true", () => {
    expect(easeInOut(0, 1, -5, 1, true)).toBe(0);
    expect(easeInOut(0, 1, 50, 1, true)).toBe(1);
  });

  it("should not clamp amount when clamp is false", () => {
    expect(easeInOut(0, 1, -1, 1, 1, false)).toBeLessThan(0);
    expect(easeInOut(0, 1, 2, 1, 1, false)).toBeGreaterThan(1);
  });
});

describe("easeInNormalised", () => {
  it("should return the correct value", () => {
    expect(easeInNormalised(0.5, 2)).toBeCloseTo(0.25, 2);
    expect(easeInNormalised(0.5, 3)).toBeCloseTo(0.125, 3);
    expect(easeInNormalised(0.5, 4)).toBeCloseTo(0.0625, 4);
    expect(easeInNormalised(0.2, 2)).toBeCloseTo(0.04, 2);
    expect(easeInNormalised(0.2, 3)).toBeCloseTo(0.008, 3);
    expect(easeInNormalised(0.2, 4)).toBeCloseTo(0.0016, 4);
    expect(easeInNormalised(0.7, 2)).toBeCloseTo(0.49, 2);
    expect(easeInNormalised(0.7, 3)).toBeCloseTo(0.343, 3);
    expect(easeInNormalised(0.7, 4)).toBeCloseTo(0.2401, 4);
  });

  it("should clamp amount when clamp is true", () => {
    expect(easeInNormalised(-5, 1, true)).toBe(0);
    expect(easeInNormalised(50, 1, true)).toBe(1);
  });

  it("should not clamp amount when clamp is false", () => {
    expect(easeInNormalised(-1, 1, false)).toBeLessThan(0);
    expect(easeInNormalised(2, 1, false)).toBeGreaterThan(1);
  });
});

describe("easeOutNormalised", () => {
  it("should return the correct value", () => {
    expect(easeOutNormalised(0.5, 2)).toBeCloseTo(0.75, 2);
    expect(easeOutNormalised(0.5, 3)).toBeCloseTo(0.875, 3);
    expect(easeOutNormalised(0.5, 4)).toBeCloseTo(0.9375, 4);
    expect(easeOutNormalised(0.2, 2)).toBeCloseTo(0.36, 2);
    expect(easeOutNormalised(0.2, 3)).toBeCloseTo(0.488, 3);
    expect(easeOutNormalised(0.2, 4)).toBeCloseTo(0.59, 2);
    expect(easeOutNormalised(0.7, 2)).toBeCloseTo(0.9, 1);
    expect(easeOutNormalised(0.7, 3)).toBeCloseTo(0.973, 3);
    expect(easeOutNormalised(0.7, 4)).toBeCloseTo(0.9919, 4);
  });

  it("should clamp amount when clamp is true", () => {
    expect(easeOutNormalised(-5, 1, true)).toBe(0);
    expect(easeOutNormalised(50, 1, true)).toBe(1);
  });

  it("should not clamp amount when clamp is false", () => {
    expect(easeOutNormalised(-1, 1, false)).toBeLessThan(0);
    expect(easeOutNormalised(2, 1, false)).toBeGreaterThan(1);
  });
});

describe("easeInOutNormalised", () => {
  it("should return the correct value", () => {
    expect(easeInOutNormalised(0.5, 2)).toBe(0.5);
    expect(easeInOutNormalised(0.5, 3)).toBe(0.5);
    expect(easeInOutNormalised(0.5, 4)).toBe(0.5);
    expect(easeInOutNormalised(0.2, 2)).toBeCloseTo(0.104, 3);
    expect(easeInOutNormalised(0.2, 3)).toBeCloseTo(0.104, 3);
    expect(easeInOutNormalised(0.2, 4)).toBeCloseTo(0.11936, 5);
    expect(easeInOutNormalised(0.7, 2)).toBeCloseTo(0.784, 3);
    expect(easeInOutNormalised(0.7, 3)).toBeCloseTo(0.784, 3);
    expect(easeInOutNormalised(0.7, 4)).toBeCloseTo(0.76636, 5);
  });

  it("should clamp amount when clamp is true", () => {
    expect(easeInOutNormalised(-5, 1, true)).toBe(0);
    expect(easeInOutNormalised(50, 1, true)).toBe(1);
  });

  it("should not clamp amount when clamp is false", () => {
    expect(easeInOutNormalised(-1, 1, 1, false)).toBeLessThan(0);
    expect(easeInOutNormalised(2, 1, 1, false)).toBeGreaterThan(1);
  });
});
