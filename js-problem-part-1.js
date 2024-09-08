// convert inch to foot
// 12 inch 1 feet

function inchToFoot(inch){
   const feet = inch / 12;
   return feet;
}

const hisHeight = inchToFoot(144);
// console.log(hisHeight);

// ------------

function inchToFoot2 (inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const feetRemains = inch % 12;
    const result = feetNumber + ' feet' + feetRemains + ' inch';
    return result;
}
const shuvoHeight2 = inchToFoot2(77);
// console.log(shuvoHeight2);


/** Miles to Killomiteres */

function mileToKilo(miles){
    const kilo = miles * 1.60934;
    return kilo;
}

/** Miles to Killomiteres */
function kiloToMiles(kilo){
    const miles = kilo / 0.62137119 ;
    return miles;
}

