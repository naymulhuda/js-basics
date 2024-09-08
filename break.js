// for(let i = 0; i< 250; i++) {
//     console.log(i);
//     if(i >= 55){
//         break;
//     }
// }

// Reverse

let n = 54;
while(n > 25){
    console.log(n);
    if(n < 40){
        break;
    }
    n--;
}


let i = 0;
while (i < 50) {
  if(i % 5 !== 0) {
    continue;
  }
  console.log(i);
  i++
}