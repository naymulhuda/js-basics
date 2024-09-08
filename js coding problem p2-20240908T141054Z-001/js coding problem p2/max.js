const disha = 67;
const adib = 45;

if(disha > adib){
    console.log('disha will get strawberry');
}
else{
    console.log('salman will get strawbery');
}

// with function -
function getMax (num1, num2){
    if(num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(56, 87);
const max2 = getMax(67, 76);
const max3 = getMax(53, 23);
const max4 = getMax(max1, max2, max3);
console.log(max1, max2, max3, max4);




