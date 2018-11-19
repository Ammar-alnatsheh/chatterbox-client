var MessageView = {
  // give each message a the html style to be displayed and sanetize it
  render: _.template(`
    <div class="chat">
      <div class="username" id="<%= Friends.isFriend(username) ? 'friend' : '' %>">
        <%- username %>
      </div>
      <div><%- text %></div>
    </div>
    `)

}
