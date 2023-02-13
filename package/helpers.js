module.exports.lerp = (start, end, amount) => {
  return start + (end - start) * amount;
};

module.exports.clamp = (value, min, max) => {
  if (value <= min) {
    return min;
  }

  if (value >= max) {
    return max;
  }

  return value;
};
