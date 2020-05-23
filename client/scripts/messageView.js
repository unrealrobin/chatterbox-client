var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="message-text"><%= text %></div>
        <div class="roomname"><%= roomname %></div>
      </div>

    `)

};

//var message = {
//   username: 'Mel Brooks',
//   text: 'It\'s good to be the king',
//   roomname: 'lobby'
// };

//var compiled = _.template("hello: <%= name %>");