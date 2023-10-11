const API = `https://jsonplaceholder.typicode.com`;

const listContainer = document.querySelector(`#listContainer`);

// GET
const getData = (path) =>
  fetch(API + `/${path}`)
    .then((data) => {
        if (data.ok) return data.json();
        else return Promise.reject(data.status);
    })

// DELETE
const deleteItem = (path, id) => 
    fetch(API+`/${path}/${id}`, {method: `DELETE`})
        .then((data) => {
            if (data.ok) return data.json();
            else return Promise.reject(data.status);
        })

// PUT
const changeItemPut = (path, id, item) => 
    fetch(
        API+`/${path}/${id}`, 
        {
            method: `PUT`,
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json"
            }
        }
    )
    .then((data) => {
        if (data.ok) return data.json();
        else return Promise.reject(data.status);
    })

// PATCH
const changeItemPatch = (path, id, item) => 
    fetch(
        API+`/${path}/${id}`, 
        {
            method: `PATCH`,
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json"
            }
        }
    )
    .then((data) => {
        if (data.ok) return data.json();
        else return Promise.reject(data.status);
    })

// POST
const addItem = (path, item) => 
    fetch(
        API+`/${path}`, 
        {
            method: `POST`,
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json"
            }
        }
    )
    .then((data) => {
        if (data.ok) return data.json();
        else return Promise.reject(data.status);
    })

const createList = (tag=`ol`, id, container) => {
    const list = document.createElement(tag);
    list.id = id;

    container.append(list);

    return list;
}

const createListItem = () => document.createElement(`li`);

const createDeleteBtn = (item, li) => {
    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete`;

    deleteBtn.addEventListener(`click`, () => {
        deleteItem(`todos`, item.id)
            .then(() => li.remove())
            .catch(err => console.log(`catch: ${err}`))
    })

    return deleteBtn;
}

const createCompletedCheckbox = (item, li) => {
    const completedCheckbox = document.createElement(`input`);
    completedCheckbox.type = `checkbox`;
    completedCheckbox.checked = item.completed;

    completedCheckbox.addEventListener(`change`, () => {
        // changeItemPut(`todos`, item.id, {...item, completed: !item.completed})
        changeItemPatch(`todos`, item.id, {completed: !item.completed})
            .then(
                changedItem => {
                    item = changedItem;

                    if(changedItem.completed === true){
                        li.className = `completed`;
                    } else{
                        li.className = `non-completed`;
                    }
                }  
            )
            .catch(err => console.log(err));
    })

    return completedCheckbox;
}

const createItem = (item) => {
    const li = createListItem();
    li.innerHTML = item.title;

    const completedCheckbox = createCompletedCheckbox(item, li);
    li.append(completedCheckbox);

    const deleteBtn = createDeleteBtn(item, li);
    li.append(deleteBtn);

    return li;
}

const renderTodos = () => {
    getData(`todos`)
        .then(todos => {

            const ul = createList(`ul`, `todosList`, listContainer);

            todos
                .slice(0,10)
                .forEach(item => {
                    const li = createItem(item);
                    ul.append(li);
                })

        })
        .catch(err => console.log(`in catch: ${err}`));
};

renderTodos();

// renderListFormUsers
const renderListFormUsers = (select) => {
    getData(`users`)
        .then(
            users => {
                users
                    .forEach(user => {
                        const option = document.createElement(`option`);
                        option.innerHTML = `User #${user.id}`;
                        option.value = user.id;

                        select.append(option);
                    })
            }
        )
        .catch(err => console.log(`in catch: ${err}`))
}

// FORM
const listForm = document.querySelector(`#listForm`);

if(listForm){
    const listFormTitle = listForm.querySelector(`input[data-name="title"]`);
    const listFormCompleted = listForm.querySelector(`input[data-name="completed"]`);
    const listFormUser = listForm.querySelector(`select[data-name="user"]`);

    renderListFormUsers(listFormUser);

    listForm.addEventListener(`submit`, e => {
        e.preventDefault();

        let todo = {
            title: listFormTitle.value,
            completed: listFormCompleted.checked,
            userId: listFormUser.value
        }

        addItem(`todos`, todo)
            .then(
                newItem => {
                    const li = createItem(newItem);

                    let ul = document.querySelector(`#todosList`);
                    if(!ul) ul = createList(`ul`, `todosList`, listContainer);

                    ul.append(li);
                }
            )
            .catch(err => console.log(`in catch: ${err}`));
    })
}