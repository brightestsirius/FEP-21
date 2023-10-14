const API = `https://api.chucknorris.io/jokes`;

const jokeForm = document.querySelector(`#jokeForm`);
const jokesContainer = document.querySelector(`#jokesContainer`);
const jokeCategories = document.querySelector(`#jokeCategories`);
const jokeTypes = document.querySelectorAll(`input[name="jokeType"]`);

if (jokeForm) {
  jokeForm.addEventListener(`submit`, async (e) => {
    e.preventDefault();

    let jokeType = e.target.querySelector(
      `input[name="jokeType"]:checked`
    ).value;

    switch (jokeType) {
      case `random`:
        try {
          let requestJoke = await fetch(API + `/random`);
          if (!requestJoke.ok) throw new Error(requestJoke.status);
          let joke = await requestJoke.json();

          renderJoke(joke);
        } catch (err) {
          console.log(err);
        }
        break;
      case `categories`:
        let cat = document.querySelector(
          `input[name="jokeCategory"]:checked`
        ).value;

        try {
            let requestJoke = await fetch(API + `/random?category=${cat}`);
            if (!requestJoke.ok) throw new Error(requestJoke.status);
            let joke = await requestJoke.json();
  
            renderJoke(joke);
          } catch (err) {
            console.log(err);
          }
          break;
    }
  });
}

const renderJoke = (joke) => {
  const jokeBlock = document.createElement(`div`);
  jokeBlock.className = `joke`;

  const jokeBlockValue = document.createElement(`p`);
  jokeBlockValue.innerHTML = joke.value;
  jokeBlock.append(jokeBlockValue);

  if(joke.categories.length){
    let cats = document.createElement(`p`);
    cats.innerHTML = `Categories: ${joke.categories.join(`, `)}`;
    jokeBlock.append(cats);
  }

  jokesContainer.append(jokeBlock);
};

const renderCategories = async () => {
  try {
    let requestCategories = await fetch(API + `/categories`);
    if (!requestCategories.ok) throw new Error(requestCategories.status);
    let categories = await requestCategories.json();

    let LIs = categories
      .map(
        (cat, index) => `<li>
                <label>
                    ${cat} <input type="radio" value="${cat}" name="jokeCategory" ${
          !index ? "checked" : ""
        }>
                </label>
            </li>`
      )
      .join(``);

    jokeCategories.innerHTML = LIs;
  } catch (err) {
    console.log(err);
  }
};

renderCategories();

jokeTypes.forEach((input) => {
  input.addEventListener(`change`, (e) => {
    if (e.target.value === `categories`) jokeCategories.classList.add(`show`);
    else jokeCategories.classList.remove(`show`);
  });
});
