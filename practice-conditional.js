// practice -1

/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// Solution

// const burgerPrice = 300;
// if(burgerPrice > 500) {
//     console.log('free cook')
// }
// else{
//     console.log('coke: 30tk')
// }

// Sample 2
// const burgPrice = 600;
// if(burgPrice > 500) {
//     console.log('free cook')
// }
// else{
//     console.log('coke: 30tk')
// }



// practice -2

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// So.lution -

// const weight = 2000;
// const height = 200;
// const BMI = (weight / height)*2;
// console.log(BMI);

// if(BMI < 18.5) {
//     console.log('You are underweight');
// }
// else if(BMI >= 18.5 && BMI <= 29.9) {
//     console.log('You are normal');
// }
// else if(BMI >= 25 && BMI <= 24.9) {
//     console.log('You are overwight');
// }
// else {
//     console.log('You are obese');
// }





// practice -3

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// Solution -
const score = 66;

// if(score >= 90 && score <= 100) {
//     console.log('Grade- A');
// }
// else if(score >= 80 && score <= 89) {
//     console.log('Grade- B');
// }
// else if(score >= 70 && score <= 79) {
//     console.log('Grade- C');
// }
// else if(score >= 60 && score <= 69) {
//     console.log('Grade- D');
// }
// else {
//     console.log('Grade - F');
// };



// Practice - 4

/***

if you get more then 80 then inside your friend score. 
   - If your friend get more than 80. then go for a lunch. 
   - if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
   - if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
   - if your friend get less than 40, block your friend
   - if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// Solution

let myScore = 87;
let friendScore = 70;

// if (myScore > 80) {
//     if (friendScore > 80){
//         console.log('go for a lunch');
//     }
//     else if(friendScore < 80 && friendScore >= 60){
//         console.log('good luck next time');
//     }
//     else if(friendScore < 60 && friendScore >= 40){
//         console.log('keep your friends message unseen')
//     }
//     else if (friendScore < 40){
//         console.log('block your friend')
//     }
// }
// else{
//     console.log('go to home and sleep and act sad');
// }



// Practice - 5

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// Solution

let num1 = 80;
let num2 = 50;
let result;

// if (num1 > num2) {
//     result = num1*2;
// }
// else{
//     result = num1 + num2;
// }

// console.log(result);

//  With Ternary

// num1 > num2 ? result = num1*3 : result = num1 - num2;
// console.log(result);

// Sample 2
let num3 = 30;
let num4 = 70;
let sum;

// if (num3 > num4) {
//     sum = num3*2;
// }
// else{
//     sum = num3 + num4;
// }

// console.log(sum);



// Practice - 6

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// Solution

let age = 50;
let isStudent = true;
let price = 700;

if(age < 10){
    console.log('free');
}
// Student discount
else if(isStudent = false){
    // 50% discount
  const discount =  price * 50 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
else if(age >= 60) {
    // 15% discount
    const offer = price * 15 / 100;
    const payTotal = price - offer;
    console.log(payTotal);
}
else {
    console.log('regular ticket tk.800');
}











