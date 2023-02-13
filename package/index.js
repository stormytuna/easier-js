const { lerp } = require("./helpers");

/**
 * Ease in interpolation (smooth start) between the start and end value.
 * @param {number} start Starting value, returned when amount is 0
 * @param {number} end Ending value, returned when amount is 1
 * @param {number} amount The lerp percentage, values < 0 and > 1 might result in weird results when unclamped
 * @param {number} power The exponent of the easing curve, larger values result in more easing
 * @returns An eased value between start and end
 */
module.exports.easeIn = (start, end, amount, power) => {
  if (amount <= 0) {
    return start;
  }
  if (amount >= 1) {
    return end;
  }

  const easingAmount = Math.pow(amount, power);
  return lerp(start, end, easingAmount);
};
