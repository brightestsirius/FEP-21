let { foo } = require(`./utils`);

const x = 10;
const country = `Ukraine`;

// console.log(x);
// console.log(country);

module.exports = { x, country };

// setTimeout(() => console.log(`after 2s`), 2000);

console.log(foo(10));
