var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username" onclick="Friends.toggleStatus(event)"><%= username %></div>
        <div class="messageText"><%= text %></div>
      </div>

    `)

};

//var message = {
//   username: 'Mel Brooks',
//   text: 'It\'s good to be the king',
//   roomname: 'lobby'
// };

//var compiled = _.template("hello: <%= name %>");