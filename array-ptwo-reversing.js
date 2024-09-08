const numbers = [1, 2, 4, 6, 7, 3, 5, 8];

// console.log(numbers);

// numbers.reverse();
// const reversed = numbers.reverse();
// console.log(reversed);

// console.log(numbers);

// With For Of Loop
const rev_numbers = [];

for(const num of numbers){
    console.log(num)
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

// With For Loop
const reversed_numbers = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    rev_numbers.unshift(num);
}

// reverse side
const reverse_numbers = [];
for(let i = numbers.length - 1; i >= 0; i--){
    const num =  numbers[i];
    console.log(num);
    reverse_numbers.push(num);
}
console.log(reverse_numbers)