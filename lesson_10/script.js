// functions 

// animals = [
// 	['🐭','mouse','Jerry'],
// 	['🐹','hamster','Biscuit'],
// 	['🐰','rabbit','Bugs'],
// 	['🦊','fox','Mrs. Fox'],
// 	['🐻','bear','Paddington']
// ];

// animalsIcons = ['🐭', '🐹', '🐰'];

// function renderTable(list){
//     // console.log(list);

//     TRs = [];
//     for(i=0; i<list.length; i++){
//         currentItem = list[i]; // ['🐭', 'mouse', 'Jerry']
//         // console.log(currentItem);

//         TDs = [];
//         for(j=0; j<currentItem.length; j++){
//             TDs.push(`<td>${currentItem[j]}</td>`); // '🐭', 'mouse', 'Jerry'
//         }
//         // console.log(TDs);

//         tr = `<tr>${TDs.join(``)}</tr>`;
//         // console.log(tr);

//         TRs.push(tr);
//     }
//     // console.log(TRs);

//     return `<table>
//         ${TRs.join(``)}
//     </table>`;
// }

// animalsTable = renderTable(animals);

// document.write(animalsTable);

// hoisting

// MEMORY = {
//     Global: {
//         x = 10
//     },
//     Local f1: {
//         x: undefined
//     }
// }

// Arguments in func:
// 1. f1(value);
// 2. undefined;
// 3. default value;

// x = 10;

// function f1(x){
//     x++; // 11

//     y = 10000; // global

//     console.log(`in f1 x: `, x); // 11

//     return x; // 11
// }

// x = f1(x);

// console.log(`after f1 x: `, x); // 10
// console.log(`after f1 y:`, y);

// hoisting v.2

// closure

// debugger;

// x = 10;
// user = `Stus`;

// function f1(x, dog=`Patron`){ // 10
//     // debugger;
//     x++; // 11

//     globalVarInF1 = 10; // global

//     function f2(x, cat=`CatUkrainian`){ // 11
//         // debugger;
//         x++; // local

//         dog = `Patron Super`; // CLOSURE

//         user += ` Vasyl`; // global
//         globalVarInF1 = 2000; // global

//         console.log(`x f2:`, x); // 12

//         function f3(x){
//             // debugger;
//             x++; // 13 local x for f3
//             dog += `!!!`; // CLOSURE
//             cat += `???`;
//         }

//         f3(x); // x=12 from f2
//     }

//     f2(x); // 11

//     console.log(`x f1:`, x); // 11
// }

// f1(x);
// console.log(`after f1:`,x); // 10

// var
// let/const

// x = 10;

// function f1(x){
//     let user = `Stus`;
//     let dog = `Patron`;
// }

// f1(x);

// for(let i=0; i<=3; i++){
//     console.log(`in for:`, i);
// }

// if(true){
//     let userInIf = `Stus`;
// }

// let x = 10,
//     y = 20;

// let arr = [10,20,30,40];

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i];
// }

// console.log(sum);

// let userChoice = true;
// let color; // undefined

// if(userChoice){
//     color = `green`;
// } else{
//     color = `red`;
// }

// console.log(color);

// let x = 10;
// x = 100;

// console.log(x);

// let/const

// const PASS_ADMIN_LOVE = 10;

// debugger;

// let cat = `cat`;

// function f1(x, y){
//     debugger;
//     cat += `!!!`;

//     let dog = `Patron`;

//     function f2(){
//         debugger;
//         dog += `!!!`;
//     }

//     f2();
// }

// f1(10, 20);

// function as argument
function mathOperation(operationName, ...variables){

    let result = variables[0]; // 10

    if(operationName === `sum`){
        for(let i=1; i<variables.length; i++){
            result += variables[i];
        }
    } else if(operationName === `div`){
        result = 0;
        for(let i=0; i<variables.length; i++){
            result -= variables[i];
        }
    } else if(operationName === `mul`){
        for(let i=1; i<variables.length; i++){
            result *= variables[i];
        }
    }

    return result;
}

console.log( mathOperation(`sum`, 10,20,30) );
console.log( mathOperation(`div`, 10,20,30) );
console.log( mathOperation(`mul`, 10,20,30) );

// callback

// arrow functions

// recursion

// setTimeout
// setInterval/clearInterval

// Event loop

// Array methods:
//     forEach()
//     filter()
//     map()
//     find() / findIndex()
//     every / some
//     reduce

// Imperative vs Declarative Programming

// Object
// delete
// for
// Object.keys
// Object.entries
// Object.assign

// function in object
// this

// Prototype