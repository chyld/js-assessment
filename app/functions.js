exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str1) {
    return function(str2){
      return str1 + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(val){
      return function(){
        return val * val;
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(acc, cur){
      return acc + cur;
    });
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args1 = Array.prototype.slice.call(arguments, 1);
    return function(){
      var args2 = Array.prototype.slice.call(arguments);
      Array.prototype.push.apply(args1, args2);
      return fn.apply(null, args1);
    };
  },

  curryIt : function(fn) {
    return function(a){
      return function(b){
        return function(c){
          return fn(a, b, c);
        }
      }
    };
  }
};
