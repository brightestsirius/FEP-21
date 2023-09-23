// events

// click events
//     onclick

// const block = document.querySelector(`#block`);
// block.style.left = 0;
// block.style.top = 0;

// const handleEvent = (event) => console.log(event.type);

// block.addEventListener(`click`, handleEvent);

// //     ondblclick
// block.addEventListener(`dblclick`, handleEvent);

// //     oncontextmenu
// block.addEventListener(`contextmenu`, handleEvent);

// //     onmousedown
// block.addEventListener(`mousedown`, handleEvent);

// //     onmouseup
// block.addEventListener(`mouseup`, handleEvent);

// document.addEventListener(`mousedown`, handleEvent);

// let xStart, yStart;

// const handleMouseDown = (event) => {
//     xStart = event.clientX;
//     yStart = event.clientY;

//     console.log(xStart, yStart);

//     document.addEventListener(`mouseup`, handleMouseUp);
// }

// const handleMouseUp = (event) => {
//     let xEnd = event.clientX;
//     let yEnd = event.clientY;

//     let diffX = xEnd-xStart;
//     let diffY = yEnd-yStart;

//     block.style.left = parseInt(block.style.left) + diffX + `px`;
//     block.style.top = parseInt(block.style.top) + diffY + `px`;

//     console.log(xEnd, yEnd);
//     console.log(diffX, diffY);

//     document.removeEventListener(`mouseup`, handleMouseUp);
// }

// block.addEventListener(`mousedown`, handleMouseDown);

// const block = document.querySelector(`#block`);

// const handleEvent = (event) => console.log(event.type);

// mouse events
//     onmouseover

// block.addEventListener(`mouseover`, handleEvent);

//     onmouseout
// block.addEventListener(`mouseout`, handleEvent);

//     onmouseenter
//     onmouseleave
//     onmousemove

// block.addEventListener(`mouseenter`, handleEvent);
// block.addEventListener(`mouseleave`, handleEvent);
// block.addEventListener(`mousemove`, handleEvent);

// const handleKeyboardEvent = event => console.log(event);

// keyboard events
//     onkeypress

// document.addEventListener(`keypress`, handleKeyboardEvent);

//     onkeydown
// document.addEventListener(`keydown`, handleKeyboardEvent);

//     onkeyup
// document.addEventListener(`keyup`, handleKeyboardEvent);

// Example

// const STEP = 20;

// const block = document.querySelector(`#block`);
// block.style.top = 0;
// block.style.left = 0;

// const KEYS = {
//     ArrowDown: (block) => {
//         block.style.top = parseInt(block.style.top) + STEP + `px`;
//     },
//     ArrowRight: (block) => {
//         block.style.left = parseInt(block.style.left) + STEP + `px`;
//     },
//     ArrowLeft: (block) => {
//         block.style.left = parseInt(block.style.left) - STEP + `px`;
//     },
//     ArrowUp: (block) => {
//         block.style.top = parseInt(block.style.top) - STEP + `px`;
//     },
//     KeyQ: () => {
//         alert(`Й`);
//     }
// }

// const blockMoving = (event) => {
//     const key = event.code;
//     console.log(event.code);

//     KEYS[key] && KEYS[key](block);
// }

// document.addEventListener(`keydown`, blockMoving);

// Bubbling and capturing

// const block = document.querySelector(`#block`);
// const circle = document.querySelector(`#circle`);
// const heading = document.querySelector(`#heading`);

// const clickStatistics = (event) => console.log(`click on ${event.target.tagName} element`);

// const allElements = document.querySelectorAll(`body, body *`);
// console.log(allElements);
// allElements.forEach(el => {
//     el.addEventListener(`click`, clickStatistics)
// })

// block.addEventListener(`click`, (event) => {
//     event.stopPropagation();
//     console.log(`click on block`);
// })

// circle.addEventListener(`click`, (event) => {
//     event.stopPropagation();
//     console.log(`click on circle`);
// })

// heading.addEventListener(`click`, (event) => {
//     event.stopPropagation();

//     console.log(`click on heading`);
// })

// stopPropagation

// const container = document.querySelector(`#container`);

// setTimeout(() => {
//     let containerHtml = container.innerHTML;

//     container.innerHTML = `<div class="block" id="block">
//         <div class="circle" id="circle">
//             <h1>Hello</h1>
//         </div>
//     </div>` + containerHtml;

//     const block = document.querySelector(`#block`);
//     block.addEventListener(`click`, () => console.log(`click on block`));

//     const circle = document.querySelector(`#circle`);
//     circle.addEventListener(`click`, (event) => {
//         event.stopPropagation();
//         console.log(`click on circle`);
//     });
// }, 1500);

// const container = document.querySelector(`#container`);

// const renderBlock = () => {
//     const block = `<div class="block" id="block"></div>`;
//     return block;
// }

// const renderCircle = () => {
//     const circle = `<div class="circle" id="circle"></div>`;
//     return circle;
// }

// const renderHeading = () => {
//     const heading = `<h1>Hello</h1>`;
//     return heading;
// }

// setTimeout(() => {
//     container.innerHTML += renderBlock();

//     const block = document.querySelector(`#block`);
//     block.addEventListener(`click`, () => console.log(`click on block`));

//     block.innerHTML = renderCircle();
//     const circle = document.querySelector(`#circle`);
//     circle.addEventListener(`click`, (event) => {
//         event.stopPropagation();
//         console.log(`click on circle`);
//     });

//     circle.innerHTML = renderHeading();
// }, 1500);

// createElement

// const container = document.querySelector(`#container`);

// const renderBlock = () => {
//   let block = document.createElement(`div`);
//   block.className = "block special";
//   block.addEventListener(`click`, () => console.log(`click on block`));

//   return block;
// };

// const renderCircle = () => {
//   let circle = document.createElement(`div`);
//   circle.className = "circle";
//   circle.id = `circle`;
//   circle.addEventListener(`click`, (event) => {
//     event.stopPropagation();

//     let targetEl = event.target;
//     console.log(targetEl);

//     if (targetEl.id === `circle`) {
//       console.log(`click on circle`);
//     }
//   });

//   return circle;
// };

// const renderHeading = () => {
//   let heading = document.createElement(`h1`);
//   heading.innerHTML = `Hello`;
//   heading.dataset.dog = `Patron`;

//   return heading;
// };

// setTimeout(() => {
//   let block = renderBlock();
//   let circle = renderCircle();
//   let heading = renderHeading();

//   circle.append(heading);
//   block.append(circle);
//   container.append(block);
// }, 1500);

// append

// Example

const container = document.querySelector(`#container`);

const animals = [
    {
        type: `dog`,
        name: `Patron`,
        ukrainian: true
    },
    {
        type: `cat`,
        name: `Alisa`,
        ukrainian: false
    },
    {
        type: `lion`,
        name: `Simba`,
        ukrainian: true
    }
]

const createTable = (list) => {
    list = JSON.parse(JSON.stringify(list));
    console.log(list);

    const table = document.createElement(`table`);
    table.className = `table__animals`

    const tbody = document.createElement(`tbody`);

    list
        .map(item => {
            let tr = document.createElement(`tr`);
            tr.addEventListener(`click`, () => {
                tr.classList.toggle(`active`);
            })

            let td_first = document.createElement(`td`);
            td_first.innerHTML = item.name;
            td_first.addEventListener(`click`, (event) => {
                event.stopPropagation();
                console.log(`Click on ${item.name} name`);
            })
            // <td>Patron</td>

            let td_second = document.createElement(`td`);
            td_second.innerHTML = item.type;

            let td_third = document.createElement(`td`);
            td_third.innerHTML = item.ukrainian;

            let td_fourth = document.createElement(`td`);

            let btnDelete = document.createElement(`button`);
            btnDelete.innerHTML = `Delete`;
            btnDelete.addEventListener(`click`, event => {
                event.stopPropagation();
                tr.remove();
            })

            td_fourth.append(btnDelete);

            tr.append(td_first, td_second, td_third, td_fourth);

            return tr;
        })
        .forEach(tr => tbody.append(tr));

    table.append(tbody);
    return table;
}

setTimeout(() => {
    let createdTable = createTable(animals);
    container.append(createdTable);
}, 1500)


// preventDeafault()

// call/apply/bind

// form

// Drag & Drop
