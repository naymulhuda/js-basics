/** 
 * Create a function that will return only the even numbers
 * return the sum of even numbers
*/

// Even Number

function evenNumbersOnly(numbers){
    // console.log(numbers);
    const evens = [];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

// const numbers = [5, 7, 55, 76, 3, 67, 88, 54]
// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens);
console.log('-------------END----------')

// Sum of even numbers

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const numbers = [45, 65, 77, 44, 88, 29, 34, 67, 76, 98, 90, 5]
const sum = sumOfEvenNumbers(numbers);

console.log('sum of even numbers', sum);