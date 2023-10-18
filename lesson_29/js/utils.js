const sum = (...args) => args.reduce((value, item) => {
    value += item;
    return value;
})

const f1 = (value) => f2(value);
const f2 = value => value**2;

export {sum, f1};