function tenTimes (number){
    const result = number / 10;
    return result;
}

function cutHalf (number){
    const half = number / 2;
    return half;
}

//  return as variable

tenTimes(100)
const output = tenTimes(100);
console.log('output', output);

const bigNumber = tenTimes(3000);

//------------------

function add (price1, price2){
    const total = price1 + price2;
    return total;
}

// Alternative for return - 1

const bill = add(6, 67);

function add2 (price1, price2){
   return price1 + price2;
}

const bill2 = add2(20, 60);

console.log(bill, bill2);

// Alternative -2

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = num1 * num2;
    const result = mult / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);
console.log('-------------------')
const count = doMath(20, 50);
console.log(count);
console.log('-------------------')

