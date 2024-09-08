const products = [
    {name : 'shampoo', price: 200, quantity: 5},
    {name : 'chiruni', price: 100, quantity: 3},
    {name : 'conditioner', price: 400, quantity: 2},
    {name : 'cream', price: 650, quantity: 4},
]

function cartTotal (products){
    console.log(products);
    let sum = 0;
    for(const product of products){
        console.log(product);
        const everyProductCost = product.price * product.quantity;
        sum = sum + everyProductCost;
    }
    return sum;
}

const shoppingCost = cartTotal(products);
console.log('shopping total is', shoppingCost);