var MessagesView = {


  $chats: $('#chats'),

  initialize: function() {
    //check for lobby name
    //get all the stuff
  },

  renderMessage:function(data){
    // set result -> if data results is true, else set it to data
    let results = data.results || data; //data is just a plain object, data.results is an array in an object
    if(Array.isArray(results)){
      for(let i = 0; i < results.length; i++){

        let thePost = MessageView.render(results[i]);
        MessagesView.$chats.append(thePost);
      }
    }else{
      let thePost = _.template(
        "<div class='post-container'>" +
          `<div class='username'>${results.username}</div>` +
          `<div class='text-message'>${results.text}</div>` +
        "</div>"
      );
      MessagesView.$chats.append(thePost);
    }

  }
};

//filter through the results of the returned parsed data
  //filter by lobby
  //store username, text

//render the data to the chat