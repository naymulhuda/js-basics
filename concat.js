const first = 'Abidur';
const last = 'Rahman';

// first way
// const fullName = first + last ;

// for gap
const fullName = first+ ' ' + last ;
// console.log(fullName);

// 2nd way
// const fullName2 = first.concat(last);
const fullName2 = first.concat(' ').concat(last);
console.log(fullName2)


// includes
//  it will tell if d is available or not with true false

console.log(last.includes('d'));
console.log(first.includes('d'));

