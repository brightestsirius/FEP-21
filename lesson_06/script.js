// ternar

// x = 10;

// if(x>=10) {
//     console.log(`x>=10`);
// } else {
//     console.log(`x<10`);
// }

// condition ? if_true : if_false;

// x>=10 ? console.log(`x>=10`) : console.log(`x<10`);

// console.log( x>=10 ? `x>=10` : `x<10` );

// userChooseColor = confirm(`Would like color?`); //true/false

// userColor = userChooseColor ? `green` : `red`;

// if(userChooseColor){
//     userColor = `green`;
// } else{
//     userColor = `red`;
// }

// document.write(`<h2 style="color: ${userColor}">User color</h2>`);

// userPotato = confirm(`Would you like potato?`);

// if(userPotato) userPotatoSize = prompt(`Size`, `small`);

// document.write(`<ul>
//     <li>Bulka: humburger</li>
//     ${userPotato ? `<li>Potato: ${userPotatoSize}</li>` : ``}
// </ul>`)

// if(){

//     if(){

//     } else{

//     }

// } else{

//     if(){

//     } else{
        
//     }

// }

// if(x>=10){
//     if(x===10){
//         console.log(`x===10`)
//     } else{
//         console.log(`x>10`);
//     }
// } else{
//     if(x<5){
//         console.log(`x<5`);
//     } else{
//         console.log(`x>5`);
//     }
// }

// x = 4;

// console.log( 
//     x>=10 
//     ? (x===10 
//         ? `x===10` 
//         : `x>10`) 
//     : (x<5 
//         ? `x<5` 
//         : `x>5` ) 
// );

// switch

userAge = 7;

// if(userAge>=1 && userAge<=5){
//     console.log(`userAge>=1 && userAge<=5`);
// } else if(userAge>5 && userAge<=7){
//     console.log(`userAge>5 && userAge<=7`);
// } else if(userAge>7 && userAge<=10){
//     console.log(`userAge>7 && userAge<=10`);
// } else{
//     console.log(`userAge>10`)
// }

// switch(userAge){
//     case 1:
//     case 5:
//     case 7:
//         console.log(`user age in range 1-7`);
//         break;
//     case 10:
//         console.log(10);
//         break;
//     case userAge>11:
//         console.log(`>11`);
//         break;
//     default:
//         console.log(`smth else`);
// }

// switch(true){
//     case userAge>=1 && userAge<=5:
//         console.log(`userAge>=1 && userAge<=5`);
//         break;
//     case userAge>5 && userAge<=7:
//         console.log(`userAge>5 && userAge<=7`);
//         break;
//     case userAge>7 && userAge<=10:
//         console.log(`userAge>7 && userAge<=10`);
//         break;
//     default:
//         console.log(`userAge>10`);
// }

// summ

x = 5;
// 1+2+3+4+5 = 15

// 5!
// 1*2*3*4*5 = 120;

// sum = 0;

// for(i=1; i<=x; sum += i, i++){
//     console.log(`sum = ${sum} + ${i}`);

//     //sum += i
//     //sum = 0 + 1
// }

// console.log(`Sum: ${sum}`);

// factorial example

// factorial = 1;

// for(i=2; i<=x; i++){
//     console.log(`!${x} = ${factorial} * ${i}`);
//     factorial *= i;
// }

// console.log(factorial);

// prime numbers

// 5
// // 5/1 = 0
// 5/2 = 1
// 5/3 = 2
// 5/4 = 1
// // 5/5 = 0

// 6
// // 6/1 = 0
// 6/2 = 0
// 6/3 = 0
// 6/4 = 1
// 6/5 = 1
// // 6/6 = 0

// 100
// // 100/2 = 0

// x = 6;
// console.log(x%6); // 6%6 = 0

// x = 7;
// isPrime = true;

// // 2-4

// for(i=2; i<x && isPrime===true; i++){
//     zalyshok = x%i;
//     // 5%2 = 1
//     // 5%3 = 2
//     // 5%4 = 1

//     console.log(`${x}%${i} = ${zalyshok}`);

//     if(zalyshok === 0){
//         // console.log(`   ${x} is not a prime number!`);
//         isPrime = false;
//     }
// }

// // if(isPrime === true){
// //     console.log(`${x} is prime number!`);
// // } else{
// //     console.log(`${x} is not a prime number`);
// // }

// console.log( 
//     isPrime === true 
//     ? `${x} is prime number!` 
//     : `${x} is not a prime number` 
// );

// break

// x = 7;

// for(i=1; i<=x; i++){
//     console.log(i);

//     if(i===3) break;
// }

// prime with break;

// x = 9;

// for(i=2; i<x; i++){

//     zalyshok = x%i;
//     console.log(`${x}%${i} = ${zalyshok}`);

//     if(zalyshok === 0) {
//         break;
//     }
// }

// console.log( 
//     i === x
//     ? `${x} is prime number!` 
//     : `${x} is not a prime number` 
// );

// continue

x = 9;

for(i=1; i<=x; i++){
    console.log(i);

    if(x%i === 0) continue;

    console.log(`-------`);
}

// loop in loop

// break/continue to point

// Array

// Array methods:
//     push
//     unshift
//     pop
//     shift
//     join
//     reverse
//     slice
//     splice
//     concat

// min/max element in array by index
// change position of min/max

// Math.random()

// Copy of array

// Spread/Rest operator

// Two dimensional array

// Array.isArray()

// JSON.parse( JSON.stringify( yoursArray ) ) – to make deep copy of array