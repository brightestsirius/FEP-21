// form

// input, select, textarea

// const countryInput = document.querySelector(`#countryInput`);
// const countryValue = document.querySelector(`#countryValue`);

// const handleInput = event => {
//     console.log(event.target.value);
//     countryValue.innerHTML = +event.target.value + 100;

//     // if(event.data){
//     //     countryValue.innerHTML += event.data;
//     // } else{
//     //     countryValue.innerHTML = countryValue.innerHTML.slice(0,-1);
//     // }
// }

// countryInput.addEventListener(`input`, handleInput);
// countryInput.addEventListener(`change`, handleInput);

// const colorInput = document.querySelector(`#colorInput`);
// const block = document.querySelector(`#block`);

// const blockBg = (event) => {
//     console.log(event.target.value);
//     block.style.background = event.target.value;
// }

// colorInput.addEventListener(`change`, blockBg);

// const sizesInputs = document.querySelectorAll(`input[name=size]`);
// console.log(sizesInputs);

// sizesInputs.forEach(item => {
//     if(item.checked) console.log(item.value);
// })

// sizesInputs.forEach(item => console.log(item.value, item.checked));

// sizesInputs.forEach(item => {
//     item.addEventListener(`change`, (event) => {
//         console.log(event.target.value, event.target.checked);
//     })
// })

// const sizeInput = document.querySelector(`input[name=size]:checked`);
// console.log(sizeInput.value);

// let sizeCheckboxes = document.querySelectorAll(`input[name=size]:checked`);
// console.log(sizeCheckboxes);

// sizeCheckboxes = [...sizeCheckboxes];
// console.log(sizeCheckboxes);

// let sizeCheckboxesValues = sizeCheckboxes.map(item => item.value);
// console.log(sizeCheckboxesValues);

// const selectSize = document.querySelector(`#selectSize`);
// console.log(selectSize.value);

// selectSize.addEventListener(`change`, event => {
//     console.log(event.target.value);
// })

// const selectSize = document.querySelector(`#selectSize`);
// const selectedSizesOptions = [...selectSize.selectedOptions];
// const selectedSizesValue = selectedSizesOptions.map(item => item.value);

// console.dir(selectedSizesValue);

// const textareaField = document.querySelector(`#textareaField`);
// console.log(textareaField.value);

// textareaField.addEventListener(`change`, event => {
//     console.log(event.target.value);
// })

// button
// const btn = document.querySelector(`#btn`);

// btn.addEventListsener(`click`, (event) => {
//     console.log(event.target.innerHTML);
//     console.log(event.target.dataset.price);
// })

const handleErrors = (form) => {
    let errorItems = form.querySelectorAll(`*.error`);
    // console.log(errorItems);
    if(errorItems.length){
        errorItems.forEach(item => item.classList.remove(`error`));
    }
}

const inputValidation = element => {
    if(element.value === ``){
        element.classList.add(`error`);
        return false;
    }

    return true;
}


const submitForm = event => {
    event.preventDefault();
    handleErrors(event.target);

    let name = event.target.querySelector(`input[data-name="name"]`);
    let email = event.target.querySelector(`input[data-name="email"]`);
    
    let yearOfBirth = event.target.querySelector(`input[data-name="yearOfBirth"]`);
    // if(!inputValidation(yearOfBirth)) return;
    if(inputValidation(yearOfBirth) === false) return;

    let gender = event.target.querySelector(`input[name=gender]:checked`);
    
    let animalsInputs = event.target.querySelectorAll(`input[name=animal]:checked`);
    let animals = [...animalsInputs].map(item => item.value);

    let country = event.target.querySelector(`select[data-name="country"]`);
    
    let languagesSelect = event.target.querySelector(`select[data-name="languages"]`);
    let languages = [...languagesSelect.selectedOptions].map(item => item.value);


    let user = {
        name: name.value,
        email: email.value,
        year: yearOfBirth.value,
        gender: gender.value,
        animals,
        country: country.value,
        languages
    }

    console.log(user);
}

const registrationForm = document.querySelector(`#registrationForm`);

if(registrationForm){
    registrationForm.addEventListener(`submit`, submitForm);

    let btnCancel = registrationForm.querySelector(`button[data-name="btnCancel"]`);

    btnCancel.addEventListener(`click`, () => {
        registrationForm.reset();
    })
}


const loginForm = document.querySelector(`#loginForm`);
loginForm && loginForm.addEventListener(`submit`, submitForm);

// const links = document.querySelectorAll(`a`);
// console.log(links);

// links.forEach(link => {
//     link.addEventListener(`click`, event => {
//         event.preventDefault();

//         let href = event.target.href;
//         href = href.slice(0,-1);
//         href += `.ua`;
//         console.log(href);

//         setTimeout(() => {
//             window.open(href, `_blank`);
//         }, 1000);
//     })
// })

// preventDeafault()

// localStorage/sessionStorage

// call/apply/bind