function schoolData(){
    // console.log('school name');
    // console.log('school location');
    // console.log('school playground');
    // console.log('students number');
}

// schoolData();
function square (number) {
    // console.log(number);
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is', borgo);
}

square(67);
// now you can calculate square of any number
square(5);
square(12);
square(10);
square(9);




function add(num1, num2) {
   const sum = num1 + num2;
   console.log(sum);
}

add(50, 55);
add(1000, 60);

function addAll(a, b, c, d, e){
    const total = a + b + c+ d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(2, 5, 5, 6, 8);
// NAN will be shown if you missed any number / number is not accurate
addAll(2, 5, 5, 6);