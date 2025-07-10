// console.log('Hello world');

// console.log(__dirname);
// console.log(__filename);

// console.log(module);

// every js file is a module in node js

// import { add, test } from './math.js';
import math from './math.mjs';

console.log(math.add(2, 3));
console.log(math.test(2, 3));
