const college = ['rajuk', 'ideal', 'residential', 'ideal', 'holycross', 'rajuk', 'vikarunnesa'];
const numbers = [4, 65, 3, 65, 44, 87, 87, 54, 77, 33, 44];

function noDuplicate(array){
 console.log(array);
 const unique = [];
 for(const item of array){
    if(unique.includes(item) === false){
        unique.push(item)
    }
 }
 return unique;
};

const uniqueArray = noDuplicate(college);
const uniqueNumber = noDuplicate(numbers);
console.log(uniqueArray);
console.log(uniqueNumber);


