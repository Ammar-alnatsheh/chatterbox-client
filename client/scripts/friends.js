var Friends = {

  _friendsList: new Set(),

  toggleStatus: function(friend) {
    if( !Friends.isFriend(friend) ) {
      Friends._friendsList.add(friend);

    } else {
      Friends._friendsList.delete(friend);
    }

    MessagesView.render();

  },

  isFriend: function(friend){
    return Friends._friendsList.has(friend);
  }

};
