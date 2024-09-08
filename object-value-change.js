const person = {
    name: 'Kamal Ahmed',
    age: 25,
    profession: "marketer",
    salary: 25000,
    isMarried: true,
    'fav places': ['dhk', 'syl', 'bar', 'cum']
}

// Change or ACCESS OF value of object
person.salary = 30000;
person.profession = "developer";
person['age'] = 35;
person['fav places'] = ['maldieves', 'kashmir', 'switz', 'greece']
console.log(person);

const keyName = 'profession';
console.log(person[keyName]);

const incName = 'salary';
console.log(person[incName]);

// change the value
const propname = 'name';
person[propname] = 'Shakil Ahsan';
console.log(person);