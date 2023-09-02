const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];

const toCaptilize = str => str[0].toUpperCase()+str.slice(1).toLowerCase();

const Product = {
    getInfo(){
        let info = Object
            .entries(this)
            .map(value => {
                if(value[0] === `price`) value[1] = this.getPrice();
                return value;
            })
            .map(value => {
                return `${toCaptilize(value[0])}: ${value[1]}`;
            })
            .join(`.\n`);

        return `${info}.`;
    },
    getPrice(){
        let price = this.price;
        if(this.season===true) price *= this.seasonKoef;
        return price.toFixed(2) + `$`;
    }
}

const Vegetable = {
    type: `vegetable`,
    seasonKoef: 1.3,
    __proto__: Product
}

let tomato = {
    name: `tomato`,
    icon: `🍅`,
    price: 2.3,
    season: true,
    __proto__: Vegetable
}

// console.log(tomato);
// console.log(tomato.getInfo());

// vegetables
//     .map(product => {
//         product.__proto__ = Vegetable;
//         return product;
//     })
//     // .map(product => {
//     //     console.log(product);
//     //     return product;
//     // })
//     .forEach(product => console.log(product.getInfo()))

// Object.create()

// const Parent = {
//     getInfo(){
//         return `Hello, ${this.name}.`
//     }
// }

// let Stus = {
//     name: `Vasyl'`,
//     surname: `Stus`
// }

// let NewStus = Object.create(Parent); // {} + Prototype=Parent

// Object.assign(NewStus, Stus);
// console.log(NewStus);



// console.log( Stus );
// console.log( Stus.getInfo() );

// const FRUIT = {
//     getFruitInfo(){
//         return `${this.name} is fruit.`
//     }
// }

// fruits
//     .map(product => {
//         let newFruit = Object.create(FRUIT); // {} + Prototype: FRUIT;
//         return Object.assign(newFruit, product);
//     })
//     .map(product => {
//         console.log(product);
//         return product;
//     })
//     .forEach(product => console.log(product.getFruitInfo()));

// OOP

// Class

// class Dog{
//     constructor(name, age){
//         this.type = `dog`;
//         this.getVoice = function(){
//             return `gav-gav`
//         }
//         this.fullname = name;
//         this.age = age*7;
//         this.dateStart = new Date().getFullYear(); //
//     }
// }

// let dog = new Dog(`Patron`, 2); // {}.constructor(`Patron`, 2)
// console.log(dog);

class Donor{
    constructor(name, surname, group, rezus){
        this.fullname = `${name} ${surname}`;
        this.groupRezus = `${group}${rezus}`;
        this.city = `Kyiv`;
        this.dateStart = new Date();
    }
}

const users = [
    {
        name: `Anna`,
        surname:  `Sheva`,
        group: 1,
        rezus: `-` 
    },
    {
        name: `Inna`,
        surname:  `Stus`,
        group: 4,
        rezus: `+` 
    },
    {
        name: `Oleg`,
        surname:  `Ukrainka`,
        group: 2,
        rezus: `-` 
    }
]

const usersDonors = users
    .map(user => {
        return new Donor(user.name, user.surname, user.group, user.rezus);
    });

console.log(usersDonors);


// SOLID

// get/set

// static methos

// Object.defineProperty

// call/apply/bind