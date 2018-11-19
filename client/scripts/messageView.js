var MessageView = {
  // give each message a the html style to be displayed and sanetize it
  render: _.template(`
      <div class="chat">
          <div class="username">
            <%- username %>
          </div>
          <div class="text">
            <%- text %>
          </div>
          <div class="time"> Update at:
            <%- new Date(updatedAt).toLocaleTimeString('en-US') %>
          </div>
      </div>
    `)

}
