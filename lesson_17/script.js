// OOP

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

// const toCapitalize = word => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase();

// class User {
//     constructor(obj){
//         Object.assign(this, obj);
//         this.age = new Date().getFullYear()-this.year;
//     }

//     getFullname(){
//         return `${this.name} ${this.surname} ${this.age}`;
//     }

//     getNationality(){
//         return `ukrainian`;
//     }

//     login(){
//         let nationality = toCapitalize(this.getNationality());
//         return `${nationality} ${this.getFullname()} loged in!`;
//     }

//     register(){
//         return `${this.getFullname()} registered!`;
//     }
// }


// class Student extends User {
//     constructor(obj){
//         super(obj);
//         this.avarageRank = 10;
//     }

//     getFullname(){
//         let superGetFullname = super.getFullname();
//         return `Student ${superGetFullname}`;
//     }

//     getStudentInfo(){
//         return `Student Info ${this.getFullname()}!`;
//     }

//     getStudentMark(){
//         return this.avarageRank/2;
//     }
// }


// let usersLMS = users
//     .map(obj => {
//         let user = new User(obj);

//         if(obj.role === `student`) {
//             user = new Student(obj); // {}.constructor();
//         }

//         return user;
//     })
//     .map(user => {
//         console.log(user);
//         return user;
//     })
//     .forEach(user =>{
//         console.log(user.login());

//         if(user.role === `student`) console.log(user.getStudentInfo());
//     });

// console.log(usersLMS); // undefined

// new Student = {

//     __proto__ : {
//         getStudentInfo(),
//         getStudentMark(),

//         __proto__: {
//             getNationality(){},
//             login(){},
//             register(){}
//         }
//     }
// }

// SOLID

const users = [
    {
        name: `Stepan`,
        surname: `Bandera`,
        year: 1909,
        role: `admin`
    },
    {
        name: `Roman`,
        surname: `Shukhevych`,
        year: 1909,
        role: `lector`
    },
    {
        name: `Yevhen`,
        surname: `Konovalets`,
        year: 1891,
        role: `student`
    }
];

// USER
    // login
    // register

// STUDENT, LECTOR, ADMIN

class User{
    constructor(obj){
        obj = JSON.parse(JSON.stringify(obj));
        delete obj.role;

        Object.assign(this, obj);
        this.age = new Date().getFullYear() - this.year;
    }

    getFullName(){
        return `${this.name} ${this.surname}`;
    }

    login(){
        return `${this.name} ${this.surname} loged in.`;
    }

    register(){
        return `${this.name} ${this.surname} registered.`;
    }
}

class Student extends User{
    constructor(obj){
        super(obj);

        this.level = `Beginer`;
    }

    login(){
        let superLogin = super.login(); // `${this.name} ${this.surname} loged in.`;
        return `Student ${superLogin}`; // `Student ${this.name} ${this.surname} loged in.`;
    }

    getStudentLevel(){
        return `Student ${this.name} ${this.surname} has level ${this.level}.`
    }
}

class Lector extends User{
    constructor(obj){
        super(obj);

        this.type = `Senior`;
    }

    login(){
        let superLogin = super.login().slice(0,-1); 
        return `Lector ${superLogin}!!!`;
    }

    getLectorType(){
        return `Lector ${this.name} ${this.surname} has type ${this.type}.`
    }
}

class Admin extends User{
    constructor(obj){
        super(obj);

        this.access = true;
    }

    login(){
        let superLogin = super.login().slice(0,-1); 
        return `Admin ${superLogin} ;(`;
    }

    getAdminAccess(){
        return `Admin ${this.name} ${this.surname} ${this.access ? `has` : `hasn't`} access.`
    }
}

const USER_ROLES = {
    student: function(obj){
        return new Student(obj);
    },
    admin: obj => new Admin(obj),
    lector: obj => new Lector(obj)
}

users
    .map(obj => {
        let userRole = obj.role;
        let user = USER_ROLES[userRole] 
            ? USER_ROLES[userRole](obj) 
            : new User(obj);

        return user;
    })
    .map(user => {
        console.log(user);
        return user;
    }) // [User, User, User]
    .forEach(user => console.log(user.login()));


// get/set

// static methos

// Object.defineProperty

// call/apply/bind