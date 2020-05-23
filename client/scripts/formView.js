var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var postObject = {
      username: App.username,
      text: $('#message').value,
      roomname: "lobby"
    }

    Parse.create(postObject, callback = ()=>{console.log('Message posted successfully!')}, errorCB = null);
    App.fetch();
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};


// On submit set value of form to a variable
  // set app.username to variable
  // post our message to the chatroom