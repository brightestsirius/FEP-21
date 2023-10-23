// 🟢🔴
const socket = new WebSocket(`ws://localhost:3000`);

socket.addEventListener(`open`, () => {
    console.log(`🟢 Connection established on Client-side.`);
})

socket.addEventListener(`close`, () => {
    console.log(`🔴 Connection closed on Client-side.`);
})

socket.addEventListener(`message`, (msg) => {
    console.log(JSON.parse(msg.data));
})

// const sendMsg = document.querySelector(`#sendMsg`);
// sendMsg.addEventListener(`click`, () => {
//     socket.send(`Hello, from Client!`);
// })

const userForm = document.querySelector(`#userForm`);

userForm.addEventListener(`submit`, e => {
    e.preventDefault();

    let name = e.target.querySelector(`input[data-name]`).value;
    
    let user = {
        name,
        country: `Ukraine`
    }

    socket.send(JSON.stringify(user));
})

const closeConnection = document.querySelector(`#closeConnection`);

closeConnection.addEventListener(`click`, () => {
    socket.close();
})