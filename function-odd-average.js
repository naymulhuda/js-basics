
/** Basic structure */

// function oddAverage (numbers){
//      console.log(numbers);
// }

// const numbers = [46, 76, 45, 3, 86, 97, 65]
// const avg = oddAverage(numbers);
// console.log('average of odd numbers is', avg);



/** Second step */

// use for of lopp to get the numbers one by one/ separately
// function oddAverage (numbers){
//     for(const number of numbers){
//         console.log(number);
//     }
// }

// const numbers = [46, 76, 45, 3, 86, 97, 65]
// const avg = oddAverage(numbers);
// console.log('average of odd numbers is', avg);

/** Checking odd number */

// function oddAverage (numbers){
//     for(const number of numbers){
//         if(number % 2 === 1){
//             console.log(number)
//         }
//     }
// }

// const numbers = [46, 76, 45, 3, 86, 97, 65, 53, 33]
// const avg = oddAverage(numbers);
// console.log('average of odd numbers is', avg);


// Calculation of average of odd numbers


/** step 1 - put odd numbers in an array */


// function oddAverage (numbers){
//     const odds = [];
//     for(const number of numbers){
//         if(number % 2 === 1){
//             // console.log(number)
//             odds.push(number)
//         }
//     }
//     console.log(odds);
// }

// const numbers = [46, 76, 45, 3, 86, 97, 65, 53, 33]
// const avg = oddAverage(numbers);
// console.log('average of odd numbers is', avg);


/** step 2 - calculate sum of odd numbers in array */


function oddAverage (numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number)
            odds.push(number)
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
       sum = sum + number;
    }
    const size = odds.length;
    console.log('sum of odd numbers is',sum);
    console.log('size of odd numbers is',size);

    const avg = sum / size;
    return avg;
}

const numbers = [46, 76, 45, 3, 86, 97, 65, 53, 33]
const avg = oddAverage(numbers);
console.log('average of odd numbers is', avg);
