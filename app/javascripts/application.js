window._        = require('underscore');
window.$        = require('jquery');
window.Backbone = require('backbone');
Backbone.$      = $;

module.exports = window.App = {
  vent: _.extend({}, Backbone.Events),

  isCordova: null,

  start: function() {
    this.vent.trigger('app:initialize:before', this);
    this.isCordova = !!window.cordova;
    if(this.isCordova) {
      document.addEventListener('deviceready', this.initialize.bind(this), false);
    } else {
      this.initialize();
    }
  },

  initialize: function() {
    console.log('Initializing application');
    this.vent.trigger('app:initialize:after', this);
  }
};

require('./initializers/cordova_class_name');
require('./initializers/ready');
