// Multi level Condition

// const price = 2000;

// if(price >= 5000 ) {
//     // 10% Dsicount
//     const discount = price * 10 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else if (price > 2500) {
//     //  5% discount
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }
// else {
//     console.log(price);
// }

// ----------------------------------
//------------------------------

let price = 500;
const isLeader = false;

if(isLeader === true) {
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)

// ternary / 
price = isLeader === true ? 0 : price + 100;

if(isleader = true) {
    if(price > 1000) {
        price = price/2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}

// price = isLeader === true ? price > 1000 ? price / 2 :0 : price + 1000;
price = isLeader === true ?
            price > 1000 ? 
                 price / 2 :0
             : price + 1000;


// const isGamer = true;
// if (isGamer) {
//     console.log('will play game')
// }
// else {
//     console.log('will not play game')
// }

const isGamer = true;
if (!isGamer) {
    console.log('will play game')
}
else {
    console.log('will not play game')
}