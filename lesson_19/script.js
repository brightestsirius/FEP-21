// Everything is an object

// const GOD_OBJECT = {
//     constructor: () => {}
//     hasOwnProperty: () => {}
//     isPrototypeOf: () => {}
//     ...
// }

// const Array = {
//     push: () => {},
//     map: () => {},
//     ...,
//     __proto__: GOD_OBJECT
// }

// let dog = {
//     name: `Patron`
//     __proto__: GOD_OBJECT
// }

// let list = [
//     __proto__: Array
// ]

// let x = new Number(10);
// console.log(x);

// let city = new String(`Kyiv`);
// console.log(city);
// console.log(city[0]);

// Destructuring assignment

// let colors = [`red`, `green`, `blue`, `yellow`, `black`];

// let red = colors[0];
// let green = colors[1];
// let blue = colors[2];
// let yellow = colors[3];


// let [red, green, blue, yellow] = colors;
// let [red, , , yellow] = colors;
// let [red] = colors;

// let [red, green, ...otherColors] = colors;

// console.log(red);
// console.log(green);
// // console.log(blue);
// // console.log(yellow);
// console.log(otherColors);

// let user = {
//     name: `User name`,
//     animals: [`cat`, `dog`, `lion`],
//     userWife: `User wife`,
//     child: {
//         name: `Child name`,
//         animals: [`tiger`, `parrot`],
//         school: {
//             number: 100
//         }
//     }
// }

// let userAnimalsDog = user.animals[1];
// let userChildName = user.child.name;
// let userChildAnimalsParrot = user.child.animals[1];
// let userChildSchoolNumber = user.child.school.number;

// let { animals:userAnimals, name:userName, userWife } = user;
// let { animals:[,userAnimalsDog,userAnimalsLion] } = user;
// let { child:userChild, child:{ name:userChildName } } = user;
// let { child:{ animals:userChildAnimals } } = user;
// let { child:{ animals:[,userChildAnimalsParrot] } } = user;

// console.log(userAnimals);
// console.log(userName);
// console.log(userWife);
// console.log(userAnimalsDog);
// console.log(userAnimalsLion);
// console.log(userChild);
// console.log(userChildName);
// console.log(userChildAnimals);
// console.log(userChildAnimalsParrot);

// console.log(userAnimalsDog);
// console.log(userChildName);
// console.log(userChildAnimalsParrot);
// console.log(userChildSchoolNumber);

let user = {
    name: `Stepan`,
    animals: [`cat`, `dog`, `lion`],
    userWife: `User wife`,
    child: {
        name: `Vasyl`,
        animals: [`tiger`, `parrot`],
        school: {
            number: 100
        }
    }
}

let user_2 = {
    name: `Lesya`
}

let user_3 = {
    child: {
        name: `Konovaletz'`
    }
}

// const getUserChildSecondAnimal = ({child:{animals:[,userChildSecondAnimal]}}) => {
//     return `Child second animal: ${userChildSecondAnimal}`;
// }

// console.log(getUserChildSecondAnimal(user));

// const getUserNameChildName = ( { name:userName=false, child:{ name:userChildName=false }={}  } = {} ) => {

//     let userNameRender = userName ? `User name: ${userName}` : false;
//     let childNameRender = userChildName ? `User child name: ${userChildName}` : false;

//     let renderData = [userNameRender, childNameRender].filter(item => item);

//     return renderData.length>0 ? `${renderData.join(`. `)}.` : `USER IS NOT DEFINED.`;
// }

// console.log(getUserNameChildName(user));
// console.log(getUserNameChildName(user_2));
// console.log(getUserNameChildName());
// console.log(getUserNameChildName(user_3));

// const getUserNameChildName = (obj) => {
//     if(obj.name) return;
//     if(!obj.child || !obj.child.name) return;
// }

// let cars = [`Audi`, `BMW`, `Mercedez`, `Mustang`];

// let [firstCar, secondCar, thirdCar, fourthCar=`Ford`] = cars;

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);
// console.log(fourthCar);

// DOM

// document
// redirect
// window.open(url, type)

// console.dir(document);

// const pathname = document.location.pathname;
// console.log(pathname);

// setTimeout(()=>{
//     // document.location.href = `https://google.com`;
//     // window.open(`https://google.com`, `_blank`);
// }, 2000);

// document.onclick = function(){
//     console.log(`click on document`);
// }

// querySelector

// let x; // undefined
// console.log(x);

// const domLoadad = () => {
//     let block = document.querySelector(`#block`);
//     console.dir(block);
// }

// document.addEventListener('DOMContentLoaded', domLoadad);

let block = document.querySelector(`#block`);
console.dir(block);

let circle = document.querySelector(`#circle`);
console.dir(circle);

let link = document.querySelector(`#link`);
console.dir(link);

let image = document.querySelector(`#image`);
console.dir(image);

// html
// style
// class

// attributes/setAttribute
// dataset
// remove
// events

// document.createElement

// click events
//     onclick
//     ondblclick
//     oncontextmenu
//     onmousedown
//     onmouseup

// addEventListener/removeEventListener

// mouse events
//     onmouseover
//     onmouseout
//     onmouseenter
//     onmouseleave
//     onmousemove

// keyboard events
//     onkeypress
//     onkeydown
//     onkeyup

// Bubbling and capturing

// stopPropagation

// preventDeafault()