var MessagesView = {


  $chats: $('#chats'),
  $select: $('select'),

  initialize: function(data) {
    //filter through the data and create an array of objects that has just the lobby types we want
    // console.log($('select')[0].value)
    // var filteredArray = [];
    // // debugger;
    // for (var i = 0; i < data.results.length; i++){

    //   // console.log(data.results[i]["roomname"] == $("select")[0].value);
    //     if (data.results[i]["roomname"] == $('select')[0].value) {
    //       console.log("Select Room :", MessagesView.$select[0].value)
    //       filteredArray.push(data.results[i])
    //       console.log(filteredArray)
    //     }


    // }

    // console.log(filteredArray)

  },

  renderMessage:function(data){
    // set result -> if data results is true, else set it to data
    let results = data.results || data; //data is just a plain object, data.results is an array in an object
    if(Array.isArray(results)){
      for(let i = 0; i < results.length; i++){
        //console.log(results[i], "results")
        if(!results[i].text){
          results[i].text = "No Message"
        }
        let thePost = MessageView.render(results[i]);
        if(thePost){
          MessagesView.$chats.append(thePost);
        }
        //MessagesView.$chats.append(thePost);
      }
    }else{
      let thePost = _.template(
        "<div class='post-container'>" +
          `<div class='username onclick="function(){Friends.initialize()}"'>${results.username}</div>` +
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