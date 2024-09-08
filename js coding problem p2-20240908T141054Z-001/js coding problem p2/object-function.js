const mobiles = [
    {name:'Samsung', price:20000, camera: '12mp', color:'white' },
    {name:'xaomi', price:32000, camera: '12mp', color:'white' },
    {name:'Iphone', price:120000, camera: '12mp', color:'white' },
    {name:'Vivo', price:10000, camera: '12mp', color:'white' },
    {name:'Readme', price:25000, camera: '12mp', color:'white' },
    {name:'Nokia', price:2000, camera: '3mp', color:'black' },
]

function cheapestObject(mobiles){
    console.log(mobiles);
    let min = mobiles[0];
    for(const mobile of mobiles){
        console.log(mobile);
        if(mobile.price < min.price){
            min = mobile;
        }
    }
    return min;
}

const cheap = cheapestObject(mobiles);
console.log('Cheapest mobile is',cheap);