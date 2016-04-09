exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    return data.files.reduce(function(list, file){
      if(typeof file === 'string'){
        list.push(file);
      }else{
        list = list.concat(exports.recursionAnswers.listFiles(file));
      }

      return list;
    }, []);
  },

  permute: function(arr) {
  },

  fibonacci: function(n) {
    if (n < 2){
      return n;
    }else{
      return exports.recursionAnswers.fibonacci(n - 1) + exports.recursionAnswers.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {
  }
};
