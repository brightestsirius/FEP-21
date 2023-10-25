const chatStatus = document.querySelector(`#chatStatus`);
const chatForm = document.querySelector(`#chatForm`);
const chatMessages = document.querySelector(`#chatMessages`);
const chatClose = document.querySelector(`#chatClose`);
const chatRestart = document.querySelector(`#chatRestart`);

let socket;

const createSocket = () => {
  socket = new WebSocket(`ws://localhost:3000`);

  socket.addEventListener(`open`, () => {
    chatStatus.innerHTML = `🟢 Online`;
  });

  socket.addEventListener(`close`, () => {
    chatStatus.innerHTML = `🔴 Offline`;
    disableElements();
  });

  socket.addEventListener(`message`, (msg) => {
    msg = JSON.parse(msg.data);

    switch (msg.action) {
      case `GET`:
        renderMessagesList(msg.payload);
        break;
      case `POST`:
        renderMessage(msg.payload);
        break;
      case `DELETE`:
        deleteMessage(msg.payload);
        break;
    }

    console.log(msg);
  });
};

// {
//     action: `POST`/`DELETE`,
//     payload: {}
// }

const disableElements = () => {
  const elements = document.querySelectorAll(`button:not(#chatRestart), input`);
  elements.forEach((element) => {
    element.setAttribute(`disabled`, true);
  });
};

const enableElements = () => {
    const elements = document.querySelectorAll(`button:not(#chatRestart), input`);
    elements.forEach((element) => {
      element.removeAttribute(`disabled`);
    });
  };

const clearMessagesList = () => chatMessages.innerHTML = ``;

chatForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  let messageValue = e.target.querySelector(`input[data-name="message"]`).value;

  let newMsg = {
    action: `POST`,
    payload: {
      value: messageValue,
    },
  };

  socket.send(JSON.stringify(newMsg));
  e.target.reset();
});

const renderMessage = (msg) => {
  let li = document.createElement(`li`);
  li.innerHTML = msg.value;
  li.dataset.id = msg.id;

  let deleteBtn = document.createElement(`button`);
  deleteBtn.innerHTML = `Delete`;
  deleteBtn.addEventListener(`click`, () => {
    socket.send(
      JSON.stringify({
        action: `DELETE`,
        payload: {
          id: msg.id,
        },
      })
    );
  });

  li.append(deleteBtn);

  chatMessages.append(li);
};

const deleteMessage = ({ id }) => {
  let li = chatMessages.querySelector(`li[data-id="${id}"]`);
  li && li.remove();
};

const renderMessagesList = (list) =>
  list.forEach((item) => renderMessage(item));

chatClose.addEventListener(`click`, () => {
  socket.close();
});

chatRestart.addEventListener(`click`, () => {
    clearMessagesList();
    enableElements();
    createSocket();
});

createSocket();