// class

// const block = document.querySelector(`#block`);
// console.dir(block);

// console.log(block.classList);

// setTimeout(() => {
//     block.classList.add(`active`);
// }, 1000);

// setTimeout(() => {
//     console.log(block.classList.contains(`active`)); // true
// }, 1500);

// setTimeout(() => {
//     block.classList.remove(`active`);
// }, 2000);

// setTimeout(() => {
//     console.log(block.classList.contains(`active`)); // false
// }, 2500);

// function blockClick(){
//     // if(block.classList.contains(`active`)){
//     //     block.classList.remove(`active`);
//     // } else{
//     //     block.classList.add(`active`);
//     // }

//     block.classList.toggle(`active`);
// }

// block.onclick = blockClick;

// const burgerMenu = document.querySelector(`#burgerMenu`);

// const activateBurgerMenu = () => {
//     burgerMenu.classList.toggle(`active`);
// }

// burgerMenu.onclick = activateBurgerMenu;

// attributes
// dataset

// console.log(block.attributes);

// console.log(block.getAttribute(`data-product`));

// block.setAttribute(`data-animal`, `cat`);

// console.log(block.dataset);
// console.log(block.dataset.dogName);

// block.dataset.human = `Anton`;

// const firstFunc = () => {
//     console.log(`first click`);
// };

// const secondFunc = () => {
//     console.log(`second click`);
// }

// block.onclick = () => {
//     firstFunc();
//     secondFunc();
// }

// remove

// setTimeout(() => {
//     block.remove();
//     document.querySelector(`h1`).remove();
// }, 1500)

// setTimeout(() => {
//     document.body.append(block);
//     document.body.append(document.querySelector(`h1`));
// }, 3000)

// events

// click events
//     onclick
//     ondblclick
//     oncontextmenu
//     onmousedown
//     onmouseup

// block.onclick = function(e){
//     console.log(e);
   
//     // if(e.altKey) block.classList.add(`alt`);

//     console.log(e.target);

//     e.target.classList.add('touched');
// }

// const eventTracker = (e, time) => {
//     console.log(time, e.target);
// }

// document.onclick = e => eventTracker(e, new Date().getMilliseconds());

// addEventListener/removeEventListener

// const eventName = (event) => console.log(event.type);
// const secondFunc = (event) => console.log(`Second func`, event.target);

// block.addEventListener(`click`, eventName);
// block.addEventListener(`click`, secondFunc);
// block.addEventListener(`click`, ()=>console.log(`third func`));

// const circle = document.querySelector(`#circle`);
// console.dir(circle);

// function firstClick(event){
//     console.log(event);
//     console.log(`first func: clientX=${event.clientX}px; clientY=${event.clientY}px`);
//     console.log(event.target);
// }

// function secondFunc(){
//     console.log(`secondFunc`);
// }

// circle
//     .addEventListener(
//         `click`, 
//         firstClick
//     )

// circle
//     .addEventListener(`click`, secondFunc)

// circle
//     .addEventListener(`click`, (event) => console.log(`third func ${event.type}`));

// document.createElement

const bookBtn = document.querySelector(`#bookBtn`);
const hillelBtn = document.querySelector(`#hillelBtn`);

console.dir(bookBtn);
console.dir(hillelBtn);

const secondBookFunc = () => console.log(`secondBookFunc`);
const secondHillelFunc = () => console.log(`secondHillelFunc`);

const urlRedirectBook = (event) => {
    window.open(event.target.dataset.href, `_blank`);
    event.target.removeEventListener(`click`, urlRedirectBook);
    event.target.addEventListener(`click`, secondBookFunc);
}

const urlRedirectHillel = (event) => {
    window.open(event.target.dataset.href, `_blank`);
    event.target.removeEventListener(`click`, urlRedirectHillel);
    event.target.addEventListener(`click`, secondHillelFunc);
}

bookBtn.addEventListener(`click`, urlRedirectBook);
hillelBtn.addEventListener(`click`, urlRedirectHillel);

// mouse events
//     onmouseover
//     onmouseout
//     onmouseenter
//     onmouseleave
//     onmousemove

// Drag & Drop

// keyboard events
//     onkeypress
//     onkeydown
//     onkeyup

// Bubbling and capturing

// stopPropagation

// preventDeafault()

// call/apply/bind