const person = {
    name: 'Kamal Ahmed',
    age: 25,
    profession: "marketer",
    salary: 25000,
    isMarried: true,
    'fav places': ['dhk', 'syl', 'bar', 'cum']
}
// console.log(person);

// dot notation - dot symbol diye object property er value access neya
// console.log(person.profession)
const income = person.salary;
// console.log(income);

// bracket notation - third backet diye access neya
console.log(person['age'])

const profit = person['salary'];
console.log(profit)

console.log(person["fav places"])