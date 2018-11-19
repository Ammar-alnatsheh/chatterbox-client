var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click(function() {
      var room = prompt('Please enter a room name');
      Rooms.add(room);
      RoomsView.$select.val(room);
    });

    RoomsView.$select.change(function() {
      Rooms.setSelectedRoom(RoomsView.$select.val());
    });

  },

  render: function() {
    RoomsView.$select.html('');
    var $rooms = Rooms.get();
    $rooms.forEach(function(room) {
      RoomsView.renderRoom(room);
    });

  },

  renderRoom: function(room) {
    var $option = $('<option>').val(room).text(room);
    RoomsView.$select.append($option);

  }

};
