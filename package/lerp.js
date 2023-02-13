const { clamp } = require("./helpers");

/**
 * Linear interpolation between the start and end value
 * @param {number} start Starting value, returned when amount is 0
 * @param {number} end Ending value, returned when amount is 1
 * @param {number} amount The lerp percentage
 * @param {boolean} clamped Whether or not to clamp the amount between 0 and 1. Defaults to true
 * @returns The lerped value
 */
module.exports.lerp = (start, end, amount, clamped = true) => {
  amount = clamped ? clamp(amount, 0, 1) : amount;
  return start + (end - start) * amount;
};
