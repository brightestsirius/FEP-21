// Function

// function helloUser(userName){ // userName = undefined
//     // if(userName !== undefined){
//     //     console.log(`Hello, ${userName}`);
//     // }

//     // userName && console.log(`Hello, ${userName}`);

//     if(userName) console.log(`Hello, ${userName}`);
// }

// helloUser(`Vasyl`);
// helloUser(`Taras`);
// helloUser();
// helloUser(``);


// function helloUser(userName, userSurname){
//     // if(userName && userSurname){
//     //     console.log(`Name: ${userName}.\nSurname: ${userSurname}.`);
//     // } else if(userName){
//     //     console.log(`Name: ${userName}.`);
//     // } else if(userSurname){
//     //     console.log(`Surname: ${userSurname}.`);
//     // }

//     userData = [];

//     if(userName) userData.push(`Name: ${userName}.`);
//     if(userSurname) userData.push(`Surname: ${userSurname}.`);

//     // if(userData.length !== 0){
//     //     console.log(userData.join(`\n`));
//     // }

//     userData.length && console.log(userData.join(`\n`));
// }

// helloUser(`Vasyl`, `Stus`);
// helloUser(undefined, `Sheva`); // userName=Sheva, userSurname=undefined.
// helloUser();
// helloUser(`Oleg`);

// arguments (pseudo-array)

// function getSum(...args){

//     args.push(200);
//     console.log(args);

//     sum = 0;
//     for(i=0; i<args.length; i++){
//         if(typeof args[i] === `number`){
//             sum += args[i];
//         }
//     }

//     console.log(sum);
// }

// getSum(10,20,30,`hello`,true,40); // 60hellotrue

// function getProductInfo(name, price, ...userAges){
//     console.log(name);
//     console.log(price);
//     console.log(userAges);
// }

// getProductInfo(`iPhone`, 100, 20,30,42,16);

// function mathOperation(operationName, ...values){
//     console.log(operationName, values);

//     result = 0;

//     // if(operationName === `sum`){
//     //     for(i=0; i<values.length; i++){
//     //         result += values[i];
//     //     }
//     // } else if(operationName === `div`){
//     //     for(i=0; i<values.length; i++){
//     //         result -= values[i];
//     //     }
//     // }

//     for(i=0; i<values.length; i++){
//         switch(operationName){
//             case `sum`:
//                 result += values[i];
//                 break;
//             case `div`:
//                 result -= values[i];
//                 break;
//         }
//     }

//     console.log(result);
// }

// mathOperation(`sum`, 10,20,30,40);
// mathOperation(`div`, 10,20,30,40);

// return

// function getAge(yearOfBirth){
//     currentYear = new Date().getFullYear(); // 2023

//     if(yearOfBirth && yearOfBirth>0){
//         userAge = currentYear-yearOfBirth;
//     } else{
//         userAge = `Not valid year of birth`;
//     }

//     return userAge;
// }

// fathersYear = getAge(1966);

// console.log(`Fathers year: ${fathersYear}.`);
// document.write(`<h3>Fathers year: ${fathersYear}.</h3>`);

// function sayHello(userName){
//     alert(`Hello, ${userName}`);
// }

// sayHello(`Alina`);

// function getName(userIndex){
//     promptString = userIndex 
//         ? `Enter name of user #${userIndex}` 
//         : `Enter name.`;

//     do{
//         userName = prompt(promptString);
//         if(userName) userName = userName.trim();
//     } while(!userName);

//     return userName;
// }

// // variant 1

// user_1 = getName();
// console.log(user_1);

// user_2 = getName();
// console.log(user_2);

// // variant 2

// countOfUsers = 3;
// users = [];

// for(i=1; i<=countOfUsers; i++){
//     users.push(getName(i))
// }

// console.log(users);

// lexical environment, global && local scopes

// lexical environment

// global scope

// debugger;

// x = 66;
// console.log(x); // 66

// function foo(user){ // local scopes
//     // debugger;
//     x = `OLEG`;
//     yearOfBirth = 20000;
//     console.log(`Hello, ${user}. User age: ${x}. Year of birth: yearOfBirth`); // OLEG
// }

// x = 100;
// console.log(x); // 100

// foo(`Stus`);
// console.log(x); // OLEG
// console.log(yearOfBirth);


// hoisting

// x = 10

// function foo(x){
//     console.log(`x in foo:`, x); // x = 100
// }

// foo(100);

// console.log(`x after foo:`, x); // 10

// ex.2

x = 10

function foo(x){
    x++;
    console.log(`x in foo:`, x); // x = 11
}

foo(x); // 10

console.log(`x after foo:`, x); // 10

// console.log(kotik);

// closure

// var/let/const

// function as argument

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