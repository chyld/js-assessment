exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  },
  wordWrap: function(str, cols) {
  },
  reverseString: function(str) {
    return str.split(' ').reverse().map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }
};
