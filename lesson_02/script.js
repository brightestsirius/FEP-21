// combine variables
// document.write()

// country = `Ukraine`;
// city = `Kyiv`;

// cityCountry = `${city} is a capital of ${country}`;

// console.log(`${cityCountry}.`);
// console.log(`${cityCountry}!!!`);
// console.log(`<h1>${cityCountry}</h1>`);

// document.write(`<h1>${cityCountry}</h1>`);
// document.write(`<h3>Hello, world!</h3>`);

// document.write(`
//     <table class="data">
//         <thead>
//             <tr>
//                 <th>First</th>
//                 <th>Second</th>
//             </tr>
//         </thead>
//     </table>`
// );

// increment

// x = 10;

// x = x+1;
// x += 5; // x = x+5, x += n
// x++; // x = x+1
// x++;
// ++x;

// console.log(x); // 11

// console.log(x++); // 10; 10+1
// console.log(x); // 11;

// console.log(++x); // 11
// console.log(x);

// decrement

// x = 10;

// // x = x-1; // 9
// // x -= 1; //  x -= 5; // 8
// // x--; // 7
// --x; // 6

// console.log(x);

// x = 20;
// x = x*2 + x/2 + x+5; // 40 + 10 + 20 + 5 = 75

// console.log(x);

// country = `Ukraine`;

// // country = country + `!!!`;
// country += `!!!`; // country = country + `!!!`;

// console.log(country); // Ukraine!!!

// Math operations

// Number/+

// x = 10;
// y = `20`;
// console.log(y);

// // y = Number(y);
// y = +y;
// console.log(y);

// sum = x+y;

// console.log(sum); // 30

// console.log(`10` + 20); //1020
// console.log(`10` - 20); // 10-20
// console.log(`10` * 20);
// console.log(`10` / 20);

// a = +`20`;
// b = Number(`100`);
// c = +`2`;

// x = (a + b) * c; // 20 + 200 => 220

// console.log(x);

// x = +`10` + +`20`;

// console.log(x);

// x = -`10`; // x = -1 * `10` => -10
// // +'10 = 1 * '10' => 10

// console.log(x);

// x = `10 books`;

// x = +(x); // NaN

// // sum = x+10; // NaN + 10;

// console.log(x);
// console.log(sum); // NaN

// NaN = not a number

// parseInt/parseFloat

// x = `10.3578.234 books`;

// // x = parseInt(x); // 10
// x = parseFloat(x); // 10.3578

// console.log(x);

// countOfBooks = parseFloat(`10.35456456 books`); // 10.35
// console.log(countOfBooks);

// toString

// x = String(10);
// console.log(x);

// NaN

// Math.round() / Math.floor() / Math.ceil()

// x = 10.2;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);

// console.log(x);

// <number>.toFixed()

// x = 10.23423;

// x = +x.toFixed(2); // string
// x = +(x);
// x = parseFloat(x.toFixed(3));

// console.log(x);

// Math.pow

// x = 2;
// y = 4;

// // pow = Math.pow(x, y);
// pow = x**y;

// console.log(pow);

// x = 9;
// y = 2;

// zalyshok = x % y; // 1

// console.log(zalyshok);

// Math.random();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// randomValue = Math.round( Math.random()*100 );
// console.log(randomValue); // 0-1

// min_lovely = -10;
// max_lovely = 10;

// randomValue = Math.floor(Math.random() * (max_lovely - min_lovely + 1) + min_lovely);

// console.log(randomValue);

// alert/prompt

// console.log(`before alert`);

// alert(`Hello, user`);

// console.log(`after alert`);

// userName = prompt(`Enter name`); // string, "", null

// console.log(`Hello, ${userName}`);

// trim()

// userName = `  taras  `;
// console.log(userName);

// userName = userName.trim();
// console.log(userName);

// replace() / replaceAll()

// userEmail = `  taras  @gmail.com   `;
// console.log(userEmail);

// // chain methods

// userEmail = userEmail
//     .replaceAll(` `, ``)
//     .replace(`t`, `T`)
//     .replace(`a`, `A`);

// console.log(userEmail);

// userEmail = userEmail.replace(` `, ``);
// userEmail = userEmail.replaceAll(` `, ``);
// userEmail = userEmail.replace(`t`, `T`);
// // userEmail = userEmail.replaceAll(`a`, `A`);
// userEmail = userEmail.replace(`a`, `A`);
// console.log(userEmail);

userName = prompt(`Enter name`); // null
userName = userName.trim();

userEmail = prompt(`Enter email`);
userEmail = userEmail.replaceAll(` `,``);

console.log(`User name: ${userName}. User email: ${userEmail}.`);

document.write(`<ul>
    <li><strong>Name:</strong> ${userName}</li>
    <li><strong>Email:</strong> ${userEmail}</li>
</ul>`);

// EXAMPLE FOR RENDER DATA INTO DIV#userInfo

userInfo = document.querySelector(`#userInfo`);
userInfo.innerHTML = `<ul>
<li><strong>Name:</strong> ${userName}</li>
<li><strong>Email:</strong> ${userEmail}</li>
</ul>`;

// EXAMPLE FOR RENDER DATA INTO DIV#userInfo

// null

// string.length
// undefined

// slice()
// toUpperCase() / toLowerCase()


// Boolean

// Comparisons

// Boolean() / !!

// startsWith() / endsWith()
// indexOf()
// includes()
// charAt()

// if/else

// isNaN()

// Logical operators: &&, ||