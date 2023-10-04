// call/apply/bind

const usersTableTbody = document.querySelector(`#usersTable tbody`);

class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    renderTR(){
        const tr = document.createElement(`tr`);
        
        const tdName = document.createElement(`td`);
        tdName.innerHTML = this.name;

        const tdAge = document.createElement(`td`);
        tdAge.innerHTML = this.age;

        const tdAction = document.createElement(`td`);
        
        const btnDelete = document.createElement(`button`);
        btnDelete.innerHTML = `Delete`;

        btnDelete.addEventListener(`click`, () => {
            console.log(`arrow fn`, this);
        });

        let user = this;
        btnDelete.addEventListener(`click`, function(){
            console.log(`old fn`, this);
        });

        btnDelete.addEventListener(`click`, this.deleteAction.bind(this));

        tdAction.append(btnDelete);

        tr.append(tdName, tdAge, tdAction);
        usersTableTbody.append(tr);
    }

    deleteAction(){
        console.log(`${this.name} is deleting`);
    }
}

const TarasSheva = new User({name: `Taras`, age: 80});
TarasSheva.renderTR();

console.log(TarasSheva);

// REST

// fetch

// Promise

// async/await