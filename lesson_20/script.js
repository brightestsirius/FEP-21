// html

// const block = document.querySelector(`.block`);
// block.innerHTML = `<div class="circle"><h3>Hello!</h3></div>`;
// console.dir(block);

// let blocks = document.querySelectorAll(`.block`); // NodeList
// console.log(blocks);

// blocks = [...blocks]; // Array

// blocks
//     .filter(block => {
//         return block.className === `block special`;
//     })
//     .map(
//         block => {
//             return block.innerHTML = `<div class="circle">
//                 <h3>Hello!</h3>
//             </div>`;
//         }
//     );

// console.log(blocks);

// let blocks = document.querySelectorAll(`.block.special`);
// console.log(blocks);

// blocks.forEach(block => block.innerHTML = `Hello!`);

// let blocksOdd = document.querySelectorAll(`.block:nth-child(odd)`);
// blocksOdd.forEach(block => block.innerHTML = `Hello!`);

// let blocksEven = document.querySelectorAll(`.block:nth-child(even)`);
// blocksEven.forEach(block => block.innerHTML = `Hello!`);

// let blocksParagraphOdd = document.querySelectorAll(`.block:nth-child(odd) p`);
// blocksParagraphOdd.forEach(paragraph => paragraph.innerHTML += `!!!`);

// const block = document.querySelector(`#block`); // null
// if(block){
//     block.innerHTML = `Hello`;
//     console.dir(block);
// }

// const circle = document.querySelector(`#circle`);
// console.dir(circle);

// circle.style.backgroundColor = `red`;
// circle.style.borderRadius = `30%`;
// circle.style.border = `3px dashed black`;

// circle.style.margin = parseInt(circle.style.margin) + 5 + `px`;

// style

// const movingBlock = document.querySelector(`#movingBlock`);
// movingBlock.style.left = 0;

// const STEP = 50;

// const movingRight = setInterval(() => {
//     const bodyWidth = document.body.clientWidth;
//     let blockRightPosition = movingBlock.offsetLeft + STEP + movingBlock.clientWidth;
    
//     console.log(`blockRightPosition: ${blockRightPosition}\nbodyWidth: ${bodyWidth}`);

//     if(blockRightPosition > bodyWidth) {
//         clearInterval(movingRight);
//         clearInterval(movingUp);
//     }
//     else{
//         let nextLeftPosition = parseInt(movingBlock.style.left) + STEP + `px`;
//         movingBlock.style.left = nextLeftPosition;
//     }
    
// }, 1000)

// const STEP_UP = 15;

// const blockMoveUp = () => {
//     movingBlock.style.bottom = `15px`;
//     setTimeout(() => {
//         movingBlock.style.bottom = 0;
//     }, 500);
// }

// const movingUp = setInterval(blockMoveUp, 1000);

// function getRandomIntInclusive(min=0, max=255) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const randomColor = () => {
//     let first = getRandomIntInclusive();
//     let second = getRandomIntInclusive();
//     let third = getRandomIntInclusive();

//     return `rgb(${first}, ${second}, ${third})`;
// }

// setInterval(() => {
//     movingBlock.style.background = randomColor();
// }, 1000)

const bodyHeight = document.body.clientHeight;
const bodyWidth= document.body.clientWidth;

const movingBlock = document.querySelector(`#movingBlock`);
movingBlock.style.top = 0;
movingBlock.style.left = 0;

const maxBlockTop = bodyHeight-movingBlock.clientHeight;
const maxBlockLeft = bodyWidth-movingBlock.clientWidth;

const moveBlock = (top, left) => {
    movingBlock.style.top = parseInt(movingBlock.style.top) + top + `px`;
    movingBlock.style.left = parseInt(movingBlock.style.left) + left + `px`;
}

// class

// attributes/setAttribute
// dataset
// remove
// events

// click events
//     onclick
//     ondblclick
//     oncontextmenu
//     onmousedown
//     onmouseup

// addEventListener/removeEventListener
// document.createElement

// mouse events
//     onmouseover
//     onmouseout
//     onmouseenter
//     onmouseleave
//     onmousemove

// keyboard events
//     onkeypress
//     onkeydown
//     onkeyup

// Bubbling and capturing

// stopPropagation

// preventDeafault()
