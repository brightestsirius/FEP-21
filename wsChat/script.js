let socket;

const chatStatus = document.querySelector(`#chatStatus`);

const chatForm = document.querySelector(`#chatForm`);
const chatMessages = document.querySelector(`#chatMessages`);

const chatClose = document.querySelector(`#chatClose`);
const chatRestart = document.querySelector(`#chatRestart`);

const disableElements = () => {
  let elements = document.querySelectorAll("*:not(#chatRestart)");
  elements.forEach((item) => item.setAttribute(`disabled`, true));
};

const enableElements = () => {
  let elements = document.querySelectorAll("*:not(#chatRestart)");
  elements.forEach((item) => item.removeAttribute(`disabled`));
};

const clearMsgList = () => (chatMessages.innerHTML = ``);

const startConnection = () => {
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
    console.log(msg);

    switch (msg.action) {
      case `get`:
        renderMsgList(msg.payload);
        break;
      case `add`:
        renderMsg(msg.payload);
        break;
      case `delete`:
        deleteMsg(msg.payload);
        break;
    }
  });
};

const renderMsg = (msg) => {
  const li = document.createElement(`li`);
  li.innerHTML = msg.value;
  li.dataset.id = msg.id;

  if (msg.id) {
    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete`;
    deleteBtn.addEventListener(`click`, () => {
      socket.send(
        JSON.stringify({
          action: `delete`,
          payload: msg,
        })
      );
    });

    li.append(deleteBtn);
  }

  chatMessages.append(li);
};

const deleteMsg = (msg) => {
  let li = chatMessages.querySelector(`li[data-id="${msg.id}"]`);
  li && li.remove();
};

const renderMsgList = (list) => list.forEach((msg) => renderMsg(msg));

chatForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  let msgValue = e.target.querySelector(`input[data-name="message"]`).value;

  socket.send(
    JSON.stringify({
      action: `add`,
      payload: {
        value: msgValue,
      },
    })
  );
  e.target.reset();
});

chatClose.addEventListener(`click`, () => {
  socket.close();
});

chatRestart.addEventListener(`click`, () => {
  startConnection();
  clearMsgList();
  enableElements();
});

startConnection();
