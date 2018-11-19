var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', function(event) {
      var username = event.currentTarget.textContent;
      Friends.toggleStatus(username);
    });
    
  },

  render: function() {
    // get all the messages from storage as array of object
    MessagesView.$chats.html('');
    if (Rooms.getSelectedRoom() === '') {
      Messages
        .get()
        .each(message => MessagesView.renderMessage(message));
    } else {
      Messages
        .get()
        .filter(message => message.roomname === Rooms.getSelectedRoom())
        .each(message => MessagesView.renderMessage(message));
    }

  },

  renderMessage: function(message) {
    // for a test purpose which will not give updatedAt value
    // add it so the program can run smooth
    if (!message.hasOwnProperty('updatedAt')){
      message.updatedAt = '';
    }

    // preper each message to be displayed on screen by calling MessageView on it
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  }

};
