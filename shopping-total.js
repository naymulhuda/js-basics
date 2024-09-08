

const products = [
    {name : 'shampoo', price: 200},
    {name : 'chiruni', price: 100},
    {name : 'conditioner', price: 400},
    {name : 'cream', price: 150},
]

function getTotal (products){
    // console.log(products);
    let sum = 0;
    for(const product of products){
        console.log(product);
        sum = sum + product.price;
    }
    return sum;
}

const total = getTotal(products);
console.log('shopping total cost is',total);