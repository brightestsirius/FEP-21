// const users = [
//     {
//         name: `Stepan`,
//         surname: `Bandera`,
//         year: 1909,
//         role: `admin`
//     },
//     {
//         name: `Roman`,
//         surname: `Shukhevych`,
//         year: 1909,
//         role: `lector`
//     },
//     {
//         name: `Yevhen`,
//         surname: `Konovalets`,
//         year: 1891,
//         role: `student`
//     }
// ];

// get/set

// class User {
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     getFullname(){
//         return `${this.name} ${this.surname}.`;
//     }

//     get fullname(){
//         return `${this.name} ${this.surname}.`;
//     }

//     get age(){
//         return new Date().getFullYear()-this.year;
//     }

//     // setAnimals(values=[]){
//     //     this.animals = this.animals ? this.animals.concat(values) : values;
//     // }

//     set setAnimals(values=[]){
//         this.animals = this.animals ? this.animals.concat(values) : values;
//     }

//     get getAnimals(){
//         return this.animals ? this.animals : `Animals not set yet.`;
//     }
// }

// let StepanBandera = {
//     name: `Stepan`,
//     surname: `Bandera`,
//     year: 1909,
//     role: `admin`
// };

// StepanBandera = new User(StepanBandera);
// console.log(StepanBandera);
// console.log(StepanBandera.getFullname())
// console.log(StepanBandera.fullname);
// console.log(StepanBandera.age);

// console.log(StepanBandera.getAnimals);
// StepanBandera.setAnimals = [`cat`, `dog`];
// console.log(StepanBandera.getAnimals);

// console.log(StepanBandera);

// static methos

// class User{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     static sayHello(){
//         return `Hello!`;
//     }

//     sayHello(){
//         return `Hello, ${this.name}!`;
//     }
// }

// let RomanShukhevych = {
//     name: `Roman`,
//     surname: `Shukhevych`,
//     year: 1909,
//     role: `lector`
// }

// RomanShukhevych = new User(RomanShukhevych);

// console.log(RomanShukhevych);

// console.log(User.sayHello());
// console.log(RomanShukhevych.sayHello());

// Object.defineProperty

// const x = 10;
// x = `hello`;

// const RomanShukhevych = {
//     id: 1,
//     name: `Roman`,
//     surname: `Shukhevych`,
//     year: 1909,
//     role: `lector`
// }

// RomanShukhevych.name = `Stepan`;
// delete RomanShukhevych.role;

// console.log(RomanShukhevych);

// for(let key in RomanShukhevych){
//     console.log(key);
// }

// console.log(Object.keys(RomanShukhevych));


// Object.defineProperty(
//     RomanShukhevych, 
//     "id", 
//     {
//         writable: false,
//         configurable: false,
//         enumerable: false
//     }
// )

// RomanShukhevych.id = 100;
// delete RomanShukhevych.id;

// Object.defineProperty(
//     RomanShukhevych,
//     "country",
//     {
//         value: `Ukraine`,
//         writable: true,
//         enumerable: true
//     }
// )

// RomanShukhevych.country = `Poland`;

// console.log(RomanShukhevych);
// console.log(Object.keys(RomanShukhevych));

class User{
    constructor(obj){
        Object.assign(this, obj);

        for(let key in this){
            Object.defineProperty(this, key, {
                configurable: false,
                writable: false
            })
        }
    }
}

let RomanShukhevych = {
    id: 1,
    name: `Roman`,
    surname: `Shukhevych`,
    year: 1909,
    role: `lector`
}

RomanShukhevych = new User(RomanShukhevych);
console.log(RomanShukhevych);

delete RomanShukhevych.id;
delete RomanShukhevych.name;
console.log(RomanShukhevych);

// DOM