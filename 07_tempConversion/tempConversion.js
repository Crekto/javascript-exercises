const ftoc = function(x) {
  x = (x - 32) * 5/9;
  return parseFloat(x.toFixed(1));
};

const ctof = function(x) {
  x = x * 9/5 + 32;
  return parseFloat(x.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
