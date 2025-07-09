// console.log('Hello world');

// console.log(__dirname);
// console.log(__filename);

// console.log(module);

// every js file is a module in node js

// import { add, test } from './math.js';
const { add, test } = require('./math');

console.log(add(2, 3));
console.log(test(2, 3));
