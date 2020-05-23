var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize(); // Event handler for submit
    // RoomsView.initialize();
    // MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);///gets fetched here

  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log("Our Data:", data);
      MessagesView.initialize(data);
      MessagesView.renderMessage(data);
      RoomsView.initialize(data);
      // Friends.initialize();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
