// global & local

// function setName(name, surname, yearOfBirth){
//     let age = new Date().getFullYear() - yearOfBirth;
//     let fullName = `My ${name} ${surname}`;

//     let old, dog, cat;

//     if(age>60){
//         old = true;
//     }

//     if(old) fullName += ` ;(`;

//     return `${fullName}. Age is ${age}.`;
// }

// let dollAnna = setName(`Anna`, `Sheva`, 1938);
// setName(`Vasyl`, `Stus`, 1938);

// console.log(dollAnna);

// function as argument

// function mathOpertaion(operationName, ...values){ // []

//     //if(values.length === 0) return;
//     // values.length = 0 => Boolean(0) => false => !false => true
//     if(!values.length) return;

//     let result; // undefined

//     switch(operationName){
//         case `sum`:
//             result = values[0];
//             for(let i=1; i<values.length; i++){
//                 result += values[i];
//             }
//             break;
//         case `div`:
//             result = values[0];
//             for(let i=1; i<values.length; i++){
//                 result -= values[i];
//             }
//             break;
//         case `mul`:
//             result = values[0];
//             for(let i=1; i<values.length; i++){
//                 result *= values[i];
//             }
//             break;
//     }

//     return `Result of operation ${operationName}: ${result}.`;
// }

// function sum(values){
//     let result = values[0];
//     for(let i=1; i<values.length; i++){
//         result += values[i];
//     }
//     return result;
// }

// function sub(values){
//     let result = values[0];
//     for(let i=1; i<values.length; i++){
//         result -= values[i];
//     }
//     return result;
// }

// function mul(values){
//     let result = values[0];
//     for(let i=1; i<values.length; i++){
//         result *= values[i];
//     }
//     return result;
// }

// function div(values){
//     let result = values[0];
//     for(let i=1; i<values.length; i++){
//         result /= values[i];
//     }
//     return result.toFixed(2);
// }

// function mathOpertaion(operationFunc, ...values){ // [10,20,30]

//     //if(values.length === 0) return;
//     // values.length = 0 => Boolean(0) => false => !false => true
//     if(!values.length) return;
   
//     // let result;

//     // if(typeof operationFunc === `function`){
//     //     result = operationFunc(values); // sum([10,20,30]), sub([10,20,30])
//     // } else{
//     //     result = `not valid function`; // 'hello'
//     // }

//     let result = typeof operationFunc === `function` 
//         ? operationFunc(values) 
//         : `not valid function`;

//     return `Result of operation: ${result}.`;
// }

// let sumResult = mathOpertaion(sum, 10,20,30);
// let subResult = mathOpertaion(sub, 10,20,30);
// let mulResult = mathOpertaion(mul, 10,20,30);
// let divResult = mathOpertaion(div, 10,20,30);

// let exampleResult = mathOpertaion(`summa`, 10,20,30);

// console.log(sumResult);
// console.log(subResult);
// console.log(mulResult);
// console.log(divResult);

// console.log(exampleResult);
// console.log(mathOpertaion(100,10,203,304));

// console.log(mathOpertaion(catDog, 10,20,30)); // error

// callback

function carInfo(info){ // [`sydan`, 300]
    return `<ul>
        <li>Type: ${info[0]}</li>
        <li>HP: ${info[1]}</li>
    </ul>`;
}

function bookInfo(info){
    return `<ul>
        <li>Count of pages: ${info[0]}</li>
        <li>Author: ${info[1]}</li>
    </ul>`;
}

function clothesInfo(info){
    return `<ul>
        <li>Color: ${info[0]}</li>
        <li>Size: ${info[1]}</li>
    </ul>`;
}

function flowersInfo(info){
    return `<ul>
        <li>Color: ${info[0]}</li>
        <li>Price: ${info[1]}</li>
    </ul>`;
}

function renderProductsTable(products){

    // products = [
    //     [`Audi RS`, carInfo, [`sydan`, 300]],
    //     [`Моя УПА`, bookInfo, [350, `Zagorovska`]],
    //     [`T-shirt`, clothesInfo, [`blue`, `XL`]],
    //     [`Rose`, flowersInfo, [`red`, 150]]
    // ]

    let TRs = [];

    for(let i=0; i<products.length; i++){
        let product = products[i]; 
        // [`Audi RS`, carInfo, [`sydan`, 300]]
        // [`Моя УПА`, bookInfo, [350, `Zagorovska`]],
        // [`T-shirt`, clothesInfo, [`blue`, `XL`]]

        let productName = product[0]; // `Audi RS`
        let productFunc = product[1]; // carInfo
        let productInfo = product[2]; // [`sydan`, 300]

        TRs.push(`<tr>
            <td>${productName}</td>
            <td>${productFunc(productInfo)}</td>
        </tr>`)
    }
    
    return `<table>
        <thead>
            <tr>
                <th>Product name</th>
                <th>Product info</th>
            </tr>
        </thead>
        <tbody>
            ${TRs.join(``)}
        </tbody>
    </table>`;
}

const PRODUCTS = [
    [`Audi RS`, carInfo, [`sydan`, 300]],
    [`Моя УПА`, bookInfo, [350, `Zagorovska`]],
    [`T-shirt`, clothesInfo, [`blue`, `XL`]],
    [`Rose`, flowersInfo, [`red`, 150]]
]

let tableOfProducts = renderProductsTable(PRODUCTS);

document.write(tableOfProducts);

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
// Object.create()

// OOP