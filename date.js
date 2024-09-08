const today = new Date();
const date = new Date('2026-11-18');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(1992, 0, 24)
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString());
console.log(specificDate.toLocaleString('en-GB'));