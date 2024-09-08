// function multiply (num1, num2){
//     const multi = num1 * num2;
//     return multi;
// }

// const result = multiply (7, 8);
// const res = multiply (7, '2');
// console.log(result, res);

/** Example 2 as string */

function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number '){
        return 'please provide a number'
    }

    const multi = num1 * num2;
    return multi;
}

const result = multiply (7, 'eight');
// const res = multiply (7, '2');
// console.log(result);

// ---------------------------------------------------

function fullName (first, second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'please provide a string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName ('Rehan', 'Sohan');
const names = fullName (6, 7);
console.log(full);
console.log(names);

//-----------------------

function getPrice (product){
    if(typeof product !== 'object'){
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}

// const price = getPrice({name: 'shampoo', price: 676, color: 'blue'});
const price = getPrice(9);
console.log(price);


//---------------------

function getSecond(numbers){
    console.log(typeof numbers);
    if(Array.isArray(numbers)=== false){
        return 'please provide an array';
    }
     const second = numbers[1];
     return second;
}
const second = getSecond(4);
// const second = getSecond([4, 2, 45, 76]);
console.log(second);