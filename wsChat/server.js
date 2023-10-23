const WebSocket = require(`ws`);
const server = new WebSocket.Server({ port: 3000 });

const listMessages = [];

server.on(`connection`, (socket) => {
  console.log(`🟢 Connection established`);

  socket.send(
    JSON.stringify({
      action: `get`,
      payload: listMessages,
    })
  );

  socket.on(`message`, (msg) => {
    msg = JSON.parse(msg.toString());

    switch (msg.action) {
      case `add`:
        let newMsgID = listMessages.length
          ? listMessages[listMessages.length - 1].id + 1
          : 1;
        let newMsg = {
          id: newMsgID,
          ...msg.payload,
        };

        listMessages.push(newMsg);
        server.clients.forEach((client) => {
          client.send(
            JSON.stringify({
              action: `add`,
              payload: newMsg,
            })
          );
        });

        break;
      case `delete`:
        let msgIndex = listMessages.findIndex(
          (item) => item.id === msg.payload.id
        );
        listMessages.splice(msgIndex, 1);

        server.clients.forEach((client) => {
          client.send(
            JSON.stringify({
              action: `delete`,
              payload: { id: msg.payload.id },
            })
          );
        });
    }

    console.log(listMessages);
  });

  socket.on(`close`, () => {
    socket.close();
    console.log(`🔴 Connection closed on Client-side`);
  });
});
