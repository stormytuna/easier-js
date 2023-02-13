const { lerp } = require("./lerp");

/**
 * Ease in interpolation (smooth start) between the start and end value.
 * @param {number} start Starting value, returned when amount is 0
 * @param {number} end Ending value, returned when amount is 1
 * @param {number} amount The lerp percentage, values < 0 and > 1 might result in weird results when unclamped
 * @param {number} power The exponent of the easing curve, larger values result in more easing
 * @param {boolean} clamped Whether or not to clamp the amount between 0 and 1. Defaults to true
 * @returns An eased value between start and end
 */
module.exports.easeIn = (start, end, amount, power, clamped = true) => {
  const easingAmount = Math.pow(amount, power);
  return lerp(start, end, easingAmount, clamped);
};

/**
 * Ease out interpolation (smooth stop) between the start and end value.
 * @param {number} start Starting value, returned when amount is 0
 * @param {number} end Ending value, returned when amount is 1
 * @param {number} amount The lerp percentage, values < 0 and > 1 might result in weird results when unclamped
 * @param {number} power The exponent of the easing curve, larger values result in more easing
 * @param {boolean} clamped Whether or not to clamp the amount between 0 and 1. Defaults to true
 * @returns An eased value between start and end
 */
module.exports.easeOut = (start, end, amount, power, clamped = true) => {
  const flippedAmount = 1 - amount;
  const flippedEasingAmount = Math.pow(flippedAmount, power);
  const easingAmount = 1 - flippedEasingAmount;
  return lerp(start, end, easingAmount, clamped);
};

/**
 * Ease in out interpolation (smooth start and smooth stop) between the start and end value.
 * @param {number} start Starting value, returned when amount is 0
 * @param {number} end Ending value, returned when amount is 1
 * @param {number} amount The lerp percentage, values < 0 and > 1 might result in weird results when unclamped
 * @param {number} easeInPower The exponent of the ease in easing curve
 * @param {number} easeOutPower The exponent of the ease out easing curve. Defaults to easeInPower
 * @param {boolean} clamped Whether or not to clamp the amount between 0 and 1. Defaults to true
 * @returns An eased value between start and end
 */
module.exports.easeInOut = (start, end, amount, easeInPower, easeOutPower = easeInPower, clamped = true) => {
  const easeInValue = this.easeIn(start, end, amount, easeInPower, clamped);
  const easeOutValue = this.easeOut(start, end, amount, easeOutPower, clamped);
  return lerp(easeInValue, easeOutValue, amount, clamped);
};
