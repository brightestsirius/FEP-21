var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var Sheva = "Taras";

var animals = ["cat", "dog", "lion"];
var animalsTableThead = ["Type", "Name", "Age"];

var TarasSheva = {
  name: "Taras",
  surname: "Sheva",
  age: 100
};

var users = [{
  name: "User 1",
  age: 10
}, {
  name: "User 2",
  age: 12
}, {
  name: "User 3",
  age: 13
}];

var animalsObjects = [{
  type: "cat",
  name: "Tom",
  age: 10
}, {
  type: "dog",
  name: "Patron",
  age: 3
}, {
  type: "mouse",
  name: "Jerry",
  age: 2
}];

var isTrue = false;

var toCapitalize = function toCapitalize(value) {
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
};

root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Hello, ",
    Sheva,
    "!"
  ),
  React.createElement(
    "h3",
    null,
    10 + 20
  ),
  React.createElement(
    "ul",
    null,
    animals.map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        item
      );
    })
  ),
  React.createElement(
    "table",
    null,
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        animalsTableThead.map(function (item, index) {
          return React.createElement(
            "th",
            { key: index },
            item
          );
        })
      )
    ),
    React.createElement(
      "tbody",
      null,
      animals.map(function (item, index) {
        return React.createElement(
          "tr",
          { key: index },
          React.createElement(
            "td",
            null,
            item
          )
        );
      })
    )
  ),
  React.createElement(
    "ol",
    null,
    Object.keys(TarasSheva).map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        toCapitalize(item),
        ": ",
        TarasSheva[item]
      );
    })
  ),
  users.map(function (user, index) {
    return React.createElement(
      "ul",
      { key: index },
      Object.keys(user) // [`name`, `age`]
      .map(function (item, i) {
        return React.createElement(
          "li",
          { key: i },
          user[item]
        );
      })
    );
  }),
  React.createElement(
    "table",
    null,
    React.createElement(
      "caption",
      null,
      "Animals Table"
    ),
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        animalsTableThead.map(function (item, index) {
          return React.createElement(
            "th",
            { key: index },
            item
          );
        })
      )
    ),
    React.createElement(
      "tbody",
      null,
      animalsObjects.map(function (animal, index) {
        return React.createElement(
          "tr",
          { key: index },
          Object.keys(animal).map(function (item, i) {
            return React.createElement(
              "td",
              { key: i },
              animal[item]
            );
          })
        );
      })
    )
  ),
  isTrue ? React.createElement(
    "h3",
    { style: { color: "green", fontWeight: 700 } },
    "is true"
  ) : null
));