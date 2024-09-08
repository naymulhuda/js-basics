/**
 *                          Task-1
Take four parameters. Multiply the four numbers and then return the result
 */


function multNumbers (num1, num2, num3, num4){
   const Multiply = num1*num2*num3*num4;
   // console.log(Multiply);
}

multNumbers(1, 2, 5, 10);



/**
 *                          Task-2 
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.lt
 */

function isOdd (number){
   if(number % 2 === 1){
      result = number*2;
      return result;
   }
   else{
      result = number / 2;
      return result;
   }
   
}

// console.log(isOdd(11));
// console.log(isOdd(20));


/**
 *                          Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values
 */




function make_avg(array, size){
   if (array.length !== size) {
      throw new Error("The size of the array does not match the provided size.");
  }
  
  if (size === 0) {
      return 0; 
      // Returning 0 or could handle it as an error depending on the context
  }


   let sum = array.reduce((acc, num) => acc + num, 0);
   let average = sum / size;
   return average;
}

let array = [10, 50, 20, 20, 50];
let size = array.length;
let average = make_avg(array, size).toFixed(0);
console.log('the average of array is', average);





/**
 *                          Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(numbs) {
  const count = numbs.split('0').length -1;
  return count;
}
const numbs = "10010010011"
const zero = count_zero(numbs);
console.log('number zero are', zero)





/**
 *                          Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(number){
   
   if(number % 2 === 0){
      const divide = number / 2;
      console.log(divide);
      return divide;
   }
   
   else{
       const multiply = number * 2;
       console.log(multiply);
       return multiply;
   }

}

const result = odd_even(38);
console.log('result is', result);

