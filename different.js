// odd numbers

// for(let i=0; i < 20; i++) {
//     if(i%2===1){
//         console.log(i);
//     }
// }

// for(let n=0; n < 20; n++) {
//     if(n%2!==0){
//         console.log(n);
//     }
// }
// for(let n=1; n < 20; n+=2) {
//     console.log(n);
// }

//  give me list of numbers between 1 to 30 divisable by 5

// for(let i = 1; i<=30; i++) {
//    if(i % 5 == 0) {
//     console.log(i);
//    }
// }

//  give me list of numbers between 1 to 30 divisable by 3

// for(let i = 1; i<=30; i++) {
//    if(i % 3 == 0) {
//     console.log(i);
//    }
// }

//  give me list of numbers between 1 to 30 divisable by 3 and 5

// for(let i = 1; i<=30; i++) {
//    if(i % 3 == 0 || i % 5 == 0) {
//     console.log(i);
//    }
// }

// for(let i = 1; i<=30; i++) {
//    if(i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//    }
// }


// give me the sum of numbers thata re divisible by 3
let total = 0;
for(let i = 1; i<=50; i++) {
    if(i % 3 === 0) {
        console.log(i);
        total = total + i;
        //for step by step
        console.log('total', total);
    }
}
console.log('total of the numbers',total);