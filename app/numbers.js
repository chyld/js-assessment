exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return  (num >> bit - 1) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return num.toString(2);
  },

  multiply: function(a, b) {
    var product = a * b;
    var precision = b.toString().length - 2;
    return product.toPrecision(precision) * 1;
  }
};
