const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

const test = (a, b) => add(a, b) / sub(a, b);

module.exports = { add, sub, mul, div, test };
