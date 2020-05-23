var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function(data) {

    RoomsView.$select.on('change', function(event) {
      RoomsView.checkRoomName(event);
    })
    RoomsView.$button.on('click', function(){
      let roomName = prompt("Add Room Name");
      RoomsView.renderRoom(roomName);
    });

    if(data){
      //first we want to find all of the pre-created roomnames
      var possibleRooms = {"Test": "Test"};
        //loop through data.results
      for (var i = 0; i < data.results.length; i++) {
        //store unique roomnames in new array
        var room = data.results[i].roomname;
        if(possibleRooms[room] === undefined){
          possibleRooms[room] = room
        }
      }
      console.log(possibleRooms)
      //loop through new array
      for(var key in possibleRooms) {
          //append each item to the  select tag
          $('select').append(`<option>${key}</option>`);
      }
    }
  },

  renderRoom: function(roomNameFunc) {

      $('select').append(`<option>${roomNameFunc}</option>`);

  },

  checkRoomName: function(data){
    //check the selectors value
    // filter through the data
    //remove all the messages that arent in the right room

  }

};
