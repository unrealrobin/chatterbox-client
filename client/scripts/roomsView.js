var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(data) {
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
        // console.log('in loop')
        //create underbar template for option tags for each item in array

          //append each item to the  select tag
          $('select').append(`<option>${key}</option>`);
      }
    }
  },

  render: function() {
  }

};
