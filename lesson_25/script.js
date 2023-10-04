// call/apply/bind

// let Taras = {
//     name: `Taras`,
//     age: 80,
//     getInfo(firstSymbol=`.`, secondSymbol=`.`){
//         return `${this.name} is ${this.age} years old${firstSymbol}${secondSymbol}`;
//     }
// }

// console.log(Taras.getInfo(`!`));

// let Yevhen = {
//     name: `Yevhen`,
//     age: 70
// }

// let Patron = {
//     name: `Patron`,
//     age: 5
// }

// console.log( Taras.getInfo.call(Yevhen, `!`, `!`) );

// console.log( Taras.getInfo.call(Patron) );
// console.log( Taras.getInfo.call(Patron, `?`,`!`) );
// console.log( Taras.getInfo.call(Patron, undefined,`!`) );

// console.log( Taras.getInfo.apply(Yevhen) )
// console.log( Taras.getInfo.apply(Yevhen, [`!`]) )
// console.log( Taras.getInfo.apply(Yevhen, [`!`, `?`]) )
// console.log( Taras.getInfo.apply(Yevhen, [undefined, `?`]) )

// const getInfoForYevhen = Taras.getInfo.bind(Yevhen, `!`);
// console.log( getInfoForYevhen(`??`, `..`) );

// call/apply/bind example

// const usersTableTbody = document.querySelector(`#usersTable tbody`);

// class User{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     render(){
//         let tr = document.createElement(`tr`);

//         let tdName = document.createElement(`td`);
//         tdName.innerHTML = this.firstName;

//         let tdAge = document.createElement(`td`);
//         tdAge.innerHTML = this.age;

//         let tdActions = document.createElement(`td`);

//         let btnDelete = document.createElement(`button`);
//         btnDelete.innerHTML = `Delete`;

//         btnDelete.addEventListener(`click`, () => {
//             console.log(`ARROW FUNC: ${this.firstName} is deleting.`)
//         })

//         // let user = this;
//         btnDelete.addEventListener(`click`, function() {
//             console.log(`OLD FUNC: ${this.firstName} is deleting.`, this)
//         })

//         btnDelete.addEventListener(`click`, this.userDeleting.bind(this))

//         tdActions.append(btnDelete);

//         tr.append(tdName, tdAge, tdActions);
//         usersTableTbody.append(tr);
//     }

//     userDeleting(){
//         console.log(`SEPARATE FUNC: ${this.firstName} is deleting.`);
//     }
// }

// let Taras = new User({firstName: `Taras`, age:80});
// console.log(Taras);
// Taras.render();

// REST. AJAX

// fetch

// GET

// const posts = fetch(`https://jsonplaceholder.typicode.com/posts`);
// console.log(posts);

// Promise
// 🟢🔴🥳⛔️

let ticketsPurchased = true;

let promiseConcert = new Promise(
    function(resolve, reject){
        setTimeout(() => {
            ticketsPurchased ? resolve() : reject();
        }, 1000)
    }
);

promiseConcert
    .then(
        () => {
            console.log(`🟢 in 1 resolve`);
        }
    )
    .then(
        () => {
            console.log(`🟢 in 2 resolve`);
            return Promise.reject();
        }
    )
    .then(
        () => {
            console.log(`🟢 in 3 resolve`)
        }
    )
    .catch(() => {
        console.log(`⛔️ in catch`);
    })

// CALLBACK HELL
// setTimeout(() => {
//     console.log(`after 1s`);
//     firstFunc();
// }, 1000);

// const firstFunc = () => {
//     console.log(`in firstFunc`);
//     secondFunc();
// }

// const secondFunc = () => {
//     console.log(`in secondFunc`);
//     thirdFunc();
// }

// const thirdFunc = () => {
//     console.log(`in thirdFunc`);
// }

// async/await