var Messages = {

  _data: {},

  get: function() {
      return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  update: function(messages, callback = ()=>{}) {

    for (var i = 0; i < messages.length; i++) {
      Messages._data[messages[i].objectId] = messages[i];
    }

    // only invoke the callback if something changed
    var length = Object.keys(Messages._data).length;
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
    // after update the data show it on the screen
    MessagesView.render();
  }

};
