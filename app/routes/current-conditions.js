import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url='http://api.openweathermap.org/data/2.5/weather?q=' + params.name + '&appid=47c99ae9b1f7f7412bba0f762a2b3c68';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON;
    });
  },

  actions: {
    citySearch: function(params){
      this.transitionTo('current-conditions', params.name);
      window.location.href = "/current-conditions/" + params.name;
    }
  }
});