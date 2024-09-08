const persons = ['sahed', 'akif', 'latif', 'noyon', 'siraj', 'kalam'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort ---->

const numbers = [3, 24, 2, 8, 77, 9, 6, 3];

// Ascending ----> smaller to larger
// Descending ----> larger to smaller

// const numbers_asc = numbers.sort();
const numbers_asc = numbers.sort(function (a, b) {return a - b});
const numbers_dsc = numbers.sort(function (a, b) {return b - a});
console.log(numbers_asc);