/**
 * Year is a leap year if it is divisable by 4
 */

function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    }
    else {
        return false
    }
}

const leapYear = isLeapYear(2025);
// console.log(leapYear);


/**
 * 1.The year is  a leap year if it is not divisable by 100 and  divisable by 4
 * 2
 */

function isLeapYear2(year){
if(year % 100 !== 0 && year % 4 === 0) {
    return true;
}
else if (year % 100 === 0 && year % 400 === 0){
    return true;
}
else {
    return false;
}
}

const isLeap1 = isLeapYear2(2377)
console.log(isLeap1)
const isLeap3 = isLeapYear2(4000)
console.log(isLeap3)