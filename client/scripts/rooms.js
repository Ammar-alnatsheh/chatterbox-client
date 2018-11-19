var Rooms = {

  _list: new Set(),
  _selectedRoom: '',

  initialize: function() {
  },

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
    Rooms.setSelectedRoom(room);
    // update the Rooms list
    RoomsView.render();

  },

  getSelectedRoom: function() {
    return Rooms._selectedRoom;

  },

  setSelectedRoom: function(room) {
    Rooms._selectedRoom = room;
    MessagesView.render();

  }

};
