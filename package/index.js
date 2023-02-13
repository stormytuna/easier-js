const { easeIn, easeOut, easeInOut } = require("./ease");
const { easeInNormalised, easeOutNormalised, easeInOutNormalised } = require("./ease-normalised");
const { lerp, lerpPercentage } = require("./lerp");

module.exports = {
  easeIn,
  easeOut,
  easeInOut,
  easeInNormalised,
  easeOutNormalised,
  easeInOutNormalised,
  lerp,
  lerpPercentage,
};
