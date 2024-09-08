// Conditional return
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(500));
console.log(isEven(101));
console.log(isEven(90));
console.log('-------- EVEN -------------')


// function isOdd(number){
//     if(number % 2 === 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

console.log(isOdd(45))
console.log(isOdd(54))

// Alternative for conditional return
function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}