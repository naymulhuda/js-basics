/** --------------- Task -1 --------------- */
// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFahr(cel){
  const Fahrenheit = cel*9/5+32;
  return Fahrenheit;
}

const celsiusToFarenheight = celToFahr(3);
console.log(celsiusToFarenheight);
