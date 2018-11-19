var Rooms = {

  _list: new Set(),

  update: function() {
    Messages.get().forEach(function(message) {
      Rooms._list.add(message.roomname);
    });
    // update the Rooms list
    RoomsView.render();

  },

  get: function() {
    return [...Rooms._list.values()].sort();

  },

  add: function(room) {
    Rooms._list.add(room);
    // update the Rooms list
    RoomsView.render();

  }

};
