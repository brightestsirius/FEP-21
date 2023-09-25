const calendarData = {
  days: [`Monday`, `Tuesday`, `Friday`],
  hours: {
    start: 10,
    end: 17,
  },
  todos: [
    {
      day: `Monday`,
      hour: 10,
      title: `First todo`,
    },
    {
      day: `Monday`,
      hour: 13,
      title: `Second todo`,
    },
    {
      day: `Tuesday`,
      hour: 12,
      title: `Third todo`,
    },
    {
      day: `Tuesday`,
      hour: 17,
      title: `Fourth todo`,
    },
    {
      day: `Friday`,
      hour: 14,
      title: `Fifth todo`,
    },
  ],
};

const calendarContainer = document.querySelector(`#calendarContainer`);

const createCalendarTable = (data) => {
  const table = document.createElement(`table`);

  const thead = document.createElement(`thead`);
  thead.innerHTML = `<tr>
        <th></th>
        ${data.days.map((item) => `<th>${item}</th>`).join(``)}
    </tr>`;

  const tbody = document.createElement(`tbody`);

  const hours = [];
  for(let i=data.hours.start; i<data.hours.end; i++) hours.push(i);

  let TRs = hours
    .forEach((hour) => {
        let tr = document.createElement(`tr`);
        tr.innerHTML = `<td>${hour}:00</td>`;

        data.days.forEach(day => {
            let td = document.createElement(`td`);

            let todo = data.todos.find(item => item.day===day && item.hour===hour);
            if(todo){
                let todoBlock = document.createElement(`div`);
                todoBlock.className = `todo`;
                todoBlock.addEventListener(`click`, () => {
                    todoBlock.classList.toggle(`active`);
                })
                
                let todoBlockTitle = document.createElement(`h3`);
                todoBlockTitle.innerHTML = todo.title;

                let todoBlockBtn = document.createElement(`button`);
                todoBlockBtn.innerHTML = `Delete`;
                todoBlockBtn.addEventListener(`click`, (e) => {
                    e.stopPropagation();
                    todoBlock.remove();
                });

                todoBlock.append(todoBlockTitle, todoBlockBtn);
                td.append(todoBlock);
            }

            tr.append(td);
        })

        tbody.append(tr);
    })

  table.append(thead, tbody);
  return table;
};

calendarContainer.append(createCalendarTable(calendarData));