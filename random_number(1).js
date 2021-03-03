'use strict'
console.log(`--------✔️✔️✔️------random_number------✔️✔️✔️--------`);

const num = Math.random().toFixed(2);

console.log(`# random number
-random numbers between 0 ~ 1 : `, num); // this will be string cause toFixed return string.

console.log(`expand the number range.
-random numbers between 0 ~ 10: `,Math.floor(num * 10)); // this is number type.

console.log(`-random numbers between 0 ~ 50 : `,(num * 50).toFixed(0));

console.log(`#change the range
-random numbers between -5 ~ 5 : `, ((num * 10) -5).toFixed(0));

console.log(`-random numbers between -25 ~ 25 : `, ((num * 50) - 25).toFixed(0));

console.log(`-random numbers by using Math.floor : `, Math.floor(num * 50 - 25)); // number type.

console.log(`------------random_number Fin--------------`);
