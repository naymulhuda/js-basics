
/**
 write a function to give me the sum of all numbers in an array
 step -1: Declare a function
 step -2: call check whether the function is called properly
 step -3: set a parameter
 step -4: pass the parameter, check whether parameter is passed in a proper format
 step -5: Do the function tasks (step by step )
 step - 5: get the numnbers by for of loop
 step - 6: do sum
 step - 7 : then return after the loop
 


**/

// ----- Step 1 & 2
// function sumOfNumbers(numbers){
//      console.log(numbers)
// }

// const sum = sumOfNumbers();
// console.log('sum of numbers', sum);

// ----- Step 3 & 4
// function sumOfNumbers(numbers){
//      console.log(numbers)
// }

// const nums = [54, 62, 12, 5];
// const sum = sumOfNumbers(nums);
// console.log('sum of numbers', sum);


// ----- Step 5
// function sumOfNumbers(numbers){
//      for(const number of numbers){
//         console.log(number);
//      }
// }

// const nums = [54, 62, 12, 5];
// const sum = sumOfNumbers(nums);
// console.log('sum of numbers', sum);



// ----- Step 6
// function sumOfNumbers(numbers){
//     let sum = 0;
//      for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//      }
// }

// const nums = [54, 62, 12, 5];
// const sum = sumOfNumbers(nums);
// console.log('sum of numbers', sum);


// ----- Step 7
function sumOfNumbers(numbers){
    let sum = 0;
     for(const number of numbers){
        console.log(number);
        sum = sum + number;
     }
     return sum;
}

// const nums = [4, 62, 2, 5];
// const sum = sumOfNumbers(nums);
// console.log('sum of numbers', sum);

// practice
function sumOfPeople(numbers){
   console.log(numbers);
   let sum = 0;
   for(const number of numbers){
      console.log(number);
      sum = sum + number;
   }
   return sum;
}

const nums = [5646, 1234, 7654, 98989, 67238];
const sum = sumOfPeople(nums) 
console.log('sum of people is', sum);
