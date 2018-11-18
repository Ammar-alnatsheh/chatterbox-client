var MessageView = {

  render: _.template(`
      <!--
      <div class="chat">
        <div
          class="username"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div><%- text %></div>
          </div>
        <div></div>
      </div>
      -->
    `)

};
