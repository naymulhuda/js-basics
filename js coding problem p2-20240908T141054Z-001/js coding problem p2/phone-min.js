const prices = [23000, 22000, 45500, 67000, 30000, 10000];

function getMin(numbers){
    // console.log(numbers);
    let min = numbers[0];
    for(const num of numbers){
        console.log(num);
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest price is',cheap);