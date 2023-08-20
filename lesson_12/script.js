// const products = [
// 	['apple', 10],
// 	['banana', 8],
// 	['mango', 20],
// 	['grape', 18]
// ];

// const productsWithKoef = [
// 	['apple', 10, 0.2],
// 	['banana', 8, 0.3],
// 	['mango', 20],
// 	['grape', 18, 0.8]
// ];

// const SUMMER_KOEF = 2;
// const WINTER_KOEF = 3;

// function summerPrice(value){
//     return value*SUMMER_KOEF;
// }

// function winterPrice(value){
//     return value*WINTER_KOEF;
// }

// function productSeasonPrice(value, koef=1){
//     return value*koef;
// }

// function getPrice(arr, seasonFunc){
//     arr = JSON.parse(JSON.stringify(arr));

//     let sum = 0;

//     for(let i=0; i<arr.length; i++){
//         let product = arr[i]; // ['apple',10]
//         let productPrice = product[1]; // 10

//         // if(typeof seasonFunc === `function`){
//         //     sum += seasonFunc(productPrice); // 20
//         // } else{
//         //     sum += productPrice;
//         // }

//         // sum += typeof seasonFunc === `function`
//         //     ? seasonFunc(productPrice)
//         //     : productPrice;

//         if(typeof seasonFunc === `function`){
//             let productKoef = product[2];
//             // ['apple', 10, 0.2] => 0.2
//             // ['mango',20] => undefined;

//             if(productKoef){
//                 sum += seasonFunc(productPrice, productKoef);
//             } else{
//                 sum += seasonFunc(productPrice);
//             }
//         } else{
//             sum += productPrice;
//         }
//     }

//     return sum;
// }

// let productPrices = getPrice(products);
// console.log(productPrices);

// let productPriceSummer = getPrice(products, summerPrice);
// console.log(productPriceSummer);

// let productKoefSum = getPrice(productsWithKoef, productSeasonPrice);
// console.log(productKoefSum);

// function sumOfArray(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i];
//     }

//     return sum;
// }

// function getProductsPrice(arr, seasonFunc){
//     let productsPrice = [];
//     for(let i=0; i<arr.lentgh; i++){
//         productsPrice.push(arr[i]);
//     }
//     // [10,5,6,2];

//     let sumOfProducts = sumOfArray(productsPrice);

//     return typeof seasonFunc === `function` ? seasonFunc(sumOfProducts) : sumOfProducts;
// }

// getProductsPrice(products, summerPrice);

// arrow functions

// function printHello(name){
//     console.log(`Hello, ${name}!`);
// }

// const printHello = (name, surname) => console.log(`Hello, ${name} ${surname}!`);

// function printHello(name, surname){
//     return `Hello, ${name} ${surname}!`;
// }
// const printHello = (name, surname) => `Hello, ${name} ${surname}!`;

// const printHello = (name, surname) => {
//     let fullName = `${name} ${surname}`;
//     return `Hello, ${fullName}!`;
// }

// let AnnaHello = printHello(`Anna`, `Sheva`);
// console.log(AnnaHello);

// () => ...

// () => {
//     ...
//     return
// }

// const getName = name => `Hello, ${name}`;
// console.log(getName(`Vasyl`));

// const getFullName = (name, surname) => `Hello, ${name} ${surname}.`;

// const makeAlert = () => alert(`Hello, user!`);

// const hello = () => `hello`;
// console.log(hello());

// recursion

// debugger;

// let firstArray = [
//     10,
//     [`cat`, `dog`, [100,200, [true, false]]]
// ]

// function deepCopyOfArray(arr){
//     // debugger;
//     let newArr = [];

//     for(let i=0; i<arr.length; i++){
//         let currentItem = arr[i]; // 10

//         if(Array.isArray(currentItem)){ // [true, false]]
//             newArr.push(deepCopyOfArray(currentItem));
//         } else{
//             newArr.push(currentItem); // 10
//         }
//     }

//     return newArr;
// }

// let arrCopy = deepCopyOfArray(firstArray);

// arrCopy[1][0] = `Stus`;

// console.log(firstArray);
// console.log(arrCopy);

// setTimeout

// setTimeout(function, ms);

// console.log(`before setTimeout`);

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// setTimeout(
//     function(){
//         console.log(`after 3s - first`);
//     },
//     3000
// );

// // setTimeout(
// //     function(){
// //         console.log(`after 3s -second`);
// //     },
// //     3000
// // );

// console.log(`after setTimeout`);

// for(let i=100; i<=110; i++){
//     console.log(i);
// }

// // callback func of setTimeout

// console.log(`after loop of million`);

// Event loop

// Array methods:
//     forEach()

// let arr = [10, 20, 30];

// for(let i=0; i<arr.length; i+=2){
//     document.write(`<p>${arr[i]}</p>`);

// }

// arr.forEach( 
//     function(item, index){
//         // console.log(item, index, list);
//         // 10, 0, [10, 20, 30]
//         // 20, 1, [10, 20, 30]
//         // 30, 2, [10, 20, 30]

//         document.write(`<p data-index="${index}" style="color: ${index%2 !== 0 ? `red`: `green`}">${item}</p>`);
//     }
// )

// let arr = [
//     [10,20,30],
//     [`cat`, `dog`, `lion`]
// ]

// for(let i=0; i<arr.length; i++){
//     let innerArr = arr[i]; // [10,20,30]
     
//     for(let j=0; j<innerArr.length; j++){
//         console.log(innerArr[j]) // 10
//     }
// }

// arr.forEach(function(innerArr){
//     // console.log(innerArr); // [10,20,30]

//     innerArr.forEach(function(item){
//         console.log(item); // 10
//     })

// })

// let arr = [-10, 10, 20, -4];

// let filteredArr = [];

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         filteredArr.push(arr[i]);
//     }
// }

// console.log(filteredArr);

//     filter()

// let filteredArr = arr.filter(
//     function(item){
//         return item>0;
//     }
// )

// console.log(filteredArr);

//     map()
//     find() / findIndex()
//     every / some
//     reduce

// Imperative vs Declarative Programming

// setInterval/clearInterval

// Object
// delete
// for
// Object.keys
// Object.entries
// Object.assign

// function in object
// this

// Prototype
// Object.create()

// OOP