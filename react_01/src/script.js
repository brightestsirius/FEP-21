const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const Sheva = `Taras`;

const animals = [`cat`, `dog`, `lion`];
const animalsTableThead = [`Type`, `Name`, `Age`];

const TarasSheva = {
  name: `Taras`,
  surname: `Sheva`,
  age: 100,
};

const users = [
  {
    name: `User 1`,
    age: 10,
  },
  {
    name: `User 2`,
    age: 12,
  },
  {
    name: `User 3`,
    age: 13,
  },
];

const animalsObjects = [
  {
    type: `cat`,
    name: `Tom`,
    age: 10,
  },
  {
    type: `dog`,
    name: `Patron`,
    age: 3,
  },
  {
    type: `mouse`,
    name: `Jerry`,
    age: 2,
  },
];

const isTrue = false;

const toCapitalize = (value) =>
  value[0].toUpperCase() + value.slice(1).toLowerCase();

root.render(
  <React.Fragment>
    <h1>Hello, {Sheva}!</h1>
    <h3>{10 + 20}</h3>

    <ul>
      {animals.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <table>
      <thead>
        <tr>
          {animalsTableThead.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {animals.map((item, index) => (
          <tr key={index}>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <ol>
      {Object.keys(TarasSheva).map((item, index) => (
        <li key={index}>
          {toCapitalize(item)}: {TarasSheva[item]}
        </li>
      ))}
    </ol>

    {users.map((user, index) => (
      <ul key={index}>
        {Object.keys(user) // [`name`, `age`]
          .map((item, i) => (
            <li key={i}>{user[item]}</li>
          ))}
      </ul>
    ))}

    <table>
      <caption>Animals Table</caption>
      <thead>
        <tr>
          {animalsTableThead.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {animalsObjects.map((animal, index) => (
          <tr key={index}>
            {Object.keys(animal).map((item, i) => (
              <td key={i}>{animal[item]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    {/* {isTrue ? (
      <h3 style={{ color: `green`, fontWeight: 700 }}>is true</h3>
    ) : (
      <h3 style={{ color: `red`, fontWeight: 700 }}>is false</h3>
    )} */}

    { isTrue ? <h3 style={{ color: `green`, fontWeight: 700 }}>is true</h3> : null }

  </React.Fragment>
);
