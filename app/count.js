exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

    var current = start;
    var timer = setInterval(function(){
      console.log(current);
      if(current >= end){
        clearInterval(timer);
      }else{
        current += 1;
      }
    }, 100);

    return {
      cancel: function(){
        clearInterval(timer);
      }
    };

  }
};
