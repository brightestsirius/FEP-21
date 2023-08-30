// function in object

const DOG_AGE = 7;

function getFullInfoHuman(obj){
    let fullname = `${obj.name} ${obj.surname}`;
    let age = new Date().getFullYear() - obj.year;

    return `<ul>
        <li>Fullname: ${fullname}</li>
        <li>Age: ${age}</li>
    </ul>`;
}

function getFullInfoDog(obj){
    let fullname = `${obj.type} ${obj.name}`;
    let age = obj.age*DOG_AGE;

    return `<ul>
        <li>Fullname: ${fullname}</li>
        <li>Age: ${age}</li>
    </ul>`;
}

function getFullInfoFruits(obj){
    return `<ul>${Object.keys(obj).filter(key => key!==`getFullInfo`).map(key => `<li>${key}: ${obj[key]}</li>`).join(``)}</ul>`;
}

// let userSheva = {
//     name: `Taras`,
//     surname: `Sheva`,
//     year: 1861,
//     getFullInfo: getFullInfoHuman
// }

// let userStus = {
//     name: `Vasyl'`,
//     surname: `Stus`,
//     year: 1938,
//     getFullInfo: getFullInfoHuman
// }

// let userPatron = {
//     name: `Patron`,
//     type: `dog`,
//     age: 2,
//     getFullInfo: getFullInfoDog
// }

// let apple = {
//     name: `apple`,
//     color: `yellow`,
//     price: 10,
//     getFullInfo: getFullInfoFruits
// }

// const users = [userSheva, userStus, userPatron, apple];
// users.forEach(user => document.write( user.getFullInfo(user) ));

// const userHello = obj => `Hello, ${obj.name}!`;
// const userAge = obj => `${obj.name} is ${new Date().getFullYear()-obj.year} years old.`;

// const catAges = obj => `${obj.name} is ${obj.age*100} years old.`;

// const userAnna = {
//     name: `Anna`,
//     year: 1990,
//     sayHello: userHello,
//     getAge: userAge
// }

// const catIvan = {
//     name: `Kit Ivan`,
//     age: 3,
//     getAge: catAges
// }

// console.log(userAnna);
// console.log(userAnna.name);
// console.log(userAnna.year);

// console.log( userAnna.sayHello(userAnna) );

// const usersHumansCats = [userAnna, catIvan];
// usersHumansCats.forEach(user => document.write(`<p>${user.getAge(user)}</p>`));

// console.log( userAnna.getAge(userAnna) );
// console.log( catIvan.getAge(catIvan) );

// const products = {
//     categories: {
//         clothes: [{}, {}],
//         cosmetics: [{}, {}]
//     }
// }

// this

// function getName(){
//     console.log(this.name);
// }

// function getSurname(){
//     console.log(this.surname);
// }

// let user = {
//     name: `Anna`,
//     age: 23,
//     surname: `Sheva`,
//     getFullInfo(){
//         return `${this.name} ${this.surname} is ${this.age} years old.`;
//     },
//     userAge(){
//         return `${this.name} is ${this.age}.`
//     },
//     getName,
//     getSurname
// }

// // console.log( user.getFullInfo() );
// // console.log( user.userAge() );

// getName(); // this = window
// user.getName(); // this = user

// getSurname();
// user.getSurname();

const Boeing737 = {
    name: `Boeing737`,
    getNameAirliner(){
        return `Name of airliner ${this.name}.`;
    }
}

const AudiRS = {
    name: `AudiRS`,
    getNameCar(){
        return `Name of car ${this.name}.`;
    }
}

// console.log(Boeing737.getNameAirliner());
// console.log(AudiRS.getNameCar());

// this in arrow functions

// const getAge = () => console.log(this.age);

// let user = {
//     age: 10,
//     getAge
// }

// let cat = {
//     age: 2,
//     getAge
// }

// user.getAge();
// cat.getAge();

// Prototype

// const User = {
//     nationality: `ukrainian`,
//     getFullName(){
//         return `${this.name} ${this.surname}!!!!!!`;
//     }
// }

// const userSheva = {
//     name: `Taras`,
//     surname: `Sheva`,
//     __proto__: User
// }

// const userStus= {
//     name: `Vasyl'`,
//     surname: `Stus`,
//     __proto__: User
// }

// console.log(userSheva);
// console.log(userSheva.nationality);
// console.log(userSheva.getFullName());

// console.log(userStus);

const Dog = {
    type: `dog`,
    getVoice(){
        return `${this.name} say gav-gav.`;
    }
}

const Pug = {
    name: `Kyi`,
    getPugInfo(){
        return `${this.name} is super pug!!!`;
    },
    getVoice(){
        return `GAV-GAV!`
    },
    type: `SUPER_DOG`,
    __proto__: Dog
}

const Rottweiler = {
    name: `Shchek`,
    getRottweilerInfo(){
        return `I'm Rottweiler ${this.name}`
    },
    __proto__: Dog
}

const Beagle = {
    name: `Khoryv`,
    __proto__: Dog
}

console.log(Pug);
// console.log(Pug.getPugInfo());
// console.log(Pug.getVoice());

// console.log(Pug.type);

console.log(Rottweiler);

// console.log(Rottweiler.getRottweilerInfo());
// console.log(Rottweiler.getVoice());

console.log(Beagle);

// Object.create()

// OOP

// SOLID

// get/set

// static methos

// Object.defineProperty

// call/apply/bind