const WebSocket = require(`ws`);
const server = new WebSocket.Server({ port: 3000 });

const messagesList = [];

server.on(`connection`, (socket) => {
  console.log(`🟢 Connection established on Server-side`);

  socket.on(`close`, () => {
    console.log(`🔴 Connection closed on Server-side`);
    socket.close();
  })

  socket.send(JSON.stringify({
    action: `GET`,
    payload: messagesList
  }))

  socket.on(`message`, (msg) => {
    msg = JSON.parse(msg.toString());
    console.log(msg);

    switch(msg.action){
        case `POST`:
            let newMsgId =
                messagesList.length
                    ? messagesList[messagesList.length - 1].id + 1
                    : 1;

            let newMsg = msg.payload; // { value: 'First' }
            newMsg.id = newMsgId; // { value: 'First', id: 1 }

            messagesList.push(newMsg);

            msg.payload = newMsg;
            break;
        case `DELETE`:
            let msgIndex = messagesList.findIndex(item => item.id === msg.payload.id);
            messagesList.splice(msgIndex,1);
    }

    // socket.send(JSON.stringify(msg));
    server.clients.forEach(client => {
        client.send(JSON.stringify(msg));
    })

    console.log(messagesList);
  });
});
