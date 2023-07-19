// string.length
// undefined

// country = `Kyiv`;

// Ukraine
// 0123456

// country[0] // U;

// console.log(country.length);

// console.log(country[0]);
// console.log(country[6]);
// console.log(country[3]);

// lastLetterIndex = country.length-1; // 6
// console.log(country[lastLetterIndex]);

// fullName = `taras sheva`;

// taras  sheva
// 01234 5 678910

// slice() - full copy
// slice(number) - copy from number till end
// slice(number1, number1) = cope from number1 till number2 (without number2)
// slice(-number1)
// slice(number1, -number2)

// firstName = fullName.slice(0, 5); // tara
// secondName = fullName.slice(6); //sheva

// console.log(firstName);
// console.log(secondName);

// country = `Ukraine`;
// copyWord = country.slice(0, -1); // Ukrain
// console.log(copyWord);


// slice()
// toUpperCase() / toLowerCase()

// country = `uKRaine`;

// console.log(country.toUpperCase());
// console.log(country.toLowerCase());

// country = `uKRaine`

// country = country.toLowerCase(); //ukraine

// countryFirstLetter = country[0]; // u
// countryFirstLetter = countryFirstLetter.toUpperCase(); // U

// countryCapitalize = countryFirstLetter + country.slice(1); // U + kraine;

// countryCapitalize = country[0].toUpperCase() + country.slice(1).toLowerCase();

// console.log(countryCapitalize);

// indexOf()

// userName = `taras`;
// console.log( userName.indexOf(`a`) ); // 1

// fullName = `vasyl stus`; // Taras Sheva, Andriy Sheva

// indexOfWhiteSpace = fullName.indexOf(` `); // 5

// firstName = fullName.slice(0, indexOfWhiteSpace); // taras
// firstName = firstName[0].toUpperCase() + firstName.slice(1); // Taras

// secondName = fullName.slice(++indexOfWhiteSpace); // sheva
// secondName = secondName[0].toUpperCase() + secondName.slice(1); // Sheva

// fullName = `${firstName} ${secondName}`;

// console.log(fullName);

// undefined
// country = `Ukraine`;

// console.log(country.length);

// console.log(country[0]);
// console.log(country[6]);
// console.log(country[7]); // undefined

// country += `!`;

// console.log(country);
// console.log(country[7]);

// promptResult = prompt();
// console.log(promptResult);

// Boolean
// true/false

// console.log(typeof true);
// console.log(typeof false);

// console.log(typeof `true`);

// Comparisons

// x = 10;
// y = `10`;

// >
// <
// >=
// <=
// ==
// ===

// !
// !=
// !==

// console.log( x > y ); // false
// console.log( x < y ); // false

// console.log( x >= y ); // true
// console.log( x <= y ); // true

// console.log( x == y ); // true

// console.log(x === y); // false

// console.log( x != y ); // false
// console.log( x !== y ); // true

// !

// 0, '' => false
// number < 0 > number, ' ', 'string' => true

// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false

// console.log(Boolean(-10)); // true
// console.log(Boolean(10.35)); // true
// console.log(Boolean(`  `)); // true
// console.log(Boolean(`hello`)); // true

// console.log( !'' ); // '' => false, !false => true
// console.log( !0 ); // true

// console.log(!`hello`); // false

// Boolean() / !!

// promptResult = prompt(); // null

// якщо (promptResult !== null) тоді, виконую дію

// x = 10;
// y = `taras`;

// console.log(x == y);

// example = parseFloat(prompt(`Enter`)); // 3.556 => 4
// example = +example.toFixed(2); // number
// console.log(example, typeof example);

// startsWith() / endsWith()

// userEmail = `taras@gmail.com`;

// firstLetter = userEmail[0]; // @

// console.log(firstLetter === `@`); // true

// console.log( userEmail.startsWith(`@`) ); // true

// console.log( userEmail.endsWith(`.`) ); // false

// якщо userEmail.startsWith(`@`), тоді

// includes()

// userEmail = `taras@gmail.com`;

// userEmail.indexOf(`@`); // -1 => not exist; >=0 - exist
// console.log(userEmail.indexOf(`@`));

// userEmail.includes(`@`); // true; false
// console.log( userEmail.includes(`@`) );

// charAt()

// console.log( userEmail.charAt(5) ); // @
// console.log( userEmail[5] ); // @

// if/else

// x = 10;

// if(x>20){
//     console.log(`yes, x more then 20`);
// } else{
//     console.log(`no, x less then 20`);
// }

// console.log(`after if`);

// Example:
// x>20
// x>12
// x==10
// x===10
// else `another value`

// x = `11`;

// if(x>20){
//     console.log(`x>20`);
// } else if(x>12){
//     console.log(`x>12`);
// } else if(x==10){
//     console.log(`x==10`);
// } else if(x === 10){
//     console.log(`x===10`);
// } else {
//     console.log(`another value`);
// }

// console.log(`after if`);

// x = `10`;

// if(x>20){
//     console.log(`x>20`);
// }

// if(x>12){
//     console.log(`x>12`);
// }

// if(x==10){
//     console.log(`x==10`);
// }

// if(x === 10){
//     console.log(`x===10`);
// }

// console.log(`after if`);

// if not null

userEmail = prompt(`Enter email`); // Cancel => null;

// debugger;

// if( userEmail === null ){
//     // console.log(`Ok :(`)
// } else{
//     userEmail = userEmail.replaceAll(` `,``).toLowerCase();
//     console.log(`User email: ${userEmail}`);
// }

if( userEmail !== null ){
    userEmail = userEmail.replaceAll(` `,``).toLowerCase();
    console.log(`User email: ${userEmail}`);
}

console.log(`after prompt`);

// Logical operators: &&, ||

// 🍰, 👩🏻‍💻
// email: not empty, count of symbols >5, @

// isNaN()

// Loops

// while statement
// do...while statement
// for statement

// summ, factorial example

// debugger

// switch

// prime numbers

// break
// continue

// loop in loop

// break/continue to point

// ternar

// Array

// Array methods:
//     push
//     unshift
//     pop
//     shift
//     join
//     reverse
//     slice
//     splice
//     concat