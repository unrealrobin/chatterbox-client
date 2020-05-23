var Friends = {
  $username: $('.username'),
  storage : [],

  initialize: function(event){

    //check if the events.target.textcont is in our storage array
    if (Friends.storage.indexOf(event.target.textContent) === -1) {
      //if not add it to the array
      Friends.storage.push(event.target.textContent)
    }
      //else disregard
    // Friends.storage.push(event.target.textContent);
    console.log(Friends.storage);
    Friends.renderFriends();

  },

  toggleStatus: function(event){
    Friends.initialize(event);
    console.log('Friend Status Toggled');

  },

  renderFriends: function(){
    // console.log($('.username').length)
    //selects the chat dom element
    for (var i = 0; i < $('.username').length; i++) {
      // console.log(Friends.storage.indexOf($('.username')[i].textContent) != -1)
      if(Friends.storage.indexOf($('.username')[i].textContent) != -1) {
        // console.log('this is your friend')
        $('.username').eq(i).addClass('friend');


      }
    }
      //goes through ever username childelement
      //if the username is in our friends list
      //add the bold and color css styles to that element
  }

};