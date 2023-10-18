// 💛💜
const API = `https://api.chucknorris.io/jokes`;

const jokeForm = document.querySelector(`#jokeForm`);
const jokesContainer = document.querySelector(`#jokesContainer`);
const jokesFavContainer = document.querySelector(`#jokesFavContainer`);
const jokeCategories = document.querySelector(`#jokeCategories`);
const jokeTypes = document.querySelectorAll(`input[name="jokeType"]`);
const jokeSearch = document.querySelector(`#jokeSearch`);

if (jokeForm) {
  jokeForm.addEventListener(`submit`, async (e) => {
    e.preventDefault();

    let jokeType = e.target.querySelector(
      `input[name="jokeType"]:checked`
    ).value;

    let path;
    switch (jokeType) {
      case `random`:
        path = `/random`;
        break;
      case `categories`:
        let cat = document.querySelector(
          `input[name="jokeCategory"]:checked`
        ).value;

        path = `/random?category=${cat}`;
        break;
      case `search`:
        path = `/search?query=${jokeSearch.value}`;
        break;
    }

    try {
      let requestJoke = await fetch(API + path);
      if (!requestJoke.ok) throw new Error(requestJoke.status);
      let responseJoke = await requestJoke.json();

      if(responseJoke.result){
        responseJoke.result.forEach(joke => renderJoke(joke));
      } else renderJoke(responseJoke); 

    } catch (err) {
      console.log(err);
    }

  });
}

const renderJoke = (joke) => {
  const jokeBlock = document.createElement(`div`);
  jokeBlock.dataset.id = `joke__${joke.id}`;
  jokeBlock.className = `joke__block`;

  const jokeFavBtn = document.createElement(`button`);
  jokeFavBtn.className = `joke__fav`;
  jokeFavBtn.innerHTML = joke.favourite ? `💜` : `💛`;
  jokeFavBtn.addEventListener(`click`, () => {
    let favStorageJokes = localStorage.getItem(`favStorageJokes`);
    if(favStorageJokes) favStorageJokes = JSON.parse(favStorageJokes);
    else favStorageJokes = [];

    if(joke.favourite){
      joke.favourite = false;

      let jokeStorageIndex = favStorageJokes.findIndex(item => item.id === joke.id);
      favStorageJokes.splice(jokeStorageIndex,1);
      localStorage.setItem(`favStorageJokes`, JSON.stringify(favStorageJokes));
      
      let jokeInFavContainer = jokesFavContainer.querySelector(`.joke__block[data-id="joke__${joke.id}"]`);
      jokeInFavContainer.remove();


      let jokeInContainer = jokesContainer.querySelector(`.joke__block[data-id="joke__${joke.id}"]`);
      if(jokeInContainer){
        let jokeInContainerFavBtn = jokeInContainer.querySelector(`.joke__fav`);
        jokeInContainerFavBtn.innerHTML = `💛`;
      }

    } else{
      joke.favourite = true;
      favStorageJokes.push(joke);
      localStorage.setItem(`favStorageJokes`, JSON.stringify(favStorageJokes));
      jokeFavBtn.innerHTML = `💜`;
      renderJoke(joke);
    }
    
  })
  jokeBlock.append(jokeFavBtn);

  const jokeBlockValue = document.createElement(`p`);
  jokeBlockValue.innerHTML = joke.value;
  jokeBlock.append(jokeBlockValue);

  if(joke.categories.length){
    let cats = document.createElement(`p`);
    cats.innerHTML = `<b>Categories</b>: ${joke.categories.join(`, `)}`;
    jokeBlock.append(cats);
  }

  joke.favourite ? jokesFavContainer.append(jokeBlock) : jokesContainer.append(jokeBlock);
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

    if (e.target.value === `search`) jokeSearch.classList.add(`show`);
    else jokeSearch.classList.remove(`show`);
  });
});

const renderFavJokes = () => {
  let favStorageJokes = localStorage.getItem(`favStorageJokes`);
  if(favStorageJokes){
    favStorageJokes = JSON.parse(favStorageJokes);
    favStorageJokes.forEach(joke => renderJoke(joke));
  }
}

renderFavJokes();