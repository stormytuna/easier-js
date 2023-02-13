const { clamp } = require("./helpers");

module.exports.lerp = (start, end, amount, clamped = true) => {
  amount = clamped ? clamp(amount, 0, 1) : amount;
  return start + (end - start) * amount;
};
