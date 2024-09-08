/**
 * ---------------   Task - 1 ----------------
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

function lowestNumber (numbers){

    // console.log(numbers);
    let min = numbers[0];
    for(number of numbers){
        // console.log(number)
        if(min > number){
            min = number;
        }
    }
    return min;

}

const heights2 = [167, 190, 120, 165, 137];
const lownumber = lowestNumber(heights2);
// console.log('lowest number is', lownumber);

/**
 * ---------------   Task - 2 ----------------
 * Find the friend with the smallest name.
 * const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smalltName (names) {
   console.log(names);
   for(item of names){
    console.log(item);
   }
}

const smallestName = smalltName(heights3);
console.log(smallestName);


/**
 * ---------------   Task - 3 ----------------
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

const products = [
    {name : 'laptop', price: 200},
    {name : 'tablet', price: 100},
    {name : 'mobile', price: 400},
]

function calculateElectronicsBudget (products){
    console.log(products);
    let total = 0;
    for (const product of products){
        console.log(product);
        total = total + product.price;
    }
    return total;
}

const totalMoney = calculateElectronicsBudget(products);
console.log('total cost will be',totalMoney);




/**
 * ---------------   Task - 4 ----------------
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 */

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice (phones){
        console.log(phones);
        let sum = 0;
        for(const phone of phones){
            console.log(phone);
            sum = sum + phone.price;
            console.log('sum is', sum);
        }
        const size = phones.length;
        console.log('size is', size);
        const average = sum / size;
        return average;
    }

    const average = findAveragePhonePrice(phones);
    console.log('average price is', average);





/**
 * ---------------   Task - 5 ----------------
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 */