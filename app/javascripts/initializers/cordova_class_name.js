var App = require('../application');

App.vent.on('app:initialize:after', function(app) {
  if(app.isCordova) {
    $(document.body).addClass('is-cordova');
  } else {
    $(document.body).addClass('is-browser');
  }
});
