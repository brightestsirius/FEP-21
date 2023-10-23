let socket;

const chatStatus = document.querySelector(`#chatStatus`);

const chatForm = document.querySelector(`#chatForm`);

const chatMessages = document.querySelector(`#chatMessages`);

const chatClose = document.querySelector(`#chatClose`);

const chatRestart = document.querySelector(`#chatRestart`);

const createConnection = () => {
  chatMessages.innerHTML = ``;
  socket = new WebSocket(`ws://localhost:3000`);

  socket.addEventListener(`open`, () => {
    chatStatus.innerHTML = `🟢 Online`;
    enableElements();
  });

  socket.addEventListener(`close`, () => {
    chatStatus.innerHTML = `🔴 Offline`;
    disableElements();
  });

  socket.addEventListener(`message`, ({ data: msg }) => {
    msg = JSON.parse(msg);

    switch (msg.action) {
      case `get`:
        renderList(msg.payload);
        break;
      case `add`:
        createListItem(msg.payload);
        break;
      case `delete`:
        deleteListItem(msg.payload);
        break;
    }
  });
};

const createListItem = (item) => {
  const li = document.createElement(`li`);
  li.innerHTML = item.value;
  li.dataset.id = item.id;

  let deleteBtn = document.createElement(`button`);
  deleteBtn.innerHTML = `Delete`;
  deleteBtn.addEventListener(`click`, () => {
    socket.send(
      JSON.stringify({
        action: `delete`,
        payload: item,
      })
    );
  });

  li.append(deleteBtn);

  chatMessages.append(li);
};

const deleteListItem = (item) => {
  const li = chatMessages.querySelector(`li[data-id="${item.id}"]`);
  li.remove();
};

const disableElements = () => {
  let elements = document.querySelectorAll(`*:not(#chatRestart)`);
  elements.forEach((element) => element.setAttribute(`disabled`, true));
};

const enableElements = () => {
  let elements = document.querySelectorAll(`*`);
  elements.forEach((element) => element.removeAttribute(`disabled`));
};

const renderList = (list) => list.forEach((item) => createListItem(item));

chatForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  let inputMsg = e.target.querySelector(`input[data-name="message"]`);

  let msg = {
    value: inputMsg.value,
  };

  socket.send(
    JSON.stringify({
      action: `add`,
      payload: msg,
    })
  );

  chatForm.reset();
});

chatClose.addEventListener(`click`, () => {
  socket.close();
});

createConnection();
chatRestart.addEventListener(`click`, createConnection);
