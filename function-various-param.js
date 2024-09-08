
// For a given string tell me whether it has even number of characters or not

//first step
function evenSizeString(str){
    console.log(str);
}
evenSizeString('Dhaka');

console.log('----------second step------------')
//second step
function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
}
evenSizeString('Dhaka');
evenSizeString('Chattogram');

console.log('--------- third step----------')
//third step
function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size');
    }
    else{
        console.log('odd size');
    }
}
evenSizeString('Dhaka');
evenSizeString('Chattogram');

console.log('--------- fourth step----------')
//fourth step
function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}
// evenSizeString('Dhaka');
// evenSizeString('Chattogram');

// ------------------------------ 
function doubleOrTriple(number, doDouble){
    if(doDouble){
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

console.log('-------------------------------');

// function with Array
function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

npy

numberOfElements([34, 12, 54, 656, 67676, 5, 6])