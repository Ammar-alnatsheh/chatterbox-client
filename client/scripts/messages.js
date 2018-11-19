var Messages = {

  _data: {},

  get: function() {
      return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  update: function(messages, callback = ()=>{}) {

    for (var i = 0; i < messages.length; i++) {
      Messages._data[messages[i].objectId] = Messages.clean(messages[i]);
    }

    // only invoke the callback if something changed
    var length = Object.keys(Messages._data).length;
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
    // after update the data show it on the screen
    MessagesView.render();
  },

  clean: function(message) {
    // make sure every message hase a value for each key or replace with ''
    // to keep the program running somooth
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    message.updatedAt = message.updatedAt || new Date();
    return message;
  }

};
