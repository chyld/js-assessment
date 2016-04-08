/* global fetch */
exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject){
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(result){
      return result.people.map(function(person){
        return person.name;
      }).sort();
    });
  }
};
