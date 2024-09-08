// Strings

// const country = 'Bangladesh';
// const division = "Dhaka";
// const district = `Barishal`;
// const thana = new String('Demra');

// console.log(typeof thana);

// const num = [2, 3, 6, 4, 67, 43];
// console.log(num);

// num[3] = 55;
// console.log(num)
// console.log(num.length);
// console.log(num[2]);
// console.log(num[4]);

const capital = 'Dhaka';
// console.log(capital.length)
// console.log(capital[3]);
// console.log(capital);

// String is immutable / not changeable
// capital[1]='c';
// console.log(capital);




// Upper case and lower case string

const college = 'Rajuk Uttora Model College';
console.log(college);
console.log(college.toLocaleLowerCase())
console.log(college.toUpperCase())

// Comparing
const sub = 'Chemistry';
console.log(sub);
const book = 'chemistry';

if(sub.toLowerCase() === book.toLowerCase()) {
    console.log('Perfect Choose');
}
else {
    console.log('not perfect');
}

// if(sub === book) {
//     console.log('perfect choose');
// }
// else {
//     console.log('not perfect');
// }


//  TO Remove White Space in first and last- use trim
const drink = ' water';
const liquid = 'water '

if(drink.trim() === liquid.trim()){
    console.log('drink is rqaul to liquid');
}
else {
    console.log('drink is not eaual to liquid')
}


// let str = "Mississippi";
// console.log(str.indexOf("i", 3));
let str = "Mississippitydidfdwi";
console.log(str.indexOf("s", 3));