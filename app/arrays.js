exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++)
      if(arr[i] === item)
        return i;
    return -1;
  },

  sum : function(arr) {
    return arr.reduce(function(acc, cur){return acc + cur;});
  },

  remove : function(arr, item) {
    return arr.filter(function(val){return val !== item});
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(count, cur){
      if(cur === item)
        count += 1;
      return count;
    }, 0);
  },

  duplicates : function(arr) {
    var mem = {};
    return arr.reduce(function(res, cur){
      if(!mem[cur]){
        mem[cur] = 'a';
      }else if(mem[cur] === 'a'){
        mem[cur] = 'b';
        res.push(cur);
      }
      return res;
    }, []);
  },

  square : function(arr) {
    return arr.map(function(val){return val * val;});
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce(function(result, cur, index){
      if(cur === target)
        result.push(index);
      return result;
    }, []);
  }
};
