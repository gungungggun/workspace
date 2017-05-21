var taxCalculator = function(price ,tax) {
  return Math.round(price * tax);
};

module.exports = taxCalculator;
