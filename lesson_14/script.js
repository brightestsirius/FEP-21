// Array

const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

const THs = [`User name`, `User team color`, `User rating`, `User sports`]; 

// filter => only red items
// map => Math.pow(arr[2], 3)
// map => table + ul
// join

const renderThead = arr => `<thead>
    <tr>
        <th>${arr.join(`</th><th>`)}</th>
    </tr>
</thead>`;

const renderTable = arr => {
    arr = JSON.parse(JSON.stringify(arr));

    let filteredModifiedArr = arr
        .filter(innerArr => innerArr[1] === `red`)
        .map(item => {
            item[2] = Math.pow(item[2], 3);
            return item;
        });

    let TRs = filteredModifiedArr
        .map(item => {
            return `<tr>${
                item.map(el => {
                    if(Array.isArray(el)) el = `<ul><li>${el.join(`</li><li>`)}</li></ul>`;
                    return `<td>${el}</td>`
                }).join(``)
            }</tr>`
        })
        .join(``);

        // .map(innerArr => {
        //     return `<tr>
        //         ${
        //             innerArr
        //                 .map((item, index) => {
        //                     if(index === 2) item[2] = Math.pow(item, 3);
        //                     return `<td>${item}</td>`;
        //                 })
        //                 .join(``)
        //         }
        //     </tr>`
        // })

    let sumRatings = filteredModifiedArr
        .map(innerArr => innerArr[2])
        .reduce((sum, item) => sum+=item);


    let table = `<table class="table__users">
        ${renderThead(THs)}
        <tbody>
            ${TRs}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="${arr[0].length}">Final sum of ratings: ${sumRatings}</td>
            </tr>
        </tfoot>
    </table>`

    return table;
}

// document.write(renderTable(users));

// Object

// let user = {
//     name: `Sasha`,
//     surname: `Bohdan`,
//     yearOfBirth: 1990,
//     animals: [`cat`, `dog`],
//     child: {
//         name: `Anna`,
//         yearOfBirth: 7
//     },
//     children: [
//         {
//             sex: `girl`,
//             name: `Anna`,
//             yearOfBirth: 7
//         },
//         {
//             sex: `boy`,
//             name: `Anton`,
//             yearOfBirth: 4
//         }
//     ],
//     married: true
// };

// console.log(user);

// console.log(user.name);
// console.log(user.animals);
// console.log(user.animals[0]);
// console.log(user.child.name);
// console.log(user.child.yearOfBirth);

// console.log(user.children);

// user.children.forEach(child => console.log(child.name));

// let dog = {
//     name: `Patron`,
//     age: 7,
//     children: [`first`, `second`]
// }
// console.log(dog);

// dog.name = `Oleg`;
// dog.surname = `Petrovich`;

// delete dog.age;
// delete dog.children;

// let arr = [10,20,30];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// delete
// for

// let dog = {
//     id: 1,
//     name: `Patron`,
//     age: 7,
//     country: `Ukraine`
// }

// dog.city = `Kharkiv`;

// console.log(dog);

// for(let key in dog){
//     // console.log(key); // age
//     // console.log(dog[key]); // dog[`age`]
//     console.log(`${key}: ${dog[key]}`);
// }

// Object.keys

// let dogKeys = Object.keys(dog); // [`name`, `age`, `country`, `city`];
// console.log(dogKeys);

// dogKeys.forEach(key => document.write(`<p>${dog[key]}</p>`))

// Object
//     .keys(dog)
//     .filter(key => key!==`id` && key!==`age`)
//     .forEach(key => document.write(`<p>${dog[key]}</p>`));


// Object
//     .keys(dog) // [`id`, `name`, `age`, `country`, `city`];
//     .filter(key => key===`country` || key===`city`) // [`country`, `city`];
//     .map(key => `<h2>${key}: ${dog[key]}</h2>`) // [`<h2>country: Ukraine</h2>`, `<h2>city: Kharkiv</h2>`];
//     .forEach(item => document.write(item));


// Object.values

// let dogValues = Object.values(dog);
// console.log(dogValues);

// Object.entries

// let dogEntries = Object.entries(dog);
// console.log(dogEntries);

// [
//     [`id`, `1`],
//     [`name`, `Patron`]
// ]

let dog = {
    id: 1,
    name: `Patron`,
    age: 2,
    country: `Ukraine`
}

const DOG_KOEF = 7;

const toCapitalizeCase = word => word[0].toUpperCase() + word.slice(1).toLowerCase();

let LIs = Object
    .keys(dog) // [`id`, `name`, `age`, `country`]
    .filter(key => key!==`id`)
    .map(key => {
        let item = dog[key];
        if(key === `age`) item *= DOG_KOEF;

        return `<li>${toCapitalizeCase(key)}: ${item}</li>`;
    })
    .join(``);

// document.write(`<ul>${LIs}</ul>`);

{/* <ul>
    <li>Name: Patron</li>
    <li>Age: 14</li>
    <li>Country: Ukraine</li>
</ul> */}

// Object.assign

// let user_1 = {
//     name: `user_1`,
//     city: `Kharkiv`
// }

// let user_2 = {
//     name: `user_2`,
//     country: `Ukraine`
// }

// let user = Object.assign({}, user_1, user_2);

// console.log(user);
// console.log(user_1);

// let arr_1 = [10,20,30];
// let arr_2 = [40,50,60];

// let arr = arr_1.concat(arr_2);
// console.log(arr);
// console.log(arr_1);

// let user = {};

// let userName = prompt(`Enter name`);
// let userSurname = prompt(`Enter surname`);

// user.fullName = `${userName} ${userSurname}`;

// let userYear = prompt(`Enter year`);

// user.age = new Date().getFullYear()-userYear;

// console.log(user);

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