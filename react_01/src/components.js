const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const animals = [`cat`, `dog`, `lion`];
const users = [`Lesya`, `John`, `Yevhen`];

function ListSyntax({ title, colorTitle=`purple`, list=[] }) {
  const titleStyle = {
    color: colorTitle,
    fontStyle: `italic`,
  };

  return title && list.length ? (
    <React.Fragment>
      <h3 style={titleStyle}>List {title}</h3>
      <ul>
        {
            list.map((item,index) => <li key={index}>{item}</li>)
        }
      </ul>
    </React.Fragment>
  ) : null;
}

const List = ({list=[]}) => {
  
    return list.length 
    ? <ul>
        {
            list.map((item, index) => <ListItem key={index} index={index} item={item} list={list} />)
        }
    </ul> 
    : null;
}

const ListItem = ({item, index, list}) => {
    return <li data-id={`li_${index}`}>{item} <Button title={"Delete"} index={index} list={list} /></li>;
}

const Button = ({title, index, list}) => {
    return <button onClick={() => {
      list.splice(index,1);

      console.log(list);
      console.log(animals);
    }}>{title}</button>
}

root.render(
  <React.Fragment>

    <List list={animals} />
    <List />

  </React.Fragment>
);
