const x = 10;
const y = 20;

const sum = () => x+y;

class User{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

console.log(`hello`);
console.log(sum(x,y));

let YevhenKonovaletz = new User(`Yevhen`, `Konovaletz`);
console.log(YevhenKonovaletz);
console.log(YevhenKonovaletz.getFullName());