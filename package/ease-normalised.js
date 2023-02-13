const { easeIn, easeOut, easeInOut } = require("./ease");

/**
 * Ease in interpolation (smooth start) between 0 and 1.
 * @param {number} amount The lerp percentage, values < 0 and > 1 might result in weird results when unclamped
 * @param {number} power The exponent of the easing curve, larger values result in more easing
 * @param {boolean} clamped Whether or not to clamp the amount between 0 and 1. Defaults to true
 * @returns An eased value between start and end
 */
module.exports.easeInNormalised = (amount, power, clamped = true) => {
  return easeIn(0, 1, amount, power, clamped);
};

/**
 * Ease out interpolation (smooth stop) between 0 and 1.
 * @param {number} amount The lerp percentage, values < 0 and > 1 might result in weird results when unclamped
 * @param {number} power The exponent of the easing curve, larger values result in more easing
 * @param {boolean} clamped Whether or not to clamp the amount between 0 and 1. Defaults to true
 * @returns An eased value between start and end
 */
module.exports.easeOutNormalised = (amount, power, clamped = true) => {
  return easeOut(0, 1, amount, power, clamped);
};

/**
 * Ease in out interpolation (smooth start and smooth stop) between 0 and 1.
 * @param {number} amount The lerp percentage, values < 0 and > 1 might result in weird results when unclamped
 * @param {number} easeInPower The exponent of the ease in easing curve
 * @param {number} easeOutPower The exponent of the ease out easing curve. Defaults to easeInPower
 * @param {boolean} clamped Whether or not to clamp the amount between 0 and 1. Defaults to true
 * @returns An eased value between start and end
 */
module.exports.easeInOutNormalised = (amount, easeInPower, easeOutPower = easeInPower, clamped = true) => {
  return easeInOut(0, 1, amount, easeInPower, easeOutPower, clamped);
};
