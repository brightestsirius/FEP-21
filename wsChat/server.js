const WebSocket = require(`ws`);
const server = new WebSocket.Server({ port: 3000 });

const messagesList = [
  {
    id: 0,
    value: `Hello!`,
  },
];

server.on(`connection`, (socket) => {
  console.log(`🟢 Connection established on Server-side`);

  socket.on(`close`, () => {
    console.log(`🔴 Connection closed on Server-side`);
    socket.close();
  });

  socket.send(
    JSON.stringify({
      action: `get`,
      payload: messagesList,
    })
  );

  socket.on(`message`, (msg) => {
    msg = JSON.parse(msg.toString());

    switch (msg.action) {
      case `add`:
        let newMsgId = messagesList.length
          ? messagesList[messagesList.length - 1].id + 1
          : 1;
        msg.payload.id = newMsgId;

        messagesList.push(msg.payload);
        break;
      case `delete`:
        let msgIndex = messagesList.findIndex(
          (item) => item.id === msg.payload.id
        );
        messagesList.splice(msgIndex, 1);
        break;
    }

    server.clients.forEach((client) => {
      client.send(JSON.stringify(msg));
    });

    console.log(messagesList);
  });
});