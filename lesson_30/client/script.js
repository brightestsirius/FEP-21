import {x, country} from './constants.js';

console.log(x);
console.log(country);

const btns = document.querySelectorAll(`button.example`);
console.log(btns);

btns.forEach(btn => btn.style.background = `red`);

// JQuery
const btnsJQuery = $(`button.example`);
console.log(btnsJQuery);

btnsJQuery.css(`background`, `green`);

btnsJQuery.each((index,item) => {
    if(index === 0) $(item).css(`color`, `black`);
    if(index === 1) $(item).css(`color`, `white`);
})