/**  Swaping value */

let a = 8;
let b = 3;

console.log(a, b);

const temp = a;
a = b;
b = temp;
console.log(a, b);

// --------------------------------

let x = 7;
let y = 63;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);
