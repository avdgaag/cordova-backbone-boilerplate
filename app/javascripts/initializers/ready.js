var App = require('../application');

App.vent.on('app:initialize:after', function(app) {
  $('.event.listening').hide();
  $('.event.received').show();
});
