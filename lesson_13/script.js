// Imperative vs Declarative Programming

// forEach()

// let arr = [10,20,30];

// let forEachResult = arr.forEach((item) => document.write(`<p>${item}</p>`));
// console.log(forEachResult); // undefined

// const renderList = (list) => {
//     // list.forEach(item => document.write(`<p>${item}</p>`));

//     document.write(`<ul>
//         ${
//             list.forEach(item => `<li>${item}</li>`)
//         }
//     </ul>`);
// }

// renderList(arr);

// arr.forEach((item,index) => {
//     setTimeout(() => console.log(item), ++index*2000);
// })

// filter()

// let arr = [10,-10,20,-20,30,-30,`100`];

// let filterResult = arr.filter(
//     (item, index, arr) => {
//         return item>0 && typeof item === `number`;
//     }
// );

// let copyOfArray = arr.filter(item => item);

// console.log(arr);
// console.log(filterResult);
// console.log(copyOfArray);

// let fileterdArr = arr.filter(
//     (item) => item>0
// )

// console.log(fileterdArr);

// let filteredArr = [];
// for(let i=0; i<arr.length; i++){
//     arr[i]>0 && filteredArr.push(arr[i]);
// }
// console.log(filteredArr);

// map()

// let arr = [10,20,30,40,60,70];

// let result = [];
// for(let i=0; i<arr.length; i++){
//     result.push(arr[i]*2);
// }

// console.log(arr);
// console.log(result);

// let mapResult = arr.map((item, index, arr) => item*2);
// console.log(mapResult);

// [10,40,30,80,60,140]

// let modifiedArr = arr.map((item, index) => index%2 === 0 ? item : item*2);
// console.log(modifiedArr);

// let arr = [-10,20,true,`hello`,100,false];

// chain methods

// let filteredArr = arr.filter((item) => typeof item === `number` && item>0);
// let modifiedArr = filteredArr.map(item => item**2);
// modifiedArr.forEach(item => document.write(`<p>${item}</p>`));

// arr
//     .filter((item) => typeof item === `number` && item>0) // [20,100]
//     .map(item => item**2) // [400,10000]
//     .forEach(item => document.write(`<p>${item}</p>`));

// let filteredArr = arr.filter((item) => typeof item === `number` && item>0);

// filteredArr.forEach(item => document.write(`<p>${item}</p>`))

// filteredArr
//     .map(item => item**2)
//     .forEach(item => document.write(`<p>${item}</p>`))

// let arr = [-10,20,true,`hello`,100,false,50];

// very bad

// document.write(`<ul>`);

// arr
//     .filter((item) => typeof item === `number` && item>0) // [20,100]
//     .map(item => item**2) // [400,10000]
//     .forEach(item => document.write(`<li>${item}</li>`));

// document.write(`</ul>`);

// very good v.1

// let LIs = arr
//     .filter((item) => typeof item === `number` && item>0)
//     .map(item => `<li>${item**2}</li>`) // [`<li>4000</li>`, `<li>10000</li>`]
//     .join(``);

// console.log(LIs); // `<li>4000</li><li>10000</li>`;

// document.write(`<ul>${LIs}</ul>`);

// good v.2

// let LIs = arr
//     .filter((item) => typeof item === `number` && item>0)
//     .map(item => item**2); // [400, 10000, 2500]

// console.log(LIs);

// document.write(`<ul>
//     <li>${LIs.join(`</li><li>`)}</li>
// </ul>`);

// <li>400</li><li>10000</li><li>2500</li>

// find() / findIndex()

// let arr = [10,20, `hello`, 30, `olla`, 40, `new`];

// let findedValue = arr.find((item, index, arr) => typeof item === `string`);
// console.log(findedValue);

// let findedValue;
// let findedElementCounter = 0;

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);

//     if(typeof arr[i] === `string`){
//         findedValue = arr[i];
//         findedElementCounter++;

//         if(findedElementCounter === 2) break;
//     }
// }
// console.log(`result:`, findedValue);

// let findedValue = arr.findIndex((item, index, arr) => typeof item === `string`);
// console.log(findedValue);

// every() / some() => boolean

// let arr = [10,20,30,`40`,-10,-20];

// let everyNumbers = arr.every((item, index, arr) => typeof item === `number`);
// console.log(everyNumbers);

// if(everyNumbers){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }

//     console.log(sum); // 6040
// }

// let someNumbers = arr.some((item, index, arr) => typeof item === `boolean`);
// console.log(someNumbers);

// let arr = [10,20,30,`40`,-10,-20];

// let everyNumbers = arr.every((item, index, arr) => typeof item === `number`) // true/false
    
// if(everyNumbers){
//     arr
//         .filter((item) => typeof item === `number` && item>0)
//         .map(item => `<li>${item**2}</li>`) // [`<li>4000</li>`, `<li>10000</li>`]
//         .join(``);
// }


// foreEach => undefined
// filter, map => []
// join => ""
// find => value/undefined
// findIndex => -1/index
// every/some => true/false

// callback : (item, index, arr) => {}

// reduce(() => {}, returnedValue)
// callback : (returnedValue, item, index, arr) => {}

// let arr = [10, 20, 30];

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// let sum = arr.reduce(
//     function(returnedValue, item, index, arr){
//         return returnedValue+=item;
//     }
// );

// console.log(sum);

// let animals = [
//     [`cat`, `dog`, `lion`],
//     [`tiger`, `frog`, `mouse`],
//     [10,20,30]
// ];

// [`cat`, `dog`, `lion`, `tiger`, `frog`, `mouse`]

// let flatArray = [];
// for(let i=0; i<animals.length; i++){
//     let currentArr = animals[i]; // [`tiger`, `frog`, `mouse`]
//     flatArray = [...flatArray, ...currentArr]; // [`cat`, `dog`, `lion`, `tiger`, `frog`, `mouse`] 
// }
// console.log(flatArray);

// let flatArray = animals
//     .reduce(
//         (returnedValue, item) => {
//             // returnedValue = [`cat`, `dog`, `lion`, `tiger`, `frog`, `mouse`]
//             // item = [10,20,30]
//             return [...returnedValue, ...item]; // [`cat`, `dog`, `lion`, `tiger`, `frog`, `mouse`, 10,20,30]
//         },
//         []
//     );

// console.log(flatArray);

// let arr = [`cat`, `dog`, `lion`]; // `cat && dog && lion!!!`
// // let resultString = arr.join(` &&  `) + `!!!`;

// let resultString = arr
//     .reduce(
//         (returnedValue, item, index, arr)=>{
//             returnedValue += item;
//             returnedValue += index===(arr.length-1) ? `!!!` : ` && `;
//             return returnedValue;
//         },
//         ``
//     );

// // `cat && dog && lion!!!`;

// // cat && dog && lion && 

// console.log(resultString);

// concat()

// let arr_1 = [10,20,30],
//     arr_2 = [`cat`, `dog`, `lion`],
//     arr_3 = [true, false];

// // [10,20,30,`cat`, `dog`, `lion`,true, false];

// let finalArr = arr_1.concat(arr_2, arr_3);
// console.log(finalArr);

// setInterval/clearInterval

// setTimeout

let counter = 1;

const counterInt = setInterval(() => {
    console.log(`after ${counter}s`);

    if(counter === 10) clearInterval(counterInt);
    counter++;
}, 1000);

// Object
// delete
// for
// Object.keys
// Object.entries
// Object.assign

// function in object
// this
// this in arrow functions

// Prototype
// Object.create()

// OOP

// SOLID

// get/set

// static methos

// Object.defineProperty

// call/apply/bind