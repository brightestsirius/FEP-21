var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var animals = ["cat", "dog", "lion"];
var users = ["Lesya", "John", "Yevhen"];

function ListSyntax(_ref) {
  var title = _ref.title,
      _ref$colorTitle = _ref.colorTitle,
      colorTitle = _ref$colorTitle === undefined ? "purple" : _ref$colorTitle,
      _ref$list = _ref.list,
      list = _ref$list === undefined ? [] : _ref$list;

  var titleStyle = {
    color: colorTitle,
    fontStyle: "italic"
  };

  return title && list.length ? React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h3",
      { style: titleStyle },
      "List ",
      title
    ),
    React.createElement(
      "ul",
      null,
      list.map(function (item, index) {
        return React.createElement(
          "li",
          { key: index },
          item
        );
      })
    )
  ) : null;
}

var List = function List(_ref2) {
  var _ref2$list = _ref2.list,
      list = _ref2$list === undefined ? [] : _ref2$list;


  return list.length ? React.createElement(
    "ul",
    null,
    list.map(function (item, index) {
      return React.createElement(ListItem, { key: index, index: index, item: item, list: list });
    })
  ) : null;
};

var ListItem = function ListItem(_ref3) {
  var item = _ref3.item,
      index = _ref3.index,
      list = _ref3.list;

  return React.createElement(
    "li",
    { "data-id": "li_" + index },
    item,
    " ",
    React.createElement(Button, { title: "Delete", index: index, list: list })
  );
};

var Button = function Button(_ref4) {
  var title = _ref4.title,
      index = _ref4.index,
      list = _ref4.list;

  return React.createElement(
    "button",
    { onClick: function onClick() {
        list.splice(index, 1);

        console.log(list);
        console.log(animals);
      } },
    title
  );
};

root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(List, { list: animals }),
  React.createElement(List, null)
));