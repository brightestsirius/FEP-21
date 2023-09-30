// localStorage/sessionStorage

// const toJSON = (value) => JSON.stringify(value);
// const fromJSON = (value) => JSON.parse(value);

// localStorage.setItem(`color`, toJSON(`red`));
// localStorage.setItem(`age`, toJSON(24));
// localStorage.setItem(`isMarried`, toJSON(true));
// localStorage.setItem(`animals`, toJSON([`cat`, `dog`, `lion`]));
// localStorage.setItem(
//   `user`,
//   toJSON({
//     firstName: `Ivan`,
//     year: 1990,
//   })
// );

// console.log(fromJSON(localStorage.getItem(`color`)));
// console.log(fromJSON(localStorage.getItem(`age`)));
// console.log(fromJSON(localStorage.getItem(`isMarried`)));
// console.log(fromJSON(localStorage.getItem(`animals`)));
// console.log(fromJSON(localStorage.getItem(`user`)));

// sessionStorage.setItem(`color`, toJSON(`red`));

// let animalsStorage = localStorage.getItem(`animals`); // null : []
// if(!animalsStorage){
//     localStorage.setItem(`animals`, JSON.stringify([]));
// } else{
//     animalsStorage = JSON.parse(animalsStorage);
//     const ul = document.createElement(`ul`);
//     ul.id = `animalsList`;

//     animalsStorage
//         .forEach(item => {
//             let li = document.createElement(`li`);
//             li.innerHTML = `${item.name} is ${item.isWild ? `wild` : `not wild`}`;
//             ul.append(li);
//         }) 

//     document.body.append(ul);
// }

// const dataForm = document.querySelector(`#dataForm`);

// dataForm.addEventListener(`submit`, e => {
//     e.preventDefault();

//     let inputName = e.target.querySelector(`input[data-name="name"]`),
//         inputWild = e.target.querySelector(`input[data-name="wild"]`);

//     let animal = {
//         name: inputName.value,
//         isWild: inputWild.checked
//     };

//     const animalsStorage = JSON.parse(localStorage.getItem(`animals`)); // [] || [{name: `cat`, isWild: false}]
//     animalsStorage.push(animal);
//     localStorage.setItem(`animals`, JSON.stringify(animalsStorage));

//     let animalsList = document.querySelector(`#animalsList`);
//     if(!animalsList) {
//         animalsStorage = JSON.parse(animalsStorage);
//         const ul = document.createElement(`ul`);
//         ul.id = `animalsList`;
//         document.body.append(ul);
//     }

//     let li = document.createElement(`li`);
//     li.innerHTML = `${animal.name} is ${animal.isWild ? `wild` : `not wild`}`;
//     animalsList.append(li);

//     console.log(animal);
// })