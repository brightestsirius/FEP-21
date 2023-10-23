const WebSocket = require(`ws`);
const server = new WebSocket.Server({port: 3000});

server.on(`connection`, (socket) => {
    console.log(`🟢 Connection established on Server-side.`);
    socket.send(JSON.stringify(`Hello, from Server!`));

    socket.on(`message`, (msg) => {
        user = JSON.parse(msg.toString());
        console.log(user);

        // socket.send(`Hello, ${msg}!`);
        server.clients.forEach(client => {
            client.send(JSON.stringify(user));
        })
    })

    // setTimeout(() => {
    //     socket.close();
    // }, 4000);

    socket.on(`close`, () => {
        console.log(`🔴 Connection closed on Server-side.`);
    })
})