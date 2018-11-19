var Rooms = {

  _list: new Set(),
  _selectedRoom: '',

  initialize: function() {
    Rooms._selectedRoom = '-- All Rooms --';
    Rooms.add('-- All Rooms --');
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
    // update the Rooms list
    RoomsView.render();

  },

  getSelectedRoom: function() {
    return Rooms._selectedRoom;

  },

  setSelectedRoom: function(room) {
    Rooms._selectedRoom = room;
    console.log(Rooms._selectedRoom);

  }

};
