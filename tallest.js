const heights = [45, 65, 45, 54, 98, 86, 54, 43, 34];

function getMax(numbers){
    console.log(numbers);
    let max = numbers[0];
    for(const number of numbers){
       console.log(Number);
       if(number > max){
        max = number;
       }
    }
    return max;
}


const max = getMax(heights);
console.log('max value is', max);